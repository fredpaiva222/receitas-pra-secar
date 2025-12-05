import React from 'react';
import { Instagram, ArrowRight } from './Icons';
import { Testimonial } from '../types';

const TESTIMONIAL_IMAGES = [
  "https://i.imgur.com/YFGlpJS.png",
  "https://i.imgur.com/3KSRnUP.png",
  "https://i.imgur.com/qwiKRSi.png",
  "https://i.imgur.com/3Qb9dHK.png",
  "https://i.imgur.com/RAjQNXB.png",
  "https://i.imgur.com/2Ccma1o.png",
  "https://i.imgur.com/TLTvFRz.png",
  "https://i.imgur.com/AJ1fpI2.png",
  "https://i.imgur.com/Fe7Nn9H.png"
];

const FREEZER_IMAGES = [
  "https://i.imgur.com/SgXsih9.png",
  "https://i.imgur.com/XBdpr01.png",
  "https://i.imgur.com/rKK2szB.png",
  "https://i.imgur.com/iXdAL0l.png"
];

const RECIPE_GALLERY_IMAGES = [
  "https://i.imgur.com/NElwg4d.png",
  "https://i.imgur.com/gFn5Nek.png",
  "https://i.imgur.com/cuwTX85.png",
  "https://i.imgur.com/cGYRTYJ.png",
  "https://i.imgur.com/9SLZhJB.png",
  "https://i.imgur.com/feb4CRz.png",
  "https://i.imgur.com/j7CZBmE.jpeg",
  "https://i.imgur.com/6zZnSV6.jpeg",
  "https://i.imgur.com/7C1vDci.png"
];

// Section 11 & 19: Instagram & Authority
export const InstagramProof: React.FC = () => {
  return (
    <section className="py-24 bg-cream-50 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="font-body text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            E você também vai ter acesso ao passo a passo de todas as dicas de organização alimentar que fazem tanto sucesso no meu Instagram
          </p>
          
          <Instagram className="w-20 h-20 text-orange-600 mx-auto mb-8 animate-bounce drop-shadow-lg" />

          <div className="bg-white rounded-3xl p-10 shadow-lg max-w-4xl mx-auto mb-16 border border-orange-100">
            <h3 className="font-display font-bold text-3xl md:text-5xl text-neutral-800 mb-10">
              São mais de <span className="text-orange-500">60 MILHÕES</span> de visualizações
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
               <img src="https://i.imgur.com/RDaOu9j.png" alt="Instagram Visualizações 1" className="w-full h-auto rounded-xl shadow-md border border-neutral-100" />
               <img src="https://i.imgur.com/mWkewab.png" alt="Instagram Visualizações 2" className="w-full h-auto rounded-xl shadow-md border border-neutral-100" />
            </div>
          </div>
        </div>
    </section>
  );
};

// Section 12: Freezer Gallery
export const FreezerGallery: React.FC = () => (
    <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4 text-center">
             <h3 className="font-display font-bold text-3xl text-neutral-800 mb-10">O seu freezer vai ser o maior aliado da sua dieta</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {FREEZER_IMAGES.map((src, i) => (
                <div key={i} className="overflow-hidden rounded-2xl shadow-md group border border-white">
                    <img src={src} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" alt="Freezer Organizado" />
                </div>
                ))}
            </div>
        </div>
    </section>
);

// Section 19: Authority Metrics
export const AuthorityMetrics: React.FC = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center border-t border-gray-100 pt-16">
            <h4 className="font-display font-bold text-2xl md:text-4xl text-neutral-800 mb-2 uppercase tracking-wider">São 290 mil seguidores só no Instagram</h4>
            <div className="h-6"></div> {/* Spacer since handle was removed */}
            <p className="text-neutral-500 mb-12">Com várias receitas viralizadas</p>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-24">
                <Metric number="1,1 M" label="curtidas" icon="❤️" />
                <Metric number="620 mil" label="compartilhamentos" icon="🔄" />
                <Metric number="27 M" label="visualizações" icon="👁️" />
            </div>
        </div>
    </section>
);

const Metric: React.FC<{number: string, label: string, icon: string}> = ({number, label, icon}) => (
    <div className="text-center group cursor-default">
        <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">{icon}</div>
        <div className="text-4xl md:text-5xl font-bold text-neutral-800 mb-1 font-display">{number}</div>
        <div className="text-neutral-500 uppercase tracking-wide text-sm font-bold">{label}</div>
    </div>
);

// Section 17: Testimonials
export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="depoimentos">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-center text-neutral-800 mb-16">
            Veja o que as nossas alunas estão comentando<br/> do <span className="text-orange-500">Receitas para Secar</span>:
          </h2>

          <div className="flex flex-col gap-8 items-center max-w-2xl mx-auto">
            {TESTIMONIAL_IMAGES.map((img, idx) => (
              <div key={idx} className="w-full">
                <img 
                    src={img} 
                    alt={`Depoimento ${idx + 1}`} 
                    className="w-full h-auto rounded-2xl shadow-lg border border-gray-100 hover:scale-[1.01] transition-transform duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

// Section 23: Recipe Gallery
export const RecipeGallery: React.FC = () => (
    <section className="py-24 bg-neutral-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 mb-12 text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-orange-100">Essas são mais algumas receitas deliciosas que você vai aprender</h2>
        </div>
        <div className="flex gap-4 animate-scroll-left w-max">
            {RECIPE_GALLERY_IMAGES.map((src, i) => (
                <div key={i} className="w-64 h-64 rounded-xl overflow-hidden relative group">
                    <img src={src} alt={`Receita ${i+1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="font-bold">Receita Exclusiva #{i+1}</span>
                    </div>
                </div>
            ))}
            {/* Duplicate */}
             {RECIPE_GALLERY_IMAGES.map((src, i) => (
                <div key={`d-${i}`} className="w-64 h-64 rounded-xl overflow-hidden relative group">
                    <img src={src} alt={`Receita ${i+1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="font-bold">Receita Exclusiva #{i+1}</span>
                    </div>
                </div>
            ))}
        </div>
    </section>
);