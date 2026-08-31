import React from "react";
import { Search, Bookmark, Sparkles, BookOpen, Send, SlidersHorizontal } from "lucide-react";
import { siteConfig } from "../config/site";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  savedCount: number;
  onOpenSaved: () => void;
  onOpenManifest: () => void;
  onOpenSubmission: () => void;
  onToggleMobileFilters?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  savedCount,
  onOpenSaved,
  onOpenManifest,
  onOpenSubmission,
  onToggleMobileFilters,
}) => {
  return (
    <header id="site-header" className="sticky top-0 z-40 bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#1C1C1A]/10">
      {/* Top micro announcement bar */}
      <div id="top-announcement-bar" className="bg-[#1C1C1A] text-[#F4F3EE] text-xs py-1.5 px-4 sm:px-12 border-b border-[#1C1C1A]/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C88A2E] animate-pulse"></span>
            <span className="font-bold tracking-[0.15em] uppercase text-[10px] text-[#C88A2E]">
              {siteConfig.edition}
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="hidden sm:inline text-white/70 text-[11px]">{siteConfig.lastUpdated}</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-white/80">
            <span className="hidden md:inline italic text-white/60">
              "Curadoria independente: sem marcas pagando para aparecer."
            </span>
            <a
              href={siteConfig.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#C88A2E] hover:text-white transition-colors underline-offset-2 hover:underline font-bold text-[11px]"
            >
              <Send className="w-3 h-3 text-[#C88A2E]" />
              <span>Canal no Telegram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-12 py-3.5 flex items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex items-center gap-8">
          <a href="#" className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-black tracking-tight leading-none text-[#1C1C1A]">
              GARIMPO
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#C88A2E] uppercase mt-1">
              Curadoria Independente
            </span>
          </a>

          {/* Desktop Nav Links with Editorial Underlines */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-wider text-[#1C1C1A]/60">
            <a href="#catalog-section" className="text-[#1C1C1A] border-b-2 border-[#1C1C1A] pb-1 transition-colors">
              Explorar
            </a>
            <button
              id="btn-nav-manifest"
              onClick={onOpenManifest}
              className="hover:text-[#1C1C1A] transition-colors pb-1 flex items-center gap-1.5 uppercase font-bold text-[11px]"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#4A5548]" />
              Guias da Equipe
            </button>
            <button
              id="btn-nav-submission"
              onClick={onOpenSubmission}
              className="hover:text-[#1C1C1A] transition-colors pb-1 flex items-center gap-1.5 uppercase font-bold text-[11px]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B85D43]" />
              Indicar Achado
            </button>
          </nav>
        </div>

        {/* Search bar */}
        <div className="flex-1 max-w-xs hidden md:block">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1C1C1A]/40" />
            <input
              id="header-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar peças, tecidos, tênis..."
              className="w-full bg-[#F4F3EE] hover:bg-white focus:bg-white text-xs text-[#1C1C1A] placeholder:text-[#1C1C1A]/40 pl-9 pr-8 py-2 rounded-full border border-[#1C1C1A]/10 focus:border-[#1C1C1A] focus:outline-none transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#1C1C1A]/40 hover:text-[#1C1C1A]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Actions & Telegram CTA */}
        <div className="flex items-center gap-3">
          {onToggleMobileFilters && (
            <button
              id="btn-mobile-filters"
              onClick={onToggleMobileFilters}
              className="sm:hidden p-2 rounded-full border border-[#1C1C1A]/10 bg-[#F4F3EE] text-[#1C1C1A]"
              aria-label="Abrir filtros"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          )}

          <button
            id="btn-header-saved"
            onClick={onOpenSaved}
            className="relative flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#1C1C1A]/10 bg-white hover:bg-[#F4F3EE] text-xs font-bold text-[#1C1C1A] transition-all shadow-xs"
          >
            <Bookmark className={`w-3.5 h-3.5 ${savedCount > 0 ? "fill-[#2D5A43] text-[#2D5A43]" : "text-[#1C1C1A]/50"}`} />
            <span className="hidden sm:inline text-[11px] font-bold uppercase tracking-wider">Salvos</span>
            {savedCount > 0 && (
              <span className="inline-flex items-center justify-center bg-[#2D5A43] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full min-w-4 h-4">
                {savedCount}
              </span>
            )}
          </button>

          <a
            href={siteConfig.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#1C1C1A] text-white text-[11px] font-bold uppercase tracking-widest hover:bg-[#4A5548] transition-colors shadow-xs"
          >
            <span>Canal no Telegram</span>
          </a>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="sm:hidden px-4 pb-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#7C7A70]" />
          <input
            id="mobile-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar peças, tecidos ou marcas..."
            className="w-full bg-[#F4F3EE] text-xs text-[#1C1C1A] placeholder:text-[#8E8C82] pl-9 pr-8 py-2 rounded-lg border border-transparent focus:border-[#395243] focus:outline-none"
          />
        </div>
      </div>
    </header>
  );
};
