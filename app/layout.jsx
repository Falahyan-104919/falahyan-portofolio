import { Roboto_Slab } from 'next/font/google';
import './globals.css';
import Headers from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairEffect';

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: 'Falahyan Portofolio',
  description: 'Falahyan portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoSlab.variable} antialiased`}>
        <Headers />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
