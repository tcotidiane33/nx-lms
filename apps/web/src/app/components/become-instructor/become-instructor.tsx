import { Button } from '@components/button/button';
// import instrucorImg from '@assets/img/bai-img.png';
import './become-instructor.scss';

export function BecomeInstructor() {
  return (
    <section className="bai-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="box">
              <div className="row align-items-center">
                <div className="col-md-6 mb-4 m-md-0">
                  <div className="circular-img">
                    <div className="circular-img__inner">
                      <div className="circular-img__circle" />
                      {/* <img src={instrucorImg} alt="become instructor" /> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="section-title">
                    <p className="sub-title">Devenez formateur</p>
                    <h2 className="title">Si vous êtes passionné par la création de contenu, contactez-nous</h2>
                  </div>
                  <div className="col-12 mt-3 d-flex justify-content-center"> 
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
