import { Info as InfoIcon } from "lucide-react";

function Info() {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{
        background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        borderRadius: '20px',
        padding: '2rem',
        color: 'white',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <InfoIcon size={48} style={{ marginBottom: '1rem' }} />
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>Información</h1>
        <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>Acerca de esta aplicación</p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#667eea', marginTop: 0 }}>🎯 Características</h2>
        <ul style={{ lineHeight: '2', color: '#555' }}>
          <li>✅ <strong>5 Pestañas</strong>: Inicio, Favoritos, Original, Películas, Info</li>
          <li>✅ <strong>Menú de Navegación</strong>: Fácil acceso a todas las secciones</li>
          <li>✅ <strong>Lista de Personajes</strong>: Más de 50 personajes de Disney</li>
          <li>✅ <strong>Buscador</strong>: Encuentra personajes por nombre</li>
          <li>✅ <strong>Filtros</strong>: Por categoría (Todos, Películas, Series)</li>
          <li>✅ <strong>Detalle Completo</strong>: Información detallada de cada personaje</li>
          <li>✅ <strong>Sistema de Favoritos</strong>: Guarda tus personajes favoritos</li>
          <li>✅ <strong>Contenido Original</strong>: Clásicos, Pixar y Marvel</li>
        </ul>

        <h2 style={{ color: '#667eea' }}>🛠 Tecnologías</h2>
        <p style={{ color: '#555', lineHeight: '1.8' }}>
          Esta aplicación fue desarrollada con <strong>React</strong> y utiliza la 
          <strong> Disney API</strong> pública para obtener información de los personajes.
        </p>
        <p style={{ color: '#555', lineHeight: '1.8' }}>
          Incluye diseño moderno con gradientes, sistema de estado compartido con Context API,
          y navegación fluida entre páginas.
        </p>

        <h2 style={{ color: '#667eea' }}>👨‍💻 Desarrollo</h2>
        <p style={{ color: '#555', lineHeight: '1.8' }}>
          Proyecto desarrollado como práctica de React con integración de APIs REST.
        </p>

        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          marginTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '500' }}>
            🎓 Proyecto Final - API Individual
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;