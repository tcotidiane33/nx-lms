import type { ReactElement } from 'react';
import './stats.css';

export function Stats(): ReactElement {
  return (
    <section className="stats section-padding">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>10,000+</h3>
            <p>Étudiants actifs</p>
          </div>
          <div className="stat-card">
            <h3>200+</h3>
            <p>Cours disponibles</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Formateurs experts</p>
          </div>
          <div className="stat-card">
            <h3>15+</h3>
            <p>Pays desservis</p>
          </div>
        </div>
      </div>
    </section>
  );
}