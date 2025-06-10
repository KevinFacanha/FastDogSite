import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import TreatsPage from './pages/TreatsPage';
import ChewablesPage from './pages/ChewablesPage';
import ChewersPage from './pages/ChewersPage';
import FooterSection from './components/FooterSection';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
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
          </Routes>
        </main>
        <FooterSection />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;