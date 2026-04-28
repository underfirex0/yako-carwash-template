import { motion } from 'motion/react';
import { Sparkles, Armchair, ShieldCheck, Cpu, Droplets, SprayCan } from 'lucide-react';
import { BusinessConfig } from '../types';

const iconMap: Record<string, any> = {
  Sparkles,
  Armchair,
  ShieldCheck,
  Cpu,
  Droplets,
  SprayCan
};

export const Services = ({ config }: { config: BusinessConfig }) => {
  if (!config.services?.length) return null;

  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-4xl font-black tracking-tight uppercase italic sm:text-5xl">
              Professional <span className="text-brand">Care</span>
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Unlock the full potential of your vehicle with our specialized detailing treatments tailored for precision.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {config.services.map((service, index) => {
            const Icon = iconMap[service.icon || 'Sparkles'] || Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 glass-card relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-150 transition-transform duration-500">
                  <Icon size={120} />
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-6 rounded-xl bg-brand/20 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold tracking-tight text-white uppercase italic">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-sm text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <span className="text-lg font-black text-brand tracking-tighter uppercase italic">
                      {service.price}
                    </span>
                    <a href={config.booking_link} className="text-xs font-bold tracking-widest text-zinc-500 uppercase hover:text-white transition-colors">
                      Book Now &rarr;
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
