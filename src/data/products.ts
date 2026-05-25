import type { Product } from '@/types';

const img = (url: string, alt: string) => ({
  url,
  alt,
  width: 800 as const,
  height: 600 as const,
});

const thumb = (url: string, alt: string) => ({
  url,
  alt,
  width: 400 as const,
  height: 400 as const,
});

export const products: Product[] = [
  // ── SAFETY ITEMS ─────────────────────────────────────────────────────────
  {
    id: 'prod-001',
    name: 'Safety Helmet',
    slug: 'safety-helmet',
    category: 'safety-items',
    subcategory: 'head-eye-protection',
    images: [
      img(
        'https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uc3RydWN0aW9uJTIwaGVsbWV0fGVufDB8fDB8fHww',
        'Safety helmet for construction',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uc3RydWN0aW9uJTIwaGVsbWV0fGVufDB8fDB8fHww',
      'Safety Helmet',
    ),
    shortDescription: 'Hard hat with adjustable suspension, meets EN 397 standard.',
    fullDescription:
      'Durable ABS hard hat designed for construction and industrial use. Features adjustable ratchet suspension for a secure fit. Meets EN 397 and UAE safety standards.',
    availability: 'in_stock',
    featured: false,
    tags: ['safety', 'helmet', 'PPE', 'head protection'],
    seo: {
      title: 'Safety Helmet – Construction Hard Hat Dubai | Urban Choice',
      description:
        'Buy safety helmets and hard hats in Dubai. EN 397 compliant head protection for construction and industrial sites across UAE.',
      keywords: ['safety helmet Dubai', 'hard hat UAE', 'construction helmet'],
    },
  },
  {
    id: 'prod-002',
    name: 'Safety Goggles',
    slug: 'safety-goggles',
    category: 'safety-items',
    subcategory: 'head-eye-protection',
    images: [
      img(
        'https://images.unsplash.com/photo-1593854519602-687eae339d57?q=80&w=1170',
        'Safety goggles for eye protection',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1593854519602-687eae339d57?q=80&w=1170',
      'Safety Goggles',
    ),
    shortDescription: 'Anti-fog safety goggles with UV protection.',
    fullDescription:
      'Clear polycarbonate lens goggles with anti-fog coating and indirect ventilation. Provides full eye protection against dust, debris, and chemical splashes.',
    availability: 'in_stock',
    featured: false,
    tags: ['safety', 'goggles', 'eye protection'],
    seo: {
      title: 'Safety Goggles – Eye Protection Dubai | Urban Choice',
      description: 'Buy safety goggles and eye protection equipment in Dubai UAE.',
      keywords: ['safety goggles Dubai', 'eye protection UAE'],
    },
  },
  {
    id: 'prod-003',
    name: 'Safety Vest (Reflective)',
    slug: 'safety-vest-reflective',
    category: 'safety-items',
    subcategory: 'body-protection',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1721460167407-88871e334fc9?q=80&w=1170',
        'Reflective safety vest',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1721460167407-88871e334fc9?q=80&w=1170',
      'Reflective Safety Vest',
    ),
    shortDescription: 'High-visibility reflective vest for road and site workers.',
    fullDescription:
      'Bright orange/yellow mesh vest with 3M reflective strips for maximum visibility. Lightweight and breathable, suitable for outdoor construction and road work.',
    availability: 'in_stock',
    featured: true,
    tags: ['safety', 'vest', 'reflective', 'high-visibility'],
    seo: {
      title: 'Reflective Safety Vest Dubai | Urban Choice',
      description: 'Buy high-visibility reflective safety vests in Dubai UAE.',
      keywords: ['safety vest Dubai', 'reflective vest UAE'],
    },
  },
  {
    id: 'prod-004',
    name: 'Full Body Safety Harness',
    slug: 'full-body-safety-harness',
    category: 'safety-items',
    subcategory: 'body-protection',
    images: [
      img(
        'https://images.unsplash.com/photo-1674558346964-e7196a409880?q=80&w=1170',
        'Full body safety harness',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1674558346964-e7196a409880?q=80&w=1170',
      'Safety Harness',
    ),
    shortDescription: 'EN 361-certified full body harness for working at height.',
    fullDescription:
      'Five-point full body harness with front and dorsal D-rings. Adjustable straps and quick-connect buckles. Certified to EN 361 for fall arrest applications.',
    availability: 'in_stock',
    featured: false,
    tags: ['harness', 'fall protection', 'height safety'],
    seo: {
      title: 'Full Body Safety Harness Dubai | Urban Choice',
      description: 'Buy fall protection harnesses and safety equipment in Dubai UAE.',
      keywords: ['safety harness Dubai', 'fall arrest UAE'],
    },
  },
  {
    id: 'prod-005',
    name: 'Safety Gloves (Cut-Resistant)',
    slug: 'safety-gloves-cut-resistant',
    category: 'safety-items',
    subcategory: 'hand-foot-protection',
    images: [
      img(
        'https://images.unsplash.com/photo-1643701239119-0c1cd6b8c9a0?q=80&w=687',
        'Cut-resistant safety gloves',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1643701239119-0c1cd6b8c9a0?q=80&w=687',
      'Cut-Resistant Gloves',
    ),
    shortDescription: 'Level 5 cut-resistant gloves for handling sharp materials.',
    fullDescription:
      'HPPE knit gloves with Level 5 cut resistance. Lightweight and flexible for dexterity while handling sheet metal, glass, or sharp tools.',
    availability: 'in_stock',
    featured: false,
    tags: ['gloves', 'cut-resistant', 'hand protection'],
    seo: {
      title: 'Cut-Resistant Safety Gloves Dubai | Urban Choice',
      description: 'Buy cut-resistant and safety gloves in Dubai UAE.',
      keywords: ['safety gloves Dubai', 'cut-resistant gloves UAE'],
    },
  },
  {
    id: 'prod-006',
    name: 'Safety Shoes (Steel Toe)',
    slug: 'safety-shoes-steel-toe',
    category: 'safety-items',
    subcategory: 'hand-foot-protection',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1726797983325-62c76344295b?q=80&w=1202',
        'Steel toe safety shoes',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1726797983325-62c76344295b?q=80&w=1202',
      'Steel Toe Safety Shoes',
    ),
    shortDescription: 'Steel toe cap shoes with anti-slip sole, EN ISO 20345 certified.',
    fullDescription:
      'Leather upper safety shoes with steel toe cap and puncture-resistant midsole. Anti-slip rubber sole for wet and oily surfaces. Certified to EN ISO 20345 S1P.',
    availability: 'in_stock',
    featured: false,
    tags: ['safety shoes', 'steel toe', 'foot protection'],
    seo: {
      title: 'Steel Toe Safety Shoes Dubai | Urban Choice',
      description: 'Buy steel toe safety shoes and boots in Dubai UAE.',
      keywords: ['safety shoes Dubai', 'steel toe boots UAE'],
    },
  },
  {
    id: 'prod-007',
    name: 'Dust Mask (FFP2)',
    slug: 'dust-mask-ffp2',
    category: 'safety-items',
    subcategory: 'respiratory-hearing',
    images: [
      img('https://images.unsplash.com/photo-1600069620987-31b50fd58a44?w=600', 'FFP2 dust mask'),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1600069620987-31b50fd58a44?w=600',
      'FFP2 Dust Mask',
    ),
    shortDescription: 'FFP2 rated disposable dust mask for fine particle filtration.',
    fullDescription:
      'Cup-shaped FFP2 respirator offering at least 94% filtration efficiency. Comfortable nose clip and inner foam seal for a snug fit. Ideal for dusty construction environments.',
    availability: 'in_stock',
    featured: false,
    tags: ['mask', 'respirator', 'FFP2', 'dust protection'],
    seo: {
      title: 'FFP2 Dust Mask Dubai | Urban Choice',
      description: 'Buy FFP2 dust masks and respirators in Dubai UAE.',
      keywords: ['dust mask Dubai', 'FFP2 respirator UAE'],
    },
  },
  {
    id: 'prod-008',
    name: 'Ear Muffs',
    slug: 'ear-muffs',
    category: 'safety-items',
    subcategory: 'respiratory-hearing',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1681732426422-0bb5fc1059c0?q=80&w=687',
        'Ear muffs for noise protection',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1681732426422-0bb5fc1059c0?q=80&w=687',
      'Ear Muffs',
    ),
    shortDescription: 'Over-ear hearing protectors with 28 dB noise reduction.',
    fullDescription:
      'Adjustable over-ear ear muffs with 28 dB SNR rating. Soft foam ear cushions and padded headband for all-day comfort on noisy construction sites.',
    availability: 'in_stock',
    featured: false,
    tags: ['ear muffs', 'hearing protection', 'noise reduction'],
    seo: {
      title: 'Ear Muffs – Hearing Protection Dubai | Urban Choice',
      description: 'Buy ear muffs and hearing protection in Dubai UAE.',
      keywords: ['ear muffs Dubai', 'hearing protection UAE'],
    },
  },
  {
    id: 'prod-009',
    name: 'Safety Cone',
    slug: 'safety-cone',
    category: 'safety-items',
    subcategory: 'body-protection',
    images: [
      img(
        'https://images.unsplash.com/photo-1573068111653-f18bef611c8a?w=600',
        'Orange traffic safety cone',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1573068111653-f18bef611c8a?w=600',
      'Safety Cone',
    ),
    shortDescription: 'Heavy-duty 750 mm orange traffic cone with reflective collar.',
    fullDescription:
      'Durable PVC traffic cone with weighted base and two reflective collars for day and night visibility. 750 mm height suitable for road works and site demarcation.',
    availability: 'in_stock',
    featured: false,
    tags: ['safety cone', 'traffic cone', 'site safety'],
    seo: {
      title: 'Safety Cone Dubai | Urban Choice',
      description: 'Buy safety cones and traffic management equipment in Dubai UAE.',
      keywords: ['safety cone Dubai', 'traffic cone UAE'],
    },
  },
  {
    id: 'prod-010',
    name: 'First Aid Kit',
    slug: 'first-aid-kit',
    category: 'safety-items',
    subcategory: 'body-protection',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1677860447055-5ce8092c0d7e?q=80&w=880',
        'First aid kit for construction sites',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1677860447055-5ce8092c0d7e?q=80&w=880',
      'First Aid Kit',
    ),
    shortDescription: 'Comprehensive 50-piece first aid kit for construction sites.',
    fullDescription:
      'Wall-mountable first aid kit with 50 essential items including bandages, antiseptic wipes, gauze pads, scissors, gloves, and emergency blanket. Meets UAE workplace requirements.',
    availability: 'in_stock',
    featured: true,
    tags: ['first aid', 'emergency', 'medical kit'],
    seo: {
      title: 'First Aid Kit Dubai | Urban Choice',
      description: 'Buy first aid kits for construction sites in Dubai UAE.',
      keywords: ['first aid kit Dubai', 'site first aid UAE'],
    },
  },

  // ── SANITARY ITEMS ────────────────────────────────────────────────────────
  {
    id: 'prod-011',
    name: 'Wall-Hung Wash Basin',
    slug: 'wall-hung-wash-basin',
    category: 'sanitary-items',
    subcategory: 'basins-wcs',
    images: [
      img(
        'https://images.unsplash.com/photo-1673277500563-9e6dd375726d?w=600',
        'Wall-hung wash basin ceramic white',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1673277500563-9e6dd375726d?w=600',
      'Wall-Hung Wash Basin',
    ),
    shortDescription: 'Ceramic wall-hung basin, 60 cm, with semi-pedestal.',
    fullDescription:
      'White ceramic wall-hung wash basin (600 × 460 mm) with overflow, pre-drilled single tap hole, and matching semi-pedestal. Suitable for residential and commercial bathrooms.',
    availability: 'in_stock',
    featured: false,
    tags: ['wash basin', 'sanitary', 'bathroom', 'ceramic'],
    seo: {
      title: 'Wall-Hung Wash Basin Dubai | Urban Choice',
      description: 'Buy wall-hung wash basins and bathroom sinks in Dubai UAE.',
      keywords: ['wash basin Dubai', 'wall hung basin UAE'],
    },
  },
  {
    id: 'prod-012',
    name: 'Close-Coupled WC Suite',
    slug: 'close-coupled-wc-suite',
    category: 'sanitary-items',
    subcategory: 'basins-wcs',
    images: [
      img(
        'https://images.unsplash.com/photo-1656646523710-eec180420c2f?q=80&w=1170',
        'Close-coupled WC toilet suite',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1656646523710-eec180420c2f?q=80&w=1170',
      'Close-Coupled WC',
    ),
    shortDescription: 'Close-coupled toilet suite with dual-flush cistern.',
    fullDescription:
      'White vitreous china close-coupled WC with soft-close seat, dual-flush 3/6L cistern, and chrome flush lever. Easy-clean design for low maintenance.',
    availability: 'in_stock',
    featured: false,
    tags: ['WC', 'toilet', 'water closet', 'sanitary'],
    seo: {
      title: 'Close-Coupled WC Suite Dubai | Urban Choice',
      description: 'Buy WC suites and toilets in Dubai UAE.',
      keywords: ['WC suite Dubai', 'toilet UAE', 'water closet Dubai'],
    },
  },
  {
    id: 'prod-013',
    name: 'Single Lever Basin Mixer',
    slug: 'single-lever-basin-mixer',
    category: 'sanitary-items',
    subcategory: 'mixers-showers',
    images: [
      img(
        'https://images.unsplash.com/photo-1732623567352-3302299e6b1f?w=600',
        'Chrome basin mixer tap',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1732623567352-3302299e6b1f?w=600',
      'Basin Mixer',
    ),
    shortDescription: 'Chrome single-lever basin mixer with ceramic cartridge.',
    fullDescription:
      'Contemporary single-hole basin mixer in chrome finish. Features ceramic disc cartridge for smooth, drip-free operation. 35 mm cartridge, 1/2" connections.',
    availability: 'in_stock',
    featured: true,
    tags: ['basin mixer', 'tap', 'chrome', 'sanitary'],
    seo: {
      title: 'Single Lever Basin Mixer Dubai | Urban Choice',
      description: 'Buy basin mixers and bathroom taps in Dubai UAE.',
      keywords: ['basin mixer Dubai', 'bathroom tap UAE'],
    },
  },
  {
    id: 'prod-014',
    name: 'Overhead Shower Set',
    slug: 'overhead-shower-set',
    category: 'sanitary-items',
    subcategory: 'mixers-showers',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1736194029343-bc81109e3ce7?q=80&w=687',
        'Overhead shower set with rain head',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1736194029343-bc81109e3ce7?q=80&w=687',
      'Overhead Shower Set',
    ),
    shortDescription: 'Rain shower set with 300 mm head and hand shower.',
    fullDescription:
      'Complete overhead shower set including 300 mm rain shower head, shower arm, hand shower with 1.5 m hose, and slide bar. Chrome finish. Easy installation.',
    availability: 'in_stock',
    featured: false,
    tags: ['shower set', 'rain shower', 'bathroom'],
    seo: {
      title: 'Overhead Shower Set Dubai | Urban Choice',
      description: 'Buy shower sets and rain shower heads in Dubai UAE.',
      keywords: ['shower set Dubai', 'rain shower UAE'],
    },
  },
  {
    id: 'prod-015',
    name: 'Angle Valve (Chrome)',
    slug: 'angle-valve-chrome',
    category: 'sanitary-items',
    subcategory: 'valves-fittings',
    images: [
      img(
        'https://images.unsplash.com/photo-1655368987984-69d7a7811ac3?q=80&w=1170',
        'Chrome angle valve for bathroom',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1655368987984-69d7a7811ac3?q=80&w=1170',
      'Chrome Angle Valve',
    ),
    shortDescription: '1/2" chrome angle valve with ceramic disc.',
    fullDescription:
      'Quarter-turn 1/2" angle valve with chrome plated brass body and ceramic disc seat. Corrosion-resistant and suitable for hot and cold water supply lines.',
    availability: 'in_stock',
    featured: false,
    tags: ['angle valve', 'valve', 'chrome', 'plumbing fitting'],
    seo: {
      title: 'Chrome Angle Valve Dubai | Urban Choice',
      description: 'Buy chrome angle valves and bathroom fittings in Dubai UAE.',
      keywords: ['angle valve Dubai', 'chrome valve UAE'],
    },
  },
  {
    id: 'prod-016',
    name: 'Floor Trap (Square)',
    slug: 'floor-trap-square',
    category: 'sanitary-items',
    subcategory: 'valves-fittings',
    images: [
      img(
        'https://images.unsplash.com/photo-1632736570422-307f6e963319?w=600',
        'Stainless steel floor trap drain',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1632736570422-307f6e963319?w=600',
      'Floor Trap',
    ),
    shortDescription: '150 × 150 mm stainless steel square floor trap with water seal.',
    fullDescription:
      'Brushed stainless steel square floor drain (150 × 150 mm) with deep water seal to prevent odour ingress. Removable strainer basket for easy cleaning.',
    availability: 'in_stock',
    featured: false,
    tags: ['floor trap', 'drain', 'stainless steel', 'bathroom'],
    seo: {
      title: 'Square Floor Trap Dubai | Urban Choice',
      description: 'Buy floor traps and bathroom drains in Dubai UAE.',
      keywords: ['floor trap Dubai', 'bathroom drain UAE'],
    },
  },
  {
    id: 'prod-017',
    name: 'Toilet Paper Holder',
    slug: 'toilet-paper-holder',
    category: 'sanitary-items',
    subcategory: 'bathroom-accessories',
    images: [
      img(
        'https://images.unsplash.com/photo-1584458290237-181c65bf6647?q=80&w=1170',
        'Chrome toilet paper holder wall mounted',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1584458290237-181c65bf6647?q=80&w=1170',
      'Toilet Paper Holder',
    ),
    shortDescription: 'Wall-mounted chrome toilet paper holder.',
    fullDescription:
      'Solid brass wall-mounted toilet paper holder in polished chrome finish. Includes concealed fixing screws and wall anchors for a clean, modern look.',
    availability: 'in_stock',
    featured: false,
    tags: ['toilet paper holder', 'bathroom accessory', 'chrome'],
    seo: {
      title: 'Toilet Paper Holder Dubai | Urban Choice',
      description: 'Buy bathroom accessories and toilet paper holders in Dubai UAE.',
      keywords: ['toilet paper holder Dubai', 'bathroom accessories UAE'],
    },
  },
  {
    id: 'prod-018',
    name: 'Towel Bar (600 mm)',
    slug: 'towel-bar-600mm',
    category: 'sanitary-items',
    subcategory: 'bathroom-accessories',
    images: [
      img(
        'https://images.unsplash.com/photo-1589898362790-edba11d34869?w=600',
        'Chrome towel bar bathroom',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1589898362790-edba11d34869?w=600',
      'Towel Bar',
    ),
    shortDescription: '600 mm double towel bar in polished chrome.',
    fullDescription:
      'Double towel bar in 600 mm length with polished chrome finish. Heavy-gauge solid brass construction with concealed wall fixings.',
    availability: 'in_stock',
    featured: false,
    tags: ['towel bar', 'towel rail', 'bathroom accessory'],
    seo: {
      title: 'Chrome Towel Bar Dubai | Urban Choice',
      description: 'Buy towel bars and bathroom accessories in Dubai UAE.',
      keywords: ['towel bar Dubai', 'towel rail UAE'],
    },
  },
  {
    id: 'prod-019',
    name: 'Stainless Steel Kitchen Sink',
    slug: 'stainless-steel-kitchen-sink',
    category: 'sanitary-items',
    subcategory: 'bathroom-accessories',
    images: [
      img(
        'https://images.unsplash.com/photo-1661045327753-3f2a047d00a4?q=80&w=1170',
        'Stainless steel kitchen sink double bowl',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1661045327753-3f2a047d00a4?q=80&w=1170',
      'Kitchen Sink',
    ),
    shortDescription: 'Double bowl stainless steel sink, 80 × 50 cm.',
    fullDescription:
      '18/10 stainless steel double bowl under-mount kitchen sink (800 × 500 mm). Includes strainer baskets and waste pipes. Sound-deadening pads for quiet operation.',
    availability: 'in_stock',
    featured: false,
    tags: ['kitchen sink', 'stainless steel', 'double bowl'],
    seo: {
      title: 'Stainless Steel Kitchen Sink Dubai | Urban Choice',
      description: 'Buy stainless steel kitchen sinks in Dubai UAE.',
      keywords: ['kitchen sink Dubai', 'stainless sink UAE'],
    },
  },
  {
    id: 'prod-020',
    name: 'Wall-Mounted Urinal',
    slug: 'wall-mounted-urinal',
    category: 'sanitary-items',
    subcategory: 'basins-wcs',
    images: [
      img(
        'https://images.unsplash.com/photo-1744828367881-97196efa6ec2?w=600',
        'Wall mounted ceramic urinal',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1744828367881-97196efa6ec2?w=600',
      'Wall Urinal',
    ),
    shortDescription: 'White ceramic wall-mounted urinal with concealed flush.',
    fullDescription:
      'Vitreous china wall-hung urinal with integrated spreader and concealed inlet/outlet connections. Compatible with manual or sensor flush valves.',
    availability: 'in_stock',
    featured: false,
    tags: ['urinal', 'sanitary', 'commercial bathroom'],
    seo: {
      title: 'Wall Mounted Urinal Dubai | Urban Choice',
      description: 'Buy urinals and commercial sanitary ware in Dubai UAE.',
      keywords: ['urinal Dubai', 'commercial sanitary UAE'],
    },
  },

  // ── HARDWARE ITEMS ────────────────────────────────────────────────────────
  {
    id: 'prod-021',
    name: 'Door Hinges (Stainless Steel)',
    slug: 'door-hinges-stainless-steel',
    category: 'hardware-items',
    subcategory: 'door-hardware',
    images: [
      img(
        'https://images.unsplash.com/photo-1701788607416-f1b5dd5a09ec?w=600',
        'Stainless steel door hinges',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1701788607416-f1b5dd5a09ec?w=600',
      'Door Hinges',
    ),
    shortDescription: '100 × 75 mm SS 304 ball-bearing door hinges, pair.',
    fullDescription:
      'Grade 304 stainless steel ball-bearing hinges (100 × 75 × 2.5 mm). Non-removable pin, suitable for external and internal doors up to 80 kg. Sold as a pair.',
    availability: 'in_stock',
    featured: false,
    tags: ['door hinges', 'stainless steel', 'hardware'],
    seo: {
      title: 'Stainless Steel Door Hinges Dubai | Urban Choice',
      description: 'Buy stainless steel door hinges and hardware in Dubai UAE.',
      keywords: ['door hinges Dubai', 'SS hinges UAE'],
    },
  },
  {
    id: 'prod-022',
    name: 'Mortise Door Lock',
    slug: 'mortise-door-lock',
    category: 'hardware-items',
    subcategory: 'door-hardware',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1729265012673-c6e5e3a29374?q=80&w=1207',
        'Mortise door lock set',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1729265012673-c6e5e3a29374?q=80&w=1207',
      'Mortise Door Lock',
    ),
    shortDescription: '3-lever mortise lock with lever handles and escutcheons.',
    fullDescription:
      'Heavy-duty 3-lever mortise lock with 60 mm backset. Includes pair of lever handles, escutcheons, and 3 keys. Satin chrome finish.',
    availability: 'in_stock',
    featured: true,
    tags: ['mortise lock', 'door lock', 'hardware'],
    seo: {
      title: 'Mortise Door Lock Dubai | Urban Choice',
      description: 'Buy mortise locks and door security hardware in Dubai UAE.',
      keywords: ['door lock Dubai', 'mortise lock UAE'],
    },
  },
  {
    id: 'prod-023',
    name: 'Cabinet Handle (128 mm)',
    slug: 'cabinet-handle-128mm',
    category: 'hardware-items',
    subcategory: 'door-hardware',
    images: [
      img(
        'https://images.unsplash.com/photo-1634926360833-8a6fd76f0300?q=80&w=1074',
        'Stainless steel cabinet handle',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1634926360833-8a6fd76f0300?q=80&w=1074',
      'Cabinet Handle',
    ),
    shortDescription: '128 mm brushed stainless steel bar handle for cabinets.',
    fullDescription:
      'Solid stainless steel bar pull handle with 128 mm hole-to-hole spacing. Brushed satin finish. M4 screws included. Suitable for kitchen cabinets, wardrobes, and drawers.',
    availability: 'in_stock',
    featured: true,
    tags: ['cabinet handle', 'pull handle', 'hardware'],
    seo: {
      title: 'Cabinet Handle Dubai | Urban Choice',
      description: 'Buy cabinet handles and drawer pulls in Dubai UAE.',
      keywords: ['cabinet handle Dubai', 'drawer pull UAE'],
    },
  },
  {
    id: 'prod-024',
    name: 'Tape Measure (5 m)',
    slug: 'tape-measure-5m',
    category: 'hardware-items',
    subcategory: 'hand-tools',
    images: [
      img(
        'https://images.unsplash.com/photo-1703756291638-b1774ae3c186?q=80&w=1074',
        'Yellow tape measure 5 metre',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1703756291638-b1774ae3c186?q=80&w=1074',
      'Tape Measure',
    ),
    shortDescription: '5 m × 19 mm steel blade tape measure with auto-lock.',
    fullDescription:
      'Professional steel blade tape measure with 5 m reach, 19 mm wide blade, and auto-locking mechanism. High-impact ABS casing with rubber over-mould grip.',
    availability: 'in_stock',
    featured: false,
    tags: ['tape measure', 'measuring tool', 'hand tool'],
    seo: {
      title: 'Tape Measure 5m Dubai | Urban Choice',
      description: 'Buy tape measures and measuring tools in Dubai UAE.',
      keywords: ['tape measure Dubai', 'measuring tool UAE'],
    },
  },
  {
    id: 'prod-025',
    name: 'Hacksaw (300 mm)',
    slug: 'hacksaw-300mm',
    category: 'hardware-items',
    subcategory: 'hand-tools',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1661500917749-457041d4f56c?w=600',
        'Metal hacksaw with blade',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1661500917749-457041d4f56c?w=600',
      'Hacksaw',
    ),
    shortDescription: 'Heavy-duty 300 mm adjustable hacksaw frame with bi-metal blade.',
    fullDescription:
      'Steel adjustable hacksaw frame accepting 300 mm blades. Comfortable bi-material grip handle. Comes with one 24 TPI bi-metal blade for cutting metal, PVC, and wood.',
    availability: 'in_stock',
    featured: false,
    tags: ['hacksaw', 'cutting tool', 'hand tool'],
    seo: {
      title: 'Hacksaw Dubai | Urban Choice',
      description: 'Buy hacksaws and cutting tools in Dubai UAE.',
      keywords: ['hacksaw Dubai', 'cutting tool UAE'],
    },
  },
  {
    id: 'prod-026',
    name: 'Masonry Drill Bit Set',
    slug: 'masonry-drill-bit-set',
    category: 'hardware-items',
    subcategory: 'hand-tools',
    images: [
      img(
        'https://images.unsplash.com/photo-1619765617678-5d6e187079d2?q=80&w=1170',
        'Masonry drill bit set',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1619765617678-5d6e187079d2?q=80&w=1170',
      'Masonry Drill Bit Set',
    ),
    shortDescription: '5-piece carbide-tipped masonry drill bit set (4–12 mm).',
    fullDescription:
      'Set of 5 carbide-tipped masonry drill bits in 4, 6, 8, 10, and 12 mm diameters. Suitable for drilling concrete, brick, and stone. Stored in a plastic case.',
    availability: 'in_stock',
    featured: false,
    tags: ['drill bits', 'masonry', 'tool set'],
    seo: {
      title: 'Masonry Drill Bit Set Dubai | Urban Choice',
      description: 'Buy masonry drill bits and tool sets in Dubai UAE.',
      keywords: ['drill bit set Dubai', 'masonry drill UAE'],
    },
  },
  {
    id: 'prod-027',
    name: 'Wall Plugs & Screws Kit',
    slug: 'wall-plugs-screws-kit',
    category: 'hardware-items',
    subcategory: 'fixing-fastening',
    images: [
      img(
        'https://images.unsplash.com/photo-1640958899295-957d780644e7?q=80&w=1170',
        'Wall plugs and screws assortment kit',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1640958899295-957d780644e7?q=80&w=1170',
      'Wall Plugs & Screws Kit',
    ),
    shortDescription: '200-piece nylon wall plug and screw assortment kit.',
    fullDescription:
      'Mixed kit of 200 nylon wall plugs and zinc-plated screws in sizes 5 × 30, 6 × 40, 8 × 50 mm. Organized in a divided plastic storage box.',
    availability: 'in_stock',
    featured: false,
    tags: ['wall plugs', 'screws', 'fixing', 'hardware kit'],
    seo: {
      title: 'Wall Plugs & Screws Kit Dubai | Urban Choice',
      description: 'Buy wall plugs and screws in Dubai UAE.',
      keywords: ['wall plugs Dubai', 'fixing kit UAE'],
    },
  },
  {
    id: 'prod-028',
    name: 'Heavy-Duty Clamp',
    slug: 'heavy-duty-clamp',
    category: 'hardware-items',
    subcategory: 'fixing-fastening',
    images: [
      img(
        'https://images.unsplash.com/photo-1678734471015-c029a4d57fe7?q=80&w=1170',
        'Heavy duty metal G-clamp',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1678734471015-c029a4d57fe7?q=80&w=1170',
      'Heavy Duty Clamp',
    ),
    shortDescription: '150 mm cast iron G-clamp for woodwork and metalwork.',
    fullDescription:
      '150 mm (6") cast iron G-clamp with swivel pad and precision-threaded spindle. Maximum opening 150 mm, throat depth 60 mm. Ideal for clamping workpieces during cutting, gluing, or welding.',
    availability: 'in_stock',
    featured: false,
    tags: ['clamp', 'G-clamp', 'woodwork', 'metalwork'],
    seo: {
      title: 'Heavy Duty G-Clamp Dubai | Urban Choice',
      description: 'Buy G-clamps and workshop clamps in Dubai UAE.',
      keywords: ['G-clamp Dubai', 'workshop clamp UAE'],
    },
  },
  {
    id: 'prod-029',
    name: 'Drawer Channel (Full Extension)',
    slug: 'drawer-channel-full-extension',
    category: 'hardware-items',
    subcategory: 'storage-organising',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1770249811532-d4e4a6f2e100?w=600',
        'Full extension drawer slide channel',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1770249811532-d4e4a6f2e100?w=600',
      'Drawer Channel',
    ),
    shortDescription: '450 mm full-extension ball-bearing drawer slide, pair.',
    fullDescription:
      'Cold-rolled steel full-extension drawer channel (450 mm) with ball-bearing rolling mechanism. 45 kg load rating. Easy push-to-open and self-closing option available. Sold as a pair.',
    availability: 'in_stock',
    featured: false,
    tags: ['drawer channel', 'drawer slide', 'hardware'],
    seo: {
      title: 'Full Extension Drawer Channel Dubai | Urban Choice',
      description: 'Buy drawer channels and slides in Dubai UAE.',
      keywords: ['drawer channel Dubai', 'drawer slide UAE'],
    },
  },
  {
    id: 'prod-030',
    name: 'Padlock (40 mm)',
    slug: 'padlock-40mm',
    category: 'hardware-items',
    subcategory: 'door-hardware',
    images: [
      img(
        'https://images.unsplash.com/photo-1586661615438-349a276d098b?w=600',
        'Steel padlock with key',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1586661615438-349a276d098b?w=600',
      'Padlock',
    ),
    shortDescription: '40 mm hardened steel padlock with 3 keys.',
    fullDescription:
      'Solid steel body padlock with hardened steel shackle and precision 5-pin tumbler cylinder. Includes 3 keys. Suitable for gates, sheds, and storage units.',
    availability: 'in_stock',
    featured: false,
    tags: ['padlock', 'lock', 'security', 'hardware'],
    seo: {
      title: 'Steel Padlock Dubai | Urban Choice',
      description: 'Buy padlocks and security hardware in Dubai UAE.',
      keywords: ['padlock Dubai', 'security lock UAE'],
    },
  },

  // ── ELECTRICAL ITEMS ──────────────────────────────────────────────────────
  {
    id: 'prod-031',
    name: 'Electrical Wire 2.5 mm² (100 m)',
    slug: 'electrical-wire-2-5mm',
    category: 'electrical-items',
    subcategory: 'wires-cables',
    images: [
      img(
        'https://images.unsplash.com/photo-1764866085369-44c7ef1a18f3?w=600',
        'Electrical wire cable roll 2.5mm',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1764866085369-44c7ef1a18f3?w=600',
      'Electrical Wire 2.5mm',
    ),
    shortDescription: 'Single-core 2.5 mm² PVC insulated copper wire, 100 m roll.',
    fullDescription:
      '2.5 mm² single-core copper conductor with PVC insulation. Rated 450/750V. Suitable for power circuits in residential and commercial installations. Available in red, black, and green. 100 m roll.',
    availability: 'in_stock',
    featured: false,
    tags: ['electrical wire', 'cable', '2.5mm', 'copper wire'],
    seo: {
      title: 'Electrical Wire 2.5mm Dubai | Urban Choice',
      description: 'Buy electrical wires and cables in Dubai UAE.',
      keywords: ['electrical wire Dubai', 'copper cable UAE'],
    },
  },
  {
    id: 'prod-032',
    name: 'LED Bulb (9W E27)',
    slug: 'led-bulb-9w-e27',
    category: 'electrical-items',
    subcategory: 'lighting',
    images: [
      img(
        'https://images.unsplash.com/photo-1532007271951-c487760934ae?w=600',
        'LED bulb 9W E27 base',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1532007271951-c487760934ae?w=600',
      'LED Bulb 9W',
    ),
    shortDescription: '9W E27 LED bulb, 806 lm, 6500K cool white.',
    fullDescription:
      '9W E27 screw-cap LED bulb producing 806 lumens (equivalent to 60W incandescent). 6500K cool white. 25,000-hour rated life. 220-240V input.',
    availability: 'in_stock',
    featured: false,
    tags: ['LED bulb', 'E27', 'lighting', 'energy saving'],
    seo: {
      title: 'LED Bulb 9W E27 Dubai | Urban Choice',
      description: 'Buy LED bulbs and lighting in Dubai UAE.',
      keywords: ['LED bulb Dubai', 'E27 bulb UAE'],
    },
  },
  {
    id: 'prod-033',
    name: 'LED Panel Light (18W)',
    slug: 'led-panel-light-18w',
    category: 'electrical-items',
    subcategory: 'lighting',
    images: [
      img(
        'https://images.unsplash.com/photo-1724660579557-b03a78094806?w=600',
        'Recessed LED panel light ceiling',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1724660579557-b03a78094806?w=600',
      'LED Panel Light 18W',
    ),
    shortDescription: '18W slim LED panel light, 300 × 300 mm, 4000K neutral white.',
    fullDescription:
      'Slim aluminium recessed LED panel (300 × 300 mm, 18W). 1600 lm output, 4000K neutral white, CRI > 80. Includes driver. Suitable for suspended and plasterboard ceilings.',
    availability: 'in_stock',
    featured: false,
    tags: ['LED panel', 'ceiling light', 'recessed light'],
    seo: {
      title: 'LED Panel Light 18W Dubai | Urban Choice',
      description: 'Buy LED panel lights and ceiling lights in Dubai UAE.',
      keywords: ['LED panel light Dubai', 'ceiling light UAE'],
    },
  },
  {
    id: 'prod-034',
    name: 'Modular Switch (1-Gang)',
    slug: 'modular-switch-1-gang',
    category: 'electrical-items',
    subcategory: 'switches-sockets',
    images: [
      img(
        'https://images.unsplash.com/photo-1698768144235-b5dbe3043bb2?w=600',
        'Modular one gang light switch white',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1698768144235-b5dbe3043bb2?w=600',
      'Modular Switch',
    ),
    shortDescription: '1-gang 1-way modular rocker switch, 10A, white.',
    fullDescription:
      '1-gang 1-way rocker switch module, 10A 240V. White thermoplastic finish. Compatible with standard modular frames. Easy screw terminal connection.',
    availability: 'in_stock',
    featured: false,
    tags: ['light switch', 'modular switch', 'electrical'],
    seo: {
      title: 'Modular Light Switch Dubai | Urban Choice',
      description: 'Buy modular switches and sockets in Dubai UAE.',
      keywords: ['light switch Dubai', 'modular switch UAE'],
    },
  },
  {
    id: 'prod-035',
    name: 'Double Socket Outlet (13A)',
    slug: 'double-socket-outlet-13a',
    category: 'electrical-items',
    subcategory: 'switches-sockets',
    images: [
      img(
        'https://images.unsplash.com/photo-1651255697944-3265bccb167b?w=600',
        'Double electrical socket outlet 13A',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1651255697944-3265bccb167b?w=600',
      'Double Socket Outlet',
    ),
    shortDescription: '13A twin socket outlet with individual switches, white.',
    fullDescription:
      'British Standard BS1363 double socket outlet with neon indicators and individual rocker switches. 13A 240V. White thermoplastic. Suitable for residential and commercial use.',
    availability: 'in_stock',
    featured: false,
    tags: ['socket outlet', 'double socket', 'electrical fitting'],
    seo: {
      title: 'Double Socket Outlet 13A Dubai | Urban Choice',
      description: 'Buy socket outlets and electrical fittings in Dubai UAE.',
      keywords: ['socket outlet Dubai', '13A socket UAE'],
    },
  },
  {
    id: 'prod-036',
    name: 'MCB (6A–32A)',
    slug: 'mcb-circuit-breaker',
    category: 'electrical-items',
    subcategory: 'protection-control',
    images: [
      img(
        'https://images.unsplash.com/photo-1576446470246-499c738d1c8e?w=600',
        'Miniature circuit breaker MCB',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1576446470246-499c738d1c8e?w=600',
      'MCB Circuit Breaker',
    ),
    shortDescription: 'Single-pole MCB, Type C, 6–32A range, DIN rail mount.',
    fullDescription:
      'DIN rail-mounted single-pole miniature circuit breaker, Type C trip characteristic. Available from 6A to 32A. Rated 230/400V AC, 6kA breaking capacity. Conforms to IEC 60898.',
    availability: 'in_stock',
    featured: false,
    tags: ['MCB', 'circuit breaker', 'distribution board'],
    seo: {
      title: 'MCB Circuit Breaker Dubai | Urban Choice',
      description: 'Buy MCBs and circuit breakers in Dubai UAE.',
      keywords: ['MCB Dubai', 'circuit breaker UAE'],
    },
  },
  {
    id: 'prod-037',
    name: 'Distribution Board (8-Way)',
    slug: 'distribution-board-8-way',
    category: 'electrical-items',
    subcategory: 'protection-control',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1682928136660-8cbeaf4941b2?w=600',
        'Electrical distribution board consumer unit',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1682928136660-8cbeaf4941b2?w=600',
      '8-Way Distribution Board',
    ),
    shortDescription: '8-way flush-mounted distribution board with main switch.',
    fullDescription:
      '8-way single-phase flush-mounted consumer unit with 63A double-pole main isolator. Steel enclosure with hinged transparent cover and DIN rail. Suitable for residential circuits.',
    availability: 'in_stock',
    featured: false,
    tags: ['distribution board', 'consumer unit', 'electrical panel'],
    seo: {
      title: '8-Way Distribution Board Dubai | Urban Choice',
      description: 'Buy distribution boards and consumer units in Dubai UAE.',
      keywords: ['distribution board Dubai', 'consumer unit UAE'],
    },
  },
  {
    id: 'prod-038',
    name: 'PVC Conduit Pipe (25 mm)',
    slug: 'pvc-conduit-pipe-25mm',
    category: 'electrical-items',
    subcategory: 'wires-cables',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1661577094877-725f859aff3e?w=600',
        'PVC electrical conduit pipes',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1661577094877-725f859aff3e?w=600',
      'PVC Conduit 25mm',
    ),
    shortDescription: '25 mm PVC rigid conduit, 3 m length, grey.',
    fullDescription:
      'Grey rigid PVC conduit, 25 mm diameter, 3 m lengths. UV-stabilised for outdoor use. Suitable for surface and concealed wiring. Fittings and accessories available separately.',
    availability: 'in_stock',
    featured: false,
    tags: ['conduit', 'PVC conduit', 'electrical conduit'],
    seo: {
      title: 'PVC Conduit Pipe 25mm Dubai | Urban Choice',
      description: 'Buy PVC conduit pipes and electrical conduit in Dubai UAE.',
      keywords: ['PVC conduit Dubai', 'electrical conduit UAE'],
    },
  },
  {
    id: 'prod-039',
    name: 'Ceiling Fan (56 Inch)',
    slug: 'ceiling-fan-56-inch',
    category: 'electrical-items',
    subcategory: 'lighting',
    images: [
      img(
        'https://images.unsplash.com/photo-1677959098115-1aafeb9313c0?w=600',
        'Ceiling fan 56 inch with remote',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1677959098115-1aafeb9313c0?w=600',
      '56 Inch Ceiling Fan',
    ),
    shortDescription: '56" ceiling fan with remote, 5 blades, 3-speed control.',
    fullDescription:
      '56-inch blade span ceiling fan with 3-speed pull-chain control and remote receiver. 60W motor. Available in white and brown wood-finish blades. 220-240V.',
    availability: 'in_stock',
    featured: true,
    tags: ['ceiling fan', 'fan', 'electrical'],
    seo: {
      title: 'Ceiling Fan 56 Inch Dubai | Urban Choice',
      description: 'Buy ceiling fans in Dubai UAE.',
      keywords: ['ceiling fan Dubai', '56 inch fan UAE'],
    },
  },
  {
    id: 'prod-040',
    name: 'Industrial Plug & Socket (32A)',
    slug: 'industrial-plug-socket-32a',
    category: 'electrical-items',
    subcategory: 'switches-sockets',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1681589433923-33ea0898397f?w=600',
        'Industrial plug socket 32A weatherproof',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1681589433923-33ea0898397f?w=600',
      'Industrial Plug Socket 32A',
    ),
    shortDescription: '32A 3-phase industrial plug and socket, IP44.',
    fullDescription:
      'CEE 32A 5-pin (3P+N+E) industrial plug and socket set rated IP44. Robust polycarbonate body. Suitable for site power distribution and heavy machinery.',
    availability: 'in_stock',
    featured: false,
    tags: ['industrial plug', 'industrial socket', '32A', 'IP44'],
    seo: {
      title: 'Industrial Plug & Socket 32A Dubai | Urban Choice',
      description: 'Buy industrial plugs and sockets in Dubai UAE.',
      keywords: ['industrial socket Dubai', '32A plug UAE'],
    },
  },

  // ── PLUMBING ITEMS ────────────────────────────────────────────────────────
  {
    id: 'prod-041',
    name: 'PPR Pipe (20 mm, PN20)',
    slug: 'ppr-pipe-20mm-pn20',
    category: 'plumbing-items',
    subcategory: 'pipes',
    images: [
      img(
        'https://images.unsplash.com/photo-1709804572415-03d2570a2d01?w=600',
        'PPR hot and cold water pipes green',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1709804572415-03d2570a2d01?w=600',
      'PPR Pipe 20mm',
    ),
    shortDescription: '20 mm PPR pipe PN20 for hot and cold water, 4 m length.',
    fullDescription:
      'Green PPR (polypropylene random copolymer) pipe, 20 mm OD, PN20 pressure rating. 4 m straight lengths. For hot and cold water distribution in residential and commercial buildings.',
    availability: 'in_stock',
    featured: false,
    tags: ['PPR pipe', 'water pipe', 'plumbing'],
    seo: {
      title: 'PPR Pipe 20mm Dubai | Urban Choice',
      description: 'Buy PPR pipes for hot and cold water in Dubai UAE.',
      keywords: ['PPR pipe Dubai', 'water pipe UAE'],
    },
  },
  {
    id: 'prod-042',
    name: 'PVC Drainage Pipe (110 mm)',
    slug: 'pvc-drainage-pipe-110mm',
    category: 'plumbing-items',
    subcategory: 'pipes',
    images: [
      img(
        'https://images.unsplash.com/photo-1722411487131-23bb3ac91df3?w=600',
        'PVC drainage pipes orange',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1722411487131-23bb3ac91df3?w=600',
      'PVC Drainage Pipe 110mm',
    ),
    shortDescription: '110 mm PVC drainage pipe, 3 m length, BS EN 1329.',
    fullDescription:
      'Grey/orange PVC soil and waste pipe, 110 mm OD, 3 m lengths. Conforms to BS EN 1329. For drainage and sewer applications. Compatible with standard PVC fittings.',
    availability: 'in_stock',
    featured: false,
    tags: ['drainage pipe', 'PVC pipe', 'sewer pipe'],
    seo: {
      title: 'PVC Drainage Pipe 110mm Dubai | Urban Choice',
      description: 'Buy PVC drainage pipes in Dubai UAE.',
      keywords: ['PVC drainage pipe Dubai', 'sewer pipe UAE'],
    },
  },
  {
    id: 'prod-043',
    name: 'PPR Elbow 90° (20 mm)',
    slug: 'ppr-elbow-90-20mm',
    category: 'plumbing-items',
    subcategory: 'fittings-valves',
    images: [
      img(
        'https://images.unsplash.com/photo-1681559360177-b766cf4049b6?w=600',
        'PPR elbow fitting 90 degrees',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1681559360177-b766cf4049b6?w=600',
      'PPR Elbow 90°',
    ),
    shortDescription: '20 mm PPR 90° elbow fitting for hot/cold water.',
    fullDescription:
      'PPR 90-degree elbow fitting, 20 mm, compatible with PN20 PPR pipes. Heat-fusion (socket) welding. Pressure rated to match the pipe. For hot and cold water systems.',
    availability: 'in_stock',
    featured: false,
    tags: ['PPR fitting', 'elbow', 'plumbing fitting'],
    seo: {
      title: 'PPR Elbow 90° 20mm Dubai | Urban Choice',
      description: 'Buy PPR fittings and plumbing accessories in Dubai UAE.',
      keywords: ['PPR fitting Dubai', 'PPR elbow UAE'],
    },
  },
  {
    id: 'prod-044',
    name: 'Ball Valve (1/2")',
    slug: 'ball-valve-half-inch',
    category: 'plumbing-items',
    subcategory: 'fittings-valves',
    images: [
      img(
        'https://images.unsplash.com/photo-1655369424135-d95267d6bb8c?w=600',
        'Brass ball valve half inch',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1655369424135-d95267d6bb8c?w=600',
      'Ball Valve 1/2"',
    ),
    shortDescription: '1/2" full-bore brass ball valve with lever handle.',
    fullDescription:
      'Full-bore DZR brass ball valve, 1/2" BSP, with lever handle and PTFE seats. Rated to 10 bar at 120°C. Suitable for water, gas, and compressed air lines.',
    availability: 'in_stock',
    featured: false,
    tags: ['ball valve', 'valve', 'brass valve', 'plumbing'],
    seo: {
      title: 'Ball Valve 1/2" Dubai | Urban Choice',
      description: 'Buy ball valves and plumbing valves in Dubai UAE.',
      keywords: ['ball valve Dubai', 'brass valve UAE'],
    },
  },
  {
    id: 'prod-045',
    name: 'Gate Valve (3/4")',
    slug: 'gate-valve-3-4-inch',
    category: 'plumbing-items',
    subcategory: 'fittings-valves',
    images: [
      img(
        'https://images.unsplash.com/photo-1582642880428-3e2c04ad14ec?w=600',
        'Brass gate valve 3/4 inch',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1582642880428-3e2c04ad14ec?w=600',
      'Gate Valve 3/4"',
    ),
    shortDescription: '3/4" brass gate valve, DIN 3352, screwed BSP ends.',
    fullDescription:
      'Brass body gate valve, 3/4" BSP, with rising stem and handwheel. DIN 3352 compliant. PN16 rated. For isolation of water and other non-aggressive media.',
    availability: 'in_stock',
    featured: false,
    tags: ['gate valve', 'valve', 'brass', 'plumbing'],
    seo: {
      title: 'Gate Valve 3/4" Dubai | Urban Choice',
      description: 'Buy gate valves and isolation valves in Dubai UAE.',
      keywords: ['gate valve Dubai', 'isolation valve UAE'],
    },
  },
  {
    id: 'prod-046',
    name: 'Submersible Water Pump (0.5 HP)',
    slug: 'submersible-water-pump-0-5hp',
    category: 'plumbing-items',
    subcategory: 'pumps-tanks',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1764695559025-59a642c2b3c2?w=600',
        'Submersible water pump',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1764695559025-59a642c2b3c2?w=600',
      'Submersible Pump 0.5HP',
    ),
    shortDescription: '0.5 HP submersible pump, 2000 L/h, for clean water.',
    fullDescription:
      '0.5 HP stainless steel submersible clean water pump. Flow rate up to 2000 L/h, max head 10 m. 1" discharge outlet. 220V/50Hz. For tanks, fountains, and drainage.',
    availability: 'in_stock',
    featured: false,
    tags: ['water pump', 'submersible pump', '0.5HP'],
    seo: {
      title: 'Submersible Water Pump 0.5HP Dubai | Urban Choice',
      description: 'Buy submersible water pumps in Dubai UAE.',
      keywords: ['water pump Dubai', 'submersible pump UAE'],
    },
  },
  {
    id: 'prod-047',
    name: 'Plastic Water Tank (500 L)',
    slug: 'plastic-water-tank-500l',
    category: 'plumbing-items',
    subcategory: 'pumps-tanks',
    images: [
      img(
        'https://images.unsplash.com/photo-1495774539583-885e02cca8c2?w=600',
        'Plastic water storage tank',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1495774539583-885e02cca8c2?w=600',
      'Water Tank 500L',
    ),
    shortDescription: '500-litre HDPE water storage tank with lid.',
    fullDescription:
      'Food-grade HDPE vertical water storage tank, 500-litre capacity. UV-stabilised with anti-algae treatment. Includes inlet, outlet, and overflow fittings. For rooftop and ground installation.',
    availability: 'in_stock',
    featured: false,
    tags: ['water tank', 'HDPE tank', 'storage tank'],
    seo: {
      title: 'Plastic Water Tank 500L Dubai | Urban Choice',
      description: 'Buy water storage tanks in Dubai UAE.',
      keywords: ['water tank Dubai', '500L tank UAE'],
    },
  },
  {
    id: 'prod-048',
    name: 'Flexible Hose (1/2" × 500 mm)',
    slug: 'flexible-hose-500mm',
    category: 'plumbing-items',
    subcategory: 'hoses-clamps',
    images: [
      img(
        'https://images.unsplash.com/photo-1598023707207-276835c2b5fe?w=600',
        'Stainless steel flexible hose connector',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1598023707207-276835c2b5fe?w=600',
      'Flexible Hose 500mm',
    ),
    shortDescription: 'SS braided flexible hose 1/2" × 500 mm for sanitary connections.',
    fullDescription:
      'Stainless steel braided flexible connector, 1/2" female-female, 500 mm length. EPDM inner liner rated for hot and cold water. For connecting basins, WCs, and kitchen mixers.',
    availability: 'in_stock',
    featured: false,
    tags: ['flexible hose', 'braided hose', 'plumbing connector'],
    seo: {
      title: 'Flexible Hose 500mm Dubai | Urban Choice',
      description: 'Buy flexible hoses and plumbing connectors in Dubai UAE.',
      keywords: ['flexible hose Dubai', 'braided hose UAE'],
    },
  },
  {
    id: 'prod-049',
    name: 'Pipe Clamp (25 mm)',
    slug: 'pipe-clamp-25mm',
    category: 'plumbing-items',
    subcategory: 'hoses-clamps',
    images: [
      img(
        'https://images.unsplash.com/photo-1678734471015-c029a4d57fe7?w=600',
        'Pipe clamp bracket galvanised steel',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1678734471015-c029a4d57fe7?w=600',
      'Pipe Clamp 25mm',
    ),
    shortDescription: '25 mm galvanised pipe clamp for wall mounting.',
    fullDescription:
      'Galvanised steel single-bolt pipe clamp for 25 mm OD pipes. Backing plate with two fixing holes. Corrosion-resistant for indoor and outdoor use. Pack of 10.',
    availability: 'in_stock',
    featured: false,
    tags: ['pipe clamp', 'pipe support', 'plumbing bracket'],
    seo: {
      title: 'Pipe Clamp 25mm Dubai | Urban Choice',
      description: 'Buy pipe clamps and supports in Dubai UAE.',
      keywords: ['pipe clamp Dubai', 'pipe support UAE'],
    },
  },
  {
    id: 'prod-050',
    name: 'Toilet Fill Valve (Universal)',
    slug: 'toilet-fill-valve-universal',
    category: 'plumbing-items',
    subcategory: 'fittings-valves',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1664391622559-14be7d68ceff?w=600',
        'Toilet cistern fill valve float',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1664391622559-14be7d68ceff?w=600',
      'Toilet Fill Valve',
    ),
    shortDescription: 'Universal adjustable toilet fill valve with anti-syphon.',
    fullDescription:
      'Universal side-entry fill valve for toilet cisterns. Adjustable height 90–250 mm. Anti-syphon approved. Fits most standard WC cisterns. Quick and tool-free installation.',
    availability: 'in_stock',
    featured: false,
    tags: ['fill valve', 'toilet valve', 'cistern valve'],
    seo: {
      title: 'Toilet Fill Valve Dubai | Urban Choice',
      description: 'Buy toilet fill valves and cistern parts in Dubai UAE.',
      keywords: ['toilet fill valve Dubai', 'cistern valve UAE'],
    },
  },

  // ── BUILDING MATERIALS ────────────────────────────────────────────────────
  {
    id: 'prod-051',
    name: 'Portland Cement (50 kg)',
    slug: 'portland-cement-50kg',
    category: 'building-materials',
    subcategory: 'concrete-masonry',
    images: [
      img(
        'https://images.unsplash.com/photo-1730627283177-f43b83c3850c?w=600',
        'Portland cement bags construction',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1730627283177-f43b83c3850c?w=600',
      'Portland Cement 50kg',
    ),
    shortDescription: 'OPC 52.5N Portland cement, 50 kg bag, Dubai Municipality approved.',
    fullDescription:
      'Ordinary Portland Cement (OPC) Grade 52.5N, 50 kg bag. Dubai Municipality and BS EN 197-1 compliant. For concrete mixes, mortar, plaster, and general construction.',
    availability: 'in_stock',
    featured: false,
    tags: ['cement', 'Portland cement', 'OPC', 'building material'],
    seo: {
      title: 'Portland Cement 50kg Dubai | Urban Choice',
      description: 'Buy Portland cement in Dubai UAE for construction projects.',
      keywords: ['cement Dubai', 'OPC cement UAE', 'Portland cement Dubai'],
    },
  },
  {
    id: 'prod-052',
    name: 'Concrete Hollow Block (200 mm)',
    slug: 'concrete-hollow-block-200mm',
    category: 'building-materials',
    subcategory: 'concrete-masonry',
    images: [
      img(
        'https://images.unsplash.com/photo-1657007508392-d68322544f70?w=600',
        'Concrete hollow block masonry',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1657007508392-d68322544f70?w=600',
      'Hollow Block 200mm',
    ),
    shortDescription: '200 × 200 × 400 mm hollow concrete block, load-bearing.',
    fullDescription:
      'Standard load-bearing hollow concrete block, 200 × 200 × 400 mm. Meets Dubai Municipality and BS 6073 standards. Suitable for external and internal walls.',
    availability: 'in_stock',
    featured: false,
    tags: ['hollow block', 'concrete block', 'masonry'],
    seo: {
      title: 'Concrete Hollow Block 200mm Dubai | Urban Choice',
      description: 'Buy concrete hollow blocks in Dubai UAE.',
      keywords: ['hollow block Dubai', 'concrete block UAE'],
    },
  },
  {
    id: 'prod-053',
    name: 'Steel Rebar (12 mm)',
    slug: 'steel-rebar-12mm',
    category: 'building-materials',
    subcategory: 'steel-structural',
    images: [
      img(
        'https://images.unsplash.com/photo-1623428454598-1bfe414bac03?w=600',
        'Steel rebar reinforcement bars',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1623428454598-1bfe414bac03?w=600',
      'Steel Rebar 12mm',
    ),
    shortDescription: 'Grade 60 deformed steel rebar, 12 mm, 12 m length.',
    fullDescription:
      'Hot-rolled deformed steel reinforcing bar, Grade 60 (420 MPa yield). 12 mm diameter, 12 m lengths. Dubai Municipality approved. For reinforced concrete slabs, columns, and beams.',
    availability: 'in_stock',
    featured: false,
    tags: ['steel rebar', 'reinforcement', 'structural steel'],
    seo: {
      title: 'Steel Rebar 12mm Dubai | Urban Choice',
      description: 'Buy steel rebar and reinforcement bars in Dubai UAE.',
      keywords: ['steel rebar Dubai', 'rebar UAE', 'reinforcement bar Dubai'],
    },
  },
  {
    id: 'prod-054',
    name: 'Gypsum Board (12.5 mm)',
    slug: 'gypsum-board-12-5mm',
    category: 'building-materials',
    subcategory: 'boards-insulation',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1681589434478-b3122f353b44?w=600',
        'Gypsum plasterboard sheets',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1681589434478-b3122f353b44?w=600',
      'Gypsum Board 12.5mm',
    ),
    shortDescription: 'Standard gypsum board 12.5 mm × 1200 × 2400 mm.',
    fullDescription:
      'Standard plasterboard (12.5 mm thick, 1200 × 2400 mm). BS EN 520 Type A. For interior partition walls, ceilings, and dry-lining. Easy to cut, fix, and finish.',
    availability: 'in_stock',
    featured: false,
    tags: ['gypsum board', 'plasterboard', 'drywall', 'partition'],
    seo: {
      title: 'Gypsum Board 12.5mm Dubai | Urban Choice',
      description: 'Buy gypsum boards and plasterboards in Dubai UAE.',
      keywords: ['gypsum board Dubai', 'plasterboard UAE'],
    },
  },
  {
    id: 'prod-055',
    name: 'Rock Wool Insulation (50 mm)',
    slug: 'rock-wool-insulation-50mm',
    category: 'building-materials',
    subcategory: 'boards-insulation',
    images: [
      img(
        'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600',
        'Rock wool mineral wool insulation slab',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600',
      'Rock Wool Insulation 50mm',
    ),
    shortDescription: '50 mm rock wool slab, thermal and acoustic insulation.',
    fullDescription:
      'Semi-rigid mineral wool (rock wool) slab, 50 mm thick, 600 × 1000 mm. Fire-resistant, thermal conductivity λ = 0.035 W/mK. For walls, roofs, and acoustic partitions.',
    availability: 'in_stock',
    featured: false,
    tags: ['rock wool', 'insulation', 'thermal insulation', 'acoustic'],
    seo: {
      title: 'Rock Wool Insulation 50mm Dubai | Urban Choice',
      description: 'Buy rock wool and insulation materials in Dubai UAE.',
      keywords: ['rock wool Dubai', 'insulation UAE'],
    },
  },
  {
    id: 'prod-056',
    name: 'Waterproofing Membrane (APP)',
    slug: 'waterproofing-membrane-app',
    category: 'building-materials',
    subcategory: 'waterproofing-adhesives',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1754344833335-ac49dbd78442?w=600',
        'APP waterproofing membrane torch applied',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1754344833335-ac49dbd78442?w=600',
      'APP Waterproofing Membrane',
    ),
    shortDescription: 'APP modified bitumen torch-on waterproofing membrane, 4 mm.',
    fullDescription:
      'APP (atactic polypropylene) modified bitumen waterproofing membrane, 4 mm thick, 1 × 10 m roll. Torch-applied to roofs, terraces, and underground structures.',
    availability: 'in_stock',
    featured: false,
    tags: ['waterproofing', 'bitumen membrane', 'APP membrane', 'roofing'],
    seo: {
      title: 'APP Waterproofing Membrane Dubai | Urban Choice',
      description: 'Buy waterproofing membranes in Dubai UAE.',
      keywords: ['waterproofing membrane Dubai', 'APP membrane UAE'],
    },
  },
  {
    id: 'prod-057',
    name: 'Tile Adhesive (C2)',
    slug: 'tile-adhesive-c2',
    category: 'building-materials',
    subcategory: 'waterproofing-adhesives',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1664301210513-76167b070179?w=600',
        'Tile adhesive cement bag',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1664301210513-76167b070179?w=600',
      'C2 Tile Adhesive',
    ),
    shortDescription: 'C2TE class tile adhesive for floor and wall tiles, 25 kg.',
    fullDescription:
      'Cementitious C2TE class polymer-improved tile adhesive. 25 kg bag. Suitable for ceramic, porcelain, and natural stone tiles on floors and walls. Extended open time of 30 minutes.',
    availability: 'in_stock',
    featured: false,
    tags: ['tile adhesive', 'tile fix', 'adhesive', 'building material'],
    seo: {
      title: 'Tile Adhesive C2 Dubai | Urban Choice',
      description: 'Buy tile adhesives and fixing mortars in Dubai UAE.',
      keywords: ['tile adhesive Dubai', 'tile fix UAE'],
    },
  },
  {
    id: 'prod-058',
    name: 'Angle Bead (3 m)',
    slug: 'angle-bead-3m',
    category: 'building-materials',
    subcategory: 'steel-structural',
    images: [
      img(
        'https://images.unsplash.com/photo-1701788607416-f1b5dd5a09ec?w=600',
        'Metal angle bead plastering',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1701788607416-f1b5dd5a09ec?w=600',
      'Angle Bead 3m',
    ),
    shortDescription: 'Galvanised steel angle bead for plastering corners, 3 m.',
    fullDescription:
      'Galvanised steel external corner bead, 3 m length. Reinforces plasterwork corners to prevent chipping and cracking. Easy to cut and fix with staples or plaster dots.',
    availability: 'in_stock',
    featured: false,
    tags: ['angle bead', 'corner bead', 'plastering', 'galvanised'],
    seo: {
      title: 'Angle Bead 3m Dubai | Urban Choice',
      description: 'Buy angle beads and plastering accessories in Dubai UAE.',
      keywords: ['angle bead Dubai', 'corner bead UAE'],
    },
  },
  {
    id: 'prod-059',
    name: 'Tile Grout (Flexible)',
    slug: 'tile-grout-flexible',
    category: 'building-materials',
    subcategory: 'waterproofing-adhesives',
    images: [
      img(
        'https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=600',
        'Tile grout bag joint filler',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=600',
      'Flexible Tile Grout',
    ),
    shortDescription: 'Flexible polymer grout for joints up to 10 mm, 5 kg.',
    fullDescription:
      'Polymer-modified flexible grout for tile joints up to 10 mm. Water-resistant and resistant to shrinkage cracking. 5 kg bag. Available in multiple colours.',
    availability: 'in_stock',
    featured: false,
    tags: ['tile grout', 'grout', 'tile joint filler'],
    seo: {
      title: 'Flexible Tile Grout Dubai | Urban Choice',
      description: 'Buy tile grout and joint fillers in Dubai UAE.',
      keywords: ['tile grout Dubai', 'grout UAE'],
    },
  },
  {
    id: 'prod-060',
    name: 'Ready-Mix Plaster (25 kg)',
    slug: 'ready-mix-plaster-25kg',
    category: 'building-materials',
    subcategory: 'concrete-masonry',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1681589434432-6dbf2657766e?w=600',
        'Ready mix plaster bag',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1681589434432-6dbf2657766e?w=600',
      'Ready Mix Plaster 25kg',
    ),
    shortDescription: 'Cement-based ready-mix interior plaster, 25 kg bag.',
    fullDescription:
      'Factory-blended cement and aggregate ready-mix plaster for interior walls and ceilings. 25 kg bag. Smooth finish, crack-resistant. Just add water and mix.',
    availability: 'in_stock',
    featured: false,
    tags: ['plaster', 'ready mix', 'wall plaster', 'building material'],
    seo: {
      title: 'Ready-Mix Plaster 25kg Dubai | Urban Choice',
      description: 'Buy ready-mix plaster in Dubai UAE.',
      keywords: ['ready mix plaster Dubai', 'wall plaster UAE'],
    },
  },

  // ── FASTENERS ─────────────────────────────────────────────────────────────
  {
    id: 'prod-061',
    name: 'Hex Bolt Set (M8–M16)',
    slug: 'hex-bolt-set-m8-m16',
    category: 'fasteners',
    subcategory: 'bolts-nuts',
    images: [
      img(
        'https://images.unsplash.com/photo-1605701249987-f0bb9b505d06?w=600',
        'Assorted hex bolts stainless steel',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1605701249987-f0bb9b505d06?w=600',
      'Hex Bolt Set',
    ),
    shortDescription: 'Grade 8.8 zinc hex bolts and nuts set, M8–M16, 100 pcs.',
    fullDescription:
      'Assorted set of 100 Grade 8.8 zinc-plated hex bolts and matching nuts in sizes M8 × 30, M10 × 40, M12 × 50, and M16 × 60. Stored in a divided metal case.',
    availability: 'in_stock',
    featured: false,
    tags: ['hex bolts', 'fasteners', 'bolts set'],
    seo: {
      title: 'Hex Bolt Set M8–M16 Dubai | Urban Choice',
      description: 'Buy hex bolts and fastener sets in Dubai UAE.',
      keywords: ['hex bolts Dubai', 'fasteners UAE'],
    },
  },
  {
    id: 'prod-062',
    name: 'Stainless Steel Nuts (M10)',
    slug: 'stainless-steel-nuts-m10',
    category: 'fasteners',
    subcategory: 'bolts-nuts',
    images: [
      img(
        'https://images.unsplash.com/photo-1597066157837-5084c251fa34?w=600',
        'Stainless steel hex nuts M10',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1597066157837-5084c251fa34?w=600',
      'SS Nuts M10',
    ),
    shortDescription: 'M10 A2 stainless steel hex nuts, DIN 934, pack of 50.',
    fullDescription:
      'M10 grade A2 (304) stainless steel hex nuts to DIN 934. Pack of 50. Corrosion-resistant for outdoor and marine applications.',
    availability: 'in_stock',
    featured: false,
    tags: ['nuts', 'hex nuts', 'stainless steel', 'M10'],
    seo: {
      title: 'Stainless Steel Nuts M10 Dubai | Urban Choice',
      description: 'Buy stainless steel nuts and fasteners in Dubai UAE.',
      keywords: ['hex nuts Dubai', 'SS nuts UAE'],
    },
  },
  {
    id: 'prod-063',
    name: 'Flat Washers (M12)',
    slug: 'flat-washers-m12',
    category: 'fasteners',
    subcategory: 'bolts-nuts',
    images: [
      img(
        'https://images.unsplash.com/photo-1673833114586-f951168be369?w=600',
        'Flat washers assorted sizes',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1673833114586-f951168be369?w=600 ',
      'Flat Washers M12',
    ),
    shortDescription: 'M12 zinc-plated flat washers, DIN 125, pack of 100.',
    fullDescription:
      'M12 zinc-plated mild steel flat washers to DIN 125A. Pack of 100. For load distribution under bolt heads and nuts.',
    availability: 'in_stock',
    featured: false,
    tags: ['washers', 'flat washers', 'M12', 'fasteners'],
    seo: {
      title: 'Flat Washers M12 Dubai | Urban Choice',
      description: 'Buy flat washers and fasteners in Dubai UAE.',
      keywords: ['flat washers Dubai', 'washers UAE'],
    },
  },
  {
    id: 'prod-064',
    name: 'Self-Tapping Screws (4.2 × 38 mm)',
    slug: 'self-tapping-screws-4-2x38',
    category: 'fasteners',
    subcategory: 'screws',
    images: [
      img(
        'https://images.unsplash.com/photo-1655927858183-fe31d5dd1080?w=600',
        'Self tapping screws with box',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1655927858183-fe31d5dd1080?w=600',
      'Self-Tapping Screws',
    ),
    shortDescription: 'Zinc self-tapping hex head screws 4.2 × 38 mm, box of 200.',
    fullDescription:
      'Zinc-plated carbon steel self-drilling hex head screws, 4.2 × 38 mm with bonded washer. Box of 200. For fixing to steel purlins, roofing, and cladding.',
    availability: 'in_stock',
    featured: false,
    tags: ['self-tapping screws', 'screws', 'tek screws'],
    seo: {
      title: 'Self-Tapping Screws Dubai | Urban Choice',
      description: 'Buy self-tapping screws and fasteners in Dubai UAE.',
      keywords: ['self-tapping screws Dubai', 'tek screws UAE'],
    },
  },
  {
    id: 'prod-065',
    name: 'Drywall Screws (3.5 × 35 mm)',
    slug: 'drywall-screws-3-5x35',
    category: 'fasteners',
    subcategory: 'screws',
    images: [
      img(
        'https://images.unsplash.com/photo-1703777607612-3b6b210c3adf?w=600',
        'Drywall screws bugle head',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1703777607612-3b6b210c3adf?w=600',
      'Drywall Screws',
    ),
    shortDescription: 'Coarse thread drywall screws 3.5 × 35 mm, box of 500.',
    fullDescription:
      'Black phosphate bugle-head drywall screws, coarse thread, 3.5 × 35 mm. Box of 500. For fixing gypsum board to steel or timber frames.',
    availability: 'in_stock',
    featured: false,
    tags: ['drywall screws', 'screws', 'gypsum screws'],
    seo: {
      title: 'Drywall Screws 3.5×35mm Dubai | Urban Choice',
      description: 'Buy drywall screws and gypsum board fixings in Dubai UAE.',
      keywords: ['drywall screws Dubai', 'gypsum screws UAE'],
    },
  },
  {
    id: 'prod-066',
    name: 'Anchor Bolt (M10 × 80 mm)',
    slug: 'anchor-bolt-m10-80mm',
    category: 'fasteners',
    subcategory: 'anchors-rods',
    images: [
      img(
        'https://images.unsplash.com/photo-1704732061018-3ac738176c20?w=600',
        'Expansion anchor bolts concrete',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1704732061018-3ac738176c20?w=600',
      'Anchor Bolt M10',
    ),
    shortDescription: 'Zinc M10 × 80 mm expansion anchor bolt, pack of 20.',
    fullDescription:
      'Zinc-plated carbon steel sleeve anchor bolt M10 × 80 mm. Pack of 20. For anchoring in concrete, brick, and solid masonry. Installation torque 25 Nm.',
    availability: 'in_stock',
    featured: false,
    tags: ['anchor bolt', 'expansion anchor', 'concrete anchor'],
    seo: {
      title: 'Anchor Bolt M10 Dubai | Urban Choice',
      description: 'Buy anchor bolts and concrete fixings in Dubai UAE.',
      keywords: ['anchor bolt Dubai', 'expansion anchor UAE'],
    },
  },
  {
    id: 'prod-067',
    name: 'Threaded Rod (M12 × 1 m)',
    slug: 'threaded-rod-m12-1m',
    category: 'fasteners',
    subcategory: 'anchors-rods',
    images: [
      img(
        'https://images.unsplash.com/photo-1712003752927-d4d14921f96a?w=600',
        'Threaded rod steel 1 metre',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1712003752927-d4d14921f96a?w=600',
      'Threaded Rod M12',
    ),
    shortDescription: 'M12 zinc-plated threaded rod, 1 m length, Grade 4.8.',
    fullDescription:
      'M12 Grade 4.8 zinc-plated full-length threaded rod, 1 m. Cut to required length. For pipe hangers, framing, anchoring equipment, and structural connections.',
    availability: 'in_stock',
    featured: false,
    tags: ['threaded rod', 'all-thread', 'fasteners'],
    seo: {
      title: 'Threaded Rod M12 1m Dubai | Urban Choice',
      description: 'Buy threaded rods and fasteners in Dubai UAE.',
      keywords: ['threaded rod Dubai', 'all-thread UAE'],
    },
  },
  {
    id: 'prod-068',
    name: 'Pop Rivets (4 × 10 mm)',
    slug: 'pop-rivets-4x10mm',
    category: 'fasteners',
    subcategory: 'rivets',
    images: [
      img(
        'https://images.unsplash.com/photo-1758345680667-bd6008f4021b?w=600',
        'Pop rivets assorted aluminium',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1758345680667-bd6008f4021b?w=600',
      'Pop Rivets 4×10mm',
    ),
    shortDescription: 'Aluminium pop rivets 4 × 10 mm, box of 500.',
    fullDescription:
      'Open-end aluminium pop rivets (blind rivets), 4 × 10 mm. Box of 500. For joining sheet metal, aluminium profiles, and cladding panels. Requires a rivet gun.',
    availability: 'in_stock',
    featured: false,
    tags: ['pop rivets', 'blind rivets', 'aluminium rivets'],
    seo: {
      title: 'Pop Rivets 4×10mm Dubai | Urban Choice',
      description: 'Buy pop rivets and blind rivets in Dubai UAE.',
      keywords: ['pop rivets Dubai', 'blind rivets UAE'],
    },
  },
  {
    id: 'prod-069',
    name: 'U-Bolt (25 mm Pipe)',
    slug: 'u-bolt-25mm',
    category: 'fasteners',
    subcategory: 'bolts-nuts',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1673930709381-1c4ed88abe3c?w=600',
        'Galvanised U-bolt pipe clamp',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1673930709381-1c4ed88abe3c?w=600',
      'U-Bolt 25mm',
    ),
    shortDescription: 'Galvanised U-bolt for 25 mm pipe with backing plate and nuts.',
    fullDescription:
      'Galvanised steel U-bolt sized for 25 mm OD pipe. Includes backing plate and two M8 hex nuts. For pipe hanging and support in plumbing and mechanical installations.',
    availability: 'in_stock',
    featured: false,
    tags: ['U-bolt', 'pipe support', 'galvanised'],
    seo: {
      title: 'U-Bolt 25mm Dubai | Urban Choice',
      description: 'Buy U-bolts and pipe supports in Dubai UAE.',
      keywords: ['U-bolt Dubai', 'pipe support UAE'],
    },
  },
  {
    id: 'prod-070',
    name: 'Eye Bolt (M10)',
    slug: 'eye-bolt-m10',
    category: 'fasteners',
    subcategory: 'anchors-rods',
    images: [
      img(
        'https://images.unsplash.com/photo-1761129129986-feb1ed224733?w=600',
        'Eye bolt lifting ring stainless steel',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1761129129986-feb1ed224733?w=600',
      'Eye Bolt M10',
    ),
    shortDescription: 'M10 stainless steel eye bolt, 316 grade, WLL 0.2T.',
    fullDescription:
      'M10 × 60 mm 316 stainless steel eye bolt with collar. WLL 0.2T (axial load). DIN 580. For rigging, hoisting, and anchor points. Includes M10 nut.',
    availability: 'in_stock',
    featured: false,
    tags: ['eye bolt', 'lifting eye', 'stainless steel'],
    seo: {
      title: 'Eye Bolt M10 Dubai | Urban Choice',
      description: 'Buy eye bolts and lifting hardware in Dubai UAE.',
      keywords: ['eye bolt Dubai', 'lifting eye UAE'],
    },
  },

  // ── POWER TOOLS ───────────────────────────────────────────────────────────
  {
    id: 'prod-071',
    name: 'Electric Drill (750W)',
    slug: 'electric-drill-750w',
    category: 'power-tools',
    subcategory: 'drilling-grinding',
    images: [
      img(
        'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600',
        'Electric corded drill 750W',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600',
      'Electric Drill 750W',
    ),
    shortDescription: '750W corded drill, 13 mm chuck, variable speed.',
    fullDescription:
      '750W corded electric drill with 13 mm keyless chuck. Variable speed 0–2800 RPM. Reverse function. Suitable for drilling wood, metal, and masonry. Ergonomic soft-grip handle.',
    availability: 'in_stock',
    featured: false,
    tags: ['electric drill', 'corded drill', 'power tool'],
    seo: {
      title: 'Electric Drill 750W Dubai | Urban Choice',
      description: 'Buy electric drills and power tools in Dubai UAE.',
      keywords: ['electric drill Dubai', 'corded drill UAE'],
    },
  },
  {
    id: 'prod-072',
    name: 'Angle Grinder (4.5 Inch, 850W)',
    slug: 'angle-grinder-4-5-inch',
    category: 'power-tools',
    subcategory: 'drilling-grinding',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1675508139501-5312e9b51e27?w=600',
        'Angle grinder 4.5 inch 850W',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1675508139501-5312e9b51e27?w=600',
      'Angle Grinder 4.5"',
    ),
    shortDescription: '4.5" 850W angle grinder with safety guard, 11,000 RPM.',
    fullDescription:
      '850W 4.5-inch (115 mm) angle grinder. No-load speed 11,000 RPM. Spindle lock for quick disc changes. 2-position side handle. Safety guard included. For grinding and cutting metal.',
    availability: 'in_stock',
    featured: true,
    tags: ['angle grinder', 'grinder', 'power tool'],
    seo: {
      title: 'Angle Grinder 4.5" Dubai | Urban Choice',
      description: 'Buy angle grinders and power tools in Dubai UAE.',
      keywords: ['angle grinder Dubai', 'grinder UAE'],
    },
  },
  {
    id: 'prod-073',
    name: 'Hammer Drill (800W SDS)',
    slug: 'hammer-drill-800w-sds',
    category: 'power-tools',
    subcategory: 'drilling-grinding',
    images: [
      img(
        'https://images.unsplash.com/photo-1592054286113-649ba108e968?w=600',
        'SDS hammer drill 800W',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1592054286113-649ba108e968?w=600',
      'SDS Hammer Drill 800W',
    ),
    shortDescription: '800W SDS-plus rotary hammer drill with chisel function.',
    fullDescription:
      '800W SDS-plus rotary hammer drill with 3 modes: drilling, hammer drilling, and chiselling. 2.7 J impact energy. Ideal for drilling concrete and masonry.',
    availability: 'in_stock',
    featured: false,
    tags: ['hammer drill', 'SDS drill', 'rotary hammer'],
    seo: {
      title: 'SDS Hammer Drill 800W Dubai | Urban Choice',
      description: 'Buy SDS hammer drills and power tools in Dubai UAE.',
      keywords: ['hammer drill Dubai', 'SDS drill UAE'],
    },
  },
  {
    id: 'prod-074',
    name: 'Circular Saw (185 mm, 1400W)',
    slug: 'circular-saw-185mm',
    category: 'power-tools',
    subcategory: 'cutting',
    images: [
      img(
        'https://images.unsplash.com/photo-1513467655676-561b7d489a88?w=600',
        'Circular saw 185mm blade 1400W',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1513467655676-561b7d489a88?w=600',
      'Circular Saw 185mm',
    ),
    shortDescription: '1400W circular saw, 185 mm blade, 5500 RPM.',
    fullDescription:
      '1400W circular saw with 185 mm TCT blade. No-load speed 5500 RPM. 45° bevel cut. Rip fence included. Laser guide for accurate cuts in timber, plywood, and MDF.',
    availability: 'in_stock',
    featured: false,
    tags: ['circular saw', 'saw', 'cutting tool', 'power tool'],
    seo: {
      title: 'Circular Saw 185mm Dubai | Urban Choice',
      description: 'Buy circular saws and power tools in Dubai UAE.',
      keywords: ['circular saw Dubai', 'power saw UAE'],
    },
  },
  {
    id: 'prod-075',
    name: 'Jigsaw (700W)',
    slug: 'jigsaw-700w',
    category: 'power-tools',
    subcategory: 'cutting',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1726848026939-1ed689fed474?w=600',
        'Electric jigsaw 700W tool',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1726848026939-1ed689fed474?w=600',
      'Jigsaw 700W',
    ),
    shortDescription: '700W jigsaw with pendulum action, 4 orbital settings.',
    fullDescription:
      '700W corded jigsaw with 4-stage pendulum action for faster cutting. Variable speed 0–3000 SPM. Tool-free blade change. Cuts wood (85 mm), metal (8 mm), and plastic.',
    availability: 'in_stock',
    featured: false,
    tags: ['jigsaw', 'cutting tool', 'power tool'],
    seo: {
      title: 'Jigsaw 700W Dubai | Urban Choice',
      description: 'Buy jigsaws and cutting tools in Dubai UAE.',
      keywords: ['jigsaw Dubai', 'electric jigsaw UAE'],
    },
  },
  {
    id: 'prod-076',
    name: 'MIG Welding Machine (160A)',
    slug: 'mig-welding-machine-160a',
    category: 'power-tools',
    subcategory: 'welding-compressors',
    images: [
      img(
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600',
        'MIG welding machine 160A',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600',
      'MIG Welder 160A',
    ),
    shortDescription: '160A MIG/MAG inverter welder with wire feed, 220V.',
    fullDescription:
      'Inverter-based 160A MIG/MAG welding machine. Continuous wire feed, adjustable voltage and wire speed. 220V single phase. For welding mild steel, stainless steel, and aluminium (with optional kit).',
    availability: 'in_stock',
    featured: false,
    tags: ['MIG welder', 'welding machine', 'inverter welder'],
    seo: {
      title: 'MIG Welding Machine 160A Dubai | Urban Choice',
      description: 'Buy MIG welding machines and welding equipment in Dubai UAE.',
      keywords: ['welding machine Dubai', 'MIG welder UAE'],
    },
  },
  {
    id: 'prod-077',
    name: 'Air Compressor (24L, 1.5 HP)',
    slug: 'air-compressor-24l',
    category: 'power-tools',
    subcategory: 'welding-compressors',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1682147307418-07ad7e897bc9?w=600',
        'Air compressor 24 litre tank',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1682147307418-07ad7e897bc9?w=600',
      'Air Compressor 24L',
    ),
    shortDescription: '1.5 HP oil-free air compressor, 24 L tank, 8 bar.',
    fullDescription:
      '1.5 HP oil-free portable air compressor with 24 L tank. Max 8 bar pressure, free air delivery 140 L/min. Low noise design. Includes 5 m hose and inflation accessories.',
    availability: 'in_stock',
    featured: false,
    tags: ['air compressor', 'compressor', 'pneumatic'],
    seo: {
      title: 'Air Compressor 24L Dubai | Urban Choice',
      description: 'Buy air compressors in Dubai UAE.',
      keywords: ['air compressor Dubai', 'compressor UAE'],
    },
  },
  {
    id: 'prod-078',
    name: 'Pressure Washer (1600W)',
    slug: 'pressure-washer-1600w',
    category: 'power-tools',
    subcategory: 'cleaning-other',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1682142564647-6f4396a34d02?w=600',
        'Pressure washer 1600W high pressure',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1682142564647-6f4396a34d02?w=600',
      'Pressure Washer 1600W',
    ),
    shortDescription: '1600W electric pressure washer, 135 bar, 480 L/h.',
    fullDescription:
      '1600W high-pressure washer with 135 bar working pressure and 480 L/h flow rate. 5 m high-pressure hose, spray gun, and 3 nozzles (0°, 25°, soap). For vehicles, patios, and site cleaning.',
    availability: 'in_stock',
    featured: false,
    tags: ['pressure washer', 'power washer', 'cleaning tool'],
    seo: {
      title: 'Pressure Washer 1600W Dubai | Urban Choice',
      description: 'Buy pressure washers in Dubai UAE.',
      keywords: ['pressure washer Dubai', 'power washer UAE'],
    },
  },
  {
    id: 'prod-079',
    name: 'Heat Gun (2000W)',
    slug: 'heat-gun-2000w',
    category: 'power-tools',
    subcategory: 'cleaning-other',
    images: [
      img(
        'https://images.unsplash.com/photo-1755255020791-da74dc425c0e?w=600',
        'Electric heat gun 2000W',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1755255020791-da74dc425c0e?w=600',
      'Heat Gun 2000W',
    ),
    shortDescription: '2000W heat gun, 50–600°C, 2-speed fan.',
    fullDescription:
      '2000W variable temperature heat gun with 2-speed fan. Temperature range 50–600°C. Includes 3 nozzle attachments. For paint stripping, PVC shrinking, pipe bending, and torch-on membranes.',
    availability: 'in_stock',
    featured: false,
    tags: ['heat gun', 'hot air gun', 'power tool'],
    seo: {
      title: 'Heat Gun 2000W Dubai | Urban Choice',
      description: 'Buy heat guns and power tools in Dubai UAE.',
      keywords: ['heat gun Dubai', 'hot air gun UAE'],
    },
  },
  {
    id: 'prod-080',
    name: 'Impact Wrench (1/2" Drive)',
    slug: 'impact-wrench-half-inch',
    category: 'power-tools',
    subcategory: 'cleaning-other',
    images: [
      img(
        'https://images.unsplash.com/photo-1776711763505-4105861e0d41?w=600',
        'Corded impact wrench 1/2 inch',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1776711763505-4105861e0d41?w=600',
      'Impact Wrench 1/2"',
    ),
    shortDescription: '700W corded impact wrench, 1/2" drive, 400 Nm torque.',
    fullDescription:
      '700W corded 1/2" drive impact wrench delivering 400 Nm max torque. Variable speed trigger and forward/reverse. For automotive fastening and heavy structural bolts.',
    availability: 'in_stock',
    featured: false,
    tags: ['impact wrench', 'electric wrench', 'power tool'],
    seo: {
      title: 'Impact Wrench 1/2" Dubai | Urban Choice',
      description: 'Buy impact wrenches and power tools in Dubai UAE.',
      keywords: ['impact wrench Dubai', 'electric wrench UAE'],
    },
  },

  // ── PAINTS & PAINT TOOLS ──────────────────────────────────────────────────
  {
    id: 'prod-081',
    name: 'Interior Emulsion Paint (White, 18L)',
    slug: 'interior-emulsion-paint-white-18l',
    category: 'paints-paint-tools',
    subcategory: 'paints-coatings',
    images: [
      img(
        'https://images.unsplash.com/photo-1621685682093-3b8016dcb57d?w=600',
        'White interior emulsion paint 18 litre',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1621685682093-3b8016dcb57d?w=600',
      'Interior Emulsion Paint 18L',
    ),
    shortDescription: 'White matt interior emulsion paint, washable, 18L.',
    fullDescription:
      'Water-based matt interior emulsion paint, brilliant white. Washable finish, low VOC, excellent coverage (12–14 m²/L). Suitable for walls and ceilings. 18-litre pail.',
    availability: 'in_stock',
    featured: false,
    tags: ['emulsion paint', 'interior paint', 'white paint'],
    seo: {
      title: 'Interior Emulsion Paint 18L Dubai | Urban Choice',
      description: 'Buy interior emulsion paint in Dubai UAE.',
      keywords: ['emulsion paint Dubai', 'interior paint UAE'],
    },
  },
  {
    id: 'prod-082',
    name: 'Exterior Masonry Paint (5L)',
    slug: 'exterior-masonry-paint-5l',
    category: 'paints-paint-tools',
    subcategory: 'paints-coatings',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1726826693849-208029303ce0?w=600',
        'Exterior masonry paint 5 litre',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1726826693849-208029303ce0?w=600',
      'Exterior Masonry Paint 5L',
    ),
    shortDescription: 'Weatherproof exterior masonry paint, 5L, multiple colours.',
    fullDescription:
      'Alkali-resistant weatherproof exterior masonry paint. UV-stable, fungicide treated for UAE climate. Coverage 8–10 m²/L. 5-litre tin. Available in a range of colours.',
    availability: 'in_stock',
    featured: false,
    tags: ['exterior paint', 'masonry paint', 'weatherproof paint'],
    seo: {
      title: 'Exterior Masonry Paint 5L Dubai | Urban Choice',
      description: 'Buy exterior masonry paint in Dubai UAE.',
      keywords: ['exterior paint Dubai', 'masonry paint UAE'],
    },
  },
  {
    id: 'prod-083',
    name: 'Enamel Paint (1L)',
    slug: 'enamel-paint-1l',
    category: 'paints-paint-tools',
    subcategory: 'paints-coatings',
    images: [
      img(
        'https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?w=600',
        'Gloss enamel paint tin 1 litre',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?w=600',
      'Enamel Paint 1L',
    ),
    shortDescription: 'High-gloss synthetic enamel paint, 1L, hard-wearing finish.',
    fullDescription:
      'Solvent-based high-gloss synthetic enamel paint, 1-litre tin. Durable and washable, suitable for metal, wood, and interior surfaces requiring a tough glossy finish.',
    availability: 'in_stock',
    featured: false,
    tags: ['enamel paint', 'gloss paint', 'paint'],
    seo: {
      title: 'Enamel Paint 1L Dubai | Urban Choice',
      description: 'Buy enamel paint and gloss paint in Dubai UAE.',
      keywords: ['enamel paint Dubai', 'gloss paint UAE'],
    },
  },
  {
    id: 'prod-084',
    name: 'Primer (White, 4L)',
    slug: 'primer-white-4l',
    category: 'paints-paint-tools',
    subcategory: 'paints-coatings',
    images: [
      img(
        'https://images.unsplash.com/photo-1585676737728-432f58d5fdba?w=600',
        'White primer paint 4 litre',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1585676737728-432f58d5fdba?w=600',
      'White Primer 4L',
    ),
    shortDescription: 'Water-based wall primer, 4L, for porous and new surfaces.',
    fullDescription:
      'Water-based PVA sealer and primer for new plaster, concrete, and masonry surfaces. Excellent penetration and adhesion. 4-litre tin. Coverage approximately 10–12 m²/L.',
    availability: 'in_stock',
    featured: false,
    tags: ['primer', 'wall primer', 'PVA sealer'],
    seo: {
      title: 'Wall Primer 4L Dubai | Urban Choice',
      description: 'Buy wall primer and paint primer in Dubai UAE.',
      keywords: ['primer Dubai', 'wall primer UAE'],
    },
  },
  {
    id: 'prod-085',
    name: 'Paint Roller Set (9 Inch)',
    slug: 'paint-roller-set-9-inch',
    category: 'paints-paint-tools',
    subcategory: 'application-tools',
    images: [
      img(
        'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600',
        'Paint roller 9 inch set with tray',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600',
      'Paint Roller Set 9"',
    ),
    shortDescription: '9-inch paint roller with handle, sleeve, and tray.',
    fullDescription:
      '9-inch (230 mm) polyester pile paint roller set. Includes roller frame, soft-grip extension handle, 2 sleeves (10 mm nap for smooth, 15 mm for textured), and plastic tray.',
    availability: 'in_stock',
    featured: false,
    tags: ['paint roller', 'roller set', 'painting tool'],
    seo: {
      title: 'Paint Roller Set 9 Inch Dubai | Urban Choice',
      description: 'Buy paint rollers and painting tools in Dubai UAE.',
      keywords: ['paint roller Dubai', 'roller set UAE'],
    },
  },
  {
    id: 'prod-086',
    name: 'Paint Brush Set (5-Piece)',
    slug: 'paint-brush-set-5-piece',
    category: 'paints-paint-tools',
    subcategory: 'application-tools',
    images: [
      img(
        'https://images.unsplash.com/photo-1591604960731-b4ea6463cdd3?w=600',
        'Paint brush set 5 piece sizes',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1591604960731-b4ea6463cdd3?w=600',
      'Paint Brush Set 5-Piece',
    ),
    shortDescription: 'Professional 5-piece paint brush set (1"–4" widths).',
    fullDescription:
      'Professional painter\'s brush set with 5 sizes: 1", 1.5", 2", 2.5", and 4". Synthetic filament for use with emulsion and water-based paints. Stainless steel ferrule and hardwood handles.',
    availability: 'in_stock',
    featured: false,
    tags: ['paint brush', 'brush set', 'painting tool'],
    seo: {
      title: 'Paint Brush Set Dubai | Urban Choice',
      description: 'Buy paint brushes and painting tools in Dubai UAE.',
      keywords: ['paint brush Dubai', 'brush set UAE'],
    },
  },
  {
    id: 'prod-087',
    name: 'Airless Paint Sprayer (450W)',
    slug: 'airless-paint-sprayer-450w',
    category: 'paints-paint-tools',
    subcategory: 'application-tools',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1663011251246-ea285a7bc40f?w=600',
        'Airless paint sprayer electric 450W',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1663011251246-ea285a7bc40f?w=600',
      'Airless Paint Sprayer 450W',
    ),
    shortDescription: '450W electric airless paint sprayer, 800 ml tank, adjustable spray.',
    fullDescription:
      '450W electric airless paint sprayer with 800 ml paint tank. Adjustable spray width and flow rate. Three spray patterns (horizontal, vertical, circular). For walls, ceilings, and fences.',
    availability: 'in_stock',
    featured: false,
    tags: ['paint sprayer', 'spray gun', 'airless sprayer'],
    seo: {
      title: 'Airless Paint Sprayer Dubai | Urban Choice',
      description: 'Buy paint sprayers and spray equipment in Dubai UAE.',
      keywords: ['paint sprayer Dubai', 'spray gun UAE'],
    },
  },
  {
    id: 'prod-088',
    name: 'Putty Knife Set (3-Piece)',
    slug: 'putty-knife-set-3-piece',
    category: 'paints-paint-tools',
    subcategory: 'preparation-tools',
    images: [
      img(
        'https://images.unsplash.com/photo-1717438615990-a22feeab1b0a?w=600',
        'Putty knife set 3 piece scraper',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1717438615990-a22feeab1b0a?w=600',
      'Putty Knife Set',
    ),
    shortDescription: '3-piece flexible putty knife set (1", 3", 5" blades).',
    fullDescription:
      'Set of 3 flexible putty knives with stainless steel blades in 1", 3", and 5" widths. Soft-grip handles. For applying and smoothing wall putty, filler, and plaster.',
    availability: 'in_stock',
    featured: false,
    tags: ['putty knife', 'scraper', 'preparation tool'],
    seo: {
      title: 'Putty Knife Set Dubai | Urban Choice',
      description: 'Buy putty knives and surface preparation tools in Dubai UAE.',
      keywords: ['putty knife Dubai', 'scraper UAE'],
    },
  },
  {
    id: 'prod-089',
    name: 'Sand Paper Assortment (40–400 Grit)',
    slug: 'sand-paper-assortment',
    category: 'paints-paint-tools',
    subcategory: 'preparation-tools',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1726862833054-00293641ffbc?w=600',
        'Sand paper sheets assorted grits',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1726862833054-00293641ffbc?w=600',
      'Sand Paper Assortment',
    ),
    shortDescription: '30-sheet sandpaper pack, grits 40–400, for hand sanding.',
    fullDescription:
      '30-sheet assorted sandpaper pack in 5 grits: 40, 80, 120, 240, and 400. Silicon carbide sheets (230 × 280 mm). For surface preparation before painting or finishing.',
    availability: 'in_stock',
    featured: false,
    tags: ['sandpaper', 'sand paper', 'abrasive', 'preparation'],
    seo: {
      title: 'Sand Paper Assortment Dubai | Urban Choice',
      description: 'Buy sandpaper and abrasives in Dubai UAE.',
      keywords: ['sandpaper Dubai', 'abrasive UAE'],
    },
  },
  {
    id: 'prod-090',
    name: 'Masking Tape (24 mm × 50 m)',
    slug: 'masking-tape-24mm',
    category: 'paints-paint-tools',
    subcategory: 'preparation-tools',
    images: [
      img(
        'https://images.unsplash.com/photo-1731575131896-c8bd19209358?w=600',
        'Masking tape roll 24mm yellow',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1731575131896-c8bd19209358?w=600',
      'Masking Tape 24mm',
    ),
    shortDescription: 'Yellow masking tape 24 mm × 50 m for paint masking.',
    fullDescription:
      'General purpose yellow masking tape, 24 mm × 50 m. Clean removal for up to 14 days. UV-resistant for outdoor use. Suitable for straight and curved line masking on walls and frames.',
    availability: 'in_stock',
    featured: false,
    tags: ['masking tape', 'tape', 'painting tape'],
    seo: {
      title: 'Masking Tape 24mm Dubai | Urban Choice',
      description: 'Buy masking tape and painting tape in Dubai UAE.',
      keywords: ['masking tape Dubai', 'painting tape UAE'],
    },
  },

  // ── PACKAGING MATERIALS ───────────────────────────────────────────────────
  {
    id: 'prod-091',
    name: 'Bubble Wrap Roll (1.2 m × 50 m)',
    slug: 'bubble-wrap-roll-50m',
    category: 'packaging-materials',
    subcategory: 'protective-wrapping',
    images: [
      img(
        'https://images.unsplash.com/photo-1589322434410-9f7a4d139b57?w=600',
        'Bubble wrap roll large sheet',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1589322434410-9f7a4d139b57?w=600',
      'Bubble Wrap Roll 50m',
    ),
    shortDescription: 'Small bubble bubble wrap roll, 1.2 m × 50 m.',
    fullDescription:
      'Small bubble (10 mm) polyethylene bubble wrap roll, 1.2 m wide × 50 m long. Excellent cushioning for fragile items, glassware, and furniture during transit and storage.',
    availability: 'in_stock',
    featured: false,
    tags: ['bubble wrap', 'packaging', 'protective wrap'],
    seo: {
      title: 'Bubble Wrap Roll 50m Dubai | Urban Choice',
      description: 'Buy bubble wrap rolls in Dubai UAE.',
      keywords: ['bubble wrap Dubai', 'bubble wrap roll UAE'],
    },
  },
  {
    id: 'prod-092',
    name: 'Stretch Film (500 mm × 300 m)',
    slug: 'stretch-film-500mm',
    category: 'packaging-materials',
    subcategory: 'protective-wrapping',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1726718576553-2ffd4eaac0ad?w=600',
        'Stretch wrap film pallet wrap roll',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1726718576553-2ffd4eaac0ad?w=600',
      'Stretch Film 500mm',
    ),
    shortDescription: 'Hand stretch film 500 mm × 300 m, 23 microns, clear.',
    fullDescription:
      'Clear LLDPE hand stretch wrap film, 500 mm × 300 m, 23 microns. High cling, puncture-resistant. For pallet wrapping, bundling, and protecting items in warehouses.',
    availability: 'in_stock',
    featured: false,
    tags: ['stretch film', 'pallet wrap', 'stretch wrap'],
    seo: {
      title: 'Stretch Film 500mm Dubai | Urban Choice',
      description: 'Buy stretch film and pallet wrap in Dubai UAE.',
      keywords: ['stretch film Dubai', 'pallet wrap UAE'],
    },
  },
  {
    id: 'prod-093',
    name: 'Foam Sheet (2 mm, 1 × 2 m)',
    slug: 'foam-sheet-2mm',
    category: 'packaging-materials',
    subcategory: 'protective-wrapping',
    images: [
      img(
        'https://images.unsplash.com/photo-1693592772086-e80960b134ed?w=600',
        'PE foam sheet packaging roll',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1693592772086-e80960b134ed?w=600',
      'Foam Sheet 2mm',
    ),
    shortDescription: 'Closed-cell PE foam sheet 2 mm thick, 1 × 2 m.',
    fullDescription:
      'Closed-cell polyethylene foam sheet, 2 mm thick, 1000 × 2000 mm. Lightweight, moisture-resistant cushioning for wrapping furniture, tiles, and fragile items.',
    availability: 'in_stock',
    featured: false,
    tags: ['foam sheet', 'PE foam', 'packaging material'],
    seo: {
      title: 'PE Foam Sheet 2mm Dubai | Urban Choice',
      description: 'Buy foam sheets and packaging materials in Dubai UAE.',
      keywords: ['foam sheet Dubai', 'PE foam UAE'],
    },
  },
  {
    id: 'prod-094',
    name: 'Packing Tape (48 mm × 100 m)',
    slug: 'packing-tape-48mm',
    category: 'packaging-materials',
    subcategory: 'tapes-strapping',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1680204967360-a56dc5ab8517?w=600',
        'Brown packing tape rolls 48mm',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1680204967360-a56dc5ab8517?w=600',
      'Packing Tape 48mm',
    ),
    shortDescription: 'Brown BOPP packing tape 48 mm × 100 m, high-tack.',
    fullDescription:
      'Brown BOPP hot-melt adhesive packing tape, 48 mm × 100 m roll. High initial tack and strong hold on cardboard. Noise-reduced for quiet unwinding.',
    availability: 'in_stock',
    featured: false,
    tags: ['packing tape', 'BOPP tape', 'carton tape'],
    seo: {
      title: 'Packing Tape 48mm Dubai | Urban Choice',
      description: 'Buy packing tape and carton tape in Dubai UAE.',
      keywords: ['packing tape Dubai', 'BOPP tape UAE'],
    },
  },
  {
    id: 'prod-095',
    name: 'Strapping Roll (PP, 12 mm)',
    slug: 'strapping-roll-pp-12mm',
    category: 'packaging-materials',
    subcategory: 'tapes-strapping',
    images: [
      img(
        'https://images.unsplash.com/photo-1662001164155-2d04179a7b22?w=600',
        'Polypropylene strapping roll',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1662001164155-2d04179a7b22?w=600',
      'PP Strapping Roll 12mm',
    ),
    shortDescription: 'PP strapping roll 12 mm × 1000 m, 5 kg, hand application.',
    fullDescription:
      'Machine-grade polypropylene strapping roll, 12 mm wide, 1000 m length, 5 kg coil. Embossed surface for better buckle grip. For box and carton securing.',
    availability: 'in_stock',
    featured: false,
    tags: ['strapping', 'PP strap', 'packing strap'],
    seo: {
      title: 'PP Strapping Roll 12mm Dubai | Urban Choice',
      description: 'Buy polypropylene strapping rolls in Dubai UAE.',
      keywords: ['PP strapping Dubai', 'strapping roll UAE'],
    },
  },
  {
    id: 'prod-096',
    name: 'Garbage Bags (80L, Black)',
    slug: 'garbage-bags-80l-black',
    category: 'packaging-materials',
    subcategory: 'bags-rolls',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1671031352715-805ff4f3d20d?w=600',
        'Black garbage bags roll 80 litre',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1671031352715-805ff4f3d20d?w=600',
      'Garbage Bags 80L',
    ),
    shortDescription: 'Heavy-duty 80L black garbage bags, 50 microns, 50-pack.',
    fullDescription:
      'Heavy-duty black LDPE garbage bags, 80-litre capacity, 50 microns thick. Pack of 50 on roll. Suitable for construction site waste and heavy rubbish.',
    availability: 'in_stock',
    featured: false,
    tags: ['garbage bags', 'waste bags', 'black bags'],
    seo: {
      title: 'Garbage Bags 80L Dubai | Urban Choice',
      description: 'Buy garbage bags and waste bags in Dubai UAE.',
      keywords: ['garbage bags Dubai', 'waste bags UAE'],
    },
  },
  {
    id: 'prod-097',
    name: 'Zipper Bags (A4, 100-Pack)',
    slug: 'zipper-bags-a4-100-pack',
    category: 'packaging-materials',
    subcategory: 'bags-rolls',
    images: [
      img(
        'https://plus.unsplash.com/premium_photo-1723489256818-f5e6590d8339?w=600',
        'Clear zipper bags A4 size',
      ),
    ],
    thumbnail: thumb(
      'https://plus.unsplash.com/premium_photo-1723489256818-f5e6590d8339?w=600',
      'Zipper Bags A4',
    ),
    shortDescription: 'A4 transparent zipper bags, resealable, pack of 100.',
    fullDescription:
      'Clear transparent polypropylene zipper bags, A4 size (230 × 300 mm), 80 microns. Resealable slider. Pack of 100. For organising parts, documents, and small hardware items.',
    availability: 'in_stock',
    featured: false,
    tags: ['zipper bags', 'resealable bags', 'clear bags'],
    seo: {
      title: 'Zipper Bags A4 Dubai | Urban Choice',
      description: 'Buy zipper bags and resealable bags in Dubai UAE.',
      keywords: ['zipper bags Dubai', 'resealable bags UAE'],
    },
  },
  {
    id: 'prod-098',
    name: 'Corrugated Roll (750 mm × 75 m)',
    slug: 'corrugated-roll-750mm',
    category: 'packaging-materials',
    subcategory: 'bags-rolls',
    images: [
      img(
        'https://images.unsplash.com/photo-1701836993810-7fc90b146f67?w=600',
        'Corrugated cardboard roll packaging',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1701836993810-7fc90b146f67?w=600',
      'Corrugated Roll 750mm',
    ),
    shortDescription: 'Single-face corrugated roll 750 mm × 75 m for wrapping.',
    fullDescription:
      'Single-face corrugated cardboard roll, 750 mm wide × 75 m long. Lightweight cushioning for wrapping ceramics, glass, and irregular items. Easy to tear and mould around products.',
    availability: 'in_stock',
    featured: false,
    tags: ['corrugated roll', 'cardboard roll', 'packaging wrap'],
    seo: {
      title: 'Corrugated Roll 750mm Dubai | Urban Choice',
      description: 'Buy corrugated rolls and packaging material in Dubai UAE.',
      keywords: ['corrugated roll Dubai', 'cardboard wrap UAE'],
    },
  },
  {
    id: 'prod-099',
    name: 'Fragile Sticker Labels (100-Pack)',
    slug: 'fragile-sticker-labels-100-pack',
    category: 'packaging-materials',
    subcategory: 'tapes-strapping',
    images: [
      img(
        'https://images.unsplash.com/photo-1621072145476-7c50a88739c3?w=600',
        'Fragile sticker labels red warning',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1621072145476-7c50a88739c3?w=600',
      'Fragile Labels 100-Pack',
    ),
    shortDescription: 'Red "FRAGILE" warning sticker labels, 100 × 50 mm, 100-pack.',
    fullDescription:
      '"FRAGILE – Handle With Care" red warning labels, 100 × 50 mm. Self-adhesive permanent sticker. Pack of 100. For cartons and packages containing breakable items.',
    availability: 'in_stock',
    featured: false,
    tags: ['fragile labels', 'warning labels', 'stickers'],
    seo: {
      title: 'Fragile Sticker Labels Dubai | Urban Choice',
      description: 'Buy fragile labels and warning stickers in Dubai UAE.',
      keywords: ['fragile labels Dubai', 'warning stickers UAE'],
    },
  },
  {
    id: 'prod-100',
    name: 'Tape Dispenser (Heavy Duty)',
    slug: 'tape-dispenser-heavy-duty',
    category: 'packaging-materials',
    subcategory: 'tapes-strapping',
    images: [
      img(
        'https://images.unsplash.com/photo-1760376208573-49ee415fc66c?w=600',
        'Heavy duty hand tape dispenser',
      ),
    ],
    thumbnail: thumb(
      'https://images.unsplash.com/photo-1760376208573-49ee415fc66c?w=600',
      'Tape Dispenser',
    ),
    shortDescription: 'Heavy-duty hand tape dispenser for tapes up to 50 mm.',
    fullDescription:
      'Ergonomic hand-held tape dispenser for packing tapes up to 50 mm wide. Serrated metal blade for clean cutting. Adjustable tension. Fits standard 76 mm core rolls.',
    availability: 'in_stock',
    featured: false,
    tags: ['tape dispenser', 'packing dispenser', 'packaging tool'],
    seo: {
      title: 'Tape Dispenser Dubai | Urban Choice',
      description: 'Buy tape dispensers and packaging tools in Dubai UAE.',
      keywords: ['tape dispenser Dubai', 'packing dispenser UAE'],
    },
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getFeaturedProducts = (limit?: number): Product[] => {
  const featured = products.filter((p) => p.featured);
  return limit ? featured.slice(0, limit) : featured;
};

export const getProductsByCategory = (category: string): Product[] =>
  products.filter((p) => p.category === category);

export const getRelatedProducts = (product: Product, limit = 4): Product[] =>
  products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);

export const getProductSlugs = (): string[] => products.map((p) => p.slug);

export const searchProducts = (query: string): Product[] => {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags?.some((t) => t.toLowerCase().includes(q)),
  );
};
