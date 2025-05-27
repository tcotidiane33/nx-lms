import type { ReactElement } from 'react';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ContactItem } from '@components/contact-item/contact-item';

export function ContactItems(): ReactElement {
  return (
    <div className="contact-items">
      <ContactItem
        icon={faMapMarkerAlt}
        title="Adresse"
        description="Abidjan, Afrique de l'ouest, Côte d'ivoire"
      />
      <ContactItem
        icon={faPhone}
        title="Téléphone"
        description="0769469844"
      />
      <ContactItem
        icon={faEnvelope}
        title="E-mail"
        description="info@gmail.com"
      />
    </div>
  );
}
