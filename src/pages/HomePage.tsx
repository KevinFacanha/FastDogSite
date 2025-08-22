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
      
      {/* Wave divider between DogSizeBanners and BestSellers */}
      <div className="relative h-16 -mt-1 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-full h-full">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512,54.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                opacity=".25" className="fill-current text-green-50"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,141.56,70.31,11.68,19.31,17.88,40.75,21.91,62.72,3.42,18.7,4.97,37.81,4.97,56.64V0Z" 
                opacity=".5" className="fill-current text-green-50"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                className="fill-current text-white"></path>
        </svg>
      </div>
      
      {bestSellers.length > 0 && <BestSellersCarousel products={bestSellers} />}
      
      {/* Gradient fade between BestSellers and Onde nos encontrar */}
      <div className="h-16 bg-gradient-to-b from-white to-[#F5FBF6]"></div>
      
      {/* Onde nos encontrar Section - Hero Banner */}
      <section className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
        {/* Background Image with gradient overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt="Cachorro feliz em um ambiente acolhedor"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Dark overlay with gradient - now more subtle */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
              Onde nos encontrar
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto drop-shadow-md px-4">
              Clique abaixo e veja nossas unidades físicas em São Paulo.
            </p>
            <a 
              href="/onde-estamos"
              className="inline-block bg-green-600 hover:bg-white text-white hover:text-green-700 font-semibold px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
            >
              Ver unidades
            </a>
          </div>
        </div>
      </section>
      
      {/* Diagonal border between Onde nos encontrar and CustomerFeedback */}
      <div className="relative h-16 -mt-1 overflow-hidden">
        <div className="absolute w-full h-full bg-[#F5FBF6]">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 100%)'
          }}></div>
        </div>
      </div>
      
      {/* Customer Feedback Section */}
      <div className="bg-[#F5FBF6] pt-8">
        <CustomerFeedback />
      </div>
    </>
  );
};

export default HomePage;