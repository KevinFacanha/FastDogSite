import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import TreatsPage from './pages/TreatsPage';
import ChewablesPage from './pages/ChewablesPage';
import ChewersPage from './pages/ChewersPage';
import CatalogsPage from './pages/CatalogsPage';
import SmallDogsPage from './pages/SmallDogsPage';
import MediumDogsPage from './pages/MediumDogsPage';
import LargeDogsPage from './pages/LargeDogsPage';
import FooterSection from './components/FooterSection';
import WhatsAppButton from './components/WhatsAppButton';
import { useAuthStore } from './store/useAuthStore';

function App() {
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-cream dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/treats" element={<TreatsPage />} />
            <Route path="/chewables" element={<ChewablesPage />} />
            <Route path="/chewers" element={<ChewersPage />} />
            <Route path="/catalogos" element={<CatalogsPage />} />
            <Route path="/porte-pequeno" element={<SmallDogsPage />} />
            <Route path="/porte-medio" element={<MediumDogsPage />} />
            <Route path="/porte-grande" element={<LargeDogsPage />} />
          </Routes>
        </main>
        <FooterSection />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;