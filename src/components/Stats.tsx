import { motion } from 'motion/react';
import { BusinessConfig } from '../types';

export const Stats = ({ config }: { config: BusinessConfig }) => {
  return (
    <section className="relative z-20 -mt-16 container px-6 mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 glass-card border-brand/20 shadow-2xl shadow-brand/10">
        {config.stats.map((stat, index) => (
          <div key={index} className="text-center group border-r last:border-0 border-white/10">
            <div className="text-3xl sm:text-4xl font-black text-brand tracking-tighter uppercase italic mb-1 group-hover:scale-110 transition-transform">
              {stat.value}
            </div>
            <div className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] px-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
