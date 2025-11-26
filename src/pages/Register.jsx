import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const schema = yup.object({
  nombre: yup.string().required('Nombre requerido'),
  email: yup.string().email('Email inválido').required('Email requerido'),
  password: yup.string().min(6, 'Mínimo 6 caracteres').required('Contraseña requerida'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
    .required('Confirmar contraseña requerida')
});

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { confirmPassword, ...userData } = data;
      console.log('Enviando datos:', userData);
      const response = await registerUser(userData);
      console.log('Respuesta del servidor:', response);
      toast.success('¡Registro exitoso! Ya puedes iniciar sesión.');
      navigate('/login');
    } catch (error) {
      console.error('Error completo:', error);
      console.error('Error response:', error.response);
      
      const errorMessage = error.response?.data?.message || error.message || 'Error al registrarse';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Registrarse</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              {...register('nombre')}
              className={errors.nombre ? 'error' : ''}
              placeholder="Tu nombre completo"
            />
            {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              {...register('email')}
              className={errors.email ? 'error' : ''}
              placeholder="tu.email@ejemplo.com"
            />
            {errors.email && <span className="error-message">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              {...register('password')}
              className={errors.password ? 'error' : ''}
              placeholder="Mínimo 6 caracteres"
            />
            {errors.password && <span className="error-message">{errors.password.message}</span>}
          </div>

          <div className="form-group">
            <label>Confirmar Contraseña</label>
            <input
              type="password"
              {...register('confirmPassword')}
              className={errors.confirmPassword ? 'error' : ''}
              placeholder="Repite tu contraseña"
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword.message}</span>}
          </div>

          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? 'Registrando...' : 'Registrarse'}
          </button>
        </form>

        <p className="auth-link">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;