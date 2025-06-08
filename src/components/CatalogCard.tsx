import React, { useState } from 'react';
import { Download } from 'lucide-react';

interface CatalogCardProps {
  title: string;
  description: string;
  image: string;
  pdfUrl: string;
}

const CatalogCard: React.FC<CatalogCardProps> = ({
  title,
  description,
  image,
  pdfUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-cream rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
          {title}
        </h3>
      </div>
      <div className="p-5">
        <p className="text-green-800 mb-6">{description}</p>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          <Download className="h-5 w-5 mr-2" />
          Baixar Catálogo
        </a>
      </div>
    </div>
  );
};

export default CatalogCard;