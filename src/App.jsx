import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HouseDetails from './pages/HouseDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/houses/:id" element={<HouseDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
