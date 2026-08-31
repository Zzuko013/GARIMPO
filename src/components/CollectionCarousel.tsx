import React from "react";
import { EditorialCollection } from "../types";
import { ArrowRight, Tag } from "lucide-react";

interface CollectionCarouselProps {
  collections: EditorialCollection[];
  activeCollectionId: string | null;
  onSelectCollection: (collectionId: string | null) => void;
}

export const CollectionCarousel: React.FC<CollectionCarouselProps> = ({
  collections,
  activeCollectionId,
  onSelectCollection,
}) => {
  return (
    <section id="editorial-collections-carousel" className="py-8 border-b border-[#1C1C1A]/10 px-4 sm:px-12 bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C88A2E]"></span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1C1A] tracking-tight">
                Dossiês & Coleções Temáticas
              </h2>
            </div>
            <p className="text-xs text-[#1C1C1A]/60 mt-1 font-sans">
              Agrupamentos conceituais focados em necessidades reais de vestuário e investimento inteligente
            </p>
          </div>

          {activeCollectionId && (
            <button
              onClick={() => onSelectCollection(null)}
              className="text-xs font-bold text-[#B85D43] hover:underline underline-offset-4 transition-colors uppercase tracking-wider"
            >
              Ver todos (remover filtro)
            </button>
          )}
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {collections.map((col) => {
            const isSelected = activeCollectionId === col.id;
            return (
              <button
                key={col.id}
                id={`collection-card-${col.id}`}
                onClick={() => onSelectCollection(isSelected ? null : col.id)}
                className={`text-left group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 flex flex-col justify-between h-full shadow-2xs ${
                  isSelected
                    ? "bg-[#1C1C1A] text-white border-[#1C1C1A] shadow-lg ring-2 ring-[#1C1C1A]"
                    : "bg-white text-[#1C1C1A] border-[#1C1C1A]/10 hover:border-[#1C1C1A]/30 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-white/10 text-[#C88A2E]"
                          : "bg-[#F4F3EE] text-[#4A5548]"
                      }`}
                    >
                      <Tag className="w-2.5 h-2.5" />
                      {col.tag}
                    </span>
                    <span className="text-[10px] font-mono opacity-60">
                      {col.productIds.length} {col.productIds.length === 1 ? "peça" : "peças"}
                    </span>
                  </div>

                  <h3 className={`font-serif text-base font-bold leading-snug mb-2 line-clamp-2 ${
                    isSelected ? "text-white" : "text-[#1C1C1A] group-hover:text-[#4A5548]"
                  }`}>
                    {col.title}
                  </h3>

                  <p className={`text-xs line-clamp-2 leading-relaxed ${
                    isSelected ? "text-white/70" : "text-[#1C1C1A]/60"
                  }`}>
                    {col.subtitle}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t flex items-center justify-between text-xs font-bold uppercase tracking-wider ${
                  isSelected ? "border-white/15 text-[#C88A2E]" : "border-[#1C1C1A]/10 text-[#1C1C1A]"
                }`}>
                  <span>{isSelected ? "Filtro Ativo" : "Explorar"}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${isSelected ? "text-[#C88A2E]" : ""}`} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
