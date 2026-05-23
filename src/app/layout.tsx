import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFab from '@/components/sections/WhatsAppFab';
import { GTMScript, GTMNoScript } from '@/components/seo/GoogleTagManager';
import JsonLd from '@/components/seo/JsonLd';
import { generateBaseMetadata } from '@/lib/metadata';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/schema';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = generateBaseMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <head>
        <GTMScript />
      </head>
      <body className="flex min-h-full flex-col font-[--font-inter]">
        <GTMNoScript />
        <JsonLd data={[generateOrganizationSchema(), generateWebsiteSchema()]} id="org-schema" />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
