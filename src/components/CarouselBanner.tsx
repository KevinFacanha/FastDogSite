import React from 'react';

interface Slide {
  image: string;
}

interface CarouselBannerProps {
  slides: Slide[];
}

const CarouselBanner: React.FC<CarouselBannerProps> = ({ slides }) => {
  if (!slides.length) return null;

  const slide = slides[0];

  return (
    <section className="relative w-full h-64 md:h-96 lg:h-[500px]">
      <img
        src={slide.image}
        alt="Promoção"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform transition-all hover:scale-105">
          Garanta já
        </button>
      </div>
    </section>
  );
};

export default CarouselBanner;
