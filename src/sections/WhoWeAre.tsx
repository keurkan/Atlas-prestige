import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WhoWeAre() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <ScrollReveal direction="left">
            <div className="max-w-xl">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
                {t('whoWeAre.heading')}
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {t('whoWeAre.body')}
              </p>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative aspect-[4/5] lg:aspect-[3/4]">
              <img
                src="/images/IMG_3756.PNG"
                alt="Moroccan Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
