import React from 'react';
import { Link } from 'react-router-dom';
import { Dog } from 'lucide-react';

const brands = [
  {
    id: 'natuka',
    name: 'Natuka',
    description: 'Petiscos funcionais para saúde e bem-estar do seu pet',
  },
  {
    id: 'luv-alecrim',
    name: 'Luv e Alecrim',
    description: 'Petiscos naturais e orgânicos de alta qualidade',
  },
  {
    id: 'bom-amoroso',
    name: 'GoodLoving',
    description: 'Snacks premium para todos os momentos',
  },
];

const BrandsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Nossas Marcas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {brands.map((brand) => (
          <Link
            key={brand.id}
            to={`/brands/${brand.id}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Dog className="h-16 w-16 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
                {brand.name}
              </h2>
              <p className="text-gray-600 text-center">{brand.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;