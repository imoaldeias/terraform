// component_savesim.js
// Shared "Guardar Simulação" logic used by both calculators.

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbytFuTGrN2UOao5b9QlLFudv2Lak_f0IBqdg6r69fduzt-UD062REk-vbA-7aLm27h1/exec';

// ─────────────────────────────────────────────────────────────────────────────
// Inject the modal HTML + styles once into the page
// ─────────────────────────────────────────────────────────────────────────────
export function initSaveSimModal() {
    if (document.getElementById('savesim-overlay')) return; // already injected

    // Styles
    const style = document.createElement('style');
    style.textContent = `
        #savesim-overlay {
            position: fixed; inset: 0;
            background: rgba(30,35,28,0.55);
            backdrop-filter: blur(4px);
            z-index: 500;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s;
        }
        #savesim-overlay.open {
            opacity: 1;
            pointer-events: all;
        }
        #savesim-modal {
            background: #FDFBF7;
            border-radius: 14px;
            width: 100%;
            max-width: 420px;
            box-shadow: 0 24px 64px rgba(0,0,0,0.18);
            transform: translateY(12px);
            transition: transform 0.2s;
            overflow: hidden;
        }
        #savesim-overlay.open #savesim-modal {
            transform: translateY(0);
        }
        .savesim-head {
            padding: 1.25rem 1.5rem 1rem;
            border-bottom: 1px solid rgba(62,74,63,0.12);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .savesim-head h3 {
            font-family: 'Instrument Serif', serif;
            font-size: 1.2rem;
            color: #2F3526;
            margin: 0;
        }
        .savesim-close {
            background: none; border: none; cursor: pointer;
            color: #7A8270; font-size: 1.2rem; line-height: 1;
        }
        .savesim-body {
            padding: 1.25rem 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.85rem;
        }
        .savesim-body p {
            font-family: 'Instrument Sans', sans-serif;
            font-size: 0.82rem;
            color: #7A8270;
            line-height: 1.5;
            margin: 0;
        }
        .savesim-input {
            width: 100%;
            border: none;
            border-bottom: 1px solid rgba(62,74,63,0.2);
            background: transparent;
            padding: 0.45rem 0;
            font-family: 'Instrument Sans', sans-serif;
            font-size: 0.88rem;
            color: #2F3526;
            outline: none;
            transition: border-color 0.2s;
        }
        .savesim-input:focus { border-color: #3E4A3F; }
        .savesim-feedback {
            display: none;
            padding: 0.6rem 0.85rem;
            border-radius: 6px;
            font-family: 'Instrument Sans', sans-serif;
            font-size: 0.8rem;
            text-align: center;
        }
        .savesim-foot {
            padding: 0.75rem 1.5rem 1.25rem;
            display: flex;
            gap: 0.75rem;
            justify-content: flex-end;
        }
        .savesim-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            padding: 0.55rem 1.1rem;
            font-family: 'Instrument Sans', sans-serif;
            font-size: 0.72rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            cursor: pointer;
            border-radius: 6px;
            transition: all 0.2s;
            border: none;
        }
        .savesim-btn-ghost {
            background: transparent;
            border: 1px solid rgba(62,74,63,0.2);
            color: #2F3526;
        }
        .savesim-btn-ghost:hover { border-color: #3E4A3F; }
        .savesim-btn-primary {
            background: #3E4A3F;
            color: #fff;
        }
        .savesim-btn-primary:hover { background: #2c3630; }
        .savesim-btn-primary:disabled { opacity: 0.45; cursor: not-allowed; }
    `;
    document.head.appendChild(style);

    // Modal HTML
    const overlay = document.createElement('div');
    overlay.id = 'savesim-overlay';
    overlay.innerHTML = `
        <div id="savesim-modal">
            <div class="savesim-head">
                <h3>Guardar Simulação</h3>
                <button class="savesim-close" id="savesim-close-btn">✕</button>
            </div>
            <div class="savesim-body">
                <p>Deixe os seus dados para guardar esta simulação e receber a análise personalizada.</p>
                <input class="savesim-input" id="savesim-name"  type="text"  placeholder="Nome *">
                <input class="savesim-input" id="savesim-email" type="email" placeholder="Email *">
                <input class="savesim-input" id="savesim-phone" type="tel"   placeholder="Telefone (opcional)">
                <div class="savesim-feedback" id="savesim-feedback"></div>
            </div>
            <div class="savesim-foot">
                <button class="savesim-btn savesim-btn-ghost"   id="savesim-cancel-btn">Cancelar</button>
                <button class="savesim-btn savesim-btn-primary" id="savesim-confirm-btn">Guardar</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    // Close on overlay click or close button
    overlay.addEventListener('click', e => { if (e.target === overlay) closeSaveSimModal(); });
    document.getElementById('savesim-close-btn').addEventListener('click',  closeSaveSimModal);
    document.getElementById('savesim-cancel-btn').addEventListener('click', closeSaveSimModal);
}

// ─────────────────────────────────────────────────────────────────────────────
// Open / close
// ─────────────────────────────────────────────────────────────────────────────
function openSaveSimModal() {
    // Reset state
    document.getElementById('savesim-name').value  = '';
    document.getElementById('savesim-email').value = '';
    document.getElementById('savesim-phone').value = '';
    const fb = document.getElementById('savesim-feedback');
    fb.style.display = 'none';
    fb.textContent   = '';
    const btn = document.getElementById('savesim-confirm-btn');
    btn.disabled    = false;
    btn.textContent = 'Guardar';

    document.getElementById('savesim-overlay').classList.add('open');
    setTimeout(() => document.getElementById('savesim-name').focus(), 150);
}

function closeSaveSimModal() {
    document.getElementById('savesim-overlay').classList.remove('open');
}

// ─────────────────────────────────────────────────────────────────────────────
// Collect results from the DOM (works for both calculators)
// ─────────────────────────────────────────────────────────────────────────────
function collectResults(calculatorType) {
    const el = id => document.getElementById(id)?.textContent?.trim() || '—';

    if (calculatorType === 'simple') {
        return {
            revenue:       el('kpi1-value'),
            cashflow:      el('kpi2-value'),
            rentabilidade: el('kpi3-value'),
            payback:       el('kpi4-value'),
            resultsDetail: [1,2,3,4].map(i =>
                `${el('kpi'+i+'-label')}: ${el('kpi'+i+'-value')}`
            ).join(' | ')
        };
    } else {
        return {
            revenue:       el('res-rev'),
            cashflow:      el('res-noi'),
            rentabilidade: el('res-irr-lev'),
            payback:       el('res-payback'),
            resultsDetail: [
                `IRR Lev: ${el('res-irr-lev')}`,
                `IRR Unlev: ${el('res-irr-unlev')}`,
                `MOIC: ${el('res-moic')}`,
                `NPV: ${el('res-npv')}`,
                `ROE: ${el('res-roe')}`,
                `CoC: ${el('res-coc')}`,
                `NOI: ${el('res-noi')}`,
                `Payback: ${el('res-payback')}`,
                `Exit: ${el('res-exit')}`,
                `DSCR: ${el('res-dscr')}`
            ].join(' | ')
        };
    }
}

function collectInputs(calculatorType) {
    const fieldSelector = calculatorType === 'simple' ? '#form-fields input' : '#cx-form-fields input';
    return [...document.querySelectorAll(fieldSelector)].map(inp => {
        const label = inp.closest('.invest-field-row, .cx-field-row')
                        ?.querySelector('label')?.textContent?.trim()
                        ?.split('\n')[0] || inp.id;
        return `${label}: ${inp.value}`;
    }).join(' | ');
}

function getProjectType(calculatorType) {
    if (calculatorType === 'simple') {
        return document.querySelector('.type-btn[style*="rgb(47"]')
            ?.querySelector('span')?.textContent?.trim()
            || document.querySelector('.type-btn.active')?.querySelector('span')?.textContent?.trim()
            || '—';
    } else {
        return document.querySelector('.cx-type-btn[style*="rgb(47"]')
            ?.querySelector('span')?.textContent?.trim() || '—';
    }
}

function getInvestment(calculatorType) {
    if (calculatorType === 'simple') {
        return document.getElementById('inp-investment')?.value || '—';
    } else {
        const price   = parseFloat(document.getElementById('inp-price')?.value)   || 0;
        const devCost = parseFloat(document.getElementById('inp-devcost')?.value) || 0;
        return String(price + devCost);
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// Main entry point — call this when "Guardar Simulação" is clicked
// ─────────────────────────────────────────────────────────────────────────────
export function openSaveSimFlow(calculatorType) {
    // 'simple' or 'complex'
    openSaveSimModal();

    // Wire confirm button — replace any old listener
    const confirmBtn = document.getElementById('savesim-confirm-btn');
    const newBtn = confirmBtn.cloneNode(true);
    confirmBtn.replaceWith(newBtn);

    newBtn.addEventListener('click', async () => {
        const name  = document.getElementById('savesim-name').value.trim();
        const email = document.getElementById('savesim-email').value.trim();
        const phone = document.getElementById('savesim-phone').value.trim();
        const fb    = document.getElementById('savesim-feedback');

        if (!name || !email) {
            fb.style.display    = 'block';
            fb.style.background = '#FEF2F2';
            fb.style.color      = '#DC2626';
            fb.textContent      = 'Por favor preencha o nome e o email.';
            return;
        }

        newBtn.disabled    = true;
        newBtn.textContent = 'A guardar...';

        const results    = collectResults(calculatorType);
        const inputs     = collectInputs(calculatorType);
        const projectType = getProjectType(calculatorType);
        const investment  = getInvestment(calculatorType);

        const data = {
            date:            new Date().toLocaleString('pt-PT'),
            calculator:      calculatorType === 'simple' ? 'Simples' : 'Complexo',
            projectType,
            name,
            email,
            phone:           phone || '—',
            investment,
            revenue:         results.revenue,
            cashflow:        results.cashflow,
            rentabilidade:   results.rentabilidade,
            payback:         results.payback,
            inputsDetail:    inputs,
            resultsDetail:   results.resultsDetail,
        };

        try {
            const res  = await fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify({ action: 'saveSimulation', data })
            });
            const json = await res.json();
            if (!json.ok) throw new Error(json.error);

            fb.style.display    = 'block';
            fb.style.background = '#F0FDF4';
            fb.style.color      = '#16A34A';
            fb.textContent      = 'Simulação guardada com sucesso!';
            newBtn.textContent  = '✓ Guardado';

            setTimeout(() => closeSaveSimModal(), 1800);

        } catch(err) {
            fb.style.display    = 'block';
            fb.style.background = '#FEF2F2';
            fb.style.color      = '#DC2626';
            fb.textContent      = 'Erro ao guardar. Tente novamente.';
            newBtn.disabled     = false;
            newBtn.textContent  = 'Guardar';
            console.error(err);
        }
    });
}