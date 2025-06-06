import type { ReactElement } from 'react';
import type { IRatingBarsItemProperties } from './rating-bars-item-interface';
import './rating-bars-item.css';

export function RatingBarsItem({ progress, star }: IRatingBarsItemProperties):ReactElement {
  return (
    <div className="rating-bars-item">
      <div className="star-text">
        {star}
        {' '}
        étoile
      </div>
      <div className="progress">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <div className="percent">{`${progress}%`}</div>
    </div>
  );
}
