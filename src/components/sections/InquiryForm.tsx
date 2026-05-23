'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { siteConfig } from '@/data/site-config';
import { generateWhatsAppUrl } from '@/lib/utils';

interface InquiryFormProps {
  productName?: string;
  subject?: string;
}

export default function InquiryForm({ productName, subject }: InquiryFormProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get('name') as string).trim();
    const email = (data.get('email') as string).trim();
    const phone = (data.get('phone') as string).trim();
    const company = (data.get('company') as string).trim();
    const subj = (data.get('subject') as string).trim();
    const message = (data.get('message') as string).trim();

    const lines: string[] = [];
    lines.push(`Hi Urban Choice! I have an inquiry.`);
    lines.push('');
    lines.push(`*Name:* ${name}`);
    lines.push(`*Email:* ${email}`);
    if (phone) lines.push(`*Phone:* ${phone}`);
    if (company) lines.push(`*Company:* ${company}`);
    lines.push(`*Subject:* ${subj}`);
    lines.push('');
    lines.push(`*Message:*`);
    lines.push(message);

    const waUrl = generateWhatsAppUrl(siteConfig.business.whatsapp, lines.join('\n'));
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="inquiry-name" className="text-sm font-medium">
            Full Name <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <Input id="inquiry-name" name="name" placeholder="Your name" required minLength={2} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="inquiry-email" className="text-sm font-medium">
            Email Address <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <Input
            id="inquiry-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="inquiry-phone" className="text-sm font-medium">
            Phone Number
          </label>
          <Input id="inquiry-phone" name="phone" type="tel" placeholder="+971 50 000 0000" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="inquiry-company" className="text-sm font-medium">
            Company / Organization
          </label>
          <Input id="inquiry-company" name="company" placeholder="Optional" />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="inquiry-subject" className="text-sm font-medium">
          Subject <span style={{ color: '#ef4444' }}>*</span>
        </label>
        <Input
          id="inquiry-subject"
          name="subject"
          defaultValue={subject || (productName ? `Inquiry about: ${productName}` : '')}
          placeholder="How can we help you?"
          required
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="inquiry-message" className="text-sm font-medium">
          Message <span style={{ color: '#ef4444' }}>*</span>
        </label>
        <Textarea
          id="inquiry-message"
          name="message"
          placeholder="Tell us more about your requirements…"
          rows={5}
          required
          minLength={10}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full text-white"
        style={{ backgroundColor: '#25D366' }}
      >
        <MessageCircle className="h-5 w-5" />
        Send via WhatsApp
      </Button>

      <p className="text-muted-foreground text-center text-xs">
        Clicking the button will open WhatsApp with your message pre-filled — just hit send.
      </p>
    </form>
  );
}
