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
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

            ${properties.map(p => `

                <div class="group cursor-pointer transition-all duration-300 hover:-translate-y-1"
                     data-route="property-${p.id}">

                    <!-- IMAGEM -->
                    <div class="relative aspect-square overflow-hidden bg-gray-100">
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
                    <div style="background:#F0EEEA; padding:14px 16px 12px;">
                        <div style="display:flex; justify-content:space-between; align-items:baseline; margin:0 0 10px 0;">
                            <span style="font-family:'Instrument Sans',sans-serif; font-size:0.85rem; color:#2F3526;">${p.title}</span>
                            <span style="font-family:'Instrument Sans',sans-serif; font-size:0.85rem; color:#2F3526;">${p.location}</span>
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
        <section class="pt-24 pb-32">
            <div class="max-w-7xl mx-auto px-6">

            <div class="flex justify-end mb-6 lg:hidden">
                <button
                    id="btn-toggle-filters"
                    class="border border-gray-300 rounded-sm px-3 py-1 transition hover:border-black"
                    style="font-size:0.75rem; letter-spacing:0.08em;"
                >
                    Filtros ▾
                </button>
            </div>

            <div id="filters-bar"
                class="hidden lg:grid mb-12 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">

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
                <div class="col-span-full flex flex-col sm:flex-row gap-4 mt-2">

                    <button
                        id="btn-apply-filters"
                        class="border border-black px-6 py-2 hover:bg-black hover:text-white transition duration-300"
                    >
                        Aplicar
                    </button>

                    <button
                        id="btn-clear-filters"
                        class="border border-black px-6 py-2 hover:bg-black hover:text-white transition duration-300"
                    >
                        Limpar
                    </button>

                    <button
                        id="btn-sort"
                        class="border border-black px-6 py-2 hover:bg-black hover:text-white transition duration-300"
                    >
                        Ordenar: —
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
                class="label mb-2"
            >
                ${label}
            </label>

            <select
                id="${id}"
                class="border-b border-gray-300 bg-transparent py-2 px-1 focus:outline-none focus:border-black transition"
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