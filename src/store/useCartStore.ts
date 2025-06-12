import { create } from 'zustand';
import { CartItem, Product } from '../types/product';

interface CartStore {
  items: CartItem[];
  couponCode: string | null;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  setCouponCode: (code: string | null) => void;
  subtotal: number;
  discount: number;
  total: number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  couponCode: null,
  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.product.id === product.id
      );

      let newItems;
      if (existingItem) {
        newItems = state.items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...state.items, { product, quantity: 1 }];
      }

      const newSubtotal = newItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );

      const newDiscount = state.couponCode ? newSubtotal * 0.1 : 0;
      const newTotal = newSubtotal - newDiscount;

      return {
        ...state,
        items: newItems,
        subtotal: newSubtotal,
        discount: newDiscount,
        total: newTotal,
      };
    }),
  removeItem: (productId) =>
    set((state) => {
      const newItems = state.items.filter((item) => item.product.id !== productId);
      
      const newSubtotal = newItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );

      const newDiscount = state.couponCode ? newSubtotal * 0.1 : 0;
      const newTotal = newSubtotal - newDiscount;

      return {
        ...state,
        items: newItems,
        subtotal: newSubtotal,
        discount: newDiscount,
        total: newTotal,
      };
    }),
  updateQuantity: (productId, quantity) =>
    set((state) => {
      const newItems = state.items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      );

      const newSubtotal = newItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );

      const newDiscount = state.couponCode ? newSubtotal * 0.1 : 0;
      const newTotal = newSubtotal - newDiscount;

      return {
        ...state,
        items: newItems,
        subtotal: newSubtotal,
        discount: newDiscount,
        total: newTotal,
      };
    }),
  setCouponCode: (code) =>
    set((state) => {
      const newSubtotal = state.items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );

      const newDiscount = code ? newSubtotal * 0.1 : 0;
      const newTotal = newSubtotal - newDiscount;

      return {
        ...state,
        couponCode: code,
        discount: newDiscount,
        total: newTotal,
      };
    }),
  get subtotal() {
    return get().items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  },
  get discount() {
    const state = get();
    return state.couponCode ? state.subtotal * 0.1 : 0;
  },
  get total() {
    const state = get();
    return state.subtotal - state.discount;
  },
}));