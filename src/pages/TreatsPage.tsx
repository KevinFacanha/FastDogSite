import React, { useState } from 'react';
import { Heart, Plus, X, Minus, Package, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { useFavoritesStore } from '../store/useFavoritesStore';
import { Product } from '../types/product';
import toast from 'react-hot-toast';

const treats: Product[] = [
{
  id: 'treat-1',
  brand: 'natuka',
  name: 'Tiras de Frango Natuka',
  description: 'Petisco natural desidratado de frango',
  price: 37.90,
  image: '/catalogs/petiscosAgrado/Natuka Tiras de frango.JPG',
  images: [
    '/catalogs/petiscosAgrado/Natuka Tiras de frango.JPG',
    '/catalogs/petiscosAgrado/tiras de frango.jpeg'
  ],
  details: 'Petisco feito 100% de carne de frango desidratada lentamente a baixa temperatura. Rico em proteínas, altamente palatável, pode ser facilmente fracionado para treinos e adequado para cães e gatos. Embalagem com 60g.'
},
  {
    id: 'treat-2',
    brand: 'natuka',
    name: 'Tiras Suínas Natuka',
    description: 'Petisco natural desidratado de suína',
    price: 37.90,
    image: './catalogs/petiscosAgrado/Tiras suína natuka.JPG',
    images: [
      './catalogs/petiscosAgrado/Tiras suína natuka.JPG',
      './catalogs/petiscosAgrado/Natuka Tiras de Suina.JPG'
    ],
    details: 'Petisco feito 100% de filé suíno desidratado lentamente em baixas temperaturas. Rico em proteínas, altamente palatável, pode ser facilmente fracionado para treinos e adequado para cães e gatos. Embalagem com 60g.'
  },
  {
    id: 'treat-3',
    brand: 'natuka',
    name: 'Natuka Pop – Pulmão Bovino',
    description: 'Petisco natural de pulmão bovino',
    price: 30.90,
    image: './catalogs/petiscosAgrado/Natuka Pop.JPG',
    images: [
      './catalogs/petiscosAgrado/Natuka Pop.JPG',
      './catalogs/petiscosAgrado/natuka popp.JPG'
    ],
    details: 'Petisco 100% natural feito de pulmão de boi desidratado lentamente em baixa temperatura. Leve, de baixo teor calórico, altamente atrativo e ideal para treinos e recompensas. Adequado para cães e gatos. Embalagem com 60g.'
  },
  {
    id: 'treat-4',
    brand: 'natuka',
    name: 'Sticks Carnes Nobres Good Lovin',
    description: 'Petisco natural de carnes nobres bovinas',
    price: 34.90,
    image: './catalogs/petiscosAgrado/STICKS CARNES NOBRES.JPG',
    images: [
      './catalogs/petiscosAgrado/STICKS CARNES NOBRES.JPG',
      './catalogs/petiscosAgrado/stick nobre.JPG',
    ],
    details: 'Petisco feito 100% de carne bovina (patinho e lombinho), higienizada e esterilizada, desidratada lentamente. Baixo teor de gordura, 100% natural, ideal para treino e recompensa. Embalagem com 60 g.'
  },
  {
    id: 'treat-5',
    brand: 'natuka',
    name: 'Sticks Filé Mignon Suíno',
    description: 'Petisco natural de filé mignon suíno',
    price: 38.30,
    image: './catalogs/petiscosAgrado/STICKS FILÉ MIGNON SUÍNO.JPG',
    images: [
      './catalogs/petiscosAgrado/STICKS FILÉ MIGNON SUÍNO.JPG',
      './catalogs/petiscosAgrado/filé mignon suíno.png',
    ],
    details: 'Petisco feito 100% de filé mignon suíno higienizado e desidratado lentamente em baixa temperatura. Rico em proteínas, com baixo teor de gordura, altamente palatável, ideal para treinos, recompensas e enriquecimento ambiental. Embalagem com 60g.'
  },
  {
    id: 'treat-6',
    brand: 'natuka',
    name: 'Sticks Focinho Suíno',
    description: 'Petisco natural de focinho suíno',
    price: 33.90,
    image: './catalogs/petiscosAgrado/Focinho Suíno.JPG',
    images: [
      './catalogs/petiscosAgrado/Focinho Suíno.JPG',
      './catalogs/petiscosAgrado/focinho suíno.png',
    ],
    details: 'Snack mastigável feito 100% de focinho suíno desidratado. Rico em proteínas, auxilia na saúde bucal e no alívio do estresse. Embalagem com 6 unidades.'
  },
  {
    id: 'treat-7',
    brand: 'natuka',
    name: 'Snacks Filé Peito de Frango',
    description: 'Petisco natural de filé de peito de frango',
    price: 38.30,
    image: './catalogs/petiscosAgrado/file de frango.JPG',
    images: [
      './catalogs/petiscosAgrado/file de frango.JPG',
      './catalogs/petiscosAgrado/snacks file de peito de frango.JPG'
    ],
    details: 'Petisco feito 100% de filé de peito de frango desidratado, rico em proteínas, auxilia na higiene bucal, alivia o estresse e oferece enriquecimento ambiental. Embalagem com 60g.'
  },

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
  const calculatePixPrice = (price: number) => price - 1.10;

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex justify-center space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                    selectedImage === index
                      ? 'border-green-500 ring-2 ring-green-200'
                      : 'border-gray-200 hover:border-green-300'
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
          
          <div className="space-y-4 md:space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-4">{product.details}</p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Package className="h-4 w-4" />
                  <span>Estoque disponível</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Entrega em até 3 dias úteis</span>
                </div>
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
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
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
                <span className="whitespace-nowrap">Adicionar ao Carrinho</span>
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

const TreatsPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const addItem = useCartStore((state) => state.addItem);
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  const totalPages = Math.ceil(treats.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = treats.slice(indexOfFirstProduct, indexOfLastProduct);

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
    return price - 1.10;
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 md:mb-8">
        Petiscos de Agrado
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
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
                  className="w-full h-48 sm:h-64 object-contain transition-transform duration-300 group-hover:scale-110"
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
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{product.name}</h3>
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

      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:space-x-4">
        <button
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg w-full sm:w-auto justify-center ${
            currentPage === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-green-600 text-white hover:bg-green-700'
          } transition-colors`}
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Anterior</span>
        </button>
        
        <div className="text-gray-600 text-center">
          Página {currentPage} de {totalPages}
        </div>
        
        <button
          onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg w-full sm:w-auto justify-center ${
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

export default TreatsPage;