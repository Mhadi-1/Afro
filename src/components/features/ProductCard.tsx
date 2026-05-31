import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { generateWhatsAppLink } from '@/lib/utils';
import { Product } from '@/types';
import { ImageCarousel } from './ImageCarousel';
import { WHATSAPP_NUMBER } from '@/constants/mockData';
import { MessageCircle, Minus, Plus, Info } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { language, t } = useI18n();
  const [quantity, setQuantity] = useState(1);

  const name = language === 'ru' ? product.nameRu : product.name;
  const origin = language === 'ru' ? product.originRu : product.origin;
  const texture = language === 'ru' ? product.textureRu : product.texture;
  const bestFor = language === 'ru' ? product.bestForRu : product.bestFor;

  const categoryLabel = t.categories[product.category as keyof typeof t.categories];

  const handleQuantityChange = (newVal: number) => {
    if (newVal >= 1) {
      setQuantity(newVal);
    }
  };

  const whatsappLink = generateWhatsAppLink(
    WHATSAPP_NUMBER,
    t.whatsapp.message,
    { quantity: String(quantity), product: name, category: categoryLabel }
  );

  const totalPrice = product.price * quantity;

  return (
    <div className="group bg-white rounded-xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300 overflow-hidden border border-mahogany/5">
      {/* Image */}
      <ImageCarousel images={product.images} alt={name} />

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Header */}
        <div>
          <span className="inline-block px-2 py-0.5 text-[10px] uppercase tracking-wider font-body font-semibold text-gold bg-gold/10 rounded-sm mb-2">
            {categoryLabel}
          </span>
          <h3 className="font-heading text-lg font-semibold text-mahogany leading-tight">
            {name}
          </h3>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="font-heading text-2xl font-bold text-gold">${product.price}</span>
          <span className="font-body text-xs text-dark-50">{t.product.pricePerPiece}</span>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-3 text-xs font-body">
          <div className="space-y-0.5">
            <span className="text-dark-50 uppercase tracking-wide">{t.product.origin}</span>
            <p className="text-dark font-medium">{origin}</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-dark-50 uppercase tracking-wide">{t.product.thickness}</span>
            <p className="text-dark font-medium">{product.thickness}</p>
          </div>
          <div className="space-y-0.5 col-span-2">
            <span className="text-dark-50 uppercase tracking-wide">{t.product.texture}</span>
            <p className="text-dark font-medium">{texture}</p>
          </div>
          <div className="space-y-0.5 col-span-2">
            <span className="text-dark-50 uppercase tracking-wide">{t.product.bestFor}</span>
            <p className="text-dark font-medium">{bestFor}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-mahogany/10" />

        {/* Quantity */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-body font-medium text-dark-200 uppercase tracking-wide">
              {t.product.quantity}
            </label>
            <div className="flex items-center gap-1 text-[10px] text-gold font-body font-medium">
              <Info className="size-3" />
              {t.product.moqNote}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
              className="size-9 rounded-md border border-mahogany/20 flex items-center justify-center hover:border-mahogany/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Decrease quantity"
            >
              <Minus className="size-3.5" />
            </button>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => handleQuantityChange(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-16 h-9 text-center font-body font-semibold text-mahogany border border-mahogany/20 rounded-md bg-cream/50 focus:outline-none focus:ring-2 focus:ring-gold/30 tabular-nums"
            />
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="size-9 rounded-md border border-mahogany/20 flex items-center justify-center hover:border-mahogany/40 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="size-3.5" />
            </button>
            <span className="text-xs text-dark-50 font-body">
              {quantity === 1 ? t.product.piece : t.product.pieces}
            </span>
          </div>
          {/* Total */}
          {quantity > 1 && (
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-body text-dark-50">Total:</span>
              <span className="font-heading text-lg font-bold text-mahogany">${totalPrice.toLocaleString()}</span>
            </div>
          )}
        </div>

        {/* CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-mahogany text-cream font-body font-semibold text-sm rounded-lg hover:bg-mahogany/90 transition-all duration-200 shadow-luxury hover:shadow-luxury-lg"
        >
          <MessageCircle className="size-4" />
          {t.product.orderNow}
        </a>
      </div>
    </div>
  );
}
