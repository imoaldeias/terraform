export function renderComplexInvest() {
    return `
        <section class="pt-6 pb-16 lg:pt-12 lg:pb-24" style="background:#FAF7F2;">
            <div class="max-w-7xl mx-auto px-4 lg:px-6">

                <!-- HEADER -->
                <div style="margin-bottom:1.5rem;">
                    <span class="label mb-2 block">Ferramenta de Análise</span>
                    <div style="display:inline-flex;gap:0.5rem;margin-bottom:1rem;margin-top:0.5rem;">
                        <span data-route="invest" style="font-family:'Instrument Sans',sans-serif;font-size:0.68rem;letter-spacing:0.15em;text-transform:uppercase;padding:0.4rem 1rem;border:1px solid rgba(62,74,63,0.25);background:transparent;color:#2F3526;border-radius:4px;cursor:pointer;">Simples</span>
                        <span style="font-family:'Instrument Sans',sans-serif;font-size:0.68rem;letter-spacing:0.15em;text-transform:uppercase;padding:0.4rem 1rem;border:1px solid #2F3526;background:#2F3526;color:#FAF7F2;border-radius:4px;">Complexo</span>
                    </div>
                    <h1 style="line-height:1.1;">Simulador de Investimento</h1>
                    <p style="margin-top:0.5rem;color:#6b7a5e;font-size:0.88rem;line-height:1.5;">
                        Introduza os dados do seu projeto e obtenha os indicadores financeiros institucionais.
                    </p>
                </div>

                <!-- INTRO -->
                <div style="margin-bottom:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid rgba(62,74,63,0.1);">
                    <p style="line-height:1.9;color:#6b7a5e;font-size:0.82rem;font-style:italic;">
                        Os resultados são indicativos e baseados nos pressupostos introduzidos. Para uma análise de viabilidade detalhada, contacte-nos através do formulário abaixo.
                    </p>
                </div>

                <!-- TYPE SELECTOR -->
                <div style="margin-bottom:1.25rem;">
                    <div id="project-type-grid" style="display:flex;flex-wrap:wrap;gap:0.5rem;">
                        <button class="cx-type-btn active" data-type="tourism"
                            style="display:flex;align-items:center;gap:0.5rem;padding:0.7rem 1rem;border:1px solid #2F3526;background:#2F3526;color:#FAF7F2;border-radius:4px;cursor:pointer;transition:all 0.2s;font-family:'Instrument Sans',sans-serif;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;">
                            <i data-lucide="hotel" style="width:14px;height:14px;flex-shrink:0;"></i>
                            <span>Hotelaria e Turismo</span>
                        </button>
                        <button class="cx-type-btn" data-type="agriculture"
                            style="display:flex;align-items:center;gap:0.5rem;padding:0.7rem 1rem;border:1px solid rgba(62,74,63,0.2);background:transparent;color:#2F3526;border-radius:4px;cursor:pointer;transition:all 0.2s;font-family:'Instrument Sans',sans-serif;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;">
                            <i data-lucide="leaf" style="width:14px;height:14px;flex-shrink:0;"></i>
                            <span>Agricultura</span>
                        </button>
                        <button class="cx-type-btn" data-type="solar"
                            style="display:flex;align-items:center;gap:0.5rem;padding:0.7rem 1rem;border:1px solid rgba(62,74,63,0.2);background:transparent;color:#2F3526;border-radius:4px;cursor:pointer;transition:all 0.2s;font-family:'Instrument Sans',sans-serif;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;">
                            <i data-lucide="zap" style="width:14px;height:14px;flex-shrink:0;"></i>
                            <span>Energia</span>
                        </button>
                        <button class="cx-type-btn" data-type="realestate"
                            style="display:flex;align-items:center;gap:0.5rem;padding:0.7rem 1rem;border:1px solid rgba(62,74,63,0.2);background:transparent;color:#2F3526;border-radius:4px;cursor:pointer;transition:all 0.2s;font-family:'Instrument Sans',sans-serif;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;">
                            <i data-lucide="building-2" style="width:14px;height:14px;flex-shrink:0;"></i>
                            <span>Promoção Imobiliária</span>
                        </button>
                    </div>
                </div>

                <!-- MAIN GRID: inputs left, results right -->
                <div id="cx-main-grid">

                    <!-- LEFT: INPUTS -->
                    <div style="background:#fff;border:1px solid rgba(62,74,63,0.12);border-radius:4px;padding:1.25rem;display:flex;flex-direction:column;">
                        <div id="cx-form-fields" style="display:flex;flex-direction:column;gap:0;flex:1;"></div>
                        <button id="btn-calculate"
                            style="width:100%;margin-top:1.25rem;padding:0.75rem;border:1px solid #2F3526;background:#2F3526;color:#FAF7F2;cursor:pointer;font-family:'Instrument Sans',sans-serif;font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;border-radius:4px;transition:all 0.3s;">
                            Calcular Retorno
                        </button>
                        <p style="font-family:'Instrument Sans',sans-serif;font-size:0.7rem;color:#6b7a5e;margin-top:0.75rem;line-height:1.6;text-align:center;font-style:italic;">
                            Indicativo · Não constitui aconselhamento financeiro
                        </p>
                    </div>

                    <!-- RIGHT: RESULTS -->
                    <div style="background:#fff;border:1px solid rgba(62,74,63,0.12);border-radius:4px;padding:1.25rem;display:flex;flex-direction:column;gap:1rem;">

                        <p style="font-family:'Instrument Sans',sans-serif;font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:#9C7A3C;margin:0;">Resultados</p>

                        <!-- TOP 4 KPI CARDS -->
                        <div id="cx-kpi-top" style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.75rem;">
                            <div style="background:#EDE8E0;padding:1rem;border-radius:4px;">
                                <p style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:#9C7A3C;margin-bottom:0.3rem;">IRR (Levered)</p>
                                <p id="res-irr-lev" style="font-family:'Instrument Serif',serif;font-size:1.5rem;color:#2F3526;margin:0;line-height:1;">—</p>
                            </div>
                            <div style="background:#EDE8E0;padding:1rem;border-radius:4px;">
                                <p style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:#9C7A3C;margin-bottom:0.3rem;">IRR (Unlevered)</p>
                                <p id="res-irr-unlev" style="font-family:'Instrument Serif',serif;font-size:1.5rem;color:#2F3526;margin:0;line-height:1;">—</p>
                            </div>
                            <div style="background:#2F3526;padding:1rem;border-radius:4px;">
                                <p style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:#9C7A3C;margin-bottom:0.3rem;">MOIC / Eq. Multiple</p>
                                <p id="res-moic" style="font-family:'Instrument Serif',serif;font-size:1.5rem;color:#FAF7F2;margin:0;line-height:1;">—</p>
                            </div>
                            <div style="background:#2F3526;padding:1rem;border-radius:4px;">
                                <p style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:#9C7A3C;margin-bottom:0.3rem;">NPV</p>
                                <p id="res-npv" style="font-family:'Instrument Serif',serif;font-size:1.5rem;color:#FAF7F2;margin:0;line-height:1;">—</p>
                            </div>
                        </div>

                        <!-- ROE + COC -->
                        <div id="cx-kpi-roe" style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
                            <div style="background:#EDE8E0;padding:1rem;border-radius:4px;">
                                <p style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:#9C7A3C;margin-bottom:0.3rem;">ROE</p>
                                <p id="res-roe" style="font-family:'Instrument Serif',serif;font-size:1.5rem;color:#2F3526;margin:0;line-height:1;">—</p>
                                <p style="font-family:'Instrument Sans',sans-serif;font-size:0.62rem;color:#6b7a5e;margin-top:0.3rem;">Retorno sobre Capital Próprio</p>
                            </div>
                            <div style="background:#EDE8E0;padding:1rem;border-radius:4px;">
                                <p style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:#9C7A3C;margin-bottom:0.3rem;">Cash-on-Cash</p>
                                <p id="res-coc" style="font-family:'Instrument Serif',serif;font-size:1.5rem;color:#2F3526;margin:0;line-height:1;">—</p>
                                <p style="font-family:'Instrument Sans',sans-serif;font-size:0.62rem;color:#6b7a5e;margin-top:0.3rem;">Rendimento anual sobre capital</p>
                            </div>
                        </div>

                        <!-- PROJECT ECONOMICS + FINANCING -->
                        <div id="cx-econ-fin-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">

                            <div style="border:1px solid rgba(62,74,63,0.12);border-radius:4px;overflow:hidden;">
                                <div style="background:#EDE8E0;padding:0.5rem 0.9rem;border-bottom:1px solid rgba(62,74,63,0.1);">
                                    <p style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:#9C7A3C;margin:0;">Economias do Projeto</p>
                                </div>
                                <div style="padding:0.5rem 0.9rem;">
                                    <div class="cx-metric-row"><span class="cx-metric-label">Custo Total</span><span id="res-total-cost" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">NOI / EBITDA</span><span id="res-noi" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">Receita Anual</span><span id="res-rev" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">Yield on Cost</span><span id="res-yoc" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">Margem Desenvolvimento</span><span id="res-devmargin" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">Lucro sobre Custo</span><span id="res-poc" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">Payback</span><span id="res-payback" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">Valor de Saída</span><span id="res-exit" class="cx-metric-value">—</span></div>
                                </div>
                            </div>

                            <div style="border:1px solid rgba(62,74,63,0.12);border-radius:4px;overflow:hidden;">
                                <div style="background:#EDE8E0;padding:0.5rem 0.9rem;border-bottom:1px solid rgba(62,74,63,0.1);">
                                    <p style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:#9C7A3C;margin:0;">Estrutura de Financiamento</p>
                                </div>
                                <div style="padding:0.5rem 0.9rem;">
                                    <div class="cx-metric-row"><span class="cx-metric-label">Montante do Empréstimo</span><span id="res-loan" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">Capital Próprio</span><span id="res-equity" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">LTV</span><span id="res-ltv" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">LTC</span><span id="res-ltc" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">DSCR</span><span id="res-dscr" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">Serviço da Dívida /ano</span><span id="res-debt" class="cx-metric-value">—</span></div>
                                </div>
                            </div>
                        </div>

                        <!-- CHART -->
                        <div style="background:#EDE8E0;padding:1rem;border-radius:4px;">
                            <p style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:#9C7A3C;margin-bottom:0.5rem;">Retorno Acumulado</p>
                            <svg id="invest-chart" width="100%" height="120" viewBox="0 0 400 120" preserveAspectRatio="none">
                                <text x="200" y="65" text-anchor="middle" fill="#9C7A3C" style="font-family:'Instrument Sans',sans-serif;font-size:10px;letter-spacing:0.1em;">CALCULE PARA VER O GRÁFICO</text>
                            </svg>
                        </div>

                        <!-- RISK: CAP SENSITIVITY + SCENARIOS (hidden until calculated) -->
                        <div id="cx-risk-grid" style="display:none;grid-template-columns:1fr 1fr;gap:0.75rem;">

                            <div style="border:1px solid rgba(62,74,63,0.12);border-radius:4px;overflow:hidden;">
                                <div style="background:#EDE8E0;padding:0.5rem 0.9rem;border-bottom:1px solid rgba(62,74,63,0.1);">
                                    <p style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:#9C7A3C;margin:0;">Sensibilidade Exit Cap Rate</p>
                                </div>
                                <div style="padding:0.5rem 0.9rem;">
                                    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.2rem;margin-bottom:0.4rem;padding-bottom:0.3rem;border-bottom:1px solid rgba(62,74,63,0.1);">
                                        <span style="font-family:'Instrument Sans',sans-serif;font-size:0.55rem;color:#6b7a5e;text-transform:uppercase;">Cap Rate</span>
                                        <span style="font-family:'Instrument Sans',sans-serif;font-size:0.55rem;color:#6b7a5e;text-align:right;text-transform:uppercase;">Exit €M</span>
                                        <span style="font-family:'Instrument Sans',sans-serif;font-size:0.55rem;color:#6b7a5e;text-align:right;text-transform:uppercase;">IRR Lev.</span>
                                    </div>
                                    <div id="res-cap-sensitivity"></div>
                                </div>
                            </div>

                            <div style="border:1px solid rgba(62,74,63,0.12);border-radius:4px;overflow:hidden;">
                                <div style="background:#EDE8E0;padding:0.5rem 0.9rem;border-bottom:1px solid rgba(62,74,63,0.1);">
                                    <p style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:#9C7A3C;margin:0;">Análise de Cenários</p>
                                </div>
                                <div id="res-scenarios" style="padding:0.5rem 0.9rem;display:flex;flex-direction:column;gap:0.75rem;"></div>
                            </div>
                        </div>

                        <!-- DISCLAIMER -->
                        <div style="border-top:1px solid rgba(62,74,63,0.1);padding-top:0.75rem;">
                            <p style="font-family:'Instrument Sans',sans-serif;font-size:0.72rem;color:#6b7a5e;line-height:1.7;font-style:italic;margin:0;">
                                Esta análise é indicativa e baseada nos pressupostos introduzidos. Não constitui aconselhamento de investimento. Os resultados reais podem diferir materialmente.
                            </p>
                        </div>

                    </div><!-- /results -->
                </div><!-- /main grid -->
            </div>
        </section>
    `;
}


