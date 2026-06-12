"use client";

import Image from 'next/image';
import ProfileImage from '../components/ProfileImage';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
];

const MARQUEE_ITEMS = [
  'Career Guidance',
  'Marriage & Relationships',
  'Vaastu Consultation',
  'Janam Kundali',
  'Child Development',
  'Health & Wellness',
];

/* Thin-stroke line icons, one per service */
const serviceIcons: Record<string, React.ReactNode> = {
  career: (
    <>
      <path d="M3.5 18.5l5-8.5 4.5 4 5.5-9" />
      <path d="M18 3v5M15.5 5.5h5" />
    </>
  ),
  relationships: (
    <>
      <circle cx="8.5" cy="12" r="5.5" />
      <circle cx="15.5" cy="12" r="5.5" />
    </>
  ),
  vaastu: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" />
      <path d="M3.5 3.5l17 17M20.5 3.5l-17 17" />
      <circle cx="12" cy="12" r="1.6" />
    </>
  ),
  child: (
    <>
      <path d="M12 21v-8" />
      <path d="M12 13C12 8.5 9 6 4.5 6c0 4.5 3 7 7.5 7z" />
      <path d="M12 13c0-4.5 3-7 7.5-7 0 4.5-3 7-7.5 7z" />
    </>
  ),
  kundali: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" />
      <path d="M3.5 3.5l17 17M20.5 3.5l-17 17" />
      <path d="M12 3.5l8.5 8.5L12 20.5 3.5 12z" />
    </>
  ),
  health: (
    <>
      <path d="M12 4.5c-2 2.6-2 6.4 0 9 2-2.6 2-6.4 0-9z" />
      <path d="M4.5 8.5c.4 5.2 3.3 8.5 7.5 8.5s7.1-3.3 7.5-8.5" />
      <path d="M12 17v3" />
    </>
  ),
};

const SERVICES = [
  {
    name: 'Career Guidance',
    icon: 'career',
    description:
      'Navigate professional crossroads with confidence. Optimal timing for job changes, ventures, and transitions, guided by your chart.',
  },
  {
    name: 'Marriage & Relationships',
    icon: 'relationships',
    description:
      'Compatibility analysis for marriage, partnership, and family. Understand planetary influences on love and find the right timing.',
  },
  {
    name: 'Vaastu Consultation',
    icon: 'vaastu',
    description:
      'Harmonise your living and working spaces through ancient architectural principles, with practical remedies and no demolition required.',
  },
  {
    name: 'Child Development',
    icon: 'child',
    description:
      "Unlock your child's potential through birth chart analysis, from learning style and natural talents to the right educational path.",
  },
  {
    name: 'Janam Kundali',
    icon: 'kundali',
    description:
      'A complete life map: personality, strengths, karmic patterns, and major dasha periods, read through classical Vedic calculation.',
  },
  {
    name: 'Health & Wellness',
    icon: 'health',
    description:
      'Preventive insight into well-being: vulnerable periods, beneficial routines, and remedies aligned with your planetary cycles.',
  },
];

const TESTIMONIALS = [
  {
    name: 'Kritika Chauhan',
    location: 'Mainpuri',
    review:
      "Dr. Mukta's guidance has been invaluable for my career decisions. Her insights are remarkably accurate.",
  },
  {
    name: 'Dr. Tulsi Raman',
    location: 'Shimla',
    review:
      'Exceptional knowledge and experience. The health insights provided were precisely what I needed.',
  },
  {
    name: 'Mansi Dwivedi',
    location: 'Bengaluru',
    review:
      'Her guidance helped me navigate difficult relationship decisions with clarity and confidence.',
  },
];

