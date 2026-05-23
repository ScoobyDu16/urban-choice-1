import type { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 'test-001',
    name: 'Ahmed Al Rashidi',
    company: 'Al Rashidi Contracting LLC',
    role: 'General Contractor',
    content:
      'Urban Choice has been our go-to supplier for over 3 years. Their range of tiles, sanitary ware, and electrical materials is unmatched in Dubai. Competitive pricing and fast delivery keep our projects on schedule.',
    rating: 5,
    featured: true,
  },
  {
    id: 'test-002',
    name: 'Priya Sharma',
    company: 'Elegant Interiors Dubai',
    role: 'Interior Designer',
    content:
      'I specify Urban Choice for all my residential fit-out projects. The Jotun paint range and RAK Ceramics sanitary ware they stock are exactly what high-end clients expect. The team always helps me source specific items quickly.',
    rating: 5,
    featured: true,
  },
  {
    id: 'test-003',
    name: 'Mohammed Al Farsi',
    role: 'Property Developer',
    content:
      'We used Urban Choice to supply materials for a 50-villa development in Dubailand. Their bulk pricing is excellent and the quality of every item — from Dulux exterior paint to Grohe taps — met our specifications perfectly.',
    rating: 5,
    featured: true,
  },
  {
    id: 'test-004',
    name: "James O'Brien",
    company: 'Gulf MEP Solutions',
    role: 'MEP Project Manager',
    content:
      'Reliable stock of Legrand electrical items and Wavin plumbing pipes is critical for our projects. Urban Choice rarely lets us down on availability, and their technical team understands contractor requirements.',
    rating: 5,
    featured: true,
  },
  {
    id: 'test-005',
    name: 'Layla Hassan',
    role: 'Homeowner, Dubai Hills',
    content:
      'I renovated my apartment completely using materials from Urban Choice. The tile selection is stunning — I found exactly the marble-look porcelain I wanted. The staff were patient and very knowledgeable.',
    rating: 5,
    featured: false,
  },
  {
    id: 'test-006',
    name: 'Rajesh Nair',
    company: 'Nair Brothers Fit-Out',
    role: 'Fit-Out Contractor',
    content:
      'Quick response to inquiries and honest product advice is what keeps me coming back. Urban Choice quoted me the best price on Bosch power tools for my site, and the delivery was next day.',
    rating: 4,
    featured: false,
  },
];

export const getFeaturedTestimonials = (): Testimonial[] => testimonials.filter((t) => t.featured);

/** True when there is at least one testimonial to display */
export const hasTestimonials = (): boolean => testimonials.length > 0;
