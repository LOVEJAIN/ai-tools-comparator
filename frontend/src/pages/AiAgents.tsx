import React, { useState, useMemo } from 'react';
import { aiAgents } from '../data/aiAgents';
import { useNavigate } from 'react-router-dom';

const AGENTS_PER_PAGE = 28;

const getUniqueCategories = (agents: any[]) => {
  const cats = agents.map(a => a.category);
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

const AiAgents: React.FC = () => {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('All Categories');
  const navigate = useNavigate();

  const categories = useMemo(() => getUniqueCategories(aiAgents), []);

  const filteredAgents = useMemo(() => {
    if (category === 'All Categories') return aiAgents;
    return aiAgents.filter(agent => agent.category === category);
  }, [category]);

  const totalPages = Math.ceil(filteredAgents.length / AGENTS_PER_PAGE);
  const paginatedAgents = filteredAgents.slice((page - 1) * AGENTS_PER_PAGE, page * AGENTS_PER_PAGE);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const pagination = getPagination(page, totalPages);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2 text-center">AI Agents Directory</h1>
      <p className="text-lg text-gray-400 mb-8 text-center">
        Discover AI agents for every use case, from science to content creation and more.
      </p>
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-400">Showing {(page-1)*AGENTS_PER_PAGE+1}-{Math.min(page*AGENTS_PER_PAGE, filteredAgents.length)} of {filteredAgents.length} agents</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-800 border border-zinc-300 shadow-sm hover:bg-zinc-100 hover:shadow-md transition font-medium"
            onClick={() => navigate('/')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5v9a1.5 1.5 0 001.5 1.5h3.75a.75.75 0 00.75-.75V15a.75.75 0 01.75-.75h1.5A.75.75 0 0114.25 15v5.25c0 .414.336.75.75.75h3.75a1.5 1.5 0 001.5-1.5v-9" />
            </svg>
            Home
          </button>
          <select
            className="border border-zinc-300 bg-white text-zinc-800 rounded-full px-4 py-2 shadow-sm hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            value={category}
            onChange={handleCategoryChange}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedAgents.map((agent: any) => (
          <a
            key={agent.id}
            href={agent.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-800 border border-zinc-200 rounded-xl p-5 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-200 h-full text-zinc-100"
          >
            <div className="flex items-center gap-3 mb-2">
              <img src={agent.logoUrl || agent.imageUrl} alt={agent.name} className="w-10 h-10 rounded bg-white object-contain" />
              <div className="font-semibold text-lg text-zinc-100">{agent.name}</div>
            </div>
            <div className="text-zinc-300 text-sm mb-2 line-clamp-3">{agent.description}</div>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-zinc-700 text-xs px-2 py-1 rounded text-zinc-200">{agent.category}</span>
            </div>
            <div className="flex items-center gap-2 mt-auto">
              <span className="text-yellow-400 font-bold">★ {agent.rating}</span>
              <span className="text-xs text-zinc-400">({agent.reviewCount} reviews)</span>
            </div>
            <div className="flex justify-end mt-2">
              <span className="text-blue-400 text-xs underline">Visit &rarr;</span>
            </div>
          </a>
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
        <button
          className="flex items-center gap-1 px-3 py-1 rounded text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 disabled:opacity-50 border-none bg-transparent"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          <span className="text-lg">&lt;</span> Previous
        </button>
        {pagination.map((num, idx) =>
          num === '...'
            ? <span key={idx} className="px-2 text-zinc-400">...</span>
            : <button
                key={num}
                className={`px-3 py-1 rounded-lg mx-1 min-w-[36px] text-base transition border border-transparent ${num === page ? 'bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 shadow text-zinc-900 dark:text-white font-semibold' : 'bg-transparent text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}
                style={{ boxShadow: num === page ? '0 0 0 2px #e5e7eb' : undefined }}
                onClick={() => setPage(Number(num))}
              >
                {num}
              </button>
        )}
        <button
          className="flex items-center gap-1 px-3 py-1 rounded text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 disabled:opacity-50 border-none bg-transparent"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next <span className="text-lg">&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default AiAgents; 