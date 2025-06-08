import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Plus, X, Minus, Package, Clock } from 'lucide-react';
import { products } from '../data/products';
import { useCartStore } from '../store/useCartStore';
import { Product } from '../types/product';

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

  // Simulated product images for the gallery
  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

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
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
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
                    className="w-full h-full object-cover"
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
                onClick={() => onAddToCart(quantity)}
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

const BrandPage: React.FC = () => {
  const { brand } = useParams<{ brand: string }>();
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const addItem = useCartStore((state) => state.addItem);

  const brandProducts = products.filter((product) => product.brand === brand);

  const getBrandName = (brandId: string) => {
    switch (brandId) {
      case 'natuka':
        return 'Natuka';
      case 'luv-alecrim':
        return 'Luv e Alecrim';
      case 'bom-amoroso':
        return 'GoodLoving';
      default:
        return brandId;
    }
  };

  const toggleFavorite = (productId: string, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const calculatePixPrice = (price: number) => {
    return price * 0.9;
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-green-800 mb-8">
        {getBrandName(brand || '')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {brandProducts.map((product) => (
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
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <button
                  onClick={(e) => toggleFavorite(product.id, e)}
                  className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors z-10"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites.has(product.id)
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

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(quantity) => {
            Array(quantity).fill(null).forEach(() => addItem(selectedProduct));
            setSelectedProduct(null);
          }}
          isFavorite={favorites.has(selectedProduct.id)}
          onToggleFavorite={() => toggleFavorite(selectedProduct.id)}
        />
      )}
    </div>
  );
};

export default BrandPage;