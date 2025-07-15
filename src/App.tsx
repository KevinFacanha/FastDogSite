import React from 'react';
import { useEffect, useState } from 'react';
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
  const { checkAuth, isLoading } = useAuthStore();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        await checkAuth();
      } catch (error) {
        console.error('Erro ao inicializar autenticação:', error);
      } finally {
        setIsInitialized(true);
      }
    };
    
    initializeAuth();
  }, [checkAuth]);

  // Mostrar loading enquanto inicializa
  if (!isInitialized || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream dark:bg-gray-900">
        <div className="text-center">
          <img src="/catalogs/fastdog-logo2.png" alt="FastDog Logo" className="h-20 w-auto mx-auto mb-4" />
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
          <p className="text-green-700 dark:text-green-400 mt-4">Carregando...</p>
        </div>
      </div>
    );
  }

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