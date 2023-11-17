import React from 'react';
import './Frame.css';

export const Frame = props => {
  return (
    <div className={`description-fildelite ${props.backgroundColor === 'green' ? 'green' : 'red'}`}>
      <h2>{props.children}</h2>
    </div>
  );
};
