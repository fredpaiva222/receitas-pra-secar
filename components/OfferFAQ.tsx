import React, { useState } from 'react';
import { Check, Shield, Lock, MessageCircle, WhatsAppIcon } from './Icons';
import { FaqItem } from '../types';

const FAQ_ITEMS: FaqItem[] = [
  { question: "Como vou ter acesso ao material?", answer: "Após a aprovação da compra você vai receber um e-mail automático para ter acesso imediato à plataforma." },
  { question: "O material é todo digital?", answer: "Sim. Todo o material é 100% digital, você vai ter acesso aos ebooks e aulas em vídeo por meio da nossa plataforma." },
  { question: "Por quanto tempo terei acesso?", answer: "Os livros podem ser baixados e são seus para sempre. O acesso à plataforma de vídeos é de 1 ano." },
  { question: "Já tenho algum curso, as receitas se repetem?", answer: "Não, cada curso possui receitas exclusivas." },
  { question: "Não como glúten/lactose. É pra mim?", answer: "Sim. Todas as receitas são sem glúten e açúcar, com opções sem lactose." },
  { question: "Sou vegetariano/vegano?", answer: "As receitas focam em proteína animal, mas a base teórica ajuda muito." },
  { question: "Tenho ajudante. Serve pra mim?", answer: "Sim, ela pode seguir as receitas e o planejamento facilmente." },
  { question: "Não sei cozinhar, serve pra mim?", answer: "Sim, ensino o passo a passo detalhado de todas as receitas em vídeo e texto." },
  { question: "Tem suporte de dúvidas?", answer: "Sim. Nossa equipe está disponível de segunda à sexta, das 9h às 18h via e-mail." }
];

