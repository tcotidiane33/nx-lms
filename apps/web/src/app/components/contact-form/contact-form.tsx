import { Button } from '@components/button/button';
import { Input } from '@components/input/input';
import type { ReactElement } from 'react';
import './contact-form.css';

export function ContactForm():ReactElement {
  return (
    <div className="contact-form box">
      <h2 className="form-title">Laissez un message</h2>
      <div className="form-group">
        <Input
          type="text"
          placeholder="Nom et prénom"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <Input
          type="text"
          placeholder="E-mail"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <Input
          type="text"
          placeholder="Numéro de téléphone"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <Input
          type="textarea"
          placeholder="Message"
          className="form-control"
        />
      </div>
      <Button
        text="Envoyer le message"
        onClick={() => console.log('login')}
        backgroundColor="main"
      />
    </div>
  );
}
