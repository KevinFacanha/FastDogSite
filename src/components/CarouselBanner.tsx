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

const responsiveWidths = [640, 1280, 1920];
const responsiveSizes = '(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px';

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

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(nextSlide, delay);
    return () => clearInterval(interval);
  }, [autoplay, delay, nextSlide]);

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
  const sectionClasses = ['relative overflow-hidden mb-0', className].filter(Boolean).join(' ');
  const isOptimizedBanner = currentSlideData.image.startsWith('/banners/');
  const optimizedBasePath = isOptimizedBanner
    ? currentSlideData.image.replace(/\.(png|jpe?g|webp|avif)$/i, '')
    : undefined;
  const avifSrcSet = optimizedBasePath
    ? responsiveWidths.map((width) => `${optimizedBasePath}-${width}.avif ${width}w`).join(', ')
    : undefined;
  const webpSrcSet = optimizedBasePath
    ? responsiveWidths.map((width) => `${optimizedBasePath}-${width}.webp ${width}w`).join(', ')
    : undefined;
  const fallbackSrc = currentSlideData.image;
  const altText = currentSlideData.alt ?? 'Banner promocional FastDog';

  return (
    <section className={sectionClasses}>
      <div className="relative w-full overflow-hidden aspect-[21/9] sm:aspect-[18/9] md:h-[500px] md:aspect-auto">
        <picture className="absolute inset-0 block h-full w-full">
          {avifSrcSet && (
            <source type="image/avif" srcSet={avifSrcSet} sizes={responsiveSizes} />
          )}
          {webpSrcSet && (
            <source type="image/webp" srcSet={webpSrcSet} sizes={responsiveSizes} />
          )}
          <img
            src={fallbackSrc}
            alt={altText}
            width={1920}
            height={1080}
            style={{ aspectRatio: '16/9' }}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        </picture>
        <div className="absolute left-4 bottom-4 md:left-8 md:bottom-8 z-20">
          <Link
            to={currentSlideData.ctaHref}
            aria-label={`Ir para ${altText}`}
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg transition focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {currentSlideData.ctaLabel}
          </Link>
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex space-x-1.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-2 md:left-3 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-2 md:right-3 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
          aria-label="Próximo slide"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default CarouselBanner;

