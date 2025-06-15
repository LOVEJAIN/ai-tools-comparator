import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useData } from '@/contexts/DataContext';
import { Star, ThumbsUp, ThumbsDown, MessageSquare, ImageOff } from 'lucide-react';
import { Item } from '@/types';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import { toast } from '@/components/ui/sonner';

// Default fallback image for items
const FALLBACK_IMAGE = '/placeholder.svg';

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const { voteItem, trackItemClick, reviews, user } = useData();
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [voteCount, setVoteCount] = useState(item.votes || 0);
  
  const itemReviews = reviews.filter(review => review.itemId === item.id);
  
  // Load like/dislike state from localStorage
  useEffect(() => {
    if (!user) return;
    const likes = JSON.parse(localStorage.getItem('itemLikes') || '{}');
    const dislikes = JSON.parse(localStorage.getItem('itemDislikes') || '{}');
    setLiked(!!(likes[item.id] && likes[item.id].includes(user.email)));
    setDisliked(!!(dislikes[item.id] && dislikes[item.id].includes(user.email)));
    setVoteCount((likes[item.id] || []).length || 0);
  }, [item.id, user]);
  
  const handleItemClick = () => {
    trackItemClick(item.id);
    window.open(item.url, "_blank", "noopener noreferrer");
  };
  
  const handleUpvote = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) {
      toast.error('You must be logged in to upvote.');
      return;
    }
    let likes = JSON.parse(localStorage.getItem('itemLikes') || '{}');
    let dislikes = JSON.parse(localStorage.getItem('itemDislikes') || '{}');
    likes[item.id] = likes[item.id] || [];
    dislikes[item.id] = dislikes[item.id] || [];
    if (!likes[item.id].includes(user.email)) {
      likes[item.id].push(user.email);
      // Remove from dislikes if present
      dislikes[item.id] = dislikes[item.id].filter((u: string) => u !== user.email);
    } else {
      // Toggle off like
      likes[item.id] = likes[item.id].filter((u: string) => u !== user.email);
    }
    localStorage.setItem('itemLikes', JSON.stringify(likes));
    localStorage.setItem('itemDislikes', JSON.stringify(dislikes));
    setLiked(likes[item.id].includes(user.email));
    setDisliked(false);
    setVoteCount(likes[item.id].length);
  };
  
  const handleDownvote = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) {
      toast.error('You must be logged in to downvote.');
      return;
    }
    let likes = JSON.parse(localStorage.getItem('itemLikes') || '{}');
    let dislikes = JSON.parse(localStorage.getItem('itemDislikes') || '{}');
    dislikes[item.id] = dislikes[item.id] || [];
    likes[item.id] = likes[item.id] || [];
    if (!dislikes[item.id].includes(user.email)) {
      dislikes[item.id].push(user.email);
      // Remove from likes if present
      likes[item.id] = likes[item.id].filter((u: string) => u !== user.email);
    } else {
      // Toggle off dislike
      dislikes[item.id] = dislikes[item.id].filter((u: string) => u !== user.email);
    }
    localStorage.setItem('itemLikes', JSON.stringify(likes));
    localStorage.setItem('itemDislikes', JSON.stringify(dislikes));
    setDisliked(dislikes[item.id].includes(user.email));
    setLiked(false);
    setVoteCount(likes[item.id].length);
  };
  
  const openReviewDialog = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsReviewDialogOpen(true);
  };

  const handleImageError = () => {
    console.log(`Failed to load image for ${item.title}`);
    setImageError(true);
  };

  // Use the image path from the item or the fallback if there's an error
  const imageSrc = imageError ? FALLBACK_IMAGE : item.imageUrl;

  return (
    <>
      <Card 
        className={`w-full overflow-hidden transition-all hover:shadow-lg hover:scale-[1.01] cursor-pointer ${
          item.featured ? 'border-brand-purple' : ''
        }`}
        onClick={handleItemClick}
      >
        <div className="relative h-48 overflow-hidden bg-gray-100 flex justify-center items-center">
          {!imageError ? (
            <img 
              src={imageSrc} 
              alt={item.title}
              className="object-cover w-full h-full"
              onError={handleImageError}
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-400">
              <ImageOff size={24} />
              <span className="text-xs mt-1">{item.title}</span>
            </div>
          )}
          {item.featured && (
            <div className="absolute top-2 right-2 bg-brand-purple text-white px-2 py-1 text-xs rounded-full">
              Featured
            </div>
          )}
        </div>
        <CardContent className="p-4 h-32 flex flex-col">
          <h3 className="text-lg font-semibold mb-1 line-clamp-2">{item.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-2">{item.description}</p>
          <div className="flex items-center">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
              <span className="text-sm font-medium">{item.rating.toFixed(1)}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center border-t mt-2">
          <div className="flex space-x-1">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`h-8 px-2 ${liked ? 'text-red-500' : ''}`}
              onClick={handleUpvote}
            >
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span className="text-xs font-semibold">{voteCount}</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`h-8 px-2 ${disliked ? 'text-red-500' : ''}`}
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
