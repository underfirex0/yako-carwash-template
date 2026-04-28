import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BusinessConfig } from '../types';

export const Navigation = ({ config }: { config: BusinessConfig }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container px-6 mx-auto flex items-center justify-between">
        <a href="#home" className="text-xl font-black tracking-tighter italic text-white uppercase flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center shrink-0">
            <div className="w-4 h-4 rounded-sm bg-white/20" />
          </div>
          <span className={isScrolled ? 'opacity-100' : 'opacity-100'}>{config.business_name}</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#services" className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Services</a>
          <a href="#pricing" className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Pricing</a>
          <a href="#testimonials" className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Reviews</a>
          <a href="#contact" className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Contact</a>
          <a 
            href={config.booking_link}
            className="px-6 py-3 bg-brand text-white text-xs font-black uppercase tracking-widest rounded-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand/20"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Trigger */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-black uppercase tracking-widest text-zinc-400">Services</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-black uppercase tracking-widest text-zinc-400">Pricing</a>
          <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-black uppercase tracking-widest text-zinc-400">Reviews</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-black uppercase tracking-widest text-zinc-400">Contact</a>
          <a 
            href={config.booking_link}
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-4 bg-brand text-white text-sm font-black uppercase tracking-widest rounded-lg text-center"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};
