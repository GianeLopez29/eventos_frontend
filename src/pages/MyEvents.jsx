import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { eventService } from '../services/eventService';
import { useAuth } from '../context/AuthContext';
import './MyEvents.css';

const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      loadMyEvents();
    }
  }, [isAuthenticated]);

  const loadMyEvents = async () => {
    try {
      const response = await eventService.getUserEvents();
      setEvents(response.data);
    } catch (error) {
      toast.error('Error al cargar tus eventos');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (eventId) => {
    if (window.confirm('¿Estás seguro de eliminar este evento?')) {
      try {
        await eventService.deleteEvent(eventId);
        toast.success('Evento eliminado correctamente');
        loadMyEvents();
      } catch (error) {
        toast.error('Error al eliminar evento');
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return <div className="loading">Cargando tus eventos...</div>;
  }

  return (
    <div className="my-events-page">
      <div className="page-header">
        <h1>Mis Eventos</h1>
        <Link to="/create-event" className="btn-create">
          + Crear Evento
        </Link>
      </div>

      {events.length === 0 ? (
        <div className="no-events">
          <h3>No tienes eventos creados</h3>
          <p>¡Crea tu primer evento y comienza a organizarlo!</p>
          <Link to="/create-event" className="btn-primary">
            Crear Mi Primer Evento
          </Link>
        </div>
      ) : (
        <div className="events-grid">
          {events.map(event => (
            <div key={event._id} className="event-card">
              <div className="event-header">
                <h3>{event.titulo}</h3>
                <span 
                  className={`status-badge ${event.estado}`}
                >
                  {event.estado}
                </span>
              </div>
              
              <div className="event-info">
                <p className="event-date">
                  📅 {formatDate(event.fecha)} - {event.hora}
                </p>
                <p className="event-location">📍 {event.ubicacion}</p>
                <p className="event-category">
                  🏷️ {event.categoria.nombre}
                </p>
                <p className="event-price">
                  💰 {event.precio === 0 ? 'Gratis' : `$${event.precio}`}
                </p>
              </div>
              
              <p className="event-description">{event.descripcion}</p>
              
              <div className="event-actions">
                <Link 
                  to={`/events/${event._id}`} 
                  className="btn-view"
                >
                  Ver
                </Link>
                <Link 
                  to={`/edit-event/${event._id}`} 
                  className="btn-edit"
                >
                  Editar
                </Link>
                <button 
                  onClick={() => handleDelete(event._id)}
                  className="btn-delete"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEvents;