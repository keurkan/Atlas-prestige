import { useRef } from 'react';
import { gsap } from 'gsap';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export default function ServiceCard({ title, description, image, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = () => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.05,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Background Image */}
      <img
        ref={imageRef}
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform will-change-transform"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <h3 className="text-white text-lg md:text-xl font-medium tracking-[0.1em] uppercase mb-2">
          {title}
        </h3>
        <p className="text-white/80 text-sm font-light">
          {description}
        </p>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 transition-colors duration-300" />
    </div>
  );
}
