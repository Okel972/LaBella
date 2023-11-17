import React from 'react';
import './ContactForm.css';
import { Card } from '../Card';

export const ContactForm = () => {
  return (
    <Card hasMargin>
      <form method="POST">
        <div class="contact">
          <div class="title-contact">Envoyez-nous un message</div>

          <div class="contact-content">
            <div>
              <input
                type="text"
                name="nameContact"
                id="inputName"
                class="nom"
                placeholder="Nom"
                value=""
              />
            </div>

            <div>
              <input
                type="text"
                name="emailContact"
                id="inputEmail"
                class="email"
                placeholder="Email"
                value=""
              />
            </div>

            <div>
              <select name="service" id="inputService" class="sujet">
                <option value="0">Contact</option>
                <option value="1">Commandes</option>
                <option value="2">Informations</option>
              </select>
            </div>

            <div>
              <textarea
                name="messageContact"
                id="inputMessage"
                class="comment"
                placeholder="Message"
              />
            </div>

            <button type="submit" class="bouton-envoyer">
              Envoyer
            </button>
          </div>
        </div>
      </form>
    </Card>
  );
};
