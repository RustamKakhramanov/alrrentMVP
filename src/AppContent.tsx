import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GoogleMapsProvider } from './components/SearchMap/GoogleMapsProvider';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Search } from './pages/Search';
import { SpaceDetails } from './pages/SpaceDetails';
import { useSpaceType } from './hooks/useSpaceType';

export function AppContent() {
  const { content } = useSpaceType();

  useEffect(() => {
    document.title = content.title 
      ? `AllRent - ${content.title}`
      : 'AllRent - Идеальное место для вашего мероприятия';
  }, [content]);

  return (
    <GoogleMapsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/spaces/:id" element={<SpaceDetails />} />
      </Routes>
    </GoogleMapsProvider>
  );
}