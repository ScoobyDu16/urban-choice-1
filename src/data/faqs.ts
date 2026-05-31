import type { FAQ } from '@/types';

export const faqs: FAQ[] = [
  {
    id: 'faq-001',
    question: 'How do I place an inquiry for building materials?',
    answer:
      'You can send us an inquiry through the contact form on any product page, via email at urbanchoicebmt@gmail.com, or by clicking the WhatsApp button for instant messaging. Our team typically responds within 2 business hours, Saturday through Thursday.',
    category: 'ordering',
  },
  {
    id: 'faq-002',
    question: 'Do you offer bulk or project pricing?',
    answer:
      'Yes, we offer competitive bulk and project pricing for contractors, developers, and institutional buyers. Contact us with your material schedule and quantities and we will provide a customised quotation within 24 hours. We regularly supply large residential developments, hotels, and commercial fit-outs across the UAE.',
    category: 'pricing',
  },
  {
    id: 'faq-003',
    question: 'Do you Deliver across Dubai and the UAE?',
    answer:
      'Yes, we deliver building materials across Dubai, Sharjah, Abu Dhabi, and other UAE emirates. Delivery lead time depends on product availability and quantity. Contact us for a delivery schedule and logistics quote for your project.',
    category: 'delivery',
  },
  {
    id: 'faq-004',
    question: 'Are your products compliant with UAE standards?',
    answer:
      'Yes. All products we supply — including safety items, sanitary ware, electrical items, plumbing items, power tools, building materials, and paints — comply with applicable UAE and international standards. We source from established, reputable manufacturers across all our product categories.',
    category: 'products',
  },
  {
    id: 'faq-005',
    question: 'How quickly can I get a quotation?',
    answer:
      'For standard inquiries, we provide quotations within 24 hours. For larger project schedules or bulk material lists, we typically respond within 48 hours. Send us your requirements via the contact form, email, or WhatsApp and our team will get back to you promptly.',
    category: 'services',
  },
  {
    id: 'faq-007',
    question: 'Do you supply materials for small residential renovations?',
    answer:
      'Absolutely. We serve everyone from individual homeowners renovating a single apartment to large developers building hundreds of villas. Whether you need 5 litres of paint or 500 boxes of tiles, we are happy to help you find the right product at the right price.',
    category: 'ordering',
  },
  {
    id: 'faq-008',
    question: 'Can you source specific products not listed on your website?',
    answer:
      'Yes. Our sourcing team can procure specific materials, brands, or specifications not currently in our standard stock. Send us a product inquiry with technical details, and we will confirm availability and lead time. We regularly source specialist items for hotel and luxury residential projects.',
    category: 'products',
  },
  {
    id: 'faq-009',
    question: 'What payment methods do you accept?',
    answer:
      'We accept cash, bank transfer (TT), and cheque. For regular customers and contractors, we offer credit account facilities subject to approval. Please contact our accounts team for credit application details.',
    category: 'pricing',
  },
  {
    id: 'faq-010',
    question: 'Do you offer delivery scheduling for project sites?',
    answer:
      'Yes. We can coordinate phased deliveries to match your construction schedule, ensuring materials arrive on-site exactly when needed. This is especially useful for large projects where storage space is limited. Contact our team with your project timeline and we will arrange a delivery plan accordingly.',
    category: 'services',
  },
];

export const getFaqsByCategory = (category: string): FAQ[] =>
  faqs.filter((f) => f.category === category);
