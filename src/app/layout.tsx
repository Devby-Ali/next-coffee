import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { dana, morabba } from '@/components/ui/fonts';
import IconsProvider from '@/components/IconsProvider';

export const metadata: Metadata = {
  title: {
    template: '%s | SkyCoffee',
    default: 'SkyCoffee',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${dana.variable} ${morabba.variable} *:font-dana antialiased bg-gray-100 dark:bg-zinc-800`}
        suppressHydrationWarning
      >
        <IconsProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
