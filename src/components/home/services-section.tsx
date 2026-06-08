'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ContentCard } from '@/components/ui/content-card';

const services = [
  {
    title: 'Výživové poradenství',
    description:
      '„Strava je základem zdravého těla i mysli. Pomůžeme vám nastavit jídelníček, který respektuje vaše potřeby a životní styl. Nejde nám o rychlé diety, ale o dlouhodobě udržitelný přístup k výživě. Společně najdeme rovnováhu mezi chutí, energií a zdravím. Objevte radost z jídla, které vás podporuje každý den."',
    imagePath: '/images/green_hand_with_leaves.jpg',
    href: '/sluzby',
  },
  {
    title: 'Koučing',
    description:
      '„Koučing je cesta k hlubšímu poznání sebe sama. Pomůže vám překonat překážky, najít vlastní zdroje energie a ujasnit si směr. Společně se zaměříme na cíle, které jsou pro vás skutečně důležité. V bezpečném prostředí můžete růst a rozvíjet svou vnitřní sílu. Objevte, jaké je to žít vědomě a s jasným záměrem."',
    imagePath: '/images/yellow_grass.jpg',
    href: '/sluzby',
  },
  {
    title: 'Komplexní přístup',
    description:
      '„Tělo i mysl potřebují péči, aby mohly fungovat v rovnováze. Kombinací výživového poradenství a koučingu získáte podporu na všech úrovních. Společně najdeme způsob, jak posílit zdraví a zároveň rozvíjet vědomý přístup k životu. Nejde o rychlé řešení, ale o cestu k trvalým změnám. Objevte sílu spojení těla a mysli v každodenním životě."',
    imagePath: '/images/green_hand_with_leaves.jpg',
    href: '/sluzby',
  },
];

export function ServicesSection() {
  const router = useRouter();

  return (
    <section className="bg-background-secondary w-full px-6 py-14">
      <div className="mx-auto w-full max-w-300">
        <h2 className="text-primary mb-10 text-[40px] leading-13.5 font-semibold">Co nabízíme</h2>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-10">
          {services.map((service) => (
            <ContentCard
              key={service.title}
              title={service.title}
              content={<p>{service.description}</p>}
              onAction={() => router.push(service.href)}
              image={
                <div className="relative h-75.75 w-full">
                  <Image
                    src={service.imagePath}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              }
              className="flex-1"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
