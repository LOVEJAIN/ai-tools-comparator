import { Review } from '../types';

export const mockReviews: Review[] = [
  {
    id: '1',
    userId: '1',
    username: 'Admin User',
    itemId: '1',
    rating: 5,
    comment: 'Great tool!',
    createdAt: new Date().toISOString()
  }
]; 