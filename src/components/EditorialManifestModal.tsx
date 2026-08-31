import React from "react";
import { X, ShieldCheck, Scale, History, Feather } from "lucide-react";
import { siteConfig } from "../config/site";

interface EditorialManifestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditorialManifestModal: React.FC<EditorialManifestModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="editorial-manifest-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="editorial-manifest-modal"
        className="bg-[#FBFBF9] border border-[#1C1C1A]/10 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#1C1C1A]/10 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#C88A2E]"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#2D5A43] bg-[#E7EFEA] px-2.5 py-0.5 rounded-full inline-block">
                Manifesto de Independência
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1C1A]">
              Como Garimpamos
            </h2>
            <p className="text-xs text-[#1C1C1A]/60 mt-1 font-sans">
              Nossa política editorial e os 4 filtros rigorosos que aplicamos antes de indicar qualquer produto.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#1C1C1A]/50 hover:text-[#1C1C1A] hover:bg-[#F4F3EE] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Pillars */}
        <div className="space-y-4 text-xs sm:text-sm text-[#1C1C1A]/80 leading-relaxed font-sans">
          <div className="bg-white p-5 rounded-2xl border border-[#1C1C1A]/10 space-y-2 shadow-2xs">
            <div className="flex items-center gap-2 text-[#2D5A43] font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-[#2D5A43]" />
              <h3 className="font-serif">1. Zero Venda de Espaço Editorial</h3>
            </div>
            <p className="text-[#1C1C1A]/70 text-xs leading-relaxed">
              Nenhuma marca pode pagar para figurar como "Achado do Dia" ou comprar nossa opinião positiva. Se uma peça for feita de tecido transparente ou tiver corte ruim, ela é sumariamente descartada.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#1C1C1A]/10 space-y-2 shadow-2xs">
            <div className="flex items-center gap-2 text-[#2D5A43] font-bold text-sm">
              <Scale className="w-5 h-5 text-[#2D5A43]" />
              <h3 className="font-serif">2. Teste de Gramatura & Durabilidade Real</h3>
            </div>
            <p className="text-[#1C1C1A]/70 text-xs leading-relaxed">
              Chega de camisetas descartáveis de 120g/m² que viram pano de chão após 3 lavagens. Exigimos tecidos naturais encorpados (200g a 350g/m²), costuras reforçadas, ribanas que não laceiam e couros vacuns legítimos.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#1C1C1A]/10 space-y-2 shadow-2xs">
            <div className="flex items-center gap-2 text-[#2D5A43] font-bold text-sm">
              <History className="w-5 h-5 text-[#2D5A43]" />
              <h3 className="font-serif">3. Auditoria de Preço em 90 Dias</h3>
            </div>
            <p className="text-[#1C1C1A]/70 text-xs leading-relaxed">
              Lojas adoram inflar o preço um dia antes para fingir um desconto de 50%. Nossa equipe rastreia o histórico real de 90 dias em múltiplas plataformas para garantir que você está pagando o menor valor verificado.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#1C1C1A]/10 space-y-2 shadow-2xs">
            <div className="flex items-center gap-2 text-[#2D5A43] font-bold text-sm">
              <Feather className="w-5 h-5 text-[#2D5A43]" />
              <h3 className="font-serif">4. Estética Atemporal vs. Tendências Passageiras</h3>
            </div>
            <p className="text-[#1C1C1A]/70 text-xs leading-relaxed">
              Priorizamos silhuetas com longevidade estética (Workwear, cortes amplos com pregas, tênis retrô clássicos, camisas de linho puro). Peças que você terá orgulho de vestir daqui a 5 anos.
            </p>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="bg-[#F4F3EE] p-5 rounded-2xl border border-[#1C1C1A]/10 text-xs text-[#1C1C1A]/70 space-y-2 font-sans">
          <h4 className="font-bold text-[#1C1C1A] uppercase tracking-wider text-[11px]">Como nos mantemos de pé?</h4>
          <p className="leading-relaxed">
            {siteConfig.disclosure}
          </p>
        </div>

        <div className="text-center pt-2">
          <button
            onClick={onClose}
            className="px-8 py-3 rounded-full bg-[#1C1C1A] text-white hover:bg-[#4A5548] text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-xs"
          >
            Entendido, voltar aos achados
          </button>
        </div>
      </div>
    </div>
  );
};
