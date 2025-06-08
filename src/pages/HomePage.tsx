import React from 'react';
import HeroSection from '../components/HeroSection';
import BestSellersCarousel from '../components/BestSellersCarousel';
import CatalogSection from '../components/CatalogSection';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  const bestSellers = products.slice(0, 8);

  return (
    <>
      <HeroSection />
      <BestSellersCarousel products={bestSellers} />
      <CatalogSection />
    </>
  );
};

export default HomePage;