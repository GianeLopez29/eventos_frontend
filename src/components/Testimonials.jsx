import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Directora de Marketing",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      comment: "EventosApp transformó completamente nuestra forma de organizar eventos corporativos. La plataforma es intuitiva y el soporte técnico excepcional.",
      rating: 5
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "Organizador de Eventos",
      company: "Creative Events",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      comment: "Increíble plataforma. He organizado más de 50 eventos y siempre recibo comentarios positivos de los asistentes sobre la facilidad de registro.",
      rating: 5
    },
    {
      id: 3,
      name: "Ana Martínez",
      role: "Emprendedora",
      company: "StartupHub",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      comment: "La mejor inversión para mi negocio. Los eventos que organizo ahora tienen 3x más asistentes gracias a la visibilidad que ofrece EventosApp.",
      rating: 5
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>Lo que dicen nuestros usuarios</h2>
          <p>Miles de organizadores confían en nosotros para crear experiencias inolvidables</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                <p>"{testimonial.comment}"</p>
              </div>
              
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                  <span className="company">{testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;