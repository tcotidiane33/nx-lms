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
import './testimonials.css';
import type { Swiper as SwiperClass } from 'swiper/types';

export function Testimonials(): ReactElement {
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
    onActiveIndexChange: (swiper: SwiperClass) => {
      setState({ activeTestimonialIndex: swiper.realIndex });
    },
  };

  return (
    <section className="testimonials-section section-padding bg-gray-50">
      <DecorationCircles />
      <DecorationImgs testimonialsData={testimonialsData} />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Témoignages d'étudiants</h2>
          <p className="text-lg text-gray-600">Ce qu'ils disent de nous</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="w-32 h-32 mx-auto mb-8 overflow-hidden rounded-full shadow-lg">
              <img
                src={testimonialsData[activeTestimonialIndex].avatar}
                className="w-full h-full object-cover"
                alt="student pic"
              />
            </div>

            <div className="relative bg-white rounded-xl shadow-lg p-8">
              <Swiper {...swiperSettings}>
                <div className="swiper-wrapper">

                  {testimonialsData.map((testimonial, index) => {
                    const { name, role, avatar, comment } = testimonial;
                    return (
                      <SwiperSlide key={index}>
                        <TestimonialsItem
                          name={name}
                          role={role}
                          avatar={avatar}
                          comment={comment}
                        />
                      </SwiperSlide>
                    );
                  })}
                </div>

                <div className="swiper-button-prev text-primary-600 absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-white/80 hover:bg-white p-2 rounded-r-lg shadow-md"></div>
                <div className="swiper-button-next text-primary-600 absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-white/80 hover:bg-white p-2 rounded-l-lg shadow-md"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
