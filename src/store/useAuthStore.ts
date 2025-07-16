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
          console.log('Tentando fazer login com:', { email })
          
          // Verificar se o Supabase está configurado
          if (!supabase) {
            console.error('Supabase client não está configurado')
            toast.error('Erro de configuração do sistema')
            set({ isLoading: false })
            return false
          }

          // Fazer login no Supabase Auth
          const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          })

          console.log('Resposta do login:', { authData, authError })

          if (authError) {
            console.error('Erro de autenticação:', authError)
            if (authError.message.includes('Invalid login credentials')) {
              toast.error('Email ou senha incorretos')
            } else if (authError.message.includes('Email not confirmed')) {
              toast.error('Email não confirmado. Verifique sua caixa de entrada.')
            } else {
              toast.error('Erro ao fazer login: ' + authError.message)
            }
            set({ isLoading: false })
            return false
          }

          if (!authData.user) {
            toast.error('Erro ao autenticar usuário')
            set({ isLoading: false })
            return false
          }

          // Buscar dados do cliente na tabela customers
          const { data: customerData, error: customerError } = await supabase
            .from('customers')
            .select('*')
            .eq('email', email)
            .single()

          console.log('Dados do cliente:', { customerData, customerError })

          if (customerError) {
            console.error('Erro ao buscar cliente:', customerError)
            // Se o cliente não existe na tabela, criar um registro
            if (customerError.code === 'PGRST116') {
              const { data: newCustomer, error: insertError } = await supabase
                .from('customers')
                .insert({
                  id: authData.user.id,
                  nome: authData.user.user_metadata?.nome || 'Usuário',
                  email: email,
                  telefone: authData.user.user_metadata?.telefone || '',
                  senha: password, // Em produção, isso seria hasheado
                })
                .select()
                .single()

              if (insertError) {
                console.error('Erro ao criar cliente:', insertError)
                toast.error('Erro ao criar perfil do cliente')
                set({ isLoading: false })
                return false
              }

              set({
                user: authData.user,
                customer: newCustomer,
                isAuthenticated: true,
                isLoading: false,
              })
            } else {
              toast.error('Erro ao carregar dados do cliente')
              set({ isLoading: false })
              return false
            }
          } else {
            set({
              user: authData.user,
              customer: customerData,
              isAuthenticated: true,
              isLoading: false,
            })
          }

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
          console.log('Tentando registrar usuário:', { nome, email, telefone })
          
          // Verificar se o Supabase está configurado
          if (!supabase) {
            console.error('Supabase client não está configurado')
            toast.error('Erro de configuração do sistema')
            set({ isLoading: false })
            return false
          }

          // Criar usuário no Supabase Auth
          const { data: authData, error: authError } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
              data: {
                nome: nome,
                telefone: telefone
              }
            }
          })

          console.log('Resposta do registro:', { authData, authError })

          if (authError) {
            console.error('Erro no registro:', authError)
            if (authError.message.includes('User already registered')) {
              toast.error('Este email já está cadastrado')
            } else if (authError.message.includes('Password should be at least')) {
              toast.error('A senha deve ter pelo menos 6 caracteres')
            } else {
              toast.error('Erro ao criar conta: ' + authError.message)
            }
            set({ isLoading: false })
            return false
          }

          if (!authData.user) {
            toast.error('Erro ao criar usuário')
            set({ isLoading: false })
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

          console.log('Dados do cliente inserido:', { customerData, customerError })

          if (customerError) {
            console.error('Erro ao inserir cliente:', customerError)
            toast.error('Erro ao salvar dados do cliente')
            set({ isLoading: false })
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
        // Evitar múltiplas chamadas simultâneas
        if (get().isLoading) {
          console.log('checkAuth já está executando, ignorando...');
          return;
        }

        set({ isLoading: true });
        
        try {
          if (!supabase) {
            console.warn('Supabase client não configurado')
            set({
              user: null,
              customer: null,
              isAuthenticated: false,
              isLoading: false,
            });
            return;
          }

          const { data: { user }, error } = await supabase.auth.getUser()
          
          if (error) {
            console.error('Erro ao verificar usuário:', error)
            set({
              user: null,
              customer: null,
              isAuthenticated: false,
              isLoading: false,
            })
            return
          }
          
          if (user) {
            console.log('Usuário encontrado:', user.id)
            // Buscar dados do cliente
            const { data: customerData, error: customerError } = await supabase
              .from('customers')
              .select('*')
              .eq('id', user.id)
              .single()

            if (customerError) {
              console.warn('Cliente não encontrado na tabela customers:', customerError);
              // Se o usuário existe no Auth mas não na tabela customers, criar registro
              if (customerError.code === 'PGRST116') {
                const { data: newCustomer, error: insertError } = await supabase
                  .from('customers')
                  .insert({
                    id: user.id,
                    nome: user.user_metadata?.nome || user.email?.split('@')[0] || 'Usuário',
                    email: user.email || '',
                    telefone: user.user_metadata?.telefone || '',
                    senha: '', // Senha vazia para usuários migrados
                  })
                  .select()
                  .single()

                if (insertError) {
                  console.error('Erro ao criar cliente migrado:', insertError)
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
                  customer: newCustomer,
                  isAuthenticated: true,
                  isLoading: false,
                })
                return;
              }
              
              // Outros erros, fazer logout
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
            console.error('Erro ao atualizar cliente:', error)
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