# Sistema de Gestión de Eventos - Frontend

Aplicación web React premium para gestión de eventos con diseño sofisticado, autenticación avanzada e interfaz completamente responsiva.

## Características Premium

- ✨ **Diseño Sofisticado**: Interfaz moderna con glassmorphism y gradientes
- 📱 **Completamente Responsiva**: Optimizada para todos los dispositivos (320px - 4K+)
- 🔐 **Autenticación Avanzada**: Sistema completo con verificación por email
- 🎨 **Componentes Elegantes**: Tarjetas con efectos hover y animaciones suaves
- 🖼️ **Imágenes de Alta Calidad**: Integración con Unsplash para eventos atractivos
- 🎯 **UX/UI Premium**: Transiciones fluidas y micro-interacciones
- 📊 **Datos de Ejemplo**: Eventos sofisticados pre-cargados
- 🌈 **Paleta de Colores Moderna**: Gradientes y efectos visuales avanzados

## Tecnologías

- React 18 + Vite
- React Router DOM
- React Hook Form + Yup
- Axios
- React Toastify
- CSS3 con Flexbox/Grid

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno (.env):
```env
VITE_API_URL=http://localhost:5000/api
```

4. Ejecutar en desarrollo:
```bash
npm run dev
```

5. Construir para producción:
```bash
npm run build
```

## Estructura del Proyecto

```
src/
├── components/
│   └── Layout.jsx         # Layout principal con navegación
├── pages/
│   ├── Login.jsx          # Página de inicio de sesión
│   ├── Register.jsx       # Página de registro
│   └── Events.jsx         # Listado de eventos
├── services/
│   ├── api.js             # Configuración Axios
│   ├── authService.js     # Servicios de autenticación
│   ├── eventService.js    # Servicios de eventos
│   └── categoryService.js # Servicios de categorías
├── context/
│   └── AuthContext.jsx    # Context de autenticación
├── hooks/                 # Custom hooks
├── utils/                 # Utilidades
└── styles/               # Estilos globales
```

## Páginas Implementadas

### Públicas
- `/` - Listado de eventos con filtros
- `/login` - Inicio de sesión
- `/register` - Registro de usuario
- `/verify-email/:token` - Verificación de email

### Privadas (requieren autenticación)
- `/my-events` - Mis eventos creados
- `/create-event` - Crear nuevo evento
- `/edit-event/:id` - Editar evento
- `/categories` - Gestión de categorías (admin)

## Características de Responsividad Completa

### 📱 Mobile (320px - 480px)
- Grid de 1 columna
- Menú hamburguesa con overlay
- Botones táctiles grandes (44px mínimo)
- Formularios apilados verticalmente
- Tipografía optimizada para lectura
- Navegación por gestos

### 📱 Small Mobile (481px - 600px)
- Grid de 1-2 columnas según contenido
- Menú hamburguesa mejorado
- Espaciado optimizado
- Botones de tamaño medio

### 📱 Tablet Portrait (601px - 768px)
- Grid de 2 columnas
- Menú hamburguesa o navegación compacta
- Formularios en 2 columnas
- Tarjetas más grandes

### 💻 Tablet Landscape (769px - 1024px)
- Grid de 2-3 columnas
- Navegación horizontal completa
- Formularios optimizados
- Hover effects habilitados

### 💻 Laptop/Small Desktop (1025px - 1366px)
- Grid de 3-4 columnas
- Navegación completa con todos los elementos
- Formularios en filas
- Espaciado estándar

### 🖥️ Desktop (1367px - 1920px)
- Grid de 4+ columnas
- Navegación extendida
- Contenido centrado con márgenes
- Efectos visuales completos

### 🖥️ Large Desktop/4K (1921px+)
- Grid adaptativo hasta 6 columnas
- Tipografía escalada
- Espaciado generoso
- Contenido optimizado para pantallas grandes

## Funcionalidades

### Autenticación
- Registro con validación
- Login con JWT
- Verificación por email
- Logout automático en token expirado

### Eventos
- Listado con filtros por categoría y estado
- Vista detallada de evento
- Crear/editar/eliminar (solo propietario)
- Búsqueda y paginación

### Categorías
- Listado público
- CRUD completo (solo admin)
- Colores personalizados

## Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de build
- `npm run lint` - Linter ESLint

## Despliegue

### Netlify
1. Conectar repositorio
2. Configurar variables de entorno
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
1. Importar proyecto
2. Configurar variables de entorno
3. Deploy automático

## Variables de Entorno

```env
VITE_API_URL=https://tu-api-backend.com/api
```