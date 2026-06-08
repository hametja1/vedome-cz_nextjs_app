import { Mail, Phone } from 'lucide-react';
import { SocialIcon } from '../basics/social-icon';
import Image from 'next/image';

export default function MainHero() {
  return (
    <section
      className="relative h-200 w-full bg-cover bg-center shadow-lg/30 md:max-h-[85vh]"
      style={{ backgroundImage: 'url("/images/yellow_grass.jpg")' }}
    >
      <div className="bg-accent/50 absolute inset-0" />
      <div className="relative z-10 mx-auto flex h-full max-w-300 flex-col justify-between px-6 pt-60 pb-10 text-white xl:px-0">
        <div className="mb-8 flex w-full flex-col items-start">
          <h1 className="mb-3 max-w-220 text-5xl/[1.1] font-semibold md:text-[64px]/[70px]">
            „Uvědomění je tím největším činitelem změny.&quot;
          </h1>
          <p className="w-full max-w-220 text-right text-xl font-semibold md:text-2xl/[36px]">
            Eckhart Tolle
          </p>
        </div>
        <div className="flex gap-4.5">
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
