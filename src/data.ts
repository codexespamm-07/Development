import { Room, Destination, BlogPost, TeamMember, Testimonial } from "./types";

export const ROOMS: Room[] = [
  {
    id: "r1",
    name: "Heritage Sanctuary Suite",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    location: "Main Heritage Wing",
    price: 320,
    duration: "Per Night",
    rating: 4.9,
    beds: "1 King Bed",
    size: "550 sq ft",
    amenities: ["Private Balcony", "Ayurvedic Bath Setup", "24/7 Butler Service", "Complimentary High Tea", "Mini Bar"]
  },
  {
    id: "r2",
    name: "Temple View Royal Suite",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80",
    location: "Lotus Tower Wing",
    price: 450,
    duration: "Per Night",
    rating: 5.0,
    beds: "1 Royal Canopy King Bed",
    size: "720 sq ft",
    amenities: ["Temple Skyline View", "Dhyana Meditation Corner", "Steam & Jacuzzi", "Heritage Teak Furnishings", "Luxury Lounge"]
  },
  {
    id: "r3",
    name: "Peacock Garden Villa",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
    location: "Private Courtyard Wing",
    price: 580,
    duration: "Per Night",
    rating: 4.9,
    beds: "1 Premium King Bed",
    size: "850 sq ft",
    amenities: ["Private Plunge Pool", "Outdoor Rainfall Shower", "Exclusive Garden Path", "Ayurvedic Spa Pantry", "In-villa Yoga Mat"]
  },
  {
    id: "r4",
    name: "Deluxe Serenity Room",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    location: "Breeze Courtyard Wing",
    price: 210,
    duration: "Per Night",
    rating: 4.7,
    beds: "2 Queen Beds",
    size: "420 sq ft",
    amenities: ["Garden View Terrace", "Espresso Machine", "Rainfall Shower", "Smart Comfort Control", "Plush Pillow Menu"]
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: "d1",
    name: "Thanjavur Royal Palace & Gopuram",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
    tagline: "Legacy of Chola Architecture",
    description: "Explore the ancient granite marvels and intricately carved towers that inspired our residency's heritage aesthetic, located just a short drive from the resort."
  },
  {
    id: "d2",
    name: "Vembanad Silent Backwaters",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80",
    tagline: "Whispering Waters & Palms",
    description: "Embark on a customized private luxury houseboat excursion arranged directly by our concierge through emerald backwaters, lagoons, and lotus fields."
  },
  {
    id: "d3",
    name: "Munnar Tea Estates & Mist",
    image: "https://images.unsplash.com/photo-1506461883276-594a12b11db3?auto=format&fit=crop&w=600&q=80",
    tagline: "Ethereal Green Valleys",
    description: "Witness the sun breaking through foggy high mountain peaks and walk through endless manicured green terraces with our signature guided wellness tours."
  },
  {
    id: "d4",
    name: "Bay of Bengal Golden Shores",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    tagline: "Monolithic Sea Temples",
    description: "Walk along majestic shorelines lined with world heritage rock-cut monoliths, ocean breezes, and historic lighthouses."
  },
  {
    id: "d5",
    name: "Classical Heritage Theatre",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80",
    tagline: "Sacred Classical Indian Dance",
    description: "In-house evening recitals featuring spiritual Bharatanatyam and dynamic Kathakali storytellers in our open-air temple amphitheater."
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: "b1",
    title: "The Art of Slow Living: Reclaiming Peace at Saravana Residency",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    date: "June 24, 2026",
    readTime: "5 mins read",
    category: "Wellness",
    excerpt: "Discover the therapeutic effects of traditional South Indian architecture, meditative courtyard design, and early morning temple bells on mental clarity."
  },
  {
    id: "b2",
    title: "Chola Gastronomy: Reviving 1000-Year-Old Imperial Recipes",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    date: "May 18, 2026",
    readTime: "8 mins read",
    category: "Culinary Heritage",
    excerpt: "Our award-winning Executive Chef details the journey of sourcing forgotten grains, heirloom spices, and organic produce for our imperial dining room."
  },
  {
    id: "b3",
    title: "10 Architectural Wonders of Tamil Nadu You Must Visit",
    image: "https://images.unsplash.com/photo-1600100397608-f010e42edb84?auto=format&fit=crop&w=800&q=80",
    date: "April 02, 2026",
    readTime: "6 mins read",
    category: "Travel Guide",
    excerpt: "From the majestic heights of Thanjavur's Brihadisvara to the carved stone pillars of Darasuram, unlock the best historical day trips."
  }
];

