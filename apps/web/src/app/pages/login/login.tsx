import { Suspense } from 'react';
import { SEO } from '../../components/seo/seo';
import type { ReactElement } from 'react';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb';
import { Language } from '../../globals/enum';
import { Input } from '../../components/input/input';
import { Spinner } from '../../components/spinner/spinner';
import { Link } from 'react-router-dom';
import { Button } from '../../components/button/button';
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
      <section className="login-section">
        <div className="login-container">
          <div className="login-card">
            <div className="login-header">
              <h2 className="login-title">Connexion à votre compte</h2>
              <p className="login-subtitle">Entrez vos identifiants pour accéder à votre espace</p>
            </div>
            
            <form className="login-form">
              <div className="form-group">
                <Input
                  type="email"
                  placeholder="Adresse email"
                  className="login-input"
                  icon={<svg className="input-icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>}
                />
              </div>
              
              <div className="form-group">
                <Input
                  type="password"
                  placeholder="Mot de passe"
                  className="login-input"
                  icon={<svg className="input-icon" viewBox="0 0 24 24"><path d="M12 15a2 2 0 100-4 2 2 0 000 4z"/><path d="M19 15a7 7 0 11-14 0 7 7 0 0114 0z"/><path d="M12 19a4 4 0 01-4-4v-2a4 4 0 014-4v10z"/></svg>}
                />
                <div className="forgot-password">
                  <Link to="/forgot-password">Mot de passe oublié ?</Link>
                </div>
              </div>
              
              <Button
                text="Se connecter"
                onClick={() => console.log('login')}
                className="login-button"
              />
              
              <div className="login-footer">
                <p>Vous n'avez pas de compte ? <Link to="/signup" className="signup-link">Créer un compte</Link></p>
              </div>
            </form>
            
            <div className="social-login">
              <p className="divider">Ou connectez-vous avec</p>
              <div className="social-buttons">
                <button type="button" className="social-button google">
                  <svg className="social-icon" viewBox="0 0 24 24"><path d="..."/></svg>
                  Google
                </button>
                <button type="button" className="social-button facebook">
                  <svg className="social-icon" viewBox="0 0 24 24"><path d="..."/></svg>
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