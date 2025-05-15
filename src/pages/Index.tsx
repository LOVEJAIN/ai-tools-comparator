import { useState, useMemo, useEffect } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { aiTools as initialAiTools, AITool } from "../data/aiTools";
import { aiNews } from "../data/aiNews";
import Footer from "@/components/Footer";
import { useData } from "@/contexts/DataContext";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Admin from "./Admin";
import Header from "@/components/Header";
import ItemCard from "@/components/ItemCard";
import CategoryFilter from "@/components/CategoryFilter";
import Modal from "../components/Modal";
import CreateListForm from "../components/CreateListForm";

type PublicList = {
  id: string;
  title: string;
  creator: string;
  toolIds: string[];
};

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
  const { user, categories, activeCategory, setActiveCategory } = useData();
  const [tool1, setTool1] = useState<string>("");
  const [tool2, setTool2] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [toolClicks, setToolClicks] = useState<{ [id: string]: number }>({});
  const [reviews, setReviews] = useState<{ [toolId: string]: { user: string; rating: number; text: string }[] }>({});
  const navigate = useNavigate();
  const [publicLists, setPublicLists] = useState<PublicList[]>([
    {
      id: '1',
      title: '20 AI Tools for ML Projects',
      creator: 'demo@user.com',
      toolIds: ['1', '2', '3', '4', '5']
    },
    {
      id: '2',
      title: 'Best Free AI Tools',
      creator: 'freebie@user.com',
      toolIds: ['6', '7', '8']
    },
    {
      id: '3',
      title: 'AI for Content Creation',
      creator: 'content@user.com',
      toolIds: ['13', '14', '15']
    },
    {
      id: '4',
      title: 'AI for Developers',
      creator: 'dev@user.com',
      toolIds: ['6', '1', '9']
    },
    {
      id: '5',
      title: 'AI for Productivity',
      creator: 'productivity@user.com',
      toolIds: ['7', '5', '10']
    }
  ]);
  const [listDialog, setListDialog] = useState<{ open: boolean; list: PublicList | null }>({ open: false, list: null });
  const location = useLocation();
  const [showCreateListModal, setShowCreateListModal] = useState(false);
  const [privateLists, setPrivateLists] = useState<PublicList[]>([]);

  // Unique categories for filter dropdown
  const uniqueCategories = categories;

  // Tools in selected category
  const toolsInCategory = useMemo(() => activeCategory === 'all' ? aiTools : aiTools.filter(t => t.category === activeCategory), [aiTools, activeCategory]);

  // Filtered tools for grid
  const filteredTools = useMemo(() => {
    return aiTools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'all' ? true : tool.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory, aiTools]);

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

  // Add new list from navigation state if present
  useEffect(() => {
    if (location.state && location.state.newList) {
      setPublicLists(prev => [location.state.newList, ...prev]);
      // Clear the state so it doesn't add again on refresh
      navigate("/", { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  // Add new list from CreateListForm
  const handleAddList = (list) => {
    if (list.isPublic) {
      setPublicLists(prev => [list, ...prev]);
    } else {
      setPrivateLists(prev => [list, ...prev]);
    }
    setShowCreateListModal(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header searchValue={search} onSearchChange={setSearch} />
      <main className="container p-4 overflow-x-hidden">
        <CategoryFilter />
        {/* Featured AI Tools Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Featured AI Tools</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {featuredTools.map(tool => (
              <div key={tool.id} className="w-[260px] flex-shrink-0">
                <ItemCard item={tool} />
              </div>
            ))}
          </div>
        </section>
        {/* Main 3-column layout */}
        <div className="grid grid-cols-12 gap-4" style={{ minHeight: '70vh' }}>
          {/* Left Column - Comparator */}
          <div className="col-span-3 min-w-0">
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
                <div className="mb-2">
                  <label className="block text-sm font-medium mb-1">Tool 2</label>
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
          <div className="col-span-6 min-w-0">
            <Card className="h-full flex flex-col overflow-y-auto max-h-[calc(100vh-12rem)]">
              <CardHeader>
                <CardTitle>AI Tools</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ScrollArea className="flex-1">
                  <div className="grid grid-cols-2 gap-4">
                    {filteredTools.slice(0, 50).map((tool) => (
                      <div key={tool.id} className="w-[260px] flex-shrink-0">
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
                <div className="text-xs text-muted-foreground mt-2">Showing {filteredTools.length > 50 ? 50 : filteredTools.length} of {filteredTools.length} tools</div>
              </CardContent>
            </Card>
          </div>
          {/* Right Column - News Section */}
          <div className="col-span-3 min-w-0">
            {/* News Card (existing) */}
            <Card className="h-full overflow-y-auto max-h-[calc(100vh-12rem)]">
              <CardHeader>
                <CardTitle>AI News & Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[calc(100vh-12rem)]">
                  <div className="space-y-4">
                    {aiNews.map((news) => (
                      <Card key={news.id}>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2">{news.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{news.content}</p>
                          <div className="space-y-2">
                            {news.links.map((link, index) => (
                              <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-sm text-blue-600 hover:underline"
                              >
                                {link.text}
                              </a>
                            ))}
                          </div>
                          <div className="mt-2 text-xs text-muted-foreground">
                            <span>{news.author}</span> • <span>{news.date}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Lists Side-by-Side */}
        <div className="flex flex-row gap-8 max-w-5xl mx-auto mt-12 mb-8 ml-[60]">
          {/* Private Lists Card - left of Public Lists */}
          {user && (
            <section className="w-[400px] min-w-[320px] max-w-[400px] bg-white rounded-2xl shadow-xl border p-8 flex flex-col justify-between">
              <Card className="h-full flex flex-col bg-transparent shadow-none border-none">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Private Lists</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex-1 overflow-y-auto max-h-[400px] space-y-4 pr-1 bg-gray-50 rounded-xl p-3">
                    {privateLists.filter(list => list.creator === user.email).length === 0 && (
                      <div className="text-lg text-muted-foreground mb-2">No private lists yet.</div>
                    )}
                    {privateLists.filter(list => list.creator === user.email).map(list => (
                      <div key={list.id} className="border rounded-xl p-3 cursor-pointer hover:bg-blue-50 transition">
                        <div className="font-bold text-lg mb-1">{list.title}</div>
                        <div className="text-xs text-muted-foreground mb-2">by {list.creator}</div>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {list.toolIds.slice(0, 3).map(tid => {
                            const tool = aiTools.find(t => t.id === tid);
                            return tool ? (<span key={tid} className="bg-blue-100 text-blue-800 rounded px-3 py-1 text-sm font-semibold">{tool.name}</span>) : null;
                          })}
                          {list.toolIds.length > 3 && (<span className="text-sm text-muted-foreground">+{list.toolIds.length - 3} more</span>)}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          )}
          {/* Public Lists Card - right of Private Lists */}
          <section className="w-[400px] min-w-[320px] max-w-[400px] bg-white rounded-2xl shadow-xl border p-8 flex flex-col justify-between">
            <Card className="h-full flex flex-col bg-transparent shadow-none border-none">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Public Lists</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto max-h-[400px] space-y-4 pr-1 bg-gray-50 rounded-xl p-3">
                  {publicLists.length === 0 && (<div className="text-lg text-muted-foreground mb-2">No public lists yet.</div>)}
                  {publicLists.map(list => (
                    <div key={list.id} className="border rounded-xl p-3 cursor-pointer hover:bg-blue-50 transition" onClick={() => setListDialog({ open: true, list })}>
                      <div className="font-bold text-lg mb-1">{list.title}</div>
                      <div className="text-xs text-muted-foreground mb-2">by {list.creator}</div>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {list.toolIds.slice(0, 3).map(tid => {
                          const tool = aiTools.find(t => t.id === tid);
                          return tool ? (<span key={tid} className="bg-blue-100 text-blue-800 rounded px-3 py-1 text-sm font-semibold">{tool.name}</span>) : null;
                        })}
                        {list.toolIds.length > 3 && (<span className="text-sm text-muted-foreground">+{list.toolIds.length - 3} more</span>)}
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className={`mt-6 w-full rounded-xl px-6 py-4 font-bold text-xl flex items-center justify-center gap-2 transition shadow-lg ${user ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'}`}
                  onClick={() => { if (user) setShowCreateListModal(true); }}
                  disabled={!user}
                  title={user ? '' : 'You must be logged in to create a list'}
                >
                  <span className="text-2xl">➕</span> Create List
                </button>
              </CardContent>
            </Card>
          </section>
        </div>
        {/* Submit Tool Section - centered below lists */}
        <div className="flex justify-center mt-4 mb-12">
          <section className="w-[400px] min-w-[320px] max-w-[400px] bg-white rounded-2xl shadow-xl border p-8 flex flex-col justify-between">
            <h2 className="text-2xl font-bold mb-6 text-primary">Submit Your AI Tool</h2>
            {showSuccess && <div className="mb-4 text-green-600 font-medium">Tool submitted successfully!</div>}
            {formError && <div className="mb-4 text-red-600 font-medium">{formError}</div>}
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
              <input type="text" name="name" placeholder="Tool Name*" value={form.name} onChange={handleFormChange} className="border rounded-lg px-4 py-3 text-lg" required />
              <textarea name="description" placeholder="Description*" value={form.description} onChange={handleFormChange} className="border rounded-lg px-4 py-3 text-lg" rows={2} required />
              <input type="url" name="url" placeholder="Website URL*" value={form.url} onChange={handleFormChange} className="border rounded-lg px-4 py-3 text-lg" required />
              <select name="category" value={form.category} onChange={handleFormChange} className="border rounded-lg px-4 py-3 text-lg" required>
                <option value="">Select Category*</option>
                {uniqueCategories.map(cat => (<option key={cat.id} value={cat.id}>{cat.name}</option>))}
              </select>
              <input type="url" name="imageUrl" placeholder="Image URL (optional)" value={form.imageUrl} onChange={handleFormChange} className="border rounded-lg px-4 py-3 text-lg" />
              <div className="flex items-center gap-3">
                <label htmlFor="captcha" className="text-lg">What is 3 + 4?</label>
                <input type="text" name="captcha" id="captcha" placeholder="Answer*" value={form.captcha} onChange={handleFormChange} className="border rounded-lg px-4 py-3 w-24 text-lg" required />
              </div>
              <button type="submit" className="bg-primary text-white rounded-lg px-6 py-3 font-bold text-lg hover:bg-primary/90 transition">Submit Tool</button>
            </form>
          </section>
        </div>
      </main>
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
              {listDialog.list.toolIds.map(tid => {
                const tool = aiTools.find(t => t.id === tid);
                return tool ? (
                  <div key={tid} className="border rounded p-2 flex items-center gap-2">
                    {tool.imageUrl && <img src={tool.imageUrl} alt={tool.name} className="w-8 h-8 rounded" />}
                    <div>
                      <div className="font-medium">{tool.name}</div>
                      <div className="text-xs text-muted-foreground">{tool.description}</div>
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        </div>
      )}
      <Modal open={showCreateListModal} onClose={() => setShowCreateListModal(false)}>
        <CreateListForm onSubmit={handleAddList} onCancel={() => setShowCreateListModal(false)} />
      </Modal>
    </div>
  );
}

export default Index;
