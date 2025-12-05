import React from 'react';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { ProductShowcase } from './components/ProductShowcase';
import { InstagramProof, FreezerGallery, AuthorityMetrics, Testimonials, RecipeGallery } from './components/SocialProof';
import { VideoClasses, BonusSection, MacrosSection } from './components/BonusVideo';
import { OfferSection, SecuritySection, UrgencySection, GuaranteeSection, FAQSection, FinalWhatsApp } from './components/OfferFAQ';
import { Footer } from './components/Footer';
import { WhatsAppIcon, FlowerIcon } from './components/Icons';

// Section 16: Audience
const AudienceSection: React.FC = () => (
  <section className="py-24 bg-hero-gradient relative overflow-hidden">
    <FlowerIcon className="absolute top-10 right-10 w-32 h-32 opacity-10" />
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="font-display font-bold text-4xl md:text-5xl text-center text-neutral-800 mb-20">
        O <span className="text-orange-500">Receitas para Secar</span> é pra você que...
      </h2>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid gap-6">
            {[
              'Já tentou de tudo e continua se sentindo inchada',
              'Tem uma rotina corrida e precisa de praticidade',
              'Quer emagrecer comendo bem, sem dietas radicais',
              'Gosta de comida caseira, simples e saborosa',
              'Está pronta para transformar sua saúde de dentro pra fora'
            ].map((text, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-orange hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group border border-transparent hover:border-orange-100">
                <span className="text-2xl group-hover:scale-125 transition-transform bg-rose-50 w-12 h-12 rounded-full flex items-center justify-center">🌸</span>
                <p className="font-body text-neutral-700 font-medium text-lg">{text}</p>
              </div>
            ))}
          </div>
          <div className="relative">
              <div className="absolute inset-0 bg-orange-200 rounded-[40px] transform rotate-3"></div>
              <img src="https://i.imgur.com/SCYGmfF.jpeg" alt="Você Transformada" className="relative rounded-[40px] shadow-2xl w-full" />
          </div>
      </div>
    </div>
  </section>
);

// Section 18: Support
const SupportSection: React.FC = () => (
  <section className="py-24 bg-orange-500 text-white text-center relative overflow-hidden">
     <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
     <div className="container mx-auto px-4 relative z-10 max-w-4xl">
       <h3 className="font-display font-bold text-3xl md:text-4xl mb-8">Você vai ter acesso ao nosso atendimento personalizado e nunca vai estar sozinha</h3>
       <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
         <WhatsAppIcon className="w-10 h-10" />
       </div>
       <p className="text-2xl font-medium mb-10">Eu e minha equipe estamos prontas pra te ajudar no WhatsApp</p>
       <div className="inline-flex flex-col md:flex-row gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-lg">
         <p className="flex items-center gap-2 text-lg font-bold"><span className="bg-white text-orange-500 rounded px-2">📅</span> Segunda à sexta: 9h às 18h</p>
         <p className="flex items-center gap-2 text-lg font-bold"><span className="bg-white text-orange-500 rounded px-2">📅</span> Sábados: 9h às 13h</p>
       </div>
     </div>
  </section>
);

// Section 24: About Author
const AboutSection: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative order-2 lg:order-1">
        <div className="absolute inset-0 border-[8px] border-cream-100 rounded-[40px] transform -rotate-3 scale-105"></div>
        <img src="https://i.imgur.com/SCYGmfF.jpeg" alt="Beatriz Langoni" className="relative rounded-[30px] shadow-2xl w-full max-w-md mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-700" />
      </div>
      <div className="text-left order-1 lg:order-2">
        <p className="text-orange-600 font-bold uppercase tracking-widest mb-2 text-sm">Criadora do Receitas para Secar</p>
        <h2 className="font-display font-bold text-4xl md:text-5xl mb-8 text-neutral-800">Beatriz Langoni</h2>
        <div className="font-body text-neutral-600 space-y-6 leading-relaxed text-lg">
          <p>"Desde pequena, minha relação com a comida foi marcada por excessos, culpa e muitas críticas. Eu amava doces e fast-food, mas vivia em guerra com a balança.</p>
          <p>Dieta, pra mim, era sinônimo de sofrimento — até que ouvi frases que me marcaram profundamente: 'Bailarina tem que ser magra.' 'Você nunca vai ter um namorado desse jeito.'</p>
          <p>Essas palavras doeram. Mas foi só quando decidi cuidar de mim por mim mesma que as coisas começaram a mudar de verdade.</p>
          <p>Comecei a estudar, testar, errar, ajustar... Descobri como transformar receitas tradicionais em versões mais saudáveis e gostosas.</p>
          <p>Foi assim que nasceu o 'Receitas para Secar': da minha própria jornada de superação."</p>
          <p className="font-handwritten text-4xl text-orange-500 mt-8">"Se eu consegui, você também consegue. Vamos juntas!"</p>
        </div>
      </div>
    </div>
  </section>
);

// Section 25: Final CTA
const FinalCTA: React.FC = () => (
    <section className="py-24 bg-neutral-800 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-12">Chegou a hora de ter uma alimentação equilibrada, prática e saborosa!</h2>
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
                 {['Emagreça com prazer, sem abrir mão do sabor', 'Receitas rápidas, nutritivas e fáceis de preparar', 'Tudo calculado: calorias, proteínas, carboidratos e gorduras'].map((text, i) => (
                     <div key={i} className="bg-neutral-700/50 p-6 rounded-2xl backdrop-blur-sm border border-neutral-600 flex-1">
                         <div className="text-3xl mb-4">🌸</div>
                         <p className="font-medium text-neutral-200">{text}</p>
                     </div>
                 ))}
            </div>
            <p className="font-display italic text-2xl text-orange-200">Assuma o controle da sua alimentação e transforme sua saúde, o seu corpo e a sua vida.</p>
        </div>
    </section>
);

function App() {
  return (
    <div className="min-h-screen font-body text-neutral-800 antialiased selection:bg-orange-200 selection:text-orange-900">
      <main>
        {/* Sequence matches 30-section Mega Prompt */}
        <Hero />
        <ProblemSolution />
        <ProductShowcase />
        <InstagramProof />
        <FreezerGallery />
        <VideoClasses />
        <BonusSection />
        <MacrosSection />
        <AudienceSection />
        <Testimonials />
        <SupportSection />
        <AuthorityMetrics />
        <OfferSection />
        <SecuritySection />
        <UrgencySection />
        <RecipeGallery />
        <AboutSection />
        <FinalCTA />
        <OfferSection secondary />
        <GuaranteeSection />
        <FAQSection />
        <FinalWhatsApp />
      </main>
      <Footer />
    </div>
  );
}

export default App;