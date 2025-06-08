import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToCatalogs = () => {
    const catalogsSection = document.getElementById('catalogs');
    if (catalogsSection) {
      catalogsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-green-50 to-yellow-50 py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-4">
              Petiscos de qualidade para o seu melhor amigo
            </h1>
            <p className="text-lg text-green-700 mb-8 max-w-lg">
              A FastDog traz para você os melhores petiscos para o seu cão. Distribuidora
              oficial de marcas como Luv, Alecrim, GoodLoving e Natuka.
            </p>
            <button
              onClick={scrollToCatalogs}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform transition-transform hover:scale-105"
            >
              Ver Catálogos
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg h-80 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Cachorro feliz com petisco"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToCatalogs}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-md"
          aria-label="Scroll to catalogs"
        >
          <ChevronDown className="h-6 w-6 text-green-600" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;