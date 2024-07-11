import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Sobre nosotros</h4>
          <p>Somos una empresa dedicada a ofrecer los mejores productos a nuestros clientes.</p>
        </div>
        <div className="footer-section">
          <h4>Navegación</h4>
          <ul>
            <li><a href="/home">Inicio</a></li>
            <li><a href="/about">Sobre Nosotros</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Teléfono: +506 7297-6223</p>
          <p>Email: eabarca@fwdcostarica.com</p>
        </div>
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/fwdcostarica"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.instagram.com/fwdcostarica/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://cr.linkedin.com/company/fwd-costa-rica?trk=public_post_feed-actor-name"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Forward. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
