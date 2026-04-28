import { motion } from 'motion/react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BusinessConfig } from '../types';

export const Hero = ({ config }: { config: BusinessConfig }) => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
        style={{ backgroundImage: `url(${config.hero_image})` }}
      >
        <div className="absolute inset-0 bg-zinc-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/30 to-zinc-950" />
      </div>

      <div className="container relative z-10 px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase border border-brand/30 rounded-full bg-brand/10 text-brand animate-pulse">
            {config.tagline}
          </span>
          <h1 className="mb-8 text-5xl font-black tracking-tighter sm:text-7xl lg:text-8xl text-white uppercase italic">
            {config.hero_title}
          </h1>
          <p className="mb-12 text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            {config.hero_subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={config.booking_link}
              className="w-full sm:w-auto px-8 py-4 text-sm font-black tracking-widest uppercase transition-all bg-brand text-white rounded-lg hover:bg-brand/90 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <Calendar size={18} />
              Book Appointment
            </a>
            <div className="flex gap-4 w-full sm:w-auto">
              <a 
                href={`tel:${config.phone.replace(/\s/g, '')}`}
                className="flex-1 sm:flex-none glass-card px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a 
                href={`https://wa.me/${config.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none glass-card p-4 transition-all flex items-center justify-center text-green-500 hover:bg-green-500/10"
              >
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
    </section>
  );
};
