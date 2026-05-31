import { useI18n } from '@/lib/i18n';
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-dark text-cream/80">
      {/* Gold accent line */}
      <div className="h-[2px] gold-gradient" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-8 rounded-full gold-gradient flex items-center justify-center">
                <span className="text-mahogany font-heading font-bold text-sm">A</span>
              </div>
              <span className="font-heading text-xl font-bold text-cream">AfriLeather</span>
            </div>
            <p className="text-cream/60 font-body text-sm leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-heading text-lg font-semibold text-cream mb-4">
              {t.footer.contact}
            </h4>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-gold flex-shrink-0" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-gold flex-shrink-0" />
                <span>{t.footer.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-gold flex-shrink-0" />
                <span>{t.footer.phone}</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-cream/10">
              <p className="text-xs text-cream/50 font-body">
                <span className="text-gold">{t.footer.hours}:</span> {t.footer.hoursValue}
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="md:col-span-3">
            <h4 className="font-heading text-lg font-semibold text-cream mb-4">
              {t.footer.social}
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="size-10 rounded-full border border-cream/20 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="size-4 text-cream/80" />
              </a>
              <a
                href="#"
                className="size-10 rounded-full border border-cream/20 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4 text-cream/80" />
              </a>
              <a
                href="#"
                className="size-10 rounded-full border border-cream/20 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="size-4 text-cream/80" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40 font-body">
            © {new Date().getFullYear()} AfriLeather. {t.footer.rights}
          </p>
          <div className="flex items-center gap-1">
            <span className="text-xs text-cream/30 font-body">Crafted with</span>
            <span className="text-gold text-xs">♦</span>
            <span className="text-xs text-cream/30 font-body">in Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
