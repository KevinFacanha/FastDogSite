import React, { useState } from 'react';
import { Heart, Plus, X, Minus, Package, Clock, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { useFavoritesStore } from '../store/useFavoritesStore';
import { Product, ProductVariant } from '../types/product';
import { formatPrice, formatFullPrice } from '../utils/formatPrice';
import toast from 'react-hot-toast';

// Produtos adequados para cães de porte médio
const mediumDogProducts: Product[] = [
  {
    id: 'chewable-5',
    brand: 'natuka',
    name: 'Natuka Knot Plus',
    description: 'Mastigável natural de couro bovino em formato de nó (knot)',
    price: 35.90,
    image: './catalogs/petiscosMastigaveis/Natuka Knotplus.JPG',
    images: [
      './catalogs/petiscosMastigaveis/Natuka Knotplus.JPG',
      './catalogs/petiscosMastigaveis/knotplus.JPG'
    ],
    details: 'Feito 100% de couro bovino, desidratado lentamente sem aditivos, conservantes ou corantes. Nível de resistência alto, ideal para limpeza dental e estímulo da mastigação. Cada embalagem contém 1 unidade. Indicado para cães de médio a grande porte.'
  },
  {
    id: 'chewable-18',
    brand: 'luv',
    name: 'Luv Mat',
    description: 'Mastigável natural de pele bovina em formato quadrado',
    price: 57.49,
    image: './catalogs/petiscosMastigaveis/luv mat.jpeg',
    images: [
      './catalogs/petiscosMastigaveis/luv mat.jpeg',
      './catalogs/petiscosMastigaveis/mat luv.JPG'
    ],
    details: 'Petisco 100% natural feito de pele bovina com pelos, desidratado lentamente em temperatura controlada.\nFormato quadrado ( 20 x 20 cm), sem base para roer — mais desafiador para o pet.\nDificuldade: difícil; indicado para cães saudáveis de porte médio e grande.\nAuxilia na limpeza dental, sacia o instinto de roer, protege móveis e oferece enriquecimento ambiental — 20 min de mastigação equivalem a 40 min de caminhada.\nEmbalagem com 1 unidade.\nConservar em local seco e arejado; após aberto, consumir em até 15 dias.'
  },
  {
    id: 'chewer-4',
    brand: 'good-lovin',
    name: 'Chifre Bovino Good Lovin',
    description: 'Mastigável natural de chifre bovino',
    price: 38.90,
    image: './catalogs/mordedores/Chifre.JPG',
    images: [
      './catalogs/mordedores/Chifre.JPG',
      './catalogs/mordedores/bovino chifre good.JPG'
    ],
    details: 'Petisco 100% natural feito de chifre bovino inteiro, higienizado e desidratado lentamente. Muito resistente e durável, ideal para mastigação prolongada e limpeza dental. Indicado para cães de porte médio e grande. Embalagem com 1 unidade. '
  },
  {
    id: 'chewer-6',
    brand: 'good-lovin',
    name: 'Orelha de Boi Jumbo Good Lovin (sem ouvido)',
    description: 'Mastigável natural de orelha bovina sem ouvido',
    price: 12.90,
    image: './catalogs/mordedores/orelha de boi.JPG',
    images: [
      './catalogs/mordedores/orelha de boi.JPG',
      './catalogs/mordedores/orelha de boi.JPG'
    ],
    details: 'Petisco 100% natural feito de orelha de boi higienizada, esterilizada e desidratada lentamente. Muito crocante, alta palatabilidade e durabilidade, ideal para distração prolongada e enriquecimento ambiental. Auxilia na higiene bucal e controle de tártaro. Indicado para cães de médio e grande porte. Embalagem com 1 unidade.'
  },
  {
    id: 'chewer-7',
    brand: 'good-lovin',
    name: 'Orelha de Boi Jumbo com Ouvido Good Lovin',
    description: 'Mastigável natural de orelha bovina com ouvido',
    price: 13.90,
    image: './catalogs/mordedores/com ouvido.JPG',
    images: [
      './catalogs/mordedores/com ouvido.JPG',
      './catalogs/mordedores/Orelha de boi com ouvido.JPG'
    ],
    details: 'Petisco 100% natural feito de orelha de boi (com duto auditivo), higienizada, esterilizada e desidratada lentamente. Textura crocante e mais resistente, ideal para distração prolongada, enriquecimento ambiental e controle de ansiedade de separação. Auxilia na limpeza dental e redução de tártaro. Indicado para cães de médio e grande porte. Embalagem com 1 unidade.'
  },
  {
    id: 'chewable-23',
    brand: 'alecrim',
    name: 'Rocambole Mineiro Miúdo Alecrim Pet',
    description: 'Mastigável natural de pele bovina enrolada',
    price: 29.90,
    image: './catalogs/petiscosMastigaveis/rocambole mineiro.JPG',
    images: [
      './catalogs/petiscosMastigaveis/rocambole mineiro.JPG',
      './catalogs/petiscosMastigaveis/mineiro rocambole.JPG'
    ],
    details: 'Petisco 100% natural feito de pele bovina enrolada e desidratada lentamente. Alta resistência, proporciona enriquecimento ambiental, distração prolongada e exercício da mandíbula. Auxilia na limpeza dental e alívio da ansiedade. Indicado para cães de todos os portes e idades — ideal para mordida forte. Embalagem com 1 unidade.'
  },
  {
    id: 'chewable-16',
    brand: 'luv',
    name: 'Traqueia Bovina Luv',
    description: 'Mastigável natural de cartilagem bovina',
    price: 44.90,
    image: './catalogs/petiscosMastigaveis/Traqueia Bovina.jpeg',
    images: [
      './catalogs/petiscosMastigaveis/Traqueia Bovina.jpeg',
      './catalogs/petiscosMastigaveis/bovina traqueia.JPG',
    ],
    details: 'Petisco 100% natural feito de traqueia bovina desidratada lentamente em temperatura controlada. Rico em glucosamina e condroitina, favorece articulações e limpeza dental. Mastigável leve (nível fácil), adequado para cães de todos os portes. Embalagem com 200g.'
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
  }
];

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (quantity: number, variant?: ProductVariant) => void;
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
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.hasVariants ? product.variants?.[0] : undefined
  );
  
  const getCurrentPrice = () => {
    return selectedVariant ? selectedVariant.price : product.price;
  };
  
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
              {/* Seleção de Variantes (Tamanhos) */}
              {product.hasVariants && product.variants && (
                <div>
                  <label className="text-gray-700 dark:text-gray-300 font-medium mb-3 block">
                    Selecione o tamanho:
                  </label>
                  <div className="space-y-2">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.size}
                        onClick={() => setSelectedVariant(variant)}
                        className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                          selectedVariant?.size === variant.size
                            ? 'border-green-500 bg-green-50 dark:bg-green-900/20 dark:border-green-400'
                            : 'border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-500'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-medium text-gray-800 dark:text-gray-200">
                              Tamanho {variant.size}
                            </span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {variant.description}
                            </p>
                          </div>
                          <span className="font-bold text-green-600 dark:text-green-400">
                            {formatFullPrice(variant.price)}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {formatFullPrice(getCurrentPrice())}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  👉 Pix: {formatFullPrice(calculatePixPrice(getCurrentPrice()))}
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
                    onAddToCart(quantity, selectedVariant);
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

const MediumDogsPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const productsPerPage = 6;
  const addItem = useCartStore((state) => state.addItem);
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();
  const productsGridRef = React.useRef<HTMLDivElement>(null);

  // Filtrar produtos baseado no termo de busca
  const filteredProducts = mediumDogProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Reset para primeira página quando buscar
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Função para detectar se é mobile
  const isMobile = () => {
    return window.innerWidth <= 768;
  };

  // Função para scroll suave para o grid de produtos (apenas mobile)
  const scrollToProductsGrid = () => {
    if (isMobile() && productsGridRef.current) {
      // Usar setTimeout para garantir que o DOM foi atualizado
      setTimeout(() => {
        productsGridRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  // Função para navegar para página anterior
  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
    scrollToProductsGrid();
  };

  // Função para navegar para próxima página
  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
    scrollToProductsGrid();
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
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-400">
          Produtos para Cães de Porte Médio
        </h1>
        
        {/* Campo de Busca */}
        <div className="relative w-full sm:w-80">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      {/* Mostrar mensagem se não houver resultados */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">Nenhum produto encontrado para "{searchTerm}"</p>
        </div>
      ) : (
        <>
          <div ref={productsGridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {currentProducts.map((product) => {
              const isOutOfStock = product.details.toLowerCase().includes('estoque indisponível');
              
              return (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="cursor-pointer"
                >
                  <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="relative">
                      <div className="bg-gray-50 dark:bg-gray-600">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 sm:h-64 object-contain transition-transform duration-300 group-hover:scale-110"
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
                    <div className="p-4">
                      <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-1">
                        {getBrandName(product.brand)}
                      </p>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{product.name}</h3>
                      <div className="space-y-1 mb-4">
                        <p className="text-lg font-bold text-green-600 dark:text-green-400">
                          {formatFullPrice(product.price)}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          👉 Pix: {formatFullPrice(calculatePixPrice(product.price))}
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
                          Adicionar ao Carrinho
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Paginação - só mostra se houver mais de uma página */}
          {totalPages > 1 && (
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:space-x-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg w-full sm:w-auto justify-center ${
                  currentPage === 1
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    : 'bg-green-600 dark:bg-green-700 text-white hover:bg-green-700 dark:hover:bg-green-800'
                } transition-colors`}
              >
                <ChevronLeft className="h-5 w-5" />
                <span>Anterior</span>
              </button>
              
              <div className="text-gray-600 dark:text-gray-300 text-center">
                Página {currentPage} de {totalPages}
              </div>
              
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg w-full sm:w-auto justify-center ${
                  currentPage === totalPages
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    : 'bg-green-600 dark:bg-green-700 text-white hover:bg-green-700 dark:hover:bg-green-800'
                } transition-colors`}
              >
                <span>Próxima</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </>
      )}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(quantity, variant) => {
            Array(quantity).fill(null).forEach(() => addItem(selectedProduct, variant));
            setSelectedProduct(null);
          }}
          isFavorite={isFavorite(selectedProduct.id)}
          onToggleFavorite={() => toggleFavorite(selectedProduct)}
        />
      )}
    </div>
  );
};

export default MediumDogsPage;