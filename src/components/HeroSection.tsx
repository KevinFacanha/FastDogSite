import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [buttonText, setButtonText] = useState('Confira');
  const [hasClicked, setHasClicked] = useState(false);

  const scrollToBestSellers = () => {
    // Encontra a seção "Mais Vendidos" pelo texto do título
    const bestSellersSection = document.querySelector('h2')?.closest('section');
    if (bestSellersSection) {
      bestSellersSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Mantém o texto "Confira" após o clique
    if (!hasClicked) {
      setHasClicked(true);
    }
  };

  const scrollToBottom = () => {
    // Scroll para o final da página
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-green-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700 py-20 md:py-28 transition-colors duration-200"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 dark:text-green-400 mb-4">
              Petiscos de qualidade para o seu melhor amigo
            </h1>
            <p className="text-lg text-green-700 dark:text-green-300 mb-8 max-w-lg">
              A FastDog traz para você os melhores petiscos para o seu cão. Distribuidora
              oficial de marcas como Luv, Alecrim, GoodLoving e Natuka.
            </p>
            <button
              onClick={scrollToBestSellers}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              {buttonText}
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg h-80 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Cachorro feliz com petisco"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToBottom}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
          aria-label="Scroll to bottom"
        >
          <ChevronDown className="h-6 w-6 text-green-600 dark:text-green-400" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;