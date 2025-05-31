import { Button } from '../button/button';
import BannerImage from '../../assets/img/banner-img.png';
import type { ReactElement } from 'react';
import { BubbleAnimation } from '../bubble-animation/bubble-animation';
import './hero-section.css';

export function HeroSection(): ReactElement {
  return (
    <div className="hero-section">
      <BubbleAnimation />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 py-12">
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/2">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Investir dans le savoir offre le meilleur retour
              </h2>
              <h1 className="text-3xl md:text-4xl font-bold text-primary-600">
                Kondro Networks site éducatif (NX NestJs + ReactJs + TS)
              </h1>
              <p className="text-lg text-gray-600">
                Pour voir le code source du template sur GitHub, cliquez sur le bouton ci-dessous
              </p>
              <a 
                href="https://github.com/tcotidiane33/nx-lms" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block"
              >
                <Button
                  text="source code"
                  onClick={() => console.log('if you want navigate to another page use navigate function')}
                  backgroundColor="main"
                />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="w-96 h-96 mx-auto">
                <div className="absolute inset-0 rounded-full bg-primary-100 animate-pulse" />
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src={BannerImage} 
                    alt="banner" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
