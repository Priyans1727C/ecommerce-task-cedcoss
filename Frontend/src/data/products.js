const img = (q, sig) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=900&q=70&sig=${sig}`;

export const products = [
  {
    id: "p1",
    slug: "executive-matte-notebook",
    name: "Executive Matte Notebook",
    category: "Notebooks",
    description:
      "Hardcover A5 notebook with 200 gsm matte paper, lay-flat binding and an elastic closure. Crafted for executives and serious note-takers.",
    image: "photo-1531346878377-a5be20888e57",
    gallery: ["photo-1531346878377-a5be20888e57", "photo-1517842645767-c639042777db", "photo-1455390582262-044cdead277a", "photo-1519682337058-a94d519337bc"],
    basePrice: 10,
    compareAt: 13,
    discountPct: 27,
    attributes: ["A5 size", "200 gsm", "Hardcover"],
    tiers: [
      { min: 10, max: 49, price: 10, discount: 23 },
      { min: 50, max: 199, price: 8.6, discount: 34 },
      { min: 200, max: null, price: 7.2, discount: 45 },
    ],
    minOrder: 10,
  },
  {
    id: "p2",
    slug: "premium-graphite-set",
    name: "Premium Graphite Set",
    category: "Drawing",
    description:
      "Professional grade graphite pencils in various hardnesses. Perfect for sketching, shading, and detailed technical drawing.",
    image: "photo-1513364776144-60967b0f800f",
    gallery: ["photo-1513364776144-60967b0f800f", "photo-1455390582262-044cdead277a", "photo-1452860606245-08befc0ff44b", "photo-1502691876148-a84978e59af8"],
    basePrice: 18,
    compareAt: 24,
    discountPct: 24,
    attributes: ["12 pcs Pencils", "Mixed Grade", "Tin Case"],
    tiers: [
      { min: 5, max: 20, price: 21, discount: 12 },
      { min: 21, max: 100, price: 18.2, discount: 24 },
      { min: 101, max: null, price: 15, discount: 37 },
    ],
    minOrder: 5,
  },
  {
    id: "p3",
    slug: "artists-pro-sketchbook",
    name: "Artist's Pro Sketchbook",
    category: "Sketchbooks",
    description:
      "Heavyweight cold-press sketchbook with acid-free paper. Built for graphite, ink and light wash work.",
    image: "photo-1455390582262-044cdead277a",
    gallery: ["photo-1455390582262-044cdead277a", "photo-1519682337058-a94d519337bc", "photo-1531346878377-a5be20888e57", "photo-1513364776144-60967b0f800f"],
    basePrice: 22,
    compareAt: 33,
    discountPct: 32,
    attributes: ["A4 size", "180 gsm", "Spiral Bound"],
    tiers: [
      { min: 5, max: 25, price: 22, discount: 33 },
      { min: 26, max: 100, price: 19, discount: 42 },
      { min: 101, max: null, price: 16.5, discount: 50 },
    ],
    minOrder: 5,
  },
  {
    id: "p4",
    slug: "minimalist-brass-weights",
    name: "Minimalist Brass Weights",
    category: "Desk",
    description:
      "Solid brass paperweights with a brushed finish. A weighty touch of warmth for any desk.",
    image: "photo-1519710164239-da123dc03ef4",
    gallery: ["photo-1519710164239-da123dc03ef4", "photo-1518770660439-4636190af475", "photo-1507842217343-583bb7270b66", "photo-1532153975070-2e9ab71f1b14"],
    basePrice: 38,
    compareAt: 45,
    discountPct: 16,
    attributes: ["Set of 3", "Solid Brass", "Brushed"],
    tiers: [
      { min: 3, max: 20, price: 38, discount: 15 },
      { min: 21, max: 80, price: 33, discount: 26 },
      { min: 81, max: null, price: 28, discount: 37 },
    ],
    minOrder: 3,
  },
  {
    id: "p5",
    slug: "ultra-smooth-gel-pens",
    name: "Ultra-Smooth Gel Pens",
    category: "Pens",
    description:
      "0.5mm gel pens with quick-dry archival ink. Glides like silk and never smudges.",
    image: "photo-1455390582262-044cdead277a",
    gallery: ["photo-1455390582262-044cdead277a", "photo-1513364776144-60967b0f800f"],
    basePrice: 1.4,
    compareAt: 2,
    discountPct: 30,
    attributes: ["0.5 mm", "Pack of 12", "Black ink"],
    tiers: [
      { min: 24, max: 199, price: 1.4, discount: 30 },
      { min: 200, max: 999, price: 1.1, discount: 45 },
      { min: 1000, max: null, price: 0.9, discount: 55 },
    ],
    minOrder: 24,
  },
  {
    id: "p6",
    slug: "neon-sticky-notes-mega-pack",
    name: "Neon Sticky Notes Mega Pack",
    category: "Paper",
    description:
      "12-pad mega pack of repositionable neon sticky notes. Brilliant for brainstorming walls and workshops.",
    image: "photo-1517842645767-c639042777db",
    gallery: ["photo-1517842645767-c639042777db", "photo-1455390582262-044cdead277a"],
    basePrice: 4.2,
    compareAt: 6,
    discountPct: 30,
    attributes: ["12 Pads", "Neon Mix", "3 x 3 in"],
    tiers: [
      { min: 10, max: 99, price: 4.2, discount: 30 },
      { min: 100, max: 499, price: 3.6, discount: 40 },
      { min: 500, max: null, price: 3, discount: 50 },
    ],
    minOrder: 10,
  },
  {
    id: "p7",
    slug: "linen-bound-journal",
    name: "Linen Bound Journal",
    category: "Notebooks",
    description:
      "Soft linen cover with a sewn signature spine. Cream paper, ribbon marker, and back pocket.",
    image: "photo-1519682337058-a94d519337bc",
    gallery: ["photo-1519682337058-a94d519337bc", "photo-1531346878377-a5be20888e57"],
    basePrice: 14,
    compareAt: 19,
    discountPct: 26,
    attributes: ["A5 size", "Linen", "Sewn Spine"],
    tiers: [
      { min: 10, max: 49, price: 14, discount: 26 },
      { min: 50, max: 199, price: 12, discount: 36 },
      { min: 200, max: null, price: 10, discount: 47 },
    ],
    minOrder: 10,
  },
  {
    id: "p8",
    slug: "walnut-desk-organizer",
    name: "Walnut Desk Organizer",
    category: "Desk",
    description:
      "American walnut organizer with brass dividers. Holds pens, cards and small essentials beautifully.",
    image: "photo-1452860606245-08befc0ff44b",
    gallery: ["photo-1452860606245-08befc0ff44b", "photo-1519710164239-da123dc03ef4"],
    basePrice: 48,
    compareAt: 65,
    discountPct: 26,
    attributes: ["Walnut", "Brass Detail", "Handmade"],
    tiers: [
      { min: 2, max: 10, price: 48, discount: 26 },
      { min: 11, max: 50, price: 42, discount: 35 },
      { min: 51, max: null, price: 36, discount: 44 },
    ],
    minOrder: 2,
  },
];

export function imgUrl(id, sig = 1) {
  return img(id, sig);
}

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}

export function priceFor(p, qty) {
  const tier = p.tiers.find((t) => qty >= t.min && (t.max === null || qty <= t.max));
  return tier ? tier.price : p.basePrice;
}