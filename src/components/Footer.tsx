import React, { useState } from "react";
import { siteConfig } from "../config/site";
import { Send, Check, Sparkles, BookOpen, ShieldCheck } from "lucide-react";

interface FooterProps {
  onOpenManifest: () => void;
  onOpenSubmission: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenManifest,
  onOpenSubmission,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <footer id="site-footer" className="bg-[#1C1C1A] text-[#FBFBF9] border-t border-[#1C1C1A]/20 mt-16">
      {/* Top Editorial Stats & Live Insights Bar */}
      <div className="h-16 px-4 sm:px-12 border-b border-white/10 flex flex-wrap items-center justify-between text-[11px] text-[#FBFBF9]/60 bg-[#141413]">
        <div className="max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C88A2E]"></span>
              <span><strong className="text-white font-bold">124</strong> novos achados validados esta semana</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C88A2E]"></span>
              <span><strong className="text-white font-bold">9</strong> guias editoriais ativos</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-bold uppercase tracking-widest text-white/40 text-[10px]">Filtre por Estilo:</span>
            <div className="flex gap-3 text-[11px]">
              <a href="#catalog-filter-bar" className="text-white font-bold hover:underline">Minimalista</a>
              <a href="#catalog-filter-bar" className="text-white/60 hover:text-white transition-colors">Streetwear</a>
              <a href="#catalog-filter-bar" className="text-white/60 hover:text-white transition-colors">Vintage</a>
              <a href="#catalog-filter-bar" className="text-white/60 hover:text-white transition-colors">Quiet Luxury</a>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter & Manifesto Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-12 py-14 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C88A2E]">
              Newsletter Semanal Gratuita
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              O Drop no seu e-mail toda quinta às 09h
            </h3>
            <p className="text-xs text-white/70 max-w-md leading-relaxed font-sans">
              Sem spam diário. Apenas o resumo dos achados com os maiores descontos reais da semana e análises de caimento.
            </p>
          </div>

          <div className="lg:col-span-6">
            {isSubscribed ? (
              <div className="bg-white/10 border border-white/20 p-4 rounded-2xl flex items-center gap-3 text-xs text-[#C88A2E]">
                <Check className="w-5 h-5" />
                <span>Inscrição confirmada! Você receberá o próximo drop editorial em primeira mão.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Digite seu melhor e-mail..."
                  className="bg-white/10 border border-white/15 focus:border-[#C88A2E] text-xs text-white placeholder:text-white/40 px-4 py-3 rounded-full flex-1 focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  className="bg-[#C88A2E] hover:bg-[#B85D43] text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Assinar Drop</span>
                </button>
              </form>
            )}
            <span className="text-[10px] text-white/40 block mt-2">
              Desinscreva-se a qualquer momento com um clique. Zero venda de dados.
            </span>
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-black tracking-tight text-white">
                GARIMPO
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#C88A2E] uppercase mt-0.5">
                Curadoria Independente
              </span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed font-sans">
              {siteConfig.tagline}. Filtramos o ruído do e-commerce brasileiro para entregar escolhas inteligentes.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={siteConfig.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-[#C88A2E]" />
                <span>Telegram</span>
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Editorial Links */}
          <div className="space-y-2 text-xs">
            <span className="font-bold uppercase tracking-widest text-[#C88A2E] text-[10px] block mb-3">
              Curadoria & Ética
            </span>
            <ul className="space-y-2.5 text-white/70">
              <li>
                <button
                  onClick={onOpenManifest}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C88A2E]" />
                  Como Garimpamos (Manifesto)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSubmission}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#B85D43]" />
                  Indique uma Peça
                </button>
              </li>
              <li>
                <a href="#catalog-filter-bar" className="hover:text-white transition-colors">
                  Dossiês & Coleções da Semana
                </a>
              </li>
              <li>
                <span className="text-white/40">Drop #42 • Atualizado Semanalmente</span>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-2 text-xs">
            <span className="font-bold uppercase tracking-widest text-[#C88A2E] text-[10px] block mb-3">
              Categorias em Destaque
            </span>
            <ul className="space-y-2 text-white/70">
              <li>Camisetas Heavyweight 240g+</li>
              <li>Silhuetas Retrô & Tênis Clássicos</li>
              <li>Chore Jackets em Sarja Pura</li>
              <li>Calças Alfaiataria com Pregas</li>
              <li>Camisas em Linho Genuíno</li>
            </ul>
          </div>

          {/* Transparency & Disclosure */}
          <div className="space-y-2 text-xs">
            <span className="font-bold uppercase tracking-widest text-[#C88A2E] text-[10px] block mb-3">
              Transparência
            </span>
            <p className="text-[11px] text-white/60 leading-relaxed font-sans">
              {siteConfig.disclosure}
            </p>
          </div>

        </div>

        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <span>© {new Date().getFullYear()} {siteConfig.name}. Curadoria independente. Feito para quem valoriza durabilidade.</span>
          <span>Valores e estoques sujeitos a alteração pelas lojas parceiras.</span>
        </div>
      </div>
    </footer>
  );
};
