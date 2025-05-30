import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="footer__item">
                <h3 className="footer__logo">
                  <span>mahdi</span>
                  hasanzadeh
                </h3>
                <ul>
                  <li><Link to="#about">À propos de nous</Link></li>
                  <li><Link to="#careeares">Opportunités de carrière</Link></li>
                  <li><Link to="#certificate">Certificat</Link></li>
                  <li><Link to="#blog">Blog</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer__item">
                <h3>Apprentissage</h3>
                <ul>
                  <li><Link to="#about">Contactez-nous</Link></li>
                  <li><Link to="#service">Avis des étudiants</Link></li>
                  <li><Link to="#careeares">Tarification</Link></li>
                  <li><Link to="#certificate">Questions fréquentes</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer__item">
                <h3>Plus</h3>
                <ul>
                  <li><Link to="#about">Devenir instructeur</Link></li>
                  <li><Link to="#service">Webinaires</Link></li>
                  <li><Link to="#careeares">Créateur de CV</Link></li>
                  <li><Link to="#certificate">Support</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer__item">
                <h3>Réseaux sociaux</h3>
                <ul>
                  <li>
                    <a href="https://twitter.com/mahdihasanzade1" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon className="social-icon" icon={faTwitter} />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/mahdihasanzadeh8/" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon className="social-icon" icon={faInstagram} />
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/c/reactappir" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon className="social-icon" icon={faYoutube} />
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/mahdi-hasanzadeh/" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p className="m-0 py-4 text-center">
            Copyright &copy; 2022
            <a href="https://github.com/mahdihasanzadeh-dev/react-learning-website" target="_blank" rel="noreferrer"> Mahdi Hasanzadeh</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
