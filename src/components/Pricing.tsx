import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';
import { BusinessConfig } from '../types';

export const Pricing = ({ config }: { config: BusinessConfig }) => {
  if (!config.packages?.length) return null;

  return (
    <section id="pricing" className="py-24 bg-zinc-900/50">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black tracking-tight uppercase italic sm:text-5xl">
            Premium <span className="text-brand">Packages</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Choose the level of perfection your vehicle deserves. From maintenance washes to full showroom restoration.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {config.packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-500 ${
                pkg.isPopular 
                  ? 'bg-zinc-800 border-brand shadow-2xl shadow-brand/20 scale-105 z-10' 
                  : 'bg-zinc-900 border-white/10 hover:border-white/20'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-white text-[10px] font-black uppercase tracking-[0.2em] py-1.5 px-4 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Star size={10} fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="mb-1 text-2xl font-black uppercase italic tracking-tight">{pkg.name}</h3>
                <p className="text-zinc-500 text-sm font-medium">{pkg.subtitle}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-black tracking-tighter italic text-brand">{pkg.price}</span>
              </div>

              <ul className="mb-10 space-y-4 flex-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-brand/20 flex items-center justify-center text-brand">
                      <Check size={10} strokeWidth={4} />
                    </div>
                    <span className="text-zinc-300 text-sm leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={config.booking_link}
                className={`w-full py-4 text-xs font-black uppercase tracking-widest text-center rounded-xl transition-all ${
                  pkg.isPopular 
                    ? 'bg-brand text-white hover:bg-brand/90' 
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                Select {pkg.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
