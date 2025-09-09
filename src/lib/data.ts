export interface Agent {
  name: string;
  phone: string;
  email: string;
  avatar: string;
}

export interface PropertyImage {
  url: string;
  hint: string;
}

export interface Property {
  id: number;
  images: PropertyImage[];
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
  agent: Agent;
}

export const listings: Property[] = [
  {
    id: 1,
    images: [
      { url: "https://picsum.photos/800/600?random=1", hint: "modern living room" },
      { url: "https://picsum.photos/800/600?random=2", hint: "luxury kitchen" },
      { url: "https://picsum.photos/800/600?random=3", hint: "master bedroom" },
      { url: "https://picsum.photos/800/600?random=4", hint: "backyard garden" },
    ],
    address: "123 Maple Street, Evergreen, CO",
    price: "$1,250,000",
    bedrooms: 4,
    bathrooms: 3,
    description:
      "Nestled among towering pines, this stunning mountain retreat offers breathtaking views and luxurious comfort. The open-concept living space features vaulted ceilings, a grand stone fireplace, and floor-to-ceiling windows. The gourmet kitchen is a chef's dream, equipped with state-of-the-art appliances and a large island. Retreat to the master suite with its private balcony and spa-like ensuite bath. An expansive deck provides the perfect setting for entertaining or simply soaking in the serene natural surroundings.",
    agent: {
      name: "Eleanor Vance",
      phone: "555-123-4567",
      email: "eleanor.vance@estateview.com",
      avatar: "https://picsum.photos/100/100?random=11",
    },
  },
  {
    id: 2,
    images: [
      { url: "https://picsum.photos/800/600?random=5", hint: "city apartment" },
      { url: "https://picsum.photos/800/600?random=6", hint: "rooftop terrace" },
      { url: "https://picsum.photos/800/600?random=7", hint: "sleek bathroom" },
      { url: "https://picsum.photos/800/600?random=8", hint: "minimalist bedroom" },
    ],
    address: "456 Urban Way, Suite 1200, Denver, CO",
    price: "$875,000",
    bedrooms: 2,
    bathrooms: 2,
    description:
      "Experience the pinnacle of city living in this sophisticated downtown penthouse. This residence boasts panoramic city and mountain views from every room. The interior is a masterpiece of modern design, featuring clean lines, premium finishes, and an abundance of natural light. The chef's kitchen flows seamlessly into the dining and living areas, creating an ideal space for hosting guests. Enjoy exclusive access to a private rooftop terrace, a state-of-the-art fitness center, and 24-hour concierge service.",
    agent: {
      name: "Marcus Thorne",
      phone: "555-987-6543",
      email: "marcus.thorne@estateview.com",
      avatar: "https://picsum.photos/100/100?random=12",
    },
  },
  {
    id: 3,
    images: [
      { url: "https://picsum.photos/800/600?random=9", hint: "suburban home" },
      { url: "https://picsum.photos/800/600?random=10", hint: "family kitchen" },
      { url: "https://picsum.photos/800/600?random=11", hint: "cozy bedroom" },
      { url: "https://picsum.photos/800/600?random=12", hint: "spacious backyard" },
    ],
    address: "789 Meadow Lane, Boulder, CO",
    price: "$950,000",
    bedrooms: 5,
    bathrooms: 4,
    description:
      "A charming family home situated in a desirable, quiet neighborhood. This beautiful property features a welcoming front porch and a spacious, professionally landscaped backyard with a custom stone patio. Inside, the home is filled with warmth and character, from the hardwood floors to the cozy fireplace in the family room. The large, eat-in kitchen is perfect for family gatherings. The fully finished basement offers a recreation room and an additional bedroom, providing ample space for a growing family.",
    agent: {
      name: "Eleanor Vance",
      phone: "555-123-4567",
      email: "eleanor.vance@estateview.com",
      avatar: "https://picsum.photos/100/100?random=11",
    },
  },
];
