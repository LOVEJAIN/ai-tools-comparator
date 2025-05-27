import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { aiTools } from "../data/aiTools";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ToolDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const tool = aiTools.find(t => t.id === id);

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const matches = aiTools.filter(tool => tool.name.toLowerCase().includes(search.trim().toLowerCase()));
      if (matches.length === 1) {
        navigate(`/tools/${matches[0].id}`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header searchValue={search} onSearchChange={handleSearchChange} onSearchKeyDown={handleSearchKeyDown} />
      <main className="container mx-auto p-6 flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-xl mb-8">
          <Input
            type="text"
            placeholder="Search for items..."
            value={search}
            onChange={e => handleSearchChange(e.target.value)}
            onKeyDown={handleSearchKeyDown}
            className="w-full rounded-lg border px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        {tool ? (
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl flex flex-col items-center">
            {tool.imageUrl && <img src={tool.imageUrl} alt={tool.name} className="w-32 h-32 object-contain mb-4" />}
            <h1 className="text-3xl font-bold mb-2">{tool.name}</h1>
            <p className="text-gray-600 mb-4 text-center">{tool.description}</p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-500 text-xl">★</span>
              <span className="font-semibold">{tool.rating}</span>
              <span className="text-gray-400">({tool.reviewCount} reviews)</span>
            </div>
            <a href={tool.url} target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition">Visit Tool</a>
          </div>
        ) : (
          <div className="text-center text-2xl text-gray-500">Tool not found.</div>
        )}
      </main>
      <Footer />
    </div>
  );
} 