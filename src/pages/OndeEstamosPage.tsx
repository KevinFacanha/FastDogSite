import React from 'react';
import { MapPin, Clock, Phone, ArrowRight, Navigation } from 'lucide-react';

const OndeEstamosPage: React.FC = () => {
  const stores = [
    {
      id: 1,
      name: 'FastDog – Unidade Bdog',
      address: 'R. Prof. Aprígio Gonzaga, 106 – São Judas, São Paulo – SP, 04303-000',
      hours: 'Seg a Sex, 7h30–19h',
      phone: '(11) 99449-6748',
      mapUrl: 'https://www.google.com/maps?q=R.+Prof.+Apr%C3%ADgio+Gonzaga,+106+-+S%C3%A3o+Judas,+S%C3%A3o+Paulo+-+SP,+04303-000',
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=R.+Prof.+Apr%C3%ADgio+Gonzaga,+106+-+S%C3%A3o+Judas,+S%C3%A3o+Paulo+-+SP,+04303-000'
    }
  ];

  const benefits = [
    {
      icon: '🚚',
      title: 'Entrega rápida',
      description: 'Retire também na loja'
    },
    {
      icon: '💳',
      title: 'Até 3x sem juros',
      description: 'No cartão'
    },
    {
      icon: '💸',
      title: 'Desconto no Pix',
      description: 'Economize mais'
    },
    {
      icon: '🐶',
      title: 'Aprovado por especialistas',
      description: 'Nutrição canina'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-400 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Encontre a FastDog em São Paulo</h1>
              <p className="text-xl mb-8">Estamos em nossa unidade física em São Paulo. Clique e veja a rota no Google Maps.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#nossas-lojas" 
                  className="bg-white text-green-700 hover:bg-green-50 font-semibold px-6 py-3 rounded-full shadow-lg text-center transition-colors"
                >
                  Ver unidades
                </a>
                <a 
                  href="https://wa.me/5511945993793" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-20 font-semibold px-6 py-3 rounded-full text-center transition-colors"
                >
                  Fale conosco
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg h-80 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/banners/fastdogimg.jpeg"
                  alt="Cachorro feliz passeando"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stores Section */}
      <section id="nossas-lojas" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800 dark:text-green-400">Nossa Loja</h2>
          
          <div className="max-w-2xl mx-auto w-full">
            {stores.map((store) => (
              <div key={store.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <iframe
                    title={`Mapa ${store.name}`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(store.address)}&z=15&output=embed`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-3">{store.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <p className="flex items-start text-gray-700 dark:text-gray-300">
                      <MapPin className="h-5 w-5 mr-2 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span>{store.address}</span>
                    </p>
                    <p className="flex items-center text-gray-700 dark:text-gray-300">
                      <Clock className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                      {store.hours}
                    </p>
                    <p className="flex items-center text-gray-700 dark:text-gray-300">
                      <Phone className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                      {store.phone}
                    </p>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <a
                      href={store.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      Ver no mapa
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                    <a
                      href={store.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center border border-green-600 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Como chegar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OndeEstamosPage;
