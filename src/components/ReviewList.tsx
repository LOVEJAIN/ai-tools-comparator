
import React from 'react';
import { useData } from '@/contexts/DataContext';
import { Star } from 'lucide-react';
import { format } from 'date-fns';

interface ReviewListProps {
  itemId: string;
}

const ReviewList: React.FC<ReviewListProps> = ({ itemId }) => {
  const { reviews } = useData();
  
  // Filter reviews for the current item
  const itemReviews = reviews.filter(review => review.itemId === itemId);

  // If no reviews, show a message
  if (itemReviews.length === 0) {
    return <p className="text-center text-gray-500 py-4">No reviews yet. Be the first to review!</p>;
  }

  return (
    <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
      {itemReviews.map(review => (
        <div key={review.id} className="p-3 border rounded-md">
          <div className="flex justify-between items-center mb-1">
            <div className="flex items-center">
              <span className="font-medium text-sm">{review.username}</span>
              <span className="mx-2 text-gray-400">•</span>
              <div className="flex items-center">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-3 w-3 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
            </div>
            <span className="text-xs text-gray-500">
              {format(new Date(review.createdAt), 'MMM d, yyyy')}
            </span>
          </div>
          <p className="text-sm text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
