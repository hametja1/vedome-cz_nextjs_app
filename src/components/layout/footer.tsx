import Link from 'next/link';
import { SocialIcon } from '@/components/basics/social-icon';
import { Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary px-[10%] py-12 text-white md:px-[15%]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo a popis */}
        <div className="lg:col-span-1">
          <div className="mb-4 flex items-center">
            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white">
              <span className="text-sm font-bold text-black">V</span>
            </div>
            <span className="text-xl font-bold">Vědomě</span>
          </div>
          <p className="text-secondary-foreground mb-4 leading-relaxed">
            Spojení výživy a osobního rozvoje pro váš vědomý život
          </p>
          <div className="-ml-2.5 flex gap-2">
            <SocialIcon href="https://instagram.com">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://facebook.com">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* Rychlé odkazy */}
        <div className="lg:col-span-1">
          <h3 className="mb-4 text-lg font-semibold">Rychlé odkazy</h3>
          <nav className="space-y-2">
            <Link
              href="/"
              className="text-secondary-foreground block transition-colors duration-200 hover:text-white"
            >
              Úvod
            </Link>
            <Link
              href="/medailonky"
              className="text-secondary-foreground block transition-colors duration-200 hover:text-white"
            >
              O nás
            </Link>
            <Link
              href="/sluzby"
              className="text-secondary-foreground block transition-colors duration-200 hover:text-white"
            >
              Služby
            </Link>
            <Link
              href="/cenik"
              className="text-secondary-foreground block transition-colors duration-200 hover:text-white"
            >
              Ceník
            </Link>
            <Link
              href="/kontakty"
              className="text-secondary-foreground block transition-colors duration-200 hover:text-white"
            >
              Kontakty
            </Link>
          </nav>
        </div>

        {/* Kontakty */}
        <div className="lg:col-span-1">
          <h3 className="mb-4 text-lg font-semibold">Kontakty</h3>
          <div className="space-y-3">
            <div className="flex-col space-y-2">
              <p className="text-secondary-foreground font-medium">Výživové poradenství</p>
              <div className="flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <Mail height={16} width={16} className="min-w-4 pt-0.5" />
                  <a
                    href="mailto:example.email@email.com"
                    className="text-secondary-foreground block text-sm font-semibold transition-colors duration-200 hover:text-white"
                  >
                    example.email@email.com
                  </a>
                </div>

                <div className="flex items-center space-x-2">
                  <Phone height={16} width={16} className="pt-0.5" />
                  <a
                    href="tel:+420123456789"
                    className="text-secondary-foreground block text-sm font-semibold transition-colors duration-200 hover:text-white"
                  >
                    +420 123 456 789
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-col space-y-2">
              <p className="text-secondary-foreground font-medium">Koučink</p>
              <div className="flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <Mail height={16} width={16} className="min-w-4 pt-0.5" />
                  <a
                    href="mailto:example.email@email.com"
                    className="text-secondary-foreground block text-sm font-semibold transition-colors duration-200 hover:text-white"
                  >
                    example.email@email.com
                  </a>
                </div>

                <div className="flex items-center space-x-2">
                  <Phone height={16} width={16} className="pt-0.5" />
                  <a
                    href="tel:+420123456789"
                    className="text-secondary-foreground block text-sm font-semibold transition-colors duration-200 hover:text-white"
                  >
                    +420 123 456 789
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Právní informace */}
        <div className="lg:col-span-1">
          <h3 className="mb-4 text-lg font-semibold">Právní informace</h3>
          <nav className="space-y-2">
            <Link
              href="/"
              className="text-secondary-foreground block transition-colors duration-200 hover:text-white"
            >
              Obchodní podmínky
            </Link>
            <Link
              href="/"
              className="text-secondary-foreground block transition-colors duration-200 hover:text-white"
            >
              Ochrana osobních údajů
            </Link>
          </nav>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-secondary-foreground mt-8 border-t pt-6">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-secondary-foreground text-sm">Copyright © 2026 Jan Hamet</p>
        </div>
      </div>
    </footer>
  );
}
