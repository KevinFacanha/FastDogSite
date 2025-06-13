import React from 'react';
import { Link } from 'react-router-dom';

const DogSizeBanners: React.FC = () => {
  const banners = [
    {
      id: 'small',
      title: 'Cachorros de Porte Pequeno',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      description: 'Petiscos especiais para cães pequenos',
      route: '/porte-pequeno'
    },
    {
      id: 'medium',
      title: 'Cachorros de Porte Médio',
      image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      description: 'Produtos ideais para cães de porte médio',
      route: '/porte-medio'
    },
    {
      id: 'large',
      title: 'Cachorros de Porte Grande',
      image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      description: 'Petiscos resistentes para cães grandes',
      route: '/porte-grande'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-400 mb-4">
            Produtos por Porte
          </h2>
          <p className="text-lg text-green-700 dark:text-green-300 max-w-2xl mx-auto">
            Encontre os petiscos ideais para o seu cão de acordo com o porte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {banners.map((banner) => (
            <Link
              key={banner.id}
              to={banner.route}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl block"
            >
              {/* Imagem de fundo */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Conteúdo sobreposto */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
                  {banner.title}
                </h3>
                <p className="text-white/90 mb-6 text-lg drop-shadow-md">
                  {banner.description}
                </p>
                <button className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 group-hover:animate-pulse">
                  CONFIRA!
                </button>
              </div>

              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DogSizeBanners;