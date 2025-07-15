import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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