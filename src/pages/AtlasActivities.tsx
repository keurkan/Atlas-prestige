import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';

export default function AtlasActivities() {
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/activities.jpg"
                        alt={t('services.items.activities.title')}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 text-center text-white px-4 mt-20">
                    <ScrollReveal>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide mb-6">
                            {t('services.items.activities.title')}
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl font-light opacity-90">
                            {t('services.items.activities.description')}
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-padding">
                <div className="container-custom max-w-4xl">
                    <ScrollReveal>
                        <div className="prose prose-lg dark:prose-invert mx-auto">
                            <h2 className="font-serif text-3xl mb-8 text-center">
                                {t('atlasActivities.heading')}
                            </h2>
                            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                                <p>
                                    {t('atlasActivities.paragraph1')}
                                </p>
                                <p>
                                    {t('atlasActivities.paragraph2')}
                                </p>

                                <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                                        <img
                                            src="/images/activities/IMG_6399.JPG"
                                            alt="Atlas Activities Quad Bikes"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                                        <img
                                            src="/images/activities/IMG_5682.JPG"
                                            alt="Atlas Activities Scenery"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                                        <img
                                            src="/images/activities/IMG_2288-2-1.jpg"
                                            alt="Atlas Activities Marrakech Riad"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                                        <img
                                            src="/images/activities/IMG_6398.JPG"
                                            alt="Atlas Activities Desert Sunset"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                </div>

                                <div className="mt-12 p-8 bg-secondary rounded-lg">
                                    <h3 className="font-serif text-xl text-foreground mb-4">
                                        {t('atlasActivities.featuresTitle')}
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            <span>{t('atlasActivities.features.1')}</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            <span>{t('atlasActivities.features.2')}</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            <span>{t('atlasActivities.features.3')}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
