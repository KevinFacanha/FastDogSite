import { Product, DogSize } from '../types/product';

/**
 * Filtra produtos por porte do cão
 * @param products - Array de produtos
 * @param dogSize - Porte do cão ('pequeno', 'medio', 'grande', 'multporte')
 * @returns Array de produtos filtrados
 */
export const filterProductsByDogSize = (products: Product[], dogSize: DogSize): Product[] => {
  return products.filter(product => {
    // Produtos multporte aparecem em todas as categorias
    if (product.dogSize === 'multporte') {
      return true;
    }
    // Produtos específicos aparecem apenas na categoria correspondente
    return product.dogSize === dogSize;
  });
};

/**
 * Obtém produtos para cães de porte pequeno
 * @param products - Array de produtos
 * @returns Array de produtos para cães pequenos
 */
export const getSmallDogProducts = (products: Product[]): Product[] => {
  return filterProductsByDogSize(products, 'pequeno');
};

/**
 * Obtém produtos para cães de porte médio
 * @param products - Array de produtos
 * @returns Array de produtos para cães médios
 */
export const getMediumDogProducts = (products: Product[]): Product[] => {
  return filterProductsByDogSize(products, 'medio');
};

/**
 * Obtém produtos para cães de porte grande
 * @param products - Array de produtos
 * @returns Array de produtos para cães grandes
 */
export const getLargeDogProducts = (products: Product[]): Product[] => {
  return filterProductsByDogSize(products, 'grande');
};

/**
 * Obtém estatísticas de produtos por porte
 * @param products - Array de produtos
 * @returns Objeto com contagem de produtos por porte
 */
export const getProductStatsBySize = (products: Product[]) => {
  return {
    pequeno: getSmallDogProducts(products).length,
    medio: getMediumDogProducts(products).length,
    grande: getLargeDogProducts(products).length,
    multporte: products.filter(p => p.dogSize === 'multporte').length,
    total: products.length
  };
};

/**
 * Obtém nome amigável para o porte do cão
 * @param dogSize - Porte do cão
 * @returns Nome formatado
 */
export const getDogSizeDisplayName = (dogSize: DogSize): string => {
  const names = {
    pequeno: 'Porte Pequeno',
    medio: 'Porte Médio',
    grande: 'Porte Grande',
    multporte: 'Multporte'
  };
  return names[dogSize];
};