import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';
import { BusinessConfig } from '../types';

export const Contact = ({ config }: { config: BusinessConfig }) => {
  return (
    <section id="contact" className="py-24 bg-zinc-900">
      <div className="container px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info Card */}
          <div className="p-8 lg:p-12 glass-card border-brand/20 bg-zinc-950/80">
            <h2 className="mb-8 text-4xl font-black tracking-tight uppercase italic text-brand">
              Get in Touch
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-brand">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-1">Our Studio</h4>
                  <p className="text-white font-medium">{config.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-brand">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-1">Call Us</h4>
                  <p className="text-white font-medium">{config.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-brand">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-1">Working Hours</h4>
                  <p className="text-white font-medium text-sm">{config.opening_hours.weekday}</p>
                  <p className="text-white font-medium text-sm">{config.opening_hours.weekend}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {config.socials.instagram && (
                <a href={config.socials.instagram} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:border-brand hover:text-brand transition-all">
                  <Instagram size={20} />
                </a>
              )}
              {config.socials.facebook && (
                <a href={config.socials.facebook} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:border-brand hover:text-brand transition-all">
                  <Facebook size={20} />
                </a>
              )}
              {config.socials.youtube && (
                <a href={config.socials.youtube} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:border-brand hover:text-brand transition-all">
                  <Youtube size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Map Placeholder/CTA */}
          <div className="relative rounded-3xl overflow-hidden glass border-white/5">
            <div className="absolute inset-0 bg-brand/5 backdrop-blur-[2px] flex flex-col items-center justify-center p-8 text-center">
              <div className="w-20 h-20 bg-brand/20 rounded-full flex items-center justify-center text-brand mb-6">
                <MapPin size={40} />
              </div>
              <h3 className="text-2xl font-black uppercase italic mb-4">Visit Our Location</h3>
              <p className="text-zinc-500 mb-8 max-w-sm">We are conveniently located in the heart of {config.city}. Secure parking and premium customer lounge available.</p>
              <a 
                href={config.google_maps_link}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-white text-black text-xs font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-transform"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
