import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Criar cliente mesmo sem variáveis para evitar crashes
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
      }
    })
  : null

// Log de configuração apenas em desenvolvimento
if (typeof window !== 'undefined' && import.meta.env.DEV) {
  console.log('Supabase configurado:', {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseAnonKey,
    client: !!supabase
  })
}

export type Database = {
  public: {
    Tables: {
      customers: {
        Row: {
          id: string
          nome: string
          email: string
          telefone: string
          senha: string
          data_cadastro: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          nome: string
          email: string
          telefone: string
          senha: string
          data_cadastro?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          nome?: string
          email?: string
          telefone?: string
          senha?: string
          data_cadastro?: string | null
          updated_at?: string | null
        }
      }
    }
  }
}