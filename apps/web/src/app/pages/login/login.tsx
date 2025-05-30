import { Suspense } from 'react';
import { SEO } from '@components/seo/seo';
import type { ReactElement } from 'react';
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb';
import { Language } from '@globals/enum';
import { Input } from '@components/input/input';
import { Spinner } from '@components/spinner/spinner';
import { Link } from 'react-router-dom';
import { Button } from '@components/button/button';
import './login.css';

export function LogIn(): ReactElement {
  return (
    <Suspense fallback={<Spinner />}>
      <SEO
        pageTitle="Connexion"
        description="Apprentissage facile avec le site web éducatif..."
        keywords={['site web éducatif', 'apprentissage en ligne']}
        language={Language.FR_FR}
      />
      <BreadcrumbComponent />
      <section className="login-section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md7 col-lg-6 col-xl-5">
              <div className="login-form box">
                <h2 className="login-form__title">Connexion à votre compte</h2>
                <div className="form-group">
                  <Input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <div className="d-flex mb-2 justify-content-end">
                    <Link to="/">Mot de passe oublié ?</Link>
                  </div>
                  <Input
                    type="password"
                    placeholder="Mot de passe"
                    className="form-control"
                  />
                </div>
                <Button
                  text="Se connecter"
                  onClick={() => console.log('login')}
                  backgroundColor="main"
                />
                <p>
                  Vous n'avez pas de compte ?
                  {' '}
                  <Link to="/signup">Inscription</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}
