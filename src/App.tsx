/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from "react";
import { Header } from "./components/Header";
import { EditorialHero } from "./components/EditorialHero";
import { CollectionCarousel } from "./components/CollectionCarousel";
import { FilterBar } from "./components/FilterBar";
import { ProductCard } from "./components/ProductCard";
import { ProductDetailModal } from "./components/ProductDetailModal";
import { PriceAlertModal } from "./components/PriceAlertModal";
import { SavedProductsModal } from "./components/SavedProductsModal";
import { EditorialManifestModal } from "./components/EditorialManifestModal";
import { CuratorSubmissionModal } from "./components/CuratorSubmissionModal";
import { Footer } from "./components/Footer";

import { MOCK_PRODUCTS } from "./data/mock-products";
import { EDITORIAL_COLLECTIONS } from "./data/collections";
import { Product, FilterState, PriceAlert } from "./types";
import { calculateDiscount, isHistoricalLow } from "./lib/utils";
import { Sparkles, AlertCircle, RefreshCw } from "lucide-react";

const INITIAL_FILTERS: FilterState = {
  category: "todos",
  selectedStyles: [],
  maxPrice: 800,
  onlyLowestPrice90d: false,
  onlyInStock: true,
  searchQuery: "",
  sortBy: "curator",
  selectedStore: "",
};

