import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BusinessConfig } from '../types';

export const MobileCTA = ({ config }: { config: BusinessConfig }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe">
      <div className="p-4 bg-zinc-950/90 backdrop-blur-xl border-t border-white/10 flex items-center gap-3">
        <a 
          href={`tel:${config.phone.replace(/\s/g, '')}`}
          className="flex-1 h-14 glass-card bg-zinc-900 flex flex-col items-center justify-center text-zinc-400 active:bg-zinc-800 transition-colors"
        >
          <Phone size={20} className="mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Call</span>
        </a>
        <a 
          href={`https://wa.me/${config.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 h-14 glass-card bg-zinc-900 flex flex-col items-center justify-center text-green-500 active:bg-green-500/10 transition-colors"
        >
          <MessageSquare size={20} className="mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-tighter">WhatsApp</span>
        </a>
        <a 
          href={config.booking_link}
          className="flex-[2] h-14 bg-brand text-white rounded-xl shadow-lg shadow-brand/20 flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <Calendar size={20} />
          <span className="text-xs font-black uppercase tracking-tighter">Book Now</span>
        </a>
      </div>
    </div>
  );
};
