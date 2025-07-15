import React from 'react';
import HeroSection from '../components/HeroSection';
import DogSizeBanners from '../components/DogSizeBanners';
import BestSellersCarousel from '../components/BestSellersCarousel';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  // Verificar se products existe e tem itens antes de usar slice
  const safeProducts = Array.isArray(products) ? products : [];
  const bestSellers = safeProducts.length > 0 ? safeProducts.slice(0, 10) : [];

  return (
    <>
      <HeroSection />
      <DogSizeBanners />
      {bestSellers.length > 0 && <BestSellersCarousel products={bestSellers} />}
    </>
  );
};

export default HomePage;