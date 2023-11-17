import React from 'react';
import './MenuList.css';
import { CardMenu } from '../CardMenu';
import { Filters } from '../Filters';

export const MenuList = props => {
  const menuList = [
    {
      picture: 'img/Olivia1.png',
      title: 'Olivia',
      description: 'Base tomate, fromage, olives vertes, olives noires…',
      price: '6.00€',
    },

    {
      picture: 'img/Olivia1.png',
      title: 'Olivia',
      description: 'Base tomate, fromage, olives vertes, olives noires…',
      price: '6.00€',
    },
    {
      picture: 'img/Olivia1.png',
      title: 'Olivia',
      description: 'Base tomate, fromage, olives vertes, olives noires…',
      price: '6.00€',
    },
    {
      picture: 'img/Olivia1.png',
      title: 'Olivia',
      description: 'Base tomate, fromage, olives vertes, olives noires…',
      price: '6.00€',
    },
    {
      picture: 'img/Olivia1.png',
      title: 'Olivia',
      description: 'Base tomate, fromage, olives vertes, olives noires…',
      price: '6.00€',
    },
    {
      picture: 'img/Olivia1.png',
      title: 'Olivia',
      description: 'Base tomate, fromage, olives vertes, olives noires…',
      price: '6.00€',
    },
  ];
  return (
    <div className="menu-list">
      <Filters />
      <h2 className="title-menu-list">{props.title}</h2>
      <div className="card-menu-list">
        {menuList.map((menu, index) => {
          return (
            <CardMenu
              key={index}
              picture={menu.picture}
              title={menu.title}
              description={menu.description}
              price={menu.price}
            />
          );
        })}
      </div>
    </div>
  );
};
