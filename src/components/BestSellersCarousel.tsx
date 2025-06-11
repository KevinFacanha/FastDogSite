import React, { useState, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight, Plus, X, Minus, Package, Clock } from 'lucide-react';
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
  const calculatePixPrice = (price: number) => price - 1.26;

  // Check if product is out of stock
  const isOutOfStock = product.details.toLowerCase().includes('estoque indisponível');

  const getBrandName = (brand: string) => {
    switch (brand) {
      case 'natuka':
        return 'Natuka';
      case 'good-lovin':
        return 'Good Lovin';
      case 'luv':
        return 'Luv';
      case 'alecrim':
        return 'Alecrim';
      default:
        return brand;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-fade-in">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="bg-white dark:bg-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-700">
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
                      ? 'border-green-500 ring-2 ring-green-200 dark:ring-green-800'
                      : 'border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-500'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-contain bg-gray-50 dark:bg-gray-700"
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-6 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-600">
            <div className="mb-6">
              <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-1">
                {getBrandName(product.brand)}
              </p>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{product.details}</p>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Package className="h-4 w-4" />
                <span>{isOutOfStock ? 'Estoque indisponível' : 'Estoque disponível'}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Clock className="h-4 w-4" />
                <span>Entrega em até 3 dias úteis</span>
              </div>
            </div>
            
            <div className="space-y-6 mb-6">
              <div>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  R$ {product.price.toFixed(2)}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  👉 Pix: R$ {calculatePixPrice(product.price).toFixed(2)}
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                  👉 Economize R$ 1,26 no Pix
                </p>
              </div>
              
              {!isOutOfStock && (
                <div className="flex items-center space-x-4">
                  <label className="text-gray-700 dark:text-gray-300">Quantidade:</label>
                  <div className="flex items-center border dark:border-gray-600 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Minus className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    </button>
                    <span className="px-4 py-2 border-x dark:border-gray-600 min-w-[3rem] text-center text-gray-800 dark:text-gray-200">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Plus className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex space-x-4">
              {isOutOfStock ? (
                <button
                  disabled
                  className="flex-1 bg-gray-400 dark:bg-gray-600 text-white py-3 rounded-lg cursor-not-allowed flex items-center justify-center"
                >
                  Produto Esgotado
                </button>
              ) : (
                <button
                  onClick={() => {
                    onAddToCart(quantity);
                    toast.success('Produto adicionado ao carrinho');
                  }}
                  className="flex-1 bg-green-600 dark:bg-green-700 text-white py-3 rounded-lg hover:bg-green-700 dark:hover:bg-green-800 transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Adicionar ao Carrinho
                </button>
              )}
              <button
                onClick={isOutOfStock ? undefined : onToggleFavorite}
                disabled={isOutOfStock}
                className={`p-3 rounded-lg border transition-colors ${
                  isOutOfStock
                    ? 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 cursor-not-allowed'
                    : isFavorite
                    ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                    : 'border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <Heart
                  className={`h-6 w-6 ${
                    isOutOfStock
                      ? 'text-gray-400 dark:text-gray-500'
                      : isFavorite 
                      ? 'fill-red-500 text-red-500' 
                      : 'text-gray-400 dark:text-gray-500'
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const addItem = useCartStore((state) => state.addItem);
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  useEffect(() => {
    const updateProductsPerPage = () => {
      if (window.innerWidth <= 767) {
        setProductsPerPage(1); // Telas pequenas (mobile)
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
        setProductsPerPage(2); // Telas médias (tablet)
      } else {
        setProductsPerPage(5); // Telas grandes (desktop)
      }
    };

    updateProductsPerPage();
    window.addEventListener('resize', updateProductsPerPage);
    return () => window.removeEventListener('resize', updateProductsPerPage);
  }, []);

  const maxIndex = Math.max(0, products.length - productsPerPage);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const toggleFavorite = (product: Product, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }
    
    // Check if product is out of stock
    const isOutOfStock = product.details.toLowerCase().includes('estoque indisponível');
    if (isOutOfStock) {
      toast.error('Não é possível favoritar produtos indisponíveis');
      return;
    }
    
    if (isFavorite(product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  const calculatePixPrice = (price: number) => {
    return price - 1.26;
  };

  const getCardWidth = () => {
    if (productsPerPage === 1) return 'w-full';
    if (productsPerPage === 2) return 'w-1/2';
    return 'w-1/5';
  };

  const getBrandName = (brand: string) => {
    switch (brand) {
      case 'natuka':
        return 'Natuka';
      case 'good-lovin':
        return 'Good Lovin';
      case 'luv':
        return 'Luv';
      case 'alecrim':
        return 'Alecrim';
      default:
        return brand;
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-800 dark:text-green-400 mb-8 text-center">Mais Vendidos</h2>
        
        {/* Container com padding lateral para as setas */}
        <div className="relative px-8 md:px-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / productsPerPage}%)`,
              }}
            >
              {products.map((product) => {
                const isOutOfStock = product.details.toLowerCase().includes('estoque indisponível');
                
                return (
                  <div
                    key={product.id}
                    className={`flex-none ${getCardWidth()} px-2`}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group h-full flex flex-col">
                      <div className="relative">
                        <div className="bg-gray-50 dark:bg-gray-600">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <button
                          onClick={(e) => toggleFavorite(product, e)}
                          disabled={isOutOfStock}
                          className={`absolute top-2 right-2 p-2 rounded-full shadow-md transition-colors z-10 ${
                            isOutOfStock
                              ? 'bg-gray-200 dark:bg-gray-600 cursor-not-allowed'
                              : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          <Heart
                            className={`h-5 w-5 ${
                              isOutOfStock
                                ? 'text-gray-400 dark:text-gray-500'
                                : isFavorite(product.id)
                                ? 'fill-red-500 text-red-500'
                                : 'text-gray-400 dark:text-gray-500'
                            }`}
                          />
                        </button>
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-1">
                          {getBrandName(product.brand)}
                        </p>
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2 flex-1 text-center text-gray-900 dark:text-gray-100">
                          {product.name}
                        </h3>
                        <div className="space-y-1 mb-4 text-center">
                          <p className="text-lg font-bold text-green-600 dark:text-green-400">
                            R$ {product.price.toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            👉 Pix: R$ {calculatePixPrice(product.price).toFixed(2)}
                          </p>
                          <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                            👉 Economize R$ 1,26 no Pix
                          </p>
                        </div>
                        {isOutOfStock ? (
                          <button
                            disabled
                            className="w-full bg-gray-400 dark:bg-gray-600 text-white py-2 rounded-lg cursor-not-allowed flex items-center justify-center"
                          >
                            Produto Esgotado
                          </button>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              addItem(product);
                              toast.success('Produto adicionado ao carrinho');
                            }}
                            className="w-full bg-green-600 dark:bg-green-700 text-white py-2 rounded-lg hover:bg-green-700 dark:hover:bg-green-800 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
                          >
                            <Plus className="h-5 w-5 mr-2" />
                            Adicionar
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Seta Esquerda - Posicionamento melhorado */}
          {currentIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 md:p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-20 border dark:border-gray-600"
              aria-label="Produtos anteriores"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-green-600 dark:text-green-400" />
            </button>
          )}
          
          {/* Seta Direita - Posicionamento melhorado */}
          {currentIndex < maxIndex && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 md:p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-20 border dark:border-gray-600"
              aria-label="Próximos produtos"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-green-600 dark:text-green-400" />
            </button>
          )}
        </div>

        {/* Indicadores de navegação para mobile */}
        {productsPerPage === 1 && products.length > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: products.length }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-green-600 dark:bg-green-400'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Ir para produto ${index + 1}`}
              />
            ))}
          </div>
        )}
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