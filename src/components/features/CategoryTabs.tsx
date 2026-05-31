import { useI18n } from '@/lib/i18n';
import { ProductCategory } from '@/types';
import { categories } from '@/constants/mockData';

interface CategoryTabsProps {
  active: ProductCategory | 'all';
  onChange: (cat: ProductCategory | 'all') => void;
}

export function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  const { language, t } = useI18n();

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      <button
        onClick={() => onChange('all')}
        className={`px-4 py-2 rounded-lg font-body text-sm font-medium transition-all duration-200 ${
          active === 'all'
            ? 'bg-mahogany text-cream shadow-luxury'
            : 'bg-white text-mahogany border border-mahogany/15 hover:border-mahogany/30 hover:shadow-sm'
        }`}
      >
        {t.categories.all}
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`px-4 py-2 rounded-lg font-body text-sm font-medium transition-all duration-200 ${
            active === cat.id
              ? 'bg-mahogany text-cream shadow-luxury'
              : 'bg-white text-mahogany border border-mahogany/15 hover:border-mahogany/30 hover:shadow-sm'
          }`}
        >
          {t.categories[cat.nameKey as keyof typeof t.categories]}
        </button>
      ))}
    </div>
  );
}
