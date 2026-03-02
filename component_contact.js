export function renderContact() {
    return `
        <section class="pt-24 pb-32 bg-white min-h-screen">
            <div class="max-w-7xl mx-auto px-6 w-full">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
                    
                    <!-- LEFT COLUMN -->
                    <div>

                        <!-- Label (L3) -->
                        <span class="text-xs uppercase tracking-[0.25em] font-semibold text-gray-500 mb-10 block">
                            Consultoria Privada
                        </span>

                        <!-- Título (L1) -->
                        <h1 class="text-5xl font-serif font-light mb-20">
                            Fale connosco
                        </h1>
                        
                        <div class="space-y-20 max-w-md">

                            <!-- Morada -->
                            <div>
                                <h2 class="text-2xl font-serif font-light mb-6">
                                    Sede Alentejo
                                </h2>
                                <p class="text-base font-light leading-relaxed text-gray-700">
                                    Aldeia dos Macacos, 1<br>
                                    7200-259 Reguengos de Monsaraz
                                </p>
                            </div>

                            <!-- Contactos -->
                            <div>
                                <h2 class="text-2xl font-serif font-light mb-6">
                                    Contactos Diretos
                                </h2>

                                <div class="space-y-4">
                                    <p class="text-base font-light leading-relaxed">
                                        +351 915 967 319
                                    </p>
                                    <p class="text-base font-light leading-relaxed">
                                        +351 968 551 922
                                    </p>
                                    <p class="text-base font-light leading-relaxed underline decoration-brand-200 underline-offset-4 pt-6 border-t border-gray-100">
                                        geral@terraprimus.pt
                                    </p>
                                </div>
                            </div>

                            <!-- WhatsApp -->
                            <button class="flex items-center gap-4 text-brand-900 hover:opacity-70 transition-all">
                                <i data-lucide="message-circle" class="w-5 h-5"></i>
                                <span class="text-xs uppercase tracking-[0.25em] font-semibold">
                                    Falar via WhatsApp
                                </span>
                            </button>

                        </div>
                    </div>


                    <!-- RIGHT COLUMN - FORM -->
                    <div class="lg:ml-auto w-full lg:max-w-md bg-white p-16 rounded-[40px] border border-brand-100 shadow-2xl shadow-brand-900/5">

                        <!-- Título (L2) -->
                        <h2 class="text-2xl font-serif font-light mb-14 text-center">
                            Mensagem Privada
                        </h2>

                        <form class="space-y-12" onsubmit="event.preventDefault(); alert('Mensagem enviada com sucesso.');">

                            <div class="space-y-10">

                                <input 
                                    type="text" 
                                    placeholder="Nome"
                                    class="w-full pb-4 border-b border-gray-200 outline-none text-base font-light leading-relaxed bg-transparent focus:border-brand-900 transition-colors"
                                    required
                                >
                                
                                <input 
                                    type="email" 
                                    placeholder="E-mail"
                                    class="w-full pb-4 border-b border-gray-200 outline-none text-base font-light leading-relaxed bg-transparent focus:border-brand-900 transition-colors"
                                    required
                                >
                                
                                <textarea 
                                    rows="4"
                                    placeholder="A sua mensagem..."
                                    class="w-full pb-4 border-b border-gray-200 outline-none text-base font-light leading-relaxed bg-transparent resize-none focus:border-brand-900 transition-colors"
                                ></textarea>

                            </div>
                            
                            <!-- Botão (L3) -->
                            <button 
                                type="submit" 
                                class="w-full mt-10 border border-brand-900 text-brand-900 py-5 uppercase tracking-[0.25em] text-xs font-semibold hover:bg-brand-900 hover:text-white transition-all"
                            >
                                Enviar
                            </button>

                        </form>

                    </div>

                </div>
            </div>
        </section>
    `;
}