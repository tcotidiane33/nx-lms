import type { ReactElement } from 'react';
import { Input } from '@components/input/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './course-reviews-filter.css';

export function CourseReviewsFilter():ReactElement {
  return (
    <div className="course-reviews-filter">
      <h3>Avis</h3>
      <div className="form-group">
        <FontAwesomeIcon icon={faChevronDown} className="select-icon" />
        <Input
          type="select"
          className="form-control"
          options={
                [
                  {
                    value: '',
                    text: 'Tous les avis',
                  },
                  {
                    value: '1',
                    text: '1 étoile',
                  },
                  {
                    value: '2',
                    text: '2 étoiles',
                  },
                  {
                    value: '3',
                    text: '3 étoiles',
                  },
                  {
                    value: '4',
                    text: '4 étoiles',
                  },
                  {
                    value: '5',
                    text: '5 étoiles',
                  },
                ]
            }
        />
      </div>
    </div>
  );
}
