import React, { useState } from "react";
import { Product, PriceAlert } from "../types";
import { formatBRL } from "../lib/utils";
import { Bell, Check, X, Send, MessageSquare, Mail, Sparkles } from "lucide-react";

interface PriceAlertModalProps {
  product: Product | null;
  onClose: () => void;
  onSaveAlert: (alert: PriceAlert) => void;
}

export const PriceAlertModal: React.FC<PriceAlertModalProps> = ({
  product,
  onClose,
  onSaveAlert,
}) => {
  if (!product) return null;

  const defaultTarget = Math.round(product.bestPrice * 0.85); // 15% discount target
  const [targetPrice, setTargetPrice] = useState<number>(defaultTarget);
  const [channel, setChannel] = useState<"telegram" | "whatsapp" | "email">("telegram");
  const [contact, setContact] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) return;

    const newAlert: PriceAlert = {
      id: `alert-${Date.now()}`,
      productId: product.id,
      productTitle: product.title,
      targetPrice,
      channel,
      contact: contact.trim(),
      createdAt: new Date().toISOString(),
    };

    onSaveAlert(newAlert);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div
      id="price-alert-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        id="price-alert-modal"
        className="bg-[#FBFBF9] border border-[#1C1C1A]/10 rounded-3xl w-full max-w-md p-6 sm:p-7 shadow-2xl relative space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#1C1C1A]/40 hover:text-[#1C1C1A] p-1.5 rounded-full hover:bg-[#F4F3EE] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#E7EFEA] text-[#2D5A43] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1C1C1A]">
              Alerta Cadastrado!
            </h3>
            <p className="text-xs text-[#1C1C1A]/70 max-w-xs mx-auto font-sans leading-relaxed">
              Assim que o preço de <strong>{product.title}</strong> atingir{" "}
              <span className="font-mono font-bold text-[#2D5A43]">{formatBRL(targetPrice)}</span>,
              você receberá uma notificação via {channel}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-[#FAECE7] text-[#B85D43]">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1C1C1A]">
                  Alerta de Queda de Preço
                </h3>
                <span className="text-xs text-[#1C1C1A]/60 font-sans block mt-0.5">
                  Sem spam. Apenas quando o preço baixar de verdade.
                </span>
              </div>
            </div>

            {/* Product summary */}
            <div className="bg-white p-3.5 rounded-2xl flex items-center gap-3 border border-[#1C1C1A]/10 shadow-2xs">
              <img
                src={product.imageUrl}
                alt=""
                className="w-12 h-12 object-cover rounded-xl border border-[#1C1C1A]/5"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-xs text-[#1C1C1A] truncate font-serif">
                  {product.title}
                </h4>
                <p className="text-[11px] text-[#1C1C1A]/60 font-sans mt-0.5">
                  Preço atual: <strong className="font-mono text-[#1C1C1A]">{formatBRL(product.bestPrice)}</strong>
                </p>
              </div>
            </div>

            {/* Target price slider / input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-sans">
                <label className="font-bold text-[#1C1C1A]">
                  Avisar quando atingir:
                </label>
                <span className="font-mono font-extrabold text-[#2D5A43] text-base">
                  {formatBRL(targetPrice)}
                </span>
              </div>

              <input
                type="range"
                min={Math.round(product.bestPrice * 0.5)}
                max={product.bestPrice}
                step={5}
                value={targetPrice}
                onChange={(e) => setTargetPrice(Number(e.target.value))}
                className="w-full accent-[#1C1C1A] cursor-pointer"
              />

              <div className="flex justify-between text-[10px] text-[#1C1C1A]/50 font-mono">
                <span>-50% ({formatBRL(Math.round(product.bestPrice * 0.5))})</span>
                <span>Atual ({formatBRL(product.bestPrice)})</span>
              </div>
            </div>

            {/* Notification channel picker */}
            <div className="space-y-1.5 font-sans">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#1C1C1A]/60 block">
                Canal de Notificação
              </label>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setChannel("telegram")}
                  className={`py-2 px-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex flex-col items-center gap-1 transition-all ${
                    channel === "telegram"
                      ? "bg-[#1C1C1A] text-white border-[#1C1C1A] shadow-xs"
                      : "bg-white text-[#1C1C1A]/70 border-[#1C1C1A]/10 hover:bg-[#F4F3EE]"
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram</span>
                </button>

                <button
                  type="button"
                  onClick={() => setChannel("whatsapp")}
                  className={`py-2 px-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex flex-col items-center gap-1 transition-all ${
                    channel === "whatsapp"
                      ? "bg-[#1C1C1A] text-white border-[#1C1C1A] shadow-xs"
                      : "bg-white text-[#1C1C1A]/70 border-[#1C1C1A]/10 hover:bg-[#F4F3EE]"
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => setChannel("email")}
                  className={`py-2 px-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex flex-col items-center gap-1 transition-all ${
                    channel === "email"
                      ? "bg-[#1C1C1A] text-white border-[#1C1C1A] shadow-xs"
                      : "bg-white text-[#1C1C1A]/70 border-[#1C1C1A]/10 hover:bg-[#F4F3EE]"
                  }`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>E-mail</span>
                </button>
              </div>
            </div>

            {/* Contact Input */}
            <div className="space-y-1.5 font-sans">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#1C1C1A]/60 block">
                {channel === "telegram" && "Seu @ do Telegram ou Telefone"}
                {channel === "whatsapp" && "Seu WhatsApp (com DDD)"}
                {channel === "email" && "Seu melhor E-mail"}
              </label>
              <input
                type={channel === "email" ? "email" : "text"}
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder={
                  channel === "telegram"
                    ? "@seu_usuario"
                    : channel === "whatsapp"
                    ? "(11) 99999-9999"
                    : "voce@email.com"
                }
                className="w-full bg-white border border-[#1C1C1A]/10 rounded-xl px-3.5 py-2.5 text-xs text-[#1C1C1A] focus:outline-none focus:border-[#1C1C1A]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1C1C1A] hover:bg-[#4A5548] text-white py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer mt-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C88A2E]" />
              <span>Ativar Alerta</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
