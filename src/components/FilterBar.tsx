import React from "react";
import { FilterState, Category, StyleTag, StoreName } from "../types";
import { ArrowUpDown, Check, RotateCcw, SlidersHorizontal, Sparkles } from "lucide-react";

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  onResetFilters: () => void;
  totalResultsCount: number;
  totalCatalogCount: number;
}

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "todos", label: "Todas as Peças" },
  { id: "camisetas", label: "Camisetas & Heavy Tees" },
  { id: "calcados", label: "Tênis & Calçados Retrô" },
  { id: "jaquetas-casacos", label: "Chore Jackets & Casacos" },
  { id: "calcas-denim", label: "Calças & Alfaiataria" },
  { id: "camisas", label: "Camisas & Linho" },
  { id: "malhas-trico", label: "Tricôs & Malhas" },
  { id: "acessorios", label: "Acessórios & Totes" },
];

const STYLE_TAGS: StyleTag[] = [
  "Básico Pesado",
  "Workwear",
  "Retrô & Vintage",
  "Minimalista",
  "Alfaiataria Despojada",
  "Streetwear Sóbrio",
  "Gorpcore",
];

const STORES: StoreName[] = [
  "Amazon Brasil",
  "Dafiti",
  "Farfetch",
  "Kanui",
  "Netshoes",
  "Loja Oficial",
  "Your ID Store",
];

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  totalResultsCount,
  totalCatalogCount,
}) => {
  const isFilteringActive =
    filters.category !== "todos" ||
    filters.selectedStyles.length > 0 ||
    filters.onlyLowestPrice90d ||
    filters.maxPrice < 800 ||
    filters.selectedStore !== "" ||
    filters.searchQuery !== "";

  const toggleStyle = (style: StyleTag) => {
    if (filters.selectedStyles.includes(style)) {
      onFilterChange({
        selectedStyles: filters.selectedStyles.filter((s) => s !== style),
      });
    } else {
      onFilterChange({
        selectedStyles: [...filters.selectedStyles, style],
      });
    }
  };

  return (
    <div id="catalog-filter-bar" className="space-y-4 py-4 px-4 sm:px-12 max-w-7xl mx-auto">
      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#1C1C1A]/10">
        {CATEGORIES.map((cat) => {
          const isActive = filters.category === cat.id;
          return (
            <button
              key={cat.id}
              id={`cat-btn-${cat.id}`}
              onClick={() => onFilterChange({ category: cat.id })}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-1.5 ${
                isActive
                  ? "bg-[#1C1C1A] text-white shadow-xs"
                  : "bg-white text-[#1C1C1A]/60 hover:bg-[#F4F3EE] hover:text-[#1C1C1A] border border-[#1C1C1A]/10"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Secondary Row: Refinements & Sort */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F4F3EE]/70 p-4 rounded-2xl border border-[#1C1C1A]/10">
        {/* Style tags */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-bold text-[#1C1C1A]/50 uppercase tracking-widest mr-1 flex items-center gap-1">
            <SlidersHorizontal className="w-3 h-3" />
            Filtro por Estilo:
          </span>
          {STYLE_TAGS.map((tag) => {
            const isSelected = filters.selectedStyles.includes(tag);
            return (
              <button
                key={tag}
                id={`style-tag-btn-${tag.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                onClick={() => toggleStyle(tag)}
                className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide transition-colors flex items-center gap-1 ${
                  isSelected
                    ? "bg-[#1C1C1A] text-white shadow-xs"
                    : "bg-white text-[#1C1C1A]/70 hover:text-[#1C1C1A] border border-[#1C1C1A]/10"
                }`}
              >
                {isSelected && <Check className="w-2.5 h-2.5" />}
                {tag}
              </button>
            );
          })}
        </div>

        {/* Right side controls: Lowest 90d toggle, Store & Sort */}
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          {/* Lowest 90d Price toggle */}
          <button
            id="toggle-lowest-90d"
            onClick={() => onFilterChange({ onlyLowestPrice90d: !filters.onlyLowestPrice90d })}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all border ${
              filters.onlyLowestPrice90d
                ? "bg-[#FAECE7] text-[#B85D43] border-[#B85D43]/30 shadow-xs"
                : "bg-white text-[#1C1C1A]/70 border-[#1C1C1A]/10 hover:bg-[#FBFBF9]"
            }`}
          >
            <Sparkles className={`w-3.5 h-3.5 ${filters.onlyLowestPrice90d ? "text-[#B85D43]" : "text-[#1C1C1A]/40"}`} />
            <span>Mínima 90d</span>
          </button>

          {/* Store select */}
          <select
            id="select-store-filter"
            value={filters.selectedStore}
            onChange={(e) => onFilterChange({ selectedStore: e.target.value })}
            className="bg-white border border-[#1C1C1A]/10 text-xs text-[#1C1C1A] font-semibold rounded-full px-3 py-1.5 focus:outline-none focus:border-[#1C1C1A] cursor-pointer"
          >
            <option value="">Todas as Lojas</option>
            {STORES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-1.5 bg-white border border-[#1C1C1A]/10 rounded-full px-3 py-1.5">
            <ArrowUpDown className="w-3 h-3 text-[#1C1C1A]/40" />
            <select
              id="select-sort-by"
              value={filters.sortBy}
              onChange={(e) =>
                onFilterChange({
                  sortBy: e.target.value as FilterState["sortBy"],
                })
              }
              className="bg-transparent text-xs text-[#1C1C1A] font-bold focus:outline-none cursor-pointer"
            >
              <option value="curator">Veredito do Curador</option>
              <option value="discount-desc">Maior Desconto (%)</option>
              <option value="price-asc">Menor Preço (R$)</option>
              <option value="price-desc">Maior Preço (R$)</option>
              <option value="newest">Mais Recentes</option>
            </select>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between text-xs text-[#1C1C1A]/50 px-1 font-sans">
        <div>
          Mostrando <strong className="text-[#1C1C1A] font-bold">{totalResultsCount}</strong> de {totalCatalogCount} achados validados
          {filters.searchQuery && (
            <span> para "<span className="text-[#1C1C1A] font-semibold">{filters.searchQuery}</span>"</span>
          )}
        </div>

        {isFilteringActive && (
          <button
            id="btn-reset-filters"
            onClick={onResetFilters}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#B85D43] hover:underline cursor-pointer uppercase tracking-wider"
          >
            <RotateCcw className="w-3 h-3" />
            Limpar filtros
          </button>
        )}
      </div>
    </div>
  );
};
