import React from 'react';
import { Check, Star } from './Icons';

const StepCard: React.FC<{ 
  number: string; 
  title: string; 
  desc: string; 
  images?: string[]; 
  singleImage?: string; 
  reversed?: boolean 
}> = ({ number, title, desc, images, singleImage, reversed }) => (
  <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 mb-24 last:mb-0 group`}>
    <div className="flex-1 space-y-6 text-center lg:text-left">
      <div className="w-20 h-20 rounded-3xl bg-orange-100 text-orange-600 flex items-center justify-center font-display font-bold text-4xl shadow-sm mx-auto lg:mx-0 border border-orange-200 group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <h3 className="font-display font-bold text-3xl text-neutral-800">{title}</h3>
      <p className="font-body text-neutral-500 text-lg leading-relaxed">{desc}</p>
    </div>
    <div className="flex-1 w-full relative">
       {/* Decorative blob background */}
       <div className="absolute inset-0 bg-orange-50 rounded-full blur-3xl opacity-50 transform scale-110 -z-10"></div>
       
       {singleImage && (
         <div className="overflow-hidden rounded-2xl shadow-lg border border-white/50 w-full">
            <img src={singleImage} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" alt={`Passo ${number}`} />
         </div>
       )}

       {images && (
         <div className="grid grid-cols-2 gap-4 w-full">
           {images.map((img, i) => (
             <div key={i} className="overflow-hidden rounded-2xl shadow-md border border-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
               <img src={img} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" alt={`Passo ${number} img ${i+1}`} />
             </div>
           ))}
         </div>
       )}
    </div>
  </div>
);

const DeliverableImage: React.FC<{ title: string; image: string }> = ({ title, image }) => (
  <div className="w-full max-w-3xl mx-auto mb-12 last:mb-0 group">
    <div className="bg-white rounded-3xl p-4 shadow-card hover:shadow-orange transition-all duration-500 border border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-rose-500"></div>
        <img src={image} alt={title} className="w-full h-auto rounded-2xl shadow-sm group-hover:scale-[1.01] transition-transform duration-500" />
        <div className="mt-6 text-center pb-2">
            <h4 className="font-display font-bold text-2xl md:text-3xl text-neutral-800 mb-2">{title}</h4>
            <div className="w-16 h-1 bg-orange-200 mx-auto rounded-full"></div>
        </div>
    </div>
  </div>
);

const DELIVERABLES = [
  { title: 'Livro de Receitas Café da Manhã', image: 'https://i.imgur.com/TdldEYG.png' },
  { title: 'Livro de receitas Low Carb', image: 'https://i.imgur.com/v9T3ba0.png' },
  { title: 'Livro de receitas Lanches saudáveis', image: 'https://i.imgur.com/OEYApK5.png' },
  { title: 'Livro de receitas de marinadas', image: 'https://i.imgur.com/leCzFOM.png' },
  { title: 'Livro de receitas Coringa', image: 'https://i.imgur.com/DTPRBfB.png' },
  { title: 'Livro de Receitas Bowl da Saúde', image: 'https://i.imgur.com/JMCvPXu.png' },
  { title: 'Livro de receitas de Caldos', image: 'https://i.imgur.com/rf806ke.png' },
  { title: 'Livro de receiotas Sucos Detox', image: 'https://i.imgur.com/eTaN676.png' },
  { title: 'Livro de Receitas de Doces Saudáveis', image: 'https://i.imgur.com/J7qFY3i.png' },
  { title: 'Diário alimentar', image: 'https://i.imgur.com/ytMsA2J.jpeg' },
  { title: 'Tabela de Calorias e Macros das receitas', image: 'https://i.imgur.com/2jATvif.png' },
  { title: 'Aulas Práticas das Principais Receitas', image: 'https://i.imgur.com/NfLxQrl.jpeg' },
];

export const ProductShowcase: React.FC = () => {
  return (
    <>
      {/* Section 6: Product Intro */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <p className="font-body text-xl text-neutral-500 mb-8 font-medium">E pra isso, deixa eu te apresentar o:</p>
          
          <div className="inline-block bg-orange-500 text-white font-display font-bold text-3xl md:text-5xl px-10 py-5 rounded-2xl shadow-orange mb-16 animate-pulse-slow transform hover:scale-105 transition-transform duration-300 border-b-4 border-orange-700">
            🍊 RECEITAS PARA SECAR
          </div>

          <div className="grid grid-cols-2 gap-4 w-full mx-auto mb-16 px-4 md:px-0">
             <img src="https://i.imgur.com/dPiAuq7.png" alt="Programa 1" className="w-full h-auto rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300 border-2 border-orange-100" />
             <img src="https://i.imgur.com/92EhaSm.png" alt="Programa 2" className="w-full h-auto rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300 border-2 border-orange-100" />
             <img src="https://i.imgur.com/aGfnTsp.png" alt="Programa 3" className="w-full h-auto rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300 border-2 border-orange-100" />
             <img src="https://i.imgur.com/cGYRTYJ.png" alt="Programa 4" className="w-full h-auto rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300 border-2 border-orange-100" />
          </div>

          <p className="font-body text-xl md:text-2xl max-w-3xl mx-auto text-neutral-600 leading-relaxed">
            Um programa completo com <strong className="text-orange-600 bg-orange-50 px-2 rounded">livros de receitas</strong>, <strong className="text-orange-600 bg-orange-50 px-2 rounded">planejamento semanal</strong>, <strong className="text-orange-600 bg-orange-50 px-2 rounded">lista de compras</strong> e <strong className="text-orange-600 bg-orange-50 px-2 rounded">aulas em vídeo</strong>.
          </p>
        </div>
      </section>

      {/* Section 7: Immediate Benefits */}
      <section className="py-24 bg-cream-50" id="benefícios">
        <div className="container mx-auto px-4 flex flex-col gap-12 text-center items-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-800 leading-tight">
              Já na <span className="text-orange-600 bg-orange-100 px-3 rounded-lg">primeira semana</span> você muda para uma vida saudável com mais sabor no prato
            </h2>
            <p className="font-body text-neutral-600 text-xl leading-relaxed">
              São mais de 200 receitas saudáveis pra você nunca mais pensar que fazer dieta é sem graça. Descubra o prazer de comer bem sem culpa.
            </p>
          </div>
          <div className="relative group w-full max-w-5xl">
             <div className="absolute inset-0 border-2 border-orange-300 rounded-[30px] transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
             <img src="https://i.imgur.com/ldfTMPP.png" alt="Vida Saudável" className="relative rounded-[30px] w-full shadow-2xl transform group-hover:scale-[0.99] transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Section 8: How it works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center text-neutral-800 mb-20">
            Como funciona o <span className="text-orange-500">Receitas para Secar</span>
          </h2>

          <StepCard 
            number="1" 
            title="Tenha acesso a mais de 200 receitas saudáveis" 
            desc="Receitas deliciosas para café da manhã, almoço, jantar e lanches. Variedade para todos os gostos." 
            images={[
              "https://i.imgur.com/cuwTX85.png",
              "https://i.imgur.com/gFn5Nek.png",
              "https://i.imgur.com/3Kx7xmL.png",
              "https://i.imgur.com/NElwg4d.png"
            ]}
          />
          <StepCard 
            number="2" 
            title="Organize no planner o que você vai comer" 
            desc="Planejamento semanal completo do café da manhã ao jantar. Chega de indecisão." 
            singleImage="https://i.imgur.com/lnrRYDd.png"
            reversed 
          />
          <StepCard 
            number="3" 
            title="Gere sua lista de compras automática" 
            desc="Economize tempo e dinheiro no mercado sabendo exatamente o que comprar para a semana." 
            singleImage="https://i.imgur.com/NF9GUrJ.png"
          />
          <StepCard 
            number="4" 
            title="Organize suas refeições em apenas 1 hora" 
            desc="Método prático para cozinhar para a semana toda e ter comida saudável sempre pronta." 
            images={[
              "https://i.imgur.com/jaS3KEX.png",
              "https://i.imgur.com/zNE8cyL.png",
              "https://i.imgur.com/Eo5Ce7m.png",
              "https://i.imgur.com/BZLPpG5.png"
            ]}
            reversed 
          />
        </div>
      </section>

      {/* Section 9: Deliverables (Large Images) */}
      <section className="py-24 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-neutral-800 mb-6">
              E para seguir esses 4 passos sem falhar,<br/> veja tudo o que você vai receber:
            </h2>
          </div>

          <div className="flex flex-col gap-8 mb-16">
            {DELIVERABLES.map((item, index) => (
              <DeliverableImage key={index} title={item.title} image={item.image} />
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-rose-500 rounded-full py-5 px-8 text-white font-bold text-center max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 shadow-orange animate-glow border-4 border-white/20">
            <Star className="fill-current w-8 h-8 hidden md:block" />
            <span className="tracking-wide text-lg">⭐ RECEITAS COM CALORIAS E MACROS CALCULADOS ⭐</span>
            <Star className="fill-current w-8 h-8 hidden md:block" />
          </div>
        </div>
      </section>
    </>
  );
};