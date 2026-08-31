import React from "react";
import { siteConfig } from "../config/site";
import { ArrowRight, Sparkles, BookOpen, ExternalLink } from "lucide-react";

interface EditorialHeroProps {
  onExploreClick: () => void;
  onOpenManifest: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({
  onExploreClick,
  onOpenManifest,
}) => {
  return (
    <section id="editorial-hero" className="border-b border-[#1C1C1A]/10 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left Column: Editorial Feature & Statement (Col 7) */}
        <div className="lg:col-span-7 p-6 sm:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#1C1C1A]/10 bg-white">
          <div className="mb-6">
            <span className="inline-block px-3.5 py-1 bg-[#F4F3EE] text-[#4A5548] text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
              Edição de Outono 2024
            </span>
            
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[62px] leading-[0.98] font-bold tracking-tight text-[#1C1C1A] mb-6">
              5 tênis que <span className="italic text-[#B85D43]">parecem</span> caros, mas não são.
            </h1>
            
            <p className="text-base sm:text-lg text-[#1C1C1A]/70 leading-relaxed max-w-xl mb-8 font-sans">
              Analisamos tecido, caimento e histórico de preço para separar o ouro do lixo. Abaixo de R$ 260, estas são as únicas silhuetas que realmente valem seu investimento este mês.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                id="btn-hero-explore"
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1C1C1A] text-white hover:bg-[#4A5548] text-xs font-bold uppercase tracking-widest transition-colors shadow-sm"
              >
                <span>Ver Achados de Hoje</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="btn-hero-manifest"
                onClick={onOpenManifest}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#1C1C1A]/15 bg-[#FBFBF9] hover:bg-[#F4F3EE] text-[#1C1C1A] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#4A5548]" />
                <span>Nossos 4 Princípios</span>
              </button>
            </div>
          </div>

          {/* Curatorship byline & category badges */}
          <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-[#1C1C1A]/10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#1C1C1A]/40 mb-1">
                Curadoria por
              </p>
              <p className="font-serif italic text-base sm:text-lg text-[#1C1C1A]">
                Guilherme Martins
              </p>
            </div>
            
            <div className="hidden sm:block w-px h-10 bg-[#1C1C1A]/10"></div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#1C1C1A]/40 mb-1">
                Categorias no Dossiê
              </p>
              <div className="flex gap-2">
                <span className="text-[11px] font-semibold text-[#1C1C1A] bg-[#F4F3EE] px-2.5 py-0.5 rounded-full border border-[#1C1C1A]/10">
                  Tênis Retrô
                </span>
                <span className="text-[11px] font-semibold text-[#1C1C1A] bg-[#F4F3EE] px-2.5 py-0.5 rounded-full border border-[#1C1C1A]/10">
                  Básicos Pesados
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Spotlight Card (Col 5) */}
        <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 bg-[#F4F3EE]/50 flex flex-col justify-center">
          <div className="relative bg-white border border-[#1C1C1A]/10 rounded-3xl overflow-hidden shadow-2xl shadow-[#1C1C1A]/5">
            {/* Image & Badges */}
            <div className="relative aspect-[4/3] sm:aspect-[4/5] bg-stone-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80"
                alt="Adidas Grand Court TD"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#2D5A43]/20 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#2D5A43] animate-pulse"></div>
                  <span className="text-[10px] font-bold text-[#2D5A43] uppercase tracking-tighter">
                    Veredito: Eu Compraria
                  </span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-[#1C1C1A] text-white text-[10px] font-bold uppercase tracking-widest rounded-md shadow-xs">
                  Achado do Dia
                </span>
              </div>
            </div>

            {/* Product Card Details */}
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#1C1C1A]/40 mb-1">
                    Adidas Originals
                  </p>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1C1A]">
                    Grand Court TD Lifestyle
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-mono text-[#1C1C1A]/40 line-through">
                    R$ 299,90
                  </p>
                  <p className="font-mono text-2xl font-bold text-[#1C1C1A]">
                    R$ 189,90
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#1C1C1A]/65 italic leading-relaxed mb-6 font-sans">
                "Silhueta limpa inspirada nos anos 70. O cabedal não tem aquele brilho plástico de tênis barato. Abaixo de R$ 200 é uma compra sem erro."
              </p>

              <button
                onClick={onExploreClick}
                className="flex items-center justify-center w-full py-3.5 bg-[#1C1C1A] text-white rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#4A5548] transition-colors cursor-pointer"
              >
                <span>Explorar no Catálogo Completo</span>
                <span className="ml-2 text-xs">↗</span>
              </button>

              <p className="text-[10px] text-center text-[#1C1C1A]/40 mt-3.5">
                Menor preço auditado nos últimos 90 dias • 3 lojas comparadas
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
