import type { ReactElement } from 'react';
import { useId } from 'react';
import type { IDecorationImgsProperties } from './decoration-imgs-interface';
import './decoration-imgs.css';

export function DecorationImgs({ testimonialsData }: IDecorationImgsProperties):ReactElement {
  return (
    <div className="decoration-imgs d-none d-lg-block">
      {
        testimonialsData.map((testimonial) => <img key={useId()} src={testimonial.avatar} className="decoration-imgs__item" alt={testimonial.name} />)
      }
    </div>
  );
}
