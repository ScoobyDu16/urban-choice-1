import type { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'cat-001',
    name: 'Safety Items',
    slug: 'safety-items',
    description:
      'Personal protective equipment and safety gear for construction sites and industrial environments. Helmets, gloves, harnesses, and more — all meeting UAE safety standards.',
    shortDescription: 'PPE and safety gear for construction and industrial use.',
    icon: 'ShieldCheck',
    image: {
      url: '/categories/safety-items-1.png',
      alt: 'Safety helmets and personal protective equipment',
      width: 800,
      height: 600,
    },
    subcategories: [
      {
        id: 'sub-001',
        name: 'Head & Eye Protection',
        slug: 'head-eye-protection',
        description: 'Helmets, goggles, face shields',
      },
      {
        id: 'sub-002',
        name: 'Body Protection',
        slug: 'body-protection',
        description: 'Vests, harnesses, rain wear',
      },
      {
        id: 'sub-003',
        name: 'Hand & Foot Protection',
        slug: 'hand-foot-protection',
        description: 'Gloves, safety shoes',
      },
      {
        id: 'sub-004',
        name: 'Respiratory & Hearing',
        slug: 'respiratory-hearing',
        description: 'Masks, respirators, ear protection',
      },
    ],
    seo: {
      title: 'Safety Items – PPE & Safety Equipment Dubai | Urban Choice',
      description:
        'Buy safety helmets, gloves, harnesses, goggles and PPE in Dubai. Quality safety equipment for construction and industrial projects across UAE.',
      keywords: ['safety equipment Dubai', 'PPE UAE', 'safety helmet Dubai', 'safety gloves UAE'],
    },
    featured: false,
  },
  {
    id: 'cat-002',
    name: 'Sanitary Items',
    slug: 'sanitary-items',
    description:
      'Complete range of bathroom and kitchen sanitary fittings including wash basins, WCs, mixers, shower sets, and accessories for residential and commercial projects.',
    shortDescription: 'Wash basins, WCs, mixers, showers and bathroom accessories.',
    icon: 'Bath',
    image: {
      url: '/categories/sanitary-items-1.png',
      alt: 'Modern bathroom with sanitary fittings and fixtures',
      width: 800,
      height: 600,
    },
    subcategories: [
      {
        id: 'sub-005',
        name: 'Basins & WCs',
        slug: 'basins-wcs',
        description: 'Wash basins, water closets, urinals',
      },
      {
        id: 'sub-006',
        name: 'Mixers & Showers',
        slug: 'mixers-showers',
        description: 'Bathroom mixers, shower sets',
      },
      {
        id: 'sub-007',
        name: 'Valves & Fittings',
        slug: 'valves-fittings',
        description: 'Angle valves, floor traps, hoses',
      },
      {
        id: 'sub-008',
        name: 'Accessories',
        slug: 'bathroom-accessories',
        description: 'Bathroom accessories, kitchen sinks',
      },
    ],
    seo: {
      title: 'Sanitary Items – Basins, WCs & Bathroom Fittings Dubai | Urban Choice',
      description:
        'Shop wash basins, water closets, mixers, shower sets and bathroom accessories in Dubai. Quality sanitary items for all projects in UAE.',
      keywords: [
        'sanitary items Dubai',
        'wash basin UAE',
        'bathroom fittings Dubai',
        'WC supplier UAE',
      ],
    },
    featured: false,
  },
  {
    id: 'cat-003',
    name: 'Hardware Items',
    slug: 'hardware-items',
    description:
      'Wide selection of hardware essentials including door hinges, locks, handles, hand tools, cutting tools, and fastening accessories for construction and fit-out projects.',
    shortDescription: 'Hinges, locks, handles, hand tools and cutting accessories.',
    icon: 'Wrench',
    image: {
      url: '/categories/hardware-items-1.png',
      alt: 'Hardware tools and building accessories',
      width: 800,
      height: 600,
    },
    subcategories: [
      {
        id: 'sub-009',
        name: 'Door Hardware',
        slug: 'door-hardware',
        description: 'Hinges, locks, handles',
      },
      {
        id: 'sub-010',
        name: 'Hand Tools',
        slug: 'hand-tools',
        description: 'Measuring, cutting, clamping tools',
      },
      {
        id: 'sub-011',
        name: 'Fixing & Fastening',
        slug: 'fixing-fastening',
        description: 'Nails, screws, clamps',
      },
      {
        id: 'sub-012',
        name: 'Storage & Organising',
        slug: 'storage-organising',
        description: 'Drawer channels, organisers',
      },
    ],
    seo: {
      title: 'Hardware Items – Tools, Locks & Fittings Dubai | Urban Choice',
      description:
        'Buy door hinges, locks, handles, hand tools and hardware accessories in Dubai. Reliable hardware supplies for contractors and builders in UAE.',
      keywords: ['hardware Dubai', 'door hinges UAE', 'hand tools Dubai', 'hardware supplier UAE'],
    },
    featured: true,
  },
  {
    id: 'cat-004',
    name: 'Electrical Items',
    slug: 'electrical-items',
    description:
      'Comprehensive electrical supplies for construction and renovation projects — wires, LED lights, switches, circuit breakers, distribution boards, conduits, and more.',
    shortDescription: 'Wires, LED lights, switches, breakers and conduits.',
    icon: 'Zap',
    image: {
      url: '/categories/electrical-items-1.png',
      alt: 'Electrical wires, switches and circuit breakers',
      width: 800,
      height: 600,
    },
    subcategories: [
      {
        id: 'sub-013',
        name: 'Wires & Cables',
        slug: 'wires-cables',
        description: 'Electrical wires, cable accessories',
      },
      {
        id: 'sub-014',
        name: 'Lighting',
        slug: 'lighting',
        description: 'LED lights, ceiling fans',
      },
      {
        id: 'sub-015',
        name: 'Switches & Sockets',
        slug: 'switches-sockets',
        description: 'Switches, sockets, industrial plugs',
      },
      {
        id: 'sub-016',
        name: 'Protection & Control',
        slug: 'protection-control',
        description: 'Circuit breakers, distribution boards',
      },
    ],
    seo: {
      title: 'Electrical Items – Wires, LED Lights & Switches Dubai | Urban Choice',
      description:
        'Buy electrical wires, LED lights, switches, circuit breakers and conduits in Dubai. Quality electrical supplies for construction projects in UAE.',
      keywords: [
        'electrical supplies Dubai',
        'LED lights UAE',
        'circuit breakers Dubai',
        'electrical wires UAE',
      ],
    },
    featured: true,
  },
  {
    id: 'cat-005',
    name: 'Plumbing Items',
    slug: 'plumbing-items',
    description:
      'Full range of plumbing materials including PPR and PVC pipes, fittings, valves, water pumps, drainage pipes, and water tanks for all types of construction projects.',
    shortDescription: 'PPR & PVC pipes, valves, pumps and drainage solutions.',
    icon: 'Pipette',
    image: {
      url: '/categories/plumbing-items-1.png',
      alt: 'Plumbing pipes fittings and valves',
      width: 800,
      height: 600,
    },
    subcategories: [
      { id: 'sub-017', name: 'Pipes', slug: 'pipes', description: 'PPR, PVC, drainage pipes' },
      {
        id: 'sub-018',
        name: 'Fittings & Valves',
        slug: 'fittings-valves',
        description: 'Pipe fittings, ball valves, gate valves',
      },
      {
        id: 'sub-019',
        name: 'Pumps & Tanks',
        slug: 'pumps-tanks',
        description: 'Water pumps, water tanks',
      },
      {
        id: 'sub-020',
        name: 'Hoses & Clamps',
        slug: 'hoses-clamps',
        description: 'Flexible hoses, pipe clamps',
      },
    ],
    seo: {
      title: 'Plumbing Items – Pipes, Valves & Fittings Dubai | Urban Choice',
      description:
        'Buy PPR pipes, PVC pipes, ball valves, water pumps and plumbing fittings in Dubai. Complete plumbing supplies for UAE construction projects.',
      keywords: ['plumbing supplies Dubai', 'PPR pipes UAE', 'PVC pipes Dubai', 'ball valves UAE'],
    },
    featured: false,
  },
  {
    id: 'cat-006',
    name: 'Building Materials',
    slug: 'building-materials',
    description:
      'Essential construction materials including cement, bricks, concrete blocks, steel rebar, gypsum board, insulation, waterproofing, and tile adhesive for all project types.',
    shortDescription: 'Cement, bricks, blocks, rebar, gypsum and insulation materials.',
    icon: 'Building2',
    image: {
      url: '/categories/building-materials-1.png',
      alt: 'Building materials including cement bricks and construction supplies',
      width: 800,
      height: 600,
    },
    subcategories: [
      {
        id: 'sub-021',
        name: 'Concrete & Masonry',
        slug: 'concrete-masonry',
        description: 'Cement, sand, aggregate, bricks, blocks',
      },
      {
        id: 'sub-022',
        name: 'Steel & Structural',
        slug: 'steel-structural',
        description: 'Steel rebar, structural steel',
      },
      {
        id: 'sub-023',
        name: 'Boards & Insulation',
        slug: 'boards-insulation',
        description: 'Gypsum board, insulation materials',
      },
      {
        id: 'sub-024',
        name: 'Waterproofing & Adhesives',
        slug: 'waterproofing-adhesives',
        description: 'Waterproofing, tile adhesive',
      },
    ],
    seo: {
      title: 'Building Materials – Cement, Bricks & Construction Supplies Dubai | Urban Choice',
      description:
        'Buy cement, bricks, concrete blocks, steel rebar, gypsum board and waterproofing materials in Dubai. Quality building materials for UAE construction.',
      keywords: [
        'building materials Dubai',
        'cement UAE',
        'concrete blocks Dubai',
        'steel rebar UAE',
      ],
    },
    featured: false,
  },
  {
    id: 'cat-007',
    name: 'Fasteners',
    slug: 'fasteners',
    description:
      'Comprehensive range of fasteners including hex bolts, nuts, washers, screws, anchor bolts, threaded rods, rivets, and more for structural and fit-out applications.',
    shortDescription: 'Bolts, nuts, screws, anchors, rods and rivets.',
    icon: 'Settings',
    image: {
      url: '/categories/fasteners-1.png',
      alt: 'Assorted fasteners including bolts nuts and screws',
      width: 800,
      height: 600,
    },
    subcategories: [
      {
        id: 'sub-025',
        name: 'Bolts & Nuts',
        slug: 'bolts-nuts',
        description: 'Hex bolts, nuts, washers, U-bolts',
      },
      {
        id: 'sub-026',
        name: 'Screws',
        slug: 'screws',
        description: 'Self-tapping, drywall screws',
      },
      {
        id: 'sub-027',
        name: 'Anchors & Rods',
        slug: 'anchors-rods',
        description: 'Anchor bolts, threaded rods, eye bolts',
      },
      { id: 'sub-028', name: 'Rivets', slug: 'rivets', description: 'Pop rivets, blind rivets' },
    ],
    seo: {
      title: 'Fasteners – Bolts, Screws & Anchors Dubai | Urban Choice',
      description:
        'Buy hex bolts, nuts, screws, anchor bolts and threaded rods in Dubai. Wide range of fasteners for construction and industrial use in UAE.',
      keywords: ['fasteners Dubai', 'bolts UAE', 'anchor bolts Dubai', 'screws supplier UAE'],
    },
    featured: false,
  },
  {
    id: 'cat-008',
    name: 'Power Tools',
    slug: 'power-tools',
    description:
      'Professional power tools for construction and fabrication — electric drills, angle grinders, circular saws, welding machines, air compressors, and more.',
    shortDescription: 'Drills, grinders, saws, welding machines and compressors.',
    icon: 'Zap',
    image: {
      url: '/categories/power-tools-1.png',
      alt: 'Power tools including drills and angle grinders',
      width: 800,
      height: 600,
    },
    subcategories: [
      {
        id: 'sub-029',
        name: 'Drilling & Grinding',
        slug: 'drilling-grinding',
        description: 'Drills, hammer drills, angle grinders',
      },
      { id: 'sub-030', name: 'Cutting', slug: 'cutting', description: 'Circular saws, jigsaws' },
      {
        id: 'sub-031',
        name: 'Welding & Compressors',
        slug: 'welding-compressors',
        description: 'Welding machines, air compressors',
      },
      {
        id: 'sub-032',
        name: 'Cleaning & Other',
        slug: 'cleaning-other',
        description: 'Pressure washers, heat guns, impact wrenches',
      },
    ],
    seo: {
      title: 'Power Tools – Drills, Grinders & Saws Dubai | Urban Choice',
      description:
        'Buy electric drills, angle grinders, circular saws, welding machines and air compressors in Dubai. Professional power tools for UAE contractors.',
      keywords: [
        'power tools Dubai',
        'electric drill UAE',
        'angle grinder Dubai',
        'welding machine UAE',
      ],
    },
    featured: true,
  },
  {
    id: 'cat-009',
    name: 'Paints & Paint Tools',
    slug: 'paints-paint-tools',
    description:
      'Premium emulsion and enamel paints, primers, waterproof coatings, and all the tools you need — rollers, brushes, spray machines, putty knives, and masking tape.',
    shortDescription: 'Emulsion paints, primers, rollers, brushes and spray machines.',
    icon: 'Paintbrush',
    image: {
      url: '/categories/paint-tools-1.png',
      alt: 'Paint cans brushes and painting tools',
      width: 800,
      height: 600,
    },
    subcategories: [
      {
        id: 'sub-033',
        name: 'Paints & Coatings',
        slug: 'paints-coatings',
        description: 'Emulsion, enamel, primer, waterproof coating',
      },
      {
        id: 'sub-034',
        name: 'Application Tools',
        slug: 'application-tools',
        description: 'Rollers, brushes, spray machines',
      },
      {
        id: 'sub-035',
        name: 'Preparation Tools',
        slug: 'preparation-tools',
        description: 'Putty knives, sand paper, masking tape',
      },
    ],
    seo: {
      title: 'Paints & Paint Tools – Emulsion, Primers & Rollers Dubai | Urban Choice',
      description:
        'Buy emulsion paints, enamel paints, primers and painting tools in Dubai. Complete range of paints and applicators for all projects in UAE.',
      keywords: ['paint Dubai', 'emulsion paint UAE', 'paint roller Dubai', 'primer UAE'],
    },
    featured: false,
  },
  {
    id: 'cat-010',
    name: 'Packaging Materials',
    slug: 'packaging-materials',
    description:
      'All packaging essentials for warehouses and logistics — bubble wrap, stretch film, packing tape, garbage bags, foam sheets, corrugated rolls, and strapping solutions.',
    shortDescription: 'Bubble wrap, stretch film, tape, bags and packing supplies.',
    icon: 'Package',
    image: {
      url: '/categories/packaging-materials-1.png',
      alt: 'Packaging materials including bubble wrap and stretch film',
      width: 800,
      height: 600,
    },
    subcategories: [
      {
        id: 'sub-036',
        name: 'Protective Wrapping',
        slug: 'protective-wrapping',
        description: 'Bubble wrap, foam sheets, stretch film',
      },
      {
        id: 'sub-037',
        name: 'Tapes & Strapping',
        slug: 'tapes-strapping',
        description: 'Packing tape, masking tape, strapping roll',
      },
      {
        id: 'sub-038',
        name: 'Bags & Rolls',
        slug: 'bags-rolls',
        description: 'Garbage bags, plastic bags, corrugated rolls',
      },
    ],
    seo: {
      title: 'Packaging Materials – Bubble Wrap, Tape & Bags Dubai | Urban Choice',
      description:
        'Buy bubble wrap, stretch film, packing tape, garbage bags and packaging supplies in Dubai. Quality packaging materials for UAE businesses.',
      keywords: [
        'packaging materials Dubai',
        'bubble wrap UAE',
        'stretch film Dubai',
        'packing tape UAE',
      ],
    },
    featured: false,
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);

export const getFeaturedCategories = (limit?: number): Category[] => {
  const featured = categories.filter((c) => c.featured);
  return limit ? featured.slice(0, limit) : featured;
};
