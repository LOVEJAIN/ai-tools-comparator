
import React, { useState } from 'react';
import { useData } from '@/contexts/DataContext';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/sonner';

const SubmitBanner: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    itemName: '',
    itemUrl: '',
    description: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the submission to a backend
    toast.success("Submission received! We'll review your item and get back to you.");
    setIsDialogOpen(false);
    setFormData({
      name: '',
      email: '',
      itemName: '',
      itemUrl: '',
      description: ''
    });
  };
  
  return (
    <div className="bg-brand-purple text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Have a great product to share?</h2>
          <p className="mb-6 opacity-90">Get your product listed on our platform and reach thousands of potential customers.</p>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-white text-brand-purple hover:bg-gray-100">
                Submit Your Item
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Submit an item for listing</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="itemName">Item Name</Label>
                  <Input 
                    id="itemName" 
                    name="itemName"
                    value={formData.itemName}
                    onChange={handleChange}
                    placeholder="Your awesome product" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="itemUrl">Item URL</Label>
                  <Input 
                    id="itemUrl" 
                    name="itemUrl"
                    type="url"
                    value={formData.itemUrl}
                    onChange={handleChange}
                    placeholder="https://example.com/product" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell us about your product..." 
                    className="min-h-[100px]"
                    required 
                  />
                </div>
                
                <div className="text-xs text-gray-500">
                  By submitting, you agree to our terms and conditions. We'll review your submission
                  and get back to you.
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit" className="bg-brand-purple hover:bg-brand-purple/90">
                    Submit for Review
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default SubmitBanner;
