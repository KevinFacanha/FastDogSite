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
import PetiscosDeAgradoPage from './pages/PetiscosDeAgradoPage';
import PetiscosMastigaveisPage from './pages/PetiscosMastigaveisPage';
import OndeEstamosPage from './pages/OndeEstamosPage';

function App() {
  const { checkAuth, isLoading } = useAuthStore();
  const [isInitialized, setIsInitialized] = useState(false);
  const [initError, setInitError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    const initializeAuth = async () => {
      try {
        console.log('Inicializando autenticação...');
        await checkAuth();
        console.log('Autenticação inicializada com sucesso');
      } catch (error) {
        console.error('Erro ao inicializar autenticação:', error);
        setInitError(true);
      } finally {
        if (isMounted) {
          setIsInitialized(true);
        }
      }
    };
    
    // Timeout para evitar loading infinito
    const timeout = setTimeout(() => {
      if (isMounted && !isInitialized) {
        console.warn('Timeout na inicialização da auth, continuando sem autenticação');
        setIsInitialized(true);
        setInitError(true);
      }
    }, 5000);
    
    initializeAuth();
    
    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, []);

  // Loading screen com timeout
  if (!isInitialized) {
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

  // Error fallback
  if (initError) {
    console.warn('Aplicação iniciada com erro de autenticação, mas continuando normalmente');
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
            <Route path="/produtos/Petiscos de Agrado" element={<PetiscosDeAgradoPage />} />
            <Route path="/produtos/Petiscos Mastigáveis" element={<PetiscosMastigaveisPage />} />
            <Route path="/onde-estamos" element={<OndeEstamosPage />} />
          </Routes>
        </main>
        <FooterSection />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;