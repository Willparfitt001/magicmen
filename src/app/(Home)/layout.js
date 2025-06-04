import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import {
  DesktopNavigation,
  MobileNavigation,
  ScrollingTicker,
} from '@/components/home/naviagation';
import { AuthProvider } from '@/contexts/AuthContext';

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

export default function RootLayout({ children }) {
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
      <body className={`bg-black relative`}>
        {/* Ticker for all screen sizes */}
        <AuthProvider>
          <ScrollingTicker messages={tickerMessages} />

          {/* Mobile Navigation */}
          <MobileNavigation />

          {/* Desktop Header */}
          <DesktopNavigation phoneNumber={phoneNumber} />

          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
