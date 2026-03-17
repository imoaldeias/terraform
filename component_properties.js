import { appData } from './content_data.js';

/* =====================================================
   CARDS DAS PROPRIEDADES
===================================================== */

export function renderPropertyCards(properties) {

    if (!properties || properties.length === 0) {
        return `
            <div class="text-center py-24 opacity-60">
                Nenhuma propriedade encontrada com os filtros selecionados.
            </div>
        `;
    }

    return `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">

            ${properties.map(p => `

                <div class="group cursor-pointer transition-all duration-300 hover:-translate-y-1"
                     data-route="property-${p.id}" style="border-radius:4px; overflow:hidden;">

                    <!-- IMAGEM -->
                    <div class="relative overflow-hidden bg-gray-100" style="aspect-ratio:4/3;">
                        <img
                            src="${p.image}"
                            alt="${p.title}"
                            loading="lazy"
                            decoding="async"
                            class="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                        >

                        <!-- HEART -->
                        <button
                            data-fav-id="${p.id}"
                            class="absolute top-4 right-4 text-white"
                            style="background:none; border:none; padding:0; cursor:pointer;"
                        >
                            <i data-lucide="heart" class="w-5 h-5"></i>
                        </button>
                    </div>

                    <!-- ESTATE TAG -->
                    <div style="background:#EDE8E0; padding:14px 16px 12px; border-radius:0 0 4px 4px;">
                        <div style="display:flex; justify-content:space-between; align-items:baseline; margin:0 0 10px 0; gap:8px;">
                            <span style="font-family:'Instrument Sans',sans-serif; font-size:0.85rem; color:#2F3526; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${p.title}</span>
                            <span style="font-family:'Instrument Sans',sans-serif; font-size:0.85rem; color:#2F3526; flex-shrink:0;">${p.location}</span>
                        </div>
                        <div style="display:flex; justify-content:space-between; align-items:baseline; border-top:1px solid rgba(62,74,63,0.12); padding-top:8px;">
                            <span style="font-family:'Instrument Sans',sans-serif; font-size:0.85rem; color:#2F3526;">${p.price}</span>
                            <span style="font-family:'Instrument Sans',sans-serif; font-size:0.85rem; color:#2F3526;">${p.areaTerreno > 0 ? p.areaTerreno + ' ha' : p.areaConstruida + ' m²'}</span>
                        </div>
                    </div>

                </div>

            `).join('')}

        </div>
    `;
}

/* =====================================================
   PÁGINA COMPLETA DE PROPRIEDADES
===================================================== */

