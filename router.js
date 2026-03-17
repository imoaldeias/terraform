// router.js

import { renderHero }                                    from './component_hero.js';
import { renderProperties, initProperties }              from './component_properties.js';
import { renderSell, initSell }                          from './component_sell.js';
import { renderInvest, initInvest }                      from './component_invest.js';
import { renderComplexInvest, initComplexInvest }        from './component_complexinvest.js';
import { renderPropertyDetail, initPropertyDetail }      from './component_property_detail.js';
import { FavManager }                                    from './main.js';

const app = document.getElementById('app');

/* ─────────────────────────────────────────────
   Navigate: just update the URL hash.
───────────────────────────────────────────── */
export function navigateTo(route) {
    window.location.hash = route;
}

/* ─────────────────────────────────────────────
   Highlight the active nav link.
───────────────────────────────────────────── */
function highlightNav(hash) {
    const route = hash.startsWith('property-') ? 'properties' : hash;
    document.querySelectorAll('.nav-link, .mobile-nav-link, .footer-link').forEach(el => {
        el.style.fontWeight = '';
    });
    document.querySelectorAll(`.nav-link[data-route="${route}"], .mobile-nav-link[data-route="${route}"]`).forEach(el => {
        el.style.fontWeight = '600';
    });
}

/* ─────────────────────────────────────────────
   Render whatever the current hash says.
───────────────────────────────────────────── */
export function renderRoute() {
    const rawHash = window.location.hash.replace('#', '');
    const hash = rawHash || 'properties';
    let content = '';

    switch (hash) {
        case 'home':          content = renderHero();           break;
        case 'properties':    content = renderProperties();     break;
        case 'sell':          content = renderSell();           break;
        case 'invest':        content = renderInvest();         break;
        case 'complexinvest': content = renderComplexInvest();  break;
        default:
            if (hash.startsWith('property-')) {
                content = renderPropertyDetail(hash.replace('property-', ''));
            } else {
                content = renderProperties();
            }
    }

    // Fade out → swap content → fade in
    app.style.transition = 'opacity 0.15s ease';
    app.style.opacity = '0';

    setTimeout(() => {
        app.innerHTML = DOMPurify.sanitize(content);
        app.style.opacity = '1';

        if (window.lucide) lucide.createIcons();
        FavManager.updateUI();
        highlightNav(hash);

        // Each component owns its own init logic
        if (hash === 'properties' || rawHash === '')  initProperties();
        if (hash === 'invest')                        initInvest();
        if (hash === 'complexinvest')                 initComplexInvest();
        if (hash === 'sell')                          initSell();
        if (hash.startsWith('property-'))             initPropertyDetail(hash.replace('property-', ''));

    }, 150);
}

/* ─────────────────────────────────────────────
   Listen for URL hash changes
───────────────────────────────────────────── */
window.addEventListener('hashchange', renderRoute);