export function initComplexInvest() {

    // ─── STYLES ──────────────────────────────────────────────────────────────
    const styleId = 'cx-invest-styles';
    if (!document.getElementById(styleId)) {
        const s = document.createElement('style');
        s.id = styleId;
        s.textContent = `
            #cx-main-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1.5rem;
                align-items: stretch;
            }
            .cx-field-row {
                display: grid;
                grid-template-columns: 1fr 100px;
                align-items: center;
                gap: 0.75rem;
                padding: 0.45rem 0;
                border-bottom: 1px solid rgba(62,74,63,0.06);
            }
            .cx-section-title {
                padding: 1.1rem 0 0.5rem;
                border-bottom: 1px solid rgba(62,74,63,0.1);
                margin-bottom: 0.1rem;
            }
            .cx-section-title span {
                font-family: 'Instrument Sans', sans-serif;
                font-size: 0.62rem;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: #2F3526;
            }
            .cx-metric-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.32rem 0;
                border-bottom: 1px solid rgba(62,74,63,0.06);
            }
            .cx-metric-label {
                font-family: 'Instrument Sans', sans-serif;
                font-size: 0.72rem;
                color: #6b7a5e;
            }
            .cx-metric-value {
                font-family: 'Instrument Sans', sans-serif;
                font-size: 0.72rem;
                font-weight: 600;
                color: #2F3526;
            }
            .cx-type-btn:hover {
                background: #2F3526 !important;
                color: #FAF7F2 !important;
                border-color: #2F3526 !important;
            }
            @media (max-width: 768px) {
                #cx-main-grid        { grid-template-columns: 1fr; }
                #cx-kpi-top          { grid-template-columns: 1fr 1fr !important; }
                #cx-econ-fin-grid    { grid-template-columns: 1fr !important; }
                #cx-risk-grid        { grid-template-columns: 1fr !important; }
                .cx-field-row        { grid-template-columns: 1fr 85px; gap: 0.5rem; }
                .cx-type-btn span    { display: none; }
                .cx-type-btn         { padding: 0.6rem 0.75rem !important; justify-content: center; }
            }
            @media (max-width: 400px) {
                .cx-field-row { grid-template-columns: 1fr 75px; }
            }
        `;
        document.head.appendChild(s);
    }

    let currentType = 'tourism';

    // ─── INPUT HELPERS ────────────────────────────────────────────────────────
    const IS = `width:100%;border:none;border-bottom:1px solid rgba(62,74,63,0.2);background:transparent;padding:0.4rem 0;font-family:'Instrument Sans',sans-serif;font-size:0.9rem;color:#2F3526;outline:none;text-align:right;`;
    const LS = `font-family:'Instrument Sans',sans-serif;font-size:0.62rem;letter-spacing:0.15em;text-transform:uppercase;color:#9C7A3C;display:block;margin-bottom:0.3rem;`;

    function sectionHTML(title) {
        return `<div class="cx-section-title"><span>${title}</span></div>`;
    }
    function fieldHTML(id, label, opts = {}) {
        return `<div class="cx-field-row">
            <label style="${LS};margin:0;">${label}</label>
            <input type="number" id="${id}" min="${opts.min ?? 0}" ${opts.max ? `max="${opts.max}"` : ''} ${opts.step ? `step="${opts.step}"` : ''} value="${opts.value ?? ''}" style="${IS};width:100%;">
        </div>`;
    }

    function getSharedFields() {
        return `
            ${sectionHTML('Propriedade')}
            ${fieldHTML('inp-price',    'Preço de Aquisição (€)',      { value: 2000000 })}
            ${fieldHTML('inp-devcost',  'Custo de Desenvolvimento (€)', { value: 500000 })}
            ${sectionHTML('Financiamento')}
            ${fieldHTML('inp-loan',     'Financiamento (%)',            { max: 95, value: 60 })}
            ${fieldHTML('inp-rate',     'Taxa de Juro (%)',             { step: '0.1', value: 4 })}
            ${fieldHTML('inp-years',    'Horizonte (anos)',              { max: 30, value: 15 })}
            ${sectionHTML('Valorização')}
            ${fieldHTML('inp-exit',     'Valor de Saída (€) opcional',  {})}
            ${fieldHTML('inp-caprate',  'Exit Cap Rate (%) opcional',   { step: '0.1', value: 6 })}
            ${fieldHTML('inp-discount', 'Taxa de Desconto — NPV (%)',   { step: '0.5', value: 8 })}
        `;
    }

    const specificInputs = {
        tourism: `
            ${sectionHTML('Turismo e Hotelaria')}
            ${fieldHTML('inp-units',      'Nº Unidades / Quartos',      { value: 12 })}
            ${fieldHTML('inp-nightprice', 'Preço Médio / Noite (€)',    { value: 150 })}
            ${fieldHTML('inp-occupancy',  'Taxa de Ocupação (%)',        { max: 100, value: 65 })}
            ${fieldHTML('inp-opcost',     'Custos Operacionais (€/ano)', { value: 80000 })}
        `,
        agriculture: `
            ${sectionHTML('Agricultura')}
            ${fieldHTML('inp-land',      'Área do Terreno (ha)',        { value: 120 })}
            ${fieldHTML('inp-yield',     'Produção por ha (ton)',        { step: '0.1', value: 3 })}
            ${fieldHTML('inp-croprice',  'Preço de Mercado (€/ton)',    { value: 400 })}
            ${fieldHTML('inp-farmcost',  'Custos Operacionais (€/ha)',  { value: 400 })}
            ${fieldHTML('inp-subsidies', 'Subsídios Anuais (€)',        { value: 18000 })}
        `,
        solar: `
            ${sectionHTML('Energia Solar')}
            ${fieldHTML('inp-mw-solar',  'Potência Solar (MW)',          { step: '0.1', value: 2 })}
            ${fieldHTML('inp-sunhours',  'Horas de Sol / Ano',           { value: 1800 })}
            ${sectionHTML('Energia Eólica')}
            ${fieldHTML('inp-mw-wind',   'Potência Eólica (MW)',         { step: '0.1', value: 0 })}
            ${fieldHTML('inp-windhours', 'Horas de Vento / Ano',         { value: 0 })}
            ${sectionHTML('Comercialização')}
            ${fieldHTML('inp-kwh',       'Preço Eletricidade (€/kWh)',   { step: '0.001', value: 0.065 })}
            ${fieldHTML('inp-gridcost',  'Custo Ligação Rede (€)',        { value: 0 })}
        `,
        realestate: `
            ${sectionHTML('Promoção Imobiliária')}
            ${fieldHTML('inp-buildarea', 'Área Construível (m²)',        { value: 2000 })}
            ${fieldHTML('inp-buildcost', 'Custo Construção (€/m²)',      { value: 800 })}
            ${fieldHTML('inp-saleprice', 'Preço de Venda (€/m²)',        { value: 2500 })}
            ${fieldHTML('inp-buildtime', 'Prazo de Construção (anos)',   { max: 10, value: 3 })}
        `
    };

    // ─── MATH ────────────────────────────────────────────────────────────────
    function annualDebtService(loan, rate, years) {
        if (loan <= 0 || rate <= 0 || years <= 0) return 0;
        const r = rate / 12, n = years * 12;
        return (loan * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)) * 12;
    }

    function calcIRR(cfs, guess = 0.1) {
        let rate = guess;
        for (let i = 0; i < 300; i++) {
            let npv = 0, dnpv = 0;
            for (let t = 0; t < cfs.length; t++) {
                const d = Math.pow(1 + rate, t);
                npv  += cfs[t] / d;
                dnpv -= t * cfs[t] / (d * (1 + rate));
            }
            if (Math.abs(npv) < 0.5 || dnpv === 0) break;
            rate -= npv / dnpv;
        }
        return (isFinite(rate) && rate > -1) ? rate * 100 : null;
    }

    function calcNPV(cfs, r) {
        return cfs.reduce((acc, cf, t) => acc + cf / Math.pow(1 + r, t), 0);
    }

    // ─── FORMATTERS ──────────────────────────────────────────────────────────
    function fmt(n) {
        if (!isFinite(n)) return '—';
        return '€' + Math.round(n).toLocaleString('pt-PT');
    }
    function fmtM(n) {
        if (!isFinite(n)) return '—';
        return (n / 1e6).toFixed(1) + 'M';
    }
    function fmtPct(n, dec = 1) {
        if (n === null || !isFinite(n)) return '—';
        return n.toFixed(dec) + '%';
    }
    function fmtX(n) {
        if (n === null || !isFinite(n)) return '—';
        return n.toFixed(2) + 'x';
    }

    // ─── CHART ───────────────────────────────────────────────────────────────
    function drawChart(cashflows, equity) {
        const svg = document.getElementById('invest-chart');
        if (!svg) return;
        const W = 400, H = 120, pad = 30;
        const cumulative = [-equity];
        for (const cf of cashflows) cumulative.push(cumulative[cumulative.length - 1] + cf);
        const minV  = Math.min(...cumulative);
        const maxV  = Math.max(...cumulative);
        const range = maxV - minV || 1;
        const n     = cumulative.length;
        const toX   = i => pad + (i / (n - 1)) * (W - pad * 2);
        const toY   = v => H - pad - ((v - minV) / range) * (H - pad * 2);
        const zeroY = toY(0);
        const path  = cumulative.map((v, i) => `${i === 0 ? 'M' : 'L'}${toX(i).toFixed(1)},${toY(v).toFixed(1)}`).join(' ');
        const step  = Math.max(1, Math.floor(n / 6));
        svg.innerHTML = `
            <line x1="${pad}" y1="${zeroY.toFixed(1)}" x2="${W - pad}" y2="${zeroY.toFixed(1)}" stroke="rgba(62,74,63,0.2)" stroke-width="1" stroke-dasharray="4"/>
            <path d="${path}" fill="none" stroke="#9C7A3C" stroke-width="2" stroke-linejoin="round"/>
            ${cumulative.map((v, i) => i % step === 0 ? `<text x="${toX(i).toFixed(1)}" y="${H - 8}" text-anchor="middle" fill="#9C7A3C" style="font-size:9px;font-family:'Instrument Sans',sans-serif;">${i}</text>` : '').join('')}
            <text x="${W - pad - 4}" y="${toY(maxV).toFixed(1) - 4}" text-anchor="end" fill="#2F3526" style="font-size:9px;font-family:'Instrument Sans',sans-serif;">${fmt(maxV)}</text>
        `;
    }

    // ─── CALCULATE ───────────────────────────────────────────────────────────
    function calculate() {
        const price        = parseFloat(document.getElementById('inp-price')?.value)     || 0;
        const devCost      = parseFloat(document.getElementById('inp-devcost')?.value)   || 0;
        const loanPct      = (parseFloat(document.getElementById('inp-loan')?.value)     || 0) / 100;
        const rate         = (parseFloat(document.getElementById('inp-rate')?.value)     || 0) / 100;
        const years        = parseInt(document.getElementById('inp-years')?.value)       || 10;
        const exitOverride = parseFloat(document.getElementById('inp-exit')?.value)      || 0;
        const capRate      = (parseFloat(document.getElementById('inp-caprate')?.value)  || 0) / 100;
        const discountRate = (parseFloat(document.getElementById('inp-discount')?.value) || 8) / 100;

        const extraCapex = currentType === 'solar' ? (parseFloat(document.getElementById('inp-gridcost')?.value) || 0) : 0;
        const totalCost  = price + devCost + extraCapex;
        const loanAmt    = totalCost * loanPct;
        const equity     = totalCost - loanAmt;
        if (equity <= 0) return;

        const debtService  = annualDebtService(loanAmt, rate, years);
        const interestOnly = loanAmt * rate;
        const el = id => document.getElementById(id);

        // ── REAL ESTATE ──────────────────────────────────────────────────────
        if (currentType === 'realestate') {
            const buildArea    = parseFloat(document.getElementById('inp-buildarea')?.value) || 0;
            const buildCostSqm = parseFloat(document.getElementById('inp-buildcost')?.value) || 0;
            const salePriceSqm = parseFloat(document.getElementById('inp-saleprice')?.value) || 0;
            const buildTime    = parseFloat(document.getElementById('inp-buildtime')?.value) || 2;

            const gdv            = buildArea * salePriceSqm;
            const totalBuildCost = buildArea * buildCostSqm;
            const totalDebtCost  = debtService * buildTime;
            const devProfit      = gdv - totalBuildCost - devCost - price - totalDebtCost;
            const devMargin      = gdv > 0 ? (devProfit / gdv) * 100 : 0;
            const profitOnCost   = totalCost > 0 ? (devProfit / totalCost) * 100 : 0;
            const roe            = equity > 0 ? (devProfit / equity) * 100 : 0;
            const moic           = equity > 0 ? (devProfit + equity) / equity : null;
            const ltv            = gdv > 0 ? (loanAmt / gdv) * 100 : null;
            const ltc            = totalCost > 0 ? (loanAmt / totalCost) * 100 : null;
            const dscr           = totalDebtCost > 0 ? devProfit / totalDebtCost : null;

            const cashflows = [-equity, ...Array(Math.max(Math.round(buildTime) - 1, 0)).fill(0), devProfit + equity];
            const unfLevCfs = [-totalCost, ...Array(Math.max(Math.round(buildTime) - 1, 0)).fill(0), devProfit + totalCost];
            const irrLev    = calcIRR(cashflows);
            const irrUnlev  = calcIRR(unfLevCfs);
            const npv       = calcNPV(cashflows, discountRate);

            el('res-irr-lev').textContent    = fmtPct(irrLev);
            el('res-irr-unlev').textContent  = fmtPct(irrUnlev);
            el('res-moic').textContent       = fmtX(moic);
            el('res-npv').textContent        = fmt(npv);
            el('res-roe').textContent        = fmtPct(roe);
            el('res-coc').textContent        = fmtPct(roe);
            el('res-total-cost').textContent = fmt(totalCost);
            el('res-noi').textContent        = fmt(devProfit);
            el('res-rev').textContent        = fmt(gdv);
            el('res-yoc').textContent        = fmtPct(profitOnCost);
            el('res-devmargin').textContent  = fmtPct(devMargin);
            el('res-poc').textContent        = fmtPct(profitOnCost);
            el('res-payback').textContent    = Math.round(buildTime) + ' anos';
            el('res-exit').textContent       = fmt(gdv);
            el('res-loan').textContent       = fmt(loanAmt);
            el('res-equity').textContent     = fmt(equity);
            el('res-ltv').textContent        = fmtPct(ltv);
            el('res-ltc').textContent        = fmtPct(ltc);
            el('res-dscr').textContent       = dscr !== null ? dscr.toFixed(2) + 'x' : '—';
            el('res-debt').textContent       = fmt(debtService) + ' /ano';

            document.getElementById('cx-risk-grid').style.display = 'none';
            drawChart([...Array(Math.round(buildTime)).fill(0), devProfit], equity);
            return;
        }

        // ── INCOME-PRODUCING ─────────────────────────────────────────────────
        let annualRevenue = 0, annualOpCost = 0;
        if (currentType === 'tourism') {
            const units      = parseFloat(document.getElementById('inp-units')?.value)      || 0;
            const nightPrice = parseFloat(document.getElementById('inp-nightprice')?.value) || 0;
            const occupancy  = (parseFloat(document.getElementById('inp-occupancy')?.value) || 0) / 100;
            const opCost     = parseFloat(document.getElementById('inp-opcost')?.value)     || 0;
            annualRevenue    = units * nightPrice * 365 * occupancy;
            annualOpCost     = opCost;
        } else if (currentType === 'agriculture') {
            const land       = parseFloat(document.getElementById('inp-land')?.value)       || 0;
            const yieldHa    = parseFloat(document.getElementById('inp-yield')?.value)      || 0;
            const cropPrice  = parseFloat(document.getElementById('inp-croprice')?.value)   || 0;
            const farmCost   = parseFloat(document.getElementById('inp-farmcost')?.value)   || 0;
            const subsidies  = parseFloat(document.getElementById('inp-subsidies')?.value)  || 0;
            annualRevenue    = land * yieldHa * cropPrice + subsidies;
            annualOpCost     = land * farmCost;
        } else if (currentType === 'solar') {
            const mwSolar    = parseFloat(document.getElementById('inp-mw-solar')?.value)   || 0;
            const sunHours   = parseFloat(document.getElementById('inp-sunhours')?.value)   || 0;
            const mwWind     = parseFloat(document.getElementById('inp-mw-wind')?.value)    || 0;
            const windHours  = parseFloat(document.getElementById('inp-windhours')?.value)  || 0;
            const kwhPrice   = parseFloat(document.getElementById('inp-kwh')?.value)        || 0;
            annualRevenue    = mwSolar * 1000 * sunHours * kwhPrice + mwWind * 1000 * windHours * kwhPrice;
            annualOpCost     = (mwSolar + mwWind) * 20000;
        }

        const noi         = annualRevenue - annualOpCost;
        const annualCF    = noi - debtService;
        const annualCFirr = noi - interestOnly;

        const exitValue = exitOverride > 0 ? exitOverride
                        : capRate > 0 ? noi / capRate
                        : totalCost;

        const cashflows = [-equity, ...Array(years - 1).fill(annualCFirr), annualCFirr + exitValue - loanAmt];
        const unfLevCfs = [-totalCost, ...Array(years - 1).fill(noi), noi + exitValue];
        const irrLev    = calcIRR(cashflows);
        const irrUnlev  = calcIRR(unfLevCfs);
        const npv       = calcNPV(cashflows, discountRate);

        const totalReturn = annualCF * years + (exitValue - totalCost);
        const moic        = equity > 0 ? (equity + totalReturn) / equity : null;
        const roe         = equity > 0 ? (annualCF / equity) * 100 : null;
        const yieldOnCost = totalCost > 0 ? (noi / totalCost) * 100 : null;
        const devMargin   = annualRevenue > 0 ? (noi / annualRevenue) * 100 : null;
        const profitOnCost= totalCost > 0 ? (noi * years / totalCost) * 100 : null;
        const ltv         = exitValue > 0 ? (loanAmt / exitValue) * 100 : null;
        const ltc         = totalCost > 0 ? (loanAmt / totalCost) * 100 : null;
        const dscr        = debtService > 0 ? noi / debtService : null;

        let cum = 0, payback = null;
        for (let y = 1; y <= years; y++) {
            cum += annualCF;
            if (cum >= equity && !payback) payback = y;
        }

        el('res-irr-lev').textContent    = fmtPct(irrLev);
        el('res-irr-unlev').textContent  = fmtPct(irrUnlev);
        el('res-moic').textContent       = fmtX(moic);
        el('res-npv').textContent        = fmt(npv);
        el('res-roe').textContent        = fmtPct(roe);
        el('res-coc').textContent        = fmtPct(roe);
        el('res-total-cost').textContent = fmt(totalCost);
        el('res-noi').textContent        = fmt(noi);
        el('res-rev').textContent        = fmt(annualRevenue);
        el('res-yoc').textContent        = fmtPct(yieldOnCost);
        el('res-devmargin').textContent  = fmtPct(devMargin);
        el('res-poc').textContent        = fmtPct(profitOnCost);
        el('res-payback').textContent    = payback ? payback + ' anos' : '>' + years + 'a';
        el('res-exit').textContent       = fmt(exitValue);
        el('res-loan').textContent       = fmt(loanAmt);
        el('res-equity').textContent     = fmt(equity);
        el('res-ltv').textContent        = fmtPct(ltv);
        el('res-ltc').textContent        = fmtPct(ltc);
        el('res-dscr').textContent       = dscr !== null ? dscr.toFixed(2) + 'x' : '—';
        el('res-debt').textContent       = fmt(debtService) + ' /ano';

        // ── EXIT CAP SENSITIVITY ──────────────────────────────────────────────
        document.getElementById('cx-risk-grid').style.display = 'grid';
        const baseCapPct = capRate > 0 ? capRate * 100 : (noi / exitValue) * 100;
        const capSensEl  = document.getElementById('res-cap-sensitivity');
        capSensEl.innerHTML = '';
        for (let delta = -1.5; delta <= 1.55; delta += 0.5) {
            const capR   = Math.max(0.5, baseCapPct + delta) / 100;
            const ev     = noi / capR;
            const cfs2   = [-equity, ...Array(years - 1).fill(annualCFirr), annualCFirr + ev - loanAmt];
            const irr2   = calcIRR(cfs2);
            const isBase = Math.abs(delta) < 0.01;
            const row    = document.createElement('div');
            row.style.cssText = `display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.2rem;padding:0.25rem 0;border-bottom:1px solid rgba(62,74,63,0.06);${isBase ? 'background:rgba(156,122,60,0.07);' : ''}`;
            row.innerHTML = `
                <span style="font-family:'Instrument Sans',sans-serif;font-size:0.68rem;color:#6b7a5e;">${(capR * 100).toFixed(1)}%${isBase ? ' <span style="color:#9C7A3C;">●</span>' : ''}</span>
                <span style="font-family:'Instrument Sans',sans-serif;font-size:0.68rem;color:#2F3526;text-align:right;">${fmtM(ev)}</span>
                <span style="font-family:'Instrument Sans',sans-serif;font-size:0.68rem;font-weight:600;color:#2F3526;text-align:right;">${fmtPct(irr2)}</span>
            `;
            capSensEl.appendChild(row);
        }

        // ── SCENARIO ANALYSIS ─────────────────────────────────────────────────
        const scenariosEl  = document.getElementById('res-scenarios');
        scenariosEl.innerHTML = '';
        const scenarioDefs = [
            { label: 'Pessimista', bg: '#EDE8E0', textColor: '#2F3526', subColor: '#6b7a5e', revMult: 0.75, costMult: 1.15 },
            { label: 'Base',       bg: '#2F3526', textColor: '#FAF7F2', subColor: 'rgba(250,247,242,0.6)', revMult: 1.00, costMult: 1.00 },
            { label: 'Optimista',  bg: '#EDE8E0', textColor: '#2F3526', subColor: '#6b7a5e', revMult: 1.25, costMult: 0.90 },
        ];
        scenarioDefs.forEach(s => {
            const adjRev  = annualRevenue * s.revMult;
            const adjCost = annualOpCost  * s.costMult;
            const adjNOI  = adjRev - adjCost;
            const adjCF   = adjNOI - debtService;
            const adjExit = capRate > 0 ? adjNOI / capRate : exitValue * s.revMult;
            const cfs2    = [-equity, ...Array(years - 1).fill(adjNOI - interestOnly), adjNOI - interestOnly + adjExit - loanAmt];
            const irr2    = calcIRR(cfs2);
            const moic2   = equity > 0 ? (equity + adjCF * years + (adjExit - totalCost)) / equity : null;
            const block   = document.createElement('div');
            block.style.cssText = `background:${s.bg};border-radius:4px;padding:0.75rem;`;
            block.innerHTML = `
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem;">
                    <span style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:#9C7A3C;">${s.label}</span>
                    <span style="font-family:'Instrument Serif',serif;font-size:1.1rem;color:${s.textColor};">IRR ${fmtPct(irr2)}</span>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.1rem;">
                    <div style="display:flex;justify-content:space-between;padding:0.2rem 0;border-bottom:1px solid rgba(62,74,63,0.1);">
                        <span style="font-family:'Instrument Sans',sans-serif;font-size:0.65rem;color:${s.subColor};">NOI</span>
                        <span style="font-family:'Instrument Sans',sans-serif;font-size:0.65rem;font-weight:600;color:${s.textColor};">${fmt(adjNOI)}</span>
                    </div>
                    <div style="display:flex;justify-content:space-between;padding:0.2rem 0 0.2rem 0.5rem;border-bottom:1px solid rgba(62,74,63,0.1);">
                        <span style="font-family:'Instrument Sans',sans-serif;font-size:0.65rem;color:${s.subColor};">MOIC</span>
                        <span style="font-family:'Instrument Sans',sans-serif;font-size:0.65rem;font-weight:600;color:${s.textColor};">${fmtX(moic2)}</span>
                    </div>
                    <div style="display:flex;justify-content:space-between;padding:0.2rem 0;">
                        <span style="font-family:'Instrument Sans',sans-serif;font-size:0.65rem;color:${s.subColor};">CF/ano</span>
                        <span style="font-family:'Instrument Sans',sans-serif;font-size:0.65rem;font-weight:600;color:${s.textColor};">${fmt(adjCF)}</span>
                    </div>
                    <div style="display:flex;justify-content:space-between;padding:0.2rem 0 0 0.5rem;">
                        <span style="font-family:'Instrument Sans',sans-serif;font-size:0.65rem;color:${s.subColor};">Saída</span>
                        <span style="font-family:'Instrument Sans',sans-serif;font-size:0.65rem;font-weight:600;color:${s.textColor};">${fmtM(adjExit)}</span>
                    </div>
                </div>
            `;
            scenariosEl.appendChild(block);
        });

        // Chart
        const chartCFs = Array(years).fill(annualCF);
        chartCFs[years - 1] = annualCF + exitValue;
        drawChart(chartCFs, equity);
    }

    // ─── INIT ────────────────────────────────────────────────────────────────
    function loadSpecificInputs(type) {
        const el = document.getElementById('cx-form-fields');
        if (!el) return;
        el.innerHTML = getSharedFields() + (specificInputs[type] || '');
        el.querySelectorAll('input').forEach(inp => inp.addEventListener('input', calculate));
    }

    function setActiveType(type) {
        currentType = type;
        document.querySelectorAll('.cx-type-btn').forEach(btn => {
            const active = btn.dataset.type === type;
            btn.style.background  = active ? '#2F3526' : 'transparent';
            btn.style.color       = active ? '#FAF7F2' : '#2F3526';
            btn.style.borderColor = active ? '#2F3526' : 'rgba(62,74,63,0.2)';
        });
        loadSpecificInputs(type);
        if (window.lucide) lucide.createIcons();
    }

    loadSpecificInputs('tourism');
    if (window.lucide) lucide.createIcons();
    calculate();

    document.getElementById('project-type-grid')?.addEventListener('click', e => {
        const btn = e.target.closest('.cx-type-btn');
        if (btn) { setActiveType(btn.dataset.type); calculate(); }
    });

    const calcBtn = document.getElementById('btn-calculate');
    if (calcBtn) calcBtn.addEventListener('click', calculate);
}