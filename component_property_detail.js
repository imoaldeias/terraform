import { appData } from './content_data.js';

function getGalleryImages(prop) {
    const galleryImages = prop.gallery_ids && prop.gallery_ids.trim().length > 0
        ? prop.gallery_ids
            .replace(/\r/g, '')
            .replace(/\n/g, ',')
            .split(',')
            .map(img => img.trim())
            .filter(img => img.length > 5)
        : [];
    return galleryImages.length > 0 ? galleryImages : [prop.image];
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

    const images = getGalleryImages(prop);

    return `
        <section style="background:#FAF7F2;">

            <!-- ══ HERO GALLERY — full viewport, image fills frame ══ -->
            <div style="position:relative; height:calc(100vh - 64px); overflow:hidden; background:#FAF7F2;">

                <!-- MAIN IMAGE -->
                <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; padding:0 12.5%; background:#FAF7F2;">
                <img
                    id="main-gallery-image"
                    src="${images[0]}"
                    alt="${prop.title}"
                    style="width:100%; height:100%; object-fit:cover; display:block;
                           transition:opacity 0.5s ease; cursor:zoom-in;"
                >
                </div>

                <!-- BACK LINK — top left -->
                <div style="position:absolute; top:2rem; left:2rem; z-index:20;">
                    <button data-route="properties"
                        style="display:inline-flex; align-items:center; gap:0.5rem;
                               background:none; border:none; cursor:pointer;
                               font-family:'Instrument Sans',sans-serif;
                               font-size:0.65rem; letter-spacing:0.22em;
                               text-transform:uppercase; color:rgba(250,247,242,0.7);
                               transition:color 0.2s; padding:0;"
                        class="pd-back-btn">
                        ← Portfólio
                    </button>
                </div>

                <!-- IMAGE COUNTER — top right -->
                ${images.length > 1 ? `
                <div style="position:absolute; top:2rem; right:2rem; z-index:20;">
                    <span id="img-counter"
                        style="font-family:'Instrument Sans',sans-serif;
                               font-size:0.62rem; letter-spacing:0.2em;
                               color:rgba(250,247,242,0.6);">
                        1 / ${images.length}
                    </span>
                </div>
                ` : ''}

                <!-- PREV / NEXT ARROWS -->
                ${images.length > 1 ? `
                <button id="btn-prev"
                    style="position:absolute; left:12.5%; top:50%; transform:translateY(-50%);
                           z-index:10; width:3.5rem; height:6rem;
                           background:rgba(0,0,0,0.25); border:none;
                           color:#FAF7F2; font-size:2rem;
                           cursor:pointer; display:flex; align-items:center;
                           justify-content:center; transition:all 0.2s;
                           border-radius:2px;"
                    class="pd-arrow-btn">
                    ‹
                </button>
                <button id="btn-next"
                    style="position:absolute; right:12.5%; top:50%; transform:translateY(-50%);
                           z-index:10; width:3.5rem; height:6rem;
                           background:rgba(0,0,0,0.25); border:none;
                           color:#FAF7F2; font-size:2rem;
                           cursor:pointer; display:flex; align-items:center;
                           justify-content:center; transition:all 0.2s;
                           border-radius:2px;"
                    class="pd-arrow-btn">
                    ›
                </button>
                ` : ''}

                <!-- TITLE + PRICE OVERLAY — bottom left -->
                <div style="position:absolute; bottom:0; left:12.5%; right:12.5%; z-index:10;
                            padding:2rem 2.5rem 2rem;
                            background:linear-gradient(to top, rgba(15,17,12,0.75) 0%, rgba(15,17,12,0) 100%);">
                    <div style="display:flex; justify-content:space-between; align-items:flex-end; gap:2rem; flex-wrap:wrap;">

                        <!-- LEFT: typology + title + location -->
                        <div>
                            <p style="font-family:'Instrument Sans',sans-serif;
                                      font-size:0.6rem; letter-spacing:0.35em;
                                      text-transform:uppercase; color:#9C7A3C;
                                      margin-bottom:0.6rem;">
                                ${prop.tipologia || ''}${prop.tipologia && prop.location ? ' · ' : ''}${prop.location || ''}
                            </p>
                            <h1 style="font-family:'Instrument Serif',serif;
                                       font-size:clamp(1.6rem, 3.5vw, 2.8rem);
                                       font-weight:400; letter-spacing:0.01em;
                                       text-transform:none; color:#FAF7F2;
                                       line-height:1.15; margin:0;">
                                ${prop.title}
                            </h1>
                        </div>

                        <!-- RIGHT: price -->
                        ${prop.price ? `
                        <div style="text-align:right; flex-shrink:0;">
                            <p style="font-family:'Instrument Sans',sans-serif;
                                      font-size:0.58rem; letter-spacing:0.25em;
                                      text-transform:uppercase;
                                      color:rgba(250,247,242,0.5); margin-bottom:0.3rem;">
                                Valor
                            </p>
                            <p style="font-family:'Instrument Serif',serif;
                                      font-size:clamp(1.2rem, 2vw, 1.6rem);
                                      color:#FAF7F2; margin:0; letter-spacing:0.02em;">
                                ${prop.price}
                            </p>
                        </div>
                        ` : ''}

                    </div>
                </div>

                <!-- THUMBNAIL STRIP — bottom, centered, above title area -->
                ${images.length > 1 ? `
                <div style="position:absolute; bottom:7.5rem; left:50%; transform:translateX(-50%);
                            z-index:20; display:flex; gap:0.4rem; align-items:center;">
                    ${images.map((img, i) => `
                        <button
                            data-thumb="${i}"
                            style="flex-shrink:0; width:48px; height:32px;
                                   border-radius:2px; overflow:hidden; padding:0;
                                   cursor:pointer; transition:all 0.25s;
                                   border:1.5px solid ${i === 0 ? '#FAF7F2' : 'rgba(250,247,242,0.25)'};
                                   opacity:${i === 0 ? '1' : '0.6'};
                                   background:none;">
                            <img src="${img}"
                                 style="width:100%; height:100%; object-fit:cover; display:block;"
                                 loading="lazy">
                        </button>
                    `).join('')}
                </div>
                ` : ''}

            </div>

            <!-- ══ LIGHTBOX ══ -->
            <div id="lightbox"
                style="display:none; position:fixed; inset:0; z-index:1000;
                       background:rgba(12,13,10,0.97);
                       align-items:center; justify-content:center;">

                <button id="lightbox-close"
                    style="position:absolute; top:1.5rem; right:2rem;
                           background:none; border:none; color:rgba(250,247,242,0.5);
                           font-family:'Instrument Sans',sans-serif;
                           font-size:0.65rem; letter-spacing:0.25em;
                           text-transform:uppercase; cursor:pointer;
                           transition:color 0.2s;"
                    class="pd-lightbox-close-btn">
                    Fechar ✕
                </button>

                ${images.length > 1 ? `
                <button id="lightbox-prev"
                    style="position:absolute; left:1.5rem; top:50%; transform:translateY(-50%);
                           background:none; border:none; color:rgba(250,247,242,0.4);
                           font-size:2rem; cursor:pointer; padding:1rem;
                           transition:color 0.2s;"
                    class="pd-lightbox-arrow-btn">
                    ‹
                </button>
                <button id="lightbox-next"
                    style="position:absolute; right:1.5rem; top:50%; transform:translateY(-50%);
                           background:none; border:none; color:rgba(250,247,242,0.4);
                           font-size:2rem; cursor:pointer; padding:1rem;
                           transition:color 0.2s;"
                    class="pd-lightbox-arrow-btn">
                    ›
                </button>
                ` : ''}

                <div style="width:calc(100% - 8rem); height:calc(100% - 5rem);
                            display:flex; align-items:center; justify-content:center;">
                    <img id="lightbox-image"
                        src="${images[0]}"
                        style="max-width:100%; max-height:100%;
                               object-fit:contain;">
                </div>

            </div>

            <!-- ══ CONTENT: DESCRIPTION + SIDEBAR ══ -->
            <div style="padding:5rem 0 6rem;">
            <div class="max-w-7xl mx-auto px-4 lg:px-6">

                <div class="grid grid-cols-1 lg:grid-cols-3" style="gap:5rem; align-items:start;">

                    <!-- LEFT: Description -->
                    <div class="lg:col-span-2">

                        <!-- SECTION DIVIDER -->
                        <div style="display:flex; align-items:center; gap:1.5rem; margin-bottom:3rem;">
                            <span style="font-family:'Instrument Sans',sans-serif;
                                         font-size:0.6rem; letter-spacing:0.3em;
                                         text-transform:uppercase; color:#9C7A3C;">
                                Descrição
                            </span>
                            <div style="flex:1; height:1px; background:rgba(62,74,63,0.12);"></div>
                        </div>

                        <!-- DESCRIPTION TEXT -->
                        <div style="font-family:'Instrument Sans',sans-serif;
                                    font-size:0.95rem; line-height:2;
                                    color:#3D4532; white-space:pre-line;
                                    letter-spacing:0.02em;">
                            ${prop.description || 'Informação sob consulta.'}
                        </div>

                    </div>

                    <!-- RIGHT: Sticky Sidebar -->
                    <div class="lg:col-span-1">
                        <div style="position:sticky; top:100px;">

                            <!-- GOLD ACCENT LINE -->
                            <div style="width:2rem; height:1px; background:#9C7A3C; margin-bottom:2rem;"></div>

                            <!-- SPECS LIST -->
                            <div style="display:flex; flex-direction:column; gap:0;
                                        border-top:1px solid rgba(62,74,63,0.1);
                                        margin-bottom:2.5rem;">

                                <div style="display:flex; justify-content:space-between;
                                            align-items:baseline; padding:0.9rem 0;
                                            border-bottom:1px solid rgba(62,74,63,0.07);">
                                    <span style="font-family:'Instrument Sans',sans-serif;
                                                 font-size:0.62rem; letter-spacing:0.18em;
                                                 text-transform:uppercase; color:#9C7A3C;">
                                        Tipologia
                                    </span>
                                    <span style="font-family:'Instrument Sans',sans-serif;
                                                 font-size:0.82rem; color:#2F3526;">
                                        ${prop.tipologia || '—'}
                                    </span>
                                </div>

                                <div style="display:flex; justify-content:space-between;
                                            align-items:baseline; padding:0.9rem 0;
                                            border-bottom:1px solid rgba(62,74,63,0.07);">
                                    <span style="font-family:'Instrument Sans',sans-serif;
                                                 font-size:0.62rem; letter-spacing:0.18em;
                                                 text-transform:uppercase; color:#9C7A3C;">
                                        Localização
                                    </span>
                                    <span style="font-family:'Instrument Sans',sans-serif;
                                                 font-size:0.82rem; color:#2F3526;">
                                        ${prop.location}
                                    </span>
                                </div>

                                ${prop.areaTerreno > 0 ? `
                                <div style="display:flex; justify-content:space-between;
                                            align-items:baseline; padding:0.9rem 0;
                                            border-bottom:1px solid rgba(62,74,63,0.07);">
                                    <span style="font-family:'Instrument Sans',sans-serif;
                                                 font-size:0.62rem; letter-spacing:0.18em;
                                                 text-transform:uppercase; color:#9C7A3C;">
                                        Terreno
                                    </span>
                                    <span style="font-family:'Instrument Sans',sans-serif;
                                                 font-size:0.82rem; color:#2F3526;">
                                        ${prop.areaTerreno} ha
                                    </span>
                                </div>
                                ` : ''}

                                ${prop.areaConstruida > 0 ? `
                                <div style="display:flex; justify-content:space-between;
                                            align-items:baseline; padding:0.9rem 0;
                                            border-bottom:1px solid rgba(62,74,63,0.07);">
                                    <span style="font-family:'Instrument Sans',sans-serif;
                                                 font-size:0.62rem; letter-spacing:0.18em;
                                                 text-transform:uppercase; color:#9C7A3C;">
                                        Construída
                                    </span>
                                    <span style="font-family:'Instrument Sans',sans-serif;
                                                 font-size:0.82rem; color:#2F3526;">
                                        ${prop.areaConstruida} m²
                                    </span>
                                </div>
                                ` : ''}

                                ${prop.quartos > 0 ? `
                                <div style="display:flex; justify-content:space-between;
                                            align-items:baseline; padding:0.9rem 0;
                                            border-bottom:1px solid rgba(62,74,63,0.07);">
                                    <span style="font-family:'Instrument Sans',sans-serif;
                                                 font-size:0.62rem; letter-spacing:0.18em;
                                                 text-transform:uppercase; color:#9C7A3C;">
                                        Quartos
                                    </span>
                                    <span style="font-family:'Instrument Sans',sans-serif;
                                                 font-size:0.82rem; color:#2F3526;">
                                        ${prop.quartos}
                                    </span>
                                </div>
                                ` : ''}

                            </div>

                            <!-- CTA BUTTON -->
                            <button
                                data-route="sell"
                                style="width:100%; background:#2F3526; color:#FAF7F2;
                                       border:none; padding:1.1rem 1rem;
                                       font-family:'Instrument Sans',sans-serif;
                                       font-size:0.65rem; letter-spacing:0.28em;
                                       text-transform:uppercase; cursor:pointer;
                                       transition:background 0.35s ease;">
                                Solicitar Informações
                            </button>

                            <p style="font-family:'Instrument Sans',sans-serif;
                                      font-size:0.65rem; color:#9C7A3C;
                                      text-align:center; margin-top:1rem;
                                      letter-spacing:0.08em;">
                                Resposta em menos de 24 horas
                            </p>

                        </div>
                    </div>

                </div>

            </div>
            </div>

        </section>
    `;
}

