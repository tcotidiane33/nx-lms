import { Button } from '../../components/button/button';
import  BannerImage  from '../../../assets/img/banner-img.png';
import type { ReactElement } from 'react';
import { BubbleAnimation } from '../../components/bubble-animation/bubble-animation';
import './hero-section.scss';
// import { useNavigate } from 'react-router-dom';
// import type { NavigateFunction } from 'react-router-dom';

export function HeroSection(): ReactElement {
  // const navigate: NavigateFunction = useNavigate();

  return (
    <div className="hero-section">
      <BubbleAnimation />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="hero__text">
              <h2 className="mb-3">Investir dans le savoir offre le meilleur retour</h2>
              <h1 className="mb-3">Template de site éducatif (ReactJs + TS)</h1>
              <p className="mb-4">Pour voir le code source du template sur GitHub, cliquez sur le bouton ci-dessous</p>
              <a href="https://github.com/tcotidiane33/nx-lms" target="_blank" rel="noreferrer">
                <Button
                  text="source code"
                  onClick={() => console.log('if you want navigate to another page use navigate function')}
                  backgroundColor="main"
                />
              </a>
            </div>
          </div>
          <div className="col-md-6 order-first order-md-last mb-5 mb-md-0">
            <div className="hero__img">
              <div className="circular-img">
                <div className="circular-img__inner">
                  <div className="circular-img__circle" />
                  <img src={BannerImage} alt="banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
