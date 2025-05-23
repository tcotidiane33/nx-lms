import React, { useEffect, useRef, useState } from 'react';
import './LmsAnimations.css';

// Typage pour les cours
interface Course {
  title: string;
  category: string;
}

const LmsInteractiveComponents: React.FC = () => {
  // Références pour les éléments DOM
  const carouselRef = useRef<HTMLDivElement>(null);
  const ctaBtnRef = useRef<HTMLButtonElement>(null);
  
  // State pour les compteurs
  const [usersCount, setUsersCount] = useState<number>(0);
  const [coursesCount, setCoursesCount] = useState<number>(0);
  const [completionRate, setCompletionRate] = useState<number>(0);

  // State pour la position du carousel
  const [carouselPosition, setCarouselPosition] = useState<number>(0);
  
  // Données des cours
  const courses: Course[] = [
    { title: "Développement Web Avancé", category: "Technologie" },
    { title: "Marketing Digital", category: "Business" },
    { title: "Design UX/UI", category: "Création" },
    { title: "Data Science", category: "Analyse" },
    { title: "Gestion de Projet", category: "Management" }
  ];

  // Animation des compteurs
  useEffect(() => {
    const animateCounter = (
      target: number,
      setter: React.Dispatch<React.SetStateAction<number>>,
      speed: number = 200
    ) => {
      const increment = target / speed;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setter(Math.ceil(current));
      }, 1);
      
      return () => clearInterval(timer);
    };

    animateCounter(12500, setUsersCount);
    animateCounter(320, setCoursesCount);
    animateCounter(98, setCompletionRate);
  }, []);

  // Gestion du carousel
  const handleCarouselNav = (direction: 'prev' | 'next') => {
    const newPosition = direction === 'prev' 
      ? carouselPosition + 300 
      : carouselPosition - 300;
    
    setCarouselPosition(newPosition);
    
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${newPosition}px)`;
    }
  };

  // Animation au scroll avec Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Effets hover sur le bouton CTA
  useEffect(() => {
    const ctaBtn = ctaBtnRef.current;
    if (!ctaBtn) return;

    const handleMouseOver = () => {
      ctaBtn.style.transform = 'scale(1.05)';
    };
    
    const handleMouseOut = () => {
      ctaBtn.style.transform = 'scale(1)';
    };

    ctaBtn.addEventListener('mouseover', handleMouseOver);
    ctaBtn.addEventListener('mouseout', handleMouseOut);

    return () => {
      ctaBtn.removeEventListener('mouseover', handleMouseOver);
      ctaBtn.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="lms-interactive-container">
      {/* Section Statistiques */}
      <section className="stats-container">
        <div className="stat-card">
          <h3>Apprenants actifs</h3>
          <div className="counter" data-target="12500">{usersCount}</div>
        </div>
        <div className="stat-card">
          <h3>Cours disponibles</h3>
          <div className="counter" data-target="320">{coursesCount}</div>
        </div>
        <div className="stat-card">
          <h3>Taux de réussite</h3>
          <div className="counter" data-target="98">{completionRate}</div>
          <span>%</span>
        </div>
      </section>

      {/* Carousel de cours */}
      <section className="recommended-courses">
        <h2 data-aos="fade-right">Recommandé pour vous</h2>
        <div className="course-carousel-wrapper">
          <button 
            className="carousel-prev" 
            onClick={() => handleCarouselNav('prev')}
          >
            ❮
          </button>
          
          <div className="course-carousel-container">
            <div 
              className="course-carousel" 
              ref={carouselRef}
              style={{ transform: `translateX(${carouselPosition}px)` }}
            >
              {courses.map((course, index) => (
                <div key={index} className="course-card">
                  <div className="course-badge">{course.category}</div>
                  <h3>{course.title}</h3>
                  <button className="course-btn">Voir le cours</button>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="carousel-next" 
            onClick={() => handleCarouselNav('next')}
          >
            ❯
          </button>
        </div>
      </section>

      {/* Section CTA */}
      <section className="cta-section" id="cta-section">
        <div className="cta-content">
          <h2 data-aos="zoom-in">Prêt à commencer ?</h2>
          <p data-aos="zoom-in" data-aos-delay="200">
            Rejoignez notre communauté d'apprenants
          </p>
          <button 
            ref={ctaBtnRef}
            className="cta-btn"
            data-aos="zoom-in" 
            data-aos-delay="400"
          >
            S'inscrire maintenant
          </button>
        </div>
      </section>

    </div>
  );
};

export default LmsInteractiveComponents;