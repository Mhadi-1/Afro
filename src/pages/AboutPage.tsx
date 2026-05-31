import { useI18n } from '@/lib/i18n';
import { Award, Leaf, Handshake } from 'lucide-react';

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="bg-mahogany py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] gold-gradient" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream text-balance">
            {t.about.title}
          </h1>
          <p className="font-body text-base text-cream/60 max-w-lg mx-auto text-pretty">
            {t.about.subtitle}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Story text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="w-12 h-[2px] gold-gradient" />
            <p className="font-body text-lg leading-relaxed text-dark-300 text-pretty">
              {t.about.story}
            </p>
          </div>

          {/* Stats */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-luxury text-center space-y-2">
              <span className="font-heading text-3xl font-bold gold-text">20+</span>
              <p className="font-body text-xs text-dark-50 uppercase tracking-wide">
                {t.about.values === 'Our Values' ? 'Years Experience' : 'Лет опыта'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-luxury text-center space-y-2">
              <span className="font-heading text-3xl font-bold gold-text">50+</span>
              <p className="font-body text-xs text-dark-50 uppercase tracking-wide">
                {t.about.values === 'Our Values' ? 'Partner Brands' : 'Партнёров'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-luxury text-center space-y-2">
              <span className="font-heading text-3xl font-bold gold-text">12</span>
              <p className="font-body text-xs text-dark-50 uppercase tracking-wide">
                {t.about.values === 'Our Values' ? 'Countries' : 'Стран'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-luxury text-center space-y-2">
              <span className="font-heading text-3xl font-bold gold-text">5%</span>
              <p className="font-body text-xs text-dark-50 uppercase tracking-wide">
                {t.about.values === 'Our Values' ? 'Selection Rate' : 'Отбор'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-14">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-mahogany">
              {t.about.values}
            </h2>
            <div className="w-12 h-[2px] gold-gradient mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="group p-8 rounded-xl border border-mahogany/10 hover:border-gold/30 hover:shadow-luxury-lg transition-all duration-300 space-y-4">
              <div className="size-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <Award className="size-6 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-mahogany">
                {t.about.quality}
              </h3>
              <p className="font-body text-sm text-dark-50 leading-relaxed text-pretty">
                {t.about.qualityDesc}
              </p>
            </div>

            {/* Sustainability */}
            <div className="group p-8 rounded-xl border border-mahogany/10 hover:border-gold/30 hover:shadow-luxury-lg transition-all duration-300 space-y-4">
              <div className="size-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <Leaf className="size-6 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-mahogany">
                {t.about.sustainability}
              </h3>
              <p className="font-body text-sm text-dark-50 leading-relaxed text-pretty">
                {t.about.sustainabilityDesc}
              </p>
            </div>

            {/* Partnership */}
            <div className="group p-8 rounded-xl border border-mahogany/10 hover:border-gold/30 hover:shadow-luxury-lg transition-all duration-300 space-y-4">
              <div className="size-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <Handshake className="size-6 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-mahogany">
                {t.about.partnership}
              </h3>
              <p className="font-body text-sm text-dark-50 leading-relaxed text-pretty">
                {t.about.partnershipDesc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
