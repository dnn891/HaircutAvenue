import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { About } from './pages/About';
import { Franchise } from './pages/Franchise';

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tarifs" element={<Pricing />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/franchise" element={<Franchise />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;