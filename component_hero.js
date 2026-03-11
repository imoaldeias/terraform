import { appData } from './content_data.js';

export function renderHero() {
    const { about } = appData;

    return `
        <section class="pt-8 pb-16 lg:pt-24 lg:pb-32" style="background:#FAF7F2;">
            <div class="max-w-7xl mx-auto px-4 lg:px-6">

                <!-- HEADER -->
                <div class="text-center" style="margin-bottom:2.5rem;">
                    <span class="label block" style="margin-bottom:1rem;">A Nossa Visão</span>
                    <h1>Investimento inteligente</h1>
                </div>

                <!-- MAIN CONTENT -->
                <div class="max-w-3xl mx-auto">

                    <!-- INTRO PARAGRAPH -->
                    <p style="line-height:1.9; color:#2F3526; margin-bottom:2rem; font-size:1rem;">
                        A TerraPrimus é uma plataforma dedicada à representação e comercialização de propriedades com potencial de desenvolvimento no Alentejo — quintas, herdades, terrenos e edifícios com valor agrícola, turístico ou imobiliário. Reunimos um portefólio de propriedades selecionadas com claro potencial de valorização, funcionando como uma plataforma imobiliária especializada em ativos rurais de escala relevante.
                    </p>

                    <!-- ICON CALLOUT 1 -->
                    <div style="display:flex; align-items:flex-start; gap:1rem; margin-bottom:1.5rem; padding:1.25rem; background:rgba(156,122,60,0.06); border-left:2px solid #9C7A3C;">
                        <i data-lucide="calculator" style="width:20px; height:20px; color:#9C7A3C; flex-shrink:0; margin-top:3px;"></i>
                        <p style="line-height:1.8; color:#2F3526; margin:0; font-size:0.95rem;">
                            Muitas destas propriedades têm possibilidades interessantes, mas nem sempre é fácil para proprietários ou investidores compreenderem o que um projeto pode, de forma realista, representar em termos financeiros. Frequentemente recorre-se a estimativas aproximadas ou a folhas de cálculo complexas.
                            <br><br>
                            O nosso website oferece uma forma simples de explorar esse potencial. Através do nosso <strong style="font-weight:500; color:#2F3526;">simulador de investimento</strong>, os utilizadores podem testar diferentes cenários e obter uma estimativa das receitas, das necessidades de financiamento e do potencial de retorno de um projeto.
                        </p>
                    </div>

                    <!-- ICON CALLOUT 2 -->
                    <div style="display:flex; align-items:flex-start; gap:1rem; margin-bottom:1.5rem; padding:1.25rem; background:rgba(156,122,60,0.06); border-left:2px solid #9C7A3C;">
                        <i data-lucide="network" style="width:20px; height:20px; color:#9C7A3C; flex-shrink:0; margin-top:3px;"></i>
                        <p style="line-height:1.8; color:#2F3526; margin:0; font-size:0.95rem;">
                            Trabalhamos com uma rede de parceiros especializados em áreas como agricultura, turismo rural, energia e promoção imobiliária, permitindo avaliar e estruturar diferentes possibilidades de desenvolvimento para cada propriedade, desde a aquisição até, quando relevante, à sua execução.
                        </p>
                    </div>

                    <!-- CLOSING STATEMENT -->
                    <div style="display:flex; align-items:flex-start; gap:1rem; padding:1.25rem; background:rgba(47,53,38,0.04); border-left:2px solid #2F3526;">
                        <i data-lucide="handshake" style="width:20px; height:20px; color:#2F3526; flex-shrink:0; margin-top:3px;"></i>
                        <p style="line-height:1.8; color:#2F3526; margin:0; font-style:italic; font-size:0.95rem;">
                            O objetivo é simples: ligar propriedades com potencial a investidores e projetos capazes de as desenvolver de forma sólida e sustentável — focados em projetos, e não apenas em transações.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    `;
}