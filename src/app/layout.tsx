import type { Metadata } from 'next';
import './globals.css';
import { fontVariables } from '@/lib/font';
import { cn } from '@/lib/utils';
import { HeaderNav } from '@/components/layout/header-nav';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: {
    template: '%s - Vědomě.cz',
    default: 'Vědomě.cz',
  },
  description: 'Stránky zabívající se zdravým stravováním a přístupem k sobě samému.',
  applicationName: 'Vědomě.cz',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontVariables, 'flex min-h-screen flex-col font-sans antialiased')}>
        <HeaderNav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
