import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './MobileMenu.css';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="mobile-menu">
      <button 
        className={`menu-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`menu-overlay ${isOpen ? 'active' : ''}`}>
        <nav className="menu-nav">
          <Link to="/" onClick={closeMenu} className="menu-link">
            🎉 Eventos
          </Link>
          
          {isAuthenticated ? (
            <>
              <Link to="/my-events" onClick={closeMenu} className="menu-link">
                📋 Mis Eventos
              </Link>
              <Link to="/create-event" onClick={closeMenu} className="menu-link">
                ➕ Crear Evento
              </Link>
              <div className="menu-user">
                <span className="user-info">👋 Hola, {user?.nombre}</span>
                <button onClick={handleLogout} className="logout-btn">
                  🚪 Cerrar Sesión
                </button>
              </div>
            </>
          ) : (
            <div className="menu-auth">
              <Link to="/login" onClick={closeMenu} className="menu-link">
                🔑 Iniciar Sesión
              </Link>
              <Link to="/register" onClick={closeMenu} className="menu-link register">
                📝 Registrarse
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;