/**
 * Formata um preço para o padrão brasileiro (vírgula como separador decimal)
 * @param price - Preço em formato numérico
 * @returns String formatada com vírgula (ex: "35,90")
 */
export const formatPrice = (price: number): string => {
  return price.toFixed(2).replace('.', ',');
};

/**
 * Formata um preço completo com símbolo R$
 * @param price - Preço em formato numérico
 * @returns String formatada completa (ex: "R$ 35,90")
 */
export const formatFullPrice = (price: number): string => {
  return `R$ ${formatPrice(price)}`;
};