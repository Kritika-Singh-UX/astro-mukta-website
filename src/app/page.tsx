"use client";

import ProfileImage from '../components/ProfileImage';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <div className="min-h-screen font-inter" style={{background: 'var(--background)'}}>
      {/* Navigation Bar */}
      <nav className="glass-card border-b sticky top-0 z-50" style={{borderColor: 'var(--border)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Dr. Mukta Tyagi" 
                className="h-8 sm:h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div className="text-lg sm:text-xl font-medium tracking-tight hidden" style={{color: 'var(--primary)'}}>
                Dr. Mukta Tyagi
              </div>
            </div>
            
            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-12">
              <a href="#about" className="text-base font-medium transition-colors duration-200" style={{color: 'var(--on-secondary)'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--primary)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--on-secondary)'}>
                About
              </a>
              <a href="#services" className="text-base font-medium transition-colors duration-200" style={{color: 'var(--on-secondary)'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--primary)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--on-secondary)'}>
                Services
              </a>
              <a 
                href="https://wa.me/917042385243" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 lg:px-8 py-2.5 lg:py-3 text-base font-medium transition-colors duration-200 rounded-full"
                style={{backgroundColor: 'var(--primary)', color: 'var(--on-primary)'}}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--hover)'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--primary)'}
              >
                Book Consultation
              </a>
            </div>
            
            {/* Mobile CTA Button */}
            <div className="lg:hidden">
              <a 
                href="https://wa.me/917042385243" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-medium transition-colors duration-200 rounded-full"
                style={{backgroundColor: 'var(--primary)', color: 'var(--on-primary)'}}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--hover)'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--primary)'}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-start sm:items-center justify-center px-4 sm:px-6 lg:px-8 pt-4 pb-8 sm:py-16 lg:py-24" style={{backgroundColor: 'var(--background)'}}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
            {/* Content Column */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center px-3 sm:px-5 py-2 sm:py-3 text-sm font-medium tracking-wider uppercase mb-4 sm:mb-6 lg:mb-8 rounded-full" style={{backgroundColor: 'var(--secondary-light)', color: 'var(--on-secondary)'}}>
                25+ Years Experience
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 sm:mb-6 lg:mb-8 leading-tight" style={{color: 'var(--foreground)'}}>
                Dr. <span className="font-medium" style={{color: 'var(--foreground)'}}>Mukta</span>{' '}
                Tyagi
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal" style={{color: 'var(--on-secondary)'}}>
                I am Dr. Mukta Tyagi, a Vedic astrologer with 25 years of experience, specializing in career, vastu, relationships, health, business, and legal matters. My guidance empowers individuals in India and abroad with clarity, strength, and direction.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start mb-8 sm:mb-12 lg:mb-16">
                <a
                  href="https://wa.me/917042385243"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base font-medium transition-colors duration-200 rounded-full"
                  style={{backgroundColor: 'var(--primary)', color: 'var(--on-primary)'}}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--hover)'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--primary)'}
                >
                  Schedule Consultation
                </a>
                <a href="#about" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border text-base font-medium transition-colors duration-200 rounded-full" style={{borderColor: 'var(--border)', color: 'var(--on-secondary)', backgroundColor: 'transparent'}} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--surface)'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}>
                  Learn More
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-xs sm:max-w-sm mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1" style={{color: 'var(--primary)'}}>5000+</div>
                  <div className="text-sm uppercase tracking-wider" style={{color: 'var(--on-secondary)'}}>Clients</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1" style={{color: 'var(--primary)'}}>25+</div>
                  <div className="text-sm uppercase tracking-wider" style={{color: 'var(--on-secondary)'}}>Years</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1" style={{color: 'var(--primary)'}}>12h</div>
                  <div className="text-sm uppercase tracking-wider" style={{color: 'var(--on-secondary)'}}>Daily</div>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[36rem] xl:h-[36rem] solar-system-container">
                
                {/* Main Image - Base layer - Centered and bigger on mobile */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden z-10 border-2" style={{backgroundColor: 'var(--surface)', borderColor: 'var(--border)'}}>
                  <img
                    src="/Mukta Tyagi New Image.png"
                    alt="Dr. Mukta Tyagi"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23f3f4f6'/%3E%3Ctext x='50' y='50' font-family='system-ui' font-size='14' fill='%236b7280' text-anchor='middle' dy='.3em'%3EDr. Mukta Tyagi%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                
                {/* Solar System Orbital Rings */}
                <div className="absolute inset-6 sm:inset-6 border rounded-full opacity-15 z-20" style={{borderColor: 'var(--secondary)'}}></div>
                <div className="absolute inset-4 sm:inset-4 border rounded-full opacity-10 z-20" style={{borderColor: 'var(--secondary-dark)'}}></div>
                <div className="absolute inset-3 sm:inset-2 border rounded-full opacity-8 z-20" style={{borderColor: 'var(--accent)'}}></div>
                
                {/* Solar System Planets */}
                <div className="absolute inset-0 pointer-events-none z-30">
                  {/* Mercury - Closest, fastest orbit */}
                  <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 -mt-0.5 -ml-0.5 sm:-mt-1 sm:-ml-1 planet-mercury">
                    <div className="w-full h-full rounded-full opacity-70" style={{backgroundColor: 'var(--disabled)'}}></div>
                  </div>
                  
                  {/* Venus - Second orbit */}
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 -mt-1 -ml-1 sm:-mt-1.5 sm:-ml-1.5 planet-venus">
                    <div className="w-full h-full rounded-full opacity-80" style={{backgroundColor: 'var(--accent)'}}></div>
                  </div>
                  
                  {/* Earth - Third orbit with moon */}
                  <div className="absolute top-1/2 left-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 -mt-1.5 -ml-1.5 planet-earth">
                    <div className="w-full h-full rounded-full opacity-90 relative" style={{backgroundColor: 'var(--primary-dark)'}}>
                      <div className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full -top-1.5 sm:-top-2 left-1/2 -ml-0.5 moon" style={{backgroundColor: 'var(--secondary)'}}></div>
                    </div>
                  </div>
                  
                  {/* Mars - Fourth orbit */}
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 -mt-1 -ml-1 sm:-mt-1.5 sm:-ml-1.5 planet-mars">
                    <div className="w-full h-full rounded-full opacity-75" style={{backgroundColor: 'var(--hover)'}}></div>
                  </div>
                  
                  {/* Jupiter - Largest planet */}
                  <div className="absolute top-1/2 left-1/2 w-3 h-3 sm:w-4 sm:h-4 -mt-1.5 -ml-1.5 sm:-mt-2 sm:-ml-2 planet-jupiter">
                    <div className="w-full h-full rounded-full opacity-85" style={{backgroundColor: 'var(--secondary-dark)'}}></div>
                  </div>
                  
                  {/* Saturn - With rings */}
                  <div className="absolute top-1/2 left-1/2 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 -mt-1.5 -ml-1.5 planet-saturn">
                    <div className="w-full h-full rounded-full opacity-80 relative" style={{backgroundColor: 'var(--primary)'}}>
                      <div className="absolute inset-0 border rounded-full opacity-40 scale-150" style={{borderColor: 'var(--secondary-light)'}}></div>
                    </div>
                  </div>
                  
                  {/* Distant stars */}
                  <div className="absolute top-6 right-8 sm:top-8 sm:right-12 w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full opacity-50 star-twinkle" style={{backgroundColor: 'var(--secondary-light)'}}></div>
                  <div className="absolute bottom-8 left-6 sm:bottom-10 sm:left-8 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full opacity-60 star-twinkle" style={{backgroundColor: 'var(--accent)', animationDelay: '1s'}}></div>
                  <div className="absolute top-16 left-12 sm:top-20 sm:left-16 w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full opacity-40 star-twinkle" style={{backgroundColor: 'var(--primary-light)', animationDelay: '2s'}}></div>
                  <div className="absolute bottom-12 right-16 sm:bottom-16 sm:right-20 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full opacity-70 star-twinkle" style={{backgroundColor: 'var(--secondary)', animationDelay: '0.5s'}}></div>
                </div>
                
                {/* CSS for Solar System animations */}
                <style jsx>{`
                  .solar-system-container {
                    /* Mobile: 320px container, image is 288px, tight orbits */
                    --orbit-1: 140px;
                    --orbit-2: 150px;
                    --orbit-3: 155px;
                    --orbit-4: 158px;
                    --orbit-5: 160px;
                    --orbit-6: 160px;
                    --moon-orbit: 18px;
                  }
                  
                  @media (min-width: 640px) {
                    .solar-system-container {
                      /* SM: 384px container, image is 288px, more orbit space */
                      --orbit-1: 160px;
                      --orbit-2: 170px;
                      --orbit-3: 180px;
                      --orbit-4: 185px;
                      --orbit-5: 188px;
                      --orbit-6: 190px;
                      --moon-orbit: 18px;
                    }
                  }
                  
                  @media (min-width: 1024px) {
                    .solar-system-container {
                      /* LG: 448px container, balanced orbits */
                      --orbit-1: 180px;
                      --orbit-2: 200px;
                      --orbit-3: 220px;
                      --orbit-4: 240px;
                      --orbit-5: 260px;
                      --orbit-6: 280px;
                      --moon-orbit: 15px;
                    }
                  }
                  
                  @media (min-width: 1280px) {
                    .solar-system-container {
                      /* XL: 576px container, full space */
                      --orbit-1: 220px;
                      --orbit-2: 240px;
                      --orbit-3: 260px;
                      --orbit-4: 280px;
                      --orbit-5: 300px;
                      --orbit-6: 320px;
                      --moon-orbit: 15px;
                    }
                  }
                  
                  @keyframes mercury-orbit {
                    0% { transform: rotate(0deg) translateX(var(--orbit-1)) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(var(--orbit-1)) rotate(-360deg); }
                  }
                  @keyframes venus-orbit {
                    0% { transform: rotate(0deg) translateX(var(--orbit-2)) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(var(--orbit-2)) rotate(-360deg); }
                  }
                  @keyframes earth-orbit {
                    0% { transform: rotate(0deg) translateX(var(--orbit-3)) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(var(--orbit-3)) rotate(-360deg); }
                  }
                  @keyframes mars-orbit {
                    0% { transform: rotate(0deg) translateX(var(--orbit-4)) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(var(--orbit-4)) rotate(-360deg); }
                  }
                  @keyframes jupiter-orbit {
                    0% { transform: rotate(0deg) translateX(var(--orbit-5)) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(var(--orbit-5)) rotate(-360deg); }
                  }
                  @keyframes saturn-orbit {
                    0% { transform: rotate(0deg) translateX(var(--orbit-6)) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(var(--orbit-6)) rotate(-360deg); }
                  }
                  @keyframes moon-orbit {
                    0% { transform: rotate(0deg) translateX(var(--moon-orbit)) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(var(--moon-orbit)) rotate(-360deg); }
                  }
                  @keyframes star-twinkle {
                    0%, 100% { opacity: 0.2; transform: scale(0.8); }
                    50% { opacity: 1; transform: scale(1.2); }
                  }
                  
                  .planet-mercury { animation: mercury-orbit 8s linear infinite; }
                  .planet-venus { animation: venus-orbit 12s linear infinite; }
                  .planet-earth { animation: earth-orbit 16s linear infinite; }
                  .planet-mars { animation: mars-orbit 20s linear infinite; }
                  .planet-jupiter { animation: jupiter-orbit 28s linear infinite; }
                  .planet-saturn { animation: saturn-orbit 36s linear infinite; }
                  .moon { animation: moon-orbit 2s linear infinite; }
                  .star-twinkle { animation: star-twinkle 3s ease-in-out infinite; }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" style={{backgroundColor: 'var(--background)'}}>
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 scroll-animate fade-left">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 lg:mb-6 text-center lg:text-left" style={{color: 'var(--primary)'}}>
                  About Me
                </h2>
                <p className="text-lg lg:text-xl font-normal leading-relaxed text-center lg:text-left" style={{color: 'var(--on-secondary)'}}>
                  My journey and training in the ancient art of Vedic Astrology.
                </p>
              </div>
              
              <div className="space-y-4 lg:space-y-6">
                <p className="text-base lg:text-lg font-normal leading-relaxed text-left scroll-animate fade-up stagger-1" style={{color: 'var(--on-secondary)'}}>
                  <span className="font-semibold">Sh. K.N. Rao</span> is one of the most respected Vedic astrologers in India after independence. He introduced a research-based approach to astrology.
                </p>
                
                <p className="text-base lg:text-lg font-normal leading-relaxed text-left scroll-animate fade-up stagger-2" style={{color: 'var(--on-secondary)'}}>
                  I have known Rao Sahab since 2000 and have learned both the basics and the finer details of astrology from him.
                </p>
                
                <p className="text-base lg:text-lg font-normal leading-relaxed text-left scroll-animate fade-up stagger-3" style={{color: 'var(--on-secondary)'}}>
                  To me, he has always been more than a teacher. He has been my guru.
                </p>
              </div>
            </div>
            
            {/* Image Column - Right */}
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

      {/* Services Section */}
      <section id="services" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" style={{backgroundColor: 'var(--surface)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12 sm:mb-14 lg:mb-16 text-center lg:text-left scroll-animate fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 lg:mb-8" style={{color: 'var(--primary)'}}>
              Services
            </h2>
            <p className="text-lg sm:text-xl font-normal leading-relaxed" style={{color: 'var(--on-secondary)'}}>
              Comprehensive astrological consultations tailored to your unique journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { 
                name: "Career Guidance", 
                icon: "/Career Guidance.png",
                description: "Navigate professional crossroads with confidence through detailed astrological analysis. Discover optimal timing for job changes, business ventures, and career transitions. Understand your natural talents and how planetary positions influence your professional path and success potential."
              },
              { 
                name: "Relationships", 
                icon: "/Marriage and Relationship.png",
                description: "Comprehensive compatibility analysis for marriages, partnerships, and family relationships. Examine planetary influences on love, communication patterns, and emotional bonds. Receive guidance on timing for engagements, resolving conflicts, and strengthening existing relationships through Vedic wisdom."
              },
              { 
                name: "Vaastu", 
                icon: "/Vaastu Consultation.png",
                description: "Transform your living and working spaces through ancient architectural principles. Identify energy blockages and receive practical solutions for optimal room layouts, entrance positioning, and color schemes. Create harmonious environments that support health, prosperity, and positive relationships."
              },
              { 
                name: "Child Development", 
                icon: "/Child Development Guidance.png",
                description: "Unlock your child's potential through birth chart analysis and educational guidance. Understand their learning style, natural talents, and optimal study periods. Receive insights on subject selection, career paths, and parenting approaches aligned with their astrological blueprint for holistic development."
              },
              { 
                name: "Birth Chart", 
                icon: "/Janam Kundali Analysis.png",
                description: "Comprehensive life map revealing your personality, strengths, challenges, and karmic patterns. Detailed analysis of planetary positions at birth, major life periods (dashas), and upcoming opportunities. Understand your life purpose, relationships, and spiritual journey through ancient Vedic calculations."
              },
              { 
                name: "Health", 
                icon: "/Health and Wellness.png",
                description: "Preventive health insights through astrological indicators and planetary influences on physical well-being. Receive guidance on beneficial dietary choices, exercise timing, and natural remedies. Understand vulnerable periods and strengthen immunity through gemstone recommendations and lifestyle adjustments."
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className={`p-6 sm:p-8 hover:shadow-md transition-shadow duration-200 group cursor-pointer glass-card rounded-xl scroll-animate fade-scale stagger-${Math.min(index + 1, 6)}`}
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <img 
                    src={service.icon}
                    alt={service.name}
                    className="w-8 h-8 sm:w-12 sm:h-12 mr-3 sm:mr-4"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <h3 className="text-xl sm:text-2xl font-semibold" style={{color: 'var(--primary)'}}>
                    {service.name}
                  </h3>
                </div>
                <p className="leading-relaxed text-base font-normal" style={{color: 'var(--on-secondary)'}}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" style={{backgroundColor: 'var(--background)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12 sm:mb-14 lg:mb-16 text-center lg:text-left scroll-animate fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 lg:mb-8" style={{color: 'var(--primary)'}}>
              Testimonials
            </h2>
            <p className="text-lg sm:text-xl font-normal leading-relaxed" style={{color: 'var(--on-secondary)'}}>
              Trusted by hundreds of clients over two decades of practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { 
                name: "Kritika Chauhan", 
                location: "Mainpuri", 
                review: "Dr. Mukta's guidance has been invaluable for my career decisions. Her insights are remarkably accurate."
              },
              { 
                name: "Dr. Tulsi Raman", 
                location: "Shimla", 
                review: "Exceptional knowledge and experience. The health insights provided were precisely what I needed."
              },
              { 
                name: "Mansi Dwivedi", 
                location: "Bengaluru", 
                review: "Her guidance helped me navigate difficult relationship decisions with clarity and confidence."
              }
            ].map((testimonial, index) => (
              <div key={index} className={`border-l-2 sm:border-l-4 pl-4 sm:pl-6 lg:pl-8 scroll-animate fade-up stagger-${Math.min(index + 1, 6)}`} style={{borderColor: 'var(--secondary)'}}>
                <blockquote className="leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg font-normal" style={{color: 'var(--foreground)'}}>
                  &ldquo;<span style={{color: 'var(--on-secondary)'}}>{testimonial.review}</span>&rdquo;
                </blockquote>
                <div>
                  <div className="font-medium text-base" style={{color: 'var(--primary)'}}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm mt-1 uppercase tracking-wider" style={{color: 'var(--disabled)'}}>
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16" style={{backgroundColor: 'var(--primary-dark)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6" style={{color: 'var(--on-primary)'}}>
                Dr. Mukta Tyagi
              </h3>
              <p className="font-normal leading-relaxed text-base max-w-sm mx-auto sm:mx-0" style={{color: 'var(--secondary-light)'}}>
                Professional Vedic Astrologer with over 25 years of experience 
                helping individuals navigate life&apos;s journey with clarity and purpose.
              </p>
            </div>
            
            {/* Contact */}
            <div className="text-center sm:text-left">
              <h4 className="text-sm font-medium mb-4 sm:mb-6 uppercase tracking-wider" style={{color: 'var(--disabled)'}}>Contact</h4>
              <div className="space-y-2 sm:space-y-3">
                <div>
                  <a href="tel:+917042385243" className="text-base transition-colors duration-200" style={{color: 'var(--on-primary)'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--secondary)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--on-primary)'}>
                    +91 70423 85243
                  </a>
                </div>
                <div>
                  <a href="https://wa.me/917042385243" target="_blank" rel="noopener noreferrer" className="text-base transition-colors duration-200" style={{color: 'var(--on-primary)'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--secondary)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--on-primary)'}>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            {/* Hours */}
            <div className="text-center sm:text-left">
              <h4 className="text-sm font-medium mb-4 sm:mb-6 uppercase tracking-wider" style={{color: 'var(--disabled)'}}>Hours</h4>
              <div className="font-normal text-base space-y-1" style={{color: 'var(--secondary-light)'}}>
                <div>Mon-Sun: 9AM-9PM</div>
                <div>By appointment</div>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-6 sm:pt-8 text-center sm:text-left" style={{borderColor: 'var(--primary)'}}>
            <p className="text-sm font-normal" style={{color: 'var(--disabled)'}}>
              © 2024 Dr. Mukta Tyagi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}