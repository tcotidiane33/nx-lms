/* eslint-disable max-len */
import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlayCircle, faCertificate } from '@fortawesome/free-solid-svg-icons';
import './course-instructor.scss';

export function CourseInstructor():ReactElement {
  return (
    <div className="course-instructor box">
      <div className="instructor-details">
        <div className="details-wrap">
          <div className="right-box">
            <div className="img-box">
              <img src="/img/instructor/1.png" alt="Instructeur du cours" />
            </div>
          </div>
          <div className="left-box">
            <h4>
              Mehdi Hasanzadeh
              <span> (Développeur Front-end)</span>
            </h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={faStar} />
                4.5
              </li>
              <li>
                <FontAwesomeIcon icon={faPlayCircle} />
                10 cours
              </li>
              <li>
                <FontAwesomeIcon icon={faCertificate} />
                1000
              </li>
            </ul>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
