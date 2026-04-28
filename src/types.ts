export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  icon?: string;
}

export interface Package {
  id: string;
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  isPopular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export interface BusinessConfig {
  business_name: string;
  tagline: string;
  city: string;
  country: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  google_maps_link: string;
  logo?: string;
  hero_title: string;
  hero_subtitle: string;
  hero_image: string;
  services: Service[];
  packages: Package[];
  opening_hours: {
    weekday: string;
    weekend: string;
  };
  before_after_images: { before: string; after: string; title: string }[];
  gallery_images: string[];
  reviews: Review[];
  socials: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  booking_link: string;
  years_in_business: number;
  stats: {
    label: string;
    value: string;
  }[];
  theme: {
    accent_color: string;
    mode: 'dark' | 'light';
  };
}
