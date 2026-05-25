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
    question: 'Do you deliver across Dubai and the UAE?',
    answer:
      'Yes, we deliver building materials across Dubai, Sharjah, Abu Dhabi, and other UAE emirates. Delivery lead time depends on product availability and quantity. Contact us for a delivery schedule and logistics quote for your project.',
    category: 'delivery',
  },
  {
    id: 'faq-004',
    question: 'Are your products compliant with Dubai Municipality standards?',
    answer:
      'Yes. All products we supply — including safety items, sanitary ware, electrical items, plumbing pipes, power tools, building materials, and paints — comply with applicable Dubai Municipality and UAE standards. We source from established, reputable manufacturers across all 10 categories.',
    category: 'products',
  },
  {
    id: 'faq-005',
    question: 'Can I visit your showroom to see products?',
    answer:
      'Yes, we welcome project visits and showroom appointments. Our showroom in Dubai displays sanitary ware, hardware, and other product ranges. We are open Saturday to Thursday, 9:00 AM – 9:00 PM, and Friday 2:00 PM – 9:00 PM. Call us on 04 335 8298 or WhatsApp +971 54 586 8790 to arrange a visit.',
    category: 'services',
  },
  {
    id: 'faq-006',
    question: 'What brands of paint do you stock?',
    answer:
      'We stock a comprehensive range of premium paint brands including Jotun (Fenomastic, Essence, Majestic), Dulux (Weathershield, Diamond, Trade), Sigma, and Berger. All brands are available in custom colour mixes through their respective colour mixing systems.',
    category: 'products',
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
    question: 'Do you provide product samples?',
    answer:
      'Yes, product samples for sanitary ware, bathroom accessories, and other display items are available from our showroom. We recommend visiting to see the actual finish and quality before placing a large order. For out-of-town clients, we can arrange sample delivery for select products — contact us for details.',
    category: 'services',
  },
];

export const getFaqsByCategory = (category: string): FAQ[] =>
  faqs.filter((f) => f.category === category);
