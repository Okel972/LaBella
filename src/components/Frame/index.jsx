import React from 'react';
import './Frame.css';

export const Frame = props => {
  return (
    <div
      className={`description-fildelite ${props.bottom ? 'bottom' : 'center'} ${
        props.backgroundColor
      }`}
    >
      <h2>{props.children}</h2>
    </div>
  );
};
