import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IContactItemProperties } from './contact-item-interface';
import './contact-item.css';

export function ContactItem({ icon, title, description }: IContactItemProperties): ReactElement {
  return (
    <div className="contact-item">
      <div className="contact-item__icon">
        <FontAwesomeIcon icon={icon} className="contact-icon" />
      </div>
      <div className="contact-item__content">
        <h3 className="contact-item__title">{title}</h3>
        <p className="contact-item__description">{description}</p>
      </div>
    </div>
  );
}