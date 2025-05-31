import { Suspense } from 'react';
import { SEO } from '@components/seo/seo';
import type { ReactElement } from 'react';
import { Language } from '@globals/enum';
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb';
import { ContactItems } from '@components/contact-items/contact-items';
import { ContactForm } from '@components/contact-form/contact-form';
import { Spinner } from '@components/spinner/spinner';
import './contact.css';

export function Contact(): ReactElement {
  return (
    <Suspense fallback={<Spinner />}>
      <SEO
        pageTitle="Contactez-nous"
        description="Apprentissage facile avec notre plateforme éducative"
        keywords={['contact', 'support', 'aide', 'éducation en ligne']}
        language={Language.FR_FR}
      />
      {/* <BreadcrumbComponent /> */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h1 className="contact-title">Nous contacter</h1>
            <p className="contact-subtitle">
              Notre équipe est disponible pour répondre à vos questions et vous accompagner
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-card">
                <h2 className="info-title">Informations de contact</h2>
                <p className="info-description">
                  Plusieurs moyens sont à votre disposition pour nous joindre
                </p>
                <ContactItems />
              </div>
            </div>

            <div className="contact-form-section">
              <div className="form-card">
                <h2 className="form-title">Envoyez-nous un message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}