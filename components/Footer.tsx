import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-neutral-400 py-20 text-center text-sm border-t border-neutral-700">
      <div className="container mx-auto px-4">
        <img 
          src="https://i.imgur.com/db2XVKR.png" 
          alt="Logo Receitas para Secar" 
          className="h-20 w-auto mx-auto mb-8 filter brightness-0 invert opacity-90"
        />
        
        <div className="mb-10 space-y-2">
            <h5 className="font-bold text-white text-lg">Receitas para Secar</h5>
            <p>Receitinha do Dia LTDA - 48.536.895/0001-92</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 opacity-80">
          
          <p className="text-xs leading-relaxed border-t border-neutral-700 pt-8 mt-8">
            * As receitas desse material têm apenas a função de inspirar e fornecer mais alternativas para que você seja capaz de enriquecer o seu repertório na cozinha saudável. Este produto não substitui o parecer médico. Sempre consulte um médico para tratar de assuntos relacionados à saúde. Os resultados podem variar de pessoa para pessoa.
          </p>
          
          <p className="text-xs pt-4">© {new Date().getFullYear()} Receitas para Secar. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};