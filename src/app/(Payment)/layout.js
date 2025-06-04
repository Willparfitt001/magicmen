import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import PaymentNav from '@/components/payment/naviagtion';
import { AuthProvider } from '@/contexts/AuthContext';
import PayementFooter from '@/components/payment/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Magic Men',
  description: 'Find amazing men stripper club in your area',
};

export default function PaymentLayout({ children }) {
  // Phone number display
  const phoneNumber = '1300 624 426';

  // Ticker messages
  const tickerMessages = ['HEN get FREE ENTRY for group bookings *T&Cs apply'];
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.cdnfonts.com/css/hightide"
          rel="stylesheet"
        />
      </head>
      <body className={`bg-black relative text-white`}>
        <PaymentNav />

        {children}
        <PayementFooter />
      </body>
    </html>
  );
}
