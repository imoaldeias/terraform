export function renderInvest() {
    return `
        <style>
            #invest-type-grid {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
            }
            #invest-main-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1.5rem;
                align-items: start;
            }
            #invest-kpi-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 0.75rem;
                margin-bottom: 1.25rem;
            }
            .invest-field-row {
                display: grid;
                grid-template-columns: 1fr 100px;
                align-items: center;
                gap: 0.75rem;
                padding: 0.45rem 0;
                border-bottom: 1px solid rgba(62,74,63,0.06);
            }
            @media (max-width: 768px) {
                #invest-main-grid {
                    grid-template-columns: 1fr;
                }
                .invest-field-row {
                    grid-template-columns: 1fr 85px;
                    gap: 0.5rem;
                }
                #invest-kpi-grid {
                    grid-template-columns: 1fr 1fr;
                }
                .type-btn span {
                    display: none;
                }
                .type-btn {
                    padding: 0.6rem 0.75rem !important;
                    justify-content: center;
                }
            }
            @media (max-width: 400px) {
                .invest-field-row {
                    grid-template-columns: 1fr 75px;
                }
            }
        </style>

        <section class="pt-6 pb-16 lg:pt-12 lg:pb-24" style="background:#FAF7F2;">
            <div class="max-w-6xl mx-auto px-4 lg:px-6">

                <!-- HEADER -->
                <div style="margin-bottom:1.5rem;">
                    <span class="label mb-2 block">Ferramenta de Análise</span>
                    <h1 style="line-height:1.1;">Simulador de Investimento</h1>
                    <p style="margin-top:0.5rem; color:#6b7a5e; font-size:0.88rem; line-height:1.5;">
                        Introduza os dados do seu projeto e obtenha os indicadores financeiros essenciais.
                    </p>
                </div>

                <!-- INTRO TEXT -->
                <div style="margin-bottom:1.5rem; padding-bottom:1.5rem; border-bottom:1px solid rgba(62,74,63,0.1);">
                    <p style="line-height:1.9; color:#6b7a5e; font-size:0.82rem; font-style:italic;">
                        Os resultados são indicativos e baseados nos pressupostos introduzidos. Para uma análise de viabilidade detalhada, contacte-nos através do formulário abaixo.
                    </p>
                </div>

                <!-- TYPE SELECTOR -->
                <div style="margin-bottom:1.25rem;">
                    <div id="invest-type-grid">
                        <button class="type-btn active" data-type="tourism"
                            style="display:flex;align-items:center;gap:0.5rem;padding:0.7rem 1rem;border:1px solid #2F3526;background:#2F3526;color:#FAF7F2;border-radius:4px;cursor:pointer;transition:all 0.2s;font-family:'Instrument Sans',sans-serif;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;">
                            <i data-lucide="hotel" style="width:14px;height:14px;flex-shrink:0;"></i>
                            <span>Hotelaria e Turismo</span>
                        </button>
                        <button class="type-btn" data-type="agriculture"
                            style="display:flex;align-items:center;gap:0.5rem;padding:0.7rem 1rem;border:1px solid rgba(62,74,63,0.2);background:transparent;color:#2F3526;border-radius:4px;cursor:pointer;transition:all 0.2s;font-family:'Instrument Sans',sans-serif;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;">
                            <i data-lucide="leaf" style="width:14px;height:14px;flex-shrink:0;"></i>
                            <span>Agricultura</span>
                        </button>
                        <button class="type-btn" data-type="energy"
                            style="display:flex;align-items:center;gap:0.5rem;padding:0.7rem 1rem;border:1px solid rgba(62,74,63,0.2);background:transparent;color:#2F3526;border-radius:4px;cursor:pointer;transition:all 0.2s;font-family:'Instrument Sans',sans-serif;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;">
                            <i data-lucide="zap" style="width:14px;height:14px;flex-shrink:0;"></i>
                            <span>Energia</span>
                        </button>
                        <button class="type-btn" data-type="realestate"
                            style="display:flex;align-items:center;gap:0.5rem;padding:0.7rem 1rem;border:1px solid rgba(62,74,63,0.2);background:transparent;color:#2F3526;border-radius:4px;cursor:pointer;transition:all 0.2s;font-family:'Instrument Sans',sans-serif;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;">
                            <i data-lucide="building-2" style="width:14px;height:14px;flex-shrink:0;"></i>
                            <span>Promoção Imobiliária</span>
                        </button>
                    </div>
                </div>

                <!-- MAIN GRID: inputs + results -->
                <div id="invest-main-grid">

                    <!-- LEFT: INPUTS -->
                    <div style="background:#fff;border:1px solid rgba(62,74,63,0.12);border-radius:4px;padding:1.25rem;">
                        <div id="form-fields" style="display:flex;flex-direction:column;gap:0;"></div>
                        <p id="calc-error" style="display:none;font-family:'Instrument Sans',sans-serif;font-size:0.75rem;color:#c0392b;margin-top:0.75rem;text-align:center;"></p>
                        <button id="btn-calculate" style="width:100%;margin-top:1.25rem;padding:0.75rem;border:1px solid #2F3526;background:#2F3526;color:#FAF7F2;cursor:pointer;font-family:'Instrument Sans',sans-serif;font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;border-radius:4px;transition:all 0.3s;">
                            Calcular
                        </button>
                    </div>

                    <!-- RIGHT: RESULTS -->
                    <div style="background:#fff;border:1px solid rgba(62,74,63,0.12);border-radius:4px;padding:1.25rem;">

                        <p style="font-family:'Instrument Sans',sans-serif;font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:#9C7A3C;margin-bottom:1rem;">Resultados</p>

                        <!-- 4 KPI CARDS -->
                        <div id="invest-kpi-grid">
                            <div style="background:#EDE8E0;padding:1.25rem;border-radius:4px;">
                                <p id="kpi1-label" style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:#9C7A3C;margin-bottom:0.4rem;">Receita Anual</p>
                                <p id="kpi1-value" style="font-family:'Instrument Serif',serif;font-size:1.6rem;color:#2F3526;margin:0;line-height:1;">—</p>
                            </div>
                            <div style="background:#EDE8E0;padding:1.25rem;border-radius:4px;">
                                <p id="kpi2-label" style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:#9C7A3C;margin-bottom:0.4rem;">Cash Flow Líquido /ano</p>
                                <p id="kpi2-value" style="font-family:'Instrument Serif',serif;font-size:1.6rem;color:#2F3526;margin:0;line-height:1;">—</p>
                            </div>
                            <div style="background:#2F3526;padding:1.25rem;border-radius:4px;">
                                <p id="kpi3-label" style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:#9C7A3C;margin-bottom:0.4rem;">Rentabilidade do Capital</p>
                                <p id="kpi3-value" style="font-family:'Instrument Serif',serif;font-size:1.6rem;color:#FAF7F2;margin:0;line-height:1;">—</p>
                            </div>
                            <div style="background:#2F3526;padding:1.25rem;border-radius:4px;">
                                <p id="kpi4-label" style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:#9C7A3C;margin-bottom:0.4rem;">Payback</p>
                                <p id="kpi4-value" style="font-family:'Instrument Serif',serif;font-size:1.6rem;color:#FAF7F2;margin:0;line-height:1;">—</p>
                            </div>
                        </div>

                        <!-- LEAD FORM -->
                        <div style="border-top:1px solid rgba(62,74,63,0.1);padding-top:1.25rem;">
                            <p style="font-family:'Instrument Sans',sans-serif;font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:#9C7A3C;margin-bottom:0.3rem;">Análise Personalizada</p>
                            <p style="font-family:'Instrument Sans',sans-serif;font-size:0.8rem;color:#6b7a5e;margin-bottom:1rem;line-height:1.5;">Quer um estudo de viabilidade detalhado, sem compromisso?</p>
                            <div style="display:flex;flex-direction:column;gap:0.6rem;">
                                <input type="text" id="lead-name" placeholder="Nome *"
                                    style="border:none;border-bottom:1px solid rgba(62,74,63,0.2);background:transparent;padding:0.4rem 0;font-family:'Instrument Sans',sans-serif;font-size:0.85rem;color:#2F3526;outline:none;width:100%;">
                                <input type="email" id="lead-email" placeholder="Email *"
                                    style="border:none;border-bottom:1px solid rgba(62,74,63,0.2);background:transparent;padding:0.4rem 0;font-family:'Instrument Sans',sans-serif;font-size:0.85rem;color:#2F3526;outline:none;width:100%;">
                                <input type="tel" id="lead-phone" placeholder="Telefone (opcional)"
                                    style="border:none;border-bottom:1px solid rgba(62,74,63,0.2);background:transparent;padding:0.4rem 0;font-family:'Instrument Sans',sans-serif;font-size:0.85rem;color:#2F3526;outline:none;width:100%;">
                                <div id="lead-feedback" style="display:none;padding:0.6rem;text-align:center;font-size:0.8rem;border-radius:4px;"></div>
                                <button id="btn-lead"
                                    style="width:100%;margin-top:0.25rem;padding:0.7rem;border:1px solid #9C7A3C;background:transparent;color:#9C7A3C;cursor:pointer;font-family:'Instrument Sans',sans-serif;font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;border-radius:4px;transition:all 0.3s;">
                                    Solicitar Análise
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    `;
}

