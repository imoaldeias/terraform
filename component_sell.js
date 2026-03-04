export function renderSell() {
    return `
        <section class="pt-32 pb-32 bg-white">

            <div class="max-w-7xl mx-auto px-6">

                <!-- HERO SECTION -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-28">

                    <!-- LEFT: Texto -->
                    <div class="space-y-10">

                        <h1>
                            Valorize o seu património.
                        </h1>

                        <p>
                            Na TerraPrimus, representamos proprietários através de uma análise rigorosa de posicionamento e valorização. 
                            Procuramos assegurar transações sólidas e maximizar o valor real do seu ativo no mercado global.
                        </p>

                        <p>
                            Confidencialidade absoluta, com proteção de informação e gestão reservada de todo o processo.
                        </p>

                        <p>
                            Avaliação e posicionamento assentes numa análise técnica, estratégica e no enquadramento real de mercado.
                        </p>

                        <p>
                            Acompanhamento integral, com representação estratégica, negociação e orientação até à conclusão da operação.
                        </p>

                    </div>

                    <!-- RIGHT: Formulário -->
                    <div class="bg-white p-12 rounded-[40px] border border-brand-100 shadow-2xl shadow-brand-900/5">

                        <h2 class="mb-12 text-center text-2xl font-serif font-light">
                            Solicitar Avaliação
                        </h2>

                        <form class="space-y-10">

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <input 
                                    type="text" 
                                    placeholder="Nome completo" 
                                    class="w-full pb-4 border-b border-gray-200 outline-none bg-transparent focus:border-brand-900 transition-colors"
                                    required
                                >
                                <input 
                                    type="tel" 
                                    placeholder="Telefone" 
                                    class="w-full pb-4 border-b border-gray-200 outline-none bg-transparent focus:border-brand-900 transition-colors"
                                >
                            </div>

                            <div>
                                <input 
                                    type="email" 
                                    placeholder="E-mail de contato" 
                                    class="w-full pb-4 border-b border-gray-200 outline-none bg-transparent focus:border-brand-900 transition-colors"
                                    required
                                >
                            </div>

                            <div class="grid grid-cols-2 gap-8">
                                <select class="pb-4 border-b border-gray-200 bg-transparent outline-none cursor-pointer focus:border-brand-900 transition-colors" required>
                                    <option value="" disabled selected>Tipologia</option>
                                    <option value="herdade">Herdade</option>
                                    <option value="quinta">Quinta</option>
                                    <option value="terreno">Terreno</option>
                                    <option value="moradia">Moradia</option>
                                </select>

                                <select class="pb-4 border-b border-gray-200 bg-transparent outline-none cursor-pointer focus:border-brand-900 transition-colors">
                                    <option value="" disabled selected>Nº Quartos</option>
                                    <option value="all">Todos</option>
                                    <option value="1">1 Quarto</option>
                                    <option value="2">2 Quartos</option>
                                    <option value="3">3 Quartos</option>
                                    <option value="4">4 ou mais</option>
                                </select>
                            </div>

                            <div class="grid grid-cols-2 gap-8">
                                <select class="pb-4 border-b border-gray-200 bg-transparent outline-none cursor-pointer focus:border-brand-900 transition-colors">
                                    <option value="" disabled selected>Área Construída</option>
                                    <option value="all">Todas as áreas</option>
                                    <option value="100">Até 100 m²</option>
                                    <option value="200">Até 200 m²</option>
                                    <option value="300">Até 300 m²</option>
                                    <option value="max">Mais de 300 m²</option>
                                </select>

                                <select class="pb-4 border-b border-gray-200 bg-transparent outline-none cursor-pointer focus:border-brand-900 transition-colors">
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
                                <textarea 
                                    placeholder="Localização e breves detalhes..." 
                                    rows="3"
                                    class="w-full pb-4 border-b border-gray-200 outline-none bg-transparent resize-none focus:border-brand-900 transition-colors"
                                ></textarea>
                            </div>

                            <!-- Botão -->
                            <button 
                                type="submit" 
                                class="w-full mt-12 border border-brand-900 text-brand-900 py-4 hover:bg-brand-900 hover:text-white transition"
                            >
                                Iniciar Processo
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    `;
}