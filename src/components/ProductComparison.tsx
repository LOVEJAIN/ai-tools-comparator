
import React, { useState } from 'react';
import { useData } from '@/contexts/DataContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ImageOff, RefreshCw, ArrowsLeftRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const ProductComparison: React.FC = () => {
  const { items, categories } = useData();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [product1, setProduct1] = useState<string>('');
  const [product2, setProduct2] = useState<string>('');

  // Filter items by the selected category
  const filteredItems = selectedCategory 
    ? items.filter(item => item.category === selectedCategory)
    : [];

  // Get the selected products' details
  const productItem1 = items.find(item => item.id === product1);
  const productItem2 = items.find(item => item.id === product2);

  const resetComparison = () => {
    setProduct1('');
    setProduct2('');
  };

  // List of features to compare
  const comparisonFeatures = [
    { name: 'Rating', key: 'rating', format: (val: any) => val?.toFixed(1) || 'N/A' },
    { name: 'Reviews', key: 'reviewsCount', format: (val: any) => val || '0' },
    { name: 'Votes', key: 'votes', format: (val: any) => val || '0' },
    { name: 'Featured', key: 'featured', format: (val: boolean) => val ? 'Yes' : 'No' }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/placeholder.svg';
  };

  return (
    <Card className="h-full overflow-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ArrowsLeftRight className="h-5 w-5" />
          Product Comparison
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Category selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Category:</label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Product selections */}
          {selectedCategory && (
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="text-sm font-medium">Product 1:</label>
                <Select value={product1} onValueChange={setProduct1}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select product" />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredItems.map(item => (
                      <SelectItem key={item.id} value={item.id}>{item.title}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Product 2:</label>
                <Select value={product2} onValueChange={setProduct2}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select product" />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredItems.map(item => (
                      <SelectItem key={item.id} value={item.id}>{item.title}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Reset button */}
          {(product1 || product2) && (
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full"
              onClick={resetComparison}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset Comparison
            </Button>
          )}

          {/* Comparison display */}
          {product1 && product2 && (
            <div className="mt-4 space-y-4">
              <Separator />
              
              {/* Product images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="h-24 overflow-hidden bg-gray-100 flex justify-center items-center rounded-md">
                    {productItem1?.imageUrl ? (
                      <img 
                        src={productItem1.imageUrl}
                        alt={productItem1.title}
                        className="object-cover w-full h-full"
                        onError={handleImageError}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-gray-400">
                        <ImageOff size={20} />
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-medium text-center line-clamp-1">{productItem1?.title}</p>
                </div>
                <div className="space-y-1">
                  <div className="h-24 overflow-hidden bg-gray-100 flex justify-center items-center rounded-md">
                    {productItem2?.imageUrl ? (
                      <img 
                        src={productItem2.imageUrl}
                        alt={productItem2.title}
                        className="object-cover w-full h-full"
                        onError={handleImageError}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-gray-400">
                        <ImageOff size={20} />
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-medium text-center line-clamp-1">{productItem2?.title}</p>
                </div>
              </div>

              {/* Comparison table */}
              <div className="border rounded-md overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {comparisonFeatures.map((feature) => (
                      <tr key={feature.key} className="border-b last:border-b-0">
                        <td className="px-3 py-2 font-medium bg-gray-50">{feature.name}</td>
                        <td className="px-3 py-2 text-center">
                          {feature.format(productItem1?.[feature.key as keyof typeof productItem1])}
                        </td>
                        <td className="px-3 py-2 text-center bg-gray-50">
                          {feature.format(productItem2?.[feature.key as keyof typeof productItem2])}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Description comparison */}
              <div className="space-y-2">
                <h4 className="font-medium">Description</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-xs p-2 bg-gray-50 rounded-md h-24 overflow-auto">
                    {productItem1?.description || 'No description available'}
                  </div>
                  <div className="text-xs p-2 bg-gray-50 rounded-md h-24 overflow-auto">
                    {productItem2?.description || 'No description available'}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductComparison;
