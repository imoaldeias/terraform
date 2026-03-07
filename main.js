// main.js

import { navigateTo, renderRoute } from './router.js';
import { loadSiteData } from './content_data.js';
import { applyFilters, clearFilters, cycleSort, handlePageClick } from './filters.js';

// Re-export applyFilters so router.js can import it directly from here
// if you prefer — but router.js now imports from filters.js directly.


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
   INIT
===================================================== */

document.addEventListener('DOMContentLoaded', async () => {
    try {
        document.getElementById('app').innerHTML =
            '<div class="py-40 text-center text-gray-400">A carregar ativos...</div>';

        await loadSiteData();

        renderRoute();
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

    // ── FAVORITOS ──────────────────────────────────
    const favBtn = e.target.closest('[data-fav-id]');
    if (favBtn) {
        e.stopPropagation();
        FavManager.toggleFav(parseInt(favBtn.dataset.favId));
        return;
    }

    // ── ROUTES ─────────────────────────────────────
    const routeBtn = e.target.closest('[data-route]');
    if (routeBtn) {
        e.preventDefault();
        navigateTo(routeBtn.dataset.route);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    // ── FILTERS ────────────────────────────────────
    if (e.target.closest('#btn-apply-filters')) {
        applyFilters();
        return;
    }

    if (e.target.closest('#btn-clear-filters')) {
        clearFilters();
        return;
    }

    // ── SORT ───────────────────────────────────────
    if (e.target.closest('#btn-sort')) {
        cycleSort();
        return;
    }

    // ── MOBILE FILTER TOGGLE ───────────────────────
    if (e.target.closest('#btn-toggle-filters')) {
        const bar = document.getElementById('filters-bar');
        const closeBtn = document.getElementById('btn-close-filters');
        if (bar) bar.classList.toggle('hidden');
        if (closeBtn) closeBtn.classList.toggle('hidden');
        return;
    }

    if (e.target.closest('#btn-close-filters')) {
        const bar = document.getElementById('filters-bar');
        const closeBtn = document.getElementById('btn-close-filters');
        if (bar) bar.classList.add('hidden');
        if (closeBtn) closeBtn.classList.add('hidden');
        return;
    }

    // ── PAGINATION ─────────────────────────────────
    const pageBtn = e.target.closest('[data-page]');
    if (pageBtn) {
        handlePageClick(pageBtn.dataset.page);
        return;
    }
});
