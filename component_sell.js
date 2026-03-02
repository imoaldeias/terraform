export function renderSell() {
    return `
        <section class="pt-24 pb-32 bg-white">
            <div class="max-w-7xl mx-auto px-6">

                <!-- HERO SECTION -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">

                    <div class="max-w-2xl">

                        <!-- Label (L3) -->
                        <span class="text-xs uppercase tracking-[0.25em] font-semibold text-gray-500 mb-8 block">
                            Angariação Exclusiva
                        </span>

                        <!-- Título Principal (L1) -->
                        <h1 class="text-5xl font-serif font-light mb-10">
                            Valorize o seu património com quem entende a terra.
                        </h1>

                        <!-- Texto (L4) -->
                        <p class="text-base font-light leading-relaxed text-gray-600 mb-16">
                            Na TerraPrimus, representamos proprietários através de uma análise rigorosa de posicionamento e valorização. Procuramos assegurar transações sólidas e maximizar o valor real do seu ativo no mercado global.
                        </p>
                        
                        <!-- BENEFÍCIOS -->
                        <div class="space-y-14">

                            <!-- Item -->
                            <div class="flex gap-8 group">
                                <div class="bg-brand-terraLight w-14 h-14 rounded-full flex items-center justify-center shrink-0 border border-brand-100">
                                    <i data-lucide="shield-check" class="text-brand-800 w-6 h-6"></i>
                                </div>
                                <div>
                                    <h2 class="text-2xl font-serif font-light mb-4">
                                        Confidencialidade Absoluta
                                    </h2>
                                    <p class="text-base font-light leading-relaxed text-gray-600">
                                        Proteção de informação e gestão reservada de todo o processo.
                                    </p>
                                </div>
                            </div>

                            <!-- Item -->
                            <div class="flex gap-8 group">
                                <div class="bg-brand-terraLight w-14 h-14 rounded-full flex items-center justify-center shrink-0 border border-brand-100">
                                    <i data-lucide="bar-chart-3" class="text-brand-800 w-6 h-6"></i>
                                </div>
                                <div>
                                    <h2 class="text-2xl font-serif font-light mb-4">
                                        Avaliação e Posicionamento
                                    </h2>
                                    <p class="text-base font-light leading-relaxed text-gray-600">
                                        Análise técnica, estratégica e do enquadramento de mercado.
                                    </p>
                                </div>
                            </div>

                            <!-- Item -->
                            <div class="flex gap-8 group">
                                <div class="bg-brand-terraLight w-14 h-14 rounded-full flex items-center justify-center shrink-0 border border-brand-100">
                                    <i data-lucide="users" class="text-brand-800 w-6 h-6"></i>
                                </div>
                                <div>
                                    <h2 class="text-2xl font-serif font-light mb-4">
                                        Acompanhamento Integral
                                    </h2>
                                    <p class="text-base font-light leading-relaxed text-gray-600">
                                        Representação estratégica, negociação e orientação até à conclusão da operação.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- IMAGEM -->
                    <div class="relative aspect-[3/4] rounded-[60px] overflow-hidden shadow-2xl img-hover-zoom bg-gray-50">
                        <img 
                            src="https://images.unsplash.com/photo-1559666126-84f389727b9a?auto=format&fit=crop&q=80" 
                            class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            alt="Especialista TerraPrimus"
                        >
                        <div class="absolute inset-0 bg-gradient-to-t from-brand-900/20 to-transparent pointer-events-none"></div>
                    </div>

                </div>


                <!-- FORMULÁRIO -->
                <div class="max-w-3xl mx-auto bg-white p-16 rounded-[40px] border border-brand-100 shadow-2xl shadow-brand-900/5">

                    <!-- Título (L2) -->
                    <h2 class="text-2xl font-serif font-light mb-12 text-center">
                        Solicitar Avaliação Reservada
                    </h2>

                    <form class="space-y-10" onsubmit="event.preventDefault(); alert('Pedido enviado.');">

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <input 
                                type="text" 
                                placeholder="Nome" 
                                class="w-full pb-4 border-b border-gray-200 outline-none text-base font-light leading-relaxed bg-transparent focus:border-brand-900 transition-colors"
                                required
                            >
                            <input 
                                type="tel" 
                                placeholder="Telemóvel (Opcional)" 
                                class="w-full pb-4 border-b border-gray-200 outline-none text-base font-light leading-relaxed bg-transparent focus:border-brand-900 transition-colors"
                            >
                        </div>
                        
                        <input 
                            type="email" 
                            placeholder="E-mail de contacto" 
                            class="w-full pb-4 border-b border-gray-200 outline-none text-base font-light leading-relaxed bg-transparent focus:border-brand-900 transition-colors"
                            required
                        >
                        
                        <div class="grid grid-cols-2 gap-8">
                            <select class="pb-4 border-b border-gray-200 bg-transparent text-base font-light leading-relaxed outline-none cursor-pointer focus:border-brand-900 transition-colors" required>
                                <option value="" disabled selected>Tipologia</option>
                                <option value="herdade">Herdade</option>
                                <option value="quinta">Quinta</option>
                                <option value="terreno">Terreno</option>
                                <option value="moradia">Moradia</option>
                            </select>

                            <select class="pb-4 border-b border-gray-200 bg-transparent text-base font-light leading-relaxed outline-none cursor-pointer focus:border-brand-900 transition-colors">
                                <option value="" disabled selected>Nº Quartos</option>
                                <option value="all">Todos</option>
                                <option value="1">1 Quarto</option>
                                <option value="2">2 Quartos</option>
                                <option value="3">3 Quartos</option>
                                <option value="4">4 ou mais</option>
                            </select>
                        </div>

                        <div class="grid grid-cols-2 gap-8">
                            <select class="pb-4 border-b border-gray-200 bg-transparent text-base font-light leading-relaxed outline-none cursor-pointer focus:border-brand-900 transition-colors">
                                <option value="" disabled selected>Área Construída</option>
                                <option value="all">Todas as áreas</option>
                                <option value="100">Até 100 m²</option>
                                <option value="200">Até 200 m²</option>
                                <option value="300">Até 300 m²</option>
                                <option value="max">Mais de 300 m²</option>
                            </select>

                            <select class="pb-4 border-b border-gray-200 bg-transparent text-base font-light leading-relaxed outline-none cursor-pointer focus:border-brand-900 transition-colors">
                                <option value="" disabled selected>Área do Terreno</option>
                                <option value="all">Todas as áreas</option>
                                <option value="5000">Até 0.5 ha</option>
                                <option value="10000">Até 1 ha</option>
                                <option value="50000">Até 5 ha</option>
                                <option value="max">Mais de 5 ha</option>
                            </select>
                        </div>

                        <textarea 
                            placeholder="Localização e breves detalhes..." 
                            rows="3"
                            class="w-full pb-4 border-b border-gray-200 outline-none text-base font-light leading-relaxed bg-transparent resize-none focus:border-brand-900 transition-colors"
                        ></textarea>
                        
                        <!-- Botão (L3) -->
                        <button 
                            type="submit" 
                            class="w-full mt-12 border border-brand-900 text-brand-900 py-5 uppercase tracking-[0.25em] text-xs font-semibold hover:bg-brand-900 hover:text-white transition-all"
                        >
                            Iniciar Processo de Avaliação
                        </button>

                    </form>

                </div>

            </div>
        </section>
    `;
}