// router.js

import { renderHero }           from './component_hero.js';
import { renderProperties }     from './component_properties.js';
import { renderSell }           from './component_sell.js';
import { renderPropertyDetail } from './component_property_detail.js';
import { applyFilters }         from './filters.js';      // ← from filters.js, NOT main.js
import { FavManager }           from './main.js';         // ← only FavManager, no filter logic

const app = document.getElementById('app');

/* ─────────────────────────────────────────────
   Navigate: just update the URL hash.
   The hashchange listener below does the render.
───────────────────────────────────────────── */
export function navigateTo(route) {
    window.location.hash = route;
}

/* ─────────────────────────────────────────────
   Render whatever the current hash says.
───────────────────────────────────────────── */
export function renderRoute() {
    const hash = window.location.hash.replace('#', '') || 'properties';
    let content = '';

    switch (hash) {
        case 'home':
            content = renderHero();
            break;

        case 'properties':
            content = renderProperties();
            break;

        case 'sell':
            content = renderSell();
            break;

        case 'contact':
            // TODO: replace with your real contact component when ready
            content = renderSell();
            break;

        default:
            if (hash.startsWith('property-')) {
                const id = hash.replace('property-', '');
                content = renderPropertyDetail(id);
            } else {
                content = renderProperties();
            }
    }

    // Fade out → swap content → fade in
    app.style.opacity = '0';

    setTimeout(() => {
        app.innerHTML = content;
        app.style.opacity = '1';

        // After rendering the properties page, wire up filters and load cards
        if (hash === 'properties') {
            // Attach change listeners to filter selects (only once per render)
            document.querySelectorAll('#filters-bar select').forEach(sel => {
                sel.addEventListener('change', applyFilters);
            });

            // Render the initial unfiltered list
            applyFilters();
        }

        if (window.lucide) lucide.createIcons();

        FavManager.updateUI();

    }, 150);
}

/* ─────────────────────────────────────────────
   Listen for URL hash changes
───────────────────────────────────────────── */
window.addEventListener('hashchange', renderRoute);
