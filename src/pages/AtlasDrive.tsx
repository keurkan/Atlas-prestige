import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';

export default function AtlasDrive() {
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
                        src="/images/IMG_3839.PNG"
                        alt={t('services.items.drive.title')}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 text-center text-white px-4 mt-20">
                    <ScrollReveal>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide mb-6">
                            {t('services.items.drive.title')}
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl font-light opacity-90">
                            {t('services.items.drive.description')}
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
                                {t('atlasDrive.heading')}
                            </h2>

                            <img
                                src="/images/drive/IMG_5896.JPG"
                                alt="Atlas Drive"
                                className="w-full aspect-video object-cover rounded-lg mb-8 shadow-sm"
                            />

                            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                                <p>
                                    {t('atlasDrive.paragraph1')}
                                </p>

                                <img
                                    src="/images/drive/IMG_5899.JPG"
                                    alt="Atlas Drive"
                                    className="w-full aspect-video object-cover rounded-lg my-8 shadow-sm"
                                />

                                <p>
                                    {t('atlasDrive.paragraph2')}
                                </p>
                                <div className="mt-12 p-8 bg-secondary rounded-lg">
                                    <h3 className="font-serif text-xl text-foreground mb-4">
                                        {t('atlasDrive.featuresTitle')}
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            <span>{t('atlasDrive.features.1')}</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            <span>{t('atlasDrive.features.2')}</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            <span>{t('atlasDrive.features.3')}</span>
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
