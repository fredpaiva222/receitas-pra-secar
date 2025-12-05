import React from 'react';
import { FlowerIcon } from './Icons';
import { Check, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-hero-gradient overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #EA580C 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left animate-fade-in-up">
          <img 
            src="https://i.imgur.com/db2XVKR.png" 
            alt="Logo Receitas para Secar" 
            className="w-48 mx-auto lg:mx-0 mb-8"
          />

          <div className="inline-flex items-center gap-2 bg-orange-100/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-orange-200 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-orange-700 text-sm font-bold tracking-wide">+2.500 alunas transformadas</span>
          </div>

          <h1 className="font-display font-bold text-neutral-800 text-4xl md:text-5xl lg:text-7xl leading-[1.1] mb-6">
            DIETA SEM GRAÇA <br />
            <span className="text-orange-600 relative inline-block">
              NUNCA MAIS!
              <svg className="absolute w-full h-3 bottom-1 left-0 text-orange-200/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="12" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="font-body text-neutral-500 text-lg md:text-xl mb-8 max-w-[500px] mx-auto lg:mx-0 leading-relaxed font-medium">
            Aprenda 200 receitas saudáveis e práticas para secar a barriga com ingredientes que você tem em casa.
          </p>
        </div>

        {/* Image Content */}
        <div className="relative animate-[fadeIn_1.5s_ease-out] w-full">
           <div className="relative z-10 w-full overflow-hidden">
             <img 
               src="https://i.imgur.com/SCYGmfF.jpeg" 
               alt="Prato Saudável" 
               className="w-full h-auto object-cover rounded-2xl shadow-xl"
             />
          </div>
          
          {/* Decorative Elements */}
          <FlowerIcon className="absolute -top-12 -right-8 w-32 h-32 animate-[float_4s_ease-in-out_infinite_1s] opacity-90 drop-shadow-lg" />
          <FlowerIcon className="absolute -bottom-8 -left-12 w-24 h-24 animate-[float_5s_ease-in-out_infinite] opacity-80 drop-shadow-lg delay-1000" />
        </div>
      </div>
    </section>
  );
};