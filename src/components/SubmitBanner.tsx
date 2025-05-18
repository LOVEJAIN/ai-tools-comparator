import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/sonner';

export type SubmitToolModalHandle = {
  open: (tab?: 'submit' | 'advertise') => void;
  close: () => void;
};

const SubmitToolModal = forwardRef<SubmitToolModalHandle, {}>((props, ref) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'submit' | 'advertise'>('submit');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  useImperativeHandle(ref, () => ({
    open: (tab = 'submit') => {
      setActiveTab(tab);
      setIsDialogOpen(true);
    },
    close: () => setIsDialogOpen(false)
  }));
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Submission received! We'll review your item and get back to you.");
    setIsDialogOpen(false);
    setFormData({
      name: '',
      email: '',
      mobile: ''
    });
  };
  
  return (
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
          <DialogTitle>{activeTab === 'advertise' ? 'Advertise Your Tool' : 'Submit an item for listing'}</DialogTitle>
              </DialogHeader>
        <div className="flex gap-4 mb-4">
          <Button variant={activeTab === 'submit' ? 'default' : 'outline'} onClick={() => setActiveTab('submit')}>Submit Tool</Button>
          <Button variant={activeTab === 'advertise' ? 'default' : 'outline'} onClick={() => setActiveTab('advertise')}>Advertise</Button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number</Label>
              <Input id="mobile" name="mobile" type="tel" value={formData.mobile} onChange={handleChange} placeholder="Your mobile number" required />
                </div>
                <div className="text-xs text-gray-500">
            Join the waitlist and be the first to know when we launch!
                </div>
                <div className="flex justify-end">
                  <Button type="submit" className="bg-brand-purple hover:bg-brand-purple/90">
              {activeTab === 'advertise' ? 'Submit Advertise Request' : 'Submit for Review'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
  );
});

export default SubmitToolModal;
