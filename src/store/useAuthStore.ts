import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { supabase } from '../lib/supabase'
import { User } from '@supabase/supabase-js'
import toast from 'react-hot-toast'

interface Customer {
  id: string
  nome: string
  email: string
  telefone: string
  data_cadastro: string | null
  updated_at: string | null
}

interface AuthStore {
  user: User | null
  customer: Customer | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (nome: string, email: string, telefone: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
  checkAuth: () => Promise<void>
  updateCustomer: (data: Partial<Customer>) => Promise<boolean>
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      customer: null,
      isLoading: false,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true })
        
        try {
          if (!supabase) {
            toast.error('Serviço indisponível no momento');
            set({ isLoading: false });
            return false;
          }

          // Primeiro, fazer login no Supabase Auth
          const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
            email,
            password,
          })

          if (authError) {
            toast.error('Email ou senha incorretos')
            return false
          }

          // Buscar dados do cliente na tabela customers
          const { data: customerData, error: customerError } = await supabase
            .from('customers')
            .select('*')
            .eq('email', email)
            .single()

          if (customerError || !customerData) {
            toast.error('Erro ao carregar dados do cliente')
            return false
          }

          set({
            user: authData.user,
            customer: customerData,
            isAuthenticated: true,
            isLoading: false,
          })

          toast.success('Login realizado com sucesso!')
          return true
        } catch (error) {
          console.error('Erro no login:', error)
          toast.error('Erro interno. Tente novamente.')
          set({ isLoading: false })
          return false
        }
      },

      register: async (nome: string, email: string, telefone: string, password: string) => {
        set({ isLoading: true })
        
        try {
          if (!supabase) {
            toast.error('Serviço indisponível no momento');
            set({ isLoading: false });
            return false;
          }

          // Primeiro, criar usuário no Supabase Auth
          const { data: authData, error: authError } = await supabase.auth.signUp({
            email,
            password,
          })

          if (authError) {
            if (authError.message.includes('already registered')) {
              toast.error('Este email já está cadastrado')
            } else {
              toast.error('Erro ao criar conta: ' + authError.message)
            }
            return false
          }

          if (!authData.user) {
            toast.error('Erro ao criar usuário')
            return false
          }

          // Inserir dados na tabela customers
          const { data: customerData, error: customerError } = await supabase
            .from('customers')
            .insert({
              id: authData.user.id,
              nome,
              email,
              telefone,
              senha: password, // Em produção, isso seria hasheado
            })
            .select()
            .single()

          if (customerError) {
            console.error('Erro ao inserir cliente:', customerError)
            toast.error('Erro ao salvar dados do cliente')
            return false
          }

          set({
            user: authData.user,
            customer: customerData,
            isAuthenticated: true,
            isLoading: false,
          })

          toast.success('Cadastro realizado com sucesso!')
          return true
        } catch (error) {
          console.error('Erro no cadastro:', error)
          toast.error('Erro interno. Tente novamente.')
          set({ isLoading: false })
          return false
        }
      },

      logout: async () => {
        try {
          if (supabase) {
          await supabase.auth.signOut()
          }
          set({
            user: null,
            customer: null,
            isAuthenticated: false,
          })
          toast.success('Logout realizado com sucesso!')
        } catch (error) {
          console.error('Erro no logout:', error)
          toast.error('Erro ao fazer logout')
        }
      },

      checkAuth: async () => {
        set({ isLoading: true });
        try {
          if (!supabase) {
            set({
              user: null,
              customer: null,
              isAuthenticated: false,
              isLoading: false,
            });
            return;
          }

          const { data: { user } } = await supabase.auth.getUser()
          
          if (user) {
            // Buscar dados do cliente
            const { data: customerData, error: customerError } = await supabase
              .from('customers')
              .select('*')
              .eq('id', user.id)
              .single()

            if (customerError) {
              console.warn('Cliente não encontrado na tabela customers:', customerError);
              // Se o usuário existe no Auth mas não na tabela customers, fazer logout
              await supabase.auth.signOut();
              set({
                user: null,
                customer: null,
                isAuthenticated: false,
                isLoading: false,
              });
              return;
            }

            set({
              user,
              customer: customerData,
              isAuthenticated: true,
              isLoading: false,
            })
          } else {
            set({
              user: null,
              customer: null,
              isAuthenticated: false,
              isLoading: false,
            })
          }
        } catch (error) {
          console.error('Erro ao verificar autenticação:', error)
          set({
            user: null,
            customer: null,
            isAuthenticated: false,
            isLoading: false,
          })
        }
      },

      updateCustomer: async (data: Partial<Customer>) => {
        const { customer } = get()
        if (!customer || !supabase) return false

        try {
          const { data: updatedData, error } = await supabase
            .from('customers')
            .update(data)
            .eq('id', customer.id)
            .select()
            .single()

          if (error) {
            toast.error('Erro ao atualizar dados')
            return false
          }

          set({ customer: updatedData })
          toast.success('Dados atualizados com sucesso!')
          return true
        } catch (error) {
          console.error('Erro ao atualizar cliente:', error)
          toast.error('Erro interno. Tente novamente.')
          return false
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        customer: state.customer,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
)