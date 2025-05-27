/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/naming-convention */
import type { ReactElement } from 'react';
import { useId, useState } from 'react';
import { TestimonialsItem } from '@components/testimonials-item/testimonials-item';
import { DecorationCircles } from '@components/decoration-circles/decoration-circles';
import { DecorationImgs } from '@components/decoration-imgs/decoration-imgs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import testimonialsData from '@data/testimonials.json';
import { testimonialsHelper } from './testimonials-helper';
import type { ITestimonialsState } from './testimonials-interface';
import 'swiper/css';
import 'swiper/css/navigation';
import './testimonials.scss';

export function Testimonials():ReactElement {
  const [state, setState] = useState<ITestimonialsState>({
    activeTestimonialIndex: 0,
  });

  const { activeTestimonialIndex } = state;
  const helper = testimonialsHelper(state, setState);

  const swiperSettings = {
    modules: [Navigation],
    loop: true,
    speed: 500,
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    onActiveIndexChange: (swiper) => {
      setState({ activeTestimonialIndex: swiper.realIndex });
    },
  };

  return (
    <div className="testimonials-section section-padding">
      <DecorationCircles />
      <DecorationImgs testimonialsData={testimonialsData} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-title text-center">
              <h2 className="title">Témoignages d'étudiants</h2>
              <p className="sub-title">Ce qu'ils disent de nous</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="img-box rounded-circle">
              <img src={testimonialsData[activeTestimonialIndex].avatar} className="w-100 rounded-circle js-testimonial-img" alt="student pic" />
            </div>
            <Swiper {...swiperSettings}>
              {
                testimonialsData.map((testimonial) => {
                  const { name, role, avatar, comment } = testimonial;

                  return (
                    <SwiperSlide key={useId()}>
                      <TestimonialsItem
                        name={name}
                        role={role}
                        avatar={avatar}
                        comment={comment}
                      />
                    </SwiperSlide>
                  );
                })
              }
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
