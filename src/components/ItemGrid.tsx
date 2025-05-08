import React from 'react';
import ItemCard from './ItemCard';
import { useData } from '@/contexts/DataContext';
import { ImageOff } from 'lucide-react';

const ItemGrid: React.FC = () => {
  const { filteredItems } = useData();
  
  // If no filtered items, show message
  if (filteredItems.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-60 w-full">
        <ImageOff size={32} className="text-gray-400 mb-2" />
        <p className="text-gray-500">No items found in this category.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
      {filteredItems.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemGrid;
