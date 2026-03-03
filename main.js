// main.js

import { navigateTo, renderRoute } from './router.js';
import { loadSiteData, appData } from './content_data.js';


/* =====================================================
   ESTADO GLOBAL
===================================================== */

let currentSort = 'default';


/* =====================================================
   FAVORITOS
===================================================== */

export const FavManager = {

    key: 'terra_favs_v2',

    getFavs() {
        return JSON.parse(localStorage.getItem(this.key) || '[]');
    },

    toggleFav(id) {

        let favs = this.getFavs();
        const index = favs.indexOf(id);

        if (index > -1) {
            favs.splice(index, 1);
        } else {
            favs.push(id);
        }

        localStorage.setItem(this.key, JSON.stringify(favs));
        this.updateUI();
    },

    updateUI() {

        const favs = this.getFavs();
        const counter = document.getElementById('fav-count');
        if (counter) counter.innerText = favs.length;

        document.querySelectorAll('[data-fav-id]').forEach(btn => {

            const id = parseInt(btn.dataset.favId);
            const icon = btn.querySelector('i');

            if (favs.includes(id)) {
                btn.classList.add('text-red-500');
                if (icon) icon.style.fill = 'currentColor';
            } else {
                btn.classList.remove('text-red-500');
                if (icon) icon.style.fill = 'none';
            }
        });
    }
};


/* =====================================================
   SORTING
===================================================== */

function applySorting(properties) {

    const sorted = [...properties];

    if (currentSort === 'price-asc') {
        sorted.sort((a, b) => {
            if (a.priceValue === null) return 1;
            if (b.priceValue === null) return -1;
            return a.priceValue - b.priceValue;
        });
    }

    if (currentSort === 'price-desc') {
        sorted.sort((a, b) => {
            if (a.priceValue === null) return 1;
            if (b.priceValue === null) return -1;
            return b.priceValue - a.priceValue;
        });
    }

    return sorted;
}


/* =====================================================
   FILTROS
===================================================== */

function applyFilters() {

    const location = document.getElementById('filter-location')?.value;
    const price = document.getElementById('filter-price')?.value;
    const type = document.getElementById('filter-type')?.value;
    const land = document.getElementById('filter-land')?.value;
    const build = document.getElementById('filter-build')?.value;
    const rooms = document.getElementById('filter-rooms')?.value;

    let filtered = appData.properties.filter(p => {

        if (location !== 'all' && p.locationNormalized !== location.toLowerCase()) {
            return false;
        }

        if (price !== 'all') {

            if (p.priceValue === null) return false;

            if (price.endsWith('+')) {
                const min = parseInt(price.replace('+', ''));
                if (p.priceValue < min) return false;
            } else {
                if (p.priceValue > parseInt(price)) return false;
            }
        }

        if (type !== 'all' && p.tipologia !== type) return false;

        if (land !== 'all') {
            if (land === 'max') {
                if (p.areaTerreno <= 500) return false;
            } else {
                if (p.areaTerreno > parseInt(land)) return false;
            }
        }

        if (build !== 'all') {
            if (build === 'max') {
                if (p.areaConstruida <= 500) return false;
            } else {
                if (p.areaConstruida > parseInt(build)) return false;
            }
        }

        if (rooms !== 'all' && p.quartos < parseInt(rooms)) return false;

        return true;
    });

    const finalList = applySorting(filtered);

    const container = document.getElementById('properties-list');
    if (container) {
        import('./component_properties.js').then(module => {
            container.innerHTML = module.renderPropertyCards(finalList);
            if (window.lucide) lucide.createIcons();
            FavManager.updateUI();
        });
    }
}


function clearFilters() {

    const selects = [
        'filter-location',
        'filter-price',
        'filter-type',
        'filter-land',
        'filter-build',
        'filter-rooms'
    ];

    selects.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = 'all';
    });

    currentSort = 'default';

    const sortBtn = document.getElementById('btn-sort');
    if (sortBtn) sortBtn.innerText = 'Ordenar: —';

    applyFilters();
}


/* =====================================================
   INIT
===================================================== */

document.addEventListener('DOMContentLoaded', async () => {

    try {

        document.getElementById('app').innerHTML =
            '<div class="py-40 text-center text-gray-400 font-light">A carregar ativos...</div>';

        await loadSiteData();

        renderRoute();

        FavManager.updateUI();

    } catch (error) {

        console.error('Erro ao carregar dados:', error);

        document.getElementById('app').innerHTML =
            '<div class="py-40 text-center text-red-500 font-light">Erro ao carregar propriedades.</div>';
    }

});


/* =====================================================
   GLOBAL CLICK LISTENER
===================================================== */

document.body.addEventListener('click', e => {

    const routeBtn = e.target.closest('[data-route]');
    if (routeBtn) {
        e.preventDefault();
        navigateTo(routeBtn.dataset.route);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (e.target.closest('#btn-apply-filters')) {
        applyFilters();
    }

    if (e.target.closest('#btn-clear-filters')) {
        clearFilters();
    }

    // SORT
    if (e.target.closest('#btn-sort')) {

        if (currentSort === 'default') {
            currentSort = 'price-asc';
        } else if (currentSort === 'price-asc') {
            currentSort = 'price-desc';
        } else {
            currentSort = 'default';
        }

        const btn = document.getElementById('btn-sort');

        if (btn) {
            if (currentSort === 'default') btn.innerText = 'Ordenar: —';
            if (currentSort === 'price-asc') btn.innerText = 'Ordenar: Preço ↑';
            if (currentSort === 'price-desc') btn.innerText = 'Ordenar: Preço ↓';
        }

        applyFilters();
    }

    // 🔽🔼 TOGGLE FILTROS MOBILE
    if (e.target.closest('#btn-toggle-filters')) {
        const filters = document.getElementById('filters-bar');
        const btn = document.getElementById('btn-toggle-filters');

    if (filters.classList.contains('hidden')) {
        filters.classList.remove('hidden');
        filters.classList.add('grid'); // Garante que vira grid ao aparecer
        btn.innerText = 'Filtros ▴';
    } else {
        filters.classList.add('hidden');
        filters.classList.remove('grid'); 
        btn.innerText = 'Filtros ▾';
    }
}

    // FAVORITOS
    const favBtn = e.target.closest('[data-fav-id]');
    if (favBtn) {
        e.stopPropagation();
        FavManager.toggleFav(parseInt(favBtn.dataset.favId));
    }

});