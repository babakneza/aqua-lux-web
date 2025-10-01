import { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface MediaGalleryProps {
  images: Array<{ src: string; alt: string }>;
  featuredText?: string;
}

export const MediaGallery = ({ images, featuredText }: MediaGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative glass-panel rounded-2xl p-8 h-[500px] flex items-center justify-center group overflow-hidden">
        {featuredText && (
          <Badge className="absolute top-4 ltr:left-4 rtl:right-4 z-10 bg-gold text-gold-foreground">
            {featuredText}
          </Badge>
        )}
        <img
          src={images[selectedIndex].src}
          alt={images[selectedIndex].alt}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
        <button
          onClick={() => setLightboxOpen(true)}
          className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center cursor-zoom-in"
          aria-label="Open lightbox"
        >
          <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevious}
            className="flex-shrink-0"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="flex gap-2 overflow-x-auto flex-1 scrollbar-hide">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`glass-panel rounded-xl p-2 w-20 h-20 flex-shrink-0 transition-all hover-scale ${
                  selectedIndex === idx ? 'ring-2 ring-accent' : ''
                }`}
                aria-label={`View image ${idx + 1}`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="flex-shrink-0"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      )}

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-6xl bg-black/95 border-none p-0">
          <div className="relative">
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 ltr:right-4 rtl:left-4 text-white hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </Button>
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePrevious}
                  className="absolute top-1/2 ltr:left-4 rtl:right-4 -translate-y-1/2 text-white hover:bg-white/20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleNext}
                  className="absolute top-1/2 ltr:right-4 rtl:left-4 -translate-y-1/2 text-white hover:bg-white/20"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
