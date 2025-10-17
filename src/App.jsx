import { useState } from 'react';
import Navbar from './assets/components/Navbar';
import Home from './assets/pages/Home';
import Favorites from './assets/pages/Favorites';
import Original from './assets/pages/Original';
import Info from './assets/pages/Info';
import ExtraTabs from './assets/pages/ExtraTabs';
import { AppProvider } from './assets/context/AppContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'favorites':
        return <Favorites />;
      case 'original':
        return <Original />;
      case 'extra':
        return <ExtraTabs />;
      case 'info':
        return <Info />;
      default:
        return <Home />;
    }
  };

  return (
    <AppProvider>
      <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderPage()}
      </div>
    </AppProvider>
  );
}

export default App;