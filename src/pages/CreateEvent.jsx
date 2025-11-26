import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { eventService } from '../services/eventService';
import { categoryService } from '../services/categoryService';
import { useAuth } from '../context/AuthContext';
import './CreateEvent.css';

const schema = yup.object({
  titulo: yup.string().required('El título es requerido'),
  descripcion: yup.string().required('La descripción es requerida'),
  fecha: yup.string().required('La fecha es requerida'),
  hora: yup.string().required('La hora es requerida'),
  ubicacion: yup.string().required('La ubicación es requerida'),
  precio: yup.number().min(0, 'El precio no puede ser negativo').required('El precio es requerido'),
  capacidad: yup.number().min(1, 'La capacidad debe ser mayor a 0').required('La capacidad es requerida'),
  categoria: yup.string().required('La categoría es requerida')
});

const CreateEvent = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      precio: 0
    }
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    loadCategories();
  }, [isAuthenticated, navigate]);

  const loadCategories = async () => {
    try {
      const response = await categoryService.getCategories();
      setCategories(response.data);
    } catch (error) {
      toast.error('Error al cargar categorías');
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await eventService.createEvent(data);
      toast.success('Evento creado exitosamente');
      navigate('/my-events');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error al crear evento');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-event-page">
      <div className="create-event-container">
        <h1>Crear Nuevo Evento</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="event-form">
          <div className="form-row">
            <div className="form-group">
              <label>Título del Evento</label>
              <input
                type="text"
                {...register('titulo')}
                className={errors.titulo ? 'error' : ''}
                placeholder="Ej: Conferencia Internacional de IA y Blockchain"
              />
              {errors.titulo && <span className="error-message">{errors.titulo.message}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Descripción</label>
            <textarea
              {...register('descripcion')}
              className={errors.descripcion ? 'error' : ''}
              rows="4"
              placeholder="Describe tu evento: objetivos, agenda, beneficios para los asistentes, qué incluye la entrada..."
            />
            {errors.descripcion && <span className="error-message">{errors.descripcion.message}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Fecha</label>
              <input
                type="date"
                {...register('fecha')}
                className={errors.fecha ? 'error' : ''}
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.fecha && <span className="error-message">{errors.fecha.message}</span>}
            </div>

            <div className="form-group">
              <label>Hora</label>
              <input
                type="time"
                {...register('hora')}
                className={errors.hora ? 'error' : ''}
              />
              {errors.hora && <span className="error-message">{errors.hora.message}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Ubicación</label>
            <input
              type="text"
              {...register('ubicacion')}
              className={errors.ubicacion ? 'error' : ''}
              placeholder="Ej: Centro de Convenciones Metropolitan, Auditorio Principal"
            />
            {errors.ubicacion && <span className="error-message">{errors.ubicacion.message}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Precio ($)</label>
              <input
                type="number"
                {...register('precio')}
                className={errors.precio ? 'error' : ''}
                min="0"
                step="0.01"
                placeholder="Ej: 150 (0 para evento gratuito)"
              />
              {errors.precio && <span className="error-message">{errors.precio.message}</span>}
            </div>

            <div className="form-group">
              <label>Capacidad</label>
              <input
                type="number"
                {...register('capacidad')}
                className={errors.capacidad ? 'error' : ''}
                min="1"
                placeholder="Ej: 300 personas"
              />
              {errors.capacidad && <span className="error-message">{errors.capacidad.message}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Categoría</label>
            <select
              {...register('categoria')}
              className={errors.categoria ? 'error' : ''}
            >
              <option value="">Selecciona una categoría</option>
              {categories.map(category => (
                <option key={category._id} value={category._id}>
                  {category.nombre}
                </option>
              ))}
            </select>
            {errors.categoria && <span className="error-message">{errors.categoria.message}</span>}
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="btn-secondary"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
            >
              {loading ? 'Creando...' : 'Crear Evento'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;