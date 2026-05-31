import { useState, useRef } from 'react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  images: string[];
  alt: string;
  initialIndex: number;
  onClose: () => void;
}

export function ImageLightbox({ images, alt, initialIndex, onClose }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const posStart = useRef({ x: 0, y: 0 });

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    resetZoom();
  };
  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    resetZoom();
  };

  const zoomIn = () => setZoom((z) => Math.min(z + 0.5, 4));
  const zoomOut = () => {
    setZoom((z) => {
      const newZoom = Math.max(z - 0.5, 1);
      if (newZoom === 1) setPosition({ x: 0, y: 0 });
      return newZoom;
    });
  };

  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      dragStart.current = { x: e.clientX, y: e.clientY };
      posStart.current = { ...position };
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      setPosition({
        x: posStart.current.x + dx,
        y: posStart.current.y + dy,
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoom > 1 && e.touches.length === 1) {
      setIsDragging(true);
      dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      posStart.current = { ...position };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && zoom > 1 && e.touches.length === 1) {
      const dx = e.touches[0].clientX - dragStart.current.x;
      const dy = e.touches[0].clientY - dragStart.current.y;
      setPosition({
        x: posStart.current.x + dx,
        y: posStart.current.y + dy,
      });
    }
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 size-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        aria-label="Close"
      >
        <X className="size-5 text-white" />
      </button>

      {/* Zoom controls */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={zoomOut}
          disabled={zoom <= 1}
          className="size-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors disabled:opacity-30"
          aria-label="Zoom out"
        >
          <ZoomOut className="size-4 text-white" />
        </button>
        <span className="text-white text-sm font-body font-medium min-w-[3rem] text-center">
          {Math.round(zoom * 100)}%
        </span>
        <button
          onClick={zoomIn}
          disabled={zoom >= 4}
          className="size-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors disabled:opacity-30"
          aria-label="Zoom in"
        >
          <ZoomIn className="size-4 text-white" />
        </button>
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 size-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="size-6 text-white" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 size-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="size-6 text-white" />
          </button>
        </>
      )}

      {/* Image */}
      <div
        className="w-full h-full flex items-center justify-center overflow-hidden select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
      >
        <img
          src={images[currentIndex]}
          alt={`${alt} - ${currentIndex + 1}`}
          className="max-w-[90vw] max-h-[80vh] object-contain transition-transform duration-200"
          style={{
            transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
          }}
          draggable={false}
        />
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setCurrentIndex(idx); resetZoom(); }}
              className={`size-2.5 rounded-full transition-all duration-200 ${
                idx === currentIndex ? 'bg-gold w-6' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
