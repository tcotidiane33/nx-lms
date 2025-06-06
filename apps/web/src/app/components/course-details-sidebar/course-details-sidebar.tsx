/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/naming-convention */
import { useState } from 'react';
import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './course-details-sidebar.css';
import { Button } from '@components/button/button';
import Modal from 'react-bootstrap/Modal';
import { courseDetailsSideBarHelper } from './course-details-sidebar-helper';
import type { ICourseDetailsSideBarState, ICourseDetailsSideBarProperties } from './course-details-sidebar-interface';

export function CourseDetailsSideBar({ title }: ICourseDetailsSideBarProperties):ReactElement {
  const [state, setState] = useState<ICourseDetailsSideBarState>({
    showModal: false,
  });

  const { showModal } = state;
  const helper = courseDetailsSideBarHelper(state, setState);

  return (
    <div className="course-details-sidebar box">
      <div className="img-box" onClick={helper.showModalHandler}>
        <img src="/img/courses/web-development/1.jpg" alt="course preview" />
        <div className="play-icon">
          <FontAwesomeIcon icon={faPlay} />
        </div>
        <p className="text-center">Aperçu du cours</p>
      </div>
      <div className="price">
        <span className="price-old">100.000</span>
        <span className="price-new">49.000</span>
        <span className="price-discount">51% de réduction</span>
      </div>
      <h3>Caractéristiques du cours</h3>
      <ul className="features-list">
        <li>150 leçons</li>
        <li>Basé sur des projets</li>
        <li>Support gratuit</li>
      </ul>
      <div className="btn-wrap">
        <Button
          text="S'inscrire"
          backgroundColor="main"
          onClick={() => console.log('enroll now')}
        />
      </div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal}
        onHide={helper.closeModalHandler}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Aperçu du cours
            {' '}
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ratio ratio-16x9">
            <video controls>
              <source
                src="https://hajifirouz11.cdn.asset.aparat.com/aparat-video/5e7955a86a6fd940990aba8905c5286347358381-1080p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjE1Y2RlNzk2M2QwMTZlNzc1YmE4ZTQ3NDQyMmUyNzhkIiwiZXhwIjoxNjYyMDU2MDE0LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.Baz3kRNHJQOEEh0BKe8ExPBvmPKF9GFO-UFVPWC5Ap0"
                type="video/mp4"
              />
            </video>
          </div>
        </Modal.Body>

      </Modal>
    </div>
  );
}
