import { Button } from '@components/button/button';
import instrucorImg from '@assets/img/bai-img.png';
import './become-instructor.css';

export function BecomeInstructor() {
  return (
    <section className="bai-section section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="w-80 h-80 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-primary-100 animate-pulse" />
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                      <img 
                        src={instrucorImg} 
                        alt="become instructor" 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="space-y-4">
                  <p className="text-primary-600 font-semibold">Devenez formateur</p>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Si vous êtes passionné par la création de contenu, contactez-nous
                  </h2>
                  <div className="pt-4">
                    <Button
                      text="Soumettre une demande"
                      onClick={() => console.log('all course')}
                      backgroundColor="main"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
