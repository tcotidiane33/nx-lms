import type { ReactElement } from 'react';
import './mission-vision.css';

export function MissionVision(): ReactElement {
  return (
    <section className="mission-vision section-padding">
      <div className="container">
        <div className="mv-grid">
          <div className="mv-card mission">
            <h3>Notre mission</h3>
            <p>
              Rendre l'éducation de qualité accessible à tous en Afrique à travers
              des technologies innovantes et des contenus adaptés aux besoins locaux.
            </p>
          </div>
          <div className="mv-card vision">
            <h3>Notre vision</h3>
            <p>
              Devenir la plateforme leader d'éducation en ligne en Afrique francophone,
              transformant des millions de vies grâce à l'apprentissage numérique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}