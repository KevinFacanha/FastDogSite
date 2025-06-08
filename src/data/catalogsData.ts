//import luvImage from '../assets/images/luv.jpeg';
//import natukaImage from '../assets/images/Natuka Casco Bovino.jpeg';
//import frangoImage from '../assets/images/Peito de frango.jpeg';


export interface Catalog {
  id: string;
  title: string;
  description: string;
  image: string;
  pdfUrl: string;
}

export const catalogsData: Catalog[] = [
  {
    id: 'luv-alecrim',
    title: 'Catálogo Produtos Luv e Alecrim',
    description: 'Petiscos naturais, sem conservantes e com ingredientes selecionados especialmente para cães de todos os portes.',
    image: '/catalogs/fastdog-logo.jpg',
    pdfUrl: '/catalogs/catalogo-produtos-luv-e-alecrim.pdf'
  },
  {
    id: 'goodloving',
    title: 'Catálogo Produtos GoodLoving',
    description: 'Petiscos com sabores únicos que cuidam da saúde bucal e encantam seu pet.',
    image: '/catalogs/fastdog-logo.jpg',
    pdfUrl: '/catalogs/catalogo-produtos-goodloving.pdf'
  },
  {
    id: 'natuka',
    title: 'Catálogo Produtos Natuka',
    description: 'Petiscos funcionais desenvolvidos com fórmulas exclusivas para proporcionar benefícios nutricionais ao seu pet.',
    image: '/catalogs/fastdog-logo.jpg',
    pdfUrl: '/catalogs/catalogo-produtos-natuka.pdf'
  }
];