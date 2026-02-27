import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceCard from '@/components/ServiceCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  description: string;
  image: string;
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  const services = useMemo<Service[]>(() => {
    const items = translations[language].services.items;
    return [
      { title: items.fly.title, description: items.fly.description, image: '/images/atlas_fly.jpeg' },
      { title: items.security.title, description: items.security.description, image: '/images/security2.jpg' },
      { title: items.stay.title, description: items.stay.description, image: '/images/IMG_3785.PNG' },
      { title: items.dine.title, description: items.dine.description, image: '/images/IMG_3760.PNG' },
      { title: items.access.title, description: items.access.description, image: '/images/IMG_5218.PNG' },
      { title: items.concierge.title, description: items.concierge.description, image: '/images/IMG_3780.PNG' },
      { title: items.drive.title, description: items.drive.description, image: '/images/IMG_3839.PNG' },
      { title: items.activities.title, description: items.activities.description, image: '/images/activities.jpg' },
      { title: items.transport.title, description: items.transport.description, image: '/images/transport.jpeg' },
    ];
  }, [language]);

  useEffect(() => {
    const title = titleRef.current;
    const grid = gridRef.current;

    if (!title || !grid) return;

    // Title animation
    gsap.fromTo(
      title,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 85%',
        },
      }
    );

    // Grid cards stagger animation
    const cards = grid.querySelectorAll('.service-card-wrapper');
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: grid,
          start: 'top 80%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section-padding bg-white"
    >
      <div className="container-custom">
        {/* Section Title */}
        <h2
          ref={titleRef}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-16"
        >
          {t('services.title')}
        </h2>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <div key={service.title} className="service-card-wrapper">
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
