import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>EventosApp</h3>
              <p>Creando experiencias inolvidables desde 2024</p>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link">
                <span>📘</span> Facebook
              </a>
              <a href="#" className="social-link">
                <span>📷</span> Instagram
              </a>
              <a href="#" className="social-link">
                <span>🐦</span> Twitter
              </a>
              <a href="#" className="social-link">
                <span>💼</span> LinkedIn
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Contacto y Soporte</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email:</strong>
                  <a href="mailto:soporte@eventosapp.com">soporte@eventosapp.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Teléfono:</strong>
                  <a href="tel:+5491123456789">+54 9 11 2345-6789</a>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">💬</span>
                <div>
                  <strong>Chat en vivo:</strong>
                  <span>Lun-Vie 9:00-18:00</span>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">🎧</span>
                <div>
                  <strong>Soporte técnico:</strong>
                  <a href="mailto:tech@eventosapp.com">tech@eventosapp.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Enlaces Útiles</h4>
            <div className="footer-links">
              <Link to="/about">Acerca de nosotros</Link>
              <Link to="/help">Centro de ayuda</Link>
              <Link to="/pricing">Precios</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/careers">Trabajá con nosotros</Link>
              <Link to="/press">Prensa</Link>
            </div>
          </div>

          <div className="footer-section">
            <h4>Legal y Seguridad</h4>
            <div className="footer-links">
              <Link to="/privacy">Política de Privacidad</Link>
              <Link to="/terms">Términos y Condiciones</Link>
              <Link to="/cookies">Política de Cookies</Link>
              <Link to="/consumer-rights">Defensa del Consumidor</Link>
              <Link to="/security">Seguridad</Link>
              <Link to="/accessibility">Accesibilidad</Link>
            </div>
            
            <div className="certifications">
              <div className="cert-item">
                <span>🛡️</span>
                <span>SSL Certificado</span>
              </div>
              <div className="cert-item">
                <span>✅</span>
                <span>GDPR Compliant</span>
              </div>
              <div className="cert-item">
                <span>🔒</span>
                <span>Datos Protegidos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 EventosApp. Todos los derechos reservados.</p>
            
            <div className="consumer-protection">
              <div className="protection-item">
                <span>⚖️</span>
                <div>
                  <strong>Defensa del Consumidor</strong>
                  <p>COPREC - Resolución de conflictos online</p>
                  <a href="https://www.coprec.gob.ar" target="_blank" rel="noopener noreferrer">
                    www.coprec.gob.ar
                  </a>
                </div>
              </div>
              
              <div className="protection-item">
                <span>🏛️</span>
                <div>
                  <strong>Ente Regulador</strong>
                  <p>Registrado en AFIP - CUIT: 30-12345678-9</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;