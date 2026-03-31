import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID } from './config.js';

export function renderSell() {
    return `
        <section style="background:#FAF7F2;">

            <div class="pt-6 pb-0 lg:pt-32 lg:pb-0">
            <div class="max-w-7xl mx-auto px-4 lg:px-6">

                <div class="grid grid-cols-1 lg:grid-cols-2" style="gap:2rem; margin-bottom:2rem;">

                    <!-- LEFT: Texto -->
                    <div>

                        <h1 style="margin-bottom:1.25rem;">
                            Valorize o seu património
                        </h1>

                        <p style="margin-bottom:2rem; line-height:1.8; color:#2F3526;">
                            Na TerraPrimus, representamos proprietários através de uma análise rigorosa de posicionamento e valorização. 
                            Procuramos assegurar transações sólidas e maximizar o valor real do seu ativo no mercado global.
                        </p>

                        <div style="display:flex; flex-direction:column;">

                            <div style="display:grid; grid-template-columns:2rem 1fr; gap:1rem; padding:1.25rem 0; border-top:1px solid rgba(62,74,63,0.12);">
                                <span style="font-family:'Instrument Sans',sans-serif; font-size:0.68rem; color:#9C7A3C; padding-top:3px;">01</span>
                                <div>
                                    <p style="font-family:'Instrument Sans',sans-serif; font-size:0.68rem; letter-spacing:0.2em; text-transform:uppercase; color:#9C7A3C; margin-bottom:0.5rem;">Confidencialidade</p>
                                    <p style="line-height:1.7; color:#2F3526;">Proteção de informação e gestão reservada de todo o processo, com discrição absoluta em cada etapa.</p>
                                </div>
                            </div>

                            <div style="display:grid; grid-template-columns:2rem 1fr; gap:1rem; padding:1.25rem 0; border-top:1px solid rgba(62,74,63,0.12);">
                                <span style="font-family:'Instrument Sans',sans-serif; font-size:0.68rem; color:#9C7A3C; padding-top:3px;">02</span>
                                <div>
                                    <p style="font-family:'Instrument Sans',sans-serif; font-size:0.68rem; letter-spacing:0.2em; text-transform:uppercase; color:#9C7A3C; margin-bottom:0.5rem;">Avaliação & Posicionamento</p>
                                    <p style="line-height:1.7; color:#2F3526;">Análise técnica e estratégica assente no enquadramento real de mercado, para um posicionamento fundamentado.</p>
                                </div>
                            </div>

                            <div style="display:grid; grid-template-columns:2rem 1fr; gap:1rem; padding:1.25rem 0; border-top:1px solid rgba(62,74,63,0.12); border-bottom:1px solid rgba(62,74,63,0.12);">
                                <span style="font-family:'Instrument Sans',sans-serif; font-size:0.68rem; color:#9C7A3C; padding-top:3px;">03</span>
                                <div>
                                    <p style="font-family:'Instrument Sans',sans-serif; font-size:0.68rem; letter-spacing:0.2em; text-transform:uppercase; color:#9C7A3C; margin-bottom:0.5rem;">Acompanhamento Integral</p>
                                    <p style="line-height:1.7; color:#2F3526;">Representação estratégica, negociação e orientação especializada até à conclusão da operação.</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <!-- RIGHT: Formulário -->
                    <div class="bg-white border border-brand-100 shadow-2xl shadow-brand-900/5" style="padding:1.5rem; border-radius:16px;">

                        <h2 style="margin-bottom:1.5rem; text-align:center;">
                            Solicitar Avaliação
                        </h2>

                        <div style="display:flex; flex-direction:column; gap:1.5rem;">

                            <div class="grid grid-cols-1 sm:grid-cols-2" style="gap:1.25rem;">
                                <input id="sell-name" type="text" placeholder="Nome completo"
                                    class="w-full border-b border-gray-200 outline-none bg-transparent focus:border-brand-900 transition-colors"
                                    style="padding-bottom:0.75rem;">
                                <input id="sell-phone" type="tel" placeholder="Telefone"
                                    class="w-full border-b border-gray-200 outline-none bg-transparent focus:border-brand-900 transition-colors"
                                    style="padding-bottom:0.75rem;">
                            </div>

                            <div>
                                <input id="sell-email" type="email" placeholder="E-mail de contato"
                                    class="w-full border-b border-gray-200 outline-none bg-transparent focus:border-brand-900 transition-colors"
                                    style="padding-bottom:0.75rem;">
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2" style="gap:1.25rem;">
                                <select id="sell-tipologia" class="border-b border-gray-200 bg-transparent outline-none cursor-pointer focus:border-brand-900 transition-colors" style="padding-bottom:0.75rem;">
                                    <option value="" disabled selected>Tipologia</option>
                                    <option value="herdade">Herdade</option>
                                    <option value="quinta">Quinta</option>
                                    <option value="terreno">Terreno</option>
                                    <option value="moradia">Moradia</option>
                                </select>
                                <select id="sell-rooms" class="border-b border-gray-200 bg-transparent outline-none cursor-pointer focus:border-brand-900 transition-colors" style="padding-bottom:0.75rem;">
                                    <option value="" disabled selected>Nº Quartos</option>
                                    <option value="all">Todos</option>
                                    <option value="1">1 Quarto</option>
                                    <option value="2">2 Quartos</option>
                                    <option value="3">3 Quartos</option>
                                    <option value="4">4 ou mais</option>
                                </select>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2" style="gap:1.25rem;">
                                <select id="sell-build" class="border-b border-gray-200 bg-transparent outline-none cursor-pointer focus:border-brand-900 transition-colors" style="padding-bottom:0.75rem;">
                                    <option value="" disabled selected>Área Construída</option>
                                    <option value="all">Todas as áreas</option>
                                    <option value="100">Até 100 m²</option>
                                    <option value="200">Até 200 m²</option>
                                    <option value="300">Até 300 m²</option>
                                    <option value="max">Mais de 300 m²</option>
                                </select>
                                <select id="sell-land" class="border-b border-gray-200 bg-transparent outline-none cursor-pointer focus:border-brand-900 transition-colors" style="padding-bottom:0.75rem;">
                                    <option value="" disabled selected>Área do Terreno</option>
                                    <option value="all">Todas as áreas</option>
                                    <option value="1">Até 1 ha</option>
                                    <option value="10">Até 10 ha</option>
                                    <option value="50">Até 50 ha</option>
                                    <option value="100">Até 100 ha</option>
                                    <option value="500">Até 500 ha</option>
                                    <option value="max">Mais de 500 ha</option>
                                </select>
                            </div>

                            <div>
                                <textarea id="sell-message" placeholder="Localização e breves detalhes..."
                                    rows="3"
                                    class="w-full border-b border-gray-200 outline-none bg-transparent resize-none focus:border-brand-900 transition-colors"
                                    style="padding-bottom:0.75rem;"></textarea>
                            </div>

                            <div id="sell-feedback" style="display:none; padding:1rem; text-align:center; font-size:0.85rem; border-radius:8px;"></div>

                            <button id="sell-submit" type="button"
                                class="w-full border border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-white transition"
                                style="padding:1rem 0; margin-top:0.5rem;">
                                Enviar
                            </button>

                        </div>

                    </div>

                </div>

            </div>
            </div>

            <!-- BOTTOM IMAGE -->
            <div id="sell-bottom-img" style="width:100%; height:380px; position:relative; margin-top:3rem;
                        background-size:cover; background-position:center 40%;">
                <div style="position:absolute; inset:0; background:linear-gradient(to bottom, rgba(250,247,242,0.5) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(250,247,242,0.5) 100%);"></div>
            </div>

        </section>
    `;
}

