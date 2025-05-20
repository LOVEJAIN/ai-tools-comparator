
import React from 'react';
import { useData } from '@/contexts/DataContext';
import { cn } from '@/lib/utils';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const CategoryFilter: React.FC = () => {
  const { categories, activeCategory, setActiveCategory, sortOrder, setSortOrder } = useData();

  return (
    <div className="w-full py-4 bg-white border-b">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center overflow-x-auto space-x-2 pb-2 md:pb-0">
            <button
              onClick={() => setActiveCategory('all')}
              className={cn(
                'inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors',
                activeCategory === 'all'
                  ? 'bg-brand-purple text-white'
                  : 'bg-brand-light-purple text-gray-800 hover:bg-brand-purple/20'
              )}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap',
                  activeCategory === category.id
                    ? 'bg-brand-purple text-white'
                    : 'bg-brand-light-purple text-gray-800 hover:bg-brand-purple/20'
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Sort by:</span>
            <Select
              value={sortOrder}
              onValueChange={(value) => setSortOrder(value as 'popular' | 'latest' | 'rating')}
            >
              <SelectTrigger className="w-[140px] h-9">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Votes</SelectItem>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
