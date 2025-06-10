export interface Product {
  id: string;
  brand: 'natuka' | 'good-lovin' | 'luv' | 'alecrim';
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[]; // Array de múltiplas imagens
  details: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}