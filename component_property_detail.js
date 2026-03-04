import { appData } from './content_data.js';

// Variáveis de estado da galeria
let currentImageIndex = 0;
let currentImages = [];
let fullscreenListenerAdded = false;

function escapeHTML(str) {
    if (!str) return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

window.nextImage = function() {
    if (!currentImages.length) return;
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    updateImage();
};

window.prevImage = function() {
    if (!currentImages.length) return;
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    updateImage();
};

window.openFullscreen = function () {
    const container = document.getElementById('gallery-container');
    if (container && container.requestFullscreen) {
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
            <div class="py-40 text-center text-base opacity-60">
                Propriedade não encontrada.
            </div>
        `;
    }

    if (!fullscreenListenerAdded) {
        document.addEventListener('fullscreenchange', () => {
            const btn = document.getElementById('close-fullscreen-btn');
            if (!btn) return;
            btn.style.opacity = document.fullscreenElement ? '1' : '0';
        });
        fullscreenListenerAdded = true;
    }

    const galleryImages = prop.gallery_ids
        ? prop.gallery_ids
            .replace(/\r/g, '')
            .replace(/\n/g, ',')
            .split(',')
            .map(img => img.trim())
            .filter(img => img.length > 5)
        : [];

    currentImages = galleryImages.length > 0 ? galleryImages : [prop.image];
    currentImageIndex = 0;

    return `
        <section class="pt-24 pb-32 bg-white min-h-screen">
            <div class="max-w-7xl mx-auto px-6">

                <h1 class="mb-12">
                    ${prop.location} — ${prop.title}
                </h1>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-20">

                    <!-- ── LEFT COLUMN ── -->
                    <div class="lg:col-span-2 space-y-16">

                        <!-- GALLERY -->
                        <div id="gallery-container" class="relative aspect-[3/2] w-full overflow-hidden bg-gray-100 rounded-2xl">

                            <img
                                id="main-gallery-image"
                                src="${currentImages[0]}"
                                alt="${prop.title}"
                                class="w-full h-full object-cover transition-all duration-500"
                            >

                            ${currentImages.length > 1 ? `
                                <button onclick="prevImage()"
                                    class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow transition text-xl">
                                    ‹
                                </button>
                                <button onclick="nextImage()"
                                    class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow transition text-xl">
                                    ›
                                </button>
                            ` : ''}

                            <button onclick="openFullscreen()"
                                class="absolute top-4 right-4 bg-white/80 hover:bg-white px-3 py-2 rounded-lg shadow transition">
                                Fullscreen
                            </button>

                            <button id="close-fullscreen-btn"
                                onclick="closeFullscreen()"
                                class="absolute top-4 left-4 bg-black text-white px-3 py-2 rounded-lg shadow opacity-0 transition">
                                Fechar
                            </button>

                        </div>
                        <!-- /GALLERY -->

                        <!-- DESCRIPTION -->
                        <div class="whitespace-pre-line">
                            ${prop.description || 'Informação sob consulta.'}
                        </div>

                    </div>
                    <!-- /LEFT COLUMN -->

                    <!-- ── RIGHT COLUMN (SIDEBAR) ── -->
                    <div class="lg:col-span-1">
                        <div class="border border-gray-200 p-10 rounded-3xl sticky top-32 space-y-8">

                            <div>
                                <div class="label">Nome</div>
                                <div>${prop.title}</div>
                            </div>

                            <div>
                                <div class="label">Localização</div>
                                <div>${prop.location}</div>
                            </div>

                            <div>
                                <div class="label">Tipologia</div>
                                <div>${prop.tipologia || 'N/A'}</div>
                            </div>

                            <div>
                                <div class="label">Preço</div>
                                <div>${prop.price}</div>
                            </div>

                            <div>
                                <div class="label">Terreno</div>
                                <div>${prop.areaTerreno} ha</div>
                            </div>

                            ${prop.areaConstruida > 0 ? `
                            <div>
                                <div class="label">Área Construída</div>
                                <div>${prop.areaConstruida} m²</div>
                            </div>
                            ` : ''}

                            ${prop.quartos > 0 ? `
                            <div>
                                <div class="label">Quartos</div>
                                <div>
                                    ${prop.quartos === 1 ? '1 quarto' : `${prop.quartos} quartos`}
                                </div>
                            </div>
                            ` : ''}

                            <div class="pt-6 border-t border-gray-100">
                                <button
                                    data-route="contact"
                                    class="w-full border border-black py-4 hover:bg-black hover:text-white transition"
                                >
                                    Solicitar Informações
                                </button>
                            </div>

                        </div>
                    </div>
                    <!-- /RIGHT COLUMN -->

                </div>
                <!-- /GRID -->

            </div>
            <!-- /WRAPPER -->

        </section>
    `;
}