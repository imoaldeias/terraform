import { appData } from './content_data.js';

export function renderHero() {
    const { about } = appData;

    return `
        <section class="pt-24 pb-32 bg-white">
            <div class="max-w-7xl mx-auto px-6">
                
                <!-- HEADER -->
                <div class="text-center mb-20">

                    <!-- Label (L3) -->
                    <span class="label mb-10 block">
                        A Nossa Visão
                    </span>

                    <!-- Título (L1) -->
                    <h1>
                        Especialistas em ativos rurais
                    </h1>

                </div>

                <!-- IMAGE -->
                <div class="relative w-full aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl img-hover-zoom bg-gray-50 mb-24">
                    <img 
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80" 
                        class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        alt="Paisagem Alentejana"
                    >
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-900/10 to-transparent pointer-events-none"></div>
                </div>

                <!-- TEXT CONTENT -->
                <div class="max-w-3xl mx-auto space-y-12">

                    <!-- Parágrafos principais (L4) -->
                    <p>
                        A TerraPrima nasce de uma premissa simples: a terra não é apenas um ativo, é um legado. 
                        Mais do que um recurso económico, é património, identidade e futuro.
                    </p>

                    <p>
                        Somos uma estrutura dedicada à representação estratégica de ativos territoriais, onde o conhecimento, 
                        a técnica e a visão de longo prazo se cruzam. Atuamos de forma integrada nos setores da agricultura, 
                        turismo e outras indústrias da região.
                    </p>

                    <!-- Serviços -->
                    <div class="pt-6 space-y-10">

                        <div>
                            <h2 class="mb-4">
                                Mediação de imóveis exclusivos
                            </h2>
                            <p>
                                Representação discreta na aquisição e alienação de propriedades singulares através 
                                de uma rede de contactos exclusiva.
                            </p>
                        </div>

                        <div>
                            <h2 class="mb-4">
                                Gestão e serviços agrícolas
                            </h2>
                            <p>
                                Acompanhamento técnico e operacional de ativos agrícolas, focando na eficiência 
                                e rentabilidade produtiva.
                            </p>
                        </div>

                        <div>
                            <h2 class="mb-4">
                                Desenvolvimento de projetos turísticos
                            </h2>
                            <p>
                                Estruturação de investimentos turísticos integrados que respeitam a sustentabilidade 
                                e a herança do território.
                            </p>
                        </div>

                        <div>
                            <h2 class="mb-4">
                                Consultoria em investimento e Vistos Gold
                            </h2>
                            <p>
                                Aconselhamento estratégico em investimento e processos de residência, garantindo 
                                segurança jurídica e financeira.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    `;
}