import React, { useState } from "react";
import { X, Sparkles, Check, Send } from "lucide-react";

interface CuratorSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CuratorSubmissionModal: React.FC<CuratorSubmissionModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [link, setLink] = useState("");
  const [productName, setProductName] = useState("");
  const [reason, setReason] = useState("");
  const [curatorEmail, setCuratorEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!link.trim() || !reason.trim()) return;

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      id="curator-submission-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        id="curator-submission-modal"
        className="bg-[#FBFBF9] border border-[#1C1C1A]/10 rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#1C1C1A]/40 hover:text-[#1C1C1A] p-1.5 rounded-full hover:bg-[#F4F3EE] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#E7EFEA] text-[#2D5A43] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1C1C1A]">
              Indicação Enviada para a Mesa Editorial!
            </h3>
            <p className="text-xs text-[#1C1C1A]/70 max-w-sm mx-auto font-sans leading-relaxed">
              Nossa equipe de curadoria irá auditar o tecido, o caimento e o histórico de preço nos próximos dias. Se for aprovado, entrará no próximo Drop Semanal.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-[#FAECE7] text-[#B85D43]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1C1C1A]">
                  Indicar um Achado
                </h3>
                <span className="text-xs text-[#1C1C1A]/60 font-sans block mt-0.5">
                  Encontrou uma peça de alta qualidade com preço justo na internet?
                </span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#1C1C1A]/60 block">
                Link do Produto (Loja, Marca ou Marketplace) *
              </label>
              <input
                type="url"
                required
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="https://exemplo.com.br/produto-incrivel"
                className="w-full bg-white border border-[#1C1C1A]/10 rounded-xl px-3.5 py-2.5 text-xs text-[#1C1C1A] focus:outline-none focus:border-[#1C1C1A] font-sans"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#1C1C1A]/60 block">
                Nome da Peça / Marca
              </label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Ex: Tênis Canvas Retrô 70s / Marca X"
                className="w-full bg-white border border-[#1C1C1A]/10 rounded-xl px-3.5 py-2.5 text-xs text-[#1C1C1A] focus:outline-none focus:border-[#1C1C1A] font-sans"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#1C1C1A]/60 block">
                Por que é um achado? (Tecido, caimento, preço raro) *
              </label>
              <textarea
                required
                rows={3}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Ex: É 100% algodão 260g, custa menos de R$ 150 e a gola não esgarça nem depois de 10 lavagens..."
                className="w-full bg-white border border-[#1C1C1A]/10 rounded-xl px-3.5 py-2.5 text-xs text-[#1C1C1A] focus:outline-none focus:border-[#1C1C1A] resize-none font-sans"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#1C1C1A]/60 block">
                Seu E-mail (opcional, para avisarmos se publicarmos)
              </label>
              <input
                type="email"
                value={curatorEmail}
                onChange={(e) => setCuratorEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full bg-white border border-[#1C1C1A]/10 rounded-xl px-3.5 py-2.5 text-xs text-[#1C1C1A] focus:outline-none focus:border-[#1C1C1A] font-sans"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1C1C1A] hover:bg-[#4A5548] text-white py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer mt-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Enviar para Avaliação Editorial</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
