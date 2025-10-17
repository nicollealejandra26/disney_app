import { useState } from "react";
import { Sparkles } from "lucide-react";

function Original() {
  const [activeTab, setActiveTab] = useState('classics');

  const content = {
    classics: {
      title: '🏰 Clásicos Disney',
      items: ['Mickey Mouse', 'Blancanieves', 'Cenicienta', 'La Bella Durmiente', 'Peter Pan']
    },
    pixar: {
      title: '🎨 Pixar Originals',
      items: ['Toy Story', 'Buscando a Nemo', 'Los Increíbles', 'Cars', 'WALL-E']
    },
    marvel: {
      title: '🦸 Marvel Universe',
      items: ['Iron Man', 'Captain America', 'Thor', 'Spider-Man', 'Black Panther']
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        borderRadius: '20px',
        padding: '2rem',
        color: 'white',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <Sparkles size={48} style={{ marginBottom: '1rem' }} />
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>Disney Originals</h1>
        <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>Contenido exclusivo y legendario</p>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {Object.keys(content).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '12px',
              background: activeTab === tab ? '#667eea' : '#f0f0f0',
              color: activeTab === tab ? 'white' : '#333',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '1rem',
              transition: 'all 0.3s'
            }}
          >
            {content[tab].title}
          </button>
        ))}
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ marginTop: 0, color: '#667eea' }}>{content[activeTab].title}</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {content[activeTab].items.map((item, i) => (
            <div key={i} style={{
              padding: '1rem',
              background: '#f8f9fa',
              borderRadius: '10px',
              borderLeft: '4px solid #667eea'
            }}>
              ✨ {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Original;