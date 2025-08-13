import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BenefitsRow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const benefits = [
    {
      id: 'delivery',
      title: 'Entregamos em todo Brasil',
      subtitle: 'Rápido e com rastreio',
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'installments',
      title: 'Até 3x sem juros',
      subtitle: 'No cartão',
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      id: 'pix',
      title: 'Desconto no Pix',
      subtitle: 'Economize agora',
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'experts',
      title: 'Aprovado por especialistas',
      subtitle: 'Nutrição canina',
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length);
  }, [benefits.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
  }, [benefits.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Autoplay para mobile
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-2 md:py-8" aria-label="Benefícios">
      <div className="container mx-auto px-4">
        {/* Desktop/Tablet: Single line with 4 items */}
        <div className="hidden md:flex justify-center items-start gap-2 md:gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col items-center text-center flex-1 max-w-[200px] p-2 md:p-5 rounded-xl shadow-sm"
              role="listitem"
            >
              <div className="w-6 h-6 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-md mb-2 md:mb-4 hover:shadow-lg transition-shadow duration-200">
                {benefit.icon}
              </div>
              <h3 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1 md:mb-2 leading-tight">
                {benefit.title}
              </h3>
              <p className="text-[11px] md:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                {benefit.subtitle}
              </p>
            </div>
          ))}
        </div>
        
        {/* Mobile: Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="w-full flex-shrink-0 flex flex-col items-center text-center px-4"
                  role="listitem"
                >
                  <div className="w-6 h-6 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg mb-2 md:mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1 md:mb-2 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-[11px] md:text-sm text-gray-600 dark:text-gray-400 leading-tight max-w-xs">
                    {benefit.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Only visible on md+ */}
          <div className="hidden md:flex">
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors z-10"
              aria-label="Benefício anterior"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors z-10"
              aria-label="Próximo benefício"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide
                    ? 'bg-green-500'
                    : 'bg-gray-300'
                }`}
                aria-label={`Ir para benefício ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsRow; 