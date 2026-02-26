import Hero from '@/sections/Hero';
import WhoWeAre from '@/sections/WhoWeAre';
import Services from '@/sections/Services';
import Testimonials from '@/sections/Testimonials';
import CTASection from '@/sections/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <Services />
      <Testimonials />
      <CTASection />
    </main>
  );
}
