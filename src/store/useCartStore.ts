import { create } from 'zustand';
import { CartItem, Product } from '../types/product';

interface CartStore {
  items: CartItem[];
  couponCode: string | null;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  setCouponCode: (code: string | null) => void;
  total: number;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  couponCode: null,
  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + product.price,
        };
      }

      return {
        ...state,
        items: [...state.items, { product, quantity: 1 }],
        total: state.total + product.price,
      };
    }),
  removeItem: (productId) =>
    set((state) => ({
      ...state,
      items: state.items.filter((item) => item.product.id !== productId),
      total: state.items.reduce(
        (total, item) =>
          item.product.id === productId
            ? total
            : total + item.product.price * item.quantity,
        0
      ),
    })),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      ...state,
      items: state.items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      ),
      total: state.items.reduce(
        (total, item) =>
          total +
          item.product.price * (item.product.id === productId ? quantity : item.quantity),
        0
      ),
    })),
  setCouponCode: (code) =>
    set((state) => ({
      ...state,
      couponCode: code,
    })),
  total: 0,
}));