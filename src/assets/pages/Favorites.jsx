import { useState, useContext } from "react";
import { Heart } from "lucide-react";
import { AppContext } from "../context/AppContext";
import Detail from "./Detail";

function Favorites() {
  const { favoritos, eliminarFavorito } = useContext(AppContext);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  if (selectedCharacter) {
    return <Detail character={selectedCharacter} onBack={() => setSelectedCharacter(null)} />;
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{
        background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
        borderRadius: '20px',
        padding: '2rem',
        color: 'white',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <Heart size={48} fill="white" color="white" style={{ marginBottom: '1rem' }} />
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>Mis Favoritos</h1>
        <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>
          {favoritos.length} personajes guardados
        </p>
      </div>

      {favoritos.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: '#999' }}>
          <Heart size={64} color="#ddd" style={{ marginBottom: '1rem' }} />
          <p style={{ fontSize: '1.2rem' }}>No tienes favoritos aún</p>
          <p>¡Explora y agrega tus personajes favoritos!</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '1.5rem'
        }}>
          {favoritos.map((p) => (
            <div
              key={p._id}
              onClick={() => setSelectedCharacter(p)}
              style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s',
                position: 'relative'
              }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  eliminarFavorito(p._id);
                }}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'rgba(255,255,255,0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                <Heart size={18} fill="#ff4757" color="#ff4757" />
              </button>
              <img 
                src={p.imageUrl} 
                alt={p.name} 
                style={{ width: '100%', height: '220px', objectFit: 'cover' }} 
              />
              <div style={{ padding: '1rem' }}>
                <h3 style={{ margin: 0, fontSize: '1rem' }}>{p.name}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;