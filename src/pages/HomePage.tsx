import React from 'react';
import CarouselBanner from '../components/CarouselBanner';
import BenefitsRow from '../components/BenefitsSection';
import DogSizeBanners from '../components/DogSizeBanners';
import BestSellersCarousel from '../components/BestSellersCarousel';
import CustomerFeedback from '../components/CustomerFeedback';
import { products } from '../data/products';
import { bannersA, bannersB, bannersC } from '../data/homeBanners';

const HomePage: React.FC = () => {
  // Verificar se products existe e tem itens antes de usar slice
  const safeProducts = Array.isArray(products) ? products : [];
  const bestSellers = safeProducts.length > 0 ? safeProducts.slice(0, 10) : [];

  return (
    <>
      {/* Main Carousel Banner */}
      <CarouselBanner slides={bannersA} autoplay={true} delay={5000} />
      
      {/* Benefits Row */}
      <BenefitsRow />
      
      <DogSizeBanners />
      {bestSellers.length > 0 && <BestSellersCarousel products={bestSellers} />}
      
      {/* Customer Feedback Section */}
      <CustomerFeedback />
    </>
  );
};

export default HomePage;