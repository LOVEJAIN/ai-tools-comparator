import { useState, useMemo } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { aiTools as initialAiTools, AITool } from "../data/aiTools";
import { aiNews } from "../data/aiNews";
import Footer from "@/components/Footer";
import { useData } from "@/contexts/DataContext";
import { Route, Routes, useNavigate } from "react-router-dom";
import Admin from "./Admin";
import Header from "@/components/Header";

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
  const [category, setCategory] = useState("");
  const [tool1, setTool1] = useState<string>("");
  const [tool2, setTool2] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState(false);
  const { user } = useData();
  const [toolClicks, setToolClicks] = useState<{ [id: string]: number }>({});
  const [reviews, setReviews] = useState<{ [toolId: string]: { user: string; rating: number; text: string }[] }>({});
  const navigate = useNavigate();

  // Unique categories for filter dropdown
  const categories = useMemo(() => Array.from(new Set(aiTools.map(t => t.category))), [aiTools]);

  // Tools in selected category
  const toolsInCategory = useMemo(() => aiTools.filter(t => t.category === category), [aiTools, category]);

  // Filtered tools for grid
  const filteredTools = useMemo(() => {
    return aiTools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category ? tool.category === category : true;
      return matchesSearch && matchesCategory;
    });
  }, [search, category, aiTools]);

  // Featured tools (top 6 by rating/reviewCount)
  const featuredTools = useMemo(() => {
    return [...aiTools]
      .sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount)
      .slice(0, 6);
  }, [aiTools]);

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
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container p-4 overflow-x-hidden">
        {/* Featured AI Tools Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Featured AI Tools</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {featuredTools.map(tool => (
              <Card key={tool.id} className="min-w-[260px] max-w-[260px] flex-shrink-0 shadow-md hover:shadow-lg transition-shadow border-primary border-2">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  {tool.imageUrl && (
                    <img src={tool.imageUrl} alt={tool.name} className="w-12 h-12 object-contain mb-2" />
                  )}
                  <h3 className="font-semibold text-base mb-1">{tool.name}</h3>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <span className="text-yellow-500">★</span>
                    <span className="font-medium text-sm">{tool.rating.toFixed(1)}</span>
                    <span className="text-xs text-muted-foreground">({tool.reviewCount} reviews)</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{tool.description}</p>
                  <span className="text-xs text-muted-foreground mb-2">{tool.category}</span>
                  <a href={tool.url} target="_blank" rel="noopener noreferrer" className="mt-2 px-3 py-1 rounded bg-primary text-white text-xs font-medium hover:bg-primary/90 transition">Visit</a>
                </CardContent>
              </Card>
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
                    value={category}
                    onChange={e => {
                      setCategory(e.target.value);
                      setTool1("");
                      setTool2("");
                    }}
                    className="border rounded px-2 py-1 w-full"
                  >
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium mb-1">Tool 1</label>
                  <select
                    value={tool1}
                    onChange={e => setTool1(e.target.value)}
                    className="border rounded px-2 py-1 w-full"
                    disabled={!category}
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
                    disabled={!category}
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
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    placeholder="Search tools..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="border rounded px-2 py-1 flex-1"
                  />
                  <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    <option value="">All Categories</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <ScrollArea className="flex-1">
                  <div className="grid grid-cols-2 gap-4">
                    {filteredTools.slice(0, 50).map((tool) => (
                      <Card key={tool.id} className="h-full hover:bg-accent transition-colors cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-4">
                            {tool.imageUrl && (
                              <img
                                src={tool.imageUrl}
                                alt={tool.name}
                                className="w-12 h-12 object-contain"
                              />
                            )}
                            <div>
                              <h3 className="font-semibold">{tool.name}</h3>
                              <div className="flex items-center gap-1 mb-1">
                                <span className="text-yellow-500">★</span>
                                <span className="font-medium text-sm">{tool.rating.toFixed(1)}</span>
                                <span className="text-xs text-muted-foreground">({tool.reviewCount} reviews)</span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {tool.description}
                              </p>
                              <span className="text-xs text-muted-foreground">
                                {tool.category}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
                <div className="text-xs text-muted-foreground mt-2">Showing {filteredTools.length > 50 ? 50 : filteredTools.length} of {filteredTools.length} tools</div>
              </CardContent>
            </Card>
          </div>
          {/* Right Column - News Section */}
          <div className="col-span-3 min-w-0">
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
        {/* Submit Tool Section */}
        <section className="max-w-xl mx-auto mt-12 mb-8 p-6 bg-white rounded-lg shadow-lg border">
          <h2 className="text-lg font-semibold mb-4">Submit Your AI Tool</h2>
          {showSuccess && <div className="mb-4 text-green-600 font-medium">Tool submitted successfully!</div>}
          {formError && <div className="mb-4 text-red-600 font-medium">{formError}</div>}
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Tool Name*"
              value={form.name}
              onChange={handleFormChange}
              className="border rounded px-3 py-2"
              required
            />
            <textarea
              name="description"
              placeholder="Description*"
              value={form.description}
              onChange={handleFormChange}
              className="border rounded px-3 py-2"
              rows={2}
              required
            />
            <input
              type="url"
              name="url"
              placeholder="Website URL*"
              value={form.url}
              onChange={handleFormChange}
              className="border rounded px-3 py-2"
              required
            />
            <select
              name="category"
              value={form.category}
              onChange={handleFormChange}
              className="border rounded px-3 py-2"
              required
            >
              <option value="">Select Category*</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <input
              type="url"
              name="imageUrl"
              placeholder="Image URL (optional)"
              value={form.imageUrl}
              onChange={handleFormChange}
              className="border rounded px-3 py-2"
            />
            <div className="flex items-center gap-2">
              <label htmlFor="captcha" className="text-sm">What is 3 + 4?</label>
              <input
                type="text"
                name="captcha"
                id="captcha"
                placeholder="Answer*"
                value={form.captcha}
                onChange={handleFormChange}
                className="border rounded px-3 py-2 w-24"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white rounded px-4 py-2 font-semibold hover:bg-primary/90 transition"
            >
              Submit Tool
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Index;
