import { EditorialCollection } from "../types";

export const EDITORIAL_COLLECTIONS: EditorialCollection[] = [
  {
    id: "col-basicos-pesados",
    slug: "basicos-pesados-durabilidade",
    title: "O Básico que Dura 5 Anos (Sem Deformar)",
    subtitle: "Camisetas de 240g/m², moletons densos e malhas nobres que sobrevivem a centenas de lavagens intactas.",
    curatorNote: "Filtramos mais de 60 marcas para encontrar tecidos com fiação encorpada e ribana resistente.",
    coverImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80",
    tag: "Coleção Essencial",
    productIds: ["prod-1", "prod-7"]
  },
  {
    id: "col-retro-sneakers",
    slug: "silhuetas-retro-tenis-classicos",
    title: "Silhuetas Retrô & Tênis Clássicos Abaixo de R$ 350",
    subtitle: "Fuja do hype inflacionado de R$ 900. Tênis em couro legítimo, design anos 70/80 e conforto real.",
    curatorNote: "Avaliamos flexibilidade do couro, costura da entressola e versatilidade com calças largas.",
    coverImage: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80",
    tag: "Sneakers & Silhuetas",
    productIds: ["prod-2"]
  },
  {
    id: "col-chore-jackets",
    slug: "chore-jackets-workwear-meia-estacao",
    title: "Chore Jackets & Peças Utilitárias de Meia-Estação",
    subtitle: "Sarja de algodão de verdade, botões reforçados e bolsos funcionais para substituir casacos sintéticos.",
    curatorNote: "Peças inspiradas no vestuário de trabalho operário que envelhecem com beleza e história.",
    coverImage: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80",
    tag: "Workwear Heritage",
    productIds: ["prod-3"]
  },
  {
    id: "col-alfaiataria-despojada",
    slug: "alfaiataria-despojada-linho-sarja",
    title: "Alfaiataria Despojada & Linho Natural",
    subtitle: "Calças com pregas e camisas camp collar para um visual elegante sem rigidez desconfortável.",
    curatorNote: "A transição perfeita para quem quer se vestir bem sem parecer engravatado corporativo.",
    coverImage: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80",
    tag: "Cortes Fluidos",
    productIds: ["prod-4", "prod-5"]
  },
  {
    id: "col-acessorios-funcionais",
    slug: "acessorios-funcionais-couro-lona",
    title: "Acessórios Funcionais em Lona & Couro",
    subtitle: "Totes indestrutíveis, bonés em sarja desestruturada e detalhes que elevam qualquer composição.",
    curatorNote: "Construções artesanais com ferragens maciças e materiais naturais.",
    coverImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
    tag: "Everyday Carry",
    productIds: ["prod-6", "prod-8"]
  }
];
