import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface ContactInfoItem {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string | null;
}

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    request: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      request: '',
    });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo: ContactInfoItem[] = [
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'Mohamednsitte@gmail.com',
      href: 'mailto:Mohamednsitte@gmail.com',
    },
    {
      icon: Phone,
      label: t('contact.info.whatsapp'),
      value: '+212 690493223',
      href: 'https://wa.me/212690493223',
    },
    {
      icon: MapPin,
      label: t('contact.info.location'),
      value: 'Marrakesh • Casablanca • Rabat • Agadir',
      href: null,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="max-w-md">
              <h2 className="font-serif text-3xl md:text-4xl mb-8">
                {t('contact.hero.heading')}
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="p-3 bg-gray-100">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-gray-500 mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-black hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-black">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-xs uppercase tracking-[0.15em]">
                  {t('contact.form.name')}
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 border-gray-300 focus:border-black focus:ring-black rounded-none"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-xs uppercase tracking-[0.15em]">
                  {t('contact.form.email')}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 border-gray-300 focus:border-black focus:ring-black rounded-none"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-xs uppercase tracking-[0.15em]">
                  {t('contact.form.phone')}
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 border-gray-300 focus:border-black focus:ring-black rounded-none"
                />
              </div>

              <div>
                <Label htmlFor="city" className="text-xs uppercase tracking-[0.15em]">
                  {t('contact.form.city')}
                </Label>
                <Input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-2 border-gray-300 focus:border-black focus:ring-black rounded-none"
                />
              </div>

              <div>
                <Label htmlFor="request" className="text-xs uppercase tracking-[0.15em]">
                  {t('contact.form.request')}
                </Label>
                <Textarea
                  id="request"
                  name="request"
                  value={formData.request}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="mt-2 border-gray-300 focus:border-black focus:ring-black rounded-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  t('contact.form.submit')
                )}
              </button>

              {isSubmitted && (
                <p className="text-green-600 text-sm text-center">
                  Thank you for your message. We will get back to you soon.
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
