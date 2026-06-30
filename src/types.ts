export interface Room {
  id: string;
  name: string;
  image: string;
  location: string;
  price: number;
  duration: string;
  rating: number;
  beds: string;
  size: string;
  amenities: string[];
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  tagline: string;
}

export interface BlogPost {
  id: string;
  title: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socials: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    whatsapp?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  comment: string;
  rating: number;
  stayDate: string;
}

export interface BookingDetails {
  checkIn: string;
  checkOut: string;
  rooms: number;
  adults: number;
  children: number;
}
