export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://urbanchoice.com';

export const PRODUCTS_PER_PAGE = 12;
export const FEATURED_PRODUCTS_COUNT = 8;
export const RELATED_PRODUCTS_COUNT = 4;

export const ISR_REVALIDATE_SECONDS = 3600; // 1 hour

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Categories', href: '/categories' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Products', href: '/products' },
    { label: 'Categories', href: '/categories' },
    { label: 'Contact Us', href: '/contact' },
  ],
  support: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Send Inquiry', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
} as const;

export const AVAILABILITY_LABELS: Record<string, string> = {
  in_stock: 'In Stock',
  out_of_stock: 'Out of Stock',
  pre_order: 'Pre-Order',
  discontinued: 'Discontinued',
};

export const AVAILABILITY_COLORS: Record<string, string> = {
  in_stock: 'text-green-600',
  out_of_stock: 'text-red-600',
  pre_order: 'text-yellow-600',
  discontinued: 'text-gray-500',
};

export const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Name: A-Z', value: 'name-asc' },
  { label: 'Name: Z-A', value: 'name-desc' },
  { label: 'Newest First', value: 'newest' },
] as const;

export const GTM_EVENTS = {
  INQUIRY_SUBMIT: 'inquiry_submit',
  WHATSAPP_CLICK: 'whatsapp_click',
  PHONE_CLICK: 'phone_click',
  EMAIL_CLICK: 'email_click',
  CTA_CLICK: 'cta_click',
  PRODUCT_VIEW: 'product_view',
  CATEGORY_VIEW: 'category_view',
  SEARCH: 'search',
  FILTER_APPLY: 'filter_apply',
} as const;

export const SCHEMA_CONTEXT = 'https://schema.org';
