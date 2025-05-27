import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './course-reviews-item.scss';

export function CourseReviewsItem():ReactElement {
  return (
    <div className="course-reviews-item">
      <div className="img-box">
        <img src="/src/assets/img/review/1.png" alt="review img" />
      </div>
      <h4>Mehdi Hasanzadeh</h4>
      <div className="stars-rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <span className="date">Il y a 1 semaine</span>
      </div>
      <p>
        Un excellent cours. J'ai appris beaucoup de choses dans ce cours et je remercie l'instructeur pour son éloquence
        et sa maîtrise.
      </p>
    </div>
  );
}
