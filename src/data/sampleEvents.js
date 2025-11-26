export const sampleEvents = [
  {
    _id: '1',
    titulo: 'Conferencia Internacional de Tecnología 2024',
    descripcion: 'Únete a los líderes mundiales en tecnología para explorar las últimas innovaciones en IA, blockchain y desarrollo sostenible. Una experiencia transformadora que definirá el futuro digital.',
    fecha: '2024-03-15',
    hora: '09:00',
    ubicacion: 'Centro de Convenciones Internacional, Sala Magna',
    precio: 299,
    capacidad: 500,
    imagen: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
    estado: 'activo',
    categoria: {
      _id: 'tech',
      nombre: 'Tecnología',
      color: '#667eea'
    },
    organizador: {
      _id: 'org1',
      nombre: 'TechEvents Global',
      email: 'info@techevents.com'
    }
  },
  {
    _id: '2',
    titulo: 'Gala Benéfica de Arte Contemporáneo',
    descripcion: 'Una noche exclusiva dedicada al arte contemporáneo con obras de artistas emergentes. Incluye cena gourmet, subasta silenciosa y presentaciones en vivo.',
    fecha: '2024-03-22',
    hora: '19:30',
    ubicacion: 'Museo de Arte Moderno, Salón de Cristal',
    precio: 150,
    capacidad: 200,
    imagen: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop',
    estado: 'activo',
    categoria: {
      _id: 'art',
      nombre: 'Arte y Cultura',
      color: '#f093fb'
    },
    organizador: {
      _id: 'org2',
      nombre: 'Fundación Arte Vivo',
      email: 'eventos@artevivo.org'
    }
  },
  {
    _id: '3',
    titulo: 'Summit de Emprendimiento e Innovación',
    descripcion: 'Conecta con inversores, mentores y emprendedores exitosos. Workshops prácticos, pitch sessions y networking de alto nivel para impulsar tu startup.',
    fecha: '2024-04-05',
    hora: '08:30',
    ubicacion: 'Hub de Innovación Empresarial, Auditorio Principal',
    precio: 0,
    capacidad: 300,
    imagen: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop',
    estado: 'activo',
    categoria: {
      _id: 'business',
      nombre: 'Negocios',
      color: '#4facfe'
    },
    organizador: {
      _id: 'org3',
      nombre: 'StartupHub',
      email: 'eventos@startuphub.com'
    }
  },
  {
    _id: '4',
    titulo: 'Festival Gastronómico Internacional',
    descripcion: 'Degusta los sabores del mundo con chefs reconocidos internacionalmente. Masterclasses, catas de vino y experiencias culinarias únicas.',
    fecha: '2024-04-12',
    hora: '12:00',
    ubicacion: 'Plaza Central de la Ciudad, Carpas Gourmet',
    precio: 85,
    capacidad: 800,
    imagen: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop',
    estado: 'activo',
    categoria: {
      _id: 'food',
      nombre: 'Gastronomía',
      color: '#fa709a'
    },
    organizador: {
      _id: 'org4',
      nombre: 'Culinary World Events',
      email: 'info@culinaryworld.com'
    }
  },
  {
    _id: '5',
    titulo: 'Concierto Sinfónico de Primavera',
    descripcion: 'La Orquesta Filarmónica presenta un repertorio excepcional de música clásica y contemporánea en un ambiente íntimo y elegante.',
    fecha: '2024-04-20',
    hora: '20:00',
    ubicacion: 'Teatro Nacional, Sala Principal',
    precio: 120,
    capacidad: 400,
    imagen: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop',
    estado: 'activo',
    categoria: {
      _id: 'music',
      nombre: 'Música',
      color: '#a8edea'
    },
    organizador: {
      _id: 'org5',
      nombre: 'Fundación Musical Nacional',
      email: 'eventos@musicanacional.org'
    }
  }
];

export const sampleCategories = [
  { _id: 'tech', nombre: 'Tecnología', color: '#667eea' },
  { _id: 'art', nombre: 'Arte y Cultura', color: '#f093fb' },
  { _id: 'business', nombre: 'Negocios', color: '#4facfe' },
  { _id: 'food', nombre: 'Gastronomía', color: '#fa709a' },
  { _id: 'music', nombre: 'Música', color: '#a8edea' }
];