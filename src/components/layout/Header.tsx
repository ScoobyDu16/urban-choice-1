'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, Phone, MessageCircle, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/constants';
import { siteConfig } from '@/data/site-config';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/layout/Logo';
import SearchDialog from '@/components/sections/SearchDialog';
import ThemeToggle from '@/components/layout/ThemeToggle';
import { generateWhatsAppUrl, generateTelUrl } from '@/lib/utils';
import { trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const { business } = siteConfig;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDrawerOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled ? 'supports-backdrop-filter:bg-opacity-95 shadow-lg backdrop-blur' : '',
        )}
        style={{ backgroundColor: 'hsl(215 50% 9%)' }}
        role="banner"
      >
        {/* ── Orange top bar ───────────────────────────────────────────── */}
        <div
          className="hidden text-xs text-white md:block"
          style={{
            backgroundColor: 'hsl(var(--color-primary))',
            borderBottom: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          <div className="container mx-auto flex h-8 max-w-7xl items-center justify-between px-4">
            <p className="text-white/80">
              {business.businessHours[0]?.days}: {business.businessHours[0]?.hours}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={generateTelUrl(business.phone)}
                className="flex items-center gap-1 text-white/90 transition-colors hover:text-white hover:underline"
                onClick={() => trackPhoneClick('header-topbar')}
                aria-label={`Call us at ${business.phone}`}
              >
                <Phone className="h-3 w-3" />
                {business.phone}
              </a>
              {business.mobile && (
                <a
                  href={generateTelUrl(business.mobile)}
                  className="flex items-center gap-1 text-white/90 transition-colors hover:text-white hover:underline"
                  onClick={() => trackPhoneClick('header-topbar-mobile')}
                  aria-label={`Call us at ${business.mobile}`}
                >
                  <Phone className="h-3 w-3" />
                  {business.mobile}
                </a>
              )}
              <a
                href={generateWhatsAppUrl(
                  business.whatsapp,
                  'Hi, I have an inquiry about your products.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 rounded bg-green-500 px-2 py-0.5 text-white transition-colors hover:bg-green-600"
                onClick={() => trackWhatsAppClick('header-topbar')}
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="h-3 w-3" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* ── Main nav ─────────────────────────────────────────────────── */}
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 py-10 md:py-0">
          <Logo textSize="text-lg" light />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-all duration-200',
                  pathname === link.href
                    ? 'font-semibold'
                    : 'text-white/70 hover:bg-white/10 hover:text-white',
                )}
                style={pathname === link.href ? { color: 'hsl(var(--color-primary))' } : {}}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="rounded-md p-2 text-white/60 transition-all duration-200 hover:bg-white/10 hover:text-white"
              aria-label="Open search"
            >
              <Search className="h-5 w-5" />
            </button>

            <ThemeToggle />

            <Button
              asChild
              size="sm"
              className="hidden font-semibold text-white transition-all duration-200 hover:scale-105 hover:opacity-90 md:inline-flex"
              style={{ backgroundColor: 'hsl(var(--color-primary))', color: '#fff' }}
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>

            {/* Hamburger */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="rounded-md p-2 text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white md:hidden"
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              aria-controls="mobile-drawer"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setDrawerOpen(false)}
              aria-hidden="true"
            />

            {/* Panel — slides in from the right */}
            <motion.aside
              key="drawer-panel"
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 z-70 flex h-full w-[min(320px,90vw)] flex-col shadow-2xl md:hidden"
              style={{ backgroundColor: 'hsl(var(--color-background))' }}
            >
              {/* Drawer header */}
              <div
                className="flex items-center justify-between border-b px-5 py-4"
                style={{ backgroundColor: 'hsl(215 50% 9%)' }}
              >
                <Logo textSize="text-base" href="/" light />
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Mobile navigation">
                <ul className="space-y-1">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          'flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                          pathname === link.href
                            ? 'font-semibold'
                            : 'text-foreground hover:bg-muted',
                        )}
                        style={
                          pathname === link.href
                            ? {
                                backgroundColor: 'hsl(var(--color-primary) / 0.10)',
                                color: 'hsl(var(--color-primary))',
                              }
                            : {}
                        }
                        aria-current={pathname === link.href ? 'page' : undefined}
                      >
                        {link.label}
                        <ChevronRight
                          className={cn(
                            'h-4 w-4 transition-colors',
                            pathname === link.href ? 'text-primary' : 'text-muted-foreground',
                          )}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="my-6 border-t" />

                {/* Business hours */}
                <p className="text-muted-foreground mb-4 px-1 text-xs font-semibold tracking-wider uppercase">
                  Business Hours
                </p>
                <ul className="space-y-1.5 px-1">
                  {business.businessHours.map((h, i) => (
                    <li key={i} className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{h.days}</span>
                      <span className="font-medium">{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Drawer footer — contact CTAs */}
              <div className="bg-muted/40 space-y-3 border-t p-4">
                <a
                  href={generateWhatsAppUrl(
                    business.whatsapp,
                    'Hi, I would like to inquire about your building materials.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-600"
                  onClick={() => trackWhatsAppClick('mobile-drawer')}
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={generateTelUrl(business.phone)}
                    className="border-border bg-background text-foreground hover:bg-accent flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors"
                    onClick={() => trackPhoneClick('mobile-drawer')}
                  >
                    <Phone className="text-primary h-4 w-4" />
                    Call Us
                  </a>
                  <Link
                    href="/contact"
                    className="border-border bg-background text-foreground hover:bg-accent flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
