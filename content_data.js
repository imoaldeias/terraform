// content_data.js

import Papa from 'https://cdn.skypack.dev/papaparse';

/**
 * Estado global da aplicação.
 * Guarda todas as propriedades carregadas.
 */
export let appData = {
    properties: [],
    about: {
        title: "TerraPrimus Heritage Estate",
        subtitle: "Líderes na Gestão de Ativos Rurais de Luxo",
        description: "Curadoria exclusiva de ativos que representam o melhor do património rural português.",
        values: ["Confidencialidade", "Rigor Técnico", "Valorização"]
    }
};

// URL pública do Google Sheets em formato CSV
const SHEET_CSV_URL =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSMJLh55N7yiksusMxcYd7XpWTo1GE6y0FpSPiqLLBrzodkh2AGLen7aHl8D2RmEj239c7mjvvNS6UW/pub?output=csv';

/**
 * Função auxiliar para converter valores numéricos de forma segura.
 */
function toNumber(value) {
    const num = parseInt(value);
    return isNaN(num) ? 0 : num;
}

/**
 * Normaliza cada propriedade recebida do Google Sheets.
 */

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function normalizeProperty(p) {
    return {
        id: toNumber(p.id),

        title: (p.title || '').trim(),
        location: (p.location || '').trim(),
        tipologia: capitalizeFirst((p.tipologia || '').trim()),

        price: (p.price || '').trim(),
        priceValue: p.priceValue && p.priceValue.trim() !== ''
            ? parseInt(
                p.priceValue
                    .replace(/\./g, '')
                    .replace(/\s/g, '')
                    .replace('€', '')
            )
        : null,

        areaConstruida: toNumber(p.areaConstruida),
        areaTerreno: toNumber(p.areaTerreno),
        quartos: toNumber(p.quartos),

        description: (p.description || '').trim(),

        gallery_ids: (p.gallery_ids || '').trim(),

        image: p.image_capa && p.image_capa.trim() !== ''
            ? p.image_capa.trim()
            : 'https://placehold.co/600x800?text=TerraPrimus'
    };
}

/**
 * Carrega dados do Google Sheets.
 */
export async function loadSiteData() {
    return new Promise((resolve, reject) => {

        Papa.parse(SHEET_CSV_URL, {
            download: true,
            header: true,
            skipEmptyLines: true,

            complete: (results) => {

                try {
                    const cleanData = results.data
                        .map(normalizeProperty)
                        .filter(p => p.id !== 0); // remove entradas inválidas

                    appData.properties = cleanData;

                    resolve(cleanData);

                } catch (error) {
                    reject(error);
                }
            },

            error: (error) => reject(error)
        });
    });
}