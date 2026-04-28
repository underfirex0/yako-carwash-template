import { Star, User } from 'lucide-react';
import { BusinessConfig } from '../types';

export const Testimonials = ({ config }: { config: BusinessConfig }) => {
  if (!config.reviews?.length) return null;

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black tracking-tight uppercase italic sm:text-5xl">
            Customer <span className="text-brand">Stories</span>
          </h2>
          <div className="flex items-center justify-center gap-1 text-brand">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
            <span className="ml-2 text-zinc-500 text-sm font-bold uppercase tracking-widest">4.9/5 Rating</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {config.reviews.map((review) => (
            <div key={review.id} className="p-8 glass-card">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" className="text-brand" />
                ))}
              </div>
              <p className="mb-6 text-zinc-300 italic leading-relaxed">"{review.comment}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass bg-white/5 flex items-center justify-center text-zinc-500">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-tighter italic text-white">{review.author}</h4>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
