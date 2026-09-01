import React from "react";
import { Product } from "../types";
import { formatBRL, calculateDiscount, isHistoricalLow } from "../lib/utils";
import { Bookmark, Bell, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

interface ProductCardProps {
  product: Product;
  isSaved: boolean;
  onToggleSave: (productId: string) => void;
  onOpenDetail: (product: Product) => void;
  onOpenAlert: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isSaved,
  onToggleSave,
  onOpenDetail,
  onOpenAlert,
}) => {
  const discountPercent = calculateDiscount(product.originalPrice, product.bestPrice);
  const bestOffer = product.offers.find((o) => o.isBestPrice) || product.offers[0];
  const isAllTimeLow = isHistoricalLow(product.bestPrice, product.historicalLowestPrice);

  return (
    <article
      id={`product-card-${product.id}`}
      className="group bg-white rounded-3xl border border-[#1C1C1A]/10 hover:border-[#1C1C1A]/30 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-2xl hover:shadow-[#1C1C1A]/5"
    >
      {/* Top Image Section */}
      <div className="relative aspect-[4/3] sm:aspect-[4/5] bg-[#F4F3EE] overflow-hidden">
        <ImageWithFallback
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
        />

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 pointer-events-none">
          <div className="flex flex-col gap-1.5 items-start">
            {product.editorialBadge && (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#2D5A43]/20 shadow-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2D5A43] animate-pulse"></div>
                <span className="text-[10px] font-bold text-[#2D5A43] uppercase tracking-tighter">
                  {product.editorialBadge}
                </span>
              </div>
            )}
            {isAllTimeLow && (
              <span className="inline-flex items-center gap-1 bg-[#B85D43] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow-xs">
                Mínima Histórica
              </span>
            )}
          </div>

          {discountPercent > 0 && (
            <span className="bg-[#1C1C1A] text-white text-xs font-bold font-mono px-2.5 py-1 rounded-md shadow-xs">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* Action icons on image */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
          <button
            id={`btn-alert-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onOpenAlert(product);
            }}
            className="p-2 rounded-full bg-white/90 hover:bg-white text-[#1C1C1A]/60 hover:text-[#B85D43] shadow-sm transition-all backdrop-blur-xs cursor-pointer"
            title="Criar alerta de preço"
          >
            <Bell className="w-3.5 h-3.5" />
          </button>

          <button
            id={`btn-save-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(product.id);
            }}
            className={`p-2 rounded-full shadow-sm transition-all backdrop-blur-xs cursor-pointer ${
              isSaved
                ? "bg-[#1C1C1A] text-white"
                : "bg-white/90 hover:bg-white text-[#1C1C1A]/60 hover:text-[#1C1C1A]"
            }`}
            title={isSaved ? "Remover dos salvos" : "Salvar achado"}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? "fill-white" : ""}`} />
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Brand & Durability */}
          <div className="flex items-center justify-between text-[10px] text-[#1C1C1A]/40 uppercase tracking-widest font-bold mb-1.5">
            <span>{product.brand}</span>
            <span className="text-[#2D5A43] font-semibold">
              {product.specs.durabilityRating && `Nota ${product.specs.durabilityRating}`}
            </span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onOpenDetail(product)}
            className="font-serif text-lg sm:text-xl font-bold text-[#1C1C1A] group-hover:text-[#4A5548] transition-colors line-clamp-1 cursor-pointer"
          >
            {product.title}
          </h3>

          {/* Editorial Headline / Quote */}
          <blockquote className="mt-2.5 text-xs italic text-[#1C1C1A]/70 border-l-2 border-[#B85D43] pl-2.5 py-0.5 line-clamp-2 leading-relaxed bg-[#FBFBF9] rounded-r font-sans">
            "{product.editorialHeadline}"
          </blockquote>

          {/* Spec Badges */}
          <div className="mt-3 flex flex-wrap gap-1.5 text-[10px]">
            {product.specs.fabricWeight && (
              <span className="bg-[#F4F3EE] text-[#1C1C1A]/70 font-semibold px-2.5 py-0.5 rounded-full border border-[#1C1C1A]/5">
                {product.specs.fabricWeight}
              </span>
            )}
            <span className="bg-[#F4F3EE] text-[#1C1C1A]/70 font-semibold px-2.5 py-0.5 rounded-full border border-[#1C1C1A]/5">
              {product.specs.material.split(",")[0]}
            </span>
          </div>
        </div>

        {/* Price & Multistore summary */}
        <div className="pt-3 border-t border-[#1C1C1A]/10 space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#1C1C1A]/40 block">
                Melhor Oferta
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-2xl font-bold text-[#1C1C1A] font-mono tracking-tight">
                  {formatBRL(product.bestPrice)}
                </span>
                {product.originalPrice > product.bestPrice && (
                  <span className="text-xs text-[#1C1C1A]/40 line-through font-mono">
                    {formatBRL(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            {bestOffer && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D5A43] bg-[#E7EFEA] px-2 py-0.5 rounded-md">
                {bestOffer.storeName}
              </span>
            )}
          </div>

          {bestOffer?.couponCode && (
            <div className="text-[11px] text-[#B85D43] font-semibold flex items-center gap-1 bg-[#FAECE7] px-2.5 py-1 rounded-lg border border-[#B85D43]/20">
              <span>Cupom:</span>
              <code className="font-mono font-bold bg-white px-1.5 py-0.2 rounded border border-[#B85D43]/20 text-[#1C1C1A]">
                {bestOffer.couponCode}
              </code>
              <span className="text-[10px] text-[#1C1C1A]/60 ml-auto">
                {bestOffer.couponDiscountText}
              </span>
            </div>
          )}

          {/* Store count & Button */}
          <div className="pt-1">
            <button
              id={`btn-detail-trigger-${product.id}`}
              onClick={() => onOpenDetail(product)}
              className="w-full py-2.5 rounded-xl bg-[#1C1C1A] text-white hover:bg-[#4A5548] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <span>Ver {product.offers.length} {product.offers.length === 1 ? "Loja" : "Lojas"} & Análise</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
