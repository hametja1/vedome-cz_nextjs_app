'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className="h-130 flex-col items-center justify-center text-center">
      <div className="bg-primary h-20"></div>
      <h1 className="pt-30 text-5xl">Na stránce nastala chyba.</h1>
      <p className="py-5"> Přejete si vrátit se zpět na domovskou obrazovku?</p>
      <Link href="/" className="cursor-pointer">
        <Button className="cursor-pointer">Zpět na domovskou obrazovku</Button>
      </Link>
    </div>
  );
}
