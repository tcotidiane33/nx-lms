
import { Suspense } from 'react';
import { SEO } from '@components/seo/seo';
import type { ReactElement } from 'react';
import { Language } from '@globals/enum';
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb';
import { Spinner } from '@components/spinner/spinner';

import './About.css';
import { Stats } from '@components/abouts/Stats';
import { MissionVision } from '@components/abouts/MissionVision';
import { TeamMembers } from '@components/teams/TeamMembers';

export function About(): ReactElement {
  return (
    <Suspense fallback={<Spinner />}>
      <SEO
        pageTitle="À propos de nous"
        description="Découvrez notre mission, notre équipe et notre histoire"
        keywords={['à propos', 'équipe', 'mission', 'histoire']}
        language={Language.FR_FR}
      />
      {/* <BreadcrumbComponent /> */}
      
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Notre histoire et notre mission</h1>
            <p className="hero-subtitle">
              Nous croyons en un apprentissage accessible à tous, partout dans le monde
            </p>
          </div>
        </div>
      </section>

      <section className="about-story section-padding">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2 className="section-title">Notre histoire</h2>
              <p>
                Fondé en 2020, notre plateforme est née de la passion pour l'éducation et la technologie.
                Nous avons commencé comme une petite équipe de développeurs et d'éducateurs déterminés
                à rendre l'apprentissage plus accessible.
              </p>
              <p>
                Aujourd'hui, nous aidons des milliers d'étudiants à travers l'Afrique à acquérir
                des compétences numériques essentielles pour leur avenir.
              </p>
            </div>
            <div className="story-image">
              <img src="/images/about-story.jpg" alt="Notre histoire" />
            </div>
          </div>
        </div>
      </section>

      <MissionVision />

      <Stats />

      <TeamMembers />

      <section className="about-values section-padding">
        <div className="container">
          <h2 className="section-title text-center">Nos valeurs</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>
                Nous repoussons constamment les limites de l'éducation en ligne pour offrir
                des expériences d'apprentissage uniques.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>
                Nous croyons en la force du travail d'équipe et des partenariats pour
                créer un impact durable.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Accessibilité</h3>
              <p>
                Notre mission est de rendre l'éducation de qualité accessible à tous,
                indépendamment de la situation géographique ou financière.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}