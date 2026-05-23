'use client';

import { GTM_EVENTS } from '@/constants';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

export function pushGTMEvent(event: string, data?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}

export const trackInquirySubmit = (productName?: string) =>
  pushGTMEvent(GTM_EVENTS.INQUIRY_SUBMIT, { product_name: productName });

export const trackWhatsAppClick = (source?: string) =>
  pushGTMEvent(GTM_EVENTS.WHATSAPP_CLICK, { click_source: source });

export const trackPhoneClick = (source?: string) =>
  pushGTMEvent(GTM_EVENTS.PHONE_CLICK, { click_source: source });

export const trackEmailClick = (source?: string) =>
  pushGTMEvent(GTM_EVENTS.EMAIL_CLICK, { click_source: source });

export const trackCtaClick = (ctaLabel: string, destination?: string) =>
  pushGTMEvent(GTM_EVENTS.CTA_CLICK, { cta_label: ctaLabel, destination });

export const trackProductView = (productId: string, productName: string, category: string) =>
  pushGTMEvent(GTM_EVENTS.PRODUCT_VIEW, {
    product_id: productId,
    product_name: productName,
    category,
  });

export const trackSearch = (query: string, resultsCount: number) =>
  pushGTMEvent(GTM_EVENTS.SEARCH, { search_term: query, results_count: resultsCount });
