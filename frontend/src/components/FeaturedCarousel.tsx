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
    imageUrl: tool.imageUrl || '',
    url: tool.url,
    votes: 0,
    reviewsCount: tool.reviewCount,
    rating: tool.rating,
    createdAt: '',
    featured: false,
  }));

const FeaturedCarousel: React.FC = () => {
  const carouselApiRef = useRef<any>(null);
  // Auto-move every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselApiRef.current) {
        carouselApiRef.current.scrollNext();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-6xl mx-auto my-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured AI Tools</h2>
      <div className="relative flex items-center justify-center">
        <Carousel
          opts={{ align: 'start', loop: true }}
          setApi={api => (carouselApiRef.current = api)}
          className="w-full"
        >
          <div className="flex items-center gap-6">
            <CarouselPrevious className="mr-4" />
            <CarouselContent className="flex gap-6">
              {topTools.map(tool => (
                <CarouselItem
                  key={tool.id}
                  className="w-[260px] max-w-[260px] flex-shrink-0"
                  style={{ flex: '0 0 20%' }} // 5 visible at once
                >
                  <ItemCard item={tool} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="ml-4" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedCarousel; 