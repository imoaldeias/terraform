import { appData } from './content_data.js';

let currentImageIndex = 0;
let currentImages = [];

window.nextImage = function () {
    if (!currentImages.length) return;
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    updateImage();
};

window.prevImage = function () {
    if (!currentImages.length) return;
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    updateImage();
};

window.openFullscreen = function () {
    const container = document.getElementById('gallery-container');
    if (container.requestFullscreen) {
        container.requestFullscreen();
    }
};

window.closeFullscreen = function () {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
};

function updateImage() {
    const img = document.getElementById('main-gallery-image');
    if (img) {
        img.src = currentImages[currentImageIndex];
    }
}

export function renderPropertyDetail(id) {
    const prop = appData.properties.find(p => p.id === parseInt(id));

    if (!prop) {
        return `
            <div class="py-40 text-center text-gray-500">
                Propriedade não encontrada.
            </div>
        `;
    }

    const galleryImages = prop.gallery_ids
        ? prop.gallery_ids.split(',').map(img => img.trim()).filter(Boolean)
        : [];

    const imagesToShow = galleryImages.length > 0
        ? galleryImages
        : [prop.image];

    currentImages = imagesToShow;
    currentImageIndex = 0;

    return `
        <article class="bg-white min-h-screen">

            <!-- HEADER -->
            <div class="max-w-7xl mx-auto px-6 pt-16 pb-10">
                <span class="text-xs uppercase tracking-[0.25em] font-semibold text-gray-400">
                    ${prop.tipologia} • ${prop.location}
                </span>

                <h1 class="text-5xl lg:text-6xl font-serif font-light leading-tight mt-6">
                    ${prop.title}
                </h1>
            </div>

            <div class="max-w-7xl mx-auto px-6">

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-20">

                    <!-- LEFT COLUMN -->
                    <div class="lg:col-span-2 space-y-16">

                        <!-- GALLERY -->
                        <div id="gallery-container" class="relative aspect-[3/2] w-full overflow-hidden bg-gray-100 rounded-2xl">

                            <img 
                                id="main-gallery-image"
                                src="${imagesToShow[0]}"
                                alt="${prop.title}"
                                class="w-full h-full object-cover transition-all duration-500"
                            >

                            ${imagesToShow.length > 1 ? `
                                <button onclick="prevImage()" 
                                    class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow transition">
                                    ‹
                                </button>

                                <button onclick="nextImage()" 
                                    class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow transition">
                                    ›
                                </button>
                            ` : ''}

                            <!-- Fullscreen Open -->
                            <button onclick="openFullscreen()"
                                class="absolute top-4 right-4 bg-white/80 hover:bg-white px-3 py-2 text-xs uppercase tracking-wider rounded-lg shadow transition">
                                Fullscreen
                            </button>

                            <!-- Close (visible only in fullscreen) -->
                            <button onclick="closeFullscreen()"
                                class="absolute top-4 left-4 bg-black text-white px-3 py-2 text-xs uppercase tracking-wider rounded-lg shadow opacity-0 fullscreen:opacity-100 transition">
                                Fechar
                            </button>

                        </div>

                        <!-- DESCRIPTION -->
                        <div class="text-base font-light leading-relaxed text-gray-600 whitespace-pre-line">
                            ${prop.description || 'Informação sob consulta.'}
                        </div>

                    </div>

                    <!-- SIDEBAR -->
                    <div class="lg:col-span-1">

                        <div class="border border-gray-200 p-10 rounded-3xl sticky top-32 space-y-10">

                            <div class="space-y-2">
                                <div class="text-xs uppercase tracking-[0.25em] font-semibold text-gray-400">
                                    Valor
                                </div>
                                <div class="text-3xl font-serif font-light">
                                    ${prop.price}
                                </div>
                            </div>

                            <div class="border-t border-gray-100 pt-8 space-y-6 text-sm font-light text-gray-600">

                                <div class="flex justify-between">
                                    <span>Terreno</span>
                                    <span>${prop.areaTerreno} ha</span>
                                </div>

                                <div class="flex justify-between">
                                    <span>Área Construída</span>
                                    <span>${prop.areaConstruida} m²</span>
                                </div>

                                <div class="flex justify-between">
                                    <span>Quartos</span>
                                    <span>${prop.quartos || '-'}</span>
                                </div>

                            </div>

                            <button 
                                data-route="contact"
                                class="w-full border border-black py-4 uppercase tracking-[0.25em] text-xs font-semibold hover:bg-black hover:text-white transition"
                            >
                                Solicitar Informações
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </article>
    `;
}