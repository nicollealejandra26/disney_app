import { Star, Film } from "lucide-react";

function ExtraTabs() {
  const peliculas = [
    { titulo: 'El Rey León', año: 1994, genero: 'Aventura' },
    { titulo: 'Frozen', año: 2013, genero: 'Musical' },
    { titulo: 'Moana', año: 2016, genero: 'Aventura' },
    { titulo: 'Toy Story', año: 1995, genero: 'Animación' },
    { titulo: 'Coco', año: 2017, genero: 'Familia' },
    { titulo: 'Encanto', año: 2021, genero: 'Musical' }
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        borderRadius: '20px',
        padding: '2rem',
        color: 'white',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <Film size={48} style={{ marginBottom: '1rem' }} />
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>Películas Disney</h1>
        <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>Las películas más icónicas</p>
      </div>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {peliculas.map((pelicula, i) => (
          <div key={i} style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>{pelicula.titulo}</h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ color: '#666' }}>📅 {pelicula.año}</span>
                <span style={{ color: '#666' }}>🎭 {pelicula.genero}</span>
              </div>
            </div>
            <Star size={24} color="#ffd700" fill="#ffd700" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExtraTabs;