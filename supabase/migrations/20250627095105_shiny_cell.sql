/*
  # Criar tabela de clientes

  1. Nova Tabela
    - `customers`
      - `id` (uuid, primary key)
      - `nome` (text, obrigatório)
      - `email` (text, único, obrigatório)
      - `telefone` (text, obrigatório)
      - `senha` (text, obrigatório - será criptografada)
      - `data_cadastro` (timestamp, padrão now())
      - `updated_at` (timestamp, padrão now())

  2. Segurança
    - Habilitar RLS na tabela `customers`
    - Adicionar políticas para usuários autenticados lerem seus próprios dados
    - Adicionar política para inserção de novos clientes

  3. Índices
    - Índice único no email
    - Índice no telefone para busca rápida
*/

-- Criar tabela de clientes
CREATE TABLE IF NOT EXISTS customers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  email text UNIQUE NOT NULL,
  telefone text NOT NULL,
  senha text NOT NULL,
  data_cadastro timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;

-- Criar índices para performance
CREATE INDEX IF NOT EXISTS idx_customers_email ON customers(email);
CREATE INDEX IF NOT EXISTS idx_customers_telefone ON customers(telefone);

-- Políticas RLS
CREATE POLICY "Clientes podem ler seus próprios dados"
  ON customers
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text);

CREATE POLICY "Permitir inserção de novos clientes"
  ON customers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Clientes podem atualizar seus próprios dados"
  ON customers
  FOR UPDATE
  TO authenticated
  USING (auth.uid()::text = id::text);

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para atualizar updated_at
CREATE TRIGGER update_customers_updated_at
  BEFORE UPDATE ON customers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();