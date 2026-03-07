import { appData } from './content_data.js';

export function renderHero() {
    const { about } = appData;

    return `
        <section class="pt-24 pb-32" style="background:#FAF7F2;">
            <div class="max-w-7xl mx-auto px-6">
                
                <!-- HEADER -->
                <div class="text-center mb-20">

                    <span class="label mb-10 block">
                        A Nossa Visão
                    </span>

                    <h1>
                        Especialistas em ativos rurais
                    </h1>

                </div>

                <!-- TEXT CONTENT -->
                <div class="max-w-3xl mx-auto">

                    <p style="line-height:1.8; color:#2F3526; margin-bottom:1.5rem;">
                        A TerraPrima nasce de uma premissa simples: a terra não é apenas um ativo, é um legado. 
                        Mais do que um recurso económico, é património, identidade e futuro.
                    </p>

                    <p style="line-height:1.8; color:#2F3526; margin-bottom:3rem;">
                        Somos uma estrutura dedicada à representação estratégica de ativos territoriais, onde o conhecimento, 
                        a técnica e a visão de longo prazo se cruzam. Atuamos de forma integrada nos setores da agricultura, 
                        turismo e outras indústrias da região.
                    </p>

                    <!-- Serviços -->
                    <div style="display:flex; flex-direction:column;">

                        <div style="display:grid; grid-template-columns:2rem 1fr; gap:1rem; padding:1.75rem 0; border-top:1px solid rgba(62,74,63,0.12);">
                            <i data-lucide="handshake" style="width:18px; height:18px; color:#9C7A3C;"></i>
                            <div>
                                <p style="font-family:'Instrument Sans',sans-serif; font-size:0.68rem; letter-spacing:0.2em; text-transform:uppercase; color:#9C7A3C; margin-bottom:0.5rem;">Mediação de Imóveis Exclusivos</p>
                                <p style="line-height:1.7; color:#2F3526;">Representação discreta na aquisição e alienação de propriedades singulares através de uma rede de contactos exclusiva.</p>
                            </div>
                        </div>

                        <div style="display:grid; grid-template-columns:2rem 1fr; gap:1rem; padding:1.75rem 0; border-top:1px solid rgba(62,74,63,0.12);">
                            <i data-lucide="leaf" style="width:18px; height:18px; color:#9C7A3C;"></i>
                            <div>
                                <p style="font-family:'Instrument Sans',sans-serif; font-size:0.68rem; letter-spacing:0.2em; text-transform:uppercase; color:#9C7A3C; margin-bottom:0.5rem;">Gestão e Serviços Agrícolas</p>
                                <p style="line-height:1.7; color:#2F3526;">Acompanhamento técnico e operacional de ativos agrícolas, focando na eficiência e rentabilidade produtiva.</p>
                            </div>
                        </div>

                        <div style="display:grid; grid-template-columns:2rem 1fr; gap:1rem; padding:1.75rem 0; border-top:1px solid rgba(62,74,63,0.12);">
                            <i data-lucide="hotel" style="width:18px; height:18px; color:#9C7A3C; margin-top:3px;"></i>
                            <div>
                                <p style="font-family:'Instrument Sans',sans-serif; font-size:0.68rem; letter-spacing:0.2em; text-transform:uppercase; color:#9C7A3C; margin-bottom:0.5rem;">Desenvolvimento de Projetos Turísticos</p>
                                <p style="line-height:1.7; color:#2F3526;">Estruturação de investimentos turísticos integrados que respeitam a sustentabilidade e a herança do território.</p>
                            </div>
                        </div>

                        <div style="display:grid; grid-template-columns:2rem 1fr; gap:1rem; padding:1.75rem 0; border-top:1px solid rgba(62,74,63,0.12); border-bottom:1px solid rgba(62,74,63,0.12);">
                            <i data-lucide="coins" style="width:18px; height:18px; color:#9C7A3C;"></i>
                            <div>
                                <p style="font-family:'Instrument Sans',sans-serif; font-size:0.68rem; letter-spacing:0.2em; text-transform:uppercase; color:#9C7A3C; margin-bottom:0.5rem;">Consultoria em Investimento e Vistos Gold</p>
                                <p style="line-height:1.7; color:#2F3526;">Aconselhamento estratégico em investimento e processos de residência, garantindo segurança jurídica e financeira.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    `;
}