export function initSell() {
    // Load EmailJS SDK once
    if (!document.getElementById('emailjs-sdk')) {
        const script = document.createElement('script');
        script.id  = 'emailjs-sdk';
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
        script.onload = () => emailjs.init(EMAILJS_PUBLIC_KEY);
        document.head.appendChild(script);
    } else if (window.emailjs) {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }

const bottomImg = document.getElementById('sell-bottom-img');
    if (bottomImg) bottomImg.style.backgroundImage = "url('https://picsum.photos/id/1018/1600/600')";

    const btn = document.getElementById('sell-submit');
    if (!btn) return;

    btn.addEventListener('click', async () => {
        const name    = document.getElementById('sell-name')?.value.trim();
        const email   = document.getElementById('sell-email')?.value.trim();
        const phone   = document.getElementById('sell-phone')?.value.trim();
        const tipo    = document.getElementById('sell-tipologia')?.value;
        const rooms   = document.getElementById('sell-rooms')?.value;
        const build   = document.getElementById('sell-build')?.value;
        const land    = document.getElementById('sell-land')?.value;
        const message = document.getElementById('sell-message')?.value.trim();

        const feedback = document.getElementById('sell-feedback');

        if (!name || !email) {
            feedback.style.display = 'block';
            feedback.style.background = '#FEF2F2';
            feedback.style.color = '#DC2626';
            feedback.innerText = 'Por favor preencha o nome e o e-mail.';
            return;
        }

        btn.disabled = true;
        btn.innerText = 'A enviar...';

        try {
            await emailjs.send(EMAILJS_SERVICE_ID, 'template_zmv6ks9', {
                from_name: name,
                from_email: email,
                phone:     phone   || '—',
                tipologia: tipo    || '—',
                rooms:     rooms   || '—',
                build:     build   || '—',
                land:      land    || '—',
                message:   message || '—'
            });

            feedback.style.display = 'block';
            feedback.style.background = '#F0FDF4';
            feedback.style.color = '#16A34A';
            feedback.innerText = 'Mensagem enviada com sucesso. Entraremos em contacto brevemente.';
            btn.innerText = 'Enviado ✓';

        } catch (err) {
            feedback.style.display = 'block';
            feedback.style.background = '#FEF2F2';
            feedback.style.color = '#DC2626';
            feedback.innerText = 'Erro ao enviar. Por favor tente novamente ou contacte-nos diretamente.';
            btn.disabled = false;
            btn.innerText = 'Enviar';
            console.error('EmailJS error:', err);
        }
    });
}