import React, { useEffect, useRef } from 'react';
import { aiTools } from '../data/aiTools';
import ItemCard from './ItemCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel';

// Get top 10 tools by rating (and reviewCount as tiebreaker)
const topTools = [...aiTools]
  .sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount)
  .slice(0, 10)
  .map(tool => ({
    id: tool.id,
    title: tool.name,
    description: tool.description,
    category: tool.category,
    imageUrl: (tool.logoUrl && tool.logoUrl.trim() !== '') ? tool.logoUrl : (tool.imageUrl || ''),
    url: tool.url,
    votes: 0,
    reviewsCount: tool.reviewCount,
    rating: tool.rating,
    createdAt: '',
    featured: false,
  }));

const FeaturedCarousel: React.FC = () => {
  const desktopCarouselApiRef = useRef<any>(null);
  const mobileCarouselApiRef = useRef<any>(null);
  
  // Auto-move every 3 seconds for desktop
  useEffect(() => {
    const interval = setInterval(() => {
      if (desktopCarouselApiRef.current) {
        desktopCarouselApiRef.current.scrollNext();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-move every 1 second for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (mobileCarouselApiRef.current) {
        mobileCarouselApiRef.current.scrollNext();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-6xl mx-auto my-12 px-4">
      <div className="relative">
        {/* Mobile Vertical Carousel - Shows one card at a time with auto-scroll */}
        <div className="block sm:hidden">
          <div className="relative">
            <Carousel
              opts={{ 
                align: 'start', 
                loop: true,
                axis: 'y',
                slidesToScroll: 1
              }}
              orientation="vertical"
              setApi={api => (mobileCarouselApiRef.current = api)}
              className="w-full max-w-sm mx-auto"
            >
              <CarouselContent className="flex flex-col gap-4 h-[320px]">
                {topTools.map(tool => (
                  <CarouselItem
                    key={tool.id}
                    className="w-full h-[280px] flex-shrink-0 flex"
                  >
                    <ItemCard item={tool} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Desktop Horizontal Carousel */}
        <div className="hidden sm:block">
          <Carousel
            opts={{ align: 'start', loop: true }}
            setApi={api => (desktopCarouselApiRef.current = api)}
            className="w-full"
          >
            <div className="flex items-center gap-6">
              <CarouselPrevious className="mr-4 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
              <CarouselContent className="flex gap-6">
                {topTools.map(tool => (
                  <CarouselItem
                    key={tool.id}
                    className="w-[370px] h-[260px] max-w-[370px] flex-shrink-0 flex"
                    style={{ flex: '0 0 24%' }}
                  >
                    <ItemCard item={tool} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className="ml-4 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel; 