const WHATSAPP_URL = 'https://wa.me/917042385243';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* ---------------------------------------------------------- */}
      {/* Navigation                                                  */}
      {/* ---------------------------------------------------------- */}
      <nav className="nav-blur fixed top-0 inset-x-0 z-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <a href="#" className="flex items-baseline gap-0.5 select-none">
              <span className="font-display text-xl sm:text-2xl tracking-wide text-ink">Astro</span>
              <span className="font-display text-xl sm:text-2xl tracking-wide italic gold-gradient-text">Mukta</span>
            </a>

            <div className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-widest uppercase text-soft hover:text-ink transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-7 py-2.5 text-sm"
              >
                Book Consultation
              </a>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-4 py-2 text-sm"
              >
                Book Now
              </a>
              <button
                type="button"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
                className="flex flex-col items-center justify-center w-11 h-11 gap-[5px]"
              >
                <span
                  className={`block h-px w-5 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
                  style={{ backgroundColor: 'var(--ink)' }}
                />
                <span
                  className={`block h-px w-5 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}
                  style={{ backgroundColor: 'var(--ink)' }}
                />
                <span
                  className={`block h-px w-5 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
                  style={{ backgroundColor: 'var(--ink)' }}
                />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="lg:hidden border-t hairline-soft py-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-center text-sm tracking-widest uppercase text-soft hover:text-ink transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ---------------------------------------------------------- */}
      {/* Hero                                                        */}
      {/* ---------------------------------------------------------- */}
      <section className="relative min-h-screen flex items-center px-5 sm:px-8 pt-28 pb-16 lg:pt-32 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-10 items-center">
            {/* Copy */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <p className="eyebrow mb-6 scroll-animate fade-up">
                Dr. Mukta Tyagi · Vedic Astrologer
              </p>

              <h1 className="font-display text-[clamp(2.25rem,11vw,2.75rem)] sm:text-6xl lg:text-6xl xl:text-7xl leading-[1.08] text-ink mb-7 scroll-animate fade-up stagger-1">
                Clarity, written
                <br />
                in the <em>stars</em>.
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-soft max-w-xl mx-auto lg:mx-0 mb-10 scroll-animate fade-up stagger-2">
                Twenty-five years of Vedic astrology practice, guiding individuals
                across India and abroad through career, relationships, vaastu,
                health, and life&rsquo;s defining decisions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-14 scroll-animate fade-up stagger-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-9 py-4 text-base"
                >
                  Book a Consultation
                </a>
                <a href="#services" className="btn-ghost px-9 py-4 text-base">
                  Explore Services
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:flex sm:justify-center lg:justify-start sm:gap-14 scroll-animate fade-up stagger-4">
                {[
                  { value: '5000+', label: 'Consultations' },
                  { value: '25+', label: 'Years of Practice' },
                  { value: '12h', label: 'Available Daily' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left lg:border-l lg:pl-5 hairline-soft lg:border-solid">
                    <div className="font-display text-2xl sm:text-4xl gold-gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[0.55rem] sm:text-[0.7rem] uppercase tracking-[0.12em] sm:tracking-[0.2em] text-faint">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Portrait with orbiting planets */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="solar-system relative w-[17rem] h-[17rem] sm:w-[26rem] sm:h-[26rem] lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem]">
                {/* Ambient glow */}
                <div
                  className="absolute -inset-10 rounded-full blur-3xl"
                  style={{ background: 'radial-gradient(closest-side, rgba(122,92,160,0.22), rgba(82,52,120,0.12), transparent)' }}
                />

                {/* Orbital rings */}
                <div className="absolute inset-0 rounded-full border" style={{ borderColor: 'rgba(242,236,223,0.12)' }} />
                <div className="absolute inset-[7%] rounded-full border border-dashed" style={{ borderColor: 'rgba(242,236,223,0.08)' }} />
                <div className="absolute inset-[14%] rounded-full border" style={{ borderColor: 'rgba(182,170,198,0.1)' }} />

                {/* Portrait */}
                <div
                  className="absolute inset-12 sm:inset-16 rounded-full overflow-hidden"
                  style={{
                    background: 'radial-gradient(circle at 50% 30%, #3a2752 0%, #1d1430 55%, #120c1e 100%)',
                    boxShadow: 'inset 0 0 0 1px rgba(242,236,223,0.22), 0 30px 70px -20px rgba(0,0,0,0.7)',
                  }}
                >
                  <Image
                    src="/Mukta Tyagi New Image.png"
                    alt="Dr. Mukta Tyagi"
                    fill
                    priority
                    sizes="(min-width: 1280px) 512px, (min-width: 640px) 416px, 272px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Orbiting planets */}
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                  <span className="planet planet-mercury"><span className="planet-dot" /></span>
                  <span className="planet planet-venus"><span className="planet-dot" /></span>
                  <span className="planet planet-earth">
                    <span className="planet-dot">
                      <span className="moon" />
                    </span>
                  </span>
                  <span className="planet planet-mars"><span className="planet-dot" /></span>
                  <span className="planet planet-jupiter"><span className="planet-dot" /></span>
                  <span className="planet planet-saturn"><span className="planet-dot" /></span>
                </div>

                {/* Accent stars */}
                <div className="absolute top-10 right-4 w-1.5 h-1.5 rounded-full star-twinkle" style={{ backgroundColor: 'var(--gold-bright)' }} />
                <div className="absolute bottom-16 left-2 w-1 h-1 rounded-full star-twinkle" style={{ backgroundColor: 'var(--gold)', animationDelay: '1.2s' }} />
                <div className="absolute top-1/3 -left-3 w-1 h-1 rounded-full star-twinkle" style={{ backgroundColor: 'var(--soft)', animationDelay: '2.1s' }} />
                <div className="absolute -bottom-2 right-1/4 w-1.5 h-1.5 rounded-full star-twinkle" style={{ backgroundColor: 'var(--gold-bright)', animationDelay: '0.6s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Marquee strip                                               */}
      {/* ---------------------------------------------------------- */}
      <div className="border-y hairline-soft py-5 marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center shrink-0">
              {MARQUEE_ITEMS.map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center">
                  <span className="font-display italic text-lg sm:text-xl text-soft whitespace-nowrap px-8">
                    {item}
                  </span>
                  <span className="text-gold text-sm">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* About                                                       */}
      {/* ---------------------------------------------------------- */}
      <section id="about" className="px-5 sm:px-8 py-24 sm:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="scroll-animate fade-left">
              <p className="eyebrow mb-5">( 01 ) · The Lineage</p>
              <h2 className="font-display text-4xl sm:text-5xl leading-tight text-ink mb-8">
                Trained under
                <br />
                <em>Sh. K.N. Rao</em>
              </h2>

              <div className="space-y-6 text-soft text-base sm:text-lg leading-relaxed">
                <p className="scroll-animate fade-up stagger-1">
                  <span className="text-ink font-medium">Sh. K.N. Rao</span> is one of
                  the most respected Vedic astrologers in India after independence,
                  the man who introduced a research-based approach to astrology.
                </p>
                <p className="scroll-animate fade-up stagger-2">
                  I have known Rao Sahab since 2000 and have learned both the
                  foundations and the finer details of astrology from him.
                </p>
                <blockquote className="scroll-animate fade-up stagger-3 border-l-2 pl-6 hairline font-display italic text-xl sm:text-2xl text-ink">
                  To me, he has always been more than a teacher.
                  He has been my guru.
                </blockquote>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end scroll-animate fade-right">
              <ProfileImage
                src="/Rao Sahab Image.jpeg"
                alt="Sh. K.N. Rao - Renowned Vedic Astrologer"
                name="Sh. K.N. Rao"
                title="Renowned Vedic Astrologer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Services                                                    */}
      {/* ---------------------------------------------------------- */}
      <section id="services" className="px-5 sm:px-8 py-24 sm:py-32 scroll-mt-20" style={{ backgroundColor: 'rgba(255,255,255,0.015)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left mb-16 scroll-animate fade-up">
            <p className="eyebrow mb-5">( 02 ) · Offerings</p>
            <h2 className="font-display text-4xl sm:text-5xl leading-tight text-ink mb-6">
              Guidance for <em>every chapter</em>
            </h2>
            <p className="text-soft text-lg leading-relaxed">
              Consultations rooted in classical Vedic methods, tailored to the
              question in front of you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {SERVICES.map((service, index) => (
              <div
                key={service.name}
                className={`card group relative rounded-2xl p-8 overflow-hidden scroll-animate fade-scale stagger-${Math.min(index + 1, 6)}`}
              >
                <div className="card-glow" />
                <span className="absolute top-7 right-8 font-display italic text-2xl text-gold select-none">
                  0{index + 1}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-gold mb-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {serviceIcons[service.icon]}
                </svg>
                <h3 className="font-display text-2xl text-ink mb-3">
                  {service.name}
                </h3>
                <p className="text-soft text-[0.95rem] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Testimonials                                                */}
      {/* ---------------------------------------------------------- */}
      <section id="testimonials" className="px-5 sm:px-8 py-24 sm:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left mb-16 scroll-animate fade-up">
            <p className="eyebrow mb-5">( 03 ) · Kind Words</p>
            <h2 className="font-display text-4xl sm:text-5xl leading-tight text-ink mb-6">
              Trusted across <em>two decades</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <figure
                key={testimonial.name}
                className={`card relative rounded-2xl p-8 pt-14 scroll-animate fade-up stagger-${Math.min(index + 1, 6)}`}
              >
                <div className="card-glow" />
                <span
                  className="absolute top-3 left-7 font-display text-7xl leading-none text-faint opacity-40 select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="font-display italic text-xl leading-relaxed text-ink mb-8">
                  {testimonial.review}
                </blockquote>
                <figcaption className="flex items-center gap-4">
                  <span className="h-px w-8" style={{ backgroundColor: 'var(--faint)' }} />
                  <span>
                    <span className="block text-sm font-medium text-ink">
                      {testimonial.name}
                    </span>
                    <span className="block text-[0.7rem] uppercase tracking-[0.2em] text-faint mt-1">
                      {testimonial.location}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Call to action                                              */}
      {/* ---------------------------------------------------------- */}
      <section className="relative px-5 sm:px-8 py-28 sm:py-36 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 100%, rgba(122,92,160,0.16), transparent 70%)' }}
        />
        <div className="max-w-3xl mx-auto text-center relative">
          <p className="eyebrow mb-6 scroll-animate fade-up">Begin Your Journey</p>
          <h2 className="font-display text-4xl sm:text-6xl leading-[1.12] text-ink mb-8 scroll-animate fade-up stagger-1">
            Your chart already holds
            <br />
            <em>the answers.</em>
          </h2>
          <p className="text-soft text-lg leading-relaxed mb-12 max-w-xl mx-auto scroll-animate fade-up stagger-2">
            Consultations are available daily, in person and over WhatsApp,
            for clients in India and abroad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-animate fade-up stagger-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 text-base"
            >
              Book a Consultation
            </a>
            <a href="tel:+917042385243" className="btn-ghost px-10 py-4 text-base">
              +91 70423 85243
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Footer                                                      */}
      {/* ---------------------------------------------------------- */}
      <footer className="border-t hairline-soft px-5 sm:px-8 pt-16 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
            <div className="sm:col-span-2 text-center sm:text-left">
              <a href="#" className="inline-flex items-baseline gap-0.5 mb-5">
                <span className="font-display text-2xl tracking-wide text-ink">Astro</span>
                <span className="font-display text-2xl tracking-wide italic gold-gradient-text">Mukta</span>
              </a>
              <p className="text-soft text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
                Professional Vedic astrologer with over 25 years of experience,
                helping individuals navigate life&rsquo;s journey with clarity
                and purpose.
              </p>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="text-[0.7rem] uppercase tracking-[0.25em] text-faint mb-5">
                Contact
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:+917042385243"
                  className="block text-sm text-soft hover:text-ink transition-colors duration-300"
                >
                  +91 70423 85243
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-soft hover:text-ink transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="text-[0.7rem] uppercase tracking-[0.25em] text-faint mb-5">
                Hours
              </h4>
              <div className="space-y-3 text-sm text-soft">
                <div>Mon–Sun: 9 AM – 9 PM</div>
                <div>By appointment</div>
              </div>
            </div>
          </div>

          <div className="divider-fade mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-faint">
              © {new Date().getFullYear()} Dr. Mukta Tyagi. All rights reserved.
            </p>
            <p className="text-xs text-faint font-display italic">
              Vedic Wisdom, Modern Insight
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
