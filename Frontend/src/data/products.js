const img = (q, sig) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=900&q=70&sig=${sig}`;

export const products = [
  {
    id: "p1",
    slug: "executive-matte-notebook",
    name: "Executive Matte Notebook",
    category: "Notebooks",
    description:
      "Hardcover A5 notebook with 200 gsm matte paper, lay-flat binding and an elastic closure. Crafted for everyday serious note-taking.",
    image: "photo-1531346878377-a5be20888e57",
    gallery: ["photo-1531346878377-a5be20888e57", "photo-1517842645767-c639042777db", "photo-1455390582262-044cdead277a", "photo-1519682337058-a94d519337bc"],
    basePrice: 120,
    compareAt: 120,
    discountPct: 0,
    attributes: ["A5 size", "Hardcover", "Ruled"],
    tiers: [
      { min: 1, max: 50, price: 120, discount: 0 },
      { min: 51, max: 100, price: 108, discount: 10 },
      { min: 101, max: null, price: 96, discount: 20 },
    ],
    minOrder: 1,
  },
  {
    id: "p2",
    slug: "student-graphite-set",
    name: "Student Graphite Pencil Set",
    category: "Drawing",
    description:
      "Standard grade graphite pencils in basic hardnesses (HB, 2B, 4B, 6B). Perfect for school sketching and shading.",
    image: "photo-1513364776144-60967b0f800f",
    gallery: ["photo-1513364776144-60967b0f800f", "photo-1455390582262-044cdead277a", "photo-1452860606245-08befc0ff44b", "photo-1502691876148-a84978e59af8"],
    basePrice: 60,
    compareAt: 80,
    discountPct: 25,
    attributes: ["12 pcs Pencils", "Cardboard Box", "Mixed Grade"],
    tiers: [
      { min: 5, max: 20, price: 60, discount: 25 },
      { min: 21, max: 100, price: 52, discount: 35 },
      { min: 101, max: null, price: 44, discount: 45 },
    ],
    minOrder: 5,
  },
  {
    id: "p3",
    slug: "basic-spiral-sketchbook",
    name: "Basic Spiral Sketchbook",
    category: "Sketchbooks",
    description:
      "Everyday 140gsm sketchbook with natural white paper. Ideal for quick dry media sketches and classroom use.",
    image: "photo-1455390582262-044cdead277a",
    gallery: ["photo-1455390582262-044cdead277a", "photo-1519682337058-a94d519337bc", "photo-1531346878377-a5be20888e57", "photo-1513364776144-60967b0f800f"],
    basePrice: 120,
    compareAt: 150,
    discountPct: 20,
    attributes: ["A4 size", "140 gsm", "Spiral Bound"],
    tiers: [
      { min: 5, max: 25, price: 120, discount: 20 },
      { min: 26, max: 100, price: 105, discount: 30 },
      { min: 101, max: null, price: 90, discount: 40 },
    ],
    minOrder: 5,
  },
  {
    id: "p4",
    slug: "standard-glass-paperweight",
    name: "Standard Glass Paperweight",
    category: "Desk",
    description:
      "Simple, transparent semi-sphere glass paperweight. A low-cost, functional addition to any busy office desk.",
    image: "photo-1519710164239-da123dc03ef4",
    gallery: ["photo-1519710164239-da123dc03ef4", "photo-1518770660439-4636190af475", "photo-1507842217343-583bb7270b66", "photo-1532153975070-2e9ab71f1b14"],
    basePrice: 80,
    compareAt: 100,
    discountPct: 20,
    attributes: ["Single Piece", "Clear Glass", "Dome Shape"],
    tiers: [
      { min: 3, max: 20, price: 80, discount: 20 },
      { min: 21, max: 80, price: 70, discount: 30 },
      { min: 81, max: null, price: 60, discount: 40 },
    ],
    minOrder: 3,
  },
  {
    id: "p5",
    slug: "smooth-gel-pens-budget",
    name: "Standard Blue Gel Pens",
    category: "Pens",
    description:
      "Reliable 0.5mm blue gel pens for everyday writing. Fast-drying and comfortable to hold.",
    image: "photo-1455390582262-044cdead277a",
    gallery: ["photo-1455390582262-044cdead277a", "photo-1513364776144-60967b0f800f"],
    basePrice: 96,
    compareAt: 120,
    discountPct: 20,
    attributes: ["0.5 mm", "Pack of 12", "Blue ink"],
    tiers: [
      { min: 10, max: 99, price: 96, discount: 20 },
      { min: 100, max: 499, price: 84, discount: 30 },
      { min: 500, max: null, price: 72, discount: 40 },
    ],
    minOrder: 10,
  },
  {
    id: "p6",
    slug: "neon-sticky-notes-pack",
    name: "Basic Neon Sticky Notes",
    category: "Paper",
    description:
      "Standard 3x3 inch repositionable neon sticky notes. Highly affordable for constant office reminders.",
    image: "photo-1517842645767-c639042777db",
    gallery: ["photo-1517842645767-c639042777db", "photo-1455390582262-044cdead277a"],
    basePrice: 160,
    compareAt: 200,
    discountPct: 20,
    attributes: ["12 Pads", "Neon Mix", "3 x 3 in"],
    tiers: [
      { min: 5, max: 49, price: 160, discount: 20 },
      { min: 50, max: 199, price: 140, discount: 30 },
      { min: 200, max: null, price: 120, discount: 40 },
    ],
    minOrder: 5,
  },
  {
    id: "p7",
    slug: "soft-bound-journal",
    name: "Soft Bound PU Journal",
    category: "Notebooks",
    description:
      "Flexible faux-leather cover with simple sewn binding. Perfect for corporate bulk gifting on a budget.",
    image: "photo-1519682337058-a94d519337bc",
    gallery: ["photo-1519682337058-a94d519337bc", "photo-1531346878377-a5be20888e57"],
    basePrice: 90,
    compareAt: 90,
    discountPct: 0,
    attributes: ["A5 size", "PU Leather", "Soft Bound"],
    tiers: [
      { min: 1, max: 50, price: 90, discount: 0 },
      { min: 51, max: 100, price: 81, discount: 10 },
      { min: 101, max: null, price: 72, discount: 20 },
    ],
    minOrder: 1,
  },
  {
    id: "p8",
    slug: "mdf-desk-organizer",
    name: "MDF Wooden Desk Organizer",
    category: "Desk",
    description:
      "Affordable MDF wood organizer with three compartments. Keeps pens and basic stationery tidy without breaking the bank.",
    image: "photo-1452860606245-08befc0ff44b",
    gallery: ["photo-1452860606245-08befc0ff44b", "photo-1519710164239-da123dc03ef4"],
    basePrice: 200,
    compareAt: 250,
    discountPct: 20,
    attributes: ["MDF Wood", "3 Sections", "Basic"],
    tiers: [
      { min: 2, max: 10, price: 200, discount: 20 },
      { min: 11, max: 50, price: 175, discount: 30 },
      { min: 51, max: null, price: 150, discount: 40 },
    ],
    minOrder: 2,
  },
  // --- 5 NEW BUDGET STATIONERY ITEMS ---
  {
    id: "p9",
    slug: "college-spiral-notebook",
    name: "College Spiral Notebook",
    category: "Notebooks",
    description:
      "Everyday 1-subject wire-bound notebook with 160 single-line ruled pages. The absolute standard for students.",
    image: "photo-1531346878377-a5be20888e57",
    gallery: ["photo-1531346878377-a5be20888e57", "photo-1519682337058-a94d519337bc"],
    basePrice: 50,
    compareAt: 50,
    discountPct: 0,
    attributes: ["A4ish Size", "Spiral Bound", "Single Line"],
    tiers: [
      { min: 1, max: 50, price: 50, discount: 0 },
      { min: 51, max: 100, price: 45, discount: 10 },
      { min: 101, max: null, price: 40, discount: 20 },
    ],
    minOrder: 1,
  },
  {
    id: "p10",
    slug: "a4-printer-paper-ream",
    name: "Standard A4 Printer Paper",
    category: "Paper",
    description:
      "70 GSM standard white A4 copier paper. 500 sheets per ream. Essential for office printing and copying.",
    image: "photo-1517842645767-c639042777db",
    gallery: ["photo-1517842645767-c639042777db", "photo-1531346878377-a5be20888e57"],
    basePrice: 340,
    compareAt: 400,
    discountPct: 15,
    attributes: ["500 Sheets", "70 GSM", "A4 Size"],
    tiers: [
      { min: 5, max: 20, price: 340, discount: 15 },
      { min: 21, max: 100, price: 300, discount: 25 },
      { min: 101, max: null, price: 260, discount: 35 },
    ],
    minOrder: 5,
  },
  {
    id: "p11",
    slug: "use-and-throw-ballpens",
    name: "Bulk Ballpoint Pens (Pack of 50)",
    category: "Pens",
    description:
      "Cost-effective 'use-and-throw' style blue ballpoint pens. Ideal for reception desks, banks, and large offices.",
    image: "photo-1455390582262-044cdead277a",
    gallery: ["photo-1455390582262-044cdead277a"],
    basePrice: 200,
    compareAt: 250,
    discountPct: 20,
    attributes: ["Blue Ink", "Pack of 50", "Ballpoint"],
    tiers: [
      { min: 5, max: 20, price: 200, discount: 20 },
      { min: 21, max: 100, price: 175, discount: 30 },
      { min: 101, max: null, price: 150, discount: 40 },
    ],
    minOrder: 5,
  },
  {
    id: "p12",
    slug: "plastic-mesh-pen-stand",
    name: "Plastic Mesh Pen Stand",
    category: "Desk",
    description:
      "Simple, durable black plastic mesh cup to hold pens and pencils. Lightweight and completely rust-free.",
    image: "photo-1452860606245-08befc0ff44b",
    gallery: ["photo-1452860606245-08befc0ff44b", "photo-1519710164239-da123dc03ef4"],
    basePrice: 60,
    compareAt: 80,
    discountPct: 25,
    attributes: ["Black Plastic", "Mesh Design", "Lightweight"],
    tiers: [
      { min: 5, max: 20, price: 60, discount: 25 },
      { min: 21, max: 100, price: 52, discount: 35 },
      { min: 101, max: null, price: 44, discount: 45 },
    ],
    minOrder: 5,
  },
  {
    id: "p13",
    slug: "office-stapler-punch-combo",
    name: "Standard Stapler & Punch Combo",
    category: "Office",
    description:
      "Basic set including a No.10 size stapler and a single hole punch machine. Built for everyday paperwork binding.",
    image: "photo-1513364776144-60967b0f800f",
    gallery: ["photo-1513364776144-60967b0f800f"],
    basePrice: 160,
    compareAt: 200,
    discountPct: 20,
    attributes: ["No.10 Stapler", "Single Hole Punch", "Steel/Plastic"],
    tiers: [
      { min: 5, max: 20, price: 160, discount: 20 },
      { min: 21, max: 100, price: 140, discount: 30 },
      { min: 101, max: null, price: 120, discount: 40 },
    ],
    minOrder: 5,
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