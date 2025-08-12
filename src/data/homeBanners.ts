export interface BannerSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  brand?: string;
}

export const bannersA: BannerSlide[] = [
  {
    id: 'banner-a-1',
    image: 'https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'SEU DOG MERECE MAIS SAÚDE!',
    subtitle: 'Petiscos 100% naturais, direto na sua porta',
    ctaLabel: 'GARANTA JÁ!',
    ctaHref: '/treats',
    brand: 'natuka'
  },
  {
    id: 'banner-a-2',
    image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    title: 'PROMOÇÃO RELÂMPAGO',
    subtitle: 'Até 20% OFF para deixar seu cão feliz',
    ctaLabel: 'COMPRE AGORA!',
    ctaHref: '/chewables',
    brand: 'luv'
  },
  {
    id: 'banner-a-3',
    image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    title: 'MAIS ENERGIA, MAIS AMOR',
    subtitle: 'Descubra os petiscos favoritos dos cães',
    ctaLabel: 'CONFIRA HOJE!',
    ctaHref: '/catalogos',
    brand: 'good-lovin'
  }
];

export const bannersB: BannerSlide[] = [
  {
    id: 'banner-b-1',
    image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    title: 'CÃES GRANDES, PETISCOS GIGANTES!',
    subtitle: 'Produtos premium para cães especiais',
    ctaLabel: 'EXPLORAR LINHA',
    ctaHref: '/porte-grande',
    brand: 'natuka'
  },
  {
    id: 'banner-b-2',
    image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    title: 'NATURAL É MELHOR!',
    subtitle: 'Sem conservantes, só amor para seu pet',
    ctaLabel: 'VER PRODUTOS',
    ctaHref: '/porte-medio',
    brand: 'alecrim'
  },
  {
    id: 'banner-b-3',
    image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    title: 'DISTRIBUIDORA OFICIAL',
    subtitle: 'Qualidade garantida das melhores marcas',
    ctaLabel: 'CONHECER MARCAS',
    ctaHref: '/catalogos',
    brand: 'luv'
  }
];

export const bannersC: BannerSlide[] = [
  {
    id: 'banner-c-1',
    image: 'https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'FASTDOG É CONFIANÇA!',
    subtitle: 'Seu parceiro de confiança para petiscos',
    ctaLabel: 'FAZER PEDIDO',
    ctaHref: '/treats',
    brand: 'fastdog'
  },
  {
    id: 'banner-c-2',
    image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    title: 'ENTREGA RÁPIDA EM TODO BRASIL',
    subtitle: 'Seu pedido chega em até 3 dias úteis',
    ctaLabel: 'VER CONDIÇÕES',
    ctaHref: '/catalogos',
    brand: 'fastdog'
  },
  {
    id: 'banner-c-3',
    image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    title: 'ATENDIMENTO HUMANIZADO',
    subtitle: 'Especialistas em nutrição canina',
    ctaLabel: 'FALAR CONOSCO',
    ctaHref: '/catalogos',
    brand: 'fastdog'
  }
]; 