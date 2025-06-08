import React, { useState } from 'react';
import { Heart, Plus, X, Minus, Package, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { useFavoritesStore } from '../store/useFavoritesStore';
import { Product } from '../types/product';
import toast from 'react-hot-toast';

const chewers: Product[] = [
  {
    id: 'chewer-1',
    brand: 'natuka',
    name: 'Mordedor de Corda Natural',
    description: 'Mordedor de corda resistente',
    price: 39.90,
    image: 'https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg',
    images: [
      'https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg',
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg'
    ],
    details: 'Mordedor de corda natural, resistente e seguro para cães de todos os portes.'
  },
  {
    id: 'chewer-2',
    brand: 'natuka',
    name: 'Bola Mordedora Texturizada',
    description: 'Bola com textura para massagem',
    price: 40.90,
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
    images: [
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg'
    ],
    details: 'Bola mordedora com textura especial que massageia as gengivas do seu pet.'
  },
  {
    id: 'chewer-3',
    brand: 'natuka',
    name: 'Osso de Nylon Resistente',
    description: 'Osso sintético ultra resistente',
    price: 41.90,
    image: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg',
    images: [
      'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg',
      'https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg'
    ],
    details: 'Osso de nylon ultra resistente, ideal para cães destruidores e mastigadores compulsivos.'
  },
  {
    id: 'chewer-4',
    brand: 'natuka',
    name: 'Mordedor Kong Classic',
    description: 'Mordedor recheável premium',
    price: 42.90,
    image: 'https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg',
    images: [
      'https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg',
      'https://images.pexels.com/photos/6816860/pexels-photo-6816860.jpeg'
    ],
    details: 'Mordedor Kong clássico, pode ser recheado com petiscos para maior diversão.'
  },
  {
    id: 'chewer-5',
    brand: 'natuka',
    name: 'Corda Dental Tripla',
    description: 'Corda com três nós para limpeza',
    price: 43.90,
    image: 'https://images.pexels.com/photos/6816860/pexels-photo-6816860.jpeg',
    images: [
      'https://images.pexels.com/photos/6816860/pexels-photo-6816860.jpeg',
      'https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg'
    ],
    details: 'Corda dental com três nós que ajuda na limpeza dos dentes durante a brincadeira.'
  },
  {
    id: 'chewer-6',
    brand: 'natuka',
    name: 'Mordedor de Borracha Natural',
    description: 'Borracha 100% natural',
    price: 44.90,
    image: 'https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg',
    images: [
      'https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg',
      'https://images.pexels.com/photos/7788654/pexels-photo-7788654.jpeg'
    ],
    details: 'Mordedor feito com borracha 100% natural, seguro e resistente.'
  },
  {
    id: 'chewer-7',
    brand: 'natuka',
    name: 'Brinquedo Interativo Puzzle',
    description: 'Estimula a inteligência',
    price: 45.90,
    image: 'https://images.pexels.com/photos/7788654/pexels-photo-7788654.jpeg',
    images: [
      'https://images.pexels.com/photos/7788654/pexels-photo-7788654.jpeg',
      'https://images.pexels.com/photos/7788239/pexels-photo-7788239.jpeg'
    ],
    details: 'Brinquedo puzzle que estimula a inteligência e mantém o cão entretido por horas.'
  },
  {
    id: 'chewer-8',
    brand: 'natuka',
    name: 'Mordedor Gelado Refrescante',
    description: 'Pode ser congelado',
    price: 46.90,
    image: 'https://images.pexels.com/photos/7788239/pexels-photo-7788239.jpeg',
    images: [
      'https://images.pexels.com/photos/7788239/pexels-photo-7788239.jpeg',
      'https://images.pexels.com/photos/7788236/pexels-photo-7788236.jpeg'
    ],
    details: 'Mordedor que pode ser congelado, ideal para alívio durante a dentição.'
  },
  {
    id: 'chewer-9',
    brand: 'natuka',
    name: 'Frisbee Mordedor Flexível',
    description: 'Frisbee resistente a mordidas',
    price: 47.90,
    image: 'https://images.pexels.com/photos/7788236/pexels-photo-7788236.jpeg',
    images: [
      'https://images.pexels.com/photos/7788236/pexels-photo-7788236.jpeg',
      'https://images.pexels.com/photos/7788901/pexels-photo-7788901.jpeg'
    ],
    details: 'Frisbee flexível e resistente, perfeito para brincadeiras ao ar livre.'
  },
  {
    id: 'chewer-10',
    brand: 'natuka',
    name: 'Mordedor Flutuante Aquático',
    description: 'Ideal para brincadeiras na água',
    price: 48.90,
    image: 'https://images.pexels.com/photos/7788901/pexels-photo-7788901.jpeg',
    images: [
      'https://images.pexels.com/photos/7788901/pexels-photo-7788901.jpeg',
      'https://images.pexels.com/photos/7788903/pexels-photo-7788903.jpeg'
    ],
    details: 'Mordedor flutuante, perfeito para brincadeiras na piscina ou praia.'
  },
  {
    id: 'chewer-11',
    brand: 'natuka',
    name: 'Osso com Sabor Bacon',
    description: 'Mordedor saborizado',
    price: 49.90,
    image: 'https://images.pexels.com/photos/7788903/pexels-photo-7788903.jpeg',
    images: [
      'https://images.pexels.com/photos/7788903/pexels-photo-7788903.jpeg',
      'https://images.pexels.com/photos/7788904/pexels-photo-7788904.jpeg'
    ],
    details: 'Osso mordedor com delicioso sabor de bacon que mantém o interesse do cão.'
  },
  {
    id: 'chewer-12',
    brand: 'natuka',
    name: 'Bola com Corda Integrada',
    description: 'Dois brinquedos em um',
    price: 50.90,
    image: 'https://images.pexels.com/photos/7788904/pexels-photo-7788904.jpeg',
    images: [
      'https://images.pexels.com/photos/7788904/pexels-photo-7788904.jpeg',
      'https://images.pexels.com/photos/7788905/pexels-photo-7788905.jpeg'
    ],
    details: 'Bola com corda integrada, oferece duas formas de diversão em um só produto.'
  },
  {
    id: 'chewer-13',
    brand: 'natuka',
    name: 'Mordedor Dental Massageador',
    description: 'Massageia gengivas e limpa dentes',
    price: 51.90,
    image: 'https://images.pexels.com/photos/7788905/pexels-photo-7788905.jpeg',
    images: [
      'https://images.pexels.com/photos/7788905/pexels-photo-7788905.jpeg',
      'https://images.pexels.com/photos/7788906/pexels-photo-7788906.jpeg'
    ],
    details: 'Mordedor com textura especial que massageia as gengivas e limpa os dentes.'
  },
  {
    id: 'chewer-14',
    brand: 'natuka',
    name: 'Brinquedo Dispensador de Ração',
    description: 'Libera ração durante a brincadeira',
    price: 52.90,
    image: 'https://images.pexels.com/photos/7788906/pexels-photo-7788906.jpeg',
    images: [
      'https://images.pexels.com/photos/7788906/pexels-photo-7788906.jpeg',
      'https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg'
    ],
    details: 'Brinquedo inteligente que libera ração conforme o cão brinca, estimulando a atividade.'
  },
  {
    id: 'chewer-15',
    brand: 'natuka',
    name: 'Mordedor Luminoso LED',
    description: 'Brilha no escuro',
    price: 53.90,
    image: 'https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg',
    images: [
      'https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg',
      'https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg'
    ],
    details: 'Mordedor com LED que brilha no escuro, perfeito para brincadeiras noturnas.'
  },
  {
    id: 'chewer-16',
    brand: 'natuka',
    name: 'Corda de Algodão Orgânico',
    description: 'Fibras naturais orgânicas',
    price: 54.90,
    image: 'https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg',
    images: [
      'https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg',
      'https://images.pexels.com/photos/6568461/pexels-photo-6568461.jpeg'
    ],
    details: 'Corda feita com algodão 100% orgânico, segura e ecológica.'
  },
  {
    id: 'chewer-17',
    brand: 'natuka',
    name: 'Mordedor Antibacteriano',
    description: 'Com propriedades antibacterianas',
    price: 55.90,
    image: 'https://images.pexels.com/photos/6568461/pexels-photo-6568461.jpeg',
    images: [
      'https://images.pexels.com/photos/6568461/pexels-photo-6568461.jpeg',
      'https://images.pexels.com/photos/7788658/pexels-photo-7788658.jpeg'
    ],
    details: 'Mordedor com propriedades antibacterianas que ajuda na higiene bucal.'
  },
  {
    id: 'chewer-18',
    brand: 'natuka',
    name: 'Bola Sonora Musical',
    description: 'Emite sons divertidos',
    price: 56.90,
    image: 'https://images.pexels.com/photos/7788658/pexels-photo-7788658.jpeg',
    images: [
      'https://images.pexels.com/photos/7788658/pexels-photo-7788658.jpeg',
      'https://images.pexels.com/photos/7788659/pexels-photo-7788659.jpeg'
    ],
    details: 'Bola que emite sons musicais divertidos, estimulando o interesse do cão.'
  },
  {
    id: 'chewer-19',
    brand: 'natuka',
    name: 'Mordedor Ecológico Bambu',
    description: 'Feito com fibra de bambu',
    price: 57.90,
    image: 'https://images.pexels.com/photos/7788659/pexels-photo-7788659.jpeg',
    images: [
      'https://images.pexels.com/photos/7788659/pexels-photo-7788659.jpeg',
      'https://images.pexels.com/photos/1938123/pexels-photo-1938123.jpeg'
    ],
    details: 'Mordedor ecológico feito com fibra de bambu, sustentável e resistente.'
  },
  {
    id: 'chewer-20',
    brand: 'natuka',
    name: 'Kit Mordedores Variados',
    description: 'Conjunto com 5 mordedores',
    price: 58.90,
    image: 'https://images.pexels.com/photos/1938123/pexels-photo-1938123.jpeg',
    images: [
      'https://images.pexels.com/photos/1938123/pexels-photo-1938123.jpeg',
      'https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg'
    ],
    details: 'Kit completo com 5 mordedores diferentes para máxima diversão e variedade.'
  }
];

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (quantity: number) => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isFavorite,
  onToggleFavorite,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const calculatePixPrice = (price: number) => price * 0.9;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                    selectedImage === index
                      ? 'border-green-500'
                      : 'border-transparent hover:border-green-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-4">{product.details}</p>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Package className="h-4 w-4" />
                <span>Estoque disponível</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>Entrega em até 3 dias úteis</span>
              </div>
            </div>
            
            <div>
              <p className="text-2xl font-bold text-green-600">
                R$ {product.price.toFixed(2)}
              </p>
              <p className="text-gray-600">
                Pix: R$ {calculatePixPrice(product.price).toFixed(2)}
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <label className="text-gray-700">Quantidade:</label>
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 border-x min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  onAddToCart(quantity);
                  toast.success('Produto adicionado ao carrinho');
                }}
                className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                <Plus className="h-5 w-5 mr-2" />
                Adicionar ao Carrinho
              </button>
              <button
                onClick={onToggleFavorite}
                className={`p-3 rounded-lg border ${
                  isFavorite
                    ? 'bg-red-50 border-red-200'
                    : 'border-gray-200 hover:bg-gray-50'
                } transition-colors`}
              >
                <Heart
                  className={`h-6 w-6 ${
                    isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChewersPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const addItem = useCartStore((state) => state.addItem);
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  const totalPages = Math.ceil(chewers.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = chewers.slice(indexOfFirstProduct, indexOfLastProduct);

  const toggleFavorite = (product: Product, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }
    
    if (isFavorite(product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  const calculatePixPrice = (price: number) => {
    return price * 0.9;
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-green-800 mb-8">
        Mordedores
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className="cursor-pointer"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <button
                  onClick={(e) => toggleFavorite(product, e)}
                  className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors z-10"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      isFavorite(product.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <div className="space-y-1 mb-4">
                  <p className="text-lg font-bold text-green-600">
                    R$ {product.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-600">
                    Pix: R$ {calculatePixPrice(product.price).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addItem(product);
                    toast.success('Produto adicionado ao carrinho');
                  }}
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center items-center space-x-4">
        <button
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            currentPage === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-green-600 text-white hover:bg-green-700'
          } transition-colors`}
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Anterior</span>
        </button>
        
        <div className="text-gray-600">
          Página {currentPage} de {totalPages}
        </div>
        
        <button
          onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            currentPage === totalPages
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-green-600 text-white hover:bg-green-700'
          } transition-colors`}
        >
          <span>Próxima</span>
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(quantity) => {
            Array(quantity).fill(null).forEach(() => addItem(selectedProduct));
            setSelectedProduct(null);
          }}
          isFavorite={isFavorite(selectedProduct.id)}
          onToggleFavorite={() => toggleFavorite(selectedProduct)}
        />
      )}
    </div>
  );
};

export default ChewersPage;