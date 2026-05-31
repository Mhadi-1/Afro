import { useState } from 'react';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { ImageLightbox } from './ImageLightbox';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div
        className="relative group overflow-hidden rounded-lg bg-mahogany/5 cursor-pointer"
        onClick={() => setLightboxOpen(true)}
      >
        <div className="aspect-square relative">
          <img
            src={images[currentIndex]}
            alt={`${alt} - ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-mahogany/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Expand icon */}
          <div className="absolute top-3 right-3 size-8 rounded-full bg-white/80 shadow-luxury flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Expand className="size-4 text-mahogany" />
          </div>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-cream/90 shadow-luxury flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-cream"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-4 text-mahogany" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-cream/90 shadow-luxury flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-cream"
              aria-label="Next image"
            >
              <ChevronRight className="size-4 text-mahogany" />
            </button>
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                  className={`size-2 rounded-full transition-all duration-200 ${
                    idx === currentIndex ? 'bg-gold w-4' : 'bg-cream/60'
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={images}
          alt={alt}
          initialIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
