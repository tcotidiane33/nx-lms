/* eslint-disable max-len */
import type { ReactElement } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import './course-curriculum.css';

export function CourseCurriculum():ReactElement {
  return (
    <div className="course-curriculum box">
      <h3 className="mb-4">Programme du cours</h3>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Chapitre 1 : Introduction aux bases et concepts fondamentaux de React Js
            {' '}
            <span> 18 leçons | 5 heures</span>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                Introduction au cours de formation complet sur React Js
                <span>04:00</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                Qu'est-ce que React ?
                <span>10:00</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                Installation de React
                <span>7:00</span>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Chapitre 2 : Créer une application Todo
            {' '}
            <span> 4 leçons | 1 heure</span>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                Introduction au cours de formation complet sur React Js
                <span>04:00</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                Qu'est-ce que React ?
                <span>10:00</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                Installation de React
                <span>7:00</span>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Chapitre 3 : Débogage dans React
            {' '}
            <span> 4 leçons | 1,5 heures</span>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                Introduction au cours de formation complet sur React Js
                <span>04:00</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                Qu'est-ce que React ?
                <span>10:00</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                Installation de React
                <span>7:00</span>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Chapitre 4 : Conception de l'interface utilisateur du projet
            <span> 25 leçons | 7 heures</span>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                Introduction au cours de formation complet sur React Js
                <span>04:00</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                Qu'est-ce que React ?
                <span>10:00</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} />
                Installation de React
                <span>7:00</span>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
