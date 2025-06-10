import React, { useState } from 'react';
import { Heart, Plus, X, Minus, Package, Clock } from 'lucide-react';
import { Product } from '../types/product';
import { useCartStore } from '../store/useCartStore';
import { useFavoritesStore } from '../store/useFavoritesStore';
import toast from 'react-hot-toast';

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
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-fade-in">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 space-y-4">
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
          
          <div className="p-6 border-t md:border-t-0 md:border-l border-gray-200">
            <div className="mb-6">
              <p className="text-sm text-green-600 font-medium mb-1">
                {product.brand === 'bom-amoroso'
                  ? 'Bom Amoroso'
                  : product.brand === 'luv-alecrim'
                  ? 'Luv e Alecrim'
                  : 'Natuka'}
              </p>
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
            
            <div className="space-y-6 mb-6">
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

interface BestSellersCarouselProps {
  products: Product[];
}

const BestSellersCarousel: React.FC<BestSellersCarouselProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const addItem = useCartStore((state) => state.addItem);
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Mais Vendidos</h2>
        
        {/* Grid responsivo: 5 colunas em telas grandes, 2 em telas menores */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="cursor-pointer"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 sm:h-40 lg:h-48 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <button
                    onClick={(e) => toggleFavorite(product, e)}
                    className="absolute top-2 right-2 p-1.5 lg:p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors z-10"
                  >
                    <Heart
                      className={`h-4 w-4 lg:h-5 lg:w-5 ${
                        isFavorite(product.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                </div>
                <div className="p-3 lg:p-4 flex-1 flex flex-col">
                  <p className="text-xs lg:text-sm text-green-600 font-medium mb-1">
                    {product.brand === 'bom-amoroso'
                      ? 'Bom Amoroso'
                      : product.brand === 'luv-alecrim'
                      ? 'Luv e Alecrim'
                      : 'Natuka'}
                  </p>
                  <h3 className="text-sm lg:text-lg font-semibold mb-2 line-clamp-2 flex-1">
                    {product.name}
                  </h3>
                  <div className="space-y-1 mb-3 lg:mb-4">
                    <p className="text-sm lg:text-lg font-bold text-green-600">
                      R$ {product.price.toFixed(2)}
                    </p>
                    <p className="text-xs lg:text-sm text-gray-600">
                      Pix: R$ {calculatePixPrice(product.price).toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addItem(product);
                      toast.success('Produto adicionado ao carrinho');
                    }}
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center text-xs lg:text-sm"
                  >
                    <Plus className="h-3 w-3 lg:h-5 lg:w-5 mr-1 lg:mr-2" />
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
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
    </section>
  );
};

export default BestSellersCarousel;