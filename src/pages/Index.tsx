
import React from 'react';
import { DataProvider } from '@/contexts/DataContext';
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import ItemGrid from '@/components/ItemGrid';
import FeaturedItems from '@/components/FeaturedItems';
import AdminSection from '@/components/AdminSection';
import Footer from '@/components/Footer';
import SubmitBanner from '@/components/SubmitBanner';
import ProductComparison from '@/components/ProductComparison';
import NewsArticles from '@/components/NewsArticles';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';

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
              <ResizablePanelGroup direction="horizontal" className="min-h-[500px]">
                {/* Left section: Product comparison */}
                <ResizablePanel defaultSize={30} minSize={25}>
                  <ProductComparison />
                </ResizablePanel>
                
                <ResizableHandle withHandle />
                
                {/* Center section: Item grid */}
                <ResizablePanel defaultSize={45} minSize={35}>
                  <div className="h-full overflow-auto px-4">
                    <ItemGrid />
                  </div>
                </ResizablePanel>
                
                <ResizableHandle withHandle />
                
                {/* Right section: News and articles */}
                <ResizablePanel defaultSize={25} minSize={20}>
                  <NewsArticles />
                </ResizablePanel>
              </ResizablePanelGroup>
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
