import { useContext } from "react";
import { Heart, Film } from "lucide-react";
import { AppContext } from "../context/AppContext";

function Detail({ character, onBack }) {
  const { agregarFavorito, eliminarFavorito, favoritos } = useContext(AppContext);
  const esFavorito = favoritos.find(f => f._id === character._id);

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <button
        onClick={onBack}
        style={{
          background: '#f0f0f0',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '10px',
          cursor: 'pointer',
          marginBottom: '2rem',
          fontSize: '1rem',
          fontWeight: '500'
        }}
      >
        ← Volver
      </button>

      <div style={{
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '2rem',
          color: 'white',
          textAlign: 'center'
        }}>
          <img 
            src={character.imageUrl} 
            alt={character.name}
            style={{
              width: '250px',
              height: '250px',
              objectFit: 'cover',
              borderRadius: '50%',
              border: '6px solid white',
              marginBottom: '1rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
            }}
          />
          <h1 style={{ margin: '0 0 0.5rem 0', fontSize: '2.5rem' }}>{character.name}</h1>
          <button
            onClick={() => esFavorito ? eliminarFavorito(character._id) : agregarFavorito(character)}
            style={{
              background: 'white',
              color: '#667eea',
              border: 'none',
              padding: '0.75rem 2rem',
              borderRadius: '25px',
              cursor: 'pointer',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              margin: '0 auto'
            }}
          >
            <Heart 
              size={18} 
              fill={esFavorito ? '#ff4757' : 'none'} 
              color={esFavorito ? '#ff4757' : '#667eea'} 
            />
            {esFavorito ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
          </button>
        </div>

        <div style={{ padding: '2rem' }}>
          {character.films?.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ 
                color: '#667eea', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem' 
              }}>
                <Film size={20} /> Películas ({character.films.length})
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {character.films.map((film, i) => (
                  <span key={i} style={{
                    background: '#e3f2fd',
                    color: '#1976d2',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem'
                  }}>
                    {film}
                  </span>
                ))}
              </div>
            </div>
          )}

          {character.tvShows?.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ 
                color: '#7b1fa2', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem' 
              }}>
                📺 Series de TV ({character.tvShows.length})
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {character.tvShows.map((show, i) => (
                  <span key={i} style={{
                    background: '#f3e5f5',
                    color: '#7b1fa2',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem'
                  }}>
                    {show}
                  </span>
                ))}
              </div>
            </div>
          )}

          {character.videoGames?.length > 0 && (
            <div>
              <h3 style={{ 
                color: '#2e7d32', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem' 
              }}>
                🎮 Videojuegos ({character.videoGames.length})
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {character.videoGames.map((game, i) => (
                  <span key={i} style={{
                    background: '#e8f5e9',
                    color: '#2e7d32',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem'
                  }}>
                    {game}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Detail;