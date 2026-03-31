/* =====================================================
   content_data.js
===================================================== */

export let appData = {
    properties: [],
    about: {
        title: "TerraPrimus Alentejo Heritage Estate",
        subtitle: "Representação e Gestão de Ativos Rurais",
        description: "Estrutura especializada na gestão e valorização de património rural.",
        values: ["Confidencialidade", "Rigor", "Visão de Longo Prazo"]
    }
};

const SHEET_CSV_URL =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSMJLh55N7yiksusMxcYd7XpWTo1GE6y0FpSPiqLLBrzodkh2AGLen7aHl8D2RmEj239c7mjvvNS6UW/pub?output=csv';

/* ================= HELPERS ================= */

function toNumber(value) {
    const num = parseInt(value);
    return isNaN(num) ? 0 : num;
}

function capitalizeFirst(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeHTML(str) {
    if (!str) return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function normalizeProperty(p) {
    return {
        id: toNumber(p.id),

        title: escapeHTML((p.title || '').trim()),
        location: escapeHTML((p.location || '').trim()),
        locationNormalized: (p.location || '').trim().toLowerCase(),

        tipologia: escapeHTML(
            capitalizeFirst((p.tipologia || '').trim())
        ),

        price: escapeHTML((p.price || '').trim()),
        description: (p.description || '').trim(),

        priceValue: p.priceValue && p.priceValue.trim() !== ''
            ? parseInt(p.priceValue.trim().replace(/\s/g, '').replace('.', '').replace(',', '.'))
            : null,

        areaConstruida: toNumber(p.areaConstruida),
        areaTerreno: toNumber(p.areaTerreno),
        quartos: toNumber(p.quartos),

        gallery_ids: (p.gallery_ids || '').trim(),

        youtube_id: (p.youtube_id || '').trim(),

        image: (() => {
            const firstGallery = (p.gallery_ids || '').trim().split(',')[0].trim();
            return firstGallery.length > 5
                ? firstGallery
                : 'https://placehold.co/600x800?text=TerraPrimus';
        })()
    };
}

/* ================= SIMPLE CSV PARSER ================= */

function parseCSV(text) {
    const rows = [];
    const headers = [];

    let i = 0;

    function parseField() {
        if (text[i] === '"') {
            i++; // skip opening quote
            let field = '';
            while (i < text.length) {
                if (text[i] === '"' && text[i + 1] === '"') {
                    field += '"';
                    i += 2;
                } else if (text[i] === '"') {
                    i++; // skip closing quote
                    break;
                } else {
                    field += text[i++];
                }
            }
            return field;
        } else {
            let field = '';
            while (i < text.length && text[i] !== ',' && text[i] !== '\n' && text[i] !== '\r') {
                field += text[i++];
            }
            return field.trim();
        }
    }

    function parseRow() {
        const fields = [];
        while (i < text.length && text[i] !== '\n' && text[i] !== '\r') {
            fields.push(parseField());
            if (text[i] === ',') i++;
        }
        // skip \r\n or \n
        if (text[i] === '\r') i++;
        if (text[i] === '\n') i++;
        return fields;
    }

    // Parse headers
    const headerFields = parseRow();
    headerFields.forEach(h => headers.push(h.trim()));

    // Parse data rows
    while (i < text.length) {
        const fields = parseRow();
        if (fields.every(f => f === '')) continue;
        const obj = {};
        headers.forEach((h, idx) => {
            obj[h] = fields[idx] || '';
        });
        rows.push(obj);
    }

    return rows;
}

/* ================= DATA LOADER ================= */

export async function loadSiteData() {
    try {
        const response = await fetch(SHEET_CSV_URL);

        if (!response.ok) {
            throw new Error("Falha ao carregar CSV");
        }

        const csvText = await response.text();

        const rawData = parseCSV(csvText);

        const cleanData = rawData
            .map(normalizeProperty)
            .filter(p => p.id !== 0 && p.title.trim() !== '' && p.location.trim() !== '');

        appData.properties = cleanData;

        console.log("✅ Propriedades carregadas:", cleanData.length);
        console.log("🔑 Chaves da primeira propriedade:", Object.keys(cleanData[0]));

        return cleanData;

    } catch (error) {
        console.error("❌ Erro real:", error);
        throw error;
    }
}