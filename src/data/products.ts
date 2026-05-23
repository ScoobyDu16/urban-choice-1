import type { Product } from '@/types';

export const products: Product[] = [
  // ── PAINT & FINISHES ──────────────────────────────────────────────────────
  {
    id: 'prod-001',
    name: 'Jotun Fenomastic Mighty Walls Interior Emulsion',
    slug: 'jotun-fenomastic-mighty-walls-interior',
    category: 'paint-finishes',
    subcategory: 'interior-paints',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&q=80',
        alt: 'Interior emulsion paint cans in white finish',
        width: 800,
        height: 800,
      },
      {
        url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80',
        alt: 'Freshly painted interior wall in clean white',
        width: 800,
        height: 600,
      },
    ],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=400&q=75',
      alt: 'Jotun Interior Emulsion Paint',
      width: 400,
      height: 400,
    },
    shortDescription:
      'Premium washable interior emulsion with superior coverage and anti-fungal properties. Ideal for UAE climate. Available in 1L, 4L, and 16L.',
    fullDescription: `Jotun Fenomastic Mighty Walls is a premium interior emulsion paint formulated specifically for the UAE's hot, humid climate. Its advanced formula delivers a smooth, durable finish that resists staining, moisture, and fungal growth — essential for Dubai homes and commercial spaces.\n\nWith exceptional coverage of up to 12 m² per litre, this paint minimises the number of coats required, saving time and cost on large projects. The low-VOC formulation ensures it is safe for application in occupied spaces with minimal disruption.\n\nAvailable in thousands of custom colours via the Jotun colour mixing system. Suitable for walls and ceilings on plaster, concrete, and drywall surfaces. Dries to touch in 1 hour, recoatable in 4 hours.`,
    tags: ['interior paint', 'emulsion', 'Jotun', 'washable paint', 'Dubai', 'anti-fungal'],
    seo: {
      title: 'Jotun Fenomastic Interior Emulsion Paint Dubai | Urban Choice',
      description:
        'Buy Jotun Fenomastic Mighty Walls interior emulsion in Dubai. Anti-fungal, washable, superior coverage. Available in 1L, 4L, 16L at Urban Choice.',
      keywords: [
        'Jotun paint Dubai',
        'interior paint UAE',
        'emulsion paint Dubai',
        'washable paint UAE',
        'building paint supplier',
      ],
    },
    availability: 'in_stock',
    featured: true,
    specifications: [
      { label: 'Brand', value: 'Jotun' },
      { label: 'Type', value: 'Interior Emulsion (Water-based)' },
      { label: 'Finish', value: 'Matt' },
      { label: 'Coverage', value: 'Up to 12 m² per litre (single coat)' },
      { label: 'Dry to Touch', value: '1 hour at 25°C' },
      { label: 'Recoat Time', value: '4 hours' },
      { label: 'Sizes Available', value: '1L, 4L, 16L' },
      { label: 'VOC Content', value: 'Low VOC' },
    ],
    faqs: [
      {
        question: 'Is a primer required before applying this paint?',
        answer:
          'For new plaster or drywall surfaces, we recommend applying one coat of Jotun primer first for best adhesion and coverage.',
      },
      {
        question: 'Can this paint be used in bathrooms?',
        answer:
          'Yes, it has anti-fungal properties making it suitable for high-humidity areas such as bathrooms and kitchens.',
      },
    ],
    schema: {
      name: 'Jotun Fenomastic Mighty Walls Interior Emulsion',
      description: 'Premium washable interior emulsion with anti-fungal properties',
      brand: 'Jotun',
      sku: 'UC-PF-001',
    },
    createdAt: '2024-01-10',
    updatedAt: '2025-01-01',
  },
  {
    id: 'prod-002',
    name: 'Dulux Weathershield Exterior Paint',
    slug: 'dulux-weathershield-exterior-paint',
    category: 'paint-finishes',
    subcategory: 'exterior-paints',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80',
        alt: 'Exterior building with fresh paint finish',
        width: 800,
        height: 600,
      },
    ],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&q=75',
      alt: 'Dulux Weathershield Exterior Paint',
      width: 400,
      height: 300,
    },
    shortDescription:
      'Advanced weather-resistant exterior paint engineered for harsh UAE sun and heat. 10-year protection against cracking, peeling, and UV fade.',
    fullDescription: `Dulux Weathershield is the go-to exterior paint for construction and renovation projects across the UAE. Engineered to withstand extreme temperatures, UV radiation, sand storms, and humidity — it provides a long-lasting, beautiful finish for any exterior surface.\n\nThe elastomeric formula allows the paint film to expand and contract with the building, preventing cracking even under the intense Dubai summer heat. The UV-resistant pigments ensure colours stay vibrant for up to 10 years without fading.\n\nIdeal for concrete, cement render, masonry, and exterior plaster. One coat covers up to 10 m² per litre. Available in a wide colour range through the Dulux colour system.`,
    tags: ['exterior paint', 'weathershield', 'Dulux', 'UV resistant', 'Dubai', 'outdoor paint'],
    seo: {
      title: 'Dulux Weathershield Exterior Paint UAE | Urban Choice',
      description:
        'Dulux Weathershield exterior paint in Dubai. 10-year weather protection, UV resistant, anti-crack formula for UAE climate. Buy online at Urban Choice.',
      keywords: [
        'Dulux exterior paint',
        'weathershield Dubai',
        'exterior paint UAE',
        'building exterior paint',
        'UV resistant paint',
      ],
    },
    availability: 'in_stock',
    featured: true,
    specifications: [
      { label: 'Brand', value: 'Dulux' },
      { label: 'Type', value: 'Exterior Emulsion (Water-based)' },
      { label: 'Finish', value: 'Smooth Matt' },
      { label: 'Coverage', value: 'Up to 10 m² per litre' },
      { label: 'Weather Resistance', value: '10 years' },
      { label: 'UV Resistance', value: 'High (colour-fast pigments)' },
      { label: 'Sizes Available', value: '4L, 16L, 20L' },
      { label: 'Application', value: 'Brush, Roller, or Spray' },
    ],
    faqs: [
      {
        question: 'How many coats are needed?',
        answer:
          'Two coats are recommended for full weather protection. Allow each coat to dry fully before applying the next.',
      },
      {
        question: 'Can it be applied during summer in Dubai?',
        answer:
          'Avoid application in direct sunlight or when surface temperature exceeds 50°C. Early morning or evening application is recommended during summer months.',
      },
    ],
    schema: {
      name: 'Dulux Weathershield Exterior Paint',
      description: 'Advanced weather-resistant exterior paint with 10-year protection',
      brand: 'Dulux',
      sku: 'UC-PF-002',
    },
    createdAt: '2024-01-15',
    updatedAt: '2025-01-01',
  },

  // ── SANITARY WARE ─────────────────────────────────────────────────────────
  {
    id: 'prod-003',
    name: 'RAK Ceramics Wall-Hung Rimless Toilet',
    slug: 'rak-ceramics-wall-hung-rimless-toilet',
    category: 'sanitary-ware',
    subcategory: 'toilets',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
        alt: 'Modern wall-hung rimless toilet in white ceramic',
        width: 800,
        height: 800,
      },
    ],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=75',
      alt: 'RAK Ceramics Wall-Hung Rimless Toilet',
      width: 400,
      height: 400,
    },
    shortDescription:
      'Sleek wall-hung rimless toilet by RAK Ceramics with dual flush 3/6L. Easy-clean glaze, soft-close seat included. Perfect for modern UAE bathrooms.',
    fullDescription: `The RAK Ceramics Wall-Hung Rimless Toilet combines modern aesthetics with superior hygiene performance. The rimless design eliminates hidden areas where bacteria accumulate, making cleaning faster and more effective — crucial for maintaining hygiene in the UAE climate.\n\nThe wall-hung installation creates a floating appearance that makes any bathroom look more spacious and modern, and simplifies floor cleaning beneath the pan. The concealed cistern (sold separately or as a package) allows for a clean, seamless look.\n\nDual-flush technology (3L/6L) delivers significant water savings while meeting Dubai Municipality standards. The included soft-close seat prevents slamming and extends the lifespan of the pan. RAK Ceramics is a UAE-based manufacturer trusted on thousands of projects across the Gulf.`,
    tags: [
      'wall-hung toilet',
      'rimless toilet',
      'RAK Ceramics',
      'bathroom',
      'sanitary ware',
      'Dubai',
    ],
    seo: {
      title: 'RAK Ceramics Wall-Hung Rimless Toilet Dubai | Urban Choice',
      description:
        'Buy RAK Ceramics wall-hung rimless toilet in Dubai. Dual flush 3/6L, easy-clean glaze, soft-close seat. Ideal for modern UAE bathrooms. Urban Choice.',
      keywords: [
        'wall hung toilet Dubai',
        'rimless toilet UAE',
        'RAK Ceramics toilet',
        'bathroom fixtures Dubai',
        'sanitary ware UAE',
      ],
    },
    availability: 'in_stock',
    featured: true,
    specifications: [
      { label: 'Brand', value: 'RAK Ceramics' },
      { label: 'Type', value: 'Wall-Hung, Rimless' },
      { label: 'Material', value: 'Vitreous China' },
      { label: 'Flush Volume', value: '3L / 6L Dual Flush' },
      { label: 'Seat', value: 'Soft-Close Included' },
      { label: 'Glaze', value: 'Easy-Clean Anti-Bacterial Glaze' },
      { label: 'Pan Projection', value: '540 mm' },
      { label: 'Colour', value: 'White' },
    ],
    faqs: [
      {
        question: 'Is the cistern included?',
        answer:
          'No, the wall-hung frame and concealed cistern are sold separately. We stock compatible RAK and Geberit frames — contact us for a package quote.',
      },
      {
        question: 'Is this suitable for a small bathroom?',
        answer:
          'Yes, the wall-hung design is ideal for compact bathrooms as it creates a floating effect that makes the space feel larger.',
      },
    ],
    schema: {
      name: 'RAK Ceramics Wall-Hung Rimless Toilet',
      description: 'Modern wall-hung rimless toilet with dual flush and soft-close seat',
      brand: 'RAK Ceramics',
      sku: 'UC-SW-001',
    },
    createdAt: '2024-02-01',
    updatedAt: '2025-01-01',
  },
  {
    id: 'prod-004',
    name: 'Grohe Eurosmart Basin Mixer Tap',
    slug: 'grohe-eurosmart-basin-mixer-tap',
    category: 'sanitary-ware',
    subcategory: 'faucets',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
        alt: 'Chrome basin mixer tap in modern bathroom',
        width: 800,
        height: 800,
      },
    ],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=75',
      alt: 'Grohe Eurosmart Basin Mixer',
      width: 400,
      height: 400,
    },
    shortDescription:
      'Grohe Eurosmart single-lever basin mixer in StarLight Chrome. Water-saving aerator, easy installation, 5-year warranty. A bestseller in UAE projects.',
    fullDescription: `The Grohe Eurosmart Basin Mixer is one of the most specified taps in UAE residential and hospitality projects. Its timeless design, proven durability, and easy maintenance make it the top choice for developers, contractors, and homeowners alike.\n\nThe single-lever ceramic cartridge provides smooth, precise control of water temperature and flow, and is rated for over 500,000 operating cycles. Grohe's StarLight Chrome finish is highly resistant to corrosion and tarnishing, maintaining its mirror shine in the humid UAE climate.\n\nThe built-in aerator reduces water consumption by up to 50% without affecting perceived water pressure — ideal for meeting Dubai Municipality's water conservation requirements. Suitable for washbasins with 1 hole, ½" supply connections.`,
    tags: ['basin mixer', 'Grohe', 'faucet', 'tap', 'bathroom', 'chrome', 'Dubai'],
    seo: {
      title: 'Grohe Eurosmart Basin Mixer Tap Dubai | Urban Choice',
      description:
        'Grohe Eurosmart basin mixer tap in StarLight Chrome. Water-saving, 5-year warranty. Available at Urban Choice Dubai for residential and commercial projects.',
      keywords: [
        'Grohe tap Dubai',
        'basin mixer UAE',
        'bathroom faucet Dubai',
        'chrome tap UAE',
        'Grohe Eurosmart',
      ],
    },
    availability: 'in_stock',
    featured: true,
    specifications: [
      { label: 'Brand', value: 'Grohe' },
      { label: 'Series', value: 'Eurosmart' },
      { label: 'Type', value: 'Single-Lever Basin Mixer' },
      { label: 'Finish', value: 'StarLight Chrome' },
      { label: 'Cartridge', value: 'Ceramic, 500,000+ cycles' },
      { label: 'Aerator', value: 'Built-in, 5 L/min' },
      { label: 'Connection', value: 'G ½" (standard UAE supply)' },
      { label: 'Warranty', value: '5 Years' },
    ],
    faqs: [
      {
        question: 'Is this compatible with UAE water pressure?',
        answer:
          'Yes, the Grohe Eurosmart is designed for both high and low pressure systems (0.1–10 bar), making it fully compatible with UAE water supply.',
      },
      {
        question: 'Can I get this in brushed nickel or matte black?',
        answer:
          'We stock the Eurosmart in chrome. Other finishes (brushed nickel, matte black) are available on special order — please contact us.',
      },
    ],
    schema: {
      name: 'Grohe Eurosmart Basin Mixer Tap',
      description: 'Single-lever basin mixer in StarLight Chrome with water-saving aerator',
      brand: 'Grohe',
      sku: 'UC-SW-002',
    },
    createdAt: '2024-02-10',
    updatedAt: '2025-01-01',
  },

  // ── TILES & FLOORING ──────────────────────────────────────────────────────
  {
    id: 'prod-005',
    name: 'Porcelain Rectified Floor Tile 60×60 cm – Marble Look',
    slug: 'porcelain-rectified-floor-tile-60x60-marble-look',
    category: 'tiles-flooring',
    subcategory: 'floor-tiles',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80',
        alt: 'Large format marble look porcelain floor tiles in living room',
        width: 800,
        height: 600,
      },
    ],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&q=75',
      alt: 'Porcelain Marble Look Floor Tile 60x60',
      width: 400,
      height: 300,
    },
    shortDescription:
      'Premium 60×60 cm rectified porcelain tiles in a stunning marble look. Polished finish, R9 anti-slip rating, suitable for floors and walls.',
    fullDescription: `Achieve the timeless luxury of marble at a fraction of the cost with these premium 60×60 cm rectified porcelain tiles. Featuring a high-definition marble print on a dense, durable porcelain body, these tiles deliver the look of natural stone with superior performance.\n\nThe rectified edges allow for minimal grout joints (1–2 mm), creating a seamless surface that emphasises the expansive marble pattern. The polished finish adds brightness and sophistication to living rooms, lobbies, and corridors.\n\nWith an R9 slip resistance rating and a water absorption of less than 0.5%, these tiles are suitable for both interior floors and walls in residential and commercial projects. Ideal for the Dubai and UAE market where marble aesthetics are highly desirable.`,
    tags: [
      'floor tiles',
      'porcelain tiles',
      'marble look',
      'rectified tiles',
      '60x60',
      'Dubai',
      'tiles',
    ],
    seo: {
      title: 'Porcelain Marble Look Floor Tiles 60×60 cm Dubai | Urban Choice',
      description:
        'Buy 60×60 cm porcelain marble look rectified floor tiles in Dubai. Polished finish, R9 anti-slip. For residential and commercial projects in UAE.',
      keywords: [
        'marble tiles Dubai',
        'porcelain floor tiles UAE',
        '60x60 tiles Dubai',
        'rectified tiles UAE',
        'floor tiles supplier Dubai',
      ],
    },
    availability: 'in_stock',
    featured: true,
    specifications: [
      { label: 'Size', value: '600 × 600 × 10 mm' },
      { label: 'Type', value: 'Full-Body Porcelain' },
      { label: 'Finish', value: 'Polished' },
      { label: 'Rectified', value: 'Yes (±0.2 mm tolerance)' },
      { label: 'Water Absorption', value: '< 0.5%' },
      { label: 'Slip Resistance', value: 'R9' },
      { label: 'Application', value: 'Floor & Wall (Interior)' },
      { label: 'Coverage per Box', value: '1.44 m² (4 tiles)' },
    ],
    faqs: [
      {
        question: 'What grout joint width is recommended?',
        answer:
          'Due to the rectified edges, a joint width of 1–3 mm is recommended for a seamless appearance.',
      },
      {
        question: 'Can these tiles be used in a bathroom?',
        answer:
          'Yes, these tiles are suitable for bathroom floors and walls. For shower floors, we recommend adding anti-slip treatment or using a dedicated shower floor tile.',
      },
    ],
    schema: {
      name: 'Porcelain Rectified Floor Tile 60×60 Marble Look',
      description: 'Premium polished porcelain marble look floor tile, 600×600mm, rectified',
      brand: 'Urban Choice',
      sku: 'UC-TF-001',
    },
    createdAt: '2024-03-01',
    updatedAt: '2025-01-01',
  },
  {
    id: 'prod-006',
    name: 'Ceramic Wall Tile 30×60 cm – Concrete Grey',
    slug: 'ceramic-wall-tile-30x60-concrete-grey',
    category: 'tiles-flooring',
    subcategory: 'wall-tiles',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
        alt: 'Concrete grey ceramic wall tiles in modern bathroom',
        width: 800,
        height: 600,
      },
    ],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=75',
      alt: 'Ceramic Wall Tile 30x60 Concrete Grey',
      width: 400,
      height: 300,
    },
    shortDescription:
      'Trendy 30×60 cm concrete-effect ceramic wall tiles in grey. Matte finish, rectified edges. Ideal for bathrooms, kitchens, and feature walls.',
    fullDescription: `Bring an industrial-chic aesthetic to any interior with these 30×60 cm concrete-effect ceramic wall tiles. The rich grey tones and subtle texture of the concrete finish create a sophisticated, contemporary look that pairs beautifully with chrome, brass, and wood accents.\n\nThe matte finish provides a refined, non-reflective surface ideal for bathroom walls, kitchen splashbacks, and living room feature walls. Rectified edges allow for tight, precise installation with minimal grout lines.\n\nManufactured to ISO standards with a Mohs hardness of 6, these tiles are durable and easy to maintain. The 30×60 cm format is one of the most versatile tile sizes, working equally well in portrait or landscape orientation.`,
    tags: [
      'wall tiles',
      'ceramic tiles',
      'concrete effect',
      'grey tiles',
      'bathroom tiles',
      'Dubai',
    ],
    seo: {
      title: 'Concrete Grey Ceramic Wall Tiles 30×60 cm Dubai | Urban Choice',
      description:
        'Buy concrete grey ceramic wall tiles 30×60 cm in Dubai. Matte finish, rectified edges. Perfect for bathrooms, kitchens, and feature walls in UAE.',
      keywords: [
        'wall tiles Dubai',
        'ceramic tiles UAE',
        'concrete tiles Dubai',
        'grey wall tiles UAE',
        'bathroom tiles supplier',
      ],
    },
    availability: 'in_stock',
    featured: false,
    specifications: [
      { label: 'Size', value: '300 × 600 × 9 mm' },
      { label: 'Type', value: 'Ceramic' },
      { label: 'Finish', value: 'Matte' },
      { label: 'Rectified', value: 'Yes' },
      { label: 'Mohs Hardness', value: '6' },
      { label: 'Water Absorption', value: '3–6%' },
      { label: 'Application', value: 'Interior Wall' },
      { label: 'Coverage per Box', value: '1.26 m² (7 tiles)' },
    ],
    faqs: [
      {
        question: 'Can these tiles be used as a floor tile?',
        answer:
          'These are wall tiles (water absorption 3–6%) and are not recommended for floor use. Please contact us for matching floor tiles.',
      },
      {
        question: 'Do you stock coordinating floor tiles?',
        answer:
          'Yes, we have complementary 60×60 cm floor tiles in the same concrete grey range. Contact us or visit our showroom to see the full range.',
      },
    ],
    schema: {
      name: 'Ceramic Wall Tile 30×60 Concrete Grey',
      description: '30×60 cm matte concrete-effect ceramic wall tile, rectified',
      brand: 'Urban Choice',
      sku: 'UC-TF-002',
    },
    createdAt: '2024-03-10',
    updatedAt: '2025-01-01',
  },

  // ── ELECTRICAL ITEMS ──────────────────────────────────────────────────────
  {
    id: 'prod-007',
    name: 'Legrand Arteor 2-Gang Switch & Socket Set',
    slug: 'legrand-arteor-2-gang-switch-socket',
    category: 'electrical-items',
    subcategory: 'switches-sockets',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        alt: 'Modern white Legrand wall switch and socket plate',
        width: 800,
        height: 600,
      },
    ],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75',
      alt: 'Legrand Arteor Switch Socket',
      width: 400,
      height: 400,
    },
    shortDescription:
      'Legrand Arteor 2-gang switch and socket combo in pearl white. Flush mount, UAE BS standard, suitable for all residential and commercial projects.',
    fullDescription: `The Legrand Arteor range is among the most specified electrical wiring devices in UAE residential and commercial construction. Combining elegant design with rock-solid reliability, these switches and sockets elevate any interior while meeting the strictest safety standards.\n\nThe 2-gang configuration (one switch + one socket with shutters) is the most practical combination for bedroom and living room installations. The flush-mount plate design sits flush against the wall for a clean, contemporary finish.\n\nManufactured to BS 1363 (UK) standards and approved for use in the UAE. The modular system allows for easy mix-and-match combinations — available in 1, 2, 3, and 4-gang formats. Multiple finishes available: Pearl White, Magnesium, Mirror White.`,
    tags: ['Legrand', 'switch', 'socket', 'electrical', 'Arteor', 'Dubai', 'wiring devices'],
    seo: {
      title: 'Legrand Arteor Switch & Socket Dubai | Urban Choice',
      description:
        'Legrand Arteor 2-gang switch and socket in Dubai. BS standard, flush mount, pearl white. Available for residential and commercial projects across UAE.',
      keywords: [
        'Legrand switch Dubai',
        'electrical socket UAE',
        'Arteor switches',
        'wiring devices Dubai',
        'electrical supplies UAE',
      ],
    },
    availability: 'in_stock',
    featured: true,
    specifications: [
      { label: 'Brand', value: 'Legrand' },
      { label: 'Series', value: 'Arteor' },
      { label: 'Configuration', value: '2-Gang (1 Switch + 1 Socket)' },
      { label: 'Standard', value: 'BS 1363 (UK/UAE)' },
      { label: 'Socket Rating', value: '13A with shutters' },
      { label: 'Switch Rating', value: '10A / 250V' },
      { label: 'Finish', value: 'Pearl White' },
      { label: 'Mounting', value: 'Flush Mount' },
    ],
    faqs: [
      {
        question: 'Is this compatible with standard UAE back boxes?',
        answer:
          'Yes, the Arteor range fits standard 35mm deep single gang back boxes (supplied by others). We also stock compatible metal back boxes.',
      },
      {
        question: 'Is a USB version available?',
        answer:
          'Yes, the Arteor range includes 2.1A USB charging sockets. Contact us for availability and pricing.',
      },
    ],
    schema: {
      name: 'Legrand Arteor 2-Gang Switch & Socket',
      description: 'BS standard 2-gang flush-mount switch and socket combo, pearl white',
      brand: 'Legrand',
      sku: 'UC-EL-001',
    },
    createdAt: '2024-04-01',
    updatedAt: '2025-01-01',
  },
  {
    id: 'prod-008',
    name: 'Philips CorePro LED Downlight 12W',
    slug: 'philips-corepro-led-downlight-12w',
    category: 'electrical-items',
    subcategory: 'led-lighting',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80',
        alt: 'LED downlight installed in modern ceiling',
        width: 800,
        height: 600,
      },
    ],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&q=75',
      alt: 'Philips LED Downlight 12W',
      width: 400,
      height: 400,
    },
    shortDescription:
      'Philips CorePro LED downlight 12W replacing 75W halogen. 1000 lm, warm white 3000K, 25,000-hour lifespan. Widely used in UAE projects.',
    fullDescription: `The Philips CorePro LED Downlight is the most trusted LED replacement for halogen downlights on UAE construction and fit-out projects. Its plug-and-play design makes it the easiest upgrade from existing GU10 or MR16 halogen fittings — simply replace the bulb, no rewiring required.\n\nAt 12W, it produces 1000 lumens — equivalent to a 75W halogen — while consuming 84% less energy and generating far less heat. The 25,000-hour rated lifespan means significantly reduced maintenance costs, especially for commercial and hospitality projects with high ceilings.\n\nThe warm white 3000K colour temperature creates a welcoming, relaxing ambiance ideal for hotel rooms, apartments, and retail spaces. Available in warm white (3000K), cool white (4000K), and daylight (6500K).`,
    tags: ['LED downlight', 'Philips', 'LED lighting', 'ceiling light', 'energy saving', 'Dubai'],
    seo: {
      title: 'Philips CorePro LED Downlight 12W Dubai | Urban Choice',
      description:
        'Philips CorePro LED downlight 12W, 1000lm, 25,000hr lifespan. Buy in Dubai for UAE projects. Energy-saving halogen replacement at Urban Choice.',
      keywords: [
        'LED downlight Dubai',
        'Philips LED UAE',
        'ceiling downlight Dubai',
        'LED lighting supplier UAE',
        'energy saving light Dubai',
      ],
    },
    availability: 'in_stock',
    featured: true,
    specifications: [
      { label: 'Brand', value: 'Philips' },
      { label: 'Power', value: '12W' },
      { label: 'Equivalent', value: '75W Halogen' },
      { label: 'Luminous Flux', value: '1000 lm' },
      { label: 'Colour Temperature', value: '3000K (Warm White)' },
      { label: 'CRI', value: '> 80' },
      { label: 'Rated Lifespan', value: '25,000 hours' },
      { label: 'Beam Angle', value: '36°' },
      { label: 'Base', value: 'GU10' },
    ],
    faqs: [
      {
        question: 'Is this dimmable?',
        answer:
          'The standard version is non-dimmable. A dimmable variant is available — please specify when ordering.',
      },
      {
        question: 'What is the minimum order quantity for bulk pricing?',
        answer:
          'Bulk discounts apply for orders of 50 units or more. Contact us for a project quotation.',
      },
    ],
    schema: {
      name: 'Philips CorePro LED Downlight 12W',
      description: '12W LED downlight replacing 75W halogen, 1000lm, 3000K warm white',
      brand: 'Philips',
      sku: 'UC-EL-002',
    },
    createdAt: '2024-04-10',
    updatedAt: '2025-01-01',
  },

  // ── PLUMBING SUPPLIES ─────────────────────────────────────────────────────
  {
    id: 'prod-009',
    name: 'Wavin Tigris PPR Pipe 20mm PN20',
    slug: 'wavin-tigris-ppr-pipe-20mm-pn20',
    category: 'plumbing-supplies',
    subcategory: 'pipes-fittings',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
        alt: 'PPR plumbing pipes and fittings for water supply',
        width: 800,
        height: 600,
      },
    ],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=75',
      alt: 'Wavin PPR Pipe 20mm',
      width: 400,
      height: 400,
    },
    shortDescription:
      'Wavin Tigris PPR pipe 20mm PN20 for hot and cold water supply. Heat-fusion jointing, corrosion-free, compliant with Dubai Municipality standards.',
    fullDescription: `Wavin Tigris PPR (Polypropylene Random Copolymer) pipes are the industry standard for internal hot and cold water distribution in UAE construction. Approved by Dubai Municipality and trusted on thousands of residential, commercial, and hospitality projects across the Gulf.\n\nThe PN20 pressure rating makes this pipe suitable for both domestic water supply (cold water) and central heating systems (hot water up to 70°C). Heat-fusion jointing creates a permanent, leak-free connection stronger than the pipe itself — no corrosion, scaling, or galvanic action.\n\nThe distinctive green colour of Wavin Tigris is universally recognised on UAE sites. Sold per 4-metre length or by the bundle. Compatible fittings (elbows, tees, couplings, reducers) available in our plumbing section.`,
    tags: [
      'PPR pipe',
      'plumbing',
      'Wavin',
      'water supply',
      'pipe fittings',
      'Dubai',
      'building materials',
    ],
    seo: {
      title: 'Wavin Tigris PPR Pipe 20mm Dubai | Urban Choice',
      description:
        'Buy Wavin Tigris PPR pipe 20mm PN20 in Dubai. Dubai Municipality approved, hot and cold water supply. Urban Choice stocks full range of PPR fittings.',
      keywords: [
        'PPR pipe Dubai',
        'Wavin pipe UAE',
        'plumbing pipe Dubai',
        'water supply pipe UAE',
        'PPR fittings Dubai',
      ],
    },
    availability: 'in_stock',
    featured: false,
    specifications: [
      { label: 'Brand', value: 'Wavin Tigris' },
      { label: 'Material', value: 'PPR (Polypropylene Random Copolymer)' },
      { label: 'Diameter', value: '20 mm (½")' },
      { label: 'Pressure Rating', value: 'PN20' },
      { label: 'Max Temperature', value: '70°C (hot water), 20°C at PN20' },
      { label: 'Length per Piece', value: '4 metres' },
      { label: 'Jointing Method', value: 'Heat Fusion (socket fusion)' },
      { label: 'Approval', value: 'Dubai Municipality, WRAS' },
    ],
    faqs: [
      {
        question: 'What sizes do you stock?',
        answer:
          'We stock Wavin Tigris PPR pipes in 20mm, 25mm, 32mm, 40mm, 50mm, 63mm, 75mm, and 90mm. All pressure ratings (PN10, PN16, PN20, PN25) available.',
      },
      {
        question: 'Do you supply the fusion welding machine?',
        answer: 'Yes, we rent and sell PPR fusion welding machines. Contact us for availability.',
      },
    ],
    schema: {
      name: 'Wavin Tigris PPR Pipe 20mm PN20',
      description: 'PPR hot and cold water supply pipe, 20mm diameter, PN20 rating, 4m length',
      brand: 'Wavin',
      sku: 'UC-PL-001',
    },
    createdAt: '2024-05-01',
    updatedAt: '2025-01-01',
  },
  {
    id: 'prod-010',
    name: 'Ariston ANDRIS 80L Electric Water Heater',
    slug: 'ariston-andris-80l-electric-water-heater',
    category: 'plumbing-supplies',
    subcategory: 'water-heaters',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1558618047-f4e90e8f9b8c?w=800&q=80',
        alt: 'White electric water heater installed in utility room',
        width: 800,
        height: 600,
      },
    ],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1558618047-f4e90e8f9b8c?w=400&q=75',
      alt: 'Ariston 80L Electric Water Heater',
      width: 400,
      height: 400,
    },
    shortDescription:
      'Ariston Andris 80L vertical electric water heater with 1500W element, anti-corrosion enamel tank, and 5-year tank warranty. UAE 220V compatible.',
    fullDescription: `The Ariston Andris 80L electric storage water heater is one of the most popular water heaters specified on UAE residential projects. Its compact vertical design fits in standard cupboards and utility rooms, while the 80L capacity comfortably serves a family of 3–4 people.\n\nThe tank interior is coated with Ariston's proprietary enamel (titanium-enriched) for superior corrosion resistance in UAE water conditions, which can be high in calcium and chlorine. The 1500W heating element reaches target temperature efficiently, and the adjustable thermostat (35–75°C) allows precise temperature control.\n\nThe digital display model provides real-time temperature readout. Energy-saving ECO mode reduces energy consumption by adapting heating cycles to your usage patterns. Backed by Ariston's 5-year tank warranty and 2-year parts warranty.`,
    tags: ['water heater', 'Ariston', 'electric water heater', 'geyser', 'Dubai', 'plumbing'],
    seo: {
      title: 'Ariston Andris 80L Electric Water Heater Dubai | Urban Choice',
      description:
        'Buy Ariston Andris 80L electric water heater in Dubai. 5-year warranty, anti-corrosion enamel tank, 220V UAE compatible. Urban Choice Dubai.',
      keywords: [
        'water heater Dubai',
        'Ariston UAE',
        'electric geyser Dubai',
        '80L water heater UAE',
        'storage water heater Dubai',
      ],
    },
    availability: 'in_stock',
    featured: false,
    specifications: [
      { label: 'Brand', value: 'Ariston' },
      { label: 'Capacity', value: '80 Litres' },
      { label: 'Heating Element', value: '1500W' },
      { label: 'Voltage', value: '220–240V, 50Hz' },
      { label: 'Max Temperature', value: '75°C' },
      { label: 'Thermostat', value: 'Adjustable 35–75°C' },
      { label: 'Tank Coating', value: 'Titanium-enriched Enamel' },
      { label: 'Warranty', value: '5 Years (tank), 2 Years (parts)' },
      { label: 'Installation', value: 'Vertical (wall-mounted)' },
    ],
    faqs: [
      {
        question: 'Does this come with a safety pressure relief valve?',
        answer:
          'Yes, all Ariston water heaters include a factory-fitted safety pressure relief valve compliant with UAE standards.',
      },
      {
        question: 'What sizes are available?',
        answer:
          'We stock Ariston Andris in 30L, 50L, 80L, and 100L capacities. Contact us for availability and bulk pricing.',
      },
    ],
    schema: {
      name: 'Ariston Andris 80L Electric Water Heater',
      description: '80L electric storage water heater, 1500W, 5-year tank warranty',
      brand: 'Ariston',
      sku: 'UC-PL-002',
    },
    createdAt: '2024-05-10',
    updatedAt: '2025-01-01',
  },

  // ── HARDWARE & TOOLS ──────────────────────────────────────────────────────
  {
    id: 'prod-011',
    name: 'Stanley FatMax 8m Tape Measure',
    slug: 'stanley-fatmax-8m-tape-measure',
    category: 'hardware-tools',
    subcategory: 'hand-tools',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80',
        alt: 'Stanley tape measure and hand tools on workbench',
        width: 800,
        height: 600,
      },
    ],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&q=75',
      alt: 'Stanley FatMax Tape Measure 8m',
      width: 400,
      height: 400,
    },
    shortDescription:
      'Stanley FatMax 8m tape measure with 32mm wide blade, BladeArmor coating, and 3.5m standout. The #1 choice on UAE construction sites.',
    fullDescription: `The Stanley FatMax is the benchmark tape measure trusted by contractors and tradespeople across the UAE. The 32mm wide blade with BladeArmor protective coating resists wear and breakage even on the roughest construction sites, maintaining the print quality of markings throughout the tape's life.\n\nWith an industry-leading 3.5m standout, the FatMax can bridge longer spans without the blade folding — ideal for taking measurements single-handed on large UAE construction projects. The large end hook engages securely on corners and pipes for accurate readings.\n\nThe rubber-overmoulded case provides excellent grip and protects the internal mechanism from impacts and dust. The magnetic end hook is perfect for working with metal surfaces, making it ideal for MEP contractors and fit-out teams.`,
    tags: [
      'tape measure',
      'Stanley',
      'measuring tape',
      'hand tools',
      'construction tools',
      'Dubai',
    ],
    seo: {
      title: 'Stanley FatMax 8m Tape Measure Dubai | Urban Choice',
      description:
        'Buy Stanley FatMax 8m tape measure in Dubai. BladeArmor coating, 3.5m standout, magnetic hook. Trusted by UAE construction professionals.',
      keywords: [
        'Stanley tape measure Dubai',
        'measuring tape UAE',
        'hand tools Dubai',
        'construction tools UAE',
        'Stanley tools supplier',
      ],
    },
    availability: 'in_stock',
    featured: false,
    specifications: [
      { label: 'Brand', value: 'Stanley' },
      { label: 'Length', value: '8 metres' },
      { label: 'Blade Width', value: '32 mm' },
      { label: 'Standout', value: '3.5 metres' },
      { label: 'Blade Coating', value: 'BladeArmor (Nylon)' },
      { label: 'Hook', value: 'Magnetic, moveable' },
      { label: 'Case', value: 'Bi-material, rubber overmould' },
      { label: 'Scale', value: 'mm / cm / imperial' },
    ],
    faqs: [
      {
        question: 'Does it have both metric and imperial markings?',
        answer:
          'Yes, the FatMax has both metric (mm/cm) and imperial (inch/feet) markings on the blade.',
      },
      {
        question: 'Is this the genuine Stanley product?',
        answer:
          'Yes, all Stanley products at Urban Choice are sourced through authorised UAE distributors and carry the full manufacturer guarantee.',
      },
    ],
    schema: {
      name: 'Stanley FatMax 8m Tape Measure',
      description: '8m tape measure with BladeArmor coating and 3.5m standout',
      brand: 'Stanley',
      sku: 'UC-HT-001',
    },
    createdAt: '2024-06-01',
    updatedAt: '2025-01-01',
  },
  {
    id: 'prod-012',
    name: 'Bosch GSB 18V-55 Cordless Combi Drill',
    slug: 'bosch-gsb-18v-55-cordless-combi-drill',
    category: 'hardware-tools',
    subcategory: 'power-tools',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80',
        alt: 'Bosch cordless drill with battery on workbench',
        width: 800,
        height: 600,
      },
    ],
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&q=75',
      alt: 'Bosch GSB 18V Cordless Combi Drill',
      width: 400,
      height: 400,
    },
    shortDescription:
      "Bosch GSB 18V-55 professional cordless combi drill with 2×2Ah batteries and charger. 55 Nm torque, 13mm chuck. The contractor's favourite in UAE.",
    fullDescription: `The Bosch GSB 18V-55 is the most popular cordless combi drill on UAE construction sites. Part of the Bosch 18V Professional battery system, it delivers the power and reliability demanded by full-time contractors while being compact enough for tight spaces in fit-out and MEP work.\n\nWith 55 Nm of maximum torque and a 2-speed gearbox (0–450/0–1,800 RPM), this drill handles everything from drilling concrete with SDS masonry bits to fine screwdriving in cabinetry. The 13mm keyless chuck accepts a full range of bit sizes and ensures quick, tool-free changes on the job.\n\nThe set includes two 2Ah batteries and a fast charger that tops up a 2Ah battery in just 60 minutes — minimising downtime. Compatible with all Bosch 18V Professional batteries (2Ah to 8Ah) for extended run time on larger jobs.`,
    tags: [
      'cordless drill',
      'Bosch',
      'power tools',
      'combi drill',
      'construction tools',
      'Dubai',
      '18V',
    ],
    seo: {
      title: 'Bosch GSB 18V-55 Cordless Combi Drill Dubai | Urban Choice',
      description:
        'Buy Bosch GSB 18V-55 cordless combi drill in Dubai. 55Nm, 2×2Ah batteries, professional grade. Available at Urban Choice for UAE contractors.',
      keywords: [
        'Bosch drill Dubai',
        'cordless drill UAE',
        '18V drill Dubai',
        'power tools UAE',
        'Bosch tools supplier Dubai',
      ],
    },
    availability: 'in_stock',
    featured: true,
    specifications: [
      { label: 'Brand', value: 'Bosch Professional' },
      { label: 'Voltage', value: '18V' },
      { label: 'Max Torque', value: '55 Nm (hard) / 35 Nm (soft)' },
      { label: 'Chuck', value: '13 mm Keyless' },
      { label: 'No Load Speed', value: '0–450 / 0–1,800 RPM' },
      { label: 'Hammering Rate', value: '0–27,000 BPM' },
      { label: 'Batteries', value: '2 × 2.0 Ah Li-Ion' },
      { label: 'Charger', value: 'Fast charger (60 min per 2Ah)' },
      { label: 'Weight (with battery)', value: '1.9 kg' },
    ],
    faqs: [
      {
        question: 'Is this compatible with other Bosch 18V Professional batteries?',
        answer:
          'Yes, all Bosch 18V Professional batteries (2Ah to 8Ah) are fully compatible with this drill and all Bosch Professional 18V tools.',
      },
      {
        question: 'Can it drill into concrete?',
        answer:
          'Yes, the hammer drill mode combined with SDS masonry bits makes this suitable for drilling into concrete, brick, and blockwork up to 13mm diameter.',
      },
    ],
    schema: {
      name: 'Bosch GSB 18V-55 Cordless Combi Drill',
      description: '18V professional cordless combi drill with 55Nm torque and 2×2Ah batteries',
      brand: 'Bosch',
      sku: 'UC-HT-002',
    },
    createdAt: '2024-06-10',
    updatedAt: '2025-01-01',
  },
];

// ── Utility functions ────────────────────────────────────────────────────────

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (categorySlug: string): Product[] =>
  products.filter((p) => p.category === categorySlug);

export const getFeaturedProducts = (limit?: number): Product[] => {
  const featured = products.filter((p) => p.featured);
  return limit ? featured.slice(0, limit) : featured;
};

export const getRelatedProducts = (product: Product, limit = 4): Product[] =>
  products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);

export const searchProducts = (query: string): Product[] => {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.tags.some((t) => t.includes(q)) ||
      p.category.includes(q),
  );
};

export const getProductSlugs = (): string[] => products.map((p) => p.slug);

export const getCategorySlugs = (): string[] => [...new Set(products.map((p) => p.category))];
