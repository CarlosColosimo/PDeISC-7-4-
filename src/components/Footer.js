import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>Contacto: <a href="colosimocarlos3@gmail.com">colosimocarlos3@gmail.com</a></p>
    <ul className="footer-socials">
      <li><a href="https://github.com/CarlosColosimo" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      <li><a href="No tengo" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      <li><a href="No lo uso" target="_blank" rel="noopener noreferrer">Twitter</a></li>
    </ul>
    <p>&copy; 2024 Carlos Colosimo. Todos los derechos reservados.</p>
  </footer>
);

export default Footer;
