import React from 'react';
import { Play } from './Icons';

const VIDEO_THUMBNAILS = [
  "https://i.imgur.com/rCkctGt.jpeg",
  "https://i.imgur.com/CNngM6e.jpeg",
  "https://i.imgur.com/HzqfcP3.jpeg",
  "https://i.imgur.com/NfLxQrl.jpeg",
  "https://i.imgur.com/EDu9B31.jpeg"
];

// Section 13: Video Classes
export const VideoClasses: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-rose-50 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-800 mb-6">Como é que eu vou colocar tudo isso em prática?</h2>
          <p className="font-handwritten text-4xl text-orange-500 mb-10 transform -rotate-1">Você vai aprender comigo em tempo real</p>
          <p className="font-body text-neutral-500 max-w-2xl mx-auto mb-12">Não é fácil ir sozinho. E ainda bem que você não precisa... Conte comigo para te ajudar!</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
            {['Aulas curtas e direto ao ponto', 'Produção de cinema (Netflix)', 'Principais receitas do livro'].map(item => (
              <div key={item} className="flex items-center justify-center gap-3 bg-white px-8 py-4 rounded-full shadow-sm border border-rose-100">
                <span className="text-rose-400 text-xl">🌸</span>
                <span className="font-body font-bold text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Infinite Scroll Carousel */}
        <div className="relative w-full overflow-hidden pb-10">
          <div className="flex gap-8 animate-scroll-left w-max hover:[animation-play-state:paused]">
            {VIDEO_THUMBNAILS.map((src, i) => (
              <div key={i} className="w-[320px] h-[200px] rounded-2xl overflow-hidden relative group cursor-pointer flex-shrink-0 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                <img src={src} alt={`Video Aula ${i+1}`} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-orange-600 pl-1 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play size={32} fill="currentColor" />
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for infinite loop effect */}
            {VIDEO_THUMBNAILS.map((src, i) => (
              <div key={`d-${i}`} className="w-[320px] h-[200px] rounded-2xl overflow-hidden relative group cursor-pointer flex-shrink-0 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                <img src={src} alt={`Video Aula ${i+1}`} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-orange-600 pl-1 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play size={32} fill="currentColor" />
                  </div>
                </div>
              </div>
            ))}
             {/* Triplicate to ensure enough width for scrolling on large screens */}
             {VIDEO_THUMBNAILS.map((src, i) => (
              <div key={`d2-${i}`} className="w-[320px] h-[200px] rounded-2xl overflow-hidden relative group cursor-pointer flex-shrink-0 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                <img src={src} alt={`Video Aula ${i+1}`} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-orange-600 pl-1 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play size={32} fill="currentColor" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

// Section 14: Bonus
export const BonusSection: React.FC = () => {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
               <h2 className="font-display font-bold text-3xl md:text-5xl text-neutral-800">✨ E não acaba aqui... Ainda tem bônus! ✨</h2>
          </div>
          
          <div className="max-w-5xl mx-auto bg-cream-50 border-2 border-dashed border-orange-300 rounded-[40px] p-8 md:p-16 relative">
             <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="bg-white rounded-3xl p-6 shadow-md border border-orange-100 transform -rotate-2">
                 <img src="https://i.imgur.com/u5lDMgx.jpeg" alt="Lanches Mockup" className="w-full h-auto rounded-xl" />
               </div>
               <div>
                 <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4 uppercase tracking-widest">Bônus Exclusivo</div>
                 <h3 className="font-display font-bold text-3xl md:text-4xl text-neutral-800 mb-6">Lanches Saudáveis para Congelar</h3>
                 <p className="font-body text-neutral-600 mb-8 text-lg leading-relaxed">Um livro de receitas de lanches saudáveis pra congelar e levar pro trabalho ou faculdade.</p>
                 <ul className="space-y-4">
                   <li className="flex items-center gap-3 font-body text-neutral-800 font-medium bg-white p-3 rounded-xl shadow-sm"><span className="text-rose-400 text-xl">🌸</span> Organize seus lanches da semana</li>
                   <li className="flex items-center gap-3 font-body text-neutral-800 font-medium bg-white p-3 rounded-xl shadow-sm"><span className="text-rose-400 text-xl">🌸</span> Mais praticidade na sua rotina</li>
                 </ul>
               </div>
             </div>
          </div>
        </div>
      </section>
    );
};

// Section 15: Macros
export const MacrosSection: React.FC = () => (
    <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
             <h3 className="font-display font-bold text-3xl text-neutral-800 mb-2">E sabe qual é a melhor parte?</h3>
             <p className="font-body text-xl text-neutral-500 mb-10">Todas as receitas vem com as calorias e macros calculadas pra sua dieta</p>
             <div className="flex justify-center gap-6 flex-wrap">
                  <span className="bg-rose-50 border border-rose-200 px-6 py-3 rounded-2xl text-lg font-bold text-rose-600 flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">🚫🌾 Sem Glúten</span>
                  <span className="bg-rose-50 border border-rose-200 px-6 py-3 rounded-2xl text-lg font-bold text-rose-600 flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">🚫🥛 Sem Lactose</span>
            </div>
        </div>
    </section>
);