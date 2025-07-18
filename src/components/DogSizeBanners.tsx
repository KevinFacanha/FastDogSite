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

  // ===== INÍCIO DAS MELHORIAS IAC (branch: iac-melhorias) =====
  
  // Componente para seção de diferenciais
  const DiferenciaisSection = () => (
    <section id="diferenciais" className="py-12 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-green-800 dark:text-green-400 text-center mb-8">
          Por que nossos petiscos são diferentes?
        </h3>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4 text-center">
            <li className="flex items-center justify-center space-x-3 text-lg text-gray-700 dark:text-gray-300">
              <span className="text-green-600 dark:text-green-400 font-bold">✅</span>
              <span>100% naturais, sem conservantes</span>
            </li>
            <li className="flex items-center justify-center space-x-3 text-lg text-gray-700 dark:text-gray-300">
              <span className="text-green-600 dark:text-green-400 font-bold">✅</span>
              <span>Alta palatabilidade: os cães amam!</span>
            </li>
            <li className="flex items-center justify-center space-x-3 text-lg text-gray-700 dark:text-gray-300">
              <span className="text-green-600 dark:text-green-400 font-bold">✅</span>
              <span>Embalados com carinho e responsabilidade</span>
            </li>
            <li className="flex items-center justify-center space-x-3 text-lg text-gray-700 dark:text-gray-300">
              <span className="text-green-600 dark:text-green-400 font-bold">✅</span>
              <span>Produção artesanal e supervisionada por nutricionistas</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );

  // Componente para seção de depoimentos (prova social)
  const DepoimentosSection = () => (
    <section id="depoimentos" className="py-12 bg-gradient-to-br from-green-50 to-yellow-50 dark:from-gray-700 dark:to-gray-600 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-green-800 dark:text-green-400 text-center mb-8">
          O que os tutores estão dizendo:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <blockquote className="text-gray-700 dark:text-gray-300 italic text-center">
              "Meu cão nunca gostou de petiscos... até conhecer a FastDog!"
              <footer className="mt-3 text-green-600 dark:text-green-400 font-semibold">
                – Carla M.
              </footer>
            </blockquote>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <blockquote className="text-gray-700 dark:text-gray-300 italic text-center">
              "Os ingredientes são naturais de verdade, eu confio 100%"
              <footer className="mt-3 text-green-600 dark:text-green-400 font-semibold">
                – Rafael T.
              </footer>
            </blockquote>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <blockquote className="text-gray-700 dark:text-gray-300 italic text-center">
              "Chega rapidinho e meu dog ama o de carne!"
              <footer className="mt-3 text-green-600 dark:text-green-400 font-semibold">
                – Luciana S.
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      {/* ===== SEÇÃO DE DIFERENCIAIS (IAC - INTERESSE) ===== */}
      <DiferenciaisSection />
      
      <section className="py-16 bg-gradient-to-br from-green-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* ===== TÍTULO RENOMEADO (IAC - ATENÇÃO) ===== */}
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-400 mb-4">
              Petiscos Naturais Perfeitos para o Tamanho do Seu Cão
            </h2>
            <p className="text-lg text-green-700 dark:text-green-300 max-w-2xl mx-auto mb-6">
              Feitos com ingredientes 100% naturais e pensados para cães de pequeno, médio e grande porte.
            </p>
            
            {/* ===== GATILHO DE ESCASSEZ (IAC - URGÊNCIA) ===== */}
            <p className="text-red-600 dark:text-red-400 text-center font-semibold mb-8 bg-red-50 dark:bg-red-900/20 py-2 px-4 rounded-lg inline-block">
              ⚠️ Estoque limitado – Atualizado em tempo real
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
          
          {/* ===== CTA SECUNDÁRIO (IAC - CURIOSIDADE) ===== */}
          <div className="text-center mt-12">
            <a
              href="#diferenciais"
              className="inline-flex items-center bg-transparent border-2 border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-600 hover:text-white dark:hover:bg-green-400 dark:hover:text-gray-900 font-semibold px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105"
            >
              Veja o que torna nossos produtos únicos
            </a>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO DE DEPOIMENTOS (IAC - PROVA SOCIAL) ===== */}
      <DepoimentosSection />
      
      {/* ===== FIM DAS MELHORIAS IAC ===== */}
    </>
  );
};

export default DogSizeBanners;