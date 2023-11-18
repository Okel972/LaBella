import React from 'react';
import './MenuList.css';
import { CardMenu } from '../CardMenu';

export const MenuList = props => {
  return (
    <div className="menu-list">
      <h2 className="title-menu-list">{props.title}</h2>
      {props.products.length === 0 && <p className="no-product">Aucun produit disponible</p>}
      <div className="card-menu-list">
        {props.products.length > 0
          ? props.products.map((menu, index) => {
              return (
                <CardMenu
                  key={index}
                  picture={menu.picture}
                  title={menu.title}
                  description={menu.description}
                  price={menu.price}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};
