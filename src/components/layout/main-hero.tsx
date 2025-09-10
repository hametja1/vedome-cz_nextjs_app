'use client';

import { Mail, Phone } from 'lucide-react';
import React from 'react';
import { SocialIcon } from '../basics/social-icon';
import Image from 'next/image';

export default function MainHero() {
  return (
    <section
      className="relative h-200 w-full bg-cover bg-center shadow-lg/30"
      style={{ backgroundImage: 'url("/images/yellow_grass.jpg")' }}
    >
      <div className="bg-accent/50 absolute inset-0" />
      <div className="relative z-10 flex h-full flex-col justify-between px-[10%] pt-40 pb-10 text-white sm:pt-60 md:px-[15%]">
        <div className="mb-8 flex w-full flex-col items-start">
          <h1 className="mb-4 max-w-220 text-5xl/16 font-semibold sm:text-5xl/18 md:text-6xl/18">
            Rovnováha těla i mysli začíná vědomou volbou.
          </h1>
          <p className="text-md mb-6 max-w-2xl sm:text-lg md:text-xl">
            „Pomůžeme vám nalézt harmonii v životním stylu, stravování i myšlení.“
          </p>
        </div>
        <div className="flex space-x-2">
          <SocialIcon href="https://instagram.com">
            <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
          </SocialIcon>
          <SocialIcon href="https://facebook.com">
            <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
          </SocialIcon>
          <SocialIcon href="tel:+420123456789">
            <Phone className="fill-white stroke-none" size={24} />
          </SocialIcon>
          <SocialIcon href="mailto:info@example.com">
            <Mail size={24} />
          </SocialIcon>
        </div>
      </div>
    </section>
  );
}
