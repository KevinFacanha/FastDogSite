import React, { useState } from 'react';
import { Heart, Plus, X, Minus, Package, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { useFavoritesStore } from '../store/useFavoritesStore';
import { Product } from '../types/product';
import toast from 'react-hot-toast';

const chewables: Product[] = [
  {
    id: 'chewable-1',
    brand: 'natuka',
    name: 'Palito Mastigável Natural',
    description: 'Palito natural para higiene bucal',
    price: 24.90,
    image: 'https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg',
    images: [
      'https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg',
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg'
    ],
    details: 'Palito mastigável natural que auxilia na limpeza dos dentes e diversão do seu pet.'
  },
  {
    id: 'chewable-2',
    brand: 'natuka',
    name: 'Osso Mastigável Premium',
    description: 'Osso resistente para cães grandes',
    price: 25.90,
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
    images: [
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg'
    ],
    details: 'Osso mastigável premium, ideal para cães de grande porte que gostam de mastigar.'
  },
  {
    id: 'chewable-3',
    brand: 'natuka',
    name: 'Couro Bovino Desidratado',
    description: 'Couro natural para mastigação',
    price: 26.90,
    image: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg',
    images: [
      'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg',
      'https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg'
    ],
    details: 'Couro bovino desidratado, 100% natural e seguro para mastigação prolongada.'
  },
  {
    id: 'chewable-4',
    brand: 'natuka',
    name: 'Chifre de Búfalo',
    description: 'Mastigável duradouro natural',
    price: 27.90,
    image: 'https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg',
    images: [
      'https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg',
      'https://images.pexels.com/photos/6816860/pexels-photo-6816860.jpeg'
    ],
    details: 'Chifre de búfalo natural, extremamente duradouro e rico em cálcio.'
  },
  {
    id: 'chewable-5',
    brand: 'natuka',
    name: 'Tendão Bovino Trançado',
    description: 'Tendão natural trançado',
    price: 28.90,
    image: 'https://images.pexels.com/photos/6816860/pexels-photo-6816860.jpeg',
    images: [
      'https://images.pexels.com/photos/6816860/pexels-photo-6816860.jpeg',
      'https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg'
    ],
    details: 'Tendão bovino trançado, rico em proteínas e ideal para mastigação.'
  },
  {
    id: 'chewable-6',
    brand: 'natuka',
    name: 'Orelha de Porco Desidratada',
    description: 'Petisco mastigável crocante',
    price: 29.90,
    image: 'https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg',
    images: [
      'https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg',
      'https://images.pexels.com/photos/7788654/pexels-photo-7788654.jpeg'
    ],
    details: 'Orelha de porco desidratada, crocante e saborosa para cães de todos os portes.'
  },
  {
    id: 'chewable-7',
    brand: 'natuka',
    name: 'Pata de Frango Desidratada',
    description: 'Rica em glucosamina natural',
    price: 30.90,
    image: 'https://images.pexels.com/photos/7788654/pexels-photo-7788654.jpeg',
    images: [
      'https://images.pexels.com/photos/7788654/pexels-photo-7788654.jpeg',
      'https://images.pexels.com/photos/7788239/pexels-photo-7788239.jpeg'
    ],
    details: 'Pata de frango desidratada, rica em glucosamina para saúde das articulações.'
  },
  {
    id: 'chewable-8',
    brand: 'natuka',
    name: 'Traqueia Bovina',
    description: 'Mastigável rico em cartilagem',
    price: 31.90,
    image: 'https://images.pexels.com/photos/7788239/pexels-photo-7788239.jpeg',
    images: [
      'https://images.pexels.com/photos/7788239/pexels-photo-7788239.jpeg',
      'https://images.pexels.com/photos/7788236/pexels-photo-7788236.jpeg'
    ],
    details: 'Traqueia bovina rica em cartilagem, excelente para saúde articular.'
  },
  {
    id: 'chewable-9',
    brand: 'natuka',
    name: 'Costela Bovina Defumada',
    description: 'Sabor defumado irresistível',
    price: 32.90,
    image: 'https://images.pexels.com/photos/7788236/pexels-photo-7788236.jpeg',
    images: [
      'https://images.pexels.com/photos/7788236/pexels-photo-7788236.jpeg',
      'https://images.pexels.com/photos/7788901/pexels-photo-7788901.jpeg'
    ],
    details: 'Costela bovina defumada com sabor irresistível e textura ideal para mastigação.'
  },
  {
    id: 'chewable-10',
    brand: 'natuka',
    name: 'Pele de Peixe Desidratada',
    description: 'Rica em ômega 3',
    price: 33.90,
    image: 'https://images.pexels.com/photos/7788901/pexels-photo-7788901.jpeg',
    images: [
      'https://images.pexels.com/photos/7788901/pexels-photo-7788901.jpeg',
      'https://images.pexels.com/photos/7788903/pexels-photo-7788903.jpeg'
    ],
    details: 'Pele de peixe desidratada, rica em ômega 3 para pelagem brilhante.'
  },
  {
    id: 'chewable-11',
    brand: 'natuka',
    name: 'Focinho de Porco',
    description: 'Mastigável natural resistente',
    price: 34.90,
    image: 'https://images.pexels.com/photos/7788903/pexels-photo-7788903.jpeg',
    images: [
      'https://images.pexels.com/photos/7788903/pexels-photo-7788903.jpeg',
      'https://images.pexels.com/photos/7788904/pexels-photo-7788904.jpeg'
    ],
    details: 'Focinho de porco natural, resistente e ideal para cães que adoram mastigar.'
  },
  {
    id: 'chewable-12',
    brand: 'natuka',
    name: 'Nervo de Boi Torcido',
    description: 'Mastigável de longa duração',
    price: 35.90,
    image: 'https://images.pexels.com/photos/7788904/pexels-photo-7788904.jpeg',
    images: [
      'https://images.pexels.com/photos/7788904/pexels-photo-7788904.jpeg',
      'https://images.pexels.com/photos/7788905/pexels-photo-7788905.jpeg'
    ],
    details: 'Nervo de boi torcido, mastigável de longa duração rico em proteínas.'
  },
  {
    id: 'chewable-13',
    brand: 'natuka',
    name: 'Casca de Búfalo',
    description: 'Mastigável extra resistente',
    price: 36.90,
    image: 'https://images.pexels.com/photos/7788905/pexels-photo-7788905.jpeg',
    images: [
      'https://images.pexels.com/photos/7788905/pexels-photo-7788905.jpeg',
      'https://images.pexels.com/photos/7788906/pexels-photo-7788906.jpeg'
    ],
    details: 'Casca de búfalo extra resistente, ideal para cães destruidores.'
  },
  {
    id: 'chewable-14',
    brand: 'natuka',
    name: 'Pulmão Bovino Desidratado',
    description: 'Leve e nutritivo',
    price: 37.90,
    image: 'https://images.pexels.com/photos/7788906/pexels-photo-7788906.jpeg',
    images: [
      'https://images.pexels.com/photos/7788906/pexels-photo-7788906.jpeg',
      'https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg'
    ],
    details: 'Pulmão bovino desidratado, leve e nutritivo, ideal para cães idosos.'
  },
  {
    id: 'chewable-15',
    brand: 'natuka',
    name: 'Rabo de Porco Inteiro',
    description: 'Mastigável natural completo',
    price: 38.90,
    image: 'https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg',
    images: [
      'https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg',
      'https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg'
    ],
    details: 'Rabo de porco inteiro, mastigável natural que proporciona horas de diversão.'
  },
  {
    id: 'chewable-16',
    brand: 'natuka',
    name: 'Cartilagem de Tubarão',
    description: 'Rico em condroitina',
    price: 39.90,
    image: 'https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg',
    images: [
      'https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg',
      'https://images.pexels.com/photos/6568461/pexels-photo-6568461.jpeg'
    ],
    details: 'Cartilagem de tubarão rica em condroitina para saúde das articulações.'
  },
  {
    id: 'chewable-17',
    brand: 'natuka',
    name: 'Pescoço de Frango',
    description: 'Crocante e nutritivo',
    price: 40.90,
    image: 'https://images.pexels.com/photos/6568461/pexels-photo-6568461.jpeg',
    images: [
      'https://images.pexels.com/photos/6568461/pexels-photo-6568461.jpeg',
      'https://images.pexels.com/photos/7788658/pexels-photo-7788658.jpeg'
    ],
    details: 'Pescoço de frango crocante, rico em cálcio e fósforo natural.'
  },
  {
    id: 'chewable-18',
    brand: 'natuka',
    name: 'Espinha de Peixe Grande',
    description: 'Mastigável marinho',
    price: 41.90,
    image: 'https://images.pexels.com/photos/7788658/pexels-photo-7788658.jpeg',
    images: [
      'https://images.pexels.com/photos/7788658/pexels-photo-7788658.jpeg',
      'https://images.pexels.com/photos/7788659/pexels-photo-7788659.jpeg'
    ],
    details: 'Espinha de peixe grande, mastigável marinho rico em minerais.'
  },
  {
    id: 'chewable-19',
    brand: 'natuka',
    name: 'Joelho de Porco',
    description: 'Articulação natural',
    price: 42.90,
    image: 'https://images.pexels.com/photos/7788659/pexels-photo-7788659.jpeg',
    images: [
      'https://images.pexels.com/photos/7788659/pexels-photo-7788659.jpeg',
      'https://images.pexels.com/photos/1938123/pexels-photo-1938123.jpeg'
    ],
    details: 'Joelho de porco natural, articulação rica em cartilagem e colágeno.'
  },
  {
    id: 'chewable-20',
    brand: 'natuka',
    name: 'Mix Mastigáveis Premium',
    description: 'Variedade de mastigáveis',
    price: 43.90,
    image: 'https://images.pexels.com/photos/1938123/pexels-photo-1938123.jpeg',
    images: [
      'https://images.pexels.com/photos/1938123/pexels-photo-1938123.jpeg',
      'https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg'
    ],
    details: 'Mix premium com variedade de mastigáveis naturais para máxima diversão.'
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
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

const ChewablesPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const addItem = useCartStore((state) => state.addItem);
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  const totalPages = Math.ceil(chewables.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = chewables.slice(indexOfFirstProduct, indexOfLastProduct);

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
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 md:mb-8">
        Petiscos Mastigáveis
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

export default ChewablesPage;