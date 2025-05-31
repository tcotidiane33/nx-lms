import type { ReactElement } from 'react';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { ContactItem } from '../contact-item/contact-item';
import './contact-items.css';

export function ContactItems(): ReactElement {
  return (
    <div className="contact-items">
      <ContactItem
        icon={faMapMarkerAlt}
        title="Adresse"
        description="123 Rue de l'Éducation, Abidjan, Côte d'Ivoire"
      />
      <ContactItem
        icon={faPhone}
        title="Téléphone"
        description="+225 07 69 46 98 44"
      />
      <ContactItem
        icon={faEnvelope}
        title="Email"
        description="contact@monsite-educatif.ci"
      />
      <ContactItem
        icon={faClock}
        title="Heures d'ouverture"
        description="Lun-Ven: 8h-18h | Sam: 9h-13h"
      />
    </div>
  );
}