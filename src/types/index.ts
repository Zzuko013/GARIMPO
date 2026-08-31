export type Category = 
  | "todos"
  | "camisetas"
  | "camisas"
  | "jaquetas-casacos"
  | "calcas-denim"
  | "calcados"
  | "acessorios"
  | "malhas-trico";

export type StyleTag = 
  | "Workwear"
  | "Básico Pesado"
  | "Gorpcore"
  | "Minimalista"
  | "Retrô & Vintage"
  | "Alfaiataria Despojada"
  | "Streetwear Sóbrio";

export type StoreName = 
  | "Loja Oficial"
  | "Dafiti"
  | "Farfetch"
  | "Amazon Brasil"
  | "Kanui"
  | "Netshoes"
  | "Centauro"
  | "Zattini"
  | "Your ID Store"
  | "Maze";

export interface Offer {
  id: string;
  storeName: StoreName;
  storeLogoUrl?: string;
  originalPrice: number;
  currentPrice: number;
  url: string;
  couponCode?: string;
  couponDiscountText?: string;
  isBestPrice: boolean;
  inStock: boolean;
  installments?: string; // e.g. "3x de R$ 63,30 sem juros"
  shippingNote?: string; // e.g. "Frete grátis Prime" ou "Retirada em loja grátis"
}

export interface PriceHistoryPoint {
  date: string; // e.g. "2024-02-01" or "01/Fev"
  price: number;
  label?: string;
}

export interface TechnicalSpecs {
  material: string; // e.g. "100% Algodão Pima Peruano"
  fabricWeight?: string; // e.g. "240 g/m² (Heavyweight encorpado)"
  fitAdvice: string; // e.g. "Modelagem boxy. Pegue seu tamanho habitual para caimento solto."
  durabilityRating: "Alta" | "Muito Alta" | "Excepcional";
  origin?: string; // e.g. "Feito no Brasil" ou "Importado"
  washingCare?: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  brand: string;
  category: Category;
  styleTags: StyleTag[];
  imageUrl: string;
  secondaryImages?: string[];
  
  // Editorial opinion
  editorialBadge?: string; // e.g. "Achado da Semana", "Menor Preço 90d", "Custo x Benefício Raro"
  editorialHeadline: string; // e.g. "Vale o preço cheio? Não. Mas por R$ 189 é imbatível."
  curatorReview: string; // Full in-depth review explaining why this piece was selected
  curatorName: string;
  pros: string[];
  cons: string[];
  
  // Prices
  originalPrice: number; // Anchor MSRP
  bestPrice: number; // Lowest current among offers
  historicalLowestPrice: number;
  averageMarketPrice: number;
  
  // Offers across stores
  offers: Offer[];
  
  // Price history
  priceHistory: PriceHistoryPoint[];
  
  // Specs
  specs: TechnicalSpecs;
  
  // Meta
  featured?: boolean;
  collectionId?: string;
  publishedAt: string;
  stockStatus: "Em estoque" | "Poucas unidades" | "Tamanhos selecionados";
  availableSizes: string[];
}

export interface EditorialCollection {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  curatorNote: string;
  coverImage: string;
  tag: string;
  productIds: string[];
}

export interface FilterState {
  category: Category;
  selectedStyles: StyleTag[];
  maxPrice: number;
  onlyLowestPrice90d: boolean;
  onlyInStock: boolean;
  searchQuery: string;
  sortBy: "curator" | "price-asc" | "price-desc" | "discount-desc" | "newest";
  selectedStore: string;
}

export interface PriceAlert {
  id: string;
  productId: string;
  productTitle: string;
  targetPrice: number;
  channel: "telegram" | "whatsapp" | "email";
  contact: string;
  createdAt: string;
}
