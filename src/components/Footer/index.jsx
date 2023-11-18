import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-bar">
        <nav className="social">
          <a href="https://www.snapchat.com/fr-FR" target="_blank" rel="noreferrer">
            <img src="img/snapchat.svg" alt="#" className="social-icone" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src="img/twitter.svg" alt="#" className="social-icone" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img src="img/youtube.svg" alt="#" className="social-icone" />
          </a>
          <a
            href="https://www.facebook.com/?wtsid=rdr_0XByzIW7A6TqBWcAP"
            target="_blank"
            rel="noreferrer"
          >
            <img src="img/facebook.svg" alt="#" className="social-icone" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="img/instagram.png" alt="#" className="social-icone" />
          </a>
          <a href="https://www.tiktok.com/foryou" target="_blank" rel="noreferrer">
            <img src="img/tiktok.svg" alt="#" className="social-icone" />
          </a>
        </nav>
      </div>

      <div className="info-bar">
        <article className="premiere-colonne">
          <span className="premiere-colonne-title">Liens utiles</span>

          <a href="liensUtiles/mentionsLegales.html" target="_blank" className="first-lign">
            Mentions légales
          </a>
          <a href="liensUtiles/politiqueDeCookies.html" target="_blank" className="first-lign">
            Politique de cookies
          </a>
          <a href="liensUtiles/politiqueDeDonnees.html" target="_blank" className="first-lign">
            Politique de données
          </a>
          <a href="liensUtiles/conditionsGenerales.html" target="_blank" className="first-lign">
            Conditions Générales
          </a>
          <a href="liensUtiles/copyright.html" target="_blank" className="first-lign">
            Copyright
          </a>

          <button className="btnLogin-popup">
            <a href="connect">Login</a>
          </button>
        </article>

        <article className="deuxieme-colonne">
          <span className="deuxieme-colonne-title">Horaires d'ouverture</span>

          <p href="#" className="week1">
            Du dimanche au jeudi
          </p>
          <p href="#" className="hours1">
            de 11h à 14h et de 18h à 23h
          </p>
          <p href="#" className="week2">
            et du vendredi au samedi
          </p>
          <p href="#" className="hours2">
            de 18h à 00h
          </p>
        </article>
      </div>
    </footer>
  );
};
