export interface Customer {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  data_cadastro: string;
  updated_at: string;
}

export interface CustomerRegistration {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
}

export interface CustomerLogin {
  email: string;
  senha: string;
}