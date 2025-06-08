import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { NewsArticle } from '@/types/news';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface NewsCardProps {
  news: NewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="transition-all duration-200">
      <CardContent className="p-4">
        {news.urlToImage && (
          <img
            src={news.urlToImage}
            alt={news.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        )}
        <div 
          className="cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start justify-between">
            <h3 className="font-semibold mb-2 hover:text-primary flex-grow">
              {news.title}
            </h3>
            <button 
              className="ml-2 p-1 hover:bg-gray-100 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
            >
              {isExpanded ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
          </div>
          
          {isExpanded && news.description && (
            <p className="text-sm text-muted-foreground mb-2">
              {news.description}
            </p>
          )}
        </div>

        <div className="mt-2 text-xs text-muted-foreground flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>{news.source.name}</span>
            {news.author && (
              <>
                <span>•</span>
                <span>{news.author}</span>
              </>
            )}
          </div>
          <span>{new Date(news.publishedAt).toLocaleDateString()}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard; 