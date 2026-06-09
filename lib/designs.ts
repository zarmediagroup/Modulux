import { getDesignMedia } from "@/lib/images";

function media(slug: string) {
  const { images, floorPlan } = getDesignMedia(slug);
  return { images, floorPlanImage: floorPlan };
}

export type HomeDesign = {
  slug: string;
  name: string;
  tagline: string;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  area: number; // sqm
  price: string;
  priceValue: number;
  category: "Standard" | "Premium" | "Granny Flat";
  description: string;
  features: string[];
  images: { src: string; alt: string }[];
  floorPlanImage: string;
  isFeatured: boolean;
  specifications: { label: string; value: string }[];
};

export const designs: HomeDesign[] = [
  {
    slug: "the-stellenbosch",
    name: "The Stellenbosch",
    tagline: "Refined living in a perfectly proportioned home",
    bedrooms: 3,
    bathrooms: 2,
    garages: 1,
    area: 145,
    price: "From R1,850,000",
    priceValue: 1850000,
    category: "Premium",
    description:
      "The Stellenbosch is the embodiment of refined South African living. Inspired by the wine-country aesthetic of its namesake, this three-bedroom home blends contemporary architecture with warm, natural materials. The open-plan kitchen and living area flows seamlessly onto a covered patio, perfect for entertaining. High ceilings, large aluminium windows, and thoughtful layout make every room feel expansive and connected to the outdoors.\n\nBuilt to NHBRC standards in our Cape Town factory, every Stellenbosch is precision-engineered using structural steel and insulated panels, ensuring year-round comfort whether you're in Johannesburg winters or the Karoo heat.\n\nThe master suite features a walk-in closet and en-suite bathroom, while the two additional bedrooms share a generously sized family bathroom. A single garage and additional parking bay complete this well-rounded family home.",
    features: [
      "Open-plan kitchen, dining & living area",
      "Covered entertainment patio",
      "Master bedroom with en-suite & walk-in closet",
      "High-spec kitchen with stone countertops",
      "Aluminium double-glazed windows throughout",
      "Underfloor heating ready",
      "NHBRC registered & certified",
      "15-year structural warranty",
    ],
    ...media("the-stellenbosch"),
    isFeatured: true,
    specifications: [
      { label: "Total Area", value: "145 m²" },
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "2" },
      { label: "Garages", value: "1" },
      { label: "Roof Type", value: "IBR Steel Sheeting" },
      { label: "Cladding", value: "Fibre Cement Board" },
      { label: "Windows", value: "Aluminium Double Glazed" },
      { label: "Flooring", value: "Porcelain Tile / Engineered Timber" },
      { label: "Kitchen", value: "Stone Countertops, Soft-Close Cabinetry" },
      { label: "Wall Insulation", value: "Mineral Wool, 100mm" },
      { label: "Structure", value: "Cold-Formed Steel Frame" },
      { label: "Warranty", value: "15-Year Structural" },
    ],
  },
  {
    slug: "the-karoo",
    name: "The Karoo",
    tagline: "Simple, honest living for the modern era",
    bedrooms: 2,
    bathrooms: 1,
    garages: 0,
    area: 89,
    price: "From R950,000",
    priceValue: 950000,
    category: "Standard",
    description:
      "The Karoo is a celebration of simplicity. Designed for those who believe great design doesn't need to be complicated, this two-bedroom home strips back the unnecessary and focuses on what matters: quality materials, smart layout, and a home that genuinely feels good to live in.\n\nTaking cues from Karoo farmhouse vernacular, the design features clean lines, a pitched roof, and a natural material palette. The compact footprint makes it perfect for smaller stands without compromising on liveability.\n\nAn efficient floor plan places the kitchen and living areas at the heart of the home, with two well-sized bedrooms and a full bathroom completing the layout. An optional covered stoep adds outdoor living space at minimal additional cost.",
    features: [
      "Smart compact floor plan",
      "Open-plan kitchen & living",
      "Full bathroom with quality fittings",
      "Covered stoep option available",
      "Energy-efficient insulated walls & roof",
      "NHBRC registered & certified",
      "15-year structural warranty",
      "Delivered fully finished",
    ],
    ...media("the-karoo"),
    isFeatured: true,
    specifications: [
      { label: "Total Area", value: "89 m²" },
      { label: "Bedrooms", value: "2" },
      { label: "Bathrooms", value: "1" },
      { label: "Garages", value: "None" },
      { label: "Roof Type", value: "Corrugated Steel Sheeting" },
      { label: "Cladding", value: "Fibre Cement Board" },
      { label: "Windows", value: "Aluminium Single Glazed" },
      { label: "Flooring", value: "Ceramic Tile" },
      { label: "Kitchen", value: "Laminate Countertops, Standard Cabinetry" },
      { label: "Wall Insulation", value: "Mineral Wool, 75mm" },
      { label: "Structure", value: "Cold-Formed Steel Frame" },
      { label: "Warranty", value: "15-Year Structural" },
    ],
  },
  {
    slug: "the-blouberg",
    name: "The Blouberg",
    tagline: "Four-bedroom luxury with ocean-inspired design",
    bedrooms: 4,
    bathrooms: 3,
    garages: 2,
    area: 210,
    price: "From R2,400,000",
    priceValue: 2400000,
    category: "Premium",
    description:
      "Named after Cape Town's iconic beachside suburb, The Blouberg is MODULUX's flagship family home. Designed for families who refuse to compromise, this four-bedroom, three-bathroom residence commands attention with its bold architectural lines and premium material specification.\n\nThe double-volume entrance hall sets the tone. An expansive open-plan ground floor encompasses a chef's kitchen with scullery, formal lounge, and a dining area that opens onto a large covered entertainment deck. The double garage leads directly into a convenient utility room.\n\nUpstairs, the master suite features a generous walk-in wardrobe, a luxurious en-suite with freestanding bath, and a private balcony. Three additional bedrooms, one with its own en-suite, share a family bathroom. This is a home built for real life, and real entertaining.",
    features: [
      "Double-volume entrance hall",
      "Chef's kitchen with scullery",
      "Large covered entertainment deck",
      "Master suite with freestanding bath & balcony",
      "Double garage with direct home access",
      "Three full bathrooms",
      "Aluminium double-glazed windows",
      "Underfloor heating throughout",
      "NHBRC registered & certified",
      "15-year structural warranty",
    ],
    ...media("the-blouberg"),
    isFeatured: true,
    specifications: [
      { label: "Total Area", value: "210 m²" },
      { label: "Bedrooms", value: "4" },
      { label: "Bathrooms", value: "3" },
      { label: "Garages", value: "2" },
      { label: "Roof Type", value: "Flat Roof with IBR Fascia" },
      { label: "Cladding", value: "Timber Veneer & Plaster" },
      { label: "Windows", value: "Aluminium Double Glazed" },
      { label: "Flooring", value: "Large Format Porcelain / Oak Timber" },
      { label: "Kitchen", value: "Waterfall Stone Island, Handle-Free Cabinetry" },
      { label: "Wall Insulation", value: "Mineral Wool, 100mm" },
      { label: "Structure", value: "Cold-Formed Steel Frame" },
      { label: "Warranty", value: "15-Year Structural" },
    ],
  },
  {
    slug: "the-constantia",
    name: "The Constantia",
    tagline: "Elegant, self-contained living on any stand",
    bedrooms: 1,
    bathrooms: 1,
    garages: 0,
    area: 52,
    price: "From R620,000",
    priceValue: 620000,
    category: "Granny Flat",
    description:
      "The Constantia is the gold standard of South African granny flats. Designed to maximise every square metre, this fully self-contained one-bedroom unit is perfect for elderly parents, adult children, long-term rental income, or a private home office suite.\n\nDespite its compact footprint, The Constantia doesn't feel small. Clever spatial planning creates a light-filled, airy interior with a surprisingly generous open-plan living and kitchen area, a full bathroom, and a comfortable bedroom with built-in wardrobe.\n\nDelivered fully finished — just connect to services and move in.",
    features: [
      "Fully self-contained unit",
      "Open-plan kitchen & living",
      "Full bathroom with shower",
      "Built-in bedroom wardrobe",
      "Separate private entrance",
      "Energy-efficient design",
      "NHBRC registered & certified",
      "15-year structural warranty",
    ],
    ...media("the-constantia"),
    isFeatured: true,
    specifications: [
      { label: "Total Area", value: "52 m²" },
      { label: "Bedrooms", value: "1" },
      { label: "Bathrooms", value: "1" },
      { label: "Garages", value: "None" },
      { label: "Roof Type", value: "Flat Roof with Parapet" },
      { label: "Cladding", value: "Fibre Cement Board" },
      { label: "Windows", value: "Aluminium Single Glazed" },
      { label: "Flooring", value: "Vinyl Plank" },
      { label: "Kitchen", value: "Compact Kitchen, Laminate Tops" },
      { label: "Wall Insulation", value: "Mineral Wool, 75mm" },
      { label: "Structure", value: "Cold-Formed Steel Frame" },
      { label: "Warranty", value: "15-Year Structural" },
    ],
  },
  {
    slug: "the-franschhoek",
    name: "The Franschhoek",
    tagline: "French-country charm meets contemporary design",
    bedrooms: 3,
    bathrooms: 2,
    garages: 2,
    area: 168,
    price: "From R2,100,000",
    priceValue: 2100000,
    category: "Premium",
    description:
      "The Franschhoek draws inspiration from the architectural heritage of the Cape Winelands, blending French-country character with clean, modern interiors. A pitched roof, shuttered windows, and natural stone accents give the exterior a timeless elegance, while inside, the design is thoroughly contemporary.\n\nThe heart of the home is an impressive open-plan kitchen and living space with a vaulted ceiling and exposed timber beams. A study or fourth bedroom option makes this an incredibly versatile design, adaptable to growing families or home-working professionals.\n\nBoth bathrooms are finished to a high standard, with the master en-suite featuring a walk-in shower, double vanity, and heated towel rail. The double garage leads into a practical mudroom/utility room — a thoughtful touch that makes everyday living easier.",
    features: [
      "Vaulted ceiling with exposed timber beams",
      "French-country architectural detail",
      "Optional 4th bedroom / study",
      "Double garage with mudroom entry",
      "Master en-suite with double vanity",
      "Large covered stoep with pergola option",
      "NHBRC registered & certified",
      "15-year structural warranty",
    ],
    ...media("the-franschhoek"),
    isFeatured: false,
    specifications: [
      { label: "Total Area", value: "168 m²" },
      { label: "Bedrooms", value: "3 (optional 4th)" },
      { label: "Bathrooms", value: "2" },
      { label: "Garages", value: "2" },
      { label: "Roof Type", value: "Pitched IBR with Timber Trusses" },
      { label: "Cladding", value: "Plaster with Stone Accents" },
      { label: "Windows", value: "Aluminium Double Glazed with Shutters" },
      { label: "Flooring", value: "Oak Timber / Porcelain Tile" },
      { label: "Kitchen", value: "Stone Countertops, Shaker Cabinetry" },
      { label: "Wall Insulation", value: "Mineral Wool, 100mm" },
      { label: "Structure", value: "Cold-Formed Steel Frame" },
      { label: "Warranty", value: "15-Year Structural" },
    ],
  },
  {
    slug: "the-swartland",
    name: "The Swartland",
    tagline: "Grounded, sturdy, and full of character",
    bedrooms: 2,
    bathrooms: 2,
    garages: 1,
    area: 112,
    price: "From R1,150,000",
    priceValue: 1150000,
    category: "Standard",
    description:
      "The Swartland is named after the vast wheat-farming region north of Cape Town — a landscape defined by wide horizons and unpretentious beauty. This two-bedroom, two-bathroom home brings that same honest, grounded character to your stand.\n\nA smart layout places both bedrooms on opposite sides of the home for maximum privacy, each with its own bathroom. The central open-plan living, dining, and kitchen area is bright and practical, with sliding doors opening onto a covered patio.\n\nThe single garage and additional carport provide ample parking, while the energy-efficient construction keeps utility costs down.",
    features: [
      "Dual bathroom layout for maximum privacy",
      "Open-plan living & kitchen",
      "Sliding doors to covered patio",
      "Single garage + carport option",
      "Energy-efficient construction",
      "Low maintenance exterior",
      "NHBRC registered & certified",
      "15-year structural warranty",
    ],
    ...media("the-swartland"),
    isFeatured: true,
    specifications: [
      { label: "Total Area", value: "112 m²" },
      { label: "Bedrooms", value: "2" },
      { label: "Bathrooms", value: "2" },
      { label: "Garages", value: "1" },
      { label: "Roof Type", value: "Corrugated Steel Sheeting" },
      { label: "Cladding", value: "Fibre Cement Board" },
      { label: "Windows", value: "Aluminium Single Glazed" },
      { label: "Flooring", value: "Ceramic Tile" },
      { label: "Kitchen", value: "Laminate Countertops, Standard Cabinetry" },
      { label: "Wall Insulation", value: "Mineral Wool, 75mm" },
      { label: "Structure", value: "Cold-Formed Steel Frame" },
      { label: "Warranty", value: "15-Year Structural" },
    ],
  },
  {
    slug: "the-paarl",
    name: "The Paarl",
    tagline: "Compact luxury for independent living",
    bedrooms: 1,
    bathrooms: 1,
    garages: 0,
    area: 65,
    price: "From R750,000",
    priceValue: 750000,
    category: "Granny Flat",
    description:
      "The Paarl takes its name from the Afrikaans word for pearl — and like its namesake, this compact one-bedroom unit is more precious than its size suggests. Larger than our Constantia model, The Paarl offers a more spacious bedroom, an additional study nook, and a slightly larger bathroom with a full-size bath option.\n\nIdeal for rental income generation, multigenerational living, or a stylish downsizing option, The Paarl delivers a surprisingly luxurious experience in a small package. Delivered fully finished — just connect to services and move in.",
    features: [
      "Larger footprint than standard granny flat",
      "Optional full-size bath",
      "Study nook / home office space",
      "Separate private entrance",
      "Open-plan kitchen & living",
      "Fully self-contained",
      "NHBRC registered & certified",
      "15-year structural warranty",
    ],
    ...media("the-paarl"),
    isFeatured: false,
    specifications: [
      { label: "Total Area", value: "65 m²" },
      { label: "Bedrooms", value: "1" },
      { label: "Bathrooms", value: "1" },
      { label: "Garages", value: "None" },
      { label: "Roof Type", value: "Flat Roof with Parapet" },
      { label: "Cladding", value: "Fibre Cement Board" },
      { label: "Windows", value: "Aluminium Single Glazed" },
      { label: "Flooring", value: "Vinyl Plank" },
      { label: "Kitchen", value: "Compact Kitchen, Laminate Tops" },
      { label: "Wall Insulation", value: "Mineral Wool, 75mm" },
      { label: "Structure", value: "Cold-Formed Steel Frame" },
      { label: "Warranty", value: "15-Year Structural" },
    ],
  },
];

export function getDesignBySlug(slug: string): HomeDesign | undefined {
  return designs.find((d) => d.slug === slug);
}

export function getFeaturedDesigns(): HomeDesign[] {
  return designs.filter((d) => d.isFeatured);
}

export function getRelatedDesigns(current: HomeDesign, count = 3): HomeDesign[] {
  return designs
    .filter(
      (d) =>
        d.slug !== current.slug &&
        (d.category === current.category || d.bedrooms === current.bedrooms)
    )
    .slice(0, count);
}
