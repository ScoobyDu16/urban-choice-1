'use client';

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { siteConfig } from '@/data/site-config';
import { generateWhatsAppUrl } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { trackInquirySubmit } from '@/lib/analytics';

interface InquiryFormProps {
  productName?: string;
  subject?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): FormErrors {
  const errors: FormErrors = {};

  if (!fields.name) {
    errors.name = 'Full name is required.';
  } else if (fields.name.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  if (!fields.email) {
    errors.email = 'Email address is required.';
  } else if (!EMAIL_RE.test(fields.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!fields.subject) {
    errors.subject = 'Subject is required.';
  }

  if (!fields.message) {
    errors.message = 'Message is required.';
  } else if (fields.message.length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }

  return errors;
}

export default function InquiryForm({ productName, subject }: InquiryFormProps) {
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  function handleBlur(field: string) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

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

    const validationErrors = validate({ name, email, subject: subj, message });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Mark all required fields as touched so errors are visible
      setTouched({ name: true, email: true, subject: true, message: true });
      return;
    }

    setErrors({});

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

    trackInquirySubmit(productName);
    const waUrl = generateWhatsAppUrl(siteConfig.business.whatsapp, lines.join('\n'));
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }

  const fieldClass = (field: keyof FormErrors) =>
    cn(touched[field] && errors[field] ? 'border-red-500 focus-visible:ring-red-500' : '');

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="inquiry-name" className="text-sm font-medium">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="inquiry-name"
            name="name"
            placeholder="Your name"
            className={fieldClass('name')}
            onBlur={() => handleBlur('name')}
          />
          {touched.name && errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="inquiry-email" className="text-sm font-medium">
            Email Address <span className="text-red-500">*</span>
          </label>
          <Input
            id="inquiry-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className={fieldClass('email')}
            onBlur={() => handleBlur('email')}
          />
          {touched.email && errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Phone (optional) */}
        <div className="space-y-1.5">
          <label htmlFor="inquiry-phone" className="text-sm font-medium">
            Phone Number
          </label>
          <Input id="inquiry-phone" name="phone" type="tel" placeholder="+971 50 000 0000" />
        </div>

        {/* Company (optional) */}
        <div className="space-y-1.5">
          <label htmlFor="inquiry-company" className="text-sm font-medium">
            Company / Organization
          </label>
          <Input id="inquiry-company" name="company" placeholder="Optional" />
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-1.5">
        <label htmlFor="inquiry-subject" className="text-sm font-medium">
          Subject <span className="text-red-500">*</span>
        </label>
        <Input
          id="inquiry-subject"
          name="subject"
          defaultValue={subject || (productName ? `Inquiry about: ${productName}` : '')}
          placeholder="How can we help you?"
          className={fieldClass('subject')}
          onBlur={() => handleBlur('subject')}
        />
        {touched.subject && errors.subject && (
          <p className="text-xs text-red-500">{errors.subject}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="inquiry-message" className="text-sm font-medium">
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="inquiry-message"
          name="message"
          placeholder="Tell us more about your requirements…"
          rows={5}
          className={fieldClass('message')}
          onBlur={() => handleBlur('message')}
        />
        {touched.message && errors.message && (
          <p className="text-xs text-red-500">{errors.message}</p>
        )}
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
