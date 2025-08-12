import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BannerSlide } from '../data/homeBanners';

interface CarouselBannerProps {
  slides: BannerSlide[];
  autoplay?: boolean;
  delay?: number;
  className?: string;
}

const CarouselBanner: React.FC<CarouselBannerProps> = ({
  slides,
  autoplay = true,
  delay = 5000,
  className = ''
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(nextSlide, delay);
    return () => clearInterval(interval);
  }, [autoplay, delay, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  if (!slides || slides.length === 0) {
    return null;
  }

  const currentSlideData = slides[currentSlide];

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Main Banner Section - Mobile First */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <img
          src={currentSlideData.image}
          alt={currentSlideData.title}
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-8">
          {/* Top Text */}
          <div className="text-white mb-4">
            <p className="text-sm md:text-base font-medium mb-2">
              {currentSlideData.title}
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {currentSlideData.subtitle}
            </h1>
          </div>
          
          {/* CTA Button */}
          <Link
            to={currentSlideData.ctaHref}
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full shadow-xl transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 w-fit"
          >
            {currentSlideData.ctaLabel}
          </Link>
        </div>
        
        {/* Discount Badges */}
        <div className="absolute top-4 left-4">
          <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            15% OFF
          </div>
        </div>
        <div className="absolute top-4 right-20">
          <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            15% OFF
          </div>
        </div>
        
        {/* Brand Logo */}
        <div className="absolute bottom-4 right-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">N</span>
            </div>
            <span className="text-white font-bold text-lg drop-shadow-lg">natuka</span>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors z-10"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors z-10"
          aria-label="Próximo slide"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </button>
        
        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide
                  ? 'bg-gray-800'
                  : 'bg-gray-300'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default CarouselBanner; 