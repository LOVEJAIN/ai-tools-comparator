export interface User {
  id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  isVerified?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Item {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  logoUrl?: string;
  url: string;
  votes: number;
  reviewsCount: number;
  rating: number;
  createdAt: string;
  featured?: boolean;
}

export interface Review {
  id: string;
  userId: string;
  username: string;
  itemId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Analytics {
  itemId: string;
  itemTitle: string;
  clicks: number;
  conversion: number;
  revenue: number;
  avgRating: number;
  numRaters: number;
}
