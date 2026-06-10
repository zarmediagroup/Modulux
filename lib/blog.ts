export type BlogSection =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  targetKeyword: string;
  publishedAt: string;
  readTime: string;
  author: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "modular-vs-traditional-build-cost-south-africa",
    title: "Modular vs Traditional Build Cost in South Africa",
    excerpt:
      "A practical comparison of modular and brick-and-mortar build costs in South Africa — including hidden costs, timelines, and total cost of ownership.",
    targetKeyword: "modular vs traditional build cost South Africa",
    publishedAt: "2026-05-15",
    readTime: "8 min read",
    author: "MODULUX",
    sections: [
      {
        type: "p",
        text: "If you are comparing modular homes and traditional brick-and-mortar builds in South Africa, the headline price is only part of the story. Land, finishes, delays, and finance costs all affect what you actually pay — and how soon you can move in.",
      },
      {
        type: "h2",
        text: "Upfront build cost: what the numbers look like",
      },
      {
        type: "p",
        text: "Traditional builds in the Western Cape typically range from R8,000 to R15,000 per square metre depending on specification, site conditions, and architect fees. MODULUX double-wing folding homes offer fixed pricing from R35,000 (10ft) to R90,000 (40ft) because manufacturing in a controlled factory reduces waste and weather delays.",
      },
      {
        type: "h2",
        text: "Hidden costs most buyers miss",
      },
      {
        type: "ul",
        items: [
          "Site establishment and earthworks (often underestimated on vacant plots)",
          "Architect and engineer fees on traditional builds (typically 8–15% of build cost)",
          "Finance holding costs — every month of delay adds bond interest",
          "Temporary accommodation while waiting for handover",
          "Variation orders on site-built projects (modular contracts are typically fixed-scope)",
        ],
      },
      {
        type: "h2",
        text: "Timeline impact on total cost",
      },
      {
        type: "p",
        text: "A traditional home in South Africa often takes 9–18 months from foundation to completion. Modular homes are manufactured in parallel with site preparation, with delivery and installation possible in as little as 90 days from sign-off. Shorter timelines mean lower finance costs and faster rental income if you are investing in a granny flat.",
      },
      {
        type: "h2",
        text: "Quality and compliance",
      },
      {
        type: "p",
        text: "Both build methods must comply with SANS standards and local municipality approvals. Choosing an NHBRC-registered modular builder gives you the same structural warranty protections as a conventional builder. Always verify registration before signing.",
      },
      {
        type: "h2",
        text: "Which option is right for you?",
      },
      {
        type: "p",
        text: "Traditional builds suit highly bespoke architectural projects on complex sites. Modular builds excel when you want a fixed price, predictable timeline, and proven design — especially for granny flats, first homes, and commercial structures. Visit the MODULUX Display Village in Bellville to compare finishes in person before deciding.",
      },
    ],
  },
  {
    slug: "granny-flat-regulations-western-cape",
    title: "Granny Flat Regulations in the Western Cape",
    excerpt:
      "What you need to know about zoning, size limits, and municipal approval for granny flats and secondary dwellings in the Western Cape.",
    targetKeyword: "granny flat regulations Western Cape",
    publishedAt: "2026-05-20",
    readTime: "7 min read",
    author: "MODULUX",
    sections: [
      {
        type: "p",
        text: "Adding a granny flat — also called a secondary dwelling unit — is one of the most popular ways to generate rental income or house extended family in Cape Town and surrounding areas. But before you order a modular granny flat, you need to understand the local rules.",
      },
      {
        type: "h2",
        text: "What counts as a granny flat?",
      },
      {
        type: "p",
        text: "In most Western Cape municipalities, a secondary dwelling is a self-contained unit on the same erf as the primary house, with its own kitchen, bathroom, and entrance. It cannot be subdivided and sold separately unless the property is formally subdivided — a separate process.",
      },
      {
        type: "h2",
        text: "Zoning and erf size requirements",
      },
      {
        type: "ul",
        items: [
          "Residential zoning (typically Single Residential 1 or Mixed Use) is required",
          "Minimum erf size varies by municipality — commonly 500m² or larger in Cape Town metro",
          "Coverage and building line setbacks apply — check your title deed and zoning scheme",
          "Some areas allow only one secondary dwelling; others require a consent use application",
        ],
      },
      {
        type: "h2",
        text: "Size limits",
      },
      {
        type: "p",
        text: "Many Western Cape municipalities cap secondary dwellings at 60m² or tie the size to a percentage of the primary dwelling. The MODULUX 10ft Double-Wing Folding Home at 19.08m² is well within typical limits — but always confirm with your local planning department before ordering.",
      },
      {
        type: "h2",
        text: "Approval process",
      },
      {
        type: "ul",
        items: [
          "Obtain a zoning certificate from the City of Cape Town or your local municipality",
          "Submit building plans through a SACAP-registered architect or draughtsperson",
          "Apply for building plan approval (typically 4–8 weeks)",
          "Register with NHBRC before construction begins",
          "Book inspections at foundation, wall plate, and completion stages",
        ],
      },
      {
        type: "h2",
        text: "Why modular granny flats speed up compliance",
      },
      {
        type: "p",
        text: "Because MODULUX granny flats are pre-engineered with approved standard plans, the plan approval process is often faster than a fully custom design. Our team can guide you through NHBRC registration and coordinate delivery once your slab is ready.",
      },
    ],
  },
  {
    slug: "nhbrc-modular-homes-explained",
    title: "NHBRC and Modular Homes Explained",
    excerpt:
      "What NHBRC registration means for modular home buyers — warranties, compliance checks, and how to verify your builder is registered.",
    targetKeyword: "NHBRC modular homes",
    publishedAt: "2026-05-25",
    readTime: "6 min read",
    author: "MODULUX",
    sections: [
      {
        type: "p",
        text: "The National Home Builders Registration Council (NHBRC) protects South African home buyers by requiring builders to meet financial and technical standards. If you are buying a modular home, NHBRC registration is non-negotiable — here is why.",
      },
      {
        type: "h2",
        text: "What the NHBRC does",
      },
      {
        type: "p",
        text: "The NHBRC registers home builders, enforces building standards, and provides warranty cover on new homes. When you enrol your home with the NHBRC, you receive structural warranty protection — typically covering major structural defects for up to five years and roof cover defects for up to a year.",
      },
      {
        type: "h2",
        text: "Does NHBRC apply to modular homes?",
      },
      {
        type: "p",
        text: "Yes. Any new dwelling intended for permanent habitation must be built by an NHBRC-registered builder and enrolled with the NHBRC before construction starts. Modular and prefab homes are not exempt — in fact, factory quality control often makes compliance easier to demonstrate.",
      },
      {
        type: "h2",
        text: "How to verify your builder",
      },
      {
        type: "ul",
        items: [
          "Ask for the builder's NHBRC registration number",
          "Verify it on the NHBRC website (nhbrc.org.za)",
          "Confirm the registration category covers the type of home being built",
          "Ensure your contract includes NHBRC enrolment as a condition of payment",
          "Request a copy of the enrolment certificate before final payment",
        ],
      },
      {
        type: "h2",
        text: "MODULUX warranty on top of NHBRC",
      },
      {
        type: "p",
        text: "MODULUX is NHBRC registered and backs every home with a 15-year structural warranty on the modular structure — going beyond the minimum NHBRC cover. Factory-built precision means fewer on-site defects and a smoother inspection process.",
      },
    ],
  },
  {
    slug: "90-day-modular-home-timeline",
    title: "Your 90-Day Modular Home Timeline",
    excerpt:
      "From design sign-off to keys in hand — a step-by-step modular home build and delivery timeline for South African buyers.",
    targetKeyword: "modular home build timeline South Africa",
    publishedAt: "2026-05-30",
    readTime: "7 min read",
    author: "MODULUX",
    sections: [
      {
        type: "p",
        text: "One of the biggest advantages of modular construction is speed. While a traditional build can take over a year, MODULUX delivers fully finished modular homes in as little as 90 days from design sign-off. Here is exactly what happens during those 90 days.",
      },
      {
        type: "h2",
        text: "Week 1–2: Design and contract",
      },
      {
        type: "ul",
        items: [
          "Choose your design from the MODULUX range or customise finishes",
          "Site assessment — access, slope, services connection points",
          "Sign building contract with fixed price and delivery date",
          "Submit building plans for municipal approval (if not already approved)",
          "NHBRC enrolment initiated",
        ],
      },
      {
        type: "h2",
        text: "Week 3–6: Site preparation (runs parallel with factory build)",
      },
      {
        type: "ul",
        items: [
          "Foundation slab or plinth constructed to MODULUX specifications",
          "Water, electrical, and sewer connection points positioned",
          "Access road prepared for delivery truck and crane",
          "Meanwhile: your home is being manufactured in our Bellville factory",
        ],
      },
      {
        type: "h2",
        text: "Week 7–10: Factory manufacturing",
      },
      {
        type: "p",
        text: "In our climate-controlled factory, wall panels, roof trusses, electrical conduits, and plumbing are installed to millimetre precision. Finishes — kitchen, bathroom, flooring, paint — are completed before the module leaves the factory. Quality checks happen at every stage, not just at final inspection.",
      },
      {
        type: "h2",
        text: "Week 11–12: Delivery and installation",
      },
      {
        type: "ul",
        items: [
          "Modules transported to site on specialised low-bed trailers",
          "Crane lift onto prepared foundation (typically one day)",
          "Connect services, final sealant and flashings",
          "NHBRC completion inspection booked",
          "Handover and keys — move in within days",
        ],
      },
      {
        type: "h2",
        text: "What can delay the timeline?",
      },
      {
        type: "p",
        text: "Municipal plan approval delays, unprepared sites, and extreme weather on delivery day are the most common causes. MODULUX mitigates these by using pre-approved standard plans, providing a site preparation checklist, and scheduling delivery in advance with weather contingencies.",
      },
      {
        type: "h2",
        text: "See the process in person",
      },
      {
        type: "p",
        text: "Visit the MODULUX Display Village at 12 Modular Way, Bellville to walk through finished homes and speak to our team about your site and timeline. Book a viewing through our contact page.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs() {
  return blogPosts.map((p) => p.slug);
}
