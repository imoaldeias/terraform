import { appData } from './content_data.js';

export function renderPropertyDetail(id) {
    const prop = appData.properties.find(p => p.id === parseInt(id));

    if (!prop) {
        return `
            <div class="py-40 text-center text-gray-500 l4">
                Propriedade não encontrada.
            </div>
        `;
    }

    const galleryImages = prop.gallery_ids
        ? prop.gallery_ids.split(',').map(img => img.trim())
        : [];

    const imagesToShow = galleryImages.length > 0
        ? galleryImages
        : [prop.image];

    return `
        <article class="bg-white min-h-screen">

            <!-- HERO IMAGE -->
            <div class="relative group">
                <div class="h-[70vh] w-full overflow-hidden bg-gray-100">
                    <img 
                        id="main-gallery-image" 
                        src="${imagesToShow[0]}" 
                        class="w-full h-full object-cover transition-all duration-700"
                    >
                </div>

                <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

                <div class="absolute top-8 left-8">
                    <button 
                        data-route="properties" 
                        class="flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full uppercase tracking-[0.25em] text-xs font-semibold hover:bg-white transition-all shadow-xl"
                    >
                        <i data-lucide="arrow-left" class="w-4 h-4"></i>
                        Voltar ao Portfólio
                    </button>
                </div>
            </div>

            <!-- GALLERY THUMBNAILS -->
            ${imagesToShow.length > 1 ? `
                <div class="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
                    <div class="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
                        ${imagesToShow.map((img, index) => `
                            <div 
                                class="flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden cursor-pointer border-2 
                                ${index === 0 ? 'border-white shadow-lg scale-105' : 'border-transparent opacity-70 hover:opacity-100'} 
                                transition-all"
                                onclick="
                                    document.getElementById('main-gallery-image').src='${img}';
                                    this.parentElement.querySelectorAll('div').forEach(d => 
                                        d.classList.remove('border-white','shadow-lg','scale-105','opacity-100')
                                    );
                                    this.classList.add('border-white','shadow-lg','scale-105','opacity-100');
                                "
                            >
                                <img src="${img}" class="w-full h-full object-cover">
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <!-- CONTENT -->
            <div class="max-w-7xl mx-auto px-6 pt-16 pb-32">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-20">
                    
                    <!-- LEFT COLUMN -->
                    <div class="lg:col-span-2">

                        <!-- HEADER -->
                        <div class="mb-16">
                            
                            <!-- Tipologia + Localização (L3) -->
                            <span class="text-xs uppercase tracking-[0.25em] font-semibold text-gray-500 block mb-6">
                                ${prop.tipologia} em ${prop.location}
                            </span>

                            <!-- Nome Propriedade (L1) -->
                            <h1 class="text-5xl font-serif font-light mb-10">
                                ${prop.title}
                            </h1>

                            <!-- META INFO -->
                            <div class="flex flex-wrap gap-12 py-10 border-y border-gray-100">

                                <div>
                                    <div class="text-xs uppercase tracking-[0.25em] font-semibold text-gray-400 mb-3">
                                        Terreno
                                    </div>
                                    <div class="text-base font-light leading-relaxed">
                                        ${(prop.areaTerreno / 10000).toLocaleString('pt-PT')} ha
                                    </div>
                                </div>

                                <div>
                                    <div class="text-xs uppercase tracking-[0.25em] font-semibold text-gray-400 mb-3">
                                        Construção
                                    </div>
                                    <div class="text-base font-light leading-relaxed">
                                        ${prop.areaConstruida} m²
                                    </div>
                                </div>

                                <div>
                                    <div class="text-xs uppercase tracking-[0.25em] font-semibold text-gray-400 mb-3">
                                        Quartos
                                    </div>
                                    <div class="text-base font-light leading-relaxed">
                                        ${prop.quartos || '-'}
                                    </div>
                                </div>

                                <div class="ml-auto text-right">
                                    <div class="text-xs uppercase tracking-[0.25em] font-semibold text-gray-400 mb-3">
                                        Valor
                                    </div>
                                    <div class="text-base font-light leading-relaxed">
                                        ${prop.price}
                                    </div>
                                </div>

                            </div>
                        </div>

                        <!-- DESCRIÇÃO -->
                        <div>
                            <h2 class="text-2xl font-serif font-light mb-8">
                                Memória Descritiva
                            </h2>

                            <div class="text-base font-light leading-relaxed text-gray-600 whitespace-pre-line">
                                ${prop.description || 'Informação sob consulta.'}
                            </div>
                        </div>

                    </div>

                    <!-- RIGHT COLUMN -->
                    <div class="lg:col-span-1">
                        <div class="bg-brand-900 p-12 rounded-[40px] sticky top-32 shadow-2xl text-white relative">

                            <h2 class="text-2xl font-serif font-light mb-6">
                                Solicitar Dossier
                            </h2>

                            <p class="text-base font-light leading-relaxed text-white/80 mb-12">
                                Tenha acesso aos detalhes técnicos, plantas e informação financeira confidencial deste ativo.
                            </p>

                            <button 
                                data-route="contact" 
                                class="w-full bg-white text-brand-900 py-5 rounded-2xl uppercase tracking-[0.25em] text-xs font-semibold hover:bg-brand-50 transition-all shadow-xl"
                            >
                                Contacto Reservado
                            </button>

                            <div class="mt-10 pt-8 border-t border-white/10 text-center">
                                <p class="text-xs uppercase tracking-[0.25em] font-semibold text-white/40">
                                    Ref: TP-${prop.id}
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </article>
    `;
}