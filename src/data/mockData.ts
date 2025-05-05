
import { Category, Item, Review, Analytics } from '../types';

export const mockCategories: Category[] = [
  { id: 'tech', name: 'Technology', slug: 'technology', description: 'Latest tech gadgets and software' },
  { id: 'games', name: 'Games', slug: 'games', description: 'Video games and board games' },
  { id: 'books', name: 'Books', slug: 'books', description: 'Fiction and non-fiction books' },
  { id: 'food', name: 'Food', slug: 'food', description: 'Restaurants and recipes' },
  { id: 'travel', name: 'Travel', slug: 'travel', description: 'Destinations and travel tips' }
];

export const mockItems: Item[] = [
  {
    id: 'item1',
    title: 'Wireless Earbuds Pro',
    description: 'Premium wireless earbuds with active noise cancellation and 24-hour battery life',
    category: 'tech',
    imageUrl: 'https://source.unsplash.com/random/800x600/?earbuds',
    url: 'https://example.com/earbuds',
    votes: 142,
    reviewsCount: 15,
    rating: 4.7,
    createdAt: '2024-09-15T14:48:00.000Z',
    featured: true
  },
  {
    id: 'item2',
    title: 'Smartphone X',
    description: 'The latest smartphone with a stunning camera and all-day battery life',
    category: 'tech',
    imageUrl: 'https://source.unsplash.com/random/800x600/?smartphone',
    url: 'https://example.com/smartphone',
    votes: 98,
    reviewsCount: 12,
    rating: 4.5,
    createdAt: '2024-10-18T10:24:00.000Z'
  },
  {
    id: 'item3',
    title: 'Gaming Laptop Ultra',
    description: 'Powerful gaming laptop with RTX graphics and high refresh rate display',
    category: 'tech',
    imageUrl: 'https://source.unsplash.com/random/800x600/?laptop',
    url: 'https://example.com/gaming-laptop',
    votes: 76,
    reviewsCount: 8,
    rating: 4.3,
    createdAt: '2024-04-05T09:15:00.000Z'
  },
  {
    id: 'item4',
    title: 'Cosmic Adventure',
    description: 'A space exploration game with stunning visuals and an immersive story',
    category: 'games',
    imageUrl: 'https://source.unsplash.com/random/800x600/?space-game',
    url: 'https://example.com/cosmic-adventure',
    votes: 210,
    reviewsCount: 24,
    rating: 4.8,
    createdAt: '2024-04-10T16:30:00.000Z',
    featured: true
  },
  {
    id: 'item5',
    title: 'Strategy Kingdom',
    description: 'Build your empire in this addictive strategy game',
    category: 'games',
    imageUrl: 'https://source.unsplash.com/random/800x600/?strategy-game',
    url: 'https://example.com/strategy-kingdom',
    votes: 115,
    reviewsCount: 16,
    rating: 4.2,
    createdAt: '2024-05-03T14:22:00.000Z'
  },
  {
    id: 'item6',
    title: 'Mystery Island',
    description: 'Solve the mysteries of a deserted island in this adventure game',
    category: 'games',
    imageUrl: 'https://source.unsplash.com/random/800x600/?island',
    url: 'https://example.com/mystery-island',
    votes: 89,
    reviewsCount: 10,
    rating: 4.0,
    createdAt: '2023-11-20T11:45:00.000Z'
  },
  {
    id: 'item7',
    title: 'The Lost City',
    description: 'A thrilling novel about the discovery of an ancient civilization',
    category: 'books',
    imageUrl: 'https://source.unsplash.com/random/800x600/?ancient-city',
    url: 'https://example.com/lost-city',
    votes: 156,
    reviewsCount: 19,
    rating: 4.6,
    createdAt: '2023-08-15T09:10:00.000Z'
  },
  {
    id: 'item8',
    title: 'Future Technology',
    description: 'A non-fiction book exploring the future of technology',
    category: 'books',
    imageUrl: 'https://source.unsplash.com/random/800x600/?future',
    url: 'https://example.com/future-technology',
    votes: 112,
    reviewsCount: 14,
    rating: 4.4,
    createdAt: '2023-07-22T15:40:00.000Z',
    featured: true
  },
  {
    id: 'item9',
    title: 'Healthy Cooking',
    description: 'A cookbook with nutritious and delicious recipes',
    category: 'books',
    imageUrl: 'https://source.unsplash.com/random/800x600/?cookbook',
    url: 'https://example.com/healthy-cooking',
    votes: 78,
    reviewsCount: 9,
    rating: 4.2,
    createdAt: '2023-09-05T10:30:00.000Z'
  },
  {
    id: 'item10',
    title: 'Gourmet Restaurant',
    description: 'A fine dining restaurant with a creative menu',
    category: 'food',
    imageUrl: 'https://source.unsplash.com/random/800x600/?gourmet',
    url: 'https://example.com/gourmet-restaurant',
    votes: 187,
    reviewsCount: 22,
    rating: 4.9,
    createdAt: '2023-10-12T19:15:00.000Z'
  },
  {
    id: 'item11',
    title: 'Street Food Market',
    description: 'A vibrant market with diverse street food options',
    category: 'food',
    imageUrl: 'https://source.unsplash.com/random/800x600/?street-food',
    url: 'https://example.com/street-food',
    votes: 132,
    reviewsCount: 17,
    rating: 4.5,
    createdAt: '2023-11-08T12:40:00.000Z'
  },
  {
    id: 'item12',
    title: 'Countryside Retreat',
    description: 'A peaceful retreat in the beautiful countryside',
    category: 'travel',
    imageUrl: 'https://source.unsplash.com/random/800x600/?countryside',
    url: 'https://example.com/countryside-retreat',
    votes: 165,
    reviewsCount: 20,
    rating: 4.7,
    createdAt: '2024-05-02T11:20:00.000Z',
    featured: true
  },
  {
    id: 'item13',
    title: 'Beach Paradise',
    description: 'A stunning beach destination with crystal-clear waters',
    category: 'travel',
    imageUrl: 'https://source.unsplash.com/random/800x600/?beach',
    url: 'https://example.com/beach-paradise',
    votes: 201,
    reviewsCount: 23,
    rating: 4.8,
    createdAt: '2024-04-15T14:30:00.000Z'
  },
  {
    id: 'item14',
    title: 'Mountain Adventure',
    description: 'An exciting adventure in the mountain ranges',
    category: 'travel',
    imageUrl: 'https://source.unsplash.com/random/800x600/?mountains',
    url: 'https://example.com/mountain-adventure',
    votes: 143,
    reviewsCount: 16,
    rating: 4.6,
    createdAt: '2024-03-25T16:45:00.000Z'
  },
  {
    id: 'item15',
    title: 'Classic Bakery',
    description: 'A bakery known for its traditional pastries and bread',
    category: 'food',
    imageUrl: 'https://source.unsplash.com/random/800x600/?bakery',
    url: 'https://example.com/classic-bakery',
    votes: 119,
    reviewsCount: 13,
    rating: 4.4,
    createdAt: '2024-02-18T08:50:00.000Z'
  }
];

