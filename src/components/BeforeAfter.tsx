import { BusinessConfig } from '../types';

export const BeforeAfter = ({ config }: { config: BusinessConfig }) => {
  if (!config.before_after_images?.length) return null;

  return (
    <section className="py-24 bg-zinc-900">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black tracking-tight uppercase italic sm:text-5xl">
            Extreme <span className="text-brand">Results</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto uppercase text-xs font-bold tracking-[0.2em]">
            Witness the transformation of luxury automobiles under our care.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-1">
          {config.before_after_images.map((item, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-black uppercase italic text-center tracking-tight text-white/50">{item.title}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative group overflow-hidden rounded-3xl aspect-video">
                  <img 
                    src={item.before} 
                    alt="Before" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-zinc-950/80 text-[10px] font-black uppercase tracking-widest text-white border border-white/10 rounded">
                    Before
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-3xl aspect-video">
                  <img 
                    src={item.after} 
                    alt="After" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 border-2 border-brand/20" 
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-brand text-[10px] font-black uppercase tracking-widest text-white rounded">
                    After
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
