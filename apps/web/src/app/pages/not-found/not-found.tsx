
import { Suspense } from 'react';
import { SEO } from '../../components/seo/seo';
import type { ReactElement } from 'react';
import { Language } from '../../globals/enum';
import { Spinner } from '../../components/spinner/spinner';
import { Button } from '../../components/button/button';
import { useNavigate } from 'react-router-dom';
import type { NavigateFunction } from 'react-router-dom';
import './not-found.scss';

export function NotFound(): ReactElement {
  const navigate: NavigateFunction = useNavigate();

  return (
    <Suspense fallback={<Spinner />}>
      <SEO
        pageTitle="Page introuvable"
        description="Apprentissage facile avec la plateforme éducative..."
        keywords={['plateforme éducative', 'apprentissage en ligne']}
        language={Language.FR_FR}
      />
      <section className="not-found-section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-6 col-xl-5">
              <div className="not-found-box box">
                <h2 className="not-found-box__title">Erreur 404</h2>
                <p>Il semble que vous vous soyez perdu entre les pages, nous allons vous aider à en sortir.</p>
                <Button
                  text="Retour à l'accueil"
                  onClick={() => navigate('/')}
                  backgroundColor="main"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}
