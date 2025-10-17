import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import Detail from './assets/pages/Detail';
import Original from './assets/pages/Original';
import Info from './assets/pages/Info';
import ExtraTabs from './assets/pages/ExtraTabs';
import Navbar from './assets/components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/original" element={<Original />} />
        <Route path="/info" element={<Info />} />
        <Route path="/extra" element={<ExtraTabs />} />
      </Routes>
    </Router>
  );
}

export default App;
