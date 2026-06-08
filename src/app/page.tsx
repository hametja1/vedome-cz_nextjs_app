import Hero from '@/components/layout/main-hero';
import { IntroSection } from '@/components/home/intro-section';
import { ServicesSection } from '@/components/home/services-section';
import { TeamSection } from '@/components/home/team-section';
import { InstagramSection } from '@/components/home/instagram-section';

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesSection />
      <TeamSection />
      <InstagramSection />
    </>
  );
}
