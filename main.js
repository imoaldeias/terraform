// main.js

import { navigateTo, renderRoute } from './router.js';
import { loadSiteData, appData } from './content_data.js';



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
        const count = favs.length;

        const counter = document.getElementById('fav-count');
        if (counter) counter.innerText = count;

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
   FILTROS
===================================================== */

function applyFilters() {

    const locationFilter = document.getElementById('filter-location')?.value;
    const priceLimit = document.getElementById('filter-price')?.value;
    const type = document.getElementById('filter-type')?.value;
    const landAreaLimit = document.getElementById('filter-land')?.value;
    const buildAreaLimit = document.getElementById('filter-build')?.value;
    const roomsLimit = document.getElementById('filter-rooms')?.value;

    const filtered = appData.properties.filter(p => {

        if (locationFilter !== 'all' && p.location !== locationFilter) return false;

        if (priceLimit !== 'all') {
            if (priceLimit === 'max') {
                if (p.priceValue <= 2500000) return false;
            } else {
                if (p.priceValue > parseInt(priceLimit)) return false;
            }
        }

        if (type !== 'all' && p.tipologia !== type) return false;

        if (landAreaLimit !== 'all') {
            if (landAreaLimit === 'max') {
                if (p.areaTerreno <= 50000) return false;
            } else {
                if (p.areaTerreno > parseInt(landAreaLimit)) return false;
            }
        }

        if (buildAreaLimit !== 'all') {
            if (buildAreaLimit === 'max') {
                if (p.areaConstruida <= 600) return false;
            } else {
                if (p.areaConstruida > parseInt(buildAreaLimit)) return false;
            }
        }

        if (roomsLimit !== 'all' && p.quartos < parseInt(roomsLimit)) return false;

        return true;
    });

    const listContainer = document.getElementById('properties-list');

    if (listContainer) {
        import('./component_properties.js').then(module => {
            listContainer.innerHTML = module.renderPropertyCards(filtered);

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

    const listContainer = document.getElementById('properties-list');

    if (listContainer) {
        import('./component_properties.js').then(module => {
            listContainer.innerHTML = module.renderPropertyCards(appData.properties);

            if (window.lucide) lucide.createIcons();
            FavManager.updateUI();
        });
    }
}



/* =====================================================
   FILTROS AUTO-HIDE AO SCROLL
===================================================== */

let lastScrollY = 0;

function initFiltersAutoHide() {

    window.addEventListener('scroll', () => {

        const filters = document.getElementById('filters-bar');
        if (!filters) return;

        const currentScroll = window.scrollY;

        if (currentScroll > 150 && currentScroll > lastScrollY) {
            // Scroll para baixo
            filters.style.opacity = '0';
            filters.style.transform = 'translateY(-10px)';
            filters.style.pointerEvents = 'none';
        } else {
            // Scroll para cima
            filters.style.opacity = '1';
            filters.style.transform = 'translateY(0)';
            filters.style.pointerEvents = 'auto';
        }

        lastScrollY = currentScroll;
    });
}



/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener('DOMContentLoaded', async () => {

    try {

        document.getElementById('app').innerHTML =
            '<div class="py-40 text-center text-gray-400 font-light">A carregar ativos...</div>';

        await loadSiteData();

        renderRoute();

        FavManager.updateUI();

        initFiltersAutoHide(); // 🔥 importante

    } catch (error) {

        console.error('Erro ao carregar dados:', error);

        document.getElementById('app').innerHTML =
            '<div class="py-40 text-center text-red-500 font-light">Erro ao carregar propriedades.</div>';
    }

});



/* =====================================================
   LISTENER GLOBAL
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

    const favBtn = e.target.closest('[data-fav-id]');
    if (favBtn) {
        e.stopPropagation();
        FavManager.toggleFav(parseInt(favBtn.dataset.favId));
    }

});