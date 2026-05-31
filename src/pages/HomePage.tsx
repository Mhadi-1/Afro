import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { ArrowRight, Shield, Award } from 'lucide-react';
import heroImg from '@/assets/hero-leather.jpg';
import { categories } from '@/constants/mockData';

export default function HomePage() {
  const { language, t } = useI18n();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Premium exotic leather"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mahogany/95 via-mahogany/80 to-mahogany/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-mahogany/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-2xl space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm animate-fade-in">
              <Shield className="size-4 text-gold" />
              <span className="text-xs sm:text-sm font-body font-medium text-gold">
                {t.hero.badge}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-[1.1] text-balance">
                {t.hero.headline}
              </h1>
              <p className="font-heading text-xl sm:text-2xl text-gold/90 italic font-medium">
                {t.hero.subheadline}
              </p>
            </div>

            {/* Description */}
            <p className="font-body text-base sm:text-lg text-cream/70 leading-relaxed max-w-lg animate-slide-up" style={{ animationDelay: '0.4s' }}>
              {t.hero.description}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Link
                to="/catalog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 gold-gradient text-mahogany font-body font-bold text-sm rounded-lg shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:scale-[1.02]"
              >
                {t.hero.cta}
                <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-2">
                <Award className="size-5 text-gold/70" />
                <span className="text-xs font-body text-cream/50 uppercase tracking-wide">
                  {language === 'en' ? 'Certified Hides' : 'Сертификация'}
                </span>
              </div>
              <div className="w-px h-4 bg-cream/20" />
              <div className="flex items-center gap-2">
                <Shield className="size-5 text-gold/70" />
                <span className="text-xs font-body text-cream/50 uppercase tracking-wide">
                  {language === 'en' ? '20+ Years Experience' : '20+ лет опыта'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative gold line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient opacity-80" />
      </section>

      {/* Categories Section */}
      <section className="py-20 sm:py-28 bg-cream leather-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-mahogany text-balance">
              {t.categories.title}
            </h2>
            <p className="font-body text-base text-dark-50 max-w-md mx-auto">
              {t.categories.subtitle}
            </p>
            <div className="w-16 h-[2px] gold-gradient mx-auto mt-4" />
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <Link
                key={cat.id}
                to={`/catalog?category=${cat.id}`}
                className="group relative overflow-hidden rounded-xl bg-white shadow-luxury hover:shadow-luxury-xl transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Image */}
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={cat.image}
                    alt={t.categories[cat.nameKey as keyof typeof t.categories]}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mahogany/80 via-mahogany/20 to-transparent" />
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
                    <h3 className="font-heading text-lg font-semibold text-cream">
                      {t.categories[cat.nameKey as keyof typeof t.categories]}
                    </h3>
                    <p className="font-body text-xs text-cream/70 leading-relaxed line-clamp-2">
                      {language === 'ru' ? cat.descriptionRu : cat.description}
                    </p>
                    <div className="flex items-center gap-1 text-gold text-xs font-body font-medium pt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>{t.product.viewDetails}</span>
                      <ArrowRight className="size-3" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-mahogany relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 left-0 right-0 h-px gold-gradient opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 h-px gold-gradient opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-3">
              <div className="size-12 mx-auto rounded-full border border-gold/30 flex items-center justify-center">
                <Award className="size-5 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-cream">
                {language === 'en' ? 'Premium Quality' : 'Премиум качество'}
              </h3>
              <p className="font-body text-sm text-cream/60 leading-relaxed">
                {language === 'en'
                  ? 'Every hide hand-inspected. Only the top 5% make it to our catalog.'
                  : 'Каждая шкура проверяется вручную. Только лучшие 5% попадают в наш каталог.'}
              </p>
            </div>
            <div className="space-y-3">
              <div className="size-12 mx-auto rounded-full border border-gold/30 flex items-center justify-center">
                <Shield className="size-5 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-cream">
                {language === 'en' ? 'Direct Sourcing' : 'Прямые поставки'}
              </h3>
              <p className="font-body text-sm text-cream/60 leading-relaxed">
                {language === 'en'
                  ? 'No middlemen. Direct from licensed African tanneries to your workshop.'
                  : 'Без посредников. Напрямую с лицензированных африканских кожевенных заводов.'}
              </p>
            </div>
            <div className="space-y-3">
              <div className="size-12 mx-auto rounded-full border border-gold/30 flex items-center justify-center">
                <Shield className="size-5 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-cream">
                {language === 'en' ? 'Free Samples' : 'Бесплатные образцы'}
              </h3>
              <p className="font-body text-sm text-cream/60 leading-relaxed">
                {language === 'en'
                  ? 'Request complimentary samples before committing to bulk orders.'
                  : 'Запросите бесплатные образцы перед оформлением оптового заказа.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
