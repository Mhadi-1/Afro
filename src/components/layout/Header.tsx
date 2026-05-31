import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { LanguageSwitcher } from '@/components/features/LanguageSwitcher';
import { Menu, X } from 'lucide-react';

export function Header() {
  const { t } = useI18n();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/catalog', label: t.nav.catalog },
    { path: '/about', label: t.nav.about },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-mahogany/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="size-8 sm:size-10 rounded-full gold-gradient flex items-center justify-center">
              <span className="text-mahogany font-heading font-bold text-sm sm:text-base">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-bold text-mahogany tracking-tight">
                AfriLeather
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-mahogany/60 font-body hidden sm:block">
                Premium Exotic Hides
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm font-medium tracking-wide transition-colors duration-200 relative
                  ${isActive(link.path) 
                    ? 'text-mahogany after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-gold' 
                    : 'text-dark-200 hover:text-mahogany'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              to="/catalog"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-mahogany text-cream text-sm font-body font-medium rounded-md hover:bg-mahogany/90 transition-colors duration-200"
            >
              {t.nav.requestSamples}
            </Link>
            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-mahogany/10 animate-fade-in">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`py-3 px-4 rounded-md font-body text-sm font-medium transition-colors
                  ${isActive(link.path) 
                    ? 'text-mahogany bg-gold/10' 
                    : 'text-dark-200 hover:text-mahogany hover:bg-mahogany/5'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/catalog"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-center py-3 px-4 bg-mahogany text-cream text-sm font-body font-medium rounded-md"
            >
              {t.nav.requestSamples}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
