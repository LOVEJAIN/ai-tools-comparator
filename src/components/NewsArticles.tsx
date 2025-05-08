
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Newspaper, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

// Sample news articles data
const articles = [
  {
    id: '1',
    title: 'The Future of Sustainable Hand Washing Solutions',
    date: '2025-04-22',
    snippet: 'Discover eco-friendly innovations in soap dispensers and water-saving technologies.',
    url: '#'
  },
  {
    id: '2',
    title: 'Top 10 Commercial Bathroom Designs for 2025',
    date: '2025-03-15',
    snippet: 'See the latest trends in commercial washroom aesthetics and functionality.',
    url: '#'
  },
  {
    id: '3',
    title: 'Study Shows Importance of Proper Hand Sanitization',
    date: '2025-02-28',
    snippet: 'New research emphasizes the critical role of sanitizer dispensers in public health.',
    url: '#'
  },
  {
    id: '4',
    title: 'Smart Dispensers: The Next Big Thing in Washroom Tech',
    date: '2025-01-10',
    snippet: 'How IoT is transforming the humble soap dispenser into a data-driven device.',
    url: '#'
  }
];

const NewsArticles: React.FC = () => {
  return (
    <Card className="h-full overflow-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Newspaper className="h-5 w-5" />
          News & Articles
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {articles.map((article, index) => (
            <React.Fragment key={article.id}>
              {index > 0 && <Separator />}
              <div className="space-y-2">
                <h3 className="font-medium line-clamp-2">{article.title}</h3>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">{article.snippet}</p>
                <Button variant="ghost" size="sm" className="flex items-center text-xs">
                  Read More
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsArticles;
