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
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import BackToTop from '@/components/ui/BackToTop';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = generateBaseMetadata();

// Inline script — runs before paint to set html.dark without flash
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Must be first — sets dark class before any CSS renders to avoid flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <GTMScript />
      </head>
      <body className="flex min-h-full flex-col font-[--font-inter]">
        <GTMNoScript />
        <JsonLd data={[generateOrganizationSchema(), generateWebsiteSchema()]} id="org-schema" />
        <ThemeProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppFab />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
