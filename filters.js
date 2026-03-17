// filters.js
// ─────────────────────────────────────────────────────────────────────────────
// Owns ALL filter / sort / pagination logic.
// Imported by both main.js and router.js with NO circular dependency.
// ─────────────────────────────────────────────────────────────────────────────

import { appData } from './content_data.js';
import { renderPropertyCards } from './component_properties.js';

/* =====================================================
   STATE
===================================================== */

let currentSort = 'default';
let currentPage = 1;
const ITEMS_PER_PAGE = 12;
let currentFilteredList = [];

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

    if (currentSort === 'area-asc') {
        sorted.sort((a, b) => a.areaTerreno - b.areaTerreno);
    }

    if (currentSort === 'area-desc') {
        sorted.sort((a, b) => b.areaTerreno - a.areaTerreno);
    }

    if (currentSort === 'rooms-asc') {
        sorted.sort((a, b) => a.quartos - b.quartos);
    }

    if (currentSort === 'rooms-desc') {
        sorted.sort((a, b) => b.quartos - a.quartos);
    }

    return sorted;
}

/* =====================================================
   PAGINATION UI
===================================================== */

function renderPaginationUI(totalPages) {
    if (totalPages <= 1) return '';

    let html = `<div class="flex justify-center gap-3 mt-16 text-sm">`;

    html += `
        <button
            ${currentPage === 1 ? 'disabled' : ''}
            class="px-4 py-2 border border-gray-300 ${currentPage === 1 ? 'opacity-40 cursor-not-allowed' : 'hover:border-black'}"
            data-page="prev"
        >
            ‹ Anterior
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
            Seguinte ›
        </button>
    `;

    html += `</div>`;
    return html;
}

/* =====================================================
   RENDER PAGINATED LIST
===================================================== */

export function renderPaginatedProperties(list) {
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
}

/* =====================================================
   APPLY FILTERS  (called by main.js click handler
   AND by router.js after rendering the properties page)
===================================================== */

export function applyFilters() {
    const location = document.getElementById('filter-location')?.value;
    const price    = document.getElementById('filter-price')?.value;
    const type     = document.getElementById('filter-type')?.value;
    const land     = document.getElementById('filter-land')?.value;
    const build    = document.getElementById('filter-build')?.value;
    const rooms    = document.getElementById('filter-rooms')?.value;

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

    // Reset to first page on every new filter run
    currentPage = 1;
    currentFilteredList = filtered;

    renderPaginatedProperties(applySorting(currentFilteredList));
}

/* =====================================================
   CLEAR FILTERS
===================================================== */

export function clearFilters() {
    ['filter-location', 'filter-price', 'filter-type',
     'filter-land', 'filter-build', 'filter-rooms'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = 'all';
    });

    currentSort = 'default';

    const sortBtn = document.getElementById('btn-sort');
    if (sortBtn) sortBtn.value = 'default';

    applyFilters();
}

/* =====================================================
   SORT CYCLE  (called by main.js click handler)
===================================================== */

export function cycleSort() {
    const select = document.getElementById('btn-sort');
    if (select) {
        currentSort = select.value;
    }
    if (currentFilteredList.length === 0) {
        currentFilteredList = [...appData.properties];
    }
    renderPaginatedProperties(applySorting(currentFilteredList));
}

/* =====================================================
   PAGINATION CLICK  (called by main.js click handler)
===================================================== */

export function handlePageClick(action) {
    const finalList = applySorting(currentFilteredList);
    const totalPages = Math.ceil(finalList.length / ITEMS_PER_PAGE);

    if (action === 'prev')       currentPage--;
    else if (action === 'next')  currentPage++;
    else                         currentPage = parseInt(action);

    if (currentPage < 1)           currentPage = 1;
    if (currentPage > totalPages)  currentPage = totalPages;

    renderPaginatedProperties(finalList);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