export const mockReviews: Review[] = [
  {
    id: 'review1',
    userId: 'user1',
    username: 'TechEnthusiast',
    itemId: 'item1',
    rating: 5,
    comment: 'Best earbuds I have ever used. Great sound quality and excellent noise cancellation.',
    createdAt: '2024-04-20T10:15:00.000Z'
  },
  {
    id: 'review2',
    userId: 'user2',
    username: 'AudioFan',
    itemId: 'item1',
    rating: 4,
    comment: 'Very good sound quality, but battery life could be better.',
    createdAt: '2024-04-18T14:30:00.000Z'
  },
  {
    id: 'review3',
    userId: 'user3',
    username: 'MusicLover',
    itemId: 'item1',
    rating: 5,
    comment: 'Amazing product! The noise cancellation is perfect for my commute.',
    createdAt: '2024-04-15T09:45:00.000Z'
  },
  {
    id: 'review4',
    userId: 'user4',
    username: 'GamerPro',
    itemId: 'item4',
    rating: 5,
    comment: 'Incredible game with stunning visuals. The story is captivating!',
    createdAt: '2024-04-22T16:20:00.000Z'
  },
  {
    id: 'review5',
    userId: 'user5',
    username: 'SciFiFan',
    itemId: 'item4',
    rating: 4,
    comment: 'Great game, but some levels are too challenging.',
    createdAt: '2024-04-19T11:40:00.000Z'
  },
  {
    id: 'review6',
    userId: 'user6',
    username: 'BookReader',
    itemId: 'item8',
    rating: 5,
    comment: 'Fascinating insights into future technology. Could not put it down!',
    createdAt: '2024-04-21T13:25:00.000Z'
  },
  {
    id: 'review7',
    userId: 'user7',
    username: 'FoodieExplorer',
    itemId: 'item10',
    rating: 5,
    comment: 'Exceptional dining experience. The chef\'s tasting menu was outstanding.',
    createdAt: '2024-04-17T19:10:00.000Z'
  },
  {
    id: 'review8',
    userId: 'user8',
    username: 'AdventureSeeker',
    itemId: 'item12',
    rating: 5,
    comment: 'The perfect getaway! Peaceful, beautiful, and rejuvenating.',
    createdAt: '2024-04-23T10:55:00.000Z'
  }
];

export const mockAnalytics: Analytics[] = [
  { itemId: 'item1', itemTitle: 'Wireless Earbuds Pro', clicks: 324, conversion: 0.12, revenue: 81.00 },
  { itemId: 'item2', itemTitle: 'Smartphone X', clicks: 286, conversion: 0.08, revenue: 71.50 },
  { itemId: 'item3', itemTitle: 'Gaming Laptop Ultra', clicks: 198, conversion: 0.05, revenue: 49.50 },
  { itemId: 'item4', itemTitle: 'Cosmic Adventure', clicks: 412, conversion: 0.15, revenue: 103.00 },
  { itemId: 'item5', itemTitle: 'Strategy Kingdom', clicks: 267, conversion: 0.09, revenue: 66.75 },
  { itemId: 'item6', itemTitle: 'Mystery Island', clicks: 182, conversion: 0.07, revenue: 45.50 },
  { itemId: 'item7', itemTitle: 'The Lost City', clicks: 245, conversion: 0.11, revenue: 61.25 },
  { itemId: 'item8', itemTitle: 'Future Technology', clicks: 307, conversion: 0.13, revenue: 76.75 },
  { itemId: 'item9', itemTitle: 'Healthy Cooking', clicks: 174, conversion: 0.06, revenue: 43.50 },
  { itemId: 'item10', itemTitle: 'Gourmet Restaurant', clicks: 356, conversion: 0.14, revenue: 89.00 },
  { itemId: 'item11', itemTitle: 'Street Food Market', clicks: 289, conversion: 0.10, revenue: 72.25 },
  { itemId: 'item12', itemTitle: 'Countryside Retreat', clicks: 341, conversion: 0.12, revenue: 85.25 },
  { itemId: 'item13', itemTitle: 'Beach Paradise', clicks: 403, conversion: 0.16, revenue: 100.75 },
  { itemId: 'item14', itemTitle: 'Mountain Adventure', clicks: 322, conversion: 0.11, revenue: 80.50 },
  { itemId: 'item15', itemTitle: 'Classic Bakery', clicks: 251, conversion: 0.08, revenue: 62.75 }
];
