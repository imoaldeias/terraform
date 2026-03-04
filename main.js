// main.js

import { navigateTo, renderRoute } from './router.js';
import { loadSiteData, appData } from './content_data.js';
import { renderPropertyCards } from './component_properties.js';


/* =====================================================
   ESTADO GLOBAL
===================================================== */

let currentSort = 'default';
let currentPage = 1;
const ITEMS_PER_PAGE = 12;
let currentFilteredList = [];


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
    if (icon) icon.setAttribute('fill', 'currentColor');
} else {
    btn.classList.remove('text-red-500');
    if (icon) icon.setAttribute('fill', 'none');
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

export function applyFilters() {

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

    // 🔁 Reset to first page when filtering
currentPage = 1;

// 🔥 Store filtered list globally
currentFilteredList = filtered;

// Apply sorting AFTER storing
const finalList = applySorting(currentFilteredList);

renderPaginatedProperties(finalList);

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

function renderPaginatedProperties(list) {

    const container = document.getElementById('properties-list');
    if (!container) return;

    const totalPages = Math.ceil(list.length / ITEMS_PER_PAGE);
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    const paginated = list.slice(start, end);

    container.innerHTML =
        renderPropertyCards(paginated) +
        renderPaginationUI(totalPages);

    if (window.lucide) lucide.createIcons();
    FavManager.updateUI();
}

function renderPaginationUI(totalPages) {

    if (totalPages <= 1) return '';

    let html = `<div class="flex justify-center gap-3 mt-16 text-sm">`;

    html += `
        <button 
            ${currentPage === 1 ? 'disabled' : ''}
            class="px-4 py-2 border border-gray-300 ${currentPage === 1 ? 'opacity-40 cursor-not-allowed' : 'hover:border-black'}"
            data-page="prev"
        >
            ‹ Prev
        </button>
    `;

    for (let i = 1; i <= totalPages; i++) {
        html += `
            <button 
                class="px-4 py-2 border ${currentPage === i ? 'bg-black text-white border-black' : 'border-gray-300 hover:border-black'}"
                data-page="${i}"
            >
                ${i}
            </button>
        `;
    }

    html += `
        <button 
            ${currentPage === totalPages ? 'disabled' : ''}
            class="px-4 py-2 border border-gray-300 ${currentPage === totalPages ? 'opacity-40 cursor-not-allowed' : 'hover:border-black'}"
            data-page="next"
        >
            Next ›
        </button>
    `;

    html += `</div>`;

    return html;
}

/* =====================================================
   INIT
===================================================== */

document.addEventListener('DOMContentLoaded', async () => {

    try {

        document.getElementById('app').innerHTML =
            '<div class="py-40 text-center text-gray-400">A carregar ativos...</div>';

        await loadSiteData();

        // 🔥 Initialize filtered list
        currentFilteredList = appData.properties;

renderRoute();

// Render first page immediately

FavManager.updateUI();

    } catch (error) {

        console.error('Erro ao carregar dados:', error);

        document.getElementById('app').innerHTML =
            '<div class="py-40 text-center text-red-500">Erro ao carregar propriedades.</div>';
    }

});


/* =====================================================
   GLOBAL CLICK LISTENER
===================================================== */

document.body.addEventListener('click', e => {

    // ================================
    // FAVORITOS (FIRST - very important)
    // ================================
    const favBtn = e.target.closest('[data-fav-id]');
    if (favBtn) {
        e.stopPropagation();
        FavManager.toggleFav(parseInt(favBtn.dataset.favId));
        return;
    }

    // ================================
    // ROUTES (card navigation)
    // ================================
    const routeBtn = e.target.closest('[data-route]');
    if (routeBtn) {
        e.preventDefault();
        navigateTo(routeBtn.dataset.route);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    // ================================
    // APPLY FILTERS
    // ================================
    if (e.target.closest('#btn-apply-filters')) {
        applyFilters();
        return;
    }

    if (e.target.closest('#btn-clear-filters')) {
        clearFilters();
        return;
    }

    // ================================
    // SORT
    // ================================
    if (e.target.closest('#btn-sort')) {

        if (currentSort === 'default') currentSort = 'price-asc';
        else if (currentSort === 'price-asc') currentSort = 'price-desc';
        else currentSort = 'default';

        const btn = document.getElementById('btn-sort');

        if (btn) {
            if (currentSort === 'default') btn.innerText = 'Ordenar: —';
            if (currentSort === 'price-asc') btn.innerText = 'Ordenar: Preço ↑';
            if (currentSort === 'price-desc') btn.innerText = 'Ordenar: Preço ↓';
        }

        applyFilters();
        return;
    }

    // ================================
    // PAGINATION
    // ================================
    const pageBtn = e.target.closest('[data-page]');
    if (pageBtn) {

        const action = pageBtn.dataset.page;

        // Use stored filtered list instead of full dataset
        const finalList = applySorting(currentFilteredList);
        const totalPages = Math.ceil(finalList.length / ITEMS_PER_PAGE);

        if (action === 'prev') currentPage--;
        else if (action === 'next') currentPage++;
        else currentPage = parseInt(action);

        if (currentPage < 1) currentPage = 1;
        if (currentPage > totalPages) currentPage = totalPages;

        renderPaginatedProperties(finalList);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

});