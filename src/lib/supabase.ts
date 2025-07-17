import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Log das variáveis para debug (apenas em desenvolvimento)
if (import.meta.env.DEV) {
  console.log('🔧 Debug Supabase Config:', {
    url: supabaseUrl ? '✅ Configurada' : '❌ Não configurada',
    key: supabaseAnonKey ? '✅ Configurada' : '❌ Não configurada',
    urlValue: supabaseUrl,
    keyPreview: supabaseAnonKey ? `${supabaseAnonKey.substring(0, 20)}...` : 'undefined'
  })
}

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

// Verificação adicional e log de status
if (import.meta.env.DEV) {
  if (!supabaseUrl) {
    console.error('❌ VITE_SUPABASE_URL não está definida no arquivo .env')
  }
  if (!supabaseAnonKey) {
    console.error('❌ VITE_SUPABASE_ANON_KEY não está definida no arquivo .env')
  }
  if (supabase) {
    console.log('✅ Cliente Supabase criado com sucesso')
  } else {
    console.error('❌ Cliente Supabase não foi criado - verifique as variáveis de ambiente')
  }
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