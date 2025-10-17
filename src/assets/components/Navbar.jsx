import { useState, useContext } from "react";
import { Star, Home, Heart, Sparkles, Film, Info, Menu } from "lucide-react";
import { AppContext } from "../context/AppContext";

export default function Navbar({ currentPage, setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { favoritos } = useContext(AppContext);

  const navItems = [
    { id: 'home', label: 'Inicio', icon: <Home size={18} /> },
    { id: 'favorites', label: 'Favoritos', icon: <Heart size={18} /> },
    { id: 'original', label: 'Original', icon: <Sparkles size={18} /> },
    { id: 'extra', label: 'Películas', icon: <Film size={18} /> },
    { id: 'info', label: 'Info', icon: <Info size={18} /> },
  ];

  return (
    <nav style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '1rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
          <Star size={24} fill="gold" color="gold" />
          <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Disney Magic</h2>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              style={{
                background: currentPage === item.id ? 'rgba(255,255,255,0.3)' : 'transparent',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'all 0.3s'
              }}
            >
              {item.icon}
              {item.label}
              {item.id === 'favorites' && favoritos.length > 0 && (
                <span style={{
                  background: '#ff4757',
                  borderRadius: '50%',
                  padding: '0.1rem 0.4rem',
                  fontSize: '0.7rem',
                  fontWeight: 'bold'
                }}>
                  {favoritos.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}