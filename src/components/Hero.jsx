import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import './Hero.css';

const Hero = () => {
  const { isAuthenticated } = useAuth();
  const [showScrollButton, setShowScrollButton] = useState(true);

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=1080&fit=crop" 
          alt="Eventos exclusivos"
          className="hero-image"
        />
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1>Experiencias que Transforman</h1>
          <p>
            Descubre eventos únicos y exclusivos que conectan personas, 
            inspiran ideas y crean momentos inolvidables
          </p>
          
          <div className="hero-actions">
            {isAuthenticated ? (
              <Link to="/create-event" className="btn-hero primary">
                Crear Evento
              </Link>
            ) : (
              <>
                <Link to="/register" className="btn-hero primary">
                  Únete Ahora
                </Link>
                <Link to="/login" className="btn-hero secondary">
                  Iniciar Sesión
                </Link>
              </>
            )}
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Eventos Realizados</span>
          </div>
          <div className="stat">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Participantes Felices</span>
          </div>
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Organizadores Activos</span>
          </div>
        </div>
      </div>
      
      <div className={`hero-scroll ${showScrollButton ? 'visible' : ''}`}>
        <a 
          href="#eventos" 
          className="scroll-indicator"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#eventos')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
        >
          <span>Ver Eventos</span>
          <div className="scroll-arrow">↓</div>
        </a>
      </div>
    </section>
  );
};

export default Hero;