import React from 'react';
import HeroSection from '../components/HeroSection';
import DogSizeBanners from '../components/DogSizeBanners';
import BestSellersCarousel from '../components/BestSellersCarousel';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  // Seleciona os primeiros 10 produtos para a seção "Mais Vendidos"
  const bestSellers = products.slice(0, 10);

  return (
    <>
      <HeroSection />
      <DogSizeBanners />
      <BestSellersCarousel products={bestSellers} />
    </>
  );
};

export default HomePage;