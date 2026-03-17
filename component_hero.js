import { appData } from './content_data.js';

export function renderHero() {
    const { about } = appData;

    return `
        <section style="background:#FAF7F2;">

            <!-- HERO IMAGE -->
            <div style="width:100%; height:420px; overflow:hidden; position:relative; background:#1e2318;">
                <img
                    id="hero-img"
                    src="./assets/hero_visao.jpg"
                    alt="Visão"
                    onerror="this.style.display='none'"
                    style="width:100%; height:100%; object-fit:cover; opacity:0.65;"
                >
                <!-- SVG placeholder — shows when image is missing -->
                <svg id="hero-svg" viewBox="0 0 1440 420" xmlns="http://www.w3.org/2000/svg"
                     style="position:absolute; inset:0; width:100%; height:100%;">
                    <defs>
                        <linearGradient id="hg1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#1e2318"/>
                            <stop offset="100%" style="stop-color:#2F3526"/>
                        </linearGradient>
                        <radialGradient id="hg2" cx="50%" cy="40%" r="60%">
                            <stop offset="0%" style="stop-color:#9C7A3C; stop-opacity:0.15"/>
                            <stop offset="100%" style="stop-color:#1e2318; stop-opacity:0"/>
                        </radialGradient>
                    </defs>
                    <rect width="1440" height="420" fill="url(#hg1)"/>
                    <rect width="1440" height="420" fill="url(#hg2)"/>
                    <!-- Golden hour glow on horizon -->
                    <ellipse cx="720" cy="420" rx="600" ry="180" fill="rgba(156,122,60,0.12)"/>
                    <!-- Rolling hills layers -->
                    <path d="M0 320 Q200 280 400 300 Q600 320 800 290 Q1000 260 1200 285 Q1350 300 1440 275 L1440 420 L0 420 Z"
                          fill="rgba(47,53,38,0.7)"/>
                    <path d="M0 350 Q300 320 600 340 Q900 360 1200 335 Q1350 322 1440 330 L1440 420 L0 420 Z"
                          fill="rgba(35,40,28,0.8)"/>
                    <!-- Large central oak -->
                    <g transform="translate(720, 60)">
                        <rect x="-10" y="140" width="20" height="100" fill="rgba(120,90,40,0.6)" rx="4"/>
                        <rect x="-6" y="100" width="12" height="55" fill="rgba(110,82,35,0.5)" rx="2"/>
                        <ellipse cx="0" cy="75" rx="90" ry="65" fill="rgba(50,60,40,0.75)"/>
                        <ellipse cx="-45" cy="100" rx="58" ry="45" fill="rgba(45,55,35,0.7)"/>
                        <ellipse cx="50" cy="95" rx="65" ry="48" fill="rgba(55,65,42,0.72)"/>
                        <ellipse cx="15" cy="55" rx="70" ry="52" fill="rgba(60,72,45,0.68)"/>
                        <ellipse cx="-20" cy="48" rx="50" ry="38" fill="rgba(65,78,48,0.6)"/>
                    </g>
                    <!-- Left tree -->
                    <g transform="translate(320, 180)" opacity="0.5">
                        <rect x="-5" y="55" width="10" height="55" fill="rgba(120,90,40,0.5)" rx="2"/>
                        <ellipse cx="0" cy="35" rx="38" ry="30" fill="rgba(50,60,40,0.65)"/>
                        <ellipse cx="-18" cy="48" rx="25" ry="20" fill="rgba(45,55,35,0.6)"/>
                        <ellipse cx="20" cy="44" rx="28" ry="22" fill="rgba(55,65,42,0.62)"/>
                    </g>
                    <!-- Right tree -->
                    <g transform="translate(1120, 190)" opacity="0.5">
                        <rect x="-5" y="50" width="10" height="50" fill="rgba(120,90,40,0.5)" rx="2"/>
                        <ellipse cx="0" cy="32" rx="35" ry="28" fill="rgba(50,60,40,0.65)"/>
                        <ellipse cx="-16" cy="44" rx="22" ry="18" fill="rgba(45,55,35,0.6)"/>
                        <ellipse cx="18" cy="40" rx="26" ry="20" fill="rgba(55,65,42,0.62)"/>
                    </g>
                    <!-- Stars -->
                    <circle cx="150" cy="60" r="1.5" fill="rgba(255,255,255,0.35)"/>
                    <circle cx="280" cy="35" r="1"   fill="rgba(255,255,255,0.25)"/>
                    <circle cx="420" cy="70" r="1.5" fill="rgba(255,255,255,0.3)"/>
                    <circle cx="560" cy="30" r="1"   fill="rgba(255,255,255,0.2)"/>
                    <circle cx="950" cy="55" r="1.5" fill="rgba(255,255,255,0.3)"/>
                    <circle cx="1100" cy="28" r="1"  fill="rgba(255,255,255,0.25)"/>
                    <circle cx="1300" cy="65" r="1.5" fill="rgba(255,255,255,0.35)"/>
                    <!-- Golden horizon line -->
                    <line x1="0" y1="300" x2="1440" y2="300" stroke="rgba(156,122,60,0.15)" stroke-width="1"/>
                    <!-- Text -->
                    <text x="50%" y="44%" text-anchor="middle" dominant-baseline="middle"
                          font-family="Instrument Serif, serif" font-size="42" fill="rgba(255,255,255,0.85)"
                          letter-spacing="2">
                        Investimento inteligente
                    </text>
                    <text x="50%" y="57%" text-anchor="middle" dominant-baseline="middle"
                          font-family="Instrument Sans, sans-serif" font-size="13" fill="rgba(156,122,60,0.9)"
                          letter-spacing="6">
                        A NOSSA VISÃO · TERRAPRIMUS
                    </text>
                </svg>
            </div>

            <div class="pt-12 pb-16 lg:pt-16 lg:pb-32">
            <div class="max-w-7xl mx-auto px-4 lg:px-6">

                <!-- MAIN CONTENT -->
                <div class="max-w-3xl mx-auto">

                    <!-- INTRO PARAGRAPH -->
                    <p style="line-height:1.9; color:#2F3526; margin-bottom:2rem; font-size:1rem;">
                        A TerraPrimus é uma plataforma dedicada ao desenvolvimento integrado de projetos no Alentejo, acompanhando todo o ciclo de valorização — da identificação e aquisição de propriedades à sua concretização. Trabalhamos com quintas, herdades, terrenos e edifícios com vocação agrícola, turística, imobiliária ou energética, estruturando intervenções sustentadas que potenciam o valor e a identidade dos ativos rurais.
                    </p>

                    <!-- ICON CALLOUT 1 -->
                    <div style="display:flex; align-items:flex-start; gap:1rem; margin-bottom:1.5rem; padding:1.25rem; background:rgba(156,122,60,0.06); border-left:2px solid #9C7A3C;">
                        <i data-lucide="calculator" style="width:20px; height:20px; color:#9C7A3C; flex-shrink:0; margin-top:3px;"></i>
                        <p style="line-height:1.8; color:#2F3526; margin:0; font-size:0.95rem;">
                            O nosso website oferece uma forma simples de explorar esse potencial. Através do simulador de investimento, é possível testar diferentes cenários e obter estimativas de receitas, necessidades de financiamento e potencial de retorno de cada projeto.
                        </p>
                    </div>

                    <!-- ICON CALLOUT 2 -->
                    <div style="display:flex; align-items:flex-start; gap:1rem; margin-bottom:1.5rem; padding:1.25rem; background:rgba(156,122,60,0.06); border-left:2px solid #9C7A3C;">
                        <i data-lucide="network" style="width:20px; height:20px; color:#9C7A3C; flex-shrink:0; margin-top:3px;"></i>
                        <p style="line-height:1.8; color:#2F3526; margin:0; font-size:0.95rem;">
                            Contamos com uma rede de parceiros especializados nas áreas de agricultura, turismo rural, energia e promoção imobiliária, o que nos permite avaliar e estruturar diferentes soluções de desenvolvimento para cada propriedade, desde a aquisição até, quando aplicável, à sua execução.
                        </p>
                    </div>

                    <!-- CLOSING STATEMENT -->
                    <div style="display:flex; align-items:flex-start; gap:1rem; padding:1.25rem; background:rgba(47,53,38,0.04); border-left:2px solid #2F3526;">
                        <i data-lucide="handshake" style="width:20px; height:20px; color:#2F3526; flex-shrink:0; margin-top:3px;"></i>
                        <p style="line-height:1.8; color:#2F3526; margin:0; font-style:italic; font-size:0.95rem;">
                            O objetivo é claro: ligar propriedades com potencial a investidores e projetos capazes de as desenvolver de forma sólida e sustentável — com foco na criação de valor a longo prazo.
                        </p>
                    </div>

                </div>

            </div>
            </div>
        </section>
    `;
}