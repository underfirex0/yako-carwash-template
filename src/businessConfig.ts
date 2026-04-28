import { BusinessConfig } from './types';

export const config: BusinessConfig = {
  business_name: "GLOSS & GUARD",
  tagline: "The Art of Automotive Perfection",
  city: "Los Angeles",
  country: "USA",
  phone: "+1 (555) 012-3456",
  whatsapp: "+15550123456",
  email: "bookings@glossguard.com",
  address: "123 Detailer Ave, Beverly Hills, CA 90210",
  google_maps_link: "https://goo.gl/maps/example",
  hero_title: "PREMIUM AUTO DETAILING FOR THE ELITE",
  hero_subtitle: "Experienced. Precise. Passionate. We bring the showroom shine back to your luxury vehicle with cutting-edge ceramic coating and deep-clean restoration.",
  hero_image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=2000",
  years_in_business: 12,
  booking_link: "#booking",
  stats: [
    { label: "Cars Detailed", value: "8,500+" },
    { label: "Five Star Reviews", value: "1,200+" },
    { label: "Satisfaction Rate", value: "100%" },
    { label: "Years Experience", value: "12+" }
  ],
  services: [
    {
      id: "1",
      title: "Exterior Correction",
      description: "Paint decontamination, clay bar treatment, and multi-stage machine polishing to remove swirls and scratches.",
      price: "From $249",
      icon: "Sparkles"
    },
    {
      id: "2",
      title: "Interior Sanctuary",
      description: "Deep steam cleaning, leather conditioning, and odor elimination for a brand-new cabin feel.",
      price: "From $180",
      icon: "Armchair"
    },
    {
      id: "3",
      title: "Ceramic Coating",
      description: "Ultra-hydrophobic 9H nano-coating providing years of protection and insane mirror-like gloss.",
      price: "From $899",
      icon: "ShieldCheck"
    },
    {
      id: "4",
      title: "Engine Bay Detail",
      description: "Safe degreasing and dressing of engine components for a factory-fresh appearance.",
      price: "From $95",
      icon: "Cpu"
    }
  ],
  packages: [
    {
      id: "p1",
      name: "Silver Wash",
      price: "$120",
      subtitle: "The Essential Refresh",
      features: [
        "Hand Wash & Dry",
        "Wheel & Rim Deep Clean",
        "Interior Vacuum",
        "Window Buffing",
        "Tire Dressing"
      ]
    },
    {
      id: "p2",
      name: "Gold Detail",
      price: "$350",
      subtitle: "Our Most Popular Choice",
      isPopular: true,
      features: [
        "Everything in Silver",
        "Clay Bar Treatment",
        "Machine Wax Waxing",
        "Leather Conditioning",
        "Engine Bay Wipe-down"
      ]
    },
    {
      id: "p3",
      name: "Platinum Protection",
      price: "$750",
      subtitle: "The Ultimate Overhaul",
      features: [
        "Everything in Gold",
        "High-Speed Polishing",
        "Fabric Protection",
        "Plastic Trim Restore",
        "6-Month Paint Sealant"
      ]
    }
  ],
  opening_hours: {
    weekday: "Mon - Fri: 8:00 AM - 7:00 PM",
    weekend: "Sat - Sun: 9:00 AM - 4:00 PM"
  },
  before_after_images: [
    {
      before: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80",
      after: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80",
      title: "Paint Correction"
    }
  ],
  gallery_images: [
    "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1553034191-4c6046e1236c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80"
  ],
  reviews: [
    {
      id: "r1",
      author: "Michael R.",
      rating: 5,
      comment: "Absolutely incredible work. My Porsche looks better than the day I picked it up from the dealership.",
      date: "2 days ago"
    },
    {
      id: "r2",
      author: "Sarah J.",
      rating: 5,
      comment: "The interior detail removed stains I thought were permanent. Highly recommend their Gold package!",
      date: "1 week ago"
    }
  ],
  socials: {
    instagram: "https://instagram.com/glossguard",
    facebook: "https://facebook.com/glossguard"
  },
  theme: {
    accent_color: "#3b82f6",
    mode: "dark"
  }
};
