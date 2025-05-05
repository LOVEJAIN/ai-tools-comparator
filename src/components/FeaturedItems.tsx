
import React from 'react';
import { useData } from '@/contexts/DataContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThumbsUp, Star } from 'lucide-react';

const FeaturedItems: React.FC = () => {
  const { items, trackItemClick } = useData();
  
  // Get featured items
  const featuredItems = items.filter(item => item.featured);
  
  if (featuredItems.length === 0) {
    return null;
  }
  
  const handleItemClick = (itemId: string, url: string) => {
    trackItemClick(itemId);
    window.open(url, "_blank", "noopener noreferrer");
  };
  
  return (
    <div className="py-4 bg-brand-light-purple">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl font-bold mb-4">Featured Picks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <Card 
              key={item.id}
              className="overflow-hidden transition-all hover:shadow-lg hover:scale-[1.01] cursor-pointer"
              onClick={() => handleItemClick(item.id, item.url)}
            >
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-2 right-2 bg-brand-purple text-white px-2 py-1 text-xs rounded-full">
                  Featured
                </div>
              </div>
              <CardContent className="p-3">
                <h3 className="text-base font-semibold line-clamp-1">{item.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    <span className="text-xs font-medium">{item.votes}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="text-xs">{item.rating.toFixed(1)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
