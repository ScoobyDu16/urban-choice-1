import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { FOOTER_LINKS } from '@/constants';
import { generateWhatsAppUrl, generateTelUrl, generateMailtoUrl } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Logo } from '@/components/layout/Logo';

/* Dark-navy footer background — fixed so it shows regardless of dark/light mode */
const navyBg = 'hsl(215 50% 9%)';

export default function Footer() {
  const { business } = siteConfig;
  const currentYear = new Date().getFullYear();

  const socialLabels: Record<string, string> = {
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'X (Twitter)',
    linkedin: 'LinkedIn',
    youtube: 'YouTube',
    pinterest: 'Pinterest',
  };

  return (
    <footer role="contentinfo" style={{ backgroundColor: navyBg }}>
      {/* Orange top accent line */}
      <div className="h-1 w-full" style={{ backgroundColor: 'hsl(var(--color-primary))' }} />

      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* ── Brand column ──────────────────────────────────── */}
          <div className="lg:col-span-1">
            <Logo textSize="text-base" light />

            <p className="mt-4 text-sm leading-relaxed text-white/60">{business.description}</p>

            {/* Social links */}
            {Object.values(business.socialLinks).some(Boolean) && (
              <div className="mt-6 flex gap-3">
                {Object.entries(business.socialLinks).map(([platform, url]) => {
                  if (!url) return null;
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:border-primary hover:text-primary flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-200 hover:scale-110"
                      aria-label={`Follow us on ${socialLabels[platform] ?? platform}`}
                      title={socialLabels[platform] ?? platform}
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── Company links ─────────────────────────────────── */}
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-wider text-white/40 uppercase">
              Company
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary text-sm text-white/60 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Support links ─────────────────────────────────── */}
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-wider text-white/40 uppercase">
              Support
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary text-sm text-white/60 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact details ───────────────────────────────── */}
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-wider text-white/40 uppercase">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={generateTelUrl(business.phone)}
                  className="hover:text-primary flex items-start gap-2 text-sm text-white/60 transition-colors duration-200"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  {business.phone}
                </a>
              </li>
              {business.mobile && (
                <li>
                  <a
                    href={generateTelUrl(business.mobile)}
                    className="hover:text-primary flex items-start gap-2 text-sm text-white/60 transition-colors duration-200"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                    {business.mobile}
                  </a>
                </li>
              )}
              <li>
                <a
                  href={generateWhatsAppUrl(business.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-green-400 transition-colors duration-200 hover:text-green-300"
                >
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  WhatsApp Chat
                </a>
              </li>
              <li>
                <a
                  href={generateMailtoUrl(business.email)}
                  className="hover:text-primary flex items-start gap-2 text-sm text-white/60 transition-colors duration-200"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  {business.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-white/50">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <address className="leading-relaxed not-italic">
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
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/40">
            &copy; {currentYear} {business.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LINKS.legal.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-primary text-xs text-white/40 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
