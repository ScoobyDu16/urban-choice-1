import type { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'cat-001',
    name: 'Paint & Finishes',
    slug: 'paint-finishes',
    description:
      'Premium interior and exterior paints, primers, varnishes, and surface finishes from leading global brands. Whether you need matte, satin, gloss, or specialty coatings, we stock everything for residential and commercial projects across Dubai and the UAE.',
    shortDescription: 'Interior & exterior paints, primers and specialty coatings.',
    icon: 'Paintbrush',
    image: {
      url: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&q=80',
      alt: 'Paint cans and brushes for interior and exterior painting',
      width: 800,
      height: 600,
    },
    subcategories: [
      {
        id: 'sub-001',
        name: 'Interior Paints',
        slug: 'interior-paints',
        description: 'Wall & ceiling paints',
      },
      {
        id: 'sub-002',
        name: 'Exterior Paints',
        slug: 'exterior-paints',
        description: 'Weather-resistant coatings',
      },
      {
        id: 'sub-003',
        name: 'Primers & Undercoats',
        slug: 'primers',
        description: 'Surface preparation products',
      },
      {
        id: 'sub-004',
        name: 'Specialty Finishes',
        slug: 'specialty-finishes',
        description: 'Textured, metallic, anti-fungal',
      },
    ],
    seo: {
      title: 'Paint & Finishes – Interior & Exterior Paints Dubai | Urban Choice',
      description:
        'Buy premium interior and exterior paints, primers, and specialty finishes in Dubai. Urban Choice stocks leading brands for all residential and commercial painting needs.',
      keywords: [
        'paint Dubai',
        'interior paint UAE',
        'exterior paint Dubai',
        'primer UAE',
        'building paint supplier Dubai',
      ],
    },
    featured: true,
  },
  {
    id: 'cat-002',
    name: 'Sanitary Ware',
    slug: 'sanitary-ware',
    description:
      'Complete range of bathroom and sanitary fittings including toilets, basins, bathtubs, shower systems, and faucets. We carry modern and classic styles from trusted manufacturers to suit every project budget and design vision.',
    shortDescription: 'Toilets, basins, bathtubs, showers and bathroom fittings.',
    icon: 'Bath',
    image: {
      url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
      alt: 'Modern bathroom with premium sanitary ware fittings',
      width: 800,
      height: 600,
    },
    subcategories: [
      {
        id: 'sub-005',
        name: 'Toilets & WCs',
        slug: 'toilets',
        description: 'Wall-hung, floor-mounted, smart toilets',
      },
      {
        id: 'sub-006',
        name: 'Basins & Vanities',
        slug: 'basins',
        description: 'Countertop, wall-hung, under-mount basins',
      },
      {
        id: 'sub-007',
        name: 'Shower Systems',
        slug: 'shower-systems',
        description: 'Rain showers, enclosures, trays',
      },
      {
        id: 'sub-008',
        name: 'Faucets & Mixers',
        slug: 'faucets',
        description: 'Basin, kitchen, bath mixers',
      },
    ],
    seo: {
      title: 'Sanitary Ware – Toilets, Basins & Bathroom Fittings Dubai | Urban Choice',
      description:
        'Shop complete sanitary ware in Dubai. Toilets, basins, showers, bathtubs, and faucets from top brands. Ideal for residential and commercial projects in UAE.',
      keywords: [
        'sanitary ware Dubai',
        'toilets Dubai',
        'bathroom fittings UAE',
        'basin supplier Dubai',
        'shower systems UAE',
      ],
    },
    featured: true,
  },
  {
    id: 'cat-003',
    name: 'Tiles & Flooring',
    slug: 'tiles-flooring',
    description:
      'Extensive selection of floor and wall tiles, natural stone, and flooring solutions for every space. From classic ceramics and polished porcelain to designer rectified tiles and large-format slabs for luxury projects.',
    shortDescription: 'Floor tiles, wall tiles, porcelain, ceramic and natural stone.',
    icon: 'Grid3x3',
    image: {
      url: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80',
      alt: 'Modern tiled floor and wall surface in Dubai property',
      width: 800,
      height: 600,
    },
    subcategories: [
      {
        id: 'sub-009',
        name: 'Floor Tiles',
        slug: 'floor-tiles',
        description: 'Porcelain, ceramic, natural stone',
      },
      {
        id: 'sub-010',
        name: 'Wall Tiles',
        slug: 'wall-tiles',
        description: 'Bathroom, kitchen, feature walls',
      },
      {
        id: 'sub-011',
        name: 'Large Format Tiles',
        slug: 'large-format',
        description: '60×60 cm and above slabs',
      },
      {
        id: 'sub-012',
        name: 'Mosaic & Decor',
        slug: 'mosaic',
        description: 'Decorative tiles, mosaics, borders',
      },
    ],
    seo: {
      title: 'Tiles & Flooring – Porcelain, Ceramic & Stone Tiles Dubai | Urban Choice',
      description:
        'Wide range of floor and wall tiles in Dubai. Porcelain, ceramic, large-format, and natural stone tiles for homes and commercial spaces across UAE.',
      keywords: [
        'tiles Dubai',
        'floor tiles UAE',
        'wall tiles Dubai',
        'porcelain tiles UAE',
        'ceramic tiles supplier Dubai',
      ],
    },
    featured: true,
  },
  {
    id: 'cat-004',
    name: 'Electrical Items',
    slug: 'electrical-items',
    description:
      'Comprehensive range of electrical supplies for construction and renovation projects. From cables and conduits to switches, sockets, circuit breakers, and LED lighting solutions — all meeting UAE safety standards.',
    shortDescription: 'Cables, switches, sockets, circuit breakers and LED lighting.',
    icon: 'Zap',
    image: {
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      alt: 'Electrical supplies including cables switches and circuit breakers',
      width: 800,
      height: 600,
    },
    subcategories: [
      {
        id: 'sub-013',
        name: 'Cables & Wires',
        slug: 'cables-wires',
        description: 'Power, data, flexible cables',
      },
      {
        id: 'sub-014',
        name: 'Switches & Sockets',
        slug: 'switches-sockets',
        description: 'Wall switches, power points, USB',
      },
      {
        id: 'sub-015',
        name: 'Circuit Breakers',
        slug: 'circuit-breakers',
        description: 'MCBs, RCDs, distribution boards',
      },
      {
        id: 'sub-016',
        name: 'LED Lighting',
        slug: 'led-lighting',
        description: 'Panels, downlights, strips, outdoor',
      },
    ],
    seo: {
      title: 'Electrical Items – Cables, Switches & LED Lighting Dubai | Urban Choice',
      description:
        'Buy electrical supplies in Dubai. Cables, switches, sockets, circuit breakers, and LED lighting for residential and commercial construction projects in UAE.',
      keywords: [
        'electrical supplies Dubai',
        'cables UAE',
        'LED lighting Dubai',
        'switches sockets UAE',
        'circuit breaker Dubai',
      ],
    },
    featured: true,
  },
  {
    id: 'cat-005',
    name: 'Plumbing Supplies',
    slug: 'plumbing-supplies',
    description:
      'Full range of plumbing materials for new construction and renovation. We stock pipes, fittings, valves, water heaters, and drainage systems from trusted brands compliant with Dubai Municipality standards.',
    shortDescription: 'Pipes, fittings, valves, water heaters and drainage systems.',
    icon: 'Pipette',
    image: {
      url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
      alt: 'Plumbing pipes fittings and water supply systems',
      width: 800,
      height: 600,
    },
    subcategories: [
      {
        id: 'sub-017',
        name: 'Pipes & Fittings',
        slug: 'pipes-fittings',
        description: 'PVC, CPVC, PPR, copper pipes',
      },
      {
        id: 'sub-018',
        name: 'Valves & Controls',
        slug: 'valves',
        description: 'Gate, ball, check, pressure valves',
      },
      {
        id: 'sub-019',
        name: 'Water Heaters',
        slug: 'water-heaters',
        description: 'Electric, solar, instant heaters',
      },
      {
        id: 'sub-020',
        name: 'Drainage Systems',
        slug: 'drainage',
        description: 'Drains, channels, inspection chambers',
      },
    ],
    seo: {
      title: 'Plumbing Supplies – Pipes, Fittings & Water Heaters Dubai | Urban Choice',
      description:
        'Complete plumbing supplies in Dubai. Pipes, fittings, valves, water heaters and drainage systems for construction and renovation projects in UAE.',
      keywords: [
        'plumbing supplies Dubai',
        'pipes UAE',
        'water heater Dubai',
        'plumbing fittings UAE',
        'drainage Dubai',
      ],
    },
    featured: false,
  },
  {
    id: 'cat-006',
    name: 'Hardware & Tools',
    slug: 'hardware-tools',
    description:
      'Professional-grade hardware, hand tools, power tools, fasteners, and construction accessories. Everything a contractor, engineer, or DIY enthusiast needs to complete projects efficiently and safely across Dubai.',
    shortDescription: 'Hand tools, power tools, fasteners and construction hardware.',
    icon: 'Wrench',
    image: {
      url: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80',
      alt: 'Professional hardware tools and construction equipment',
      width: 800,
      height: 600,
    },
    subcategories: [
      {
        id: 'sub-021',
        name: 'Hand Tools',
        slug: 'hand-tools',
        description: 'Hammers, screwdrivers, wrenches, levels',
      },
      {
        id: 'sub-022',
        name: 'Power Tools',
        slug: 'power-tools',
        description: 'Drills, grinders, saws, sanders',
      },
      {
        id: 'sub-023',
        name: 'Fasteners',
        slug: 'fasteners',
        description: 'Bolts, screws, anchors, nails',
      },
      {
        id: 'sub-024',
        name: 'Safety Equipment',
        slug: 'safety-equipment',
        description: 'PPE, helmets, gloves, harnesses',
      },
    ],
    seo: {
      title: 'Hardware & Tools – Hand Tools, Power Tools & Fasteners Dubai | Urban Choice',
      description:
        'Professional hardware and tools in Dubai. Hand tools, power tools, fasteners, and safety equipment for contractors and construction projects across UAE.',
      keywords: [
        'hardware Dubai',
        'tools UAE',
        'power tools Dubai',
        'fasteners UAE',
        'construction hardware Dubai',
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