export const TEAM: TeamMember[] = [
  {
    id: "t1",
    name: "Sundaram Raghavan",
    role: "General Manager & Curator",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      whatsapp: "https://wa.me/1234567890"
    }
  },
  {
    id: "t2",
    name: "Chef Karthik Viswanathan",
    role: "Culinary Director (Heritage Dining)",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80",
    socials: {
      instagram: "#",
      whatsapp: "https://wa.me/1234567890"
    }
  },
  {
    id: "t3",
    name: "Dr. Meera Nambiar",
    role: "Lead Ayurvedic Physician & Spa Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    socials: {
      facebook: "#",
      instagram: "#",
      whatsapp: "https://wa.me/1234567890"
    }
  },
  {
    id: "t4",
    name: "Arjun Prasanna",
    role: "Chief Concierge & Guest Experience Planner",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    socials: {
      twitter: "#",
      whatsapp: "https://wa.me/1234567890"
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "ts1",
    name: "Devendra Verma",
    role: "Tech Entrepreneur, Bangalore",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    comment: "Saravana Residency is an absolute masterpiece of hospitality. The architectural design reminiscent of Tamil temples is awe-inspiring. Listening to early morning hymns with the temple views while sipping high-quality filter coffee on our suite's balcony is a memory my family will cherish forever. Unbeatable attention to detail!",
    rating: 5,
    stayDate: "May 2026"
  },
  {
    id: "ts2",
    name: "Sophia Lindqvist",
    role: "Cultural Historian, Stockholm",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    comment: "The cultural integration here is incredibly respectful and authentic. Instead of cheap resort gimmicks, they offer true luxury—from the customized Ayurvedic consultations with Dr. Meera to the gorgeous open-air dance performances. The resort's primary Temple Blue color scheme with the gold finishes makes you feel like royalty.",
    rating: 5,
    stayDate: "March 2026"
  },
  {
    id: "ts3",
    name: "Ranganathan Iyer",
    role: "Retired Professor, Chennai",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    comment: "Being from Chennai, I was skeptical of modern 'heritage' branding, but Saravana Residency got everything right. The stone carvings, the serene courtyard gardens, and above all, the divine South Indian food. Karthik's traditional millets and native spice dishes represent our culinary peak. A stellar resort that does our state proud.",
    rating: 5,
    stayDate: "June 2026"
  }
];

export const GALLERY_IMAGES = [
  {
    id: "g1",
    url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
    caption: "The Infinity Pool overlooking the Temple Tower Wing during twilight"
  },
  {
    id: "g2",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    caption: "Central Courtyard featuring majestic pillars and water fountains"
  },
  {
    id: "g3",
    url: "https://images.unsplash.com/photo-1600100397608-f010e42edb84?auto=format&fit=crop&w=800&q=80",
    caption: "Meticulous handcrafted carvings of the temple architecture"
  },
  {
    id: "g4",
    url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    caption: "The Lounge Room featuring premium teakwood work and velvet upholstery"
  },
  {
    id: "g5",
    url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    caption: "Dhyana Spa room, offering specialized traditional Ayurvedic therapy"
  },
  {
    id: "g6",
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    caption: "Heritage Dining Room serving imperial South Indian culinary delights"
  }
];
