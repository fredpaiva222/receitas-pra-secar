import React, { useState, useEffect } from 'react';
import { Menu, X } from './Icons';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-card py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-display font-bold text-xl md:text-2xl transition-transform group-hover:scale-105 shadow-orange">
            RS
          </div>
          <span className="font-display font-bold text-xl md:text-2xl text-neutral-800 tracking-tight">Receitas para Secar</span>
        </button>
        
        <button className="md:hidden text-neutral-800" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {['Benefícios', 'Depoimentos', 'Garantia'].map((item) => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="font-body text-neutral-700 hover:text-orange-600 font-medium transition-colors">
              {item}
            </button>
          ))}
          <button onClick={() => scrollTo('oferta')} className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-full font-bold hover:shadow-orange hover:scale-105 transition-all duration-300 text-sm tracking-wide">
            QUERO SECAR
          </button>
        </nav>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-2 border-t border-gray-100">
            {['Benefícios', 'Depoimentos', 'Garantia', 'Oferta'].map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="font-body text-neutral-800 text-lg font-medium py-3 border-b border-gray-100 last:border-0 text-left">
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};