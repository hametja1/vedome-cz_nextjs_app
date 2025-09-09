import type { Metadata } from 'next';
import './globals.css';
import { fontVariables } from '@/lib/font';
import { cn } from '@/lib/utils';
import { HeaderNav } from '@/components/defaultLayout/header-nav';

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
      <body className={cn(fontVariables, 'font-sans antialiased')}>
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
