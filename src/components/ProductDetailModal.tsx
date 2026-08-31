import React, { useState } from "react";
import { Product, Offer } from "../types";
import { formatBRL, calculateDiscount, isHistoricalLow, formatDate } from "../lib/utils";
import {
  X,
  ExternalLink,
  ShieldCheck,
  TrendingDown,
  Sparkles,
  Bookmark,
  Bell,
  Copy,
  Check,
  Share2,
  AlertCircle,
  ThumbsUp,
  ThumbsDown,
  Info,
  Layers,
  Scissors
} from "lucide-react";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (productId: string) => void;
  onOpenAlert: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  isSaved,
  onToggleSave,
  onOpenAlert,
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState<string>(product.imageUrl);
  const [copiedCouponId, setCopiedCouponId] = useState<string | null>(null);
  const [copiedShare, setCopiedShare] = useState(false);

  const images = [product.imageUrl, ...(product.secondaryImages || [])];
  const discountPercent = calculateDiscount(product.originalPrice, product.bestPrice);
  const isAllTimeLow = isHistoricalLow(product.bestPrice, product.historicalLowestPrice);

  const handleCopyCoupon = (offerId: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCouponId(offerId);
    setTimeout(() => setCopiedCouponId(null), 2500);
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  // Price chart calculation
  const minPriceInHistory = Math.min(...product.priceHistory.map((p) => p.price));
  const maxPriceInHistory = Math.max(...product.priceHistory.map((p) => p.price));
  const priceRange = maxPriceInHistory - minPriceInHistory || 1;

  return (
    <div
      id="product-detail-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="product-detail-modal"
        className="bg-[#FBFBF9] border border-[#1C1C1A]/10 rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="sticky top-0 z-20 bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#1C1C1A]/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1C1C1A]/50">
              {product.brand}
            </span>
            <span className="text-[#1C1C1A]/20">•</span>
            <span className="text-xs text-[#1C1C1A]/60 font-medium capitalize">{product.category}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full border border-[#1C1C1A]/10 hover:bg-[#F4F3EE] text-[#1C1C1A]/70 text-xs font-bold flex items-center gap-1.5 transition-colors"
              title="Compartilhar achado"
            >
              {copiedShare ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#2D5A43]" />
                  <span className="text-[11px] text-[#2D5A43]">Copiado!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-[11px] uppercase tracking-wider">Compartilhar</span>
                </>
              )}
            </button>

            <button
              onClick={() => onToggleSave(product.id)}
              className={`p-2 rounded-full border text-xs font-bold flex items-center gap-1.5 transition-colors ${
                isSaved
                  ? "bg-[#1C1C1A] text-white border-[#1C1C1A]"
                  : "border-[#1C1C1A]/10 hover:bg-[#F4F3EE] text-[#1C1C1A]/70"
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? "fill-white" : ""}`} />
              <span className="hidden sm:inline text-[11px] uppercase tracking-wider">
                {isSaved ? "Salvo" : "Salvar"}
              </span>
            </button>

            <button
              id="btn-close-modal"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#F4F3EE] text-[#1C1C1A]/60 hover:text-[#1C1C1A] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Top Section: Gallery + Core Value Proposition */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Gallery (Col 5) */}
            <div className="md:col-span-5 space-y-3">
              <div className="aspect-[4/3] sm:aspect-[4/5] bg-[#F4F3EE] rounded-2xl overflow-hidden border border-[#1C1C1A]/10 relative">
                <img
                  src={activeImage}
                  alt={product.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                {discountPercent > 0 && (
                  <span className="absolute top-3 right-3 bg-[#1C1C1A] text-white text-xs font-bold font-mono px-2.5 py-1 rounded-md shadow-xs">
                    -{discountPercent}% OFF
                  </span>
                )}
              </div>

              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                        activeImage === img
                          ? "border-[#1C1C1A] ring-1 ring-[#1C1C1A]"
                          : "border-[#1C1C1A]/10 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt=""
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Stock and sizes */}
              <div className="bg-[#F4F3EE] p-3.5 rounded-xl border border-[#1C1C1A]/10 text-xs space-y-1.5">
                <div className="flex justify-between items-center text-[#1C1C1A]/60 font-sans">
                  <span>Disponibilidade:</span>
                  <span className="font-bold text-[#1C1C1A]">{product.stockStatus}</span>
                </div>
                <div className="flex justify-between items-center text-[#1C1C1A]/60 font-sans">
                  <span>Tamanhos Disponíveis:</span>
                  <span className="font-mono font-bold text-[#1C1C1A]">
                    {product.availableSizes.join(", ")}
                  </span>
                </div>
              </div>
            </div>

            {/* Product Essentials & Price Box (Col 7) */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {product.editorialBadge && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#2D5A43]/20 shadow-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2D5A43] animate-pulse"></div>
                      <span className="text-[10px] font-bold text-[#2D5A43] uppercase tracking-tighter">
                        {product.editorialBadge}
                      </span>
                    </div>
                  )}
                  {isAllTimeLow && (
                    <span className="bg-[#B85D43] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                      Mínima Histórica 90 Dias
                    </span>
                  )}
                </div>

                <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1C1A] leading-tight">
                  {product.title}
                </h1>

                <p className="mt-2 text-xs font-semibold text-[#1C1C1A]/60">
                  Curadoria assinada por: <span className="text-[#1C1C1A] font-serif italic text-sm">{product.curatorName}</span>
                </p>
              </div>

              {/* Editorial Headline block */}
              <div className="bg-[#F4F3EE] border-l-4 border-[#B85D43] p-4 rounded-r-2xl">
                <p className="font-serif italic text-base sm:text-lg text-[#1C1C1A] leading-relaxed">
                  "{product.editorialHeadline}"
                </p>
              </div>

              {/* Best Price Showcase Box */}
              <div className="bg-white border border-[#1C1C1A]/10 rounded-2xl p-5 shadow-xs space-y-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1C1C1A]/40">
                      Melhor Oferta Auditada
                    </span>
                    <div className="flex items-baseline gap-3 mt-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1A] font-mono tracking-tight">
                        {formatBRL(product.bestPrice)}
                      </span>
                      {product.originalPrice > product.bestPrice && (
                        <span className="text-sm text-[#1C1C1A]/40 line-through font-mono">
                          {formatBRL(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-bold text-[#2D5A43] bg-[#E7EFEA] px-3 py-1 rounded-full inline-block">
                      Economia de {formatBRL(product.originalPrice - product.bestPrice)}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#1C1C1A]/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#1C1C1A]/60">
                  <span>Preço médio de mercado: <strong className="font-mono text-[#1C1C1A]">{formatBRL(product.averageMarketPrice)}</strong></span>
                  
                  <button
                    onClick={() => onOpenAlert(product)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B85D43] hover:underline uppercase tracking-wider"
                  >
                    <Bell className="w-3.5 h-3.5" />
                    Criar Alerta
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Section: Live Store Offer Comparison Table */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2D5A43]" />
                <h3 className="font-serif text-lg font-bold text-[#1C1C1A]">
                  Comparador de Lojas & Preço Real
                </h3>
              </div>
              <span className="text-xs text-[#1C1C1A]/50 font-sans">
                Auditado em tempo real
              </span>
            </div>

            <div className="border border-[#1C1C1A]/10 rounded-2xl overflow-hidden bg-white shadow-2xs">
              <div className="divide-y divide-[#1C1C1A]/10">
                {product.offers.map((offer) => {
                  return (
                    <div
                      key={offer.id}
                      className={`p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors ${
                        offer.isBestPrice ? "bg-[#FBFBF9]" : "hover:bg-[#F4F3EE]/50"
                      }`}
                    >
                      {/* Store info */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-[#1C1C1A]">
                            {offer.storeName}
                          </span>
                          {offer.isBestPrice && (
                            <span className="bg-[#2D5A43] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                              Melhor Preço
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#1C1C1A]/60 font-sans">
                          {offer.shippingNote && (
                            <span>{offer.shippingNote}</span>
                          )}
                          {offer.installments && (
                            <>
                              <span>•</span>
                              <span>{offer.installments}</span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Coupon if exists */}
                      {offer.couponCode && (
                        <div className="flex items-center gap-2 bg-[#FAECE7] border border-[#B85D43]/20 px-3 py-1.5 rounded-xl text-xs">
                          <div>
                            <span className="text-[10px] text-[#B85D43] block uppercase font-bold tracking-wider">
                              {offer.couponDiscountText || "Cupom"}
                            </span>
                            <code className="font-mono font-bold text-[#1C1C1A]">
                              {offer.couponCode}
                            </code>
                          </div>
                          <button
                            onClick={() => handleCopyCoupon(offer.id, offer.couponCode!)}
                            className="p-1 rounded-lg hover:bg-white text-[#B85D43] transition-colors cursor-pointer"
                            title="Copiar cupom"
                          >
                            {copiedCouponId === offer.id ? (
                              <Check className="w-3.5 h-3.5 text-[#2D5A43]" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      )}

                      {/* Price & Direct CTA */}
                      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                        <div className="text-right">
                          <span className="text-lg font-bold font-mono text-[#1C1C1A] block tracking-tight">
                            {formatBRL(offer.currentPrice)}
                          </span>
                          {offer.originalPrice > offer.currentPrice && (
                            <span className="text-[11px] text-[#1C1C1A]/40 line-through font-mono">
                              {formatBRL(offer.originalPrice)}
                            </span>
                          )}
                        </div>

                        <a
                          href={offer.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-2xs ${
                            offer.isBestPrice
                              ? "bg-[#1C1C1A] text-white hover:bg-[#4A5548]"
                              : "bg-[#F4F3EE] text-[#1C1C1A] hover:bg-[#EAE8DF] border border-[#1C1C1A]/10"
                          }`}
                        >
                          <span>Ir para a Loja</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section: Price History Visual Chart */}
          <div className="bg-white border border-[#1C1C1A]/10 rounded-2xl p-6 space-y-4 shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-[#B85D43]" />
                <h3 className="font-serif text-lg font-bold text-[#1C1C1A]">
                  Histórico de Preço dos Últimos 90 Dias
                </h3>
              </div>
              <span className="text-xs font-mono text-[#2D5A43] bg-[#E7EFEA] px-2.5 py-0.5 rounded-md font-bold">
                Auditado pelo Garimpo
              </span>
            </div>

            {/* Visual SVG Timeline representation */}
            <div className="relative pt-6 pb-2 px-2">
              <div className="flex items-end justify-between gap-2 h-32 border-b border-[#1C1C1A]/10">
                {product.priceHistory.map((point, index) => {
                  const normalizedHeight = Math.max(
                    15,
                    Math.round(((point.price - minPriceInHistory) / priceRange) * 75 + 15)
                  );
                  const isLowest = point.price === minPriceInHistory;

                  return (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center justify-end h-full group relative"
                    >
                      {/* Price tooltip on hover */}
                      <div className="absolute -top-7 opacity-90 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-[#1C1C1A] text-white text-[10px] font-mono px-2 py-0.5 rounded pointer-events-none shadow-sm">
                        {formatBRL(point.price)}
                      </div>

                      {/* Bar / Column */}
                      <div
                        style={{ height: `${normalizedHeight}%` }}
                        className={`w-full max-w-[28px] rounded-t transition-all duration-300 ${
                          isLowest
                            ? "bg-[#2D5A43] shadow-xs"
                            : "bg-[#F4F3EE] group-hover:bg-[#EAE8DF] border-t border-[#1C1C1A]/20"
                        }`}
                      />

                      {/* Date label */}
                      <span className="text-[10px] font-mono text-[#1C1C1A]/50 mt-2 block">
                        {point.date}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#1C1C1A]/60 pt-3 font-sans">
                <span>Maior preço registrado: <strong className="font-mono text-[#1C1C1A]">{formatBRL(maxPriceInHistory)}</strong></span>
                <span>Menor preço histórico: <strong className="font-mono text-[#2D5A43] font-bold">{formatBRL(minPriceInHistory)}</strong></span>
              </div>
            </div>
          </div>

          {/* Section: Curator Deep-Dive Review (Why we picked this) */}
          <div className="bg-[#F4F3EE] border border-[#1C1C1A]/10 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-[#1C1C1A]/10 pb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A43]"></span>
              <h3 className="font-serif text-lg font-bold text-[#1C1C1A]">
                Por que garimpamos esta peça?
              </h3>
            </div>

            <p className="text-sm text-[#1C1C1A]/80 leading-relaxed font-sans">
              {product.curatorReview}
            </p>

            {/* Pros and Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Pros */}
              <div className="bg-white p-5 rounded-2xl border border-[#1C1C1A]/10 space-y-2 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2D5A43]">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Pontos Fortes (Por que vale a pena)</span>
                </div>
                <ul className="space-y-2 text-xs text-[#1C1C1A]/70 font-sans">
                  {product.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#2D5A43] font-bold mt-0.5">✓</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="bg-white p-5 rounded-2xl border border-[#1C1C1A]/10 space-y-2 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B85D43]">
                  <ThumbsDown className="w-3.5 h-3.5" />
                  <span>O que você precisa saber antes de comprar</span>
                </div>
                <ul className="space-y-2 text-xs text-[#1C1C1A]/70 font-sans">
                  {product.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#B85D43] font-bold mt-0.5">!</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Technical Specifications Grid */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold text-[#1C1C1A] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#2D5A43]" />
              Ficha Técnica & Instruções de Uso
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-white p-4 rounded-2xl border border-[#1C1C1A]/10 shadow-2xs">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1C1C1A]/40 block">
                  Composição do Tecido
                </span>
                <p className="text-xs font-bold text-[#1C1C1A] mt-1 font-sans">
                  {product.specs.material}
                </p>
              </div>

              {product.specs.fabricWeight && (
                <div className="bg-white p-4 rounded-2xl border border-[#1C1C1A]/10 shadow-2xs">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1C1C1A]/40 block">
                    Gramatura & Peso
                  </span>
                  <p className="text-xs font-bold text-[#1C1C1A] mt-1 font-sans">
                    {product.specs.fabricWeight}
                  </p>
                </div>
              )}

              <div className="bg-white p-4 rounded-2xl border border-[#1C1C1A]/10 shadow-2xs">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1C1C1A]/40 block">
                  Índice de Durabilidade
                </span>
                <p className="text-xs font-bold text-[#2D5A43] mt-1 font-sans">
                  {product.specs.durabilityRating}
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#1C1C1A]/10 shadow-2xs sm:col-span-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1C1C1A]/40 block flex items-center gap-1">
                  <Scissors className="w-3 h-3 text-[#B85D43]" />
                  Dica de Modelagem & Caimento
                </span>
                <p className="text-xs text-[#1C1C1A] mt-1 font-sans">
                  {product.specs.fitAdvice}
                </p>
              </div>

              {product.specs.washingCare && (
                <div className="bg-white p-4 rounded-2xl border border-[#1C1C1A]/10 shadow-2xs sm:col-span-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1C1C1A]/40 block">
                    Cuidados de Lavagem
                  </span>
                  <p className="text-xs text-[#1C1C1A]/70 mt-1 font-sans">
                    {product.specs.washingCare}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Editorial Transparency Disclaimer */}
          <div className="bg-[#F4F3EE] p-4 rounded-2xl border border-[#1C1C1A]/10 flex items-start gap-3 text-xs text-[#1C1C1A]/70 font-sans">
            <Info className="w-4 h-4 text-[#2D5A43] shrink-0 mt-0.5" />
            <p>
              <strong>Transparência Editorial Garimpo:</strong> Os links de compra direcionam para lojas parceiras verificadas. Não cobramos das marcas para elogiá-las. Se um produto for de má qualidade, ele é rejeitado antes de entrar no catálogo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
