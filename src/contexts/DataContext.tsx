
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Category, Item, Review, User, Analytics } from '../types';
import { mockCategories, mockItems, mockReviews, mockAnalytics } from '../data/mockData';
import { toast } from "@/components/ui/sonner";

interface DataContextType {
  user: User | null;
  categories: Category[];
  items: Item[];
  reviews: Review[];
  analytics: Analytics[];
  filteredItems: Item[];
  activeCategory: string;
  setActiveCategory: (categoryId: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (username: string, email: string, password: string) => void;
  voteItem: (itemId: string, direction: 'up' | 'down') => void;
  addReview: (itemId: string, rating: number, comment: string) => void;
  trackItemClick: (itemId: string) => void;
  sortOrder: 'popular' | 'latest' | 'rating';
  setSortOrder: (order: 'popular' | 'latest' | 'rating') => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [categories, setCategories] = useState<Category[]>(mockCategories);
  const [items, setItems] = useState<Item[]>(mockItems);
  const [reviews, setReviews] = useState<Review[]>(mockReviews);
  const [analytics, setAnalytics] = useState<Analytics[]>(mockAnalytics);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'popular' | 'latest' | 'rating'>('popular');

  // Get filtered and sorted items
  const filteredItems = React.useMemo(() => {
    let filtered = [...items];
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    // Sort items based on selected sort order
    switch (sortOrder) {
      case 'popular':
        return filtered.sort((a, b) => b.votes - a.votes);
      case 'latest':
        return filtered.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      default:
        return filtered;
    }
  }, [items, activeCategory, sortOrder]);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email: string, password: string) => {
    // In a real app, this would validate against a backend
    // Mock login for demonstration purposes
    if (email === 'admin@example.com' && password === 'password') {
      const adminUser: User = {
        id: '1',
        username: 'Admin User',
        email: email,
        isAdmin: true
      };
      setUser(adminUser);
      localStorage.setItem('user', JSON.stringify(adminUser));
      toast.success("Logged in as admin");
      return;
    } 
    
    if (email === 'user@example.com' && password === 'password') {
      const regularUser: User = {
        id: '2',
        username: 'Regular User',
        email: email,
        isAdmin: false
      };
      setUser(regularUser);
      localStorage.setItem('user', JSON.stringify(regularUser));
      toast.success("Logged in successfully");
      return;
    }
    
    toast.error("Invalid credentials");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.info("Logged out successfully");
  };

  const register = (username: string, email: string, password: string) => {
    // In a real app, this would register the user in a backend
    const newUser: User = {
      id: `user-${Date.now()}`,
      username,
      email,
      isAdmin: false
    };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    toast.success("Registered successfully");
  };

  const voteItem = (itemId: string, direction: 'up' | 'down') => {
    if (!user) {
      toast.error("You must be logged in to vote");
      return;
    }

    setItems(prevItems => 
      prevItems.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            votes: item.votes + (direction === 'up' ? 1 : -1)
          };
        }
        return item;
      })
    );

    toast.success(direction === 'up' ? 
      "Vote added!" : 
      "Vote removed!"
    );
  };

  const addReview = (itemId: string, rating: number, comment: string) => {
    if (!user) {
      toast.error("You must be logged in to add a review");
      return;
    }

    // Add the new review to the reviews list
    const newReview: Review = {
      id: `review-${Date.now()}`,
      userId: user.id,
      username: user.username,
      itemId,
      rating,
      comment,
      createdAt: new Date().toISOString()
    };

    setReviews(prev => [...prev, newReview]);

    // Update item rating and review count
    setItems(prevItems =>
      prevItems.map(item => {
        if (item.id === itemId) {
          const itemReviews = [...reviews, newReview].filter(r => r.itemId === itemId);
          const avgRating = itemReviews.reduce((acc, r) => acc + r.rating, 0) / itemReviews.length;
          
          return {
            ...item,
            reviewsCount: item.reviewsCount + 1,
            rating: parseFloat(avgRating.toFixed(1))
          };
        }
        return item;
      })
    );

    toast.success("Review added successfully");
  };

  const trackItemClick = (itemId: string) => {
    // In a real application, this would send data to an analytics backend
    // For the demo, we'll just update our mock analytics
    setAnalytics(prev => 
      prev.map(analytic => {
        if (analytic.itemId === itemId) {
          return {
            ...analytic,
            clicks: analytic.clicks + 1,
            revenue: parseFloat((analytic.clicks * 0.25).toFixed(2))
          };
        }
        return analytic;
      })
    );
  };

  return (
    <DataContext.Provider value={{
      user,
      categories,
      items,
      reviews,
      analytics,
      filteredItems,
      activeCategory,
      setActiveCategory,
      login,
      logout,
      register,
      voteItem,
      addReview,
      trackItemClick,
      sortOrder,
      setSortOrder
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
