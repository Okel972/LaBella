import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer class="footer">
      <div class="social-bar">
        <nav class="social">
          <a href="https://www.snapchat.com/fr-FR" target="_blank" rel="noreferrer">
            <img src="img/snapchat.svg" alt="#" class="social-icone" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src="img/twitter.svg" alt="#" class="social-icone" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img src="img/youtube.svg" alt="#" class="social-icone" />
          </a>
          <a
            href="https://www.facebook.com/?wtsid=rdr_0XByzIW7A6TqBWcAP"
            target="_blank"
            rel="noreferrer"
          >
            <img src="img/facebook.svg" alt="#" class="social-icone" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="img/instagram.png" alt="#" class="social-icone" />
          </a>
          <a href="https://www.tiktok.com/foryou" target="_blank" rel="noreferrer">
            <img src="img/tiktok.svg" alt="#" class="social-icone" />
          </a>
        </nav>
      </div>

      <div class="info-bar">
        <article class="premiere-colonne">
          <span class="premiere-colonne-title">Liens utiles</span>

          <a href="liensUtiles/mentionsLegales.html" target="_blank" class="first-lign">
            Mentions légales
          </a>
          <a href="liensUtiles/politiqueDeCookies.html" target="_blank" class="first-lign">
            Politique de cookies
          </a>
          <a href="liensUtiles/politiqueDeDonnees.html" target="_blank" class="first-lign">
            Politique de données
          </a>
          <a href="liensUtiles/conditionsGenerales.html" target="_blank" class="first-lign">
            Conditions Générales
          </a>
          <a href="liensUtiles/copyright.html" target="_blank" class="first-lign">
            Copyright
          </a>

          <button class="btnLogin-popup">
            <a href="connect">Login</a>
          </button>
        </article>

        <article class="deuxieme-colonne">
          <span class="deuxieme-colonne-title">Horaires d'ouverture</span>

          <p href="#" class="week1">
            Du dimanche au jeudi
          </p>
          <p href="#" class="hours1">
            de 11h à 14h et de 18h à 23h
          </p>
          <p href="#" class="week2">
            et du vendredi au samedi
          </p>
          <p href="#" class="hours2">
            de 18h à 00h
          </p>
        </article>
      </div>
    </footer>
  );
};
