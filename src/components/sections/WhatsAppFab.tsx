'use client';

import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/site-config';
import { generateWhatsAppUrl, generateTelUrl } from '@/lib/utils';
import { trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics';

export default function WhatsAppFab() {
  const [expanded, setExpanded] = useState(false);
  const { business } = siteConfig;

  if (!siteConfig.features.whatsapp) return null;

  const waUrl = generateWhatsAppUrl(
    business.whatsapp,
    'Hi! I would like to learn more about your products.',
  );

  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2"
          >
            {/* WhatsApp CTA */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackWhatsAppClick('fab');
                setExpanded(false);
              }}
              className="flex items-center gap-3 rounded-2xl bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-green-600"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              Chat on WhatsApp
            </a>

            {/* Call CTA */}
            <a
              href={generateTelUrl(business.mobile || business.phone)}
              onClick={() => {
                trackPhoneClick('fab');
                setExpanded(false);
              }}
              className="flex items-center gap-3 rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:opacity-90"
              style={{ backgroundColor: 'hsl(var(--color-primary))' }}
            >
              <Phone className="h-5 w-5 shrink-0" />
              {business.mobile || business.phone}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setExpanded(!expanded)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-colors hover:bg-green-600"
        aria-label={expanded ? 'Close contact options' : 'Open contact options'}
      >
        <AnimatePresence mode="wait">
          {expanded ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
