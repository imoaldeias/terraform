// router.js

import { renderHero } from './component_hero.js';
import { renderProperties } from './component_properties.js';
import { renderContact } from './component_contact.js';
import { renderSell } from './component_sell.js';
import { renderPropertyDetail } from './component_property_detail.js';

const app = document.getElementById('app');

/**
 * Atualiza o hash da URL.
 * Não renderiza diretamente.
 */
export function navigateTo(route) {
    window.location.hash = route;
}

/**
 * Renderiza com base no hash atual.
 * Esta função será chamada pelo main.js
 * depois de os dados estarem carregados.
 */
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
            content = renderContact();
            break;

        default:
            if (hash.startsWith('property-')) {
                const id = hash.replace('property-', '');
                content = renderPropertyDetail(id);
            } else {
                content = renderProperties();
            }
    }

    app.style.opacity = '0';

    setTimeout(() => {
        app.innerHTML = content;
        app.style.opacity = '1';

        if (window.lucide) lucide.createIcons();

        import('./main.js').then(m => m.FavManager.updateUI());
    }, 150);
}

/**
 * Escuta mudanças no hash.
 */
window.addEventListener('hashchange', renderRoute);