import { appData } from './content_data.js';

export function renderPropertyDetail(id) {
    const prop = appData.properties.find(p => p.id === parseInt(id));

    if (!prop) {
        return `
            <div class="py-40 text-center text-base opacity-60">
                Propriedade não encontrada.
            </div>
        `;
    }

    const galleryImages = prop.gallery_ids
        ? prop.gallery_ids
            .replace(/\r/g, '')
            .replace(/\n/g, ',')
            .split(',')
            .map(img => img.trim())
            .filter(img => img.length > 5)
        : [];

    const images = galleryImages.length > 0 ? galleryImages : [prop.image];

    return `
        <section class="pt-24 pb-32 min-h-screen" style="background:#FAF7F2;">
            <div class="max-w-7xl mx-auto px-6">

                <h1 class="mb-12">
                    ${prop.location} — ${prop.title}
                </h1>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-20">

                    <!-- ── LEFT COLUMN ── -->
                    <div class="lg:col-span-2 space-y-16">

                        <!-- GALLERY -->
                        <div id="gallery-container" class="relative aspect-[3/2] w-full overflow-hidden bg-gray-100" style="border-radius:4px;">

                            <img
                                id="main-gallery-image"
                                src="${images[0]}"
                                alt="${prop.title}"
                                class="w-full h-full object-cover transition-all duration-500"
                                style="cursor:zoom-in;"
                            >

                            ${images.length > 1 ? `
                                <button id="btn-prev"
                                    style="position:absolute; left:1rem; top:50%; transform:translateY(-50%); background:rgba(0,0,0,0.3); border:none; color:#FAF7F2; font-size:2rem; cursor:pointer; opacity:0.8; transition:opacity 0.2s; width:2.5rem; height:2.5rem; border-radius:50%; display:flex; align-items:center; justify-content:center;"
                                    onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.8'">
                                    ‹
                                </button>
                                <button id="btn-next"
                                    style="position:absolute; right:1rem; top:50%; transform:translateY(-50%); background:rgba(0,0,0,0.3); border:none; color:#FAF7F2; font-size:2rem; cursor:pointer; opacity:0.8; transition:opacity 0.2s; width:2.5rem; height:2.5rem; border-radius:50%; display:flex; align-items:center; justify-content:center;"
                                    onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.8'">
                                    ›
                                </button>
                            ` : ''}

                        </div>

                        <!-- LIGHTBOX -->
                        <div id="lightbox"
                            style="display:none; position:fixed; inset:0; z-index:1000;
                                   background:rgba(20,20,18,0.92);
                                   align-items:center; justify-content:center;">

                            <div style="width:calc(100% - 2rem); height:calc(100% - 4rem); max-width:1200px; position:relative; margin:auto;">
                                <img id="lightbox-image"
                                    src="${images[0]}"
                                    style="width:100%; height:100%; object-fit:contain; border-radius:4px;">

                                ${images.length > 1 ? `
                                    <button id="lightbox-prev"
                                        style="position:absolute; left:0.5rem; top:50%; transform:translateY(-50%); background:rgba(0,0,0,0.4); border:none; color:#FAF7F2; font-size:1.5rem; cursor:pointer; opacity:0.8; transition:opacity 0.2s; width:2.5rem; height:2.5rem; border-radius:50%; display:flex; align-items:center; justify-content:center;"
                                        onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.8'">
                                        ‹
                                    </button>
                                    <button id="lightbox-next"
                                        style="position:absolute; right:0.5rem; top:50%; transform:translateY(-50%); background:rgba(0,0,0,0.4); border:none; color:#FAF7F2; font-size:1.5rem; cursor:pointer; opacity:0.8; transition:opacity 0.2s; width:2.5rem; height:2.5rem; border-radius:50%; display:flex; align-items:center; justify-content:center;"
                                        onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.8'">
                                        ›
                                    </button>
                                ` : ''}
                            </div>
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
                                <div>${prop.quartos === 1 ? '1 quarto' : `${prop.quartos} quartos`}</div>
                            </div>
                            ` : ''}

                            <div class="pt-6 border-t border-gray-100">
                                <button
                                    data-route="sell"
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
        </section>
    `;
}

export function initPropertyDetail(id) {
    const prop = appData.properties.find(p => p.id === parseInt(id));
    if (!prop) return;

    const galleryImages = prop.gallery_ids
        ? prop.gallery_ids
            .replace(/\r/g, '')
            .replace(/\n/g, ',')
            .split(',')
            .map(img => img.trim())
            .filter(img => img.length > 5)
        : [];

    const images = galleryImages.length > 0 ? galleryImages : [prop.image];
    let currentIndex = 0;

    // ── helpers ──────────────────────────────────────
    function updateImage() {
        const main     = document.getElementById('main-gallery-image');
        const lightbox = document.getElementById('lightbox-image');
        if (main)     main.src     = images[currentIndex];
        if (lightbox) lightbox.src = images[currentIndex];
    }

    function openLightbox() {
        const lb = document.getElementById('lightbox');
        if (lb) lb.style.display = 'flex';
    }

    function closeLightbox() {
        const lb = document.getElementById('lightbox');
        if (lb) lb.style.display = 'none';
    }

    // ── main image click → open lightbox ─────────────
    const mainImg = document.getElementById('main-gallery-image');
    if (mainImg) mainImg.addEventListener('click', openLightbox);

    // ── lightbox close on backdrop click ─────────────
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.addEventListener('click', closeLightbox);

    // ── gallery nav buttons ───────────────────────────
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    if (btnPrev) btnPrev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    if (btnNext) btnNext.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    // ── lightbox nav buttons ──────────────────────────
    const lbPrev = document.getElementById('lightbox-prev');
    const lbNext = document.getElementById('lightbox-next');

    if (lbPrev) lbPrev.addEventListener('click', e => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    if (lbNext) lbNext.addEventListener('click', e => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });
}