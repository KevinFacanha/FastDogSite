import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Customer } from '../types/customer';

interface AuthStore {
  customer: Customer | null;
  isAuthenticated: boolean;
  setCustomer: (customer: Customer | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      customer: null,
      isAuthenticated: false,
      setCustomer: (customer) => set({ 
        customer, 
        isAuthenticated: !!customer 
      }),
      logout: () => set({ 
        customer: null, 
        isAuthenticated: false 
      }),
    }),
    {
      name: 'auth-storage',
    }
  )
);