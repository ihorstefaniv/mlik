import type { Metadata } from 'next';
import { Lora, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const lora = Lora({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
});

const sourceSans3 = Source_Sans_3({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Миколаївська міська лікарня',
    template: '%s | Миколаївська міська лікарня',
  },
  description: 'Миколаївська міська лікарня — спеціалізована медична допомога. Амбулаторне та стаціонарне лікування, діагностика, медичні огляди.',
  keywords: ['лікарня', 'Миколаїв', 'медична допомога', 'стаціонар', 'поліклініка'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={`${lora.variable} ${sourceSans3.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
