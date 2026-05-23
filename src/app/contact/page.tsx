import React from 'react';
import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import InquiryForm from '@/components/sections/InquiryForm';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { siteConfig } from '@/data/site-config';
import { generatePageMetadata } from '@/lib/metadata';
import { generateWhatsAppUrl, generateTelUrl, generateMailtoUrl } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with Urban Choice Building Materials in Dubai. Send an inquiry, chat on WhatsApp, or call us. We respond promptly.',
  keywords: [
    'contact Urban Choice Dubai',
    'building materials inquiry Dubai',
    'get a quote Dubai',
    'urban choice phone number',
  ],
  canonicalPath: '/contact',
});

export default function ContactPage() {
  const { business } = siteConfig;

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: 'Contact', href: '/contact' }]} />

      <div className="mt-4 mb-10">
        <p
          className="mb-1 text-sm font-bold tracking-widest uppercase"
          style={{ color: 'hsl(var(--color-primary))' }}
        >
          Contact Us
        </p>
        <h1 className="text-3xl font-extrabold sm:text-4xl">Get in Touch</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">
          Have a question, need a quote, or want to discuss a bulk order? Our team in Dubai is ready
          to help. Send us a message or reach out directly — we respond promptly.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        {/* Contact Info */}
        <aside className="space-y-8 lg:col-span-2">
          <div className="bg-card space-y-5 rounded-xl border p-6">
            <h2 className="text-lg font-semibold">Contact Information</h2>

            {/* Landline */}
            <a
              href={generateTelUrl(business.phone)}
              className="group flex items-start gap-3"
              aria-label={`Call us at ${business.phone}`}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors"
                style={{ backgroundColor: 'hsl(var(--color-primary) / 0.10)' }}
              >
                <Phone className="text-primary h-5 w-5" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Landline</p>
                <p className="group-hover:text-primary font-medium transition-colors">
                  {business.phone}
                </p>
              </div>
            </a>

            {/* Mobile */}
            {business.mobile && (
              <a
                href={generateTelUrl(business.mobile)}
                className="group flex items-start gap-3"
                aria-label={`Call us at ${business.mobile}`}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors"
                  style={{ backgroundColor: 'hsl(var(--color-primary) / 0.10)' }}
                >
                  <Phone className="text-primary h-5 w-5" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Mobile</p>
                  <p className="group-hover:text-primary font-medium transition-colors">
                    {business.mobile}
                  </p>
                </div>
              </a>
            )}

            <a
              href={generateWhatsAppUrl(business.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 transition-colors group-hover:bg-green-200 dark:bg-green-900/30">
                <MessageCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs">WhatsApp</p>
                <p className="font-medium text-green-600 transition-colors group-hover:text-green-700">
                  Chat Now
                </p>
              </div>
            </a>

            <a
              href={generateMailtoUrl(business.email, 'Product Inquiry')}
              className="group flex items-start gap-3"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors"
                style={{ backgroundColor: 'hsl(var(--color-primary) / 0.10)' }}
              >
                <Mail className="text-primary h-5 w-5" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Email</p>
                <p className="group-hover:text-primary font-medium transition-colors">
                  {business.email}
                </p>
              </div>
            </a>

            <div className="flex items-start gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: 'hsl(var(--color-primary) / 0.10)' }}
              >
                <MapPin className="text-primary h-5 w-5" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Address</p>
                <address className="text-sm leading-relaxed font-medium not-italic">
                  {business.address.city}
                  <br />
                  {business.address.country}
                  {business.address.postalBox && (
                    <>
                      <br />
                      {business.address.postalBox}
                    </>
                  )}
                </address>
                {business.googleMapsLink && (
                  <a
                    href={business.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary mt-1 inline-block text-xs hover:underline"
                  >
                    View on Google Maps →
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-card rounded-xl border p-6">
            <div className="mb-4 flex items-center gap-2">
              <Clock className="text-primary h-5 w-5" />
              <h2 className="text-lg font-semibold">Business Hours</h2>
            </div>
            <ul className="space-y-2">
              {business.businessHours.map((h, i) => (
                <li key={i} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{h.days}</span>
                  <span className="font-medium">{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Contact Form + Map */}
        <div className="space-y-6 lg:col-span-3">
          <div className="bg-card rounded-xl border p-8">
            <h2 className="mb-2 text-xl font-bold">Send Us a Message</h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Fill out the form below and we&apos;ll get back to you promptly.
            </p>
            <InquiryForm subject="General Inquiry" />
          </div>

          {/* Google Maps embed */}
          {business.googleMapsEmbedUrl && (
            <div className="overflow-hidden rounded-xl border">
              <iframe
                src={business.googleMapsEmbedUrl}
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${business.name} location on Google Maps`}
                aria-label="Google Maps showing our Dubai location"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