export function initPropertyDetail(id) {
    const prop = appData.properties.find(p => p.id === parseInt(id));
    if (!prop) return;

    const images = getGalleryImages(prop);
    let currentIndex = 0;

    function updateImage(index) {
        currentIndex = (index + images.length) % images.length;

        const main     = document.getElementById('main-gallery-image');
        const lbImg    = document.getElementById('lightbox-image');
        const counter  = document.getElementById('img-counter');

        if (main) {
            main.style.opacity = '0';
            setTimeout(() => {
                main.src = images[currentIndex];
                main.style.opacity = '1';
            }, 250);
        }
        if (lbImg)   lbImg.src = images[currentIndex];
        if (counter) counter.innerText = `${currentIndex + 1} / ${images.length}`;

        document.querySelectorAll('[data-thumb]').forEach(btn => {
            const active = parseInt(btn.dataset.thumb) === currentIndex;
            btn.style.borderColor = active ? '#FAF7F2' : 'rgba(250,247,242,0.25)';
            btn.style.opacity     = active ? '1' : '0.6';
        });
    }

    // Main image → open lightbox
    const mainImg = document.getElementById('main-gallery-image');
    if (mainImg) mainImg.addEventListener('click', () => {
        const lb    = document.getElementById('lightbox');
        const lbImg = document.getElementById('lightbox-image');
        if (lb && lbImg) {
            lbImg.src = images[currentIndex];
            lb.style.display = 'flex';
        }
    });

    // Lightbox close
    document.getElementById('lightbox-close')?.addEventListener('click', () => {
        document.getElementById('lightbox').style.display = 'none';
    });

    // Lightbox background click
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.addEventListener('click', e => {
        if (e.target === lightbox) lightbox.style.display = 'none';
    });

    // Main gallery arrows
    document.getElementById('btn-prev')?.addEventListener('click', e => { e.stopPropagation(); updateImage(currentIndex - 1); });
    document.getElementById('btn-next')?.addEventListener('click', e => { e.stopPropagation(); updateImage(currentIndex + 1); });

    // Lightbox arrows
    document.getElementById('lightbox-prev')?.addEventListener('click', e => { e.stopPropagation(); updateImage(currentIndex - 1); });
    document.getElementById('lightbox-next')?.addEventListener('click', e => { e.stopPropagation(); updateImage(currentIndex + 1); });

    // Thumbnail clicks
    document.querySelectorAll('[data-thumb]').forEach(btn => {
        btn.addEventListener('click', () => updateImage(parseInt(btn.dataset.thumb)));
    });

    // Keyboard navigation
    const keyHandler = e => {
        const lb = document.getElementById('lightbox');
        if (e.key === 'ArrowLeft')  updateImage(currentIndex - 1);
        if (e.key === 'ArrowRight') updateImage(currentIndex + 1);
        if (e.key === 'Escape' && lb) lb.style.display = 'none';
    };
    document.addEventListener('keydown', keyHandler);

    // Clean up when the user navigates away
    window.addEventListener('hashchange', () => {
        document.removeEventListener('keydown', keyHandler);
    }, { once: true });
}