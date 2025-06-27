import { supabase } from './supabase';
import { Customer, CustomerRegistration, CustomerLogin } from '../types/customer';
import bcrypt from 'bcryptjs';

export class CustomerService {
  // Registrar novo cliente
  static async register(customerData: CustomerRegistration): Promise<{ success: boolean; customer?: Customer; error?: string }> {
    try {
      // Verificar se email já existe
      const { data: existingCustomer } = await supabase
        .from('customers')
        .select('email')
        .eq('email', customerData.email)
        .maybeSingle();

      if (existingCustomer) {
        return { success: false, error: 'E-mail já cadastrado' };
      }

      // Verificar se telefone já existe
      const { data: existingPhone } = await supabase
        .from('customers')
        .select('telefone')
        .eq('telefone', customerData.telefone)
        .maybeSingle();

      if (existingPhone) {
        return { success: false, error: 'Telefone já cadastrado' };
      }

      // Criptografar senha
      const hashedPassword = await bcrypt.hash(customerData.senha, 10);

      // Inserir cliente
      const { data, error } = await supabase
        .from('customers')
        .insert([
          {
            nome: customerData.nome,
            email: customerData.email,
            telefone: customerData.telefone,
            senha: hashedPassword,
          }
        ])
        .select()
        .single();

      if (error) {
        console.error('Erro ao registrar cliente:', error);
        return { success: false, error: 'Erro ao criar conta. Tente novamente.' };
      }

      return { success: true, customer: data };
    } catch (error) {
      console.error('Erro no registro:', error);
      return { success: false, error: 'Erro interno. Tente novamente.' };
    }
  }

  // Login do cliente
  static async login(loginData: CustomerLogin): Promise<{ success: boolean; customer?: Customer; error?: string }> {
    try {
      const { data: customer, error } = await supabase
        .from('customers')
        .select('*')
        .eq('email', loginData.email)
        .single();

      if (error || !customer) {
        return { success: false, error: 'E-mail ou senha incorretos' };
      }

      // Verificar senha
      const isPasswordValid = await bcrypt.compare(loginData.senha, customer.senha);
      
      if (!isPasswordValid) {
        return { success: false, error: 'E-mail ou senha incorretos' };
      }

      // Remover senha do retorno
      const { senha, ...customerWithoutPassword } = customer;
      
      return { success: true, customer: customerWithoutPassword };
    } catch (error) {
      console.error('Erro no login:', error);
      return { success: false, error: 'Erro interno. Tente novamente.' };
    }
  }

  // Buscar cliente por ID
  static async getById(id: string): Promise<Customer | null> {
    try {
      const { data, error } = await supabase
        .from('customers')
        .select('id, nome, email, telefone, data_cadastro, updated_at')
        .eq('id', id)
        .single();

      if (error || !data) {
        return null;
      }

      return data;
    } catch (error) {
      console.error('Erro ao buscar cliente:', error);
      return null;
    }
  }
}