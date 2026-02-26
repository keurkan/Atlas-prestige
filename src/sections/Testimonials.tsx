import { useMemo } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

export default function Testimonials() {
  const { t, language } = useLanguage();
  
  const testimonials = useMemo<Testimonial[]>(() => {
    return translations[language].testimonials.items;
  }, [language]);

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white text-center mb-16">
            {t('testimonials.title')}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {testimonials.length > 0 && (
            <TestimonialCarousel testimonials={testimonials} />
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
