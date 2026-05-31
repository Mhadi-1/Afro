import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { ProductCategory } from '@/types';
import { products } from '@/constants/mockData';
import { ProductCard } from '@/components/features/ProductCard';
import { CategoryTabs } from '@/components/features/CategoryTabs';

export default function CatalogPage() {
  const { t } = useI18n();
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') as ProductCategory | null;
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>(categoryParam || 'all');

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-cream leather-grain">
      {/* Page Header */}
      <section className="bg-mahogany py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.15),transparent_50%)]" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] gold-gradient" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream text-balance">
            {t.categories.title}
          </h1>
          <p className="font-body text-base text-cream/60 max-w-md mx-auto">
            {t.categories.subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Tabs */}
        <div className="mb-8 sm:mb-10">
          <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
        </div>

        {/* Results count */}
        <p className="text-xs font-body text-dark-50 mb-6 uppercase tracking-wide">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              className="animate-scale-in"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