// Section 20 & 26: Offer Card
export const OfferSection: React.FC<{secondary?: boolean}> = ({secondary}) => {
  return (
    <section className={`py-24 ${secondary ? 'bg-cream-50' : 'bg-neutral-800'} relative overflow-hidden`} id={secondary ? "oferta-2" : "oferta"}>
      {/* Background decoration */}
       {!secondary && <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #EA580C 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>}
       
       <div className="container mx-auto px-4 relative z-10">
        {!secondary && (
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Acesse agora as receitas saudáveis</h2>
            <p className="font-body text-xl text-neutral-300">mais saborosas da sua vida</p>
          </div>
        )}

        <div className="max-w-5xl mx-auto bg-white rounded-[32px] shadow-2xl overflow-hidden border-[3px] border-orange-500/30 relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-cta animate-glow"></div>
          
          <div className="p-8 md:p-12 lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Product Info */}
            <div className="space-y-8">
               <div className="flex justify-center lg:justify-start mb-6">
                 <div className="bg-orange-500 text-white font-bold px-4 py-1 rounded-lg uppercase tracking-wider text-xs shadow-orange">Oferta Especial</div>
               </div>
               
               <div className="bg-neutral-100 rounded-2xl p-8 text-center lg:text-left relative group">
                  <div className="absolute -top-10 right-4 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
                  {/* Mockup Image */}
                  <div className="mb-8 flex items-center justify-center -mx-6">
                    <img src="https://i.imgur.com/R39xQru.png" alt="Mockup Ebooks" className="w-full h-auto rounded-xl shadow-sm transform scale-110" />
                  </div>
                  <h3 className="font-display font-bold text-3xl text-neutral-800 mb-2">🍊 Receitas para Secar</h3>
                  <p className="text-neutral-500 text-sm">Programa completo de emagrecimento saudável</p>
               </div>

               <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm md:text-base text-neutral-700">
                 {['Café da manhã', 'Lanches Saudáveis', 'Low Carb', 'Sopas e Caldos', 'Sucos Detox', 'Bowl da Saúde', 'Doces Saudáveis', 'Marinadas', 'Planejamento', 'Lista de Compras', 'Aulas em Vídeo', 'Suporte VIP'].map(item => (
                   <div key={item} className="flex items-center gap-2">
                     <div className="w-5 h-5 rounded-full bg-mint-500/10 flex items-center justify-center flex-shrink-0">
                       <Check size={12} className="text-mint-500" />
                     </div>
                     {item}
                   </div>
                 ))}
               </div>
            </div>

            {/* Right Column: Pricing & CTA */}
            <div className="text-center bg-cream-50 rounded-3xl p-8 border border-orange-100">
               <p className="text-neutral-500 line-through text-lg mb-2">De R$ 167,00 por:</p>
               
               <div className="mb-8">
                 <p className="text-neutral-600 font-bold text-xl mb-1">12 x de</p>
                 <p className="font-display text-7xl font-bold text-orange-600 animate-pulse-slow drop-shadow-sm">7,14</p>
                 <div className="w-16 h-1 bg-orange-200 mx-auto my-4 rounded-full"></div>
                 <p className="text-neutral-700 font-bold text-lg">ou R$ 67,00 à vista</p>
               </div>

               <div className="bg-white/50 rounded-xl p-3 mb-8 inline-block">
                  <p className="flex items-center gap-2 text-neutral-600 font-medium">
                    <span className="text-rose-400">🌸</span> Pagamento único (sem mensalidades)
                  </p>
               </div>

               <a 
                 href="https://lastlink.com/p/C9E6ECA62/checkout-payment/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-xl py-6 rounded-2xl shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 animate-pulse relative overflow-hidden group"
               >
                 <span className="relative z-10 flex items-center justify-center gap-3">
                    🔥 COMPRAR AGORA COM DESCONTO
                 </span>
                 <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
               </a>
               
               <div className="flex flex-wrap justify-center gap-4 mt-8 text-xs font-bold text-neutral-500 uppercase tracking-wide">
                 <span className="flex items-center gap-1"><Lock size={14} className="text-mint-500"/> Compra Segura</span>
                 <span className="flex items-center gap-1"><Shield size={14} className="text-mint-500"/> Privacidade</span>
                 <span className="flex items-center gap-1"><Check size={14} className="text-mint-500"/> Garantia</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 21: Security Cards
export const SecuritySection: React.FC = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[{icon: Lock, title: "Segurança", text: "Informações protegidas"}, {icon: Shield, title: "Acesso Imediato", text: "E-mail e WhatsApp"}, {icon: MessageCircle, title: "Suporte", text: "Grupo de suporte para todos os alunos"}].map((Item, i) => (
              <div key={i} className="bg-neutral-100 p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                   <Item.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h4 className="font-bold text-xl mb-2 text-neutral-800">{Item.title}</h4>
                <p className="text-neutral-500">{Item.text}</p>
              </div>
            ))}
          </div>
        </div>
    </section>
);

// Section 22: Urgency
export const UrgencySection: React.FC = () => (
    <section className="py-24 bg-rose-50 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-neutral-800 mb-8">Chega de fazer dietas restritivas que só te frustram</h2>
            <p className="font-body text-xl text-neutral-600 mb-12">Se você vive alguma dessas situações... Cuidar da saúde é coisa séria.</p>
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-lg border border-rose-100">
                <p className="font-handwritten text-4xl text-rose-500 leading-normal">
                    "Porque na minha família existem diversos casos de diabetes, pressão alta e obesidade, e na sua também, acertei?"
                </p>
            </div>
        </div>
    </section>
);

// Section 27: Guarantee
export const GuaranteeSection: React.FC = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-cream-50 border border-orange-100 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-card hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0 relative">
               <img src="https://i.imgur.com/IQXSSLc.png" alt="Garantia 30 Dias" className="w-48 h-auto drop-shadow-md" />
            </div>
            <div>
              <h3 className="font-display font-bold text-3xl mb-4 text-neutral-800">Experimente o Receitas para Secar por 30 dias grátis</h3>
              <p className="font-body text-neutral-600 leading-relaxed text-lg">Se por qualquer motivo, você não gostar do conteúdo e achar que não serve para você. É só solicitar o reembolso com a equipe. Sem burocracia e sem questionamentos.</p>
            </div>
          </div>
        </div>
    </section>
);

// Section 28: FAQ
export const FAQSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display font-bold text-4xl text-center mb-16 text-neutral-800">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-orange-200 hover:shadow-md">
                <button 
                  onClick={() => toggleFaq(index)}
                  className={`w-full flex justify-between items-center p-6 text-left font-bold text-lg text-neutral-700 transition-colors ${openFaq === index ? 'bg-orange-50 text-orange-800' : 'bg-white hover:bg-neutral-50'}`}
                >
                  {item.question}
                  <span className={`transform transition-transform duration-300 text-orange-500 text-2xl font-light ${openFaq === index ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 bg-white text-neutral-600 leading-relaxed border-t border-orange-100">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

// Section 29: Final WhatsApp
export const FinalWhatsApp: React.FC = () => (
    <section className="py-24 bg-cream-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl mb-4 text-neutral-800">Ficou com alguma dúvida?</h2>
          <p className="mb-10 text-neutral-500 text-lg">Fique à vontade para me chamar no WhatsApp</p>
          <a href="#" className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold text-lg py-4 px-10 rounded-full hover:brightness-110 hover:-translate-y-1 transition-all shadow-lg hover:shadow-[#25d366]/30">
            <WhatsAppIcon className="w-6 h-6" />
            Tirar dúvidas no WhatsApp
          </a>
        </div>
    </section>
);