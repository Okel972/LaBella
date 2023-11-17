import React from 'react';
import './FidelityCard.css';
import { Card } from '../Card';

export const FidelityCard = () => {
  return (
    <Card hasMargin>
      <div className="description-fildelite">
        <h2>Carte de fidélité disponible!</h2>
      </div>
      <img src="img/Loyalty1.png" alt="#" class="image-fidelite" />
    </Card>
  );
};
