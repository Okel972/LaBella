import React from 'react';
import './Location.css';
import { Card } from '../Card';
import { Frame } from '../Frame';

export const Location = () => {
  return (
    <Card hasMargin>
      <Frame>8 Rue des Pâtes, 75001 Paris</Frame>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42005.89425910024!2d2.2959521546794153!3d48.8511851894762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671efd6799067%3A0xb5c16f7b15baafd7!2sLe%20Jardin%20des%20P%C3%A2tes!5e0!3m2!1sfr!2sfr!4v1685437534279!5m2!1sfr!2sfr"
        width="600"
        height="450"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="image-maps"
        title="map"
      />
    </Card>
  );
};
