import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dog, ShoppingCart, Heart, ChevronDown, Menu, X } from 'lucide-react';
import CartModal from './CartModal';
import FavoritesModal from './FavoritesModal';
import { useCartStore } from '../store/useCartStore';
import { useFavoritesStore } from '../store/useFavoritesStore';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const favorites = useFavoritesStore((state) => state.favorites);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsProductsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
      <img src="/catalogs/fastdog-logo2.png" alt="FastDog Logo" className="h-10 w-10" />
      <span className="text-2xl font-bold text-green-700">FastDog</span>
      </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => setIsFavoritesOpen(true)}
              className="relative text-green-800 hover:text-green-600 transition-colors p-2"
            >
              <Heart className="h-6 w-6" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-green-800 hover:text-green-600 transition-colors p-2"
            >
              <ShoppingCart className="h-6 w-6" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-green-800 p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              <li>
                <Link
                  to="/"
                  className="text-green-800 hover:text-green-600 font-medium transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <button
                  className="flex items-center space-x-1 text-green-800 hover:text-green-600 font-medium transition-colors"
                  onClick={() => setIsProductsMenuOpen(!isProductsMenuOpen)}
                  onMouseEnter={() => setIsProductsMenuOpen(true)}
                  onMouseLeave={() => setIsProductsMenuOpen(false)}
                >
                  <span>Produtos</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isProductsMenuOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2"
                    onMouseEnter={() => setIsProductsMenuOpen(true)}
                    onMouseLeave={() => setIsProductsMenuOpen(false)}
                  >
                    <Link
                      to="/treats"
                      className="block px-4 py-2 text-green-800 hover:bg-green-50 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Petiscos de Agrado
                    </Link>
                    <Link
                      to="/chewables"
                      className="block px-4 py-2 text-green-800 hover:bg-green-50 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Petiscos Mastigáveis
                    </Link>
                    <Link
                      to="/chewers"
                      className="block px-4 py-2 text-green-800 hover:bg-green-50 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Mordedores
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <a
                  href="#catalogs"
                  className="text-green-800 hover:text-green-600 font-medium transition-colors"
                >
                  Catálogos
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-green-800 hover:text-green-600 font-medium transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsFavoritesOpen(true)}
                  className="relative text-green-800 hover:text-green-600 transition-colors p-2"
                >
                  <Heart className="h-6 w-6" />
                  {favorites.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {favorites.length}
                    </span>
                  )}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative text-green-800 hover:text-green-600 transition-colors p-2"
                >
                  <ShoppingCart className="h-6 w-6" />
                  {items.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {items.length}
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 bg-white rounded-lg shadow-lg">
            <ul className="py-2">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-green-800 hover:bg-green-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  className="flex items-center justify-between w-full px-4 py-2 text-green-800 hover:bg-green-50 transition-colors"
                  onClick={() => setIsProductsMenuOpen(!isProductsMenuOpen)}
                >
                  <span>Produtos</span>
                  <ChevronDown className={`h-4 w-4 transform transition-transform ${isProductsMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {isProductsMenuOpen && (
                  <div className="bg-green-50 py-2">
                    <Link
                      to="/treats"
                      className="block px-8 py-2 text-green-800 hover:bg-green-100 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Petiscos de Agrado
                    </Link>
                    <Link
                      to="/chewables"
                      className="block px-8 py-2 text-green-800 hover:bg-green-100 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Petiscos Mastigáveis
                    </Link>
                    <Link
                      to="/chewers"
                      className="block px-8 py-2 text-green-800 hover:bg-green-100 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Mordedores
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <a
                  href="#catalogs"
                  className="block px-4 py-2 text-green-800 hover:bg-green-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Catálogos
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block px-4 py-2 text-green-800 hover:bg-green-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Sobre
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <FavoritesModal isOpen={isFavoritesOpen} onClose={() => setIsFavoritesOpen(false)} />
    </header>
  );
};

export default Header;