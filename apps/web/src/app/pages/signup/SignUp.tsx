import { Suspense } from 'react';
import { SEO } from '@components/seo/seo';
import type { ReactElement } from 'react';
import { Language } from '@globals/enum';
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb';
import { Input } from '@components/input/input';
import { Button } from '@components/button/button';
import { Spinner } from '@components/spinner/spinner';
import { Link } from 'react-router-dom';
import './signup.css';

export function SignUp(): ReactElement {
  return (
    <Suspense fallback={<Spinner />}>
      <SEO
        pageTitle="Inscription"
        description="Apprentissage facile avec le site web éducatif..."
        keywords={['site web éducatif', 'apprentissage en ligne']}
        language={Language.FR_FR}
      />
      <BreadcrumbComponent />
      <section className="signup-section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md7 col-lg-6 col-xl-5">
              <div className="signup-form box">
                <h2 className="signup-form__title"> Créer un compte</h2>
                <div className="form-group">
                  <Input
                    type="text"
                    placeholder="Nom et Prénom"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <Input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <Input
                    type="password"
                    placeholder="Mot de passe"
                    className="form-control"
                  />
                </div>
                <Button
                  text="S'inscrire"
                  onClick={() => console.log('login')}
                  backgroundColor="main"
                />
                <p>
                  Vous avez déjà un compte ?
                  {' '}
                  <Link to="/login">Connexion</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Suspense>

  );
}
