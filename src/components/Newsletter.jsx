import { useState } from 'react';
import { toast } from 'react-toastify';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Por favor ingresa tu email');
      return;
    }
    
    setLoading(true);
    // Simular suscripción
    setTimeout(() => {
      toast.success('¡Suscripción exitosa! Recibirás notificaciones de eventos exclusivos');
      setEmail('');
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>No te pierdas ningún evento</h2>
            <p>Suscríbete y recibe notificaciones de eventos exclusivos, ofertas especiales y contenido premium directamente en tu email</p>
            
            <div className="benefits">
              <div className="benefit">
                <span className="benefit-icon">🎯</span>
                <span>Eventos personalizados según tus intereses</span>
              </div>
              <div className="benefit">
                <span className="benefit-icon">⚡</span>
                <span>Acceso anticipado a eventos populares</span>
              </div>
              <div className="benefit">
                <span className="benefit-icon">🎁</span>
                <span>Descuentos exclusivos para suscriptores</span>
              </div>
            </div>
          </div>
          
          <div className="newsletter-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu.email@ejemplo.com"
                  className="newsletter-input"
                />
                <button 
                  type="submit" 
                  disabled={loading}
                  className="newsletter-btn"
                >
                  {loading ? 'Suscribiendo...' : 'Suscribirse'}
                </button>
              </div>
              <p className="privacy-text">
                Al suscribirte aceptas recibir emails promocionales. Puedes cancelar en cualquier momento.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;