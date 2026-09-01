import React from "react";
import { Product } from "../types";
import { formatBRL, calculateDiscount } from "../lib/utils";
import { X, Trash2, Bookmark, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

interface SavedProductsModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedProducts: Product[];
  onRemoveSaved: (productId: string) => void;
  onOpenDetail: (product: Product) => void;
}

export const SavedProductsModal: React.FC<SavedProductsModalProps> = ({
  isOpen,
  onClose,
  savedProducts,
  onRemoveSaved,
  onOpenDetail,
}) => {
  if (!isOpen) return null;

  const totalOriginal = savedProducts.reduce((acc, p) => acc + p.originalPrice, 0);
  const totalBest = savedProducts.reduce((acc, p) => acc + p.bestPrice, 0);
  const totalSavings = totalOriginal - totalBest;

  return (
    <div
      id="saved-products-backdrop"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end"
      onClick={onClose}
    >
      <div
        id="saved-products-drawer"
        className="bg-[#FBFBF9] border-l border-[#1C1C1A]/10 w-full max-w-md h-full flex flex-col justify-between shadow-2xl p-6 sm:p-7 space-y-5 animate-slideLeft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-[#1C1C1A]/10 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#E7EFEA] text-[#2D5A43]">
              <Bookmark className="w-4 h-4 fill-[#2D5A43]" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-[#1C1C1A]">
                Achados Salvos
              </h2>
              <p className="text-xs text-[#1C1C1A]/60 font-sans">
                {savedProducts.length} {savedProducts.length === 1 ? "peça selecionada" : "peças selecionadas"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#1C1C1A]/40 hover:text-[#1C1C1A] hover:bg-[#F4F3EE] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Savings summary banner */}
        {savedProducts.length > 0 && totalSavings > 0 && (
          <div className="bg-[#1C1C1A] text-white p-4 rounded-2xl flex items-center justify-between text-xs shadow-xs">
            <div>
              <span className="text-[#C88A2E] uppercase font-bold text-[10px] tracking-wider block font-sans">
                Economia Acumulada
              </span>
              <span className="font-mono text-xl font-extrabold text-white">
                {formatBRL(totalSavings)}
              </span>
            </div>
            <div className="text-right text-[11px] text-white/70 font-sans">
              <span>Total com desconto:</span>
              <span className="block font-mono font-bold text-white text-sm">
                {formatBRL(totalBest)}
              </span>
            </div>
          </div>
        )}

        {/* Items List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {savedProducts.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#F4F3EE] flex items-center justify-center mx-auto text-[#1C1C1A]/40">
                <Bookmark className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1C1C1A]">
                Nenhum achado salvo ainda
              </h3>
              <p className="text-xs text-[#1C1C1A]/60 max-w-xs mx-auto font-sans leading-relaxed">
                Clique no ícone de marcador nos cards para guardar as peças que você deseja acompanhar ou comprar depois.
              </p>
            </div>
          ) : (
            savedProducts.map((product) => {
              const bestOffer = product.offers.find((o) => o.isBestPrice) || product.offers[0];
              const discount = calculateDiscount(product.originalPrice, product.bestPrice);

              return (
                <div
                  key={product.id}
                  className="bg-white border border-[#1C1C1A]/10 rounded-2xl p-4 flex gap-3.5 items-center group relative hover:border-[#1C1C1A]/30 transition-all shadow-2xs"
                >
                  <ImageWithFallback
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded-xl bg-[#F4F3EE] border border-[#1C1C1A]/5"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D5A43]">
                        {product.brand}
                      </span>
                      {discount > 0 && (
                        <span className="text-[10px] font-mono font-bold text-[#B85D43] bg-[#FAECE7] px-2 py-0.5 rounded-full">
                          -{discount}%
                        </span>
                      )}
                    </div>

                    <h4
                      onClick={() => {
                        onClose();
                        onOpenDetail(product);
                      }}
                      className="font-serif font-bold text-xs text-[#1C1C1A] truncate group-hover:text-[#2D5A43] cursor-pointer mt-0.5"
                    >
                      {product.title}
                    </h4>

                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-mono font-extrabold text-sm text-[#1C1C1A]">
                        {formatBRL(product.bestPrice)}
                      </span>
                      <span className="text-[10px] text-[#1C1C1A]/60 font-sans">
                        na {bestOffer?.storeName}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => onRemoveSaved(product.id)}
                      className="text-[#1C1C1A]/40 hover:text-[#B85D43] p-1.5 rounded-md transition-colors"
                      title="Remover"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={bestOffer?.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-[#1C1C1A] text-white hover:bg-[#4A5548] transition-colors shadow-2xs"
                      title="Ir para loja com menor preço"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {savedProducts.length > 0 && (
          <div className="pt-3 border-t border-[#1C1C1A]/10">
            <button
              onClick={onClose}
              className="w-full py-3 rounded-full bg-[#1C1C1A] hover:bg-[#4A5548] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-xs text-center cursor-pointer"
            >
              Continuar Garimpando
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
