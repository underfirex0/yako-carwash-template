/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { BeforeAfter } from './components/BeforeAfter';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileCTA } from './components/MobileCTA';
import { config } from './businessConfig';

export default function App() {
  // Apply dynamic theme color and SEO
  useEffect(() => {
    document.documentElement.style.setProperty('--brand-color', config.theme.accent_color);
    document.title = `${config.business_name} | Premium Auto Detailing in ${config.city}`;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', `${config.hero_title}. ${config.hero_subtitle}`);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation Layer */}
      <Navigation config={config} />

      {/* Main Content Sections */}
      <main>
        <Hero config={config} />
        <Stats config={config} />
        <Services config={config} />
        <BeforeAfter config={config} />
        
        {/* Dynamic Section Visibility Check */}
        {config.packages && config.packages.length > 0 && (
          <Pricing config={config} />
        )}
        
        <Testimonials config={config} />
        
        {/* Why Choose Us Concept - Inline for Template Simplicity */}
        <section id="about" className="py-24 bg-zinc-950 overflow-hidden">
          <div className="container px-6 mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-8">
                <h2 className="text-4xl lg:text-6xl font-black uppercase italic tracking-tight italic">
                  WE DON'T JUST WASH. <span className="text-brand">WE RESTORE.</span>
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                  With over {config.years_in_business} years of experience in the luxury automotive sector, we understand that your vehicle is more than just transport—it's an investment and a statement.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  {[
                    "PH-Neutral Bio-Chemicals",
                    "Certified Detailing Team",
                    "Dust-Free Studio Environment",
                    "High-End Buffing Technology",
                    "Nano-Tech Protection",
                    "Paint-Safe Guarantee"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-zinc-300">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="aspect-square rounded-3xl overflow-hidden glass border-white/10 p-2">
                  <img 
                    src={config.gallery_images[0]} 
                    alt="Work in Progress" 
                    className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
                {/* Decorative Floating Element */}
                <div className="absolute -bottom-6 -right-6 glass-card p-6 border-brand/50 shadow-2xl animate-bounce duration-[3000ms]">
                  <div className="text-2xl font-black italic text-brand tracking-tighter">PREMIUM</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 text-center">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact config={config} />
      </main>

      {/* Footer & CTA Layer */}
      <Footer config={config} />
      <MobileCTA config={config} />
    </div>
  );
}
