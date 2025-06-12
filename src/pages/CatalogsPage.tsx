import React from 'react';
import CatalogCard from '../components/CatalogCard';
import { catalogsData } from '../data/catalogsData';

const CatalogsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-400 mb-4">
              Nossos Catálogos
            </h1>
            <p className="text-lg text-green-700 dark:text-green-300 max-w-2xl mx-auto">
              Conheça nossos produtos e faça o download dos catálogos completos para
              encontrar o petisco perfeito para o seu pet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogsData.map((catalog) => (
              <CatalogCard
                key={catalog.id}
                title={catalog.title}
                description={catalog.description}
                image={catalog.image}
                pdfUrl={catalog.pdfUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CatalogsPage;