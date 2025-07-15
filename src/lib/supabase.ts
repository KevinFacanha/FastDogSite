import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables')
  // Em produção, não quebrar a aplicação por falta de env vars
  // Criar um cliente mock ou usar valores padrão seguros
}

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

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