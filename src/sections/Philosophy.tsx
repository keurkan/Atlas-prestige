import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Philosophy() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="right">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] order-2 lg:order-1">
              <img
                src="/images/IMG_3670.PNG"
                alt="Palm Trees Through Archway"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Text Content */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="max-w-xl order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
                {t('about.philosophy.heading')}
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {t('about.philosophy.body')}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
