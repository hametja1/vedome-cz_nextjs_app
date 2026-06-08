'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Logo } from '../basics/logo';
import { Menu, X } from 'lucide-react';

export function HeaderNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const navItems = [
    { title: 'Úvod', href: '/' },
    { title: 'O nás', href: '/medailonky' },
    { title: 'Služby', href: '/sluzby' },
    { title: 'Ceník', href: '/cenik' },
    { title: 'Kontakty', href: '/kontakty' },
  ];

  return (
    <header
      className={`fixed top-0 z-50 flex h-20 w-full items-center justify-between pr-8 pl-8 transition-colors duration-300 lg:justify-center ${isScrolled ? 'bg-background-secondary text-primary shadow-lg' : 'text-white'} ${isMenuOpen ? 'bg-black/95 transition-none lg:bg-transparent' : ''}`}
    >
      <Link href="/" onClick={() => setIsMenuOpen(false)}>
        <Logo textColor={isScrolled && !isMenuOpen ? 'text-primary' : 'text-white'} />
      </Link>
      <nav className="hidden items-center lg:flex">
        {/* Navigation shown for PC */}
        <ul className="ml-8 flex">
          {navItems.map((item) => (
            <li
              key={item.href}
              className="rounded-md px-6 py-2 font-semibold transition-colors duration-300 hover:cursor-pointer hover:bg-[#525252]/20 hover:text-white"
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link
        href="/kontakty"
        className="ml-6 hidden rounded-md border-2 border-white px-8 py-2 text-base font-normal text-white transition-colors duration-300 hover:bg-white/10 lg:block"
      >
        Domluvit konzultaci
      </Link>

      {/* Mobile Menu - only shown on small screens */}
      {isMenuOpen ? (
        <Button
          variant="secondary"
          size="icon"
          className="text-background bg-transparent p-6 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <X className="size-8 fill-current" />
        </Button>
      ) : (
        <Button
          variant="secondary"
          size="icon"
          className="bg-background text-foreground p-6 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="size-8 fill-current" />
        </Button>
      )}
      <div
        className={`absolute top-full left-0 h-screen w-full bg-black/90 text-white lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <nav>
          <p className="px-7 py-4 font-normal text-[#afafaf]">Menu</p>
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href} className="px-7 py-4 text-2xl font-semibold hover:cursor-pointer">
                <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
