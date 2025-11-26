import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import MobileMenu from './MobileMenu';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            EventosApp
          </Link>
          
          <div className="nav-menu desktop-menu">
            <Link to="/" className="nav-link">Eventos</Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/my-events" className="nav-link">Mis Eventos</Link>
                <Link to="/create-event" className="nav-link">Crear Evento</Link>
                <div className="nav-user">
                  <span>Hola, {user?.nombre}</span>
                  <button onClick={handleLogout} className="btn-logout">
                    Cerrar Sesión
                  </button>
                </div>
              </>
            ) : (
              <div className="nav-auth">
                <Link to="/login" className="nav-link">Iniciar Sesión</Link>
                <Link to="/register" className="btn-register">Registrarse</Link>
              </div>
            )}
          </div>
          
          <MobileMenu />
        </div>
      </nav>
      
      <main className="main-content">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;