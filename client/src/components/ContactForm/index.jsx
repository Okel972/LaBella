import React from 'react';
import './ContactForm.css';
import { Card } from '../Card';

export const ContactForm = () => {
  return (
    <Card hasMargin>
      <form method="POST">
        <div className="contact">
          <div className="title-contact">Envoyez-nous un message</div>

          <div className="contact-content">
            <div>
              <input
                onChange={() => console.log('e')}
                type="text"
                name="nameContact"
                id="inputName"
                className="nom"
                placeholder="Nom"
                value=""
              />
            </div>

            <div>
              <input
                onChange={() => console.log('e')}
                type="text"
                name="emailContact"
                id="inputEmail"
                className="email"
                placeholder="Email"
                value=""
              />
            </div>

            <div>
              <select
                name="service"
                id="inputService"
                className="sujet"
                onChange={() => console.log('e')}
              >
                <option value="0">Contact</option>
                <option value="1">Commandes</option>
                <option value="2">Informations</option>
              </select>
            </div>

            <div>
              <textarea
                name="messageContact"
                id="inputMessage"
                className="comment"
                placeholder="Message"
              />
            </div>

            <button type="submit" className="bouton-envoyer">
              Envoyer
            </button>
          </div>
        </div>
      </form>
    </Card>
  );
};
