"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

export function HeaderNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navItems = [
    { title: "Úvod", href: "/" },
    { title: "Medailonky", href: "/medailonky" },
    { title: "Služby", href: "/sluzby" },
    { title: "Ceník", href: "/cenik" },
    { title: "Kontakty", href: "/kontakty" },
  ];

  return (
    <header
      className={`fixed top-0 w-full flex items-center justify-between sm:justify-center h-20 z-50 transition-colors duration-300 pl-8 pr-8 ${isScrolled ? "bg-background-secondary text-primary" : "text-white"} ${isMenuOpen ? "bg-black/95 sm:bg-transparent transition-none" : ""}`}
    >
      <div className="bg-background text-foreground p-2">LOGO</div>
      <nav className="sm:flex items-center hidden ">
        {/* Navigation shown for PC */}
        <ul className="flex ml-8">
          {navItems.map((item) => (
            <li
              key={item.href}
              className="px-6 py-2 hover:bg-[#525252]/20 rounded-md font-semibold hover:cursor-pointer hover:text-white transition-colors duration-300"
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile Menu - only shown on small screens */}
      {isMenuOpen ? (
        <Button
          variant="secondary"
          size="icon"
          className="p-6 bg-transparent text-background sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <X className="fill-current size-8" />
        </Button>
      ) : (
        <Button
          variant="secondary"
          size="icon"
          className="p-6 bg-background text-foreground sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="fill-current size-8" />
        </Button>
      )}
      <div
        className={`absolute top-full left-0 w-full h-screen bg-black/90 text-white sm:hidden ${isMenuOpen ? "block" : "hidden"}`}
      >
        <nav>
          <p className="px-7 py-4 font-normal text-[#afafaf]">Menu</p>
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li
                key={item.href}
                className="px-7 py-4 font-semibold hover:cursor-pointer text-2xl"
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
