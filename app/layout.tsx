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
  metadataBase: new URL('https://www.ml.lviv.ua'),
  title: {
    default: 'Миколаївська міська лікарня',
    template: '%s | Миколаївська міська лікарня',
  },
  description: 'Офіційний сайт Миколаївської міської лікарні. Амбулаторне та стаціонарне лікування, хірургія, діагностика. Безкоштовно за 12 пакетами НСЗУ. Миколаїв, Львівська область.',
  openGraph: {
    siteName: 'Миколаївська міська лікарня',
    locale: 'uk_UA',
    type: 'website',
  },
  robots: { index: true, follow: true },
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
