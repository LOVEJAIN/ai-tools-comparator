
import { Category, Item, Review, Analytics } from '../types';

export const mockCategories: Category[] = [
  { id: 'soap', name: 'Soaps', slug: 'soaps', description: 'Hand and body soaps for all washroom needs' },
  { id: 'sanitizers', name: 'Sanitizers', slug: 'sanitizers', description: 'Hand sanitizers and disinfectants' },
  { id: 'dispensers', name: 'Dispensers', slug: 'dispensers', description: 'Soap and paper dispensers' },
  { id: 'towels', name: 'Towels & Dryers', slug: 'towels', description: 'Paper towels and hand dryers' },
  { id: 'accessories', name: 'Accessories', slug: 'accessories', description: 'Other washroom accessories' }
];

export const mockItems: Item[] = [
  {
    id: 'item1',
    title: 'Luxury Hand Soap',
    description: 'Premium scented hand soap with moisturizing properties',
    category: 'soap',
    imageUrl: '/images/luxury-soap.jpg',
    url: 'https://example.com/luxury-soap',
    votes: 142,
    reviewsCount: 15,
    rating: 4.7,
    createdAt: '2024-09-15T14:48:00.000Z',
    featured: true
  },
  {
    id: 'item2',
    title: 'Antibacterial Foam Soap',
    description: 'Kills 99.9% of bacteria with a gentle foam formula',
    category: 'soap',
    imageUrl: '/images/antibacterial-soap.jpg',
    url: 'https://example.com/antibacterial-soap',
    votes: 98,
    reviewsCount: 12,
    rating: 4.5,
    createdAt: '2024-10-18T10:24:00.000Z'
  },
  {
    id: 'item3',
    title: 'Eco-Friendly Soap Bar',
    description: 'Sustainable soap bar with biodegradable packaging',
    category: 'soap',
    imageUrl: '/images/eco-soap.jpg',
    url: 'https://example.com/eco-soap',
    votes: 76,
    reviewsCount: 8,
    rating: 4.3,
    createdAt: '2024-04-05T09:15:00.000Z'
  },
  {
    id: 'item4',
    title: 'Premium Hand Sanitizer',
    description: 'Quick-drying formula with 70% alcohol content',
    category: 'sanitizers',
    imageUrl: '/images/premium-sanitizer.jpg',
    url: 'https://example.com/premium-sanitizer',
    votes: 210,
    reviewsCount: 24,
    rating: 4.8,
    createdAt: '2024-04-10T16:30:00.000Z',
    featured: true
  },
  {
    id: 'item5',
    title: 'Travel-Size Hand Sanitizer',
    description: 'Compact sanitizer perfect for on-the-go use',
    category: 'sanitizers',
    imageUrl: '/images/travel-sanitizer.jpg',
    url: 'https://example.com/travel-sanitizer',
    votes: 115,
    reviewsCount: 16,
    rating: 4.2,
    createdAt: '2024-05-03T14:22:00.000Z'
  },
  {
    id: 'item6',
    title: 'Sanitizer Spray Bottle',
    description: 'Fine mist sanitizer spray for hands and surfaces',
    category: 'sanitizers',
    imageUrl: '/images/sanitizer-spray.jpg',
    url: 'https://example.com/sanitizer-spray',
    votes: 89,
    reviewsCount: 10,
    rating: 4.0,
    createdAt: '2023-11-20T11:45:00.000Z'
  },
  {
    id: 'item7',
    title: 'Automatic Soap Dispenser',
    description: 'Touch-free soap dispenser with motion sensor',
    category: 'dispensers',
    imageUrl: '/images/automatic-dispenser.jpg',
    url: 'https://example.com/automatic-dispenser',
    votes: 156,
    reviewsCount: 19,
    rating: 4.6,
    createdAt: '2023-08-15T09:10:00.000Z'
  },
  {
    id: 'item8',
    title: 'Wall-Mounted Soap Dispenser',
    description: 'Space-saving dispenser for commercial washrooms',
    category: 'dispensers',
    imageUrl: '/images/wall-dispenser.jpg',
    url: 'https://example.com/wall-dispenser',
    votes: 112,
    reviewsCount: 14,
    rating: 4.4,
    createdAt: '2023-07-22T15:40:00.000Z',
    featured: true
  },
  {
    id: 'item9',
    title: 'Paper Towel Dispenser',
    description: 'High-capacity paper towel dispenser for busy washrooms',
    category: 'dispensers',
    imageUrl: '/images/towel-dispenser.jpg',
    url: 'https://example.com/towel-dispenser',
    votes: 78,
    reviewsCount: 9,
    rating: 4.2,
    createdAt: '2023-09-05T10:30:00.000Z'
  },
  {
    id: 'item10',
    title: 'Luxury Paper Hand Towels',
    description: 'Soft and absorbent premium paper towels for guest washrooms',
    category: 'towels',
    imageUrl: '/images/luxury-towels.jpg',
    url: 'https://example.com/luxury-towels',
    votes: 187,
    reviewsCount: 22,
    rating: 4.9,
    createdAt: '2023-10-12T19:15:00.000Z'
  },
  {
    id: 'item11',
    title: 'High-Speed Hand Dryer',
    description: 'Energy-efficient hand dryer with quick drying time',
    category: 'towels',
    imageUrl: '/images/hand-dryer.jpg',
    url: 'https://example.com/hand-dryer',
    votes: 132,
    reviewsCount: 17,
    rating: 4.5,
    createdAt: '2023-11-08T12:40:00.000Z'
  },
  {
    id: 'item12',
    title: 'Bathroom Mirror',
    description: 'Modern frameless mirror with anti-fog properties',
    category: 'accessories',
    imageUrl: '/images/bathroom-mirror.jpg',
    url: 'https://example.com/bathroom-mirror',
    votes: 165,
    reviewsCount: 20,
    rating: 4.7,
    createdAt: '2024-05-02T11:20:00.000Z',
    featured: true
  },
  {
    id: 'item13',
    title: 'Toilet Brush Set',
    description: 'Hygienic toilet brush with holder and silicone bristles',
    category: 'accessories',
    imageUrl: '/images/toilet-brush.jpg',
    url: 'https://example.com/toilet-brush',
    votes: 201,
    reviewsCount: 23,
    rating: 4.8,
    createdAt: '2024-04-15T14:30:00.000Z'
  },
  {
    id: 'item14',
    title: 'Waste Basket',
    description: 'Sleek stainless steel waste basket with lid',
    category: 'accessories',
    imageUrl: '/images/waste-basket.jpg',
    url: 'https://example.com/waste-basket',
    votes: 143,
    reviewsCount: 16,
    rating: 4.6,
    createdAt: '2024-03-25T16:45:00.000Z'
  },
  {
    id: 'item15',
    title: 'Bathroom Organizer',
    description: 'Multi-compartment organizer for washroom essentials',
    category: 'accessories',
    imageUrl: '/images/bathroom-organizer.jpg',
    url: 'https://example.com/organizer',
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
