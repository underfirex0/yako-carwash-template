import { BusinessConfig } from '../types';

export const Footer = ({ config }: { config: BusinessConfig }) => {
  return (
    <footer className="py-12 bg-zinc-950 border-t border-white/5 pb-32 md:pb-12">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black tracking-tighter italic text-white uppercase flex items-center gap-2">
              <div className="w-8 h-8 bg-brand rounded-lg" />
              {config.business_name}
            </h2>
            <p className="mt-2 text-zinc-500 text-sm font-medium">{config.city}'s Premier Detailing Studio</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            <a href="#services" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Services</a>
            <a href="#pricing" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} {config.business_name}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-zinc-400">PRIVACY POLICY</a>
            <a href="#" className="hover:text-zinc-400">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
