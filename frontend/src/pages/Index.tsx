import { useState, useMemo, useEffect } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { aiTools as initialAiTools, AITool } from "../data/aiTools";
import { newsData } from "../data/newsData";
import Footer from "@/components/Footer";
import { useData } from "@/contexts/DataContext";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Admin from "./Admin";
import Header from "@/components/Header";
import ItemCard from "@/components/ItemCard";
import CategoryFilter from "@/components/CategoryFilter";
import Modal from "../components/Modal";
import CreateListForm from "../components/CreateListForm";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import { addNewsletterSubscriber } from "../lib/utils";
import { Input } from "@/components/ui/input";
import FeaturedCarousel from '../components/FeaturedCarousel';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import NewsCard from "@/components/NewsCard";

type PublicList = {
  id: string;
  title: string;
  creator: string;
  tools: { id: string, name: string }[];
};

interface AIEvent {
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
  location: string;
}

function StarRating({ value, onChange, readOnly = false }: { value: number; onChange?: (v: number) => void; readOnly?: boolean }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`cursor-pointer text-lg ${star <= value ? "text-yellow-500" : "text-gray-300"}`}
          onClick={() => !readOnly && onChange && onChange(star)}
          role={readOnly ? undefined : "button"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function Index() {
  const [aiTools, setAiTools] = useState<AITool[]>(initialAiTools);
  const [search, setSearch] = useState("");
  const [listSearch, setListSearch] = useState("");
  const [listSearchType, setListSearchType] = useState<'name' | 'user'>('name');
  const { user, categories, activeCategory, setActiveCategory } = useData();
  const [tool1, setTool1] = useState<string>("");
  const [tool2, setTool2] = useState<string>("");
  const [draggedToolId, setDraggedToolId] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'popular' | 'latest' | 'rating'>('popular');
  const [showSuccess, setShowSuccess] = useState(false);
  const [toolClicks, setToolClicks] = useState<{ [id: string]: number }>({});
  const [reviews, setReviews] = useState<{ [toolId: string]: { user: string; rating: number; text: string }[] }>({});
  const navigate = useNavigate();
  const [publicLists, setPublicLists] = useState<PublicList[]>([]);
  const [listDialog, setListDialog] = useState<{ open: boolean; list: PublicList | null }>({ open: false, list: null });
  const location = useLocation();
  const [showCreateListModal, setShowCreateListModal] = useState(false);
  const [privateLists, setPrivateLists] = useState<any[]>([]);
  const [showMainContent, setShowMainContent] = useState(false);
  const [editingList, setEditingList] = useState<PublicList | null>(null);
  const [editingPrivateList, setEditingPrivateList] = useState<any | null>(null);
  const [expandedEvents, setExpandedEvents] = useState<{[key: string]: boolean}>({});
  const [showLoginToCreateListMsg, setShowLoginToCreateListMsg] = useState(false);

  const filteredTools = useMemo(() => {
    return aiTools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'all' 
        ? true 
        : activeCategory === 'miscellaneous' 
          ? !categories.some(c => c.id === tool.category && c.id !== 'miscellaneous')
          : tool.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory, aiTools, categories]);

  const [currentPage, setCurrentPage] = useState(1);
  const toolsPerPage = 50;
  const totalPages = Math.ceil(filteredTools.length / toolsPerPage);
  // Reset to page 1 when category or search changes
  useEffect(() => { setCurrentPage(1); }, [activeCategory, search]);
  const paginatedTools = filteredTools.slice((currentPage - 1) * toolsPerPage, currentPage * toolsPerPage);

  // Unique categories for filter dropdown
  const uniqueCategories = categories;

  // Tools in selected category
  const toolsInCategory = useMemo(() => activeCategory === 'all' ? aiTools : aiTools.filter(t => t.category === activeCategory), [aiTools, activeCategory]);

  // Featured tools: top-rated or featured item per category
  const featuredTools = useMemo(() => {
    return categories.map(category => {
      // Find featured item first, else highest rating
      const itemsInCategory = aiTools.filter(t => t.category === category.id);
      let featured = itemsInCategory.find(t => (t as any).featured);
      if (!featured && itemsInCategory.length > 0) {
        featured = [...itemsInCategory].sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount)[0];
      }
      return featured ? {
        ...featured,
        title: featured.name,
        votes: 0,
        reviewsCount: featured.reviewCount,
        createdAt: '2024-01-01T00:00:00.000Z',
        imageUrl: featured.imageUrl || '',
      } : null;
    }).filter(Boolean);
  }, [categories, aiTools]);

  // Comparison objects
  const toolObj1 = toolsInCategory.find(t => t.id === tool1) || null;
  const toolObj2 = toolsInCategory.find(t => t.id === tool2) || null;

  // Submit Tool Form State
  const [form, setForm] = useState({
    name: "",
    description: "",
    url: "",
    category: "",
    imageUrl: "",
    captcha: ""
  });
  const [formError, setFormError] = useState("");

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormError("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!form.name || !form.description || !form.url || !form.category) {
      setFormError("All fields except image URL are required.");
      return;
    }
    if (form.captcha.trim() !== "7") {
      setFormError("Captcha answer is incorrect.");
      return;
    }
    // Add tool
    setAiTools(prev => [
      {
        id: (prev.length + 1).toString(),
        name: form.name,
        description: form.description,
        url: form.url,
        category: form.category,
        imageUrl: form.imageUrl || undefined,
        rating: 5,
        reviewCount: 1
      },
      ...prev
    ]);
    setShowSuccess(true);
    setForm({ name: "", description: "", url: "", category: "", imageUrl: "", captcha: "" });
    setTimeout(() => setShowSuccess(false), 3000);
  };

  // Click handler for tool cards
  const handleToolClick = (toolId: string, url: string) => {
    setToolClicks(prev => ({ ...prev, [toolId]: (prev[toolId] || 0) + 1 }));
    window.open(url, "_blank");
  };

  // Review modal state
  const [reviewModal, setReviewModal] = useState<{ open: boolean; toolId: string | null }>({ open: false, toolId: null });
  const [reviewForm, setReviewForm] = useState({ rating: 5, text: "" });
  const [reviewError, setReviewError] = useState("");

  // Open review modal
  const openReviewModal = (toolId: string) => {
    if (!user) {
      alert('Please log in to add a review.');
      return;
    }
    setReviewModal({ open: true, toolId });
    setReviewForm({ rating: 5, text: "" });
    setReviewError("");
  };

  // Submit review
  const submitReview = () => {
    if (!reviewModal.toolId) return;
    const toolId = reviewModal.toolId;
    const userEmail = user.email || "anon";
    // Only one review per user per tool
    if (reviews[toolId]?.some(r => r.user === userEmail)) {
      setReviewError("You have already reviewed this tool.");
      return;
    }
    setReviews(prev => ({
      ...prev,
      [toolId]: [...(prev[toolId] || []), { user: userEmail, rating: reviewForm.rating, text: reviewForm.text }]
    }));
    setReviewModal({ open: false, toolId: null });
  };

  // Calculate average rating and review count
  const getRating = (toolId: string, defaultRating: number, defaultCount: number) => {
    const toolReviews = reviews[toolId] || [];
    if (toolReviews.length === 0) return { avg: defaultRating, count: defaultCount };
    const sum = toolReviews.reduce((acc, r) => acc + r.rating, 0);
    return { avg: (sum + defaultRating * defaultCount) / (toolReviews.length + defaultCount), count: toolReviews.length + defaultCount };
  };

  // Calculate total clicks and submissions
  const totalClicks = Object.values(toolClicks).reduce((a, b) => a + b, 0);

  // Backend integration
  const API_BASE_URL = "http://localhost:8081";

  // Fetch public lists from backend
  const fetchPublicLists = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/lists/public`);
      const data = await res.json();
      setPublicLists(data);
    } catch (err) {
      console.error('Error fetching public lists:', err);
      setPublicLists([]);
    }
  };

  // Fetch private lists for logged-in user
  const fetchPrivateLists = async (userEmail: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/lists/user/${userEmail}`);
      const data = await res.json();
      setPrivateLists(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Error fetching private lists:', err);
      setPrivateLists([]);
    }
  };

  // Create list with tools and refresh public lists
  const createListWithTools = async (listData) => {
    try {
      // Find tool names from the initial tool list
      const toolNames = listData.toolIds.map(id => {
        const tool = initialAiTools.find(t => t.id === id);
        return tool ? tool.name : '';
      }).filter(name => name); // Filter out any empty names

      const payload = {
        title: listData.title,
        userEmail: listData.creator,
        isPublic: listData.isPublic,
        toolNames: toolNames
      };

      await fetch(`${API_BASE_URL}/api/lists`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      await fetchPublicLists();
    } catch (err) {
      console.error('Error creating list:', err);
    }
  };

  // Delete list from backend
  const deleteList = async (listId: string, isPublic: boolean) => {
    try {
      await fetch(`${API_BASE_URL}/api/lists/${listId}`, {
        method: 'DELETE',
      });
      // Refresh lists after deletion
      await fetchPublicLists();
      if (user?.email) {
        await fetchPrivateLists(user.email);
      }
    } catch (err) {
      console.error('Error deleting list:', err);
    }
  };

  // Fetch lists on component mount and when user changes
  useEffect(() => {
    fetchPublicLists();
    if (user?.email) {
      fetchPrivateLists(user.email);
    }
  }, [user]);

  // Add new list from CreateListForm
  const handleAddList = async (list) => {
    try {
      await createListWithTools(list);
      setShowCreateListModal(false);
    } catch (err) {
      console.error('Error adding list:', err);
      // Fallback to local state if backend fails
      if (list.isPublic) {
        setPublicLists(prev => [list, ...prev]);
      } else {
        setPrivateLists(prev => [list, ...prev]);
      }
      setShowCreateListModal(false);
    }
  };

  // Handler for bubble click
  const handleBubbleSelect = (catId: string) => {
    setActiveCategory(catId);
    setShowMainContent(true);
  };

  // Blend submission state
  const [blendForm, setBlendForm] = useState({
    title: "",
    tools: "",
    tag: "",
    description: ""
  });
  const [contributedBlends, setContributedBlends] = useState([]);

  // Verified user logic
  const [showVerifyDialog, setShowVerifyDialog] = useState(false);
  // By default, admin is always verified
  const isVerified = user?.isAdmin || user?.isVerified;

  const handleBlendSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blendForm.title || !blendForm.tools || !blendForm.tag || !blendForm.description) {
      alert("All fields are required.");
      return;
    }
    setContributedBlends(prev => [
      {
        title: blendForm.title,
        tools: blendForm.tools,
        tag: blendForm.tag,
        description: blendForm.description
      },
      ...prev
    ]);
    setBlendForm({ title: "", tools: "", tag: "", description: "" });
  };

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    try {
      await addNewsletterSubscriber(newsletterEmail); // Assume this function exists and works
      setNewsletterSuccess(true);
      setNewsletterEmail("");
    } catch (err) {
      alert("Failed to subscribe. Please try again.");
    }
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const matches = aiTools.filter(tool => tool.name.toLowerCase().includes(search.trim().toLowerCase()));
      if (matches.length > 0) {
        setShowMainContent(true);
      }
    }
  };

  const handleListSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setListSearch(e.target.value);
  };

  const filteredPublicLists = useMemo(() => {
    if (!listSearch) return publicLists;
    const searchLower = listSearch.toLowerCase();
    return publicLists.filter(list => {
      if (listSearchType === 'name') {
        return list.title.toLowerCase().includes(searchLower);
      } else {
        return list.creator.toLowerCase().includes(searchLower);
      }
    });
  }, [publicLists, listSearch, listSearchType]);

  const handleEditList = (list: PublicList) => {
    setEditingList(list);
    setShowCreateListModal(true);
  };

  const handleUpdateList = (updatedList: PublicList) => {
    setPublicLists(prev => prev.map(list => 
      list.id === updatedList.id ? updatedList : list
    ));
    setEditingList(null);
    setShowCreateListModal(false);
  };

  const handleEditPrivateList = (list: PublicList) => {
    setEditingPrivateList(list);
    setShowCreateListModal(true);
  };

  const handleUpdatePrivateList = (updatedList: PublicList) => {
    setPrivateLists(prev => prev.map(list =>
      list.id === updatedList.id ? updatedList : list
    ));
    setEditingPrivateList(null);
    setShowCreateListModal(false);
  };

  useEffect(() => {
    // Show main content with all tools when navigating to home or when forceShowMain is set
    if (location.pathname === '/' && (location.state?.forceShowMain || location.state === undefined)) {
      setShowMainContent(true);
      setActiveCategory('all');
      if (location.state?.forceShowMain) {
        navigate('/', { replace: true, state: {} });
      }
    }
  }, [location.pathname, location.state, setActiveCategory, navigate]);

  // All bubbles same size and font size
  const BUBBLE_SIZE = 130;
  const BUBBLE_FONT_SIZE = '1.1rem';
  // Arrange categories into rows (same as before)
  const bubbleLayout = [4, 5, 4];
  const bubbleRows = [];
  let catIdx = 0;
  for (let row = 0; row < bubbleLayout.length; row++) {
    const count = bubbleLayout[row];
    const rowBubbles = [];
    for (let i = 0; i < count; i++) {
      if (!categories[catIdx]) break;
      rowBubbles.push({
        ...categories[catIdx],
        size: BUBBLE_SIZE,
        fontSize: BUBBLE_FONT_SIZE
      });
      catIdx++;
    }
    bubbleRows.push(rowBubbles);
  }

  // Define the events array once
  const aiEvents = [
    {
      title: "ICSCSP 2025",
      description: "International Conference on Soft Computing and Signal Processing",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      link: "https://www.icscsp.com/",
      date: "June 20-21, 2025",
      location: "Hyderabad, India"
    },
    {
      title: "AIST 2025",
      description: "International Conference on AI & Smart Transportation, IIMT, , India",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      link: "https://interscience.ac.in/AIST2025/",
      date: "June 28-29, 2025",
      location: "Bhubaneswar, India"
    },
    {
      title: "ICACECS 2025",
      description: "International Conference on Advances in Computer Engineering and Communication Systems 2025",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      link: "https://icacecs.org/",
      date: "August 06-08, 2025",
      location: "Assam, India"
    },
    {
      title: "ICEIMLCB 2025",
      description: "International Conference on Emerging Innovations in Machine Learning, Cybersecurity and Blockchain 2025",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      link: "https://ghrcemp.raisoni.net/icisml/",
      date: "July 23-24, 2025",
      location: "Pune, India"
    }
  ];

  const toggleExpand = (title: string) => {
    setExpandedEvents(prevState => ({
      ...prevState,
      [title]: !prevState[title]
    }));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header 
        searchValue={search} 
        onSearchChange={handleSearchChange} 
        onSearchKeyDown={handleSearchKeyDown}
        showMainContent={showMainContent}
        setShowMainContent={setShowMainContent}
      />
      <div className="flex-1 flex flex-col">
        <AnimatePresence>
          {!showMainContent && (
            <>
              <motion.div
                key="bubble-landing"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center min-h-[60vh]"
              >
                <h1 className="text-3xl font-bold mb-6 text-center">What are you interested in exploring today?</h1>
                <div className="flex flex-col items-center gap-6 w-full px-2 sm:px-4">
                  {bubbleRows.map((row, rowIdx) => (
                    <div key={rowIdx} className="flex flex-row flex-wrap justify-center gap-4 sm:gap-8 w-full">
                      {row.map((cat, i) => (
                        <motion.button
                          key={cat.id}
                          className="rounded-full shadow-lg flex items-center justify-center text-xl font-semibold text-white focus:outline-none"
                          style={{
                            width: `${cat.size}px`,
                            height: `${cat.size}px`,
                            minWidth: 90,
                            minHeight: 90,
                            maxWidth: 180,
                            maxHeight: 180,
                            background: "linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%)",
                            whiteSpace: 'normal',
                            textAlign: 'center',
                            padding: '0 10px',
                            lineHeight: 1.2,
                            fontSize: cat.fontSize
                          }}
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.97 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          onClick={() => handleBubbleSelect(cat.id)}
                        >
                          {cat.name}
                        </motion.button>
                      ))}
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-gray-500 text-center max-w-xl">Select a category bubble to see the best AI tools for that area. This helps you focus and not get overwhelmed by all the options!</p>
              </motion.div>
              <FeaturedCarousel />
            </>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showMainContent && (
            <motion.div
              key="main-content"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <main className="container p-4 overflow-x-hidden">
                  {/* Sort by Dropdown and Change Category Button */}
          <div className="flex items-center gap-4 mb-4">
            <label className="text-base font-medium">Sort by:</label>
            <select
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value as any)}
              className="border rounded px-3 py-2"
            >
              <option value="popular">Most Votes</option>
              <option value="latest">Latest</option>
              <option value="rating">Highest Rated</option>
            </select>
            <button
                      className="ml-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold hover:bg-blue-200 transition"
                      onClick={() => setShowMainContent(false)}
                    >
                      ← Change Category
              </button>
          </div>
                  {/* Category Chips Section (single row, below Sort by) - REMOVED */}
          {/* Featured AI Tools Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Featured AI Tools</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {featuredTools
                .filter(tool => activeCategory === 'all' || tool.category === activeCategory)
                .map(tool => (
                  <div key={tool.id} className="w-[260px] flex-shrink-0">
                    <ItemCard item={tool} />
                  </div>
                ))}
            </div>
          </section>
          {/* Main 3-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4" style={{ minHeight: '70vh' }}>
            {/* Left Column - Comparator */}
            <div className="col-span-1 md:col-span-3 min-w-0">
              <Card className="h-full flex flex-col overflow-y-auto max-h-[calc(100vh-12rem)]">
                <CardHeader>
                  <CardTitle>Compare AI Tools</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4">
                  <div className="mb-2">
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select
                      value={activeCategory}
                      onChange={e => {
                        setActiveCategory(e.target.value);
                        setTool1("");
                        setTool2("");
                      }}
                      className="border rounded px-2 py-1 w-full"
                    >
                      <option value="">Select Category</option>
                      {uniqueCategories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium mb-1">Tool 1</label>
                    <div
                      onDragOver={e => e.preventDefault()}
                      onDrop={() => {
                        if (draggedToolId) setTool1(draggedToolId);
                        setDraggedToolId(null);
                      }}
                    >
                      <select
                        value={tool1}
                        onChange={e => setTool1(e.target.value)}
                        className="border rounded px-2 py-1 w-full"
                        disabled={!activeCategory}
                      >
                        <option value="">Select Tool 1</option>
                        {toolsInCategory.map(tool => (
                          <option key={tool.id} value={tool.id}>{tool.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium mb-1">Tool 2</label>
                    <div
                      onDragOver={e => e.preventDefault()}
                      onDrop={() => {
                        if (draggedToolId) setTool2(draggedToolId);
                        setDraggedToolId(null);
                      }}
                    >
                      <select
                        value={tool2}
                        onChange={e => setTool2(e.target.value)}
                        className="border rounded px-2 py-1 w-full"
                        disabled={!activeCategory}
                      >
                        <option value="">Select Tool 2</option>
                        {toolsInCategory.map(tool => (
                          <option key={tool.id} value={tool.id}>{tool.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {/* Clear/Reset button */}
                  {(activeCategory !== 'all' || tool1 || tool2) && (
                    <button
                      className="border rounded px-2 py-1 w-full mb-2 bg-gray-100 hover:bg-gray-200 transition"
                      onClick={() => {
                        setActiveCategory('all');
                        setTool1("");
                        setTool2("");
                      }}
                      type="button"
                    >
                      Clear Selection
                    </button>
                  )}
                  {/* Filters (rating, review count, etc.) */}
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs">Filters:</span>
                    <span className="text-xs">Rating</span>
                    <span className="text-xs">Reviews</span>
                    {/* Add more filters as needed */}
                  </div>
                  {/* Side-by-side comparison */}
                  {toolObj1 && toolObj2 && (
                    <div className="mt-2 border-t pt-2">
                      <div className="font-semibold mb-2">Comparison</div>
                      <table className="w-full text-xs">
                        <thead>
                          <tr>
                            <th className="text-left">Feature</th>
                            <th className="text-center">{toolObj1.name}</th>
                            <th className="text-center">{toolObj2.name}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="font-medium">Category</td>
                            <td className="text-center">{toolObj1.category}</td>
                            <td className="text-center">{toolObj2.category}</td>
                          </tr>
                          <tr>
                            <td className="font-medium">Rating</td>
                            <td className="text-center">{toolObj1.rating} ★</td>
                            <td className="text-center">{toolObj2.rating} ★</td>
                          </tr>
                          <tr>
                            <td className="font-medium">Reviews</td>
                            <td className="text-center">{toolObj1.reviewCount}</td>
                            <td className="text-center">{toolObj2.reviewCount}</td>
                          </tr>
                          <tr>
                            <td className="font-medium">Description</td>
                            <td className="text-center">{toolObj1.description}</td>
                            <td className="text-center">{toolObj2.description}</td>
                          </tr>
                          <tr>
                            <td className="font-medium">URL</td>
                            <td className="text-center"><a href={toolObj1.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Visit</a></td>
                            <td className="text-center"><a href={toolObj2.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Visit</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            {/* Middle Column - AI Tools Grid with Search/Filter */}
            <div className="col-span-1 md:col-span-6 min-w-0">
              <Card className="h-full flex flex-col overflow-y-auto max-h-[calc(100vh-12rem)]">
                <CardHeader>
                  <CardTitle>AI Tools</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ScrollArea className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {paginatedTools.map((tool) => (
                        <div
                          key={tool.id}
                          className=""
                          draggable
                          onDragStart={() => setDraggedToolId(tool.id)}
                          onDragEnd={() => setDraggedToolId(null)}
                        >
                          <ItemCard
                            item={{
                              ...tool,
                              title: tool.name,
                              votes: 0,
                              reviewsCount: tool.reviewCount,
                              createdAt: '2024-01-01T00:00:00.000Z',
                              imageUrl: tool.imageUrl || '',
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                  <div className="text-xs text-muted-foreground mt-2">
                    Showing {paginatedTools.length > 50 ? 50 : paginatedTools.length} of {filteredTools.length} tools
                  </div>
                  {totalPages > 1 && (
                    <Pagination className="mt-6">
                      <PaginationContent>
                        {/* Previous Arrow */}
                        <PaginationItem>
                          <PaginationPrevious
                            onClick={e => { e.preventDefault(); if (currentPage > 1) setCurrentPage(currentPage - 1); }}
                            href="#"
                            className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                          />
                        </PaginationItem>

                        {/* First Page */}
                        {currentPage > 2 && (
                          <>
                            <PaginationItem>
                              <PaginationLink
                                isActive={currentPage === 1}
                                href="#"
                                onClick={e => { e.preventDefault(); setCurrentPage(1); }}
                              >
                                1
                              </PaginationLink>
                            </PaginationItem>
                            {currentPage > 3 && (
                              <PaginationItem>
                                <span className="px-2">...</span>
                              </PaginationItem>
                            )}
                          </>
                        )}

                        {/* Previous Page */}
                        {currentPage > 1 && (
                          <PaginationItem>
                            <PaginationLink
                              isActive={false}
                              href="#"
                              onClick={e => { e.preventDefault(); setCurrentPage(currentPage - 1); }}
                            >
                              {currentPage - 1}
                            </PaginationLink>
                          </PaginationItem>
                        )}

                        {/* Current Page */}
                        <PaginationItem>
                          <PaginationLink
                            isActive={true}
                            href="#"
                            onClick={e => e.preventDefault()}
                          >
                            {currentPage}
                          </PaginationLink>
                        </PaginationItem>

                        {/* Next Page */}
                        {currentPage < totalPages && (
                          <PaginationItem>
                            <PaginationLink
                              isActive={false}
                              href="#"
                              onClick={e => { e.preventDefault(); setCurrentPage(currentPage + 1); }}
                            >
                              {currentPage + 1}
                            </PaginationLink>
                          </PaginationItem>
                        )}

                        {/* Last Page */}
                        {currentPage < totalPages - 1 && (
                          <>
                            {currentPage < totalPages - 2 && (
                              <PaginationItem>
                                <span className="px-2">...</span>
                              </PaginationItem>
                            )}
                            <PaginationItem>
                              <PaginationLink
                                isActive={currentPage === totalPages}
                                href="#"
                                onClick={e => { e.preventDefault(); setCurrentPage(totalPages); }}
                              >
                                {totalPages}
                              </PaginationLink>
                            </PaginationItem>
                          </>
                        )}

                        {/* Next Arrow */}
                        <PaginationItem>
                          <PaginationNext
                            onClick={e => { e.preventDefault(); if (currentPage < totalPages) setCurrentPage(currentPage + 1); }}
                            href="#"
                            className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  )}
                </CardContent>
              </Card>
            </div>
            {/* Right Column - News Section */}
            <div className="col-span-1 md:col-span-3 min-w-0">
              <Card className="h-full overflow-y-auto max-h-[calc(100vh-12rem)]">
                <CardHeader>
                  <CardTitle>Headlines</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[calc(100vh-12rem)]">
                    <div className="space-y-4">
                      {newsData.map((news) => (
                        <NewsCard key={news.url} news={news} />
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Lists Side-by-Side */}
          <div className={`flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mt-12 mb-8 w-full px-4 ${user ? 'justify-center' : 'justify-center'}`}>
            {/* Private Lists Card - left of Public Lists */}
            {user && (
              <section className="w-full md:w-1/2 bg-white rounded-2xl shadow-xl border p-4 md:p-8 flex flex-col justify-between">
                <Card className="h-full flex flex-col bg-transparent shadow-none border-none">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary">Private Lists</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="flex-1 overflow-y-auto max-h-[400px] space-y-4 pr-1 bg-gray-50 rounded-xl p-3">
                      {Array.isArray(privateLists) && privateLists.length === 0 && (
                          <div className="text-lg text-muted-foreground mb-2">No private lists yet.</div>
                      )}
                      {Array.isArray(privateLists) && privateLists.map(list => (
                          <div key={list.id} className="border rounded-xl p-3 cursor-pointer hover:bg-blue-50 transition">
                            <div className="font-bold text-lg mb-1">{list.title}</div>
                            <div className="text-xs text-muted-foreground mb-2">by {list.userEmail}</div>
                            <div className="flex flex-wrap gap-2 mt-1">
                               {/* Private lists do not have detailed tools, so we can't display them here yet */}
                            </div>
                            <div className="flex gap-2 mt-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEditPrivateList(list);
                                }}
                                className="text-blue-600 hover:text-blue-800 text-sm"
                              >
                                Edit
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (window.confirm('Are you sure you want to delete this list?')) {
                                    deleteList(list.id, false);
                                  }
                                }}
                                className="text-red-600 hover:text-red-800 text-sm"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            )}
            {/* Public Lists Card - right of Private Lists */}
            <section className={`w-full ${user ? 'md:w-1/2' : 'md:w-full'} bg-white rounded-2xl shadow-xl border p-1 md:p-2 flex flex-col justify-between`}>
              <Card className="h-full flex flex-col bg-transparent shadow-none border-none">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Public Lists</CardTitle>
                  <div className="flex flex-col gap-2 mt-2">
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        placeholder={`Search by ${listSearchType === 'name' ? 'list name' : 'user'}`}
                        value={listSearch}
                        onChange={handleListSearch}
                        className="flex-1"
                      />
                      <select
                        value={listSearchType}
                        onChange={(e) => setListSearchType(e.target.value as 'name' | 'user')}
                        className="border rounded-md px-2 py-1"
                      >
                        <option value="name">By Name</option>
                        <option value="user">By User</option>
                      </select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col p-2">
                  <div className="flex-1 overflow-y-auto max-h-[400px] space-y-4 pr-1 bg-gray-50 rounded-xl p-3">
                    {filteredPublicLists.length === 0 && (<div className="text-lg text-muted-foreground mb-2">No public lists found.</div>)}
                    {filteredPublicLists.map(list => (
                      <div key={list.id} className="border rounded-xl p-3 cursor-pointer hover:bg-blue-50 transition" onClick={() => setListDialog({ open: true, list })}>
                        <div className="font-bold text-lg mb-1">{list.title}</div>
                        <div className="text-xs text-muted-foreground mb-2">by {list.creator}</div>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {list.tools && list.tools.slice(0, 3).map(tool => (
                             <span key={tool.id} className="bg-blue-100 text-blue-800 rounded px-3 py-1 text-sm font-semibold">{tool.name}</span>
                          ))}
                          {list.tools && list.tools.length > 3 && (<span className="text-sm text-muted-foreground">+{list.tools.length - 3} more</span>)}
                        </div>
                        {user && list.creator === user.email && (
                          <div className="flex gap-2 mt-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEditList(list);
                              }}
                              className="text-blue-600 hover:text-blue-800 text-sm"
                            >
                              Edit
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                if (window.confirm('Are you sure you want to delete this list?')) {
                                  deleteList(list.id, true);
                                }
                              }}
                              className="text-red-600 hover:text-red-800 text-sm"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  {user && isVerified ? (
                    <button
                      className={`mt-6 w-full rounded-xl px-6 py-4 font-bold text-xl flex items-center justify-center gap-2 transition shadow-lg bg-blue-600 text-white hover:bg-blue-700`}
                      onClick={() => setShowCreateListModal(true)}
                    >
                      <span className="text-2xl">➕</span> Create List
                    </button>
                  ) : user ? (
                    <>
                      <button
                        className={`mt-6 w-full rounded-xl px-6 py-4 font-bold text-xl flex items-center justify-center gap-2 transition shadow-lg bg-blue-200 text-blue-800 cursor-pointer`}
                        onClick={() => setShowVerifyDialog(true)}
                      >
                        <span className="text-2xl">🔒</span> Become Verified to Create List
                      </button>
                      <Modal open={showVerifyDialog} onClose={() => setShowVerifyDialog(false)}>
                        <div className="p-6 max-w-md mx-auto">
                          <h2 className="text-2xl font-bold mb-4 text-center">Get Verified (Coming Soon)</h2>
                          <ul className="mb-4 text-gray-700">
                            <li className="mb-2">✔️ Create AI Tool Blends</li>
                            <li className="mb-2">✔️ Create Public Lists</li>
                            <li className="mb-2">✔️ Early access to new features</li>
                          </ul>
                          <div className="flex flex-col gap-3">
                            <button className="bg-blue-200 text-blue-800 px-4 py-2 rounded cursor-not-allowed" disabled>Monthly Plan (Coming Soon)</button>
                            <button className="bg-blue-200 text-blue-800 px-4 py-2 rounded cursor-not-allowed" disabled>Yearly Plan (Coming Soon)</button>
                            <button className="bg-blue-200 text-blue-800 px-4 py-2 rounded cursor-not-allowed" disabled>One-time Plan (Coming Soon)</button>
                          </div>
                        </div>
                      </Modal>
                    </>
                  ) : (
                    <>
                      <button
                        className={`mt-6 w-full rounded-xl px-6 py-4 font-bold text-xl flex items-center justify-center gap-2 transition shadow-lg bg-blue-500 text-white hover:bg-blue-600`}
                        onClick={() => {
                          setShowLoginToCreateListMsg(true);
                          setTimeout(() => setShowLoginToCreateListMsg(false), 2000);
                        }}
                      >
                        <span className="text-2xl">➕</span> Create List
                      </button>
                      {showLoginToCreateListMsg && (
                        <div className="text-sm text-red-600 text-center mt-2">Please log in and become verified to create a list.</div>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
                {/* AI Tool Blends Section (replaces YoutubeCarousel) */}
                <section className="max-w-5xl mx-auto mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-center">Blends: Combine Tools for Powerful Workflows</h2>
                  {/* Horizontally scrollable blends carousel */}
                  <div className="overflow-x-auto pb-2">
                    <div className="flex flex-col md:flex-row gap-8 w-full md:min-w-[700px]">
                      {/* Example Blend 1 */}
                      <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-2xl shadow-lg p-4 md:p-6 flex flex-col gap-3 w-full md:min-w-[350px] md:max-w-[400px]">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-lg font-bold text-blue-700">Video Editing Workflow</span>
                          <span className="ml-auto text-xs bg-blue-200 text-blue-800 px-3 py-1 rounded-full">Content Creation</span>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                          <span className="bg-white rounded-full px-3 py-1 font-semibold text-gray-700 shadow">Synthesia</span>
                          <span className="text-xl font-bold text-gray-400">+</span>
                          <span className="bg-white rounded-full px-3 py-1 font-semibold text-gray-700 shadow">Descript</span>
                          <span className="text-xl font-bold text-gray-400">+</span>
                          <span className="bg-white rounded-full px-3 py-1 font-semibold text-gray-700 shadow">Runway</span>
                        </div>
                        <p className="text-gray-700 text-sm">Generate a script with Synthesia, edit and enhance audio/video with Descript, then add AI-powered effects or remove backgrounds using Runway. Perfect for YouTube, marketing, or training videos.</p>
                      </div>
                      {/* Example Blend 2 */}
                      <div className="bg-gradient-to-br from-pink-50 to-yellow-100 rounded-2xl shadow-lg p-4 md:p-6 flex flex-col gap-3 w-full md:min-w-[350px] md:max-w-[400px]">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-lg font-bold text-pink-700">AI-Powered Blog Creation</span>
                          <span className="ml-auto text-xs bg-pink-200 text-pink-800 px-3 py-1 rounded-full">Writing</span>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                          <span className="bg-white rounded-full px-3 py-1 font-semibold text-gray-700 shadow">ChatGPT</span>
                          <span className="text-xl font-bold text-gray-400">+</span>
                          <span className="bg-white rounded-full px-3 py-1 font-semibold text-gray-700 shadow">Grammarly</span>
                          <span className="text-xl font-bold text-gray-400">+</span>
                          <span className="bg-white rounded-full px-3 py-1 font-semibold text-gray-700 shadow">Canva</span>
                        </div>
                        <p className="text-gray-700 text-sm">Draft your article with ChatGPT, polish grammar and style with Grammarly, and design eye-catching blog images or infographics with Canva. Streamline your content pipeline!</p>
                      </div>
                      {/* Example Blend 3 */}
                      <div className="bg-gradient-to-br from-green-50 to-teal-100 rounded-2xl shadow-lg p-4 md:p-6 flex flex-col gap-3 w-full md:min-w-[350px] md:max-w-[400px]">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-lg font-bold text-green-700">Social Media Automation</span>
                          <span className="ml-auto text-xs bg-green-200 text-green-800 px-3 py-1 rounded-full">Productivity</span>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                          <span className="bg-white rounded-full px-3 py-1 font-semibold text-gray-700 shadow">Buffer</span>
                          <span className="text-xl font-bold text-gray-400">+</span>
                          <span className="bg-white rounded-full px-3 py-1 font-semibold text-gray-700 shadow">Midjourney</span>
                          <span className="text-xl font-bold text-gray-400">+</span>
                          <span className="bg-white rounded-full px-3 py-1 font-semibold text-gray-700 shadow">Copy.ai</span>
                        </div>
                        <p className="text-gray-700 text-sm">Create stunning visuals with Midjourney, generate engaging captions with Copy.ai, and schedule posts across platforms using Buffer. Boost your social presence with less effort!</p>
                      </div>
                      {/* Example Blend 4 */}
                      <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl shadow-lg p-4 md:p-6 flex flex-col gap-3 w-full md:min-w-[350px] md:max-w-[400px]">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-lg font-bold text-yellow-700">AI Research Assistant</span>
                          <span className="ml-auto text-xs bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">Research</span>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                          <span className="bg-white rounded-full px-3 py-1 font-semibold text-gray-700 shadow">Elicit</span>
                          <span className="text-xl font-bold text-gray-400">+</span>
                          <span className="bg-white rounded-full px-3 py-1 font-semibold text-gray-700 shadow">Notion AI</span>
                          <span className="text-xl font-bold text-gray-400">+</span>
                          <span className="bg-white rounded-full px-3 py-1 font-semibold text-gray-700 shadow">ChatPDF</span>
                        </div>
                        <p className="text-gray-700 text-sm">Use Elicit to find and summarize papers, organize notes and insights in Notion AI, and quickly extract info from PDFs with ChatPDF. Supercharge your research workflow!</p>
                      </div>
                    </div>
                  </div>
                  {/* Contribute Blend Section for Verified Users (admin or verified) */}
                  {user && (
                    isVerified ? (
                      <div className="mt-10 bg-white rounded-2xl shadow-lg p-6 max-w-xl mx-auto">
                        <h3 className="text-xl font-bold mb-4 text-center text-blue-700">Contribute Your Blend</h3>
                        <form className="flex flex-col gap-3" onSubmit={handleBlendSubmit}>
                          <input
                            type="text"
                            className="border rounded px-3 py-2"
                            placeholder="Blend Title (e.g. Podcast Production)"
                            value={blendForm.title}
                            onChange={e => setBlendForm({ ...blendForm, title: e.target.value })}
                            required
                          />
                          <input
                            type="text"
                            className="border rounded px-3 py-2"
                            placeholder="Tools (comma separated, e.g. Riverside, Descript, Canva)"
                            value={blendForm.tools}
                            onChange={e => setBlendForm({ ...blendForm, tools: e.target.value })}
                            required
                          />
                          <input
                            type="text"
                            className="border rounded px-3 py-2"
                            placeholder="Use Case Tag (e.g. Audio, Content Creation)"
                            value={blendForm.tag}
                            onChange={e => setBlendForm({ ...blendForm, tag: e.target.value })}
                            required
                          />
                          <textarea
                            className="border rounded px-3 py-2"
                            placeholder="Short Description"
                            value={blendForm.description}
                            onChange={e => setBlendForm({ ...blendForm, description: e.target.value })}
                            required
                          />
                          <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition mt-2"
                          >
                            Submit Blend
                          </button>
                        </form>
                        {/* List of contributed blends */}
                        {contributedBlends.length > 0 && (
                          <div className="mt-6">
                            <h4 className="font-semibold mb-2 text-blue-700">Your Contributed Blends</h4>
                            <div className="flex flex-col gap-4">
                              {contributedBlends.map((blend, idx) => (
                                <div key={idx} className="bg-blue-50 rounded-xl p-3 shadow flex flex-col gap-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-blue-800">{blend.title}</span>
                                    <span className="ml-auto text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full">{blend.tag}</span>
                                  </div>
                                  <div className="flex gap-2 flex-wrap mb-1">
                                    {blend.tools.split(',').map((tool, i) => (
                                      <span key={i} className="bg-white rounded-full px-2 py-0.5 font-semibold text-gray-700 shadow text-xs">{tool.trim()}</span>
                                    ))}
                                  </div>
                                  <div className="text-xs text-gray-700">{blend.description}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="mt-10 bg-white rounded-2xl shadow-lg p-8 max-w-xl mx-auto flex flex-col items-center">
                        <h3 className="text-xl font-bold mb-4 text-center text-blue-700">Want to contribute your own blend?</h3>
                        <button
                          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition mb-4"
                          onClick={() => setShowVerifyDialog(true)}
                        >
                          Become Verified
                        </button>
                        <Modal open={showVerifyDialog} onClose={() => setShowVerifyDialog(false)}>
                          <div className="p-6 max-w-md mx-auto">
                            <h2 className="text-2xl font-bold mb-4 text-center">Get Verified (Coming Soon)</h2>
                            <ul className="mb-4 text-gray-700">
                              <li className="mb-2">✔️ Create AI Tool Blends</li>
                              <li className="mb-2">✔️ Create Public Lists</li>
                              <li className="mb-2">✔️ Early access to new features</li>
                            </ul>
                            <div className="flex flex-col gap-3">
                              <button className="bg-blue-200 text-blue-800 px-4 py-2 rounded cursor-not-allowed" disabled>Monthly Plan (Coming Soon)</button>
                              <button className="bg-blue-200 text-blue-800 px-4 py-2 rounded cursor-not-allowed" disabled>Yearly Plan (Coming Soon)</button>
                              <button className="bg-blue-200 text-blue-800 px-4 py-2 rounded cursor-not-allowed" disabled>One-time Plan (Coming Soon)</button>
                            </div>
                          </div>
                        </Modal>
                      </div>
                    )
                  )}
                </section>
        <section className="max-w-6xl mx-auto mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold mb-4 text-center">Mark Your Calendar</h2>
            <div className="relative w-full">
              {/* Responsive: vertical on mobile, horizontal on desktop */}
              <div className="flex flex-col sm:hidden gap-4 max-h-[400px] overflow-y-auto px-2">
                {aiEvents.map((event, idx) => (
                  <div key={idx} className="w-full max-w-sm mx-auto">
                    <div className="bg-white rounded-xl shadow-lg border flex flex-col items-center p-4 h-full">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="rounded-lg mb-3 w-full h-32 object-cover bg-gray-50"
                      />
                      <div className="font-bold text-lg mb-1 text-center">{event.title}</div>
                      <div
                        className={`text-sm text-muted-foreground mb-4 text-center ${expandedEvents[event.title] ? '' : 'line-clamp-2'}`}
                        onClick={() => toggleExpand(event.title)}
                      >
                        {event.description}
                      </div>
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">Visit</button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <Carousel opts={{ align: "start", loop: true }} className="w-full hidden sm:block">
                <CarouselPrevious />
                <CarouselContent>
                  {aiEvents.map((event, idx, arr) => (
                    <CarouselItem key={idx} className={`px-2 w-[320px] max-w-[320px] flex-shrink-0${idx === arr.length - 1 ? ' pl-2' : ''}`}>
                      <div className="bg-white rounded-xl shadow-lg border flex flex-col items-center p-4 h-full">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="rounded-lg mb-3 w-full h-32 object-cover bg-gray-50"
                        />
                        <div className="font-bold text-lg mb-1 text-center">{event.title}</div>
                        <div
                          className={`text-sm text-muted-foreground mb-4 text-center ${expandedEvents[event.title] ? '' : 'line-clamp-2'}`}
                          onClick={() => toggleExpand(event.title)}
                        >
                          {event.description}
                        </div>
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">Visit</button>
                        </a>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNext />
              </Carousel>
            </div>
          </div>
          {/* Newsletter Box (no map, not overlapping) */}
          <div className="w-full md:w-[340px] md:min-w-[260px] md:max-w-[360px] flex flex-col items-center justify-center mt-8 md:mt-12 md:ml-4 px-4 md:px-0">
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 flex flex-col items-center w-full">
              <div className="font-bold text-lg mb-2 text-center">Join our newsletter to get latest knowledge of AI events happening around you</div>
              <form className="flex flex-col gap-2 w-full items-center" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 md:px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition text-sm md:text-base"
                >
                  Subscribe
                </button>
                {newsletterSuccess && <div className="text-green-600 text-sm mt-2">Subscribed successfully!</div>}
              </form>
            </div>
          </div>
        </section>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
        <Footer />
        {/* List Dialog/Modal */}
        {listDialog.open && listDialog.list && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-black"
                onClick={() => setListDialog({ open: false, list: null })}
              >✕</button>
              <h3 className="text-lg font-semibold mb-2">{listDialog.list.title}</h3>
              <div className="text-xs text-muted-foreground mb-4">by {listDialog.list.creator}</div>
              <div className="space-y-2">
                {listDialog.list.tools && listDialog.list.tools.map(tool => {
                  const fullTool = aiTools.find(t => t.id === tool.id);
                  return fullTool ? (
                    <div key={tool.id} className="border rounded p-2 flex items-center gap-2">
                      {fullTool.imageUrl && <img src={fullTool.imageUrl} alt={fullTool.name} className="w-8 h-8 rounded" />}
                      <div>
                        <div className="font-medium">{fullTool.name}</div>
                        <div className="text-xs text-muted-foreground">{fullTool.description}</div>
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        )}
        <Modal open={showCreateListModal} onClose={() => {
          setShowCreateListModal(false);
          setEditingList(null);
          setEditingPrivateList(null);
        }}>
          <CreateListForm 
            onSubmit={editingList ? handleUpdateList : editingPrivateList ? handleUpdatePrivateList : handleAddList} 
            onCancel={() => {
              setShowCreateListModal(false);
              setEditingList(null);
              setEditingPrivateList(null);
            }}
            initialValues={editingList ? {
              id: editingList.id,
              title: editingList.title,
              selected: editingList.tools.map(t => t.id),
              isPublic: true
            } : editingPrivateList ? {
              id: editingPrivateList.id,
              title: editingPrivateList.title,
              selected: (editingPrivateList as any).toolIds || [],
              isPublic: false
            } : undefined}
          />
        </Modal>
    </div>
  );
}

export default Index;
