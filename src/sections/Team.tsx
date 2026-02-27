import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  name: string;
  title: string;
  image: string;
  isCircular?: boolean;
}

export default function Team() {
  const gridRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  const teamMembers = useMemo<TeamMember[]>(() => {
    const members = translations[language].about.team.members;
    return [
      { name: members.karim.name, title: members.karim.title, image: '/images/founder2.jpeg?v=2', isCircular: true },
      { name: members.laila.name, title: members.laila.title, image: '/images/laila.png', isCircular: true },
      { name: members.youssef.name, title: members.youssef.title, image: '/images/houssam2.jpeg', isCircular: true },
      { name: members.ismail.name, title: members.ismail.title, image: '/images/ismail.jpeg', isCircular: true },
    ];
  }, [language]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll('.team-card');
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
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
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-16">
            {t('about.team.title')}
          </h2>
        </ScrollReveal>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <div key={member.name} className="team-card text-center">
              <div className={`relative mb-6 overflow-hidden mx-auto ${member.isCircular ? 'aspect-square rounded-full w-3/4' : 'aspect-[3/4] w-full'}`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-1">{member.name}</h3>
              <p className="text-gray-500 text-sm uppercase tracking-[0.1em]">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
