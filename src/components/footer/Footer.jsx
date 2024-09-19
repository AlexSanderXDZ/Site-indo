import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Indominus</h1>
        <ul className="footer__list">
          <li>
            <a href="#" className="footer__link">
              Sobre nós
            </a>
          </li>

          <li>
            <a href="#portifolio" className="footer__link">
              Missão
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Valores
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/indominus.codev?igsh=MXQyYjZ1eXltd3c1aw=="
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>

          <a
            href="mailto:indominus.codev@gmail.com"
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-envelope"></i>
          </a>
        </div>

        <p className="footer__trademark">©2024 IndominusDev</p>
      </div>
    </footer>
  );
};

export default Footer;
