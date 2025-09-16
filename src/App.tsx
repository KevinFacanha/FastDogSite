import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FooterSection from './components/FooterSection';
import WhatsAppButton from './components/WhatsAppButton';
import { useAuthStore } from './store/useAuthStore';

const HomePage = lazy(() => import('./pages/HomePage'));
const TreatsPage = lazy(() => import('./pages/TreatsPage'));
const ChewablesPage = lazy(() => import('./pages/ChewablesPage'));
const ChewersPage = lazy(() => import('./pages/ChewersPage'));
const CatalogsPage = lazy(() => import('./pages/CatalogsPage'));
const SmallDogsPage = lazy(() => import('./pages/SmallDogsPage'));
const MediumDogsPage = lazy(() => import('./pages/MediumDogsPage'));
const LargeDogsPage = lazy(() => import('./pages/LargeDogsPage'));
const PetiscosDeAgradoPage = lazy(() => import('./pages/PetiscosDeAgradoPage'));
const PetiscosMastigaveisPage = lazy(() => import('./pages/PetiscosMastigaveisPage'));
const OndeEstamosPage = lazy(() => import('./pages/OndeEstamosPage'));

function App() {
  const { checkAuth } = useAuthStore();
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

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream dark:bg-gray-900">
        <div className="text-center">
          <img
            src="/catalogs/fastdog-logo2.png"
            alt="FastDog Logo"
            className="h-20 w-auto mx-auto mb-4"
            width={80}
            height={80}
            loading="eager"
            decoding="async"
          />
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
          <p className="text-green-700 dark:text-green-400 mt-4">Carregando...</p>
        </div>
      </div>
    );
  }

  if (initError) {
    console.warn('Aplicação iniciada com erro de autenticação, mas continuando normalmente');
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-cream dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div className="py-10 text-center text-green-700 dark:text-green-300">Carregando conteúdo...</div>}>
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
          </Suspense>
        </main>
        <FooterSection />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