export default function App() {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  const [activeCollectionId, setActiveCollectionId] = useState<string | null>(null);

  // Saved items persistence
  const [savedProductIds, setSavedProductIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem("garimpo_saved_ids");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("garimpo_saved_ids", JSON.stringify(savedProductIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedProductIds]);

  // Modal states
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<Product | null>(null);
  const [selectedProductForAlert, setSelectedProductForAlert] = useState<Product | null>(null);
  const [isSavedOpen, setIsSavedOpen] = useState(false);
  const [isManifestOpen, setIsManifestOpen] = useState(false);
  const [isSubmissionOpen, setIsSubmissionOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleToggleSave = (productId: string) => {
    if (savedProductIds.includes(productId)) {
      setSavedProductIds((prev) => prev.filter((id) => id !== productId));
      showToast("Item removido dos seus achados salvos.");
    } else {
      setSavedProductIds((prev) => [...prev, productId]);
      showToast("Achado salvo com sucesso!");
    }
  };

  const handleSaveAlert = (alert: PriceAlert) => {
    showToast(`Alerta ativado para ${alert.productTitle}`);
  };

  const handleSelectCollection = (collectionId: string | null) => {
    setActiveCollectionId(collectionId);
    if (collectionId) {
      // Scroll to catalog smoothly
      const el = document.getElementById("catalog-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS);
    setActiveCollectionId(null);
  };

  // Filter & Sorting Computation
  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter((product) => {
      // Collection filter
      if (activeCollectionId) {
        const collection = EDITORIAL_COLLECTIONS.find((c) => c.id === activeCollectionId);
        if (collection && !collection.productIds.includes(product.id)) {
          return false;
        }
      }

      // Category filter
      if (filters.category !== "todos" && product.category !== filters.category) {
        return false;
      }

      // Style tags filter
      if (
        filters.selectedStyles.length > 0 &&
        !filters.selectedStyles.some((s) => product.styleTags.includes(s))
      ) {
        return false;
      }

      // Lowest 90d filter
      if (filters.onlyLowestPrice90d && !isHistoricalLow(product.bestPrice, product.historicalLowestPrice)) {
        return false;
      }

      // Store filter
      if (
        filters.selectedStore &&
        !product.offers.some((o) => o.storeName === filters.selectedStore)
      ) {
        return false;
      }

      // Search Query
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase();
        const matchTitle = product.title.toLowerCase().includes(q);
        const matchBrand = product.brand.toLowerCase().includes(q);
        const matchCurator = product.curatorReview.toLowerCase().includes(q);
        const matchHeadline = product.editorialHeadline.toLowerCase().includes(q);
        const matchMaterial = product.specs.material.toLowerCase().includes(q);
        const matchTags = product.styleTags.some((t) => t.toLowerCase().includes(q));

        if (!matchTitle && !matchBrand && !matchCurator && !matchHeadline && !matchMaterial && !matchTags) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === "price-asc") {
        return a.bestPrice - b.bestPrice;
      }
      if (filters.sortBy === "price-desc") {
        return b.bestPrice - a.bestPrice;
      }
      if (filters.sortBy === "discount-desc") {
        const discA = calculateDiscount(a.originalPrice, a.bestPrice);
        const discB = calculateDiscount(b.originalPrice, b.bestPrice);
        return discB - discA;
      }
      if (filters.sortBy === "newest") {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      }
      // Default: Curator rating (Featured first, then all-time low)
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [filters, activeCollectionId]);

  const savedProductsList = useMemo(() => {
    return MOCK_PRODUCTS.filter((p) => savedProductIds.includes(p.id));
  }, [savedProductIds]);

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#1C1C1A] flex flex-col font-sans selection:bg-[#395243] selection:text-white">
      {/* Toast feedback notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1C1C1A] text-white text-xs font-semibold px-5 py-3 rounded-full shadow-2xl flex items-center gap-2.5 border border-white/10 animate-slideUp">
          <Sparkles className="w-4 h-4 text-[#C88A2E]" />
          <span className="font-sans">{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header
        searchQuery={filters.searchQuery}
        onSearchChange={(query) => handleFilterChange({ searchQuery: query })}
        savedCount={savedProductIds.length}
        onOpenSaved={() => setIsSavedOpen(true)}
        onOpenManifest={() => setIsManifestOpen(true)}
        onOpenSubmission={() => setIsSubmissionOpen(true)}
      />

      {/* Editorial Hero */}
      <EditorialHero
        onExploreClick={() => {
          const el = document.getElementById("catalog-section");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        onOpenManifest={() => setIsManifestOpen(true)}
      />

      {/* Thematic Collections */}
      <CollectionCarousel
        collections={EDITORIAL_COLLECTIONS}
        activeCollectionId={activeCollectionId}
        onSelectCollection={handleSelectCollection}
      />

      {/* Main Catalog Section */}
      <main id="catalog-section" className="flex-1 py-8">
        <FilterBar
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          totalResultsCount={filteredProducts.length}
          totalCatalogCount={MOCK_PRODUCTS.length}
        />

        {/* Product Cards Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white border border-[#1C1C1A]/10 rounded-3xl p-8 space-y-4 my-6 shadow-2xs">
              <div className="w-12 h-12 rounded-full bg-[#F4F3EE] flex items-center justify-center mx-auto text-[#1C1C1A]/40">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1C1A]">
                Nenhum achado corresponde aos filtros atuais
              </h3>
              <p className="text-xs text-[#1C1C1A]/60 max-w-md mx-auto leading-relaxed font-sans">
                Nosso catálogo é intencionalmente enxuto e curado a dedo. Tente remover alguns filtros de estilo ou de loja para ver mais peças.
              </p>
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1C1C1A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#4A5548] transition-all cursor-pointer shadow-xs"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Restaurar Todos os Achados</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isSaved={savedProductIds.includes(product.id)}
                  onToggleSave={handleToggleSave}
                  onOpenDetail={(prod) => setSelectedProductForDetail(prod)}
                  onOpenAlert={(prod) => setSelectedProductForAlert(prod)}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Modals & Slide-overs */}
      <ProductDetailModal
        product={selectedProductForDetail}
        onClose={() => setSelectedProductForDetail(null)}
        isSaved={selectedProductForDetail ? savedProductIds.includes(selectedProductForDetail.id) : false}
        onToggleSave={handleToggleSave}
        onOpenAlert={(prod) => setSelectedProductForAlert(prod)}
      />

      <PriceAlertModal
        product={selectedProductForAlert}
        onClose={() => setSelectedProductForAlert(null)}
        onSaveAlert={handleSaveAlert}
      />

      <SavedProductsModal
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
        savedProducts={savedProductsList}
        onRemoveSaved={handleToggleSave}
        onOpenDetail={(prod) => setSelectedProductForDetail(prod)}
      />

      <EditorialManifestModal
        isOpen={isManifestOpen}
        onClose={() => setIsManifestOpen(false)}
      />

      <CuratorSubmissionModal
        isOpen={isSubmissionOpen}
        onClose={() => setIsSubmissionOpen(false)}
      />

      {/* Footer */}
      <Footer
        onOpenManifest={() => setIsManifestOpen(true)}
        onOpenSubmission={() => setIsSubmissionOpen(true)}
      />
    </div>
  );
}
