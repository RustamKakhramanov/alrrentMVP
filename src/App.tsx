import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleMapsProvider } from './components/SearchMap/GoogleMapsProvider';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Search } from './pages/Search';
import { SpaceDetails } from './pages/SpaceDetails';

function App() {
  return (
    <Router>
      <GoogleMapsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/spaces/:id" element={<SpaceDetails />} />
        </Routes>
      </GoogleMapsProvider>
    </Router>
  );
}

export default App;