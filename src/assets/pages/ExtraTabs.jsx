// 
// PÁGINA DE PELÍCULAS - CATÁLOGO INTERACTIVO
// 
// Esta página muestra un catálogo de películas Disney
// con filtros, estadísticas y diseño moderno

import { useState } from "react";
import { Star, Film, Calendar, Trophy, TrendingUp, Award, Popcorn } from "lucide-react";

function ExtraTabs() {
  // 
  // ESTADO - Controla filtros y hover
  // 
  const [filtroGenero, setFiltroGenero] = useState('todos');
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  // ============================================
  // DATOS - Catálogo de películas Disney
  // ============================================
  const peliculas = [
    { 
      titulo: 'El Rey León', 
      año: 1994, 
      genero: 'Aventura',
      rating: 5,
      descripcion: 'La historia de Simba y su destino como rey de Pride Rock',
      director: 'Roger Allers',
      duracion: '88 min',
      color: '#ffa726',
      emoji: '🦁',
      curiosidad: 'Ganó 2 premios Oscar y recaudó más de $968 millones'
    },
    { 
      titulo: 'Frozen', 
      año: 2013, 
      genero: 'Musical',
      rating: 5,
      descripcion: 'Elsa y Anna en una aventura congelada de amor verdadero',
      director: 'Chris Buck',
      duracion: '102 min',
      color: '#42a5f5',
      emoji: '❄️',
      curiosidad: '"Let It Go" ganó el Oscar a Mejor Canción Original'
    },
    { 
      titulo: 'Moana', 
      año: 2016, 
      genero: 'Aventura',
      rating: 5,
      descripcion: 'Una valiente navegante en busca de su destino en el océano',
      director: 'Ron Clements',
      duracion: '107 min',
      color: '#26a69a',
      emoji: '🌊',
      curiosidad: 'La primera princesa polinesia de Disney'
    },
    { 
      titulo: 'Toy Story', 
      año: 1995, 
      genero: 'Animación',
      rating: 5,
      descripcion: 'Los juguetes de Andy cobran vida cuando él no está',
      director: 'John Lasseter',
      duracion: '81 min',
      color: '#ef5350',
      emoji: '🤠',
      curiosidad: 'Primera película completamente animada por computadora'
    },
    { 
      titulo: 'Coco', 
      año: 2017, 
      genero: 'Familia',
      rating: 5,
      descripcion: 'Miguel descubre el verdadero significado de la familia',
      director: 'Lee Unkrich',
      duracion: '105 min',
      color: '#ff7043',
      emoji: '🎸',
      curiosidad: 'Ganó 2 premios Oscar incluyendo Mejor Película Animada'
    },
    { 
      titulo: 'Encanto', 
      año: 2021, 
      genero: 'Musical',
      rating: 5,
      descripcion: 'La magia de la familia Madrigal en Colombia',
      director: 'Jared Bush',
      duracion: '102 min',
      color: '#ab47bc',
      emoji: '🦋',
      curiosidad: '"We Don\'t Talk About Bruno" fue un éxito viral mundial'
    },
    { 
      titulo: 'Buscando a Nemo', 
      año: 2003, 
      genero: 'Aventura',
      rating: 5,
      descripcion: 'Un padre busca a su hijo a través del océano Pacífico',
      director: 'Andrew Stanton',
      duracion: '100 min',
      color: '#29b6f6',
      emoji: '🐠',
      curiosidad: 'Ganó el Oscar a Mejor Película Animada en 2004'
    },
    { 
      titulo: 'Ratatouille', 
      año: 2007, 
      genero: 'Familia',
      rating: 5,
      descripcion: 'Una rata con sueños de convertirse en chef parisino',
      director: 'Brad Bird',
      duracion: '111 min',
      color: '#78909c',
      emoji: '🐀',
      curiosidad: 'La primera película de Pixar ambientada en Europa'
    },
    { 
      titulo: 'Up', 
      año: 2009, 
      genero: 'Aventura',
      rating: 5,
      descripcion: 'Un anciano y un niño vuelan hacia Sudamérica en una casa',
      director: 'Pete Docter',
      duracion: '96 min',
      color: '#9c27b0',
      emoji: '🎈',
      curiosidad: 'Los primeros 10 minutos son considerados una obra maestra'
    },
    { 
      titulo: 'Los Increíbles', 
      año: 2004, 
      genero: 'Animación',
      rating: 5,
      descripcion: 'Una familia de superhéroes debe salvar el mundo',
      director: 'Brad Bird',
      duracion: '115 min',
      color: '#f44336',
      emoji: '🦸',
      curiosidad: 'Tardó 14 años en tener una secuela'
    },
    { 
      titulo: 'Wall-E', 
      año: 2008, 
      genero: 'Animación',
      rating: 5,
      descripcion: 'Un robot solitario limpia la Tierra abandonada',
      director: 'Andrew Stanton',
      duracion: '98 min',
      color: '#8d6e63',
      emoji: '🤖',
      curiosidad: 'Tiene solo 25 minutos de diálogo en toda la película'
    },
    { 
      titulo: 'Intensa-Mente', 
      año: 2015, 
      genero: 'Familia',
      rating: 5,
      descripcion: 'Las emociones de Riley controlan su mente',
      director: 'Pete Docter',
      duracion: '95 min',
      color: '#ffd54f',
      emoji: '🧠',
      curiosidad: 'Fue consultada por psicólogos durante su desarrollo'
    }
  ];

  // 
  // LÓGICA - Filtrar películas por género
  // 
  const peliculasFiltradas = filtroGenero === 'todos' 
    ? peliculas 
    : peliculas.filter(p => p.genero === filtroGenero);

  // Obtener géneros únicos para los filtros
  const generos = ['todos', ...new Set(peliculas.map(p => p.genero))];

  // 
  // ESTADÍSTICAS - Calcular datos del catálogo
  // 
  const estadisticas = {
    total: peliculas.length,
    promedioAño: Math.round(peliculas.reduce((sum, p) => sum + p.año, 0) / peliculas.length),
    generoMasComun: peliculas.reduce((acc, p) => {
      acc[p.genero] = (acc[p.genero] || 0) + 1;
      return acc;
    }, {})
  };
  const generoTop = Object.keys(estadisticas.generoMasComun)
    .reduce((a, b) => estadisticas.generoMasComun[a] > estadisticas.generoMasComun[b] ? a : b);

  // Película más antigua y más reciente
  const peliculaMasAntigua = peliculas.reduce((prev, current) => 
    prev.año < current.año ? prev : current
  );
  const peliculaMasReciente = peliculas.reduce((prev, current) => 
    prev.año > current.año ? prev : current
  );

  // 
  // MODAL DE DETALLE DE PELÍCULA
  // 
  if (peliculaSeleccionada) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        zIndex: 1000,
        animation: 'fadeIn 0.3s'
      }}
      onClick={() => setPeliculaSeleccionada(null)}
      >
        <div style={{
          background: 'white',
          borderRadius: '30px',
          maxWidth: '700px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
        >
          {/* Header con color temático */}
          <div style={{
            background: `linear-gradient(135deg, ${peliculaSeleccionada.color} 0%, ${peliculaSeleccionada.color}dd 100%)`,
            padding: '3rem 2rem',
            borderRadius: '30px 30px 0 0',
            textAlign: 'center',
            color: 'white',
            position: 'relative'
          }}>
            <button
              onClick={() => setPeliculaSeleccionada(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255,255,255,0.3)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              ×
            </button>
            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>
              {peliculaSeleccionada.emoji}
            </div>
            <h2 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 'bold' }}>
              {peliculaSeleccionada.titulo}
            </h2>
            <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9, fontSize: '1.1rem' }}>
              {peliculaSeleccionada.año} • {peliculaSeleccionada.genero}
            </p>
          </div>

          {/* Contenido */}
          <div style={{ padding: '2rem' }}>
            {/* Rating */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '0.3rem', justifyContent: 'center', marginBottom: '0.5rem' }}>
                {[...Array(peliculaSeleccionada.rating)].map((_, i) => (
                  <Star key={i} size={28} fill="#ffd700" color="#ffd700" />
                ))}
              </div>
              <p style={{ margin: 0, color: '#666', fontSize: '0.95rem' }}>
                {peliculaSeleccionada.rating}/5 estrellas
              </p>
            </div>

            {/* Descripción */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: peliculaSeleccionada.color, marginBottom: '0.75rem' }}>
                📖 Sinopsis
              </h3>
              <p style={{ color: '#555', lineHeight: '1.8', fontSize: '1.05rem' }}>
                {peliculaSeleccionada.descripcion}
              </p>
            </div>

            {/* Información técnica */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                background: '#f8f9fa',
                padding: '1rem',
                borderRadius: '12px',
                borderLeft: `4px solid ${peliculaSeleccionada.color}`
              }}>
                <p style={{ margin: 0, color: '#999', fontSize: '0.85rem' }}>Director</p>
                <p style={{ margin: '0.25rem 0 0 0', color: '#333', fontWeight: '600' }}>
                  {peliculaSeleccionada.director}
                </p>
              </div>
              <div style={{
                background: '#f8f9fa',
                padding: '1rem',
                borderRadius: '12px',
                borderLeft: `4px solid ${peliculaSeleccionada.color}`
              }}>
                <p style={{ margin: 0, color: '#999', fontSize: '0.85rem' }}>Duración</p>
                <p style={{ margin: '0.25rem 0 0 0', color: '#333', fontWeight: '600' }}>
                  {peliculaSeleccionada.duracion}
                </p>
              </div>
            </div>

            {/* Curiosidad */}
            <div style={{
              background: `${peliculaSeleccionada.color}15`,
              padding: '1.5rem',
              borderRadius: '15px',
              borderLeft: `5px solid ${peliculaSeleccionada.color}`
            }}>
              <h4 style={{ 
                margin: '0 0 0.75rem 0', 
                color: peliculaSeleccionada.color,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Award size={20} />
                ¿Sabías que...?
              </h4>
              <p style={{ margin: 0, color: '#555', lineHeight: '1.6' }}>
                {peliculaSeleccionada.curiosidad}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 
  // RENDERIZADO DEL COMPONENTE PRINCIPAL
  //
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/*
          HEADER - Título y descripción
          */}
      <div style={{
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        borderRadius: '20px',
        padding: '3rem 2rem',
        color: 'white',
        marginBottom: '2rem',
        textAlign: 'center',
        boxShadow: '0 10px 40px rgba(79, 172, 254, 0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decoración */}
        <div style={{
          position: 'absolute',
          top: '-30px',
          right: '-30px',
          width: '150px',
          height: '150px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%'
        }}></div>
        
        <Popcorn size={56} style={{ marginBottom: '1rem', position: 'relative', zIndex: 1 }} />
        <h1 style={{ 
          margin: 0, 
          fontSize: '3rem', 
          fontWeight: 'bold',
          position: 'relative',
          zIndex: 1
        }}>
          🎬 Películas Disney
        </h1>
        <p style={{ 
          margin: '0.5rem 0 0 0', 
          opacity: 0.95, 
          fontSize: '1.1rem',
          position: 'relative',
          zIndex: 1
        }}>
          Las películas más icónicas de todos los tiempos
        </p>
      </div>

      {/*
          ESTADÍSTICAS - Tarjetas informativas
           */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '15px',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          transition: 'transform 0.3s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <Trophy size={32} color="#ffd700" style={{ marginBottom: '0.5rem' }} />
          <h3 style={{ margin: '0.5rem 0', color: '#333', fontSize: '2rem' }}>
            {estadisticas.total}
          </h3>
          <p style={{ margin: 0, color: '#666' }}>Películas</p>
        </div>

        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '15px',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          transition: 'transform 0.3s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <Calendar size={32} color="#4facfe" style={{ marginBottom: '0.5rem' }} />
          <h3 style={{ margin: '0.5rem 0', color: '#333', fontSize: '2rem' }}>
            {estadisticas.promedioAño}
          </h3>
          <p style={{ margin: 0, color: '#666' }}>Año Promedio</p>
        </div>

        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '15px',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          transition: 'transform 0.3s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <TrendingUp size={32} color="#ff6b6b" style={{ marginBottom: '0.5rem' }} />
          <h3 style={{ margin: '0.5rem 0', color: '#333', fontSize: '1.3rem' }}>
            {generoTop}
          </h3>
          <p style={{ margin: 0, color: '#666' }}>Género Popular</p>
        </div>

        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '15px',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          transition: 'transform 0.3s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <Film size={32} color="#9c27b0" style={{ marginBottom: '0.5rem' }} />
          <h3 style={{ margin: '0.5rem 0', color: '#333', fontSize: '1.2rem' }}>
            {peliculaMasAntigua.año} - {peliculaMasReciente.año}
          </h3>
          <p style={{ margin: 0, color: '#666' }}>Período</p>
        </div>
      </div>

      {/* 
          FILTROS - Botones para filtrar por género
          */}
      <div style={{
        background: 'white',
        padding: '1.5rem',
        borderRadius: '15px',
        marginBottom: '2rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
      }}>
        <h3 style={{ 
          margin: '0 0 1rem 0', 
          color: '#333',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <Film size={20} />
          Filtrar por género:
        </h3>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {generos.map(genero => (
            <button
              key={genero}
              onClick={() => setFiltroGenero(genero)}
              style={{
                padding: '0.65rem 1.5rem',
                border: 'none',
                borderRadius: '25px',
                background: filtroGenero === genero 
                  ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                  : '#f0f0f0',
                color: filtroGenero === genero ? 'white' : '#333',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.95rem',
                transition: 'all 0.3s',
                textTransform: 'capitalize',
                boxShadow: filtroGenero === genero 
                  ? '0 4px 12px rgba(79, 172, 254, 0.4)'
                  : 'none'
              }}
              onMouseEnter={(e) => {
                if (filtroGenero !== genero) {
                  e.target.style.background = '#e0e0e0';
                }
              }}
              onMouseLeave={(e) => {
                if (filtroGenero !== genero) {
                  e.target.style.background = '#f0f0f0';
                }
              }}
            >
              {genero} {filtroGenero === genero && `(${peliculasFiltradas.length})`}
            </button>
          ))}
        </div>
      </div>

      {}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        {peliculasFiltradas.map((pelicula, i) => (
          <div 
            key={i} 
            onClick={() => setPeliculaSeleccionada(pelicula)}
            style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: hoveredMovie === i 
                ? `0 12px 30px ${pelicula.color}40`
                : '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'all 0.3s',
              transform: hoveredMovie === i ? 'translateY(-8px)' : 'translateY(0)',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredMovie(i)}
            onMouseLeave={() => setHoveredMovie(null)}
          >
            {/* Header con color temático */}
            <div style={{
              background: `linear-gradient(135deg, ${pelicula.color} 0%, ${pelicula.color}dd 100%)`,
              padding: '2rem',
              textAlign: 'center',
              color: 'white',
              position: 'relative'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>
                {pelicula.emoji}
              </div>
              <h3 style={{ 
                margin: 0, 
                fontSize: '1.4rem',
                fontWeight: 'bold'
              }}>
                {pelicula.titulo}
              </h3>
            </div>

            {/* Contenido de la tarjeta */}
            <div style={{ padding: '1.5rem' }}>
              <p style={{ 
                margin: '0 0 1rem 0', 
                color: '#666',
                lineHeight: '1.6',
                fontSize: '0.95rem',
                minHeight: '60px'
              }}>
                {pelicula.descripcion}
              </p>

              {/* Información adicional */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '1rem',
                borderTop: '1px solid #f0f0f0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={16} color="#666" />
                  <span style={{ color: '#666', fontSize: '0.9rem' }}>
                    {pelicula.año}
                  </span>
                </div>

                <span style={{
                  background: `${pelicula.color}20`,
                  color: pelicula.color,
                  padding: '0.35rem 0.85rem',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}>
                  {pelicula.genero}
                </span>

                <div style={{ display: 'flex', gap: '0.2rem' }}>
                  {[...Array(pelicula.rating)].map((_, index) => (
                    <Star 
                      key={index} 
                      size={16} 
                      fill="#ffd700" 
                      color="#ffd700" 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mensaje si no hay resultados */}
      {peliculasFiltradas.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          background: 'white',
          borderRadius: '20px',
          color: '#999'
        }}>
          <Film size={64} color="#ddd" style={{ marginBottom: '1rem' }} />
          <p style={{ fontSize: '1.2rem' }}>
            No se encontraron películas en esta categoría
          </p>
        </div>
      )}

      {/* Animaciones CSS */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default ExtraTabs;