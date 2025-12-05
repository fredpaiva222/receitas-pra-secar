import React from 'react';
import { ArrowRight, FlowerIcon } from './Icons';

export const ProblemSolution: React.FC = () => {
  return (
    <>
      {/* Section 3: Problem Identification */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-800 mb-10 animate-fade-in-up">
            Cansada de recomeçar a dieta toda segunda?
          </h2>

          <div className="max-w-2xl mx-auto bg-rose-50 rounded-3xl p-8 mb-20 relative border border-rose-100 shadow-sm">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-md text-4xl">😔</span>
            <p className="font-handwritten text-3xl md:text-4xl text-neutral-700 leading-snug">
              "Eu tento, juro que tento. Mas comer comida sem gosto ninguém merece..."
            </p>
          </div>

          {/* Section 4: Troque Isso Por Isso */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-16">
            {/* Card Bad */}
            <div className="relative group w-full max-w-xs">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-6 py-1.5 rounded-full text-sm font-bold text-rose-500 border border-rose-200 shadow-sm z-10 uppercase tracking-wider">Troque Isso</div>
              <div className="rounded-3xl overflow-hidden border-2 border-rose-200 shadow-card transition-transform group-hover:-translate-y-2 bg-white">
                <img src="https://i.imgur.com/mE19S09.png" alt="Comida sem graça" className="w-full h-56 object-cover" />
                <div className="p-5 text-center">
                  <p className="font-body text-neutral-500 font-medium">Frango seco e salada murcha</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
               <ArrowRight className="text-orange-500 w-12 h-12 animate-pulse" />
            </div>
            <div className="md:hidden">
               <ArrowRight className="text-orange-500 w-12 h-12 rotate-90 animate-pulse my-4" />
            </div>

            {/* Card Good */}
            <div className="relative group w-full max-w-xs">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-mint-500 px-6 py-1.5 rounded-full text-sm font-bold text-white shadow-lg z-10 uppercase tracking-wider">Por Isso</div>
              <div className="rounded-3xl overflow-hidden border-2 border-mint-500 shadow-xl transition-transform group-hover:-translate-y-2 bg-white relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img src="https://i.imgur.com/ohOn9NW.png" alt="Salada Colorida" className="w-full h-56 object-cover" />
                <div className="p-5 text-center bg-mint-50">
                  <p className="font-body text-neutral-800 font-bold text-lg">Receitas saborosas e nutritivas</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="font-display text-3xl md:text-4xl text-orange-600 font-bold mb-4">
            Chega de dietas sem graça que não funcionam
          </h3>
          <p className="font-body text-neutral-500 text-lg max-w-2xl mx-auto">
            Você precisa de um plano prático, saboroso e fácil de seguir para ter resultados definitivos.
          </p>
        </div>
      </section>

      {/* Section 5: Transformation */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="font-handwritten text-5xl text-orange-500 mb-12 transform -rotate-2">
            E foi exatamente isso que eu fiz...
          </p>

          <div className="max-w-md mx-auto mb-12 relative group">
             <div className="absolute inset-0 border-[6px] border-white/50 rounded-[30px] transform rotate-3 scale-105 shadow-lg group-hover:rotate-6 transition-transform duration-500"></div>
             <img 
               src="https://i.imgur.com/eGV9NCd.jpeg" 
               alt="Antes e Depois" 
               className="relative rounded-[24px] shadow-2xl w-full h-auto border-4 border-white transform group-hover:-rotate-2 transition-transform duration-500" 
             />
          </div>

          <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-800 mb-8">
            Não foi sorte — <span className="text-orange-600 relative inline-block">
              Foi escolha
              <svg className="absolute w-full h-2 bottom-0 left-0 text-orange-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
            </span>
          </h2>

          <div className="max-w-3xl mx-auto font-display text-2xl md:text-3xl italic text-neutral-600 relative leading-relaxed">
            <span className="text-8xl text-rose-300 absolute -top-12 -left-4 md:-left-12 opacity-40 font-serif">"</span>
            Eu escolhi me alimentar de forma saudável, sem fazer dietas restritivas. O caminho que eu percorri está nas receitas que eu vou te entregar agora.
            <span className="text-8xl text-rose-300 absolute -bottom-20 -right-4 md:-right-12 opacity-40 font-serif">"</span>
          </div>
        </div>
        
        <FlowerIcon className="absolute top-20 left-10 w-40 h-40 opacity-20 rotate-45 blur-[2px]" />
        <FlowerIcon className="absolute bottom-20 right-10 w-48 h-48 opacity-20 -rotate-12 blur-[1px]" />
      </section>
    </>
  );
};