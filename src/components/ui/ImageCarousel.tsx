import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  { id: 1, src: '/images/wall_art_1.png', alt: 'Golden Tree Wall Art' },
  { id: 2, src: '/images/wall_art_2.png', alt: 'LED Landscape Wall Art' },
  { id: 3, src: '/images/wall_art_3.png', alt: 'Metallic Feather Set' },
  { id: 4, src: '/images/wall_art_4.png', alt: 'Abstract Optical Illusion' },
  // Duplicate for scrolling effect
  { id: 5, src: '/images/wall_art_1.png', alt: 'Golden Tree Wall Art Duplicate' },
  { id: 6, src: '/images/wall_art_2.png', alt: 'LED Landscape Wall Art Duplicate' },
  { id: 7, src: '/images/wall_art_3.png', alt: 'Metallic Feather Set Duplicate' },
  { id: 8, src: '/images/wall_art_4.png', alt: 'Abstract Optical Illusion Duplicate' },
];

export function ImageCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white p-6 shadow-sm border border-gray-200" data-testid="image-carousel-widget">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          Up to 75% off <span className="font-light text-gray-400">|</span> 
          Curated products <span className="font-light text-gray-400">|</span> 
          Small Businesses
        </h2>
        <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline inline-block mt-1">See more</a>
      </div>
      
      <div className="relative group">
        {/* Left Arrow */}
        <button 
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 border border-gray-200 shadow-md p-2 py-8 opacity-0 group-hover:opacity-100 transition-all rounded-r hover:bg-gray-50 focus:outline-none"
          data-testid="carousel-btn-left"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="overflow-x-auto flex gap-4 scroll-smooth snap-x pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          data-testid="carousel-scroll-container"
        >
          {IMAGES.map((img) => (
            <div 
              key={img.id} 
              className="relative shrink-0 w-[240px] h-[240px] bg-gray-100 overflow-hidden cursor-pointer snap-start hover:opacity-90 transition-opacity"
              data-testid={`carousel-item-${img.id}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 border border-gray-200 shadow-md p-2 py-8 opacity-0 group-hover:opacity-100 transition-all rounded-l hover:bg-gray-50 focus:outline-none"
          data-testid="carousel-btn-right"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        [data-testid="carousel-scroll-container"]::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
