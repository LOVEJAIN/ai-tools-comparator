
import React from 'react';
import ItemCard from './ItemCard';
import { useData } from '@/contexts/DataContext';

const ItemGrid: React.FC = () => {
  const { filteredItems } = useData();
  
  // If no filtered items, show message
  if (filteredItems.length === 0) {
    return (
      <div className="flex justify-center items-center h-40 w-full">
        <p className="text-gray-500">No items found in this category.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
      {filteredItems.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemGrid;
