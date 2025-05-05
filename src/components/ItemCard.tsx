
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useData } from '@/contexts/DataContext';
import { Star, ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';
import { Item, Review } from '@/types';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const { voteItem, trackItemClick, reviews, user } = useData();
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);
  
  const itemReviews = reviews.filter(review => review.itemId === item.id);
  
  const handleItemClick = () => {
    trackItemClick(item.id);
    window.open(item.url, "_blank", "noopener noreferrer");
  };
  
  const handleUpvote = (e: React.MouseEvent) => {
    e.stopPropagation();
    voteItem(item.id, 'up');
  };
  
  const handleDownvote = (e: React.MouseEvent) => {
    e.stopPropagation();
    voteItem(item.id, 'down');
  };
  
  const openReviewDialog = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsReviewDialogOpen(true);
  };

  return (
    <>
      <Card 
        className={`overflow-hidden transition-all hover:shadow-lg hover:scale-[1.01] cursor-pointer ${
          item.featured ? 'border-brand-purple' : ''
        }`}
        onClick={handleItemClick}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={item.imageUrl} 
            alt={item.title}
            className="object-cover w-full h-full"
          />
          {item.featured && (
            <div className="absolute top-2 right-2 bg-brand-purple text-white px-2 py-1 text-xs rounded-full">
              Featured
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-1 line-clamp-2">{item.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-2">{item.description}</p>
          <div className="flex items-center">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
              <span className="text-sm font-medium">{item.rating.toFixed(1)}</span>
              <span className="text-xs text-gray-500 ml-1">({item.reviewsCount} reviews)</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center border-t mt-2">
          <div className="flex space-x-1">
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 px-2"
              onClick={handleUpvote}
            >
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span className="text-xs font-semibold">{item.votes}</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 px-2"
              onClick={handleDownvote}
            >
              <ThumbsDown className="h-4 w-4" />
            </Button>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8"
            onClick={openReviewDialog}
          >
            <MessageSquare className="h-4 w-4 mr-1" />
            <span className="text-xs">Reviews</span>
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isReviewDialogOpen} onOpenChange={setIsReviewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{item.title} - Reviews</DialogTitle>
          </DialogHeader>
          
          <ReviewList itemId={item.id} />
          
          {user ? (
            <div className="mt-4 pt-4 border-t">
              <h3 className="text-sm font-medium mb-2">Add Your Review</h3>
              <ReviewForm itemId={item.id} onReviewSubmitted={() => {}} />
            </div>
          ) : (
            <div className="mt-4 pt-4 border-t text-center text-sm text-gray-500">
              Please log in to add a review
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ItemCard;
