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
      <section className="signup-section">
        <div className="signup-container">
          <div className="signup-card">
            <div className="signup-header">
              <h2 className="signup-title">Créer un compte</h2>
              <p className="signup-subtitle">Commencez votre parcours d'apprentissage</p>
            </div>
            
            <form className="signup-form">
              <div className="form-group">
                <Input
                  type="text"
                  placeholder="Nom complet"
                  className="signup-input"
                  icon={
                    <svg className="input-icon" viewBox="0 0 24 24">
                      <path d="M12 12a4 4 0 100-8 4 4 0 000 8z"/>
                      <path d="M5 20v-2a5 5 0 0110 0v2"/>
                    </svg>
                  }
                />
              </div>
              
              <div className="form-group">
                <Input
                  type="email"
                  placeholder="Adresse email"
                  className="signup-input"
                  icon={
                    <svg className="input-icon" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <path d="M22 6l-10 7L2 6"/>
                    </svg>
                  }
                />
              </div>
              
              <div className="form-group">
                <Input
                  type="password"
                  placeholder="Mot de passe"
                  className="signup-input"
                  icon={
                    <svg className="input-icon" viewBox="0 0 24 24">
                      <path d="M12 15a2 2 0 100-4 2 2 0 000 4z"/>
                      <path d="M19 15a7 7 0 11-14 0 7 7 0 0114 0z"/>
                      <path d="M12 19a4 4 0 01-4-4v-2a4 4 0 014-4v10z"/>
                    </svg>
                  }
                />
                <div className="password-requirements">
                  <p>Le mot de passe doit contenir :</p>
                  <ul>
                    <li>8 caractères minimum</li>
                    <li>1 majuscule</li>
                    <li>1 chiffre</li>
                  </ul>
                </div>
              </div>
              
              <div className="form-group terms">
                <input type="checkbox" id="terms" className="terms-checkbox" />
                <label htmlFor="terms">
                  J'accepte les <Link to="/terms">conditions d'utilisation</Link>
                </label>
              </div>
              
              <Button
                text="S'inscrire"
                onClick={() => console.log('signup')}
                className="signup-button"
              />
              
              <div className="signup-footer">
                <p>Vous avez déjà un compte ? <Link to="/login" className="login-link">Se connecter</Link></p>
              </div>
            </form>
            
            <div className="social-signup">
              <p className="divider">Ou inscrivez-vous avec</p>
              <div className="social-buttons">
                <button type="button" className="social-button google">
                  <svg className="social-icon" viewBox="0 0 24 24">
                    {/* Icône Google */}
                  </svg>
                  Google
                </button>
                <button type="button" className="social-button facebook">
                  <svg className="social-icon" viewBox="0 0 24 24">
                    {/* Icône Facebook */}
                  </svg>
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}