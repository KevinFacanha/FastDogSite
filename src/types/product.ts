export interface ProductVariant {
  size: string;
  price: number;
  description: string;
}

export type DogSize = 'pequeno' | 'medio' | 'grande' | 'multporte';

export interface Product {
  id: string;
  brand: 'natuka' | 'good-lovin' | 'luv' | 'alecrim';
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[]; // Array de múltiplas imagens
  details: string;
  hasVariants?: boolean;
  variants?: ProductVariant[];
  dogSize: DogSize; // Nova propriedade para classificação por porte
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: ProductVariant;
}