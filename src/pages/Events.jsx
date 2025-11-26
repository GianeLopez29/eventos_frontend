import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { eventService } from '../services/eventService';
import { categoryService } from '../services/categoryService';
import { sampleEvents, sampleCategories } from '../data/sampleEvents';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    categoria: '',
    estado: ''
  });

  useEffect(() => {
    loadData();
  }, [filters]);

  const loadData = async () => {
    try {
      const [eventsResponse, categoriesResponse] = await Promise.all([
        eventService.getEvents(filters),
        categoryService.getCategories()
      ]);
      
      // Si no hay eventos del servidor, usar datos de ejemplo
      const serverEvents = eventsResponse.data || [];
      const serverCategories = categoriesResponse.data || [];
      
      setEvents(serverEvents.length > 0 ? serverEvents : sampleEvents);
      setCategories(serverCategories.length > 0 ? serverCategories : sampleCategories);
    } catch (error) {
      // En caso de error, usar datos de ejemplo
      setEvents(sampleEvents);
      setCategories(sampleCategories);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return <div className="loading">Cargando eventos...</div>;
  }

  return (
    <div className="events-page">
      <Hero />
      <div id="eventos" className="page-header">
        <div className="header-content">
          <h1>Eventos Exclusivos</h1>
          <p>Experiencias únicas que transforman momentos en recuerdos inolvidables</p>
        </div>
        <div className="header-decoration">
          <div className="floating-elements">
            <div className="element element-1"></div>
            <div className="element element-2"></div>
            <div className="element element-3"></div>
          </div>
        </div>
      </div>

      <div className="filters">
        <select
          name="categoria"
          value={filters.categoria}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="">Todas las categorías</option>
          {categories.map(category => (
            <option key={category._id} value={category._id}>
              {category.nombre}
            </option>
          ))}
        </select>

        <select
          name="estado"
          value={filters.estado}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="">Todos los estados</option>
          <option value="activo">Activo</option>
          <option value="finalizado">Finalizado</option>
          <option value="cancelado">Cancelado</option>
        </select>
      </div>

      {events.length === 0 ? (
        <div className="no-events">
          <h3>No se encontraron eventos</h3>
          <p>Intenta cambiar los filtros o vuelve más tarde</p>
        </div>
      ) : (
        <div className="events-grid">
          {events.map(event => (
            <div key={event._id} className="event-card">
              <div className="event-image">
                <img 
                  src={event.imagen || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop'} 
                  alt={event.titulo}
                  loading="lazy"
                />
                <div className="image-overlay">
                  <span 
                    className="category-badge"
                    style={{ backgroundColor: event.categoria.color }}
                  >
                    {event.categoria.nombre}
                  </span>
                </div>
              </div>
              <div className="event-content">
                <div className="event-header">
                  <h3>{event.titulo}</h3>
                </div>
              
              <div className="event-info">
                <p className="event-date">
                  📅 {formatDate(event.fecha)} - {event.hora}
                </p>
                <p className="event-location">📍 {event.ubicacion}</p>
                <p className="event-price">
                  💰 {event.precio === 0 ? 'Gratis' : `$${event.precio}`}
                </p>
                <p className="event-capacity">👥 {event.capacidad} personas</p>
              </div>
              
              <p className="event-description">{event.descripcion}</p>
              
                <div className="event-footer">
                  <span className="organizer">
                    Por: {event.organizador.nombre}
                  </span>
                  <Link to={`/events/${event._id}`} className="btn-view">
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Events;