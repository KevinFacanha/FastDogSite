import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Dog, ShoppingCart, Heart, ChevronDown, Menu, X, User, LogOut } from 'lucide-react';
import CartModal from './CartModal';
import FavoritesModal from './FavoritesModal';
import AuthModal from './AuthModal';
import DarkModeToggle from './DarkModeToggle';
import { useCartStore } from '../store/useCartStore';
import { useFavoritesStore } from '../store/useFavoritesStore';
import { useAuthStore } from '../store/useAuthStore';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const favorites = useFavoritesStore((state) => state.favorites);
  const { isAuthenticated, customer, logout, checkAuth, isLoading } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu de produtos quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const productsMenu = document.getElementById('products-menu');
      const userMenu = document.getElementById('user-menu');
      const productsButton = document.getElementById('products-button');
      
      if (productsMenu && productsButton && 
          !productsMenu.contains(target) && 
          !productsButton.contains(target)) {
        setIsProductsMenuOpen(false);
      }

      const userButton = document.getElementById('user-button');
      if (userMenu && userButton && 
          !userMenu.contains(target) && 
          !userButton.contains(target)) {
        setIsUserMenuOpen(false);
      }
    };

    if (isProductsMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProductsMenuOpen, isUserMenuOpen]);

  const handleLogout = async () => {
    await logout();
    setIsUserMenuOpen(false);
    navigate('/');
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsProductsMenuOpen(false);
    setIsMobileProductsOpen(false);
    setIsUserMenuOpen(false);
  };

  const handleProductsMenuClick = () => {
    setIsProductsMenuOpen(!isProductsMenuOpen);
  };

  const handleMobileProductsClick = () => {
    setIsMobileProductsOpen(!isMobileProductsOpen);
  };

  const handleUserMenuClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleProductsMenuItemClick = () => {
    setIsProductsMenuOpen(false);
    closeMobileMenu();
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Se estamos na página inicial, faz scroll para a seção
    if (location.pathname === '/') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Se estamos em outra página, navega para a home e depois faz scroll
      navigate('/');
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    
    closeMobileMenu();
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <img src="/catalogs/fastdog-logo2.png" alt="FastDog Logo" className="h-16 w-auto" />
            <span className="text-2xl font-bold text-green-700 dark:text-green-400">FastDog</span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <DarkModeToggle />
            <button
              onClick={() => setIsFavoritesOpen(true)}
              className="relative text-green-800 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 transition-colors p-2"
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
              className="relative text-green-800 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 transition-colors p-2"
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
              className="text-green-800 dark:text-green-400 p-2"
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
                  className="text-green-800 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 font-medium transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <button
                  id="products-button"
                  className="flex items-center space-x-1 text-green-800 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 font-medium transition-colors"
                  onClick={handleProductsMenuClick}
                >
                  <span>Produtos</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProductsMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {isProductsMenuOpen && (
                  <div
                    id="products-menu"
                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 border dark:border-gray-700 z-50"
                  >
                    <Link
                      to="/treats"
                      className="block px-4 py-2 text-green-800 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-700 transition-colors"
                      onClick={handleProductsMenuItemClick}
                    >
                      Petiscos de Agrado
                    </Link>
                    <Link
                      to="/chewables"
                      className="block px-4 py-2 text-green-800 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-700 transition-colors"
                      onClick={handleProductsMenuItemClick}
                    >
                      Petiscos Mastigáveis
                    </Link>
                    <Link
                      to="/chewers"
                      className="block px-4 py-2 text-green-800 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-700 transition-colors"
                      onClick={handleProductsMenuItemClick}
                    >
                      Mordedores
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Link
                  to="/catalogos"
                  className="text-green-800 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 font-medium transition-colors"
                >
                  Catálogos
                </Link>
              </li>
              <li>
                <button
                  onClick={handleAboutClick}
                  className="text-green-800 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 font-medium transition-colors cursor-pointer"
                >
                  Sobre
                </button>
              </li>
              <li>
                <DarkModeToggle />
              </li>
              <li className="relative">
                {isAuthenticated ? (
                  <>
                    <button
                      id="user-button"
                      onClick={handleUserMenuClick}
                      className="flex items-center space-x-2 text-green-800 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 font-medium transition-colors p-2"
                    >
                      <User className="h-5 w-5" />
                      <span className="hidden lg:inline">{customer?.nome?.split(' ')[0] || 'Usuário'}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isUserMenuOpen && (
                      <div
                        id="user-menu"
                        className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 border dark:border-gray-700 z-50"
                      >
                        <div className="px-4 py-2 border-b dark:border-gray-700">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{customer?.nome}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{customer?.email}</p>
                        </div>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center space-x-2"
                        >
                          <LogOut className="h-4 w-4" />
                          <span>Sair</span>
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => setIsAuthOpen(true)}
                    className="flex items-center space-x-2 text-green-800 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 font-medium transition-colors p-2"
                  >
                    <User className="h-5 w-5" />
                    <span className="hidden lg:inline">Entrar</span>
                  </button>
                )}
              </li>
              <li>
                <button
                  onClick={() => setIsFavoritesOpen(true)}
                  className="relative text-green-800 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 transition-colors p-2"
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
                  className="relative text-green-800 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 transition-colors p-2"
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
          <nav className="md:hidden mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700">
            <ul className="py-2">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-green-800 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-700 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  className="flex items-center justify-between w-full px-4 py-2 text-green-800 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-700 transition-colors"
                  onClick={handleMobileProductsClick}
                >
                  <span>Produtos</span>
                  <ChevronDown className={`h-4 w-4 transform transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileProductsOpen && (
                  <div className="bg-green-50 dark:bg-gray-700 py-2">
                    <Link
                      to="/treats"
                      className="block px-8 py-2 text-green-800 dark:text-green-400 hover:bg-green-100 dark:hover:bg-gray-600 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Petiscos de Agrado
                    </Link>
                    <Link
                      to="/chewables"
                      className="block px-8 py-2 text-green-800 dark:text-green-400 hover:bg-green-100 dark:hover:bg-gray-600 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Petiscos Mastigáveis
                    </Link>
                    <Link
                      to="/chewers"
                      className="block px-8 py-2 text-green-800 dark:text-green-400 hover:bg-green-100 dark:hover:bg-gray-600 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Mordedores
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Link
                  to="/catalogos"
                  className="block px-4 py-2 text-green-800 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-700 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Catálogos
                </Link>
              </li>
              <li>
                <button
                  onClick={handleAboutClick}
                  className="block w-full text-left px-4 py-2 text-green-800 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                {!isAuthenticated && (
                  <button
                    onClick={() => setIsAuthOpen(true)}
                    className="block w-full text-left px-4 py-2 text-green-800 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Entrar / Cadastrar
                  </button>
                )}
              </li>
            </ul>
          </nav>
        )}
      </div>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <FavoritesModal isOpen={isFavoritesOpen} onClose={() => setIsFavoritesOpen(false)} />
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onSuccess={() => setIsAuthOpen(false)}
      />
    </header>
  );
};

export default Header;