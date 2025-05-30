import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import type { ICourseDetailsHeaderProperties } from './course-details-header-interface';
import './course-details-header.css';

export function CourseDetailsHeader({ title }: ICourseDetailsHeaderProperties):ReactElement {
  return (
    <div className="course-header box">
      <h2>{title}</h2>
      <div className="rating">
        <span className="average-rating">(4.5)</span>
        <span className="average-stars">
          <FontAwesomeIcon icon={faStarHalfAlt} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span className="reviewa">(230 avis)</span>
      </div>
      <ul>
        <li>
          {' '}
          Étudiants du cours -
          {' '}
          <span>220</span>
        </li>
        <li>
          {' '}
          Instructeur -
          {' '}
          <span>
            <NavLink to="/">Jean Dupont</NavLink>
            {' '}
          </span>
        </li>
        <li>
          {' '}
          Dernière mise à jour -
          {' '}
          <span>Novembre 1401</span>
        </li>
        <li>
          {' '}
          Langue -
          {' '}
          <span>Persan</span>
        </li>
      </ul>
    </div>
  );
}
