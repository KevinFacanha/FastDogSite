// Paleta de cores FastDog - Otimizada para IAC (Interação, Atenção, Conversão)

export const colors = {
  // Cores Primárias - CTA Principal
  primary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e', // Verde vibrante principal
    600: '#16a34a', // Hover do CTA principal
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },

  // Cores Secundárias - CTA Secundário
  secondary: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316', // Laranja vibrante secundário
    600: '#ea580c', // Hover do CTA secundário
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },

  // Cores de Apoio
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },

  // Estados
  states: {
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  }
};

// Classes Tailwind para botões
export const buttonStyles = {
  // CTA Principal - Verde vibrante
  primary: {
    base: 'bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2',
    small: 'bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2',
    large: 'bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full shadow-xl transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2',
  },

  // CTA Secundário - Laranja
  secondary: {
    base: 'bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
    small: 'bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
    large: 'bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-xl transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
  },

  // CTA Outline - Transparente com borda
  outline: {
    base: 'border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold px-6 py-3 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2',
    secondary: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-6 py-3 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
  },

  // CTA Ghost - Apenas texto
  ghost: {
    base: 'text-green-500 hover:text-green-600 hover:bg-green-50 font-semibold px-6 py-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2',
    secondary: 'text-orange-500 hover:text-orange-600 hover:bg-orange-50 font-semibold px-6 py-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
  }
};

// Classes para links
export const linkStyles = {
  primary: 'text-green-500 hover:text-green-600 underline hover:no-underline transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1',
  secondary: 'text-orange-500 hover:text-orange-600 underline hover:no-underline transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-1',
}; 