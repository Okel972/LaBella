import React from 'react';
import './MobileMenu.css';
import { Link, useLocation } from 'react-router-dom';

export const MobileMenu = props => {
  const location = useLocation();
  return (
    <div className="menu-mobile">
      <nav className="topbar-nav-mobile">
        {props.routes.map((route, index) => {
          return (
            <Link
              onClick={() => {
                props.setIsMenuOpen(!props.isMenuOpen);
              }}
              className={location.pathname}
              key={index}
              to={`/${route.toLowerCase()}`}
            >
              {route}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
