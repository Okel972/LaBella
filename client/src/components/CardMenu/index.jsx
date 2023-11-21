import React from 'react';
import './CardMenu.css';

export const CardMenu = props => {
  return (
    <div className="card-menu">
      <div className="card-menu-image">
        <img src={props.picture} alt={props.title} />
      </div>
      <div className="card-menu-desc-content">
        <div className="card-menu-title">
          <h2>{props.title}</h2>
        </div>
        <div className="card-menu-description">
          <p>{props.description}</p>
        </div>
        <div className="card-menu-price">
          <p>{props.price}</p>
        </div>
      </div>
    </div>
  );
};
