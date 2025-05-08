import React, { useState } from 'react';
import { DataProvider, useData } from '@/contexts/DataContext';
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import ItemGrid from '@/components/ItemGrid';
import FeaturedItems from '@/components/FeaturedItems';
import AdminSection from '@/components/AdminSection';
import Footer from '@/components/Footer';
import SubmitBanner from '@/components/SubmitBanner';

// Mock news/articles
const mockNews = [
  {
    title: '5 Tips for a Cleaner Washroom',
    url: '#',
    summary: 'Discover the best practices for keeping your washroom spotless and hygienic.'
  },
  {
    title: 'Top Trends in Washroom Accessories',
    url: '#',
    summary: 'Explore the latest innovations in washroom accessories and dispensers.'
  },
  {
    title: 'Eco-Friendly Soap Options',
    url: '#',
    summary: 'Learn about sustainable and eco-friendly soap products for your washroom.'
  },
  {
    title: 'Hand Hygiene: Why It Matters',
    url: '#',
    summary: 'Understand the importance of hand hygiene and how to promote it.'
  },
];

function ProductComparisonPanel() {
  const { categories, items } = useData();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id || '');
  const productsInCategory = items.filter(i => i.category === selectedCategory);
  const [product1, setProduct1] = useState(productsInCategory[0]?.id || '');
  const [product2, setProduct2] = useState(productsInCategory[1]?.id || '');
  const [filters, setFilters] = useState({ rating: true, votes: true });

  React.useEffect(() => {
    setProduct1(productsInCategory[0]?.id || '');
    setProduct2(productsInCategory[1]?.id || '');
  }, [selectedCategory, items]);

  const prod1 = items.find(i => i.id === product1);
  const prod2 = items.find(i => i.id === product2);

  return (
    <div className="flex flex-col gap-4">
      <label className="font-medium">Category</label>
      <select
        className="border rounded px-2 py-1"
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
      >
        {categories.map(cat => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>
      <label className="font-medium mt-2">Product 1</label>
      <select
        className="border rounded px-2 py-1"
        value={product1}
        onChange={e => setProduct1(e.target.value)}
      >
        {productsInCategory.map(p => (
          <option key={p.id} value={p.id}>{p.title}</option>
        ))}
      </select>
      <label className="font-medium mt-2">Product 2</label>
      <select
        className="border rounded px-2 py-1"
        value={product2}
        onChange={e => setProduct2(e.target.value)}
      >
        {productsInCategory.map(p => (
          <option key={p.id} value={p.id}>{p.title}</option>
        ))}
      </select>
      <div className="mt-4">
        <span className="font-medium">Filters:</span>
        <label className="ml-2">
          <input type="checkbox" checked={filters.rating} onChange={e => setFilters(f => ({ ...f, rating: e.target.checked }))} /> Rating
        </label>
        <label className="ml-2">
          <input type="checkbox" checked={filters.votes} onChange={e => setFilters(f => ({ ...f, votes: e.target.checked }))} /> Votes
        </label>
      </div>
      {(prod1 && prod2) ? (
        <table className="w-full mt-4 text-sm border-t">
          <thead>
            <tr>
              <th className="text-left py-1">Feature</th>
              <th className="text-center py-1">{prod1.title}</th>
              <th className="text-center py-1">{prod2.title}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium py-1">Description</td>
              <td className="text-center py-1">{prod1.description}</td>
              <td className="text-center py-1">{prod2.description}</td>
            </tr>
            {filters.rating && (
              <tr>
                <td className="font-medium py-1">Rating</td>
                <td className="text-center py-1">{prod1.rating}</td>
                <td className="text-center py-1">{prod2.rating}</td>
              </tr>
            )}
            {filters.votes && (
              <tr>
                <td className="font-medium py-1">Votes</td>
                <td className="text-center py-1">{prod1.votes}</td>
                <td className="text-center py-1">{prod2.votes}</td>
              </tr>
            )}
          </tbody>
        </table>
      ) : (
        <div className="text-gray-400 text-sm mt-4">Select two products to compare.</div>
      )}
    </div>
  );
}

function NewsPanel() {
  return (
    <div className="flex flex-col gap-4">
      {mockNews.map((news, idx) => (
        <a key={idx} href={news.url} className="block p-3 rounded hover:bg-gray-100 transition">
          <div className="font-semibold text-base mb-1">{news.title}</div>
          <div className="text-gray-600 text-sm">{news.summary}</div>
        </a>
      ))}
    </div>
  );
}

const Index: React.FC = () => {
  return (
    <DataProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <FeaturedItems />
          <CategoryFilter />
          <section className="py-4">
            <div className="container px-4 mx-auto">
              <div className="flex gap-6 h-[70vh]">
                {/* Left: Product Comparison */}
                <aside className="w-1/4 bg-gray-50 rounded-lg p-6 min-h-[400px] border flex flex-col overflow-y-auto">
                  <h2 className="font-bold mb-4 text-lg">Compare Products</h2>
                  <ProductComparisonPanel />
                </aside>
                {/* Center: Product Grid */}
                <div className="flex-1 overflow-y-auto px-2">
                  <ItemGrid />
                </div>
                {/* Right: News & Articles */}
                <aside className="w-1/4 bg-gray-50 rounded-lg p-6 min-h-[400px] border flex flex-col overflow-y-auto">
                  <h2 className="font-bold mb-4 text-lg">News & Articles</h2>
                  <NewsPanel />
                </aside>
              </div>
            </div>
          </section>
          <SubmitBanner />
          <AdminSection />
        </main>
        <Footer />
      </div>
    </DataProvider>
  );
};

export default Index;
