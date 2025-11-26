import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const VerifyEmail = () => {
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const { token } = useParams();
  const { verifyEmail } = useAuth();

  useEffect(() => {
    if (token) {
      handleVerification();
    }
  }, [token]);

  const handleVerification = async () => {
    try {
      await verifyEmail(token);
      setVerified(true);
      toast.success('¡Email verificado correctamente! Ya puedes iniciar sesión.');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Token de verificación inválido');
      setVerified(false);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h2>Verificando email...</h2>
          <p style={{ textAlign: 'center', color: '#666' }}>
            Por favor espera mientras verificamos tu cuenta.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        {verified ? (
          <>
            <h2>✅ Email Verificado</h2>
            <p style={{ textAlign: 'center', color: '#28a745', marginBottom: '2rem' }}>
              Tu cuenta ha sido verificada exitosamente.
            </p>
            <Link to="/login" className="btn-primary" style={{ textAlign: 'center', display: 'block' }}>
              Iniciar Sesión
            </Link>
          </>
        ) : (
          <>
            <h2>❌ Verificación Fallida</h2>
            <p style={{ textAlign: 'center', color: '#dc3545', marginBottom: '2rem' }}>
              El enlace de verificación es inválido o ha expirado.
            </p>
            <Link to="/register" className="btn-primary" style={{ textAlign: 'center', display: 'block' }}>
              Registrarse Nuevamente
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;