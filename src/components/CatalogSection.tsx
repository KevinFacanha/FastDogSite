import React from 'react';
import CatalogCard from './CatalogCard';
import { catalogsData } from '../data/catalogsData';

const CatalogSection: React.FC = () => {
  return (
    <section
      id="catalogs"
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Nossos Catálogos
          </h2>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
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
  );
};

export default CatalogSection;