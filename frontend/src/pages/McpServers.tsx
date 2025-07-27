import React, { useState, useMemo } from 'react';
import { mcpTools } from '../data/mcpTools';
import { useNavigate } from 'react-router-dom';
import { Home, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const TOOLS_PER_PAGE = 28;

const getUniqueCategories = (tools: any[]) => {
  const cats = tools.map(a => a.category);
  return ['All Categories', ...Array.from(new Set(cats))];
};

function getPagination(current: number, total: number) {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  const range = [];
  range.push(1);
  if (current > 3) range.push('...');
  for (let i = Math.max(2, current - 2); i <= Math.min(total - 1, current + 2); i++) {
    if (i !== 1 && i !== total) range.push(i);
  }
  if (current < total - 2) range.push('...');
  if (total > 1) range.push(total);
  return range;
}

const McpServers: React.FC = () => {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('All Categories');
  const navigate = useNavigate();

  const categories = useMemo(() => getUniqueCategories(mcpTools), []);

  const filteredTools = useMemo(() => {
    if (category === 'All Categories') return mcpTools;
    return mcpTools.filter(tool => tool.category === category);
  }, [category]);

  const totalPages = Math.ceil(filteredTools.length / TOOLS_PER_PAGE);
  const paginatedTools = filteredTools.slice((page - 1) * TOOLS_PER_PAGE, page * TOOLS_PER_PAGE);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const pagination = getPagination(page, totalPages);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            MCP Servers{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Directory</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover Model Context Protocol servers to enhance your AI applications with seamless integrations and powerful capabilities.
          </p>

          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-400">
              Showing {(page-1)*TOOLS_PER_PAGE+1}-{Math.min(page*TOOLS_PER_PAGE, filteredTools.length)} of {filteredTools.length} servers
            </p>
            <div className="flex items-center gap-3">
              <button 
                className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors bg-transparent border-none outline-none"
                onClick={() => navigate('/')}
              >
                <Home className="h-4 w-4" />
                Home
              </button>
              <select
                className="bg-white/10 border border-white/20 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                value={category}
                onChange={handleCategoryChange}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat} className="bg-slate-800 text-white">{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Servers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedTools.map((tool: any) => (
            <Card
              key={tool.id}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <img 
                    src={tool.logoUrl || tool.imageUrl} 
                    alt={tool.name} 
                    className="w-12 h-12 rounded-xl bg-white/10 object-contain flex-shrink-0" 
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-blue-400 hover:text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => window.open(tool.url, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{tool.name}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{tool.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">{tool.category}</span>
                </div>

                <div className="flex items-center justify-end">
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.open(tool.url, '_blank')}
                  >
                    Visit →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
          <Button
            variant="outline"
            className="bg-white/5 border-white/10 text-white hover:bg-white/10 backdrop-blur-sm"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            <span className="text-lg">&lt;</span> Previous
          </Button>
          {pagination.map((num, idx) =>
            num === '...'
              ? <span key={idx} className="px-3 text-white">...</span>
              : <Button
                  key={num}
                  variant={num === page ? "default" : "outline"}
                  className={`mx-1 min-w-[44px] ${
                    num === page 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white' 
                      : 'bg-white/5 border-white/10 text-white hover:bg-white/10 backdrop-blur-sm'
                  }`}
                  onClick={() => setPage(Number(num))}
                >
                  {num}
                </Button>
          )}
          <Button
            variant="outline"
            className="bg-white/5 border-white/10 text-white hover:bg-white/10 backdrop-blur-sm"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Next <span className="text-lg">&gt;</span>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default McpServers; 