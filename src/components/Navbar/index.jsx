import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { MobileMenu } from '../MobileMenu';

export const Navbar = () => {
  const routes = ['Home', 'Carte', 'Contact', 'Admin'];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();

  return (
    <header className="topbar">
      <div className="logo-container">
        <Link to="home" className="topbar-logo1">
          La Bella
        </Link>
      </div>

      <div className="topbar-menu">
        <nav className="topbar-nav">
          {routes.map((route, index) => (
            <Link
              className={location.pathname === `/${route.toLowerCase()}` ? 'active' : ''}
              key={index}
              to={`/${route.toLowerCase()}`}
            >
              {route}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleMenu}
          type="button"
          className="toggle"
          aria-label="toggle curtain navigation"
        >
          <span className="line l1"></span>
          <span className="line l2"></span>
          <span className="line l3"></span>
        </button>
      </div>

      {isMenuOpen && (
        <MobileMenu routes={routes} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      )}

      <div className="topbar-last-section">
        <div className="container-icon">
          <div className="container-phone">
            <img href="#" className="img-numero" src="img/phone1.svg" />
            <span href="#" className="numero">
              06 01 02 03 04
            </span>
          </div>
          <Link to="connect" className="btnLogin-popup">Login</Link>
          <Link to="shopping-cart" className="cart-icon">
            <img src="img/shopping-cart-line.png" />
          </Link>
          <Link to="carte" title="search">
            <img src="img/search.svg" title="search" className="img-search" />
          </Link>
        </div>
      </div>
    </header>
  );
};