export function initInvest() {

    let currentType = 'tourism';

    const IS = `width:100%;border:none;border-bottom:1px solid rgba(62,74,63,0.2);background:transparent;padding:0.4rem 0;font-family:'Instrument Sans',sans-serif;font-size:0.9rem;color:#2F3526;outline:none;`;
    const LS = `font-family:'Instrument Sans',sans-serif;font-size:0.62rem;letter-spacing:0.15em;text-transform:uppercase;color:#9C7A3C;display:block;margin-bottom:0.3rem;`;

    function sectionHTML(title) {
        return `<div style="padding-top:1.1rem;padding-bottom:0.5rem;border-bottom:1px solid rgba(62,74,63,0.1);margin-bottom:0.1rem;">
                    <p style="font-family:'Instrument Sans',sans-serif;font-size:0.62rem;letter-spacing:0.2em;text-transform:uppercase;color:#2F3526;margin:0;">${title}</p>
                </div>`;
    }

    function fieldHTML(id, label, opts = {}) {
        const live = opts.live
            ? `<span id="${opts.live}" style="font-family:'Instrument Sans',sans-serif;font-size:0.65rem;color:#9C7A3C;display:block;text-align:right;margin-top:0.1rem;min-height:0.8rem;"></span>`
            : '';
        return `<div class="invest-field-row">
                    <label style="${LS};margin:0;">${label}${live}</label>
                    <input type="number" id="${id}" min="0"
                        ${opts.step ? `step="${opts.step}"` : ''}
                        ${opts.max  ? `max="${opts.max}"`   : ''}
                        value="${opts.value !== undefined ? opts.value : ''}"
                        style="${IS};width:100%;text-align:right;">
                </div>`;
    }

    const defaults = {
        tourism: {
            'inp-investment': 2000000,
            'inp-rooms':      12,
            'inp-night':      150,
            'inp-occ':        65,
            'inp-opex':       45,
            'inp-loan':       60,
            'inp-rate':       4,
            'inp-lterm':      15,
        },
        agriculture: {
            'inp-investment': 800000,
            'inp-land':       120,
            'inp-rev-ha':     1200,
            'inp-cost-ha':    400,
            'inp-subsidy':    18000,
            'inp-loan':       50,
            'inp-rate':       3.5,
            'inp-lterm':      12,
        },
        energy: {
            'inp-investment': 3000000,
            'inp-mw':         2,
            'inp-hours':      1800,
            'inp-kwh':        0.065,
            'inp-loan':       70,
            'inp-rate':       3.5,
            'inp-lterm':      20,
        },
        realestate: {
            'inp-investment': 1500000,
            'inp-buildarea':  2000,
            'inp-saleprice':  2500,
            'inp-buildtime':  3,
            'inp-loan':       65,
            'inp-rate':       4.5,
            'inp-lterm':      3,
        },
    };

    function getForms(type) {
        const d = defaults[type];
        const v = (id) => ({ value: d[id] });
        const forms = {
            tourism: `
                ${sectionHTML('Investimento')}
                ${fieldHTML('inp-investment', 'Investimento Total (€)',              { ...v('inp-investment') })}
                ${sectionHTML('Operação')}
                ${fieldHTML('inp-rooms',  'Número de Quartos',                       { ...v('inp-rooms') })}
                ${fieldHTML('inp-night',  'Preço Médio / Noite (€)',                 { ...v('inp-night') })}
                ${fieldHTML('inp-occ',    'Taxa de Ocupação (%)',   { max:100,        ...v('inp-occ') })}
                ${fieldHTML('inp-opex',   'Custos Operacionais (%)', { max:100, live:'opex-live', ...v('inp-opex') })}
                ${sectionHTML('Financiamento')}
                ${fieldHTML('inp-loan',   'Financiamento Bancário (%)', { max:95,     ...v('inp-loan') })}
                ${fieldHTML('inp-rate',   'Taxa de Juro (%)',       { step:'0.1',     ...v('inp-rate') })}
                ${fieldHTML('inp-lterm',  'Prazo do Empréstimo (anos)',               { ...v('inp-lterm') })}
            `,
            agriculture: `
                ${sectionHTML('Investimento')}
                ${fieldHTML('inp-investment', 'Investimento Total (€)',              { ...v('inp-investment') })}
                ${fieldHTML('inp-land',       'Área do Terreno (ha)',                { ...v('inp-land') })}
                ${sectionHTML('Rentabilidade')}
                ${fieldHTML('inp-rev-ha',  'Receita por Hectare (€/ha/ano)',         { ...v('inp-rev-ha') })}
                ${fieldHTML('inp-cost-ha', 'Custos por Hectare (€/ha/ano)',          { ...v('inp-cost-ha') })}
                ${fieldHTML('inp-subsidy', 'Subsídios Anuais (€)',                   { ...v('inp-subsidy') })}
                ${sectionHTML('Financiamento')}
                ${fieldHTML('inp-loan',  'Financiamento Bancário (%)', { max:95,     ...v('inp-loan') })}
                ${fieldHTML('inp-rate',  'Taxa de Juro (%)',       { step:'0.1',     ...v('inp-rate') })}
                ${fieldHTML('inp-lterm', 'Prazo do Empréstimo (anos)',               { ...v('inp-lterm') })}
            `,
            energy: `
                ${sectionHTML('Investimento')}
                ${fieldHTML('inp-investment', 'Investimento Total (€)',              { ...v('inp-investment') })}
                ${sectionHTML('Produção')}
                ${fieldHTML('inp-mw',    'Potência Instalada (MW)',  { step:'0.1',   ...v('inp-mw') })}
                ${fieldHTML('inp-hours', 'Horas de Produção / Ano',                  { ...v('inp-hours') })}
                ${fieldHTML('inp-kwh',   'Preço de Venda (€/kWh)',  { step:'0.001', ...v('inp-kwh') })}
                ${sectionHTML('Financiamento')}
                ${fieldHTML('inp-loan',  'Financiamento Bancário (%)', { max:95,     ...v('inp-loan') })}
                ${fieldHTML('inp-rate',  'Taxa de Juro (%)',       { step:'0.1',     ...v('inp-rate') })}
                ${fieldHTML('inp-lterm', 'Prazo do Empréstimo (anos)',               { ...v('inp-lterm') })}
            `,
            realestate: `
                ${sectionHTML('Investimento')}
                ${fieldHTML('inp-investment', 'Investimento Total (€)',              { ...v('inp-investment') })}
                ${sectionHTML('Desenvolvimento')}
                ${fieldHTML('inp-buildarea',  'Área Construível (m²)',               { ...v('inp-buildarea') })}
                ${fieldHTML('inp-saleprice',  'Preço de Venda (€/m²)',               { ...v('inp-saleprice') })}
                ${fieldHTML('inp-buildtime',  'Prazo de Construção (anos)',           { ...v('inp-buildtime') })}
                ${sectionHTML('Financiamento')}
                ${fieldHTML('inp-loan',  'Financiamento Bancário (%)', { max:95,     ...v('inp-loan') })}
                ${fieldHTML('inp-rate',  'Taxa de Juro (%)',       { step:'0.1',     ...v('inp-rate') })}
                ${fieldHTML('inp-lterm', 'Prazo do Empréstimo (anos)',               { ...v('inp-lterm') })}
            `,
        };
        return forms[type];
    }

    function renderForm(type) {
        const container = document.getElementById('form-fields');
        if (!container) return;
        container.innerHTML = getForms(type);

        if (type === 'tourism') {
            ['inp-rooms','inp-night','inp-occ','inp-opex'].forEach(id => {
                document.getElementById(id)?.addEventListener('input', updateOpexLive);
            });
            updateOpexLive();
        }

        container.querySelectorAll('input').forEach(inp => {
            inp.addEventListener('input', calculate);
        });

        calculate();
    }

    function updateOpexLive() {
        const rooms = parseFloat(document.getElementById('inp-rooms')?.value) || 0;
        const night = parseFloat(document.getElementById('inp-night')?.value) || 0;
        const occ   = parseFloat(document.getElementById('inp-occ')?.value)   / 100 || 0;
        const opex  = parseFloat(document.getElementById('inp-opex')?.value)  / 100 || 0;
        const eur   = rooms * night * 365 * occ * opex;
        const el    = document.getElementById('opex-live');
        if (el) el.textContent = eur > 0 ? '≈ €' + Math.round(eur).toLocaleString('pt-PT') + ' /ano' : '';
    }

    const ENERGY_OPEX_PER_MW = 20000;

    function g(id) { return parseFloat(document.getElementById(id)?.value) || 0; }

    function fmt(n) {
        const abs = Math.abs(n), sign = n < 0 ? '-' : '';
        if (abs >= 1000000) return sign + '€' + (abs/1000000).toFixed(2) + 'M';
        if (abs >= 1000)    return sign + '€' + Math.round(abs/1000) + 'k';
        return sign + '€' + Math.round(abs);
    }

    function fmtPct(n)   { return n.toFixed(1) + '%'; }
    function fmtYears(n) { return n < 1 ? '< 1 ano' : n > 40 ? '> 40 anos' : Math.ceil(n) + ' anos'; }

    function debtService(loan, annualRate, years) {
        if (!loan || !annualRate || !years) return 0;
        const r = annualRate / 12, n = years * 12;
        return loan * (r * Math.pow(1+r,n)) / (Math.pow(1+r,n)-1) * 12;
    }

    function showError(msg) {
        const el = document.getElementById('calc-error');
        if (!el) return;
        el.textContent = msg;
        el.style.display = 'block';
    }

    function clearError() {
        const el = document.getElementById('calc-error');
        if (el) el.style.display = 'none';
    }

    function setKPIs(kpis) {
        kpis.forEach((k, i) => {
            const n = i + 1;
            if (k.label) document.getElementById(`kpi${n}-label`).textContent = k.label;
            document.getElementById(`kpi${n}-value`).textContent = k.value;
        });
    }

    function calculate() {
        clearError();

        const investment = g('inp-investment');
        const loanPct    = g('inp-loan') / 100;
        const rate       = g('inp-rate') / 100;
        const lterm      = g('inp-lterm');

        if (!investment) return;

        const loanAmt = investment * loanPct;
        const equity  = investment - loanAmt;
        if (equity <= 0) return showError('O financiamento bancário não pode ser 100%.');
        const ds = debtService(loanAmt, rate, lterm);

        if (currentType === 'tourism') {
            const rooms   = g('inp-rooms');
            const night   = g('inp-night');
            const occ     = g('inp-occ') / 100;
            const opexPct = g('inp-opex') / 100;
            if (!rooms || !night || !occ) return;
            const revenue  = rooms * night * 365 * occ;
            const cashflow = revenue * (1 - opexPct) - ds;
            const roe      = (cashflow / equity) * 100;
            const payback  = cashflow > 0 ? equity / cashflow : Infinity;
            setKPIs([
                { value: fmt(revenue)      },
                { value: fmt(cashflow)     },
                { value: fmtPct(roe)       },
                { value: fmtYears(payback) },
            ]);

        } else if (currentType === 'agriculture') {
            const land    = g('inp-land');
            const revHa   = g('inp-rev-ha');
            const costHa  = g('inp-cost-ha');
            const subsidy = g('inp-subsidy');
            if (!land || !revHa) return;
            const revenue  = land * revHa + subsidy;
            const cashflow = (revenue - land * costHa) - ds;
            const roe      = (cashflow / equity) * 100;
            const payback  = cashflow > 0 ? equity / cashflow : Infinity;
            setKPIs([
                { value: fmt(revenue)      },
                { value: fmt(cashflow)     },
                { value: fmtPct(roe)       },
                { value: fmtYears(payback) },
            ]);

        } else if (currentType === 'energy') {
            const mw    = g('inp-mw');
            const hours = g('inp-hours');
            const kwh   = g('inp-kwh');
            if (!mw || !hours || !kwh) return;
            const revenue  = mw * 1000 * hours * kwh;
            const cashflow = (revenue - mw * ENERGY_OPEX_PER_MW) - ds;
            const roe      = (cashflow / equity) * 100;
            const payback  = cashflow > 0 ? equity / cashflow : Infinity;
            setKPIs([
                { value: fmt(revenue)      },
                { value: fmt(cashflow)     },
                { value: fmtPct(roe)       },
                { value: fmtYears(payback) },
            ]);

        } else if (currentType === 'realestate') {
            const buildarea = g('inp-buildarea');
            const saleprice = g('inp-saleprice');
            const buildtime = g('inp-buildtime') || 2;
            if (!buildarea || !saleprice) return;
            const gdv    = buildarea * saleprice;
            const profit = gdv - investment - debtService(loanAmt, rate, buildtime) * buildtime;
            const roe    = (profit / equity) * 100;
            setKPIs([
                { label: 'Valor de Venda Total',             value: fmt(gdv)    },
                { label: 'Lucro do Projeto',                 value: fmt(profit) },
                { label: 'Rentabilidade do Capital Próprio', value: fmtPct(roe) },
                { label: 'Prazo de Retorno',                 value: buildtime + (buildtime === 1 ? ' ano' : ' anos') },
            ]);
        }
    }

    // ─── TYPE BUTTONS ────────────────────────────────────────────────────────
    document.getElementById('invest-type-grid')?.addEventListener('click', e => {
        const btn = e.target.closest('.type-btn');
        if (!btn) return;
        currentType = btn.dataset.type;
        document.querySelectorAll('.type-btn').forEach(b => {
            b.style.background  = 'transparent';
            b.style.color       = '#2F3526';
            b.style.borderColor = 'rgba(62,74,63,0.2)';
        });
        btn.style.background  = '#2F3526';
        btn.style.color       = '#FAF7F2';
        btn.style.borderColor = '#2F3526';

        if (currentType !== 'realestate') {
            document.getElementById('kpi1-label').textContent = 'Receita Anual';
            document.getElementById('kpi2-label').textContent = 'Cash Flow Líquido /ano';
            document.getElementById('kpi3-label').textContent = 'Rentabilidade do Capital';
            document.getElementById('kpi4-label').textContent = 'Payback';
        }

        renderForm(currentType);
        if (window.lucide) lucide.createIcons();
    });

    // ─── LEAD BUTTON ─────────────────────────────────────────────────────────
    document.getElementById('btn-lead')?.addEventListener('click', async () => {
        const name     = document.getElementById('lead-name')?.value?.trim();
        const email    = document.getElementById('lead-email')?.value?.trim();
        const phone    = document.getElementById('lead-phone')?.value?.trim();
        const feedback = document.getElementById('lead-feedback');
        const btn      = document.getElementById('btn-lead');

        if (!name || !email) {
            feedback.style.display     = 'block';
            feedback.style.background  = '#FEF2F2';
            feedback.style.color       = '#DC2626';
            feedback.innerText         = 'Por favor preencha o nome e o email.';
            return;
        }

        btn.disabled    = true;
        btn.innerText   = 'A enviar...';

        try {
            await new Promise((resolve) => {
                if (window.emailjs) return resolve();
                const interval = setInterval(() => {
                    if (window.emailjs) { clearInterval(interval); resolve(); }
                }, 100);
            });
            const tipo     = document.querySelector('.type-btn[style*="background: rgb(47"]') || document.querySelector('.type-btn.active');
            const tipoName = tipo ? tipo.querySelector('span')?.innerText : currentType;

            const inputs = [...document.querySelectorAll('#form-fields .invest-field-row')].map(row => {
                const label = row.querySelector('label')?.innerText?.trim().split('\n')[0];
                const value = row.querySelector('input')?.value;
                return `${label}: ${value}`;
            }).join('\n');

            const kpis = [1,2,3,4].map(i => {
                const label = document.getElementById(`kpi${i}-label`)?.innerText;
                const value = document.getElementById(`kpi${i}-value`)?.innerText;
                return `${label}: ${value}`;
            }).join('\n');

            await emailjs.send('service_ad9oepj', 'template_vswa3qc', {
                from_name:  name,
                from_email: email,
                phone:      phone || '—',
                message:    `Tipo de projeto: ${tipoName}\n\n--- INPUTS ---\n${inputs}\n\n--- RESULTADOS ---\n${kpis}`
            });

            feedback.style.display    = 'block';
            feedback.style.background = '#F0FDF4';
            feedback.style.color      = '#16A34A';
            feedback.innerText        = 'Pedido enviado. Entraremos em contacto brevemente.';
            btn.innerText             = '✓ Enviado';

        } catch (err) {
            feedback.style.display    = 'block';
            feedback.style.background = '#FEF2F2';
            feedback.style.color      = '#DC2626';
            feedback.innerText        = 'Erro ao enviar. Tente novamente.';
            btn.disabled              = false;
            btn.innerText             = 'Solicitar Análise';
            console.error(err);
        }
    });

    document.getElementById('btn-lead')?.addEventListener('mouseover', e => {
        if (!e.target.disabled) { e.target.style.background = '#9C7A3C'; e.target.style.color = '#FAF7F2'; }
    });
    document.getElementById('btn-lead')?.addEventListener('mouseout', e => {
        if (!e.target.disabled) { e.target.style.background = 'transparent'; e.target.style.color = '#9C7A3C'; }
    });

    // ─── EMAILJS ──────────────────────────────────────────────────────────────
    if (!document.getElementById('emailjs-sdk')) {
        const script    = document.createElement('script');
        script.id       = 'emailjs-sdk';
        script.src      = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
        script.onload   = () => emailjs.init('wMlwvV8YGbVR5i6cO');
        document.head.appendChild(script);
    } else if (window.emailjs) {
        emailjs.init('wMlwvV8YGbVR5i6cO');
    }

    // ─── INIT ─────────────────────────────────────────────────────────────────
    renderForm('tourism');
    if (window.lucide) lucide.createIcons();
}