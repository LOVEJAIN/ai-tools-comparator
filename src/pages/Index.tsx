
import React from 'react';
import { DataProvider } from '@/contexts/DataContext';
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import ItemGrid from '@/components/ItemGrid';
import FeaturedItems from '@/components/FeaturedItems';
import AdminSection from '@/components/AdminSection';
import Footer from '@/components/Footer';
import SubmitBanner from '@/components/SubmitBanner';

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
              <ItemGrid />
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
