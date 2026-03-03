import { appData } from './content_data.js';

/* =====================================================
   CARDS DAS PROPRIEDADES
===================================================== */

export function renderPropertyCards(properties) {

    if (!properties || properties.length === 0) {
        return `
            <div class="text-center py-24 text-gray-400 text-base font-light leading-relaxed">
                Nenhuma propriedade encontrada com os filtros selecionados.
            </div>
        `;
    }

    return `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

            ${properties.map(p => `
                
                <div class="group cursor-pointer transition-all duration-300 hover:-translate-y-1"
                     data-route="property-${p.id}">
                    
                    <!-- IMAGEM QUADRADA -->
                    <div class="relative aspect-square overflow-hidden bg-gray-100">
                        <img 
                            src="${p.image}" 
                            alt="${p.title}"
                            class="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                        >

                        <button 
                            data-fav-id="${p.id}"
                            class="absolute top-4 right-4 text-white"
                        >
                            <i data-lucide="heart" class="w-5 h-5"></i>
                        </button>
                    </div>

<!-- CONTEÚDO -->
<div class="pt-4 space-y-2 text-[15px] font-light text-gray-700">

    <!-- LINHA 1 -->
    <div class="flex justify-between pt-1 border-t border-gray-100 text-gray-600">
        <span>${p.title}</span>
        <span>${p.location}</span>
    </div>

    <!-- LINHA 2 -->
    <div class="flex justify-between pt-1 border-t border-gray-100 text-gray-600">
        <span>${p.price}</span>
        <span>${p.tipologia}</span>
    </div>

    ${p.quartos > 0 ? `
    <div class="flex justify-between pt-1 border-t border-gray-100 text-gray-600">
        <span>${p.areaTerreno} ha</span>
        <span>${p.quartos === 1 ? '1 quarto' : `${p.quartos} quartos`}</span>
    </div>
    ` : `
    <div class="flex justify-between pt-1 border-t border-gray-100 text-gray-600">
        <span>${p.areaTerreno} ha</span>
    </div>
    `}

</div>
                </div>

            `).join('')}

        </div>
    `;
}



/* =====================================================
   PÁGINA COMPLETA DE PROPRIEDADES
===================================================== */

export function renderProperties(filteredList = null) {

    const properties = filteredList || appData.properties;

    return `
        <section class="pt-12 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">

            <div class="flex justify-end mb-6 lg:hidden">
                <button 
                    id="btn-toggle-filters"
                    class="border border-gray-300 rounded-sm px-5 py-2 text-xs uppercase tracking-widest text-gray-600 hover:border-black hover:text-black transition"
                >
                    Filtros ▾
                </button>
            </div>

                        <div id="filters-bar"
                class="hidden lg:grid mb-12 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">

                ${renderSelect('filter-location', 'Localização',
                    [...new Set(appData.properties.map(p => p.location))])}

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
                        { value: '200', label: 'Até 200 m²' },
                        { value: '500', label: 'Até 500 m²' },
                        { value: 'max', label: 'Mais de 500 m²' }
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
                        class="border border-black px-5 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-black hover:text-white transition duration-300"
                    >
                        Aplicar
                    </button>

                    <button 
                        id="btn-clear-filters"
                        class="border border-gray-300 px-5 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-gray-100 transition duration-300"
                    >
                        Limpar
                    </button>

                    <button 
                        id="btn-sort"
                        class="border border-gray-300 rounded-sm px-5 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-gray-600 hover:border-black hover:text-black transition duration-300"
                    >
                        Ordenar: —
                    </button>

                </div>

            </div>

            <div id="properties-list">
                ${renderPropertyCards(properties)}
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
                class="text-[11px] uppercase tracking-[0.18em] font-medium text-gray-400"
            >
                ${label}
            </label>

            <select 
                id="${id}"
                class="border-b border-gray-200 bg-transparent py-2 px-1 text-sm font-light"
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