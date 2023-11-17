import React from 'react';
import './FidelityCard.css';
import { Card } from '../Card';
import { Frame } from '../Frame';

export const FidelityCard = () => {
  return (
    <Card hasMargin>
      <Frame backgroundColor="green">Carte de fidélité disponible!</Frame>
      <img src="img/Loyalty1.png" alt="#" class="image-fidelite" />
    </Card>
  );
};
