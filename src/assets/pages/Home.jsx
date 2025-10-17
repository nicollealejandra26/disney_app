import { useEffect, useState, useContext } from "react";
import { getAllCharacters } from "../../api/disneyApi";
import { Search, Heart } from "lucide-react";
import { AppContext } from "../context/AppContext";
import Detail from "./Detail";

function Home() {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const { filtroCategoria, setFiltroCategoria, agregarFavorito, favoritos } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getAllCharacters();
      setPersonajes(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const filtrados = personajes.filter((p) => {
    const matchBusqueda = p.name.toLowerCase().includes(busqueda.toLowerCase());
    const matchCategoria = filtroCategoria === 'all' || 
      (filtroCategoria === 'films' && p.films?.length > 0) ||
      (filtroCategoria === 'shows' && p.tvShows?.length > 0);
    return matchBusqueda && matchCategoria;
  });

  if (selectedCharacter) {
    return <Detail character={selectedCharacter} onBack={() => setSelectedCharacter(null)} />;
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '20px',
        padding: '2rem',
        color: 'white',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          ✨ Personajes de Disney
        </h1>
        <p style={{ margin: 0, opacity: 0.9 }}>Descubre el mágico mundo Disney</p>
      </div>

      {/* BUSCADOR */}
      <div style={{ position: 'relative', marginBottom: '1rem' }}>
        <Search size={20} style={{ 
          position: 'absolute', 
          left: '1rem', 
          top: '50%', 
          transform: 'translateY(-50%)', 
          color: '#999' 
        }} />
        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem 1rem 0.75rem 3rem',
            border: '2px solid #e0e0e0',
            borderRadius: '12px',
            fontSize: '1rem',
            outline: 'none',
            boxSizing: 'border-box'
          }}
        />
      </div>

      {/* FILTROS */}
      <div style={{ marginBottom: '2rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {['all', 'films', 'shows'].map(cat => (
          <button
            key={cat}
            onClick={() => setFiltroCategoria(cat)}
            style={{
              padding: '0.5rem 1.5rem',
              border: 'none',
              borderRadius: '20px',
              background: filtroCategoria === cat ? '#667eea' : '#f0f0f0',
              color: filtroCategoria === cat ? 'white' : '#333',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'all 0.3s'
            }}
          >
            {cat === 'all' ? ' Todos' : cat === 'films' ? ' Películas' : 'Series'}
          </button>
        ))}
        <span style={{ 
          marginLeft: 'auto', 
          padding: '0.5rem 1rem', 
          background: '#f0f0f0', 
          borderRadius: '20px', 
          color: '#666' 
        }}>
          {filtrados.length} personajes
        </span>
      </div>

      {/* LOADING */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: '#999' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⏳</div>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '1.5rem'
        }}>
          {filtrados.map((p) => {
            const esFavorito = favoritos.find(f => f._id === p._id);
            return (
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
                    agregarFavorito(p);
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
                    zIndex: 10,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                  }}
                >
                  <Heart 
                    size={18} 
                    fill={esFavorito ? '#ff4757' : 'none'} 
                    color={esFavorito ? '#ff4757' : '#999'} 
                  />
                </button>
                <img 
                  src={p.imageUrl} 
                  alt={p.name}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#333' }}>
                    {p.name}
                  </h3>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {p.films?.length > 0 && (
                      <span style={{ 
                        fontSize: '0.75rem', 
                        background: '#e3f2fd', 
                        color: '#1976d2', 
                        padding: '0.25rem 0.5rem', 
                        borderRadius: '12px' 
                      }}>
                        🎬 {p.films.length}
                      </span>
                    )}
                    {p.tvShows?.length > 0 && (
                      <span style={{ 
                        fontSize: '0.75rem', 
                        background: '#f3e5f5', 
                        color: '#7b1fa2', 
                        padding: '0.25rem 0.5rem', 
                        borderRadius: '12px' 
                      }}>
                        📺 {p.tvShows.length}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