export function renderProperties() {

    return `
        <section class="pt-6 pb-16 lg:pt-20 lg:pb-32">
            <div class="max-w-7xl mx-auto px-4 lg:px-6">

                <!-- TOGGLE BUTTON — outside filters-bar so it stays visible -->
                <div style="margin-bottom:1rem;">
                    <button
    id="btn-toggle-filters"
    style="display:inline-block; font-size:0.78rem; border:1px solid black; padding:8px 16px; background:transparent; cursor:pointer;"
>
                        Filtros ▾
                    </button>
                </div>

                <!-- FILTERS BAR -->
                <div id="filters-bar"
    style="display:none; margin-bottom:2rem; grid-template-columns:repeat(2, 1fr); gap:1rem;">

                    ${renderSelect('filter-location', 'Localização',
                        [...new Set(appData.properties.map(p => p.locationNormalized))]
                            .map(loc => ({
                                value: loc,
                                label: loc.charAt(0).toUpperCase() + loc.slice(1)
                            }))
                    )}

                    ${renderSelect('filter-price', 'Preço',
                        [
                            { value: '500000', label: 'Até 500 000 €' },
                            { value: '1000000', label: 'Até 1 000 000 €' },
                            { value: '2500000', label: 'Até 2 500 000 €' },
                            { value: '5000000', label: 'Até 5 000 000 €' },
                            { value: '5000000+', label: 'Mais de 5 000 000 €' }
                        ])}

                    ${renderSelect('filter-type', 'Tipologia',
                        [...new Set(appData.properties.map(p => p.tipologia))])}

                    ${renderSelect('filter-land', 'Área Terreno (ha)',
                        [
                            { value: '1', label: 'Até 1 ha' },
                            { value: '10', label: 'Até 10 ha' },
                            { value: '50', label: 'Até 50 ha' },
                            { value: '100', label: 'Até 100 ha' },
                            { value: '500', label: 'Até 500 ha' },
                            { value: 'max', label: 'Mais de 500 ha' }
                        ])}

                    ${renderSelect('filter-build', 'Área Construída',
                        [
                            { value: '100', label: 'Até 100 m²' },
                            { value: '200', label: 'Até 200 m²' },
                            { value: '300', label: 'Até 300 m²' },
                            { value: 'max', label: 'Mais de 300 m²' }
                        ])}

                    ${renderSelect('filter-rooms', 'Quartos',
                        [
                            { value: '1', label: '1+' },
                            { value: '3', label: '3+' },
                            { value: '5', label: '5+' }
                        ])}

                    <!-- BOTÕES -->
                    <div style="grid-column: 1 / -1; display:flex; flex-wrap:wrap; gap:0.75rem; margin-top:0.5rem; align-items:center;">

                        <select
                            id="btn-sort"
                            class="border border-black px-4 py-2 bg-transparent hover:bg-black hover:text-white transition duration-300"
                            style="font-size:0.78rem; cursor:pointer;"
                        >
                            <option value="default">Ordenar —</option>
                            <option value="price-asc">Preço ↑</option>
                            <option value="price-desc">Preço ↓</option>
                            <option value="area-asc">Área ↑</option>
                            <option value="area-desc">Área ↓</option>
                            <option value="rooms-asc">Quartos ↑</option>
                            <option value="rooms-desc">Quartos ↓</option>
                        </select>

                        <button
                            id="btn-apply-filters"
                            class="border border-black px-4 py-2 hover:bg-black hover:text-white transition duration-300"
                            style="font-size:0.78rem;"
                        >
                            Aplicar
                        </button>

                        <button
                            id="btn-clear-filters"
                            class="border border-black px-4 py-2 hover:bg-black hover:text-white transition duration-300"
                            style="font-size:0.78rem;"
                        >
                            Limpar
                        </button>

                        <button
                            id="btn-close-filters"
                            style="font-size:0.78rem; border:1px solid black; padding:8px 16px; background:transparent; cursor:pointer;"
                        >
                            Fechar Filtros ✕
                        </button>

                    </div>

                </div>

                <div id="properties-list"></div>

            </div>
        </section>
    `;
}

/* =====================================================
   COMPONENTE AUXILIAR PARA SELECTS
===================================================== */

function renderSelect(id, label, options) {

    const normalizedOptions = options.map(opt => {
        if (typeof opt === 'string') {
            return { value: opt, label: opt };
        }
        return opt;
    });

    return `
        <div class="flex flex-col">

            <label
                for="${id}"
                class="label mb-1"
            >
                ${label}
            </label>

            <select
                id="${id}"
                class="border-b border-gray-300 bg-transparent py-1 px-1 focus:outline-none focus:border-black transition"
                style="font-size:0.78rem;"
            >
                <option value="all">Todos</option>

                ${normalizedOptions.map(opt => `
                    <option value="${opt.value}">
                        ${opt.label}
                    </option>
                `).join('')}

            </select>

        </div>
    `;
}

/* =====================================================
   INIT — wires up filters after render
===================================================== */

import { applyFilters, cycleSort } from './filters.js';

export function initProperties() {
    // Attach change listeners to filter selects
    document.querySelectorAll('#filters-bar select').forEach(sel => {
        sel.addEventListener('change', applyFilters);
    });

    // On mobile, start with filters hidden
    if (window.innerWidth < 768) {
        const bar      = document.getElementById('filters-bar');
        const closeBtn = document.getElementById('btn-close-filters');
        const openBtn  = document.getElementById('btn-toggle-filters');
        if (bar)      bar.style.display      = 'none';
        if (closeBtn) closeBtn.style.display = 'none';
        if (openBtn)  openBtn.style.display  = 'inline-block';
    }

    // Wire sort select
    const sortSelect = document.getElementById('btn-sort');
    if (sortSelect) sortSelect.addEventListener('change', cycleSort);

    // Render the initial unfiltered list
    applyFilters();
}