
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';
import { useData } from '@/contexts/DataContext';

interface ReviewFormProps {
  itemId: string;
  onReviewSubmitted: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ itemId, onReviewSubmitted }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');
  
  const { addReview } = useData();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      return; // Don't submit if no rating is selected
    }
    
    addReview(itemId, rating, comment);
    setRating(0);
    setComment('');
    onReviewSubmitted();
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            className="focus:outline-none"
          >
            <Star
              className={`h-6 w-6 ${
                star <= (hoveredRating || rating)
                  ? 'text-yellow-500 fill-yellow-500'
                  : 'text-gray-300'
              }`}
            />
          </button>
        ))}
        <span className="ml-2 text-sm text-gray-500">
          {rating ? `${rating}/5 stars` : 'Select Rating'}
        </span>
      </div>
      
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Share your thoughts about this item..."
        className="min-h-[100px]"
        required
      />
      
      <Button 
        type="submit" 
        className="bg-brand-purple hover:bg-brand-purple/90"
        disabled={rating === 0 || comment.trim() === ''}
      >
        Submit Review
      </Button>
    </form>
  );
};

export default ReviewForm;
