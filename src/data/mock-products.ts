import { Product } from "../types";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    slug: "camiseta-heavyweight-240g-pima-offwhite",
    title: "Camiseta Heavyweight 240g/m² Gola Fechada",
    brand: "Inspirations / Basic Co.",
    category: "camisetas",
    styleTags: ["Básico Pesado", "Minimalista", "Workwear"],
    imageUrl: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80"
    ],
    editorialBadge: "Achado da Semana",
    editorialHeadline: "Vale o preço cheio de R$ 220? Talvez. Mas por R$ 139,90 não existe gola que segure melhor.",
    curatorReview: "O grande drama da camiseta branca nacional é a gola que vira 'boca de sino' após 4 lavagens e o tecido transparente que marca o corpo. Esta peça tem gramatura de 240g/m² (quase o dobro das convencionais de fast-fashion de 130g) e ribana de gola com 3cm em elastano pesado. Caimento boxy moderno que cai reto no corpo sem marcar.",
    curatorName: "Lucas Mendonça (Editor de Estilo)",
    pros: [
      "Gramatura real de 240g/m²: zero transparência e estrutura impecável",
      "Gola canelada de 3cm com reforço ombro a ombro que não laceia",
      "Algodão penteado com toque macio e pré-encolhido"
    ],
    cons: [
      "Por ser encorpada, pode esquentar em dias acima de 32°C",
      "Modelagem boxy propositalmente mais solta (se quer justa, peça um número menor)"
    ],
    originalPrice: 229.00,
    bestPrice: 139.90,
    historicalLowestPrice: 139.90,
    averageMarketPrice: 199.00,
    specs: {
      material: "100% Algodão Penteado Fio 20.1",
      fabricWeight: "240 g/m² (Heavyweight Estruturado)",
      fitAdvice: "Modelagem Boxy / Streetwear Sóbrio. Pegue seu tamanho normal para caimento solto ou um menor para clássico.",
      durabilityRating: "Excepcional",
      origin: "Feito em Santa Catarina, Brasil",
      washingCare: "Lavar em água fria, secar à sombra. Não usar secadora quente para preservar a fibra."
    },
    offers: [
      {
        id: "off-1-1",
        storeName: "Dafiti",
        originalPrice: 229.00,
        currentPrice: 139.90,
        url: "https://www.dafiti.com.br",
        couponCode: "GARIMPO15",
        couponDiscountText: "15% OFF com cupom",
        isBestPrice: true,
        inStock: true,
        installments: "2x de R$ 69,95 sem juros",
        shippingNote: "Frete grátis acima de R$ 199"
      },
      {
        id: "off-1-2",
        storeName: "Amazon Brasil",
        originalPrice: 219.00,
        currentPrice: 159.00,
        url: "https://www.amazon.com.br",
        isBestPrice: false,
        inStock: true,
        shippingNote: "Entrega Prime Grátis amanhã"
      },
      {
        id: "off-1-3",
        storeName: "Loja Oficial",
        originalPrice: 229.00,
        currentPrice: 189.00,
        url: "https://lojaexemplo.com.br",
        isBestPrice: false,
        inStock: true
      }
    ],
    priceHistory: [
      { date: "01/Jan", price: 229 },
      { date: "15/Jan", price: 219 },
      { date: "01/Fev", price: 199 },
      { date: "15/Fev", price: 189 },
      { date: "28/Fev", price: 159 },
      { date: "Hoje", price: 139.90, label: "Menor preço histórico" }
    ],
    featured: true,
    collectionId: "col-basicos-pesados",
    publishedAt: "2025-02-28",
    stockStatus: "Em estoque",
    availableSizes: ["P", "M", "G", "GG"]
  },
  {
    id: "prod-2",
    slug: "tenis-club-c-85-vintage-chalk",
    title: "Tênis Club C 85 Vintage Chalk & Green",
    brand: "Reebok Heritage",
    category: "calcados",
    styleTags: ["Retrô & Vintage", "Minimalista"],
    imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80"
    ],
    editorialBadge: "Menor Preço em 90d",
    editorialHeadline: "A melhor alternativa ao Samba inflacionado: couro macio, entressola amarelada de fábrica e conforto de verdade.",
    curatorReview: "Enquanto o mercado cobra R$ 800+ em tênis retrô com couro rígido e desconfortável, o Club C 85 na versão Vintage entrega couro macio de alta flexibilidade e espuma EVA no interior. A tonalidade Chalk (off-white) evita aquele aspecto de tênis brilhando novo e combina com qualquer calça reta ou bermuda.",
    curatorName: "Gabriel Sampaio (Sneakers & Silhuetas)",
    pros: [
      "Couro legítimo macio na versão Vintage (muito superior à versão padrão)",
      "Palmilha amortecida e forro atoalhado ultra confortável",
      "Estética atemporal anos 80 que envelhece bonito com o uso"
    ],
    cons: [
      "A biqueira pega um pouco de vincos naturais rapidamente (faz parte do charme)",
      "Forma levemente estreita para pés muito largos"
    ],
    originalPrice: 599.90,
    bestPrice: 329.99,
    historicalLowestPrice: 319.00,
    averageMarketPrice: 479.00,
    specs: {
      material: "Cabedal em Couro Legítimo Vacum Vintage e Solado de Borracha",
      fitAdvice: "True to size. Se tiver o pé muito largo, considere meio número acima.",
      durabilityRating: "Alta",
      origin: "Importado / Licenciado",
      washingCare: "Limpar apenas com pano levemente úmido e sabão neutro. Nunca mergulhar em água."
    },
    offers: [
      {
        id: "off-2-1",
        storeName: "Kanui",
        originalPrice: 599.90,
        currentPrice: 329.99,
        url: "https://www.kanui.com.br",
        couponCode: "LEVE30",
        couponDiscountText: "Preço já aplicado com desconto",
        isBestPrice: true,
        inStock: true,
        installments: "5x de R$ 66,00 sem juros",
        shippingNote: "Frete fixo R$ 9,90 para Sul e Sudeste"
      },
      {
        id: "off-2-2",
        storeName: "Netshoes",
        originalPrice: 599.90,
        currentPrice: 379.90,
        url: "https://www.netshoes.com.br",
        isBestPrice: false,
        inStock: true
      },
      {
        id: "off-2-3",
        storeName: "Your ID Store",
        originalPrice: 599.90,
        currentPrice: 499.90,
        url: "https://youridstore.com.br",
        isBestPrice: false,
        inStock: true
      }
    ],
    priceHistory: [
      { date: "01/Dez", price: 599.90 },
      { date: "20/Dez", price: 549.90 },
      { date: "10/Jan", price: 479.90 },
      { date: "05/Fev", price: 399.90 },
      { date: "Hoje", price: 329.99, label: "Queda brusca de 45%" }
    ],
    featured: true,
    collectionId: "col-retro-sneakers",
    publishedAt: "2025-02-27",
    stockStatus: "Poucas unidades",
    availableSizes: ["39", "40", "41", "42", "43"]
  },
  {
    id: "prod-3",
    slug: "jaqueta-chore-jacket-lona-sarja-camel",
    title: "Chore Jacket Francesa em Sarja Pesada 100% Algodão",
    brand: "Atelier Workwear Lab",
    category: "jaquetas-casacos",
    styleTags: ["Workwear", "Básico Pesado", "Retrô & Vintage"],
    imageUrl: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80"
    ],
    editorialBadge: "Tesouro de Durabilidade",
    editorialHeadline: "Inspirada nos operários franceses dos anos 30: 3 bolsos frontais chapados, botões em corozo e sarja de 320g.",
    curatorReview: "A jaqueta perfeita para quem odeia casacos sintéticos barulhentos. Feita em sarja de algodão pura e encorpada, não tem forro sintético (o que permite respirabilidade) e fica melhor quanto mais você usa e lava. Três bolsos utilitários externos e um interno para celular e carteira.",
    curatorName: "Lucas Mendonça (Editor de Estilo)",
    pros: [
      "Sarja densa de 320g/m² que aguenta anos de uso sem rasgar",
      "Costura tripla nas cavas e ombros (construção genuína de workwear)",
      "Botões naturais em corozo vegetal resistentes a quebra"
    ],
    cons: [
      "Tecido rígido nos primeiros 3 dias de uso (amacia conforme o corpo aquece)",
      "Não é impermeável (é algodão respirável, não capa de chuva)"
    ],
    originalPrice: 489.00,
    bestPrice: 289.90,
    historicalLowestPrice: 289.90,
    averageMarketPrice: 420.00,
    specs: {
      material: "100% Algodão Sarja Heavy Duty",
      fabricWeight: "320 g/m²",
      fitAdvice: "Corte reto tradicional. Dá espaço para usar com moletom ou camiseta pesada por baixo.",
      durabilityRating: "Excepcional",
      origin: "Feito no Brasil",
      washingCare: "Lavar do avesso em ciclo suave com sabão líquido."
    },
    offers: [
      {
        id: "off-3-1",
        storeName: "Loja Oficial",
        originalPrice: 489.00,
        currentPrice: 289.90,
        url: "https://lojaexemplo.com.br",
        couponCode: "GARIMPOCHORE",
        couponDiscountText: "R$ 50 de desconto exclusivo",
        isBestPrice: true,
        inStock: true,
        installments: "4x de R$ 72,47 sem juros",
        shippingNote: "Frete grátis Brasil"
      },
      {
        id: "off-3-2",
        storeName: "Farfetch",
        originalPrice: 489.00,
        currentPrice: 389.00,
        url: "https://www.farfetch.com",
        isBestPrice: false,
        inStock: true
      }
    ],
    priceHistory: [
      { date: "15/Nov", price: 489.00 },
      { date: "10/Jan", price: 449.00 },
      { date: "01/Fev", price: 349.00 },
      { date: "Hoje", price: 289.90, label: "Preço de fechamento de lote" }
    ],
    featured: true,
    collectionId: "col-chore-jackets",
    publishedAt: "2025-02-26",
    stockStatus: "Em estoque",
    availableSizes: ["P", "M", "G", "GG", "XG"]
  },
  {
    id: "prod-4",
    slug: "calca-sarja-ampla-com-pregas-olive",
    title: "Calça Chino Ampla com Pregas Duplas Olive Green",
    brand: "Sartorial Street",
    category: "calcas-denim",
    styleTags: ["Alfaiataria Despojada", "Minimalista", "Workwear"],
    imageUrl: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1000&q=80"
    ],
    editorialBadge: "Corte Perfeito",
    editorialHeadline: "A silhueta que aposenta de vez a calça skinny desconfortável: cintura média, pregas profundas e barra com peso.",
    curatorReview: "O equilíbrio perfeito entre a elegância da alfaiataria e o despojamento do streetwear. Feita em sarja encorpada com tingimento reativo que não desbota nas primeiras lavagens. As pregas frontais dão volume e movimento à coxa, sem achatar a silhueta.",
    curatorName: "Marina Vaz (Stylist & Consultora)",
    pros: [
      "Caimento fluido elegante que combina com tênis retrô, mocassim ou bota",
      "Cós estruturado com ajuste lateral e forro em tricoline",
      "Sarja 100% algodão respirável de 260g"
    ],
    cons: [
      "Pode exigir ajuste na barra dependendo da sua altura",
      "Precisa de ferro morno após secar para manter o vinco da prega nítido"
    ],
    originalPrice: 349.00,
    bestPrice: 199.90,
    historicalLowestPrice: 189.00,
    averageMarketPrice: 289.00,
    specs: {
      material: "100% Algodão Sarja Acetinada",
      fabricWeight: "260 g/m²",
      fitAdvice: "Corte amplo / Wide leg clássico. Compre seu número de cintura habitual.",
      durabilityRating: "Alta",
      origin: "Brasil",
      washingCare: "Lavar pelo avesso em temperatura ambiente."
    },
    offers: [
      {
        id: "off-4-1",
        storeName: "Dafiti",
        originalPrice: 349.00,
        currentPrice: 199.90,
        url: "https://www.dafiti.com.br",
        isBestPrice: true,
        inStock: true,
        installments: "3x de R$ 66,63 sem juros"
      },
      {
        id: "off-4-2",
        storeName: "Zattini",
        originalPrice: 349.00,
        currentPrice: 249.00,
        url: "https://www.zattini.com.br",
        isBestPrice: false,
        inStock: true
      }
    ],
    priceHistory: [
      { date: "01/Jan", price: 349.00 },
      { date: "15/Jan", price: 299.00 },
      { date: "10/Fev", price: 249.00 },
      { date: "Hoje", price: 199.90 }
    ],
    featured: false,
    collectionId: "col-alfaiataria-despojada",
    publishedAt: "2025-02-25",
    stockStatus: "Em estoque",
    availableSizes: ["38", "40", "42", "44"]
  },
  {
    id: "prod-5",
    slug: "camisa-linho-puro-100-gola-camp-collar-areia",
    title: "Camisa 100% Linho Puro Gola Camp Collar Areia",
    brand: "Terra & Linho Cia.",
    category: "camisas",
    styleTags: ["Alfaiataria Despojada", "Minimalista"],
    imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80"
    ],
    editorialBadge: "Linho de Verdade",
    editorialHeadline: "Cuidado com o 'toque de linho' das lojas (que é 90% poliéster). Esta é 100% fibra natural com gramatura média.",
    curatorReview: "Linho sintético é uma armadilha térmica: esquenta e pinica. Esta camisa utiliza linho europeu puro, lavado para eliminar a aspereza inicial. A gola camp collar (aberta estilo cubano) traz leveza imediata para o visual de verão sem parecer desleixado.",
    curatorName: "Lucas Mendonça (Editor de Estilo)",
    pros: [
      "100% Linho genuíno termorregulador (extremamente fresco no calor)",
      "Gramatura média que não fica transparente",
      "Botões de madrepérola natural com costura cruzada reforçada"
    ],
    cons: [
      "O linho amassa naturalmente com o uso (aceite a textura orgânica)",
      "Requer secagem à sombra para manter o tom areia natural"
    ],
    originalPrice: 420.00,
    bestPrice: 249.00,
    historicalLowestPrice: 249.00,
    averageMarketPrice: 350.00,
    specs: {
      material: "100% Linho Europeu Pré-lavado",
      fabricWeight: "175 g/m²",
      fitAdvice: "Relaxed Fit. Não compre tamanho maior, ela já tem corte soltinho e arejado.",
      durabilityRating: "Alta",
      origin: "Brasil (Fios Importados)",
      washingCare: "Lavar à mão ou modo delicado. Não torcer com força."
    },
    offers: [
      {
        id: "off-5-1",
        storeName: "Amazon Brasil",
        originalPrice: 420.00,
        currentPrice: 249.00,
        url: "https://www.amazon.com.br",
        isBestPrice: true,
        inStock: true,
        installments: "4x de R$ 62,25 sem juros",
        shippingNote: "Entrega Prime Rápida"
      },
      {
        id: "off-5-2",
        storeName: "Loja Oficial",
        originalPrice: 420.00,
        currentPrice: 289.00,
        url: "https://lojaexemplo.com.br",
        isBestPrice: false,
        inStock: true
      }
    ],
    priceHistory: [
      { date: "01/Dez", price: 420.00 },
      { date: "15/Jan", price: 360.00 },
      { date: "01/Fev", price: 299.00 },
      { date: "Hoje", price: 249.00, label: "Melhor preço da temporada" }
    ],
    featured: false,
    collectionId: "col-alfaiataria-despojada",
    publishedAt: "2025-02-24",
    stockStatus: "Em estoque",
    availableSizes: ["P", "M", "G", "GG"]
  },
  {
    id: "prod-6",
    slug: "tote-bag-lona-encerada-heavy-duty",
    title: "Tote Bag Lona Encerada 16oz com Detalhes em Couro",
    brand: "Field & Craft Goods",
    category: "acessorios",
    styleTags: ["Workwear", "Gorpcore", "Minimalista"],
    imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80"
    ],
    editorialBadge: "Indestrutível",
    editorialHeadline: "Aguenta notebook de 16\", garrafa de 1L e compras pesadas sem estourar as alças.",
    curatorReview: "Chega de sacolas finas promocionais que arrebentam no ombro. Esta tote bag é construída em lona de algodão de 16oz tratada com cera natural repelente à chuva leve. As alças são em couro soleta com rebites de latão maciço que suportam mais de 15kg de carga contínua.",
    curatorName: "Gabriel Sampaio (Sneakers & Silhuetas)",
    pros: [
      "Lona encerada ultra resistente que desenvolve pátina única com o tempo",
      "Rebites de reforço em latão maciço nas 4 junções de alça",
      "Compartimento acolchoado interno para notebook até 15.6 polegadas"
    ],
    cons: [
      "A bolsa pesa 650g vazia por conta da lona grossa e rebites metálicos",
      "Não pode ser lavada em máquina (apenas pano e escova macia)"
    ],
    originalPrice: 289.00,
    bestPrice: 169.90,
    historicalLowestPrice: 169.90,
    averageMarketPrice: 240.00,
    specs: {
      material: "Lona 100% Algodão 16oz Encerada e Alças em Couro Bovino",
      fabricWeight: "450 g/m² (16 oz)",
      fitAdvice: "Alça de 28cm de vão livre: cabe confortavelmente no ombro mesmo usando casaco.",
      durabilityRating: "Excepcional",
      origin: "Feito à mão no Brasil",
      washingCare: "Limpeza a seco com escova de cerdas naturais."
    },
    offers: [
      {
        id: "off-6-1",
        storeName: "Amazon Brasil",
        originalPrice: 289.00,
        currentPrice: 169.90,
        url: "https://www.amazon.com.br",
        couponCode: "ACESSORIOS10",
        couponDiscountText: "Cupom direto no checkout",
        isBestPrice: true,
        inStock: true,
        installments: "3x de R$ 56,63 sem juros",
        shippingNote: "Frete Grátis Prime"
      },
      {
        id: "off-6-2",
        storeName: "Loja Oficial",
        originalPrice: 289.00,
        currentPrice: 219.00,
        url: "https://lojaexemplo.com.br",
        isBestPrice: false,
        inStock: true
      }
    ],
    priceHistory: [
      { date: "01/Nov", price: 289.00 },
      { date: "15/Dez", price: 259.00 },
      { date: "10/Jan", price: 219.00 },
      { date: "Hoje", price: 169.90, label: "Desconto histórico" }
    ],
    featured: false,
    collectionId: "col-acessorios-funcionais",
    publishedAt: "2025-02-23",
    stockStatus: "Em estoque",
    availableSizes: ["Único (Capacidade 20L)"]
  },
  {
    id: "prod-7",
    slug: "sueter-trico-gola-careca-canelado-carvao",
    title: "Suéter de Tricô Pesado Ponto Inglês Carvão",
    brand: "Nordic Knitwear Studio",
    category: "malhas-trico",
    styleTags: ["Minimalista", "Workwear", "Básico Pesado"],
    imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80"
    ],
    editorialBadge: "Achado de Inverno",
    editorialHeadline: "Zero acrílico fuleiro que faz bolinha na primeira semana: mescla de algodão nobre e lã macia.",
    curatorReview: "Tricô barato de shopping costuma ser 100% poliéster ou acrílico que dá choque estático e enche de bolinhas (pilling). Este suéter usa ponto inglês encorpado em fio nobre, garantindo aquecimento térmico real sem sufocar e com textura visual rica.",
    curatorName: "Marina Vaz (Stylist & Consultora)",
    pros: [
      "Ponto inglês denso que não esgarça na barra e nos punhos",
      "Não pinica na pele (pode usar direto sobre camiseta fina)",
      "Cor carvão mesclada que esconde poeira e combina com tudo"
    ],
    cons: [
      "Deve ser guardado dobrado em gaveta (nunca pendurado em cabide para não deformar o ombro)"
    ],
    originalPrice: 459.00,
    bestPrice: 229.50,
    historicalLowestPrice: 229.50,
    averageMarketPrice: 380.00,
    specs: {
      material: "70% Algodão Nobre, 30% Lã Natural",
      fabricWeight: "380 g/m² (Tricô encorpado)",
      fitAdvice: "Regular fit clássico. Caimento impecável sem sobrar pano na cintura.",
      durabilityRating: "Alta",
      origin: "Brasil",
      washingCare: "Lavar à mão com xampu neutro ou sabão de coco. Secar na horizontal."
    },
    offers: [
      {
        id: "off-7-1",
        storeName: "Farfetch",
        originalPrice: 459.00,
        currentPrice: 229.50,
        url: "https://www.farfetch.com",
        couponCode: "OFF50",
        couponDiscountText: "50% OFF em liquidação sazonal",
        isBestPrice: true,
        inStock: true,
        installments: "4x de R$ 57,37 sem juros",
        shippingNote: "Entrega expressa segurada"
      },
      {
        id: "off-7-2",
        storeName: "Loja Oficial",
        originalPrice: 459.00,
        currentPrice: 319.00,
        url: "https://lojaexemplo.com.br",
        isBestPrice: false,
        inStock: true
      }
    ],
    priceHistory: [
      { date: "01/Dez", price: 459.00 },
      { date: "15/Jan", price: 399.00 },
      { date: "10/Fev", price: 299.00 },
      { date: "Hoje", price: 229.50, label: "Liquidando últimas peças" }
    ],
    featured: false,
    collectionId: "col-basicos-pesados",
    publishedAt: "2025-02-22",
    stockStatus: "Poucas unidades",
    availableSizes: ["M", "G", "GG"]
  },
  {
    id: "prod-8",
    slug: "bone-dad-hat-sarja-desestruturado-verde-militar",
    title: "Boné Dad Cap 6 Painéis em Sarja Lavada Desestruturado",
    brand: "Good Vintage Goods",
    category: "acessorios",
    styleTags: ["Retrô & Vintage", "Streetwear Sóbrio", "Minimalista"],
    imageUrl: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=80"
    ],
    editorialBadge: "Básico Certeiro",
    editorialHeadline: "Sem logos gigantes de marcas: fivela traseira em latão envelhecido e copa baixa com caimento natural.",
    curatorReview: "O boné ideal não deve parecer que você é um outdoor ambulante. Este modelo segue a clássica modelagem americana desestruturada (sem aquela espuma dura na frente que deixa a cabeça quadrada). A sarja pré-lavada tem aspecto macio e aba curvada na medida certa.",
    curatorName: "Lucas Mendonça (Editor de Estilo)",
    pros: [
      "Design sem branding chamativo: limpo, discreto e versátil",
      "Fivela traseira com fecho de metal e passador embutido para esconder a fita",
      "100% algodão respirável com ilhoses bordados"
    ],
    cons: [
      "Copa baixa (se você prefere boné alto estilo trucker/skate reto, este não é para você)"
    ],
    originalPrice: 129.00,
    bestPrice: 69.90,
    historicalLowestPrice: 69.90,
    averageMarketPrice: 110.00,
    specs: {
      material: "100% Algodão Sarja Peletizada 220g",
      fitAdvice: "Tamanho único ajustável (54cm a 61cm de circunferência).",
      durabilityRating: "Alta",
      origin: "Brasil",
      washingCare: "Lavar à mão com escova de dentes macia e sabão neutro."
    },
    offers: [
      {
        id: "off-8-1",
        storeName: "Amazon Brasil",
        originalPrice: 129.00,
        currentPrice: 69.90,
        url: "https://www.amazon.com.br",
        isBestPrice: true,
        inStock: true,
        shippingNote: "Entrega Prime"
      },
      {
        id: "off-8-2",
        storeName: "Dafiti",
        originalPrice: 129.00,
        currentPrice: 89.90,
        url: "https://www.dafiti.com.br",
        isBestPrice: false,
        inStock: true
      }
    ],
    priceHistory: [
      { date: "01/Dez", price: 129.00 },
      { date: "15/Jan", price: 99.00 },
      { date: "Hoje", price: 69.90 }
    ],
    featured: false,
    collectionId: "col-acessorios-funcionais",
    publishedAt: "2025-02-21",
    stockStatus: "Em estoque",
    availableSizes: ["Único Ajustável"]
  }
];
