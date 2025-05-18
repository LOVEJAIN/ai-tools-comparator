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
    mobile: '',
    itemName: '',
    itemUrl: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useImperativeHandle(ref, () => ({
    open: (tab = 'submit') => {
      setActiveTab(tab);
      setIsDialogOpen(true);
      setSuccess(false);
      setError('');
    },
    close: () => setIsDialogOpen(false)
  }));
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      if (activeTab === 'advertise') {
        // Join waitlist/contact from subscription page
        await fetch('/api/contact-messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: null,
            name: formData.name,
            email: formData.email,
            message: `Mobile: ${formData.mobile}`,
            source: 'subscription'
          })
        });
        setSuccess(true);
        setFormData({ name: '', email: '', mobile: '', itemName: '', itemUrl: '', description: '' });
      } else {
        // Tool submission
        await fetch('/api/tool-submissions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: null,
            toolName: formData.itemName,
            toolUrl: formData.itemUrl,
            description: formData.description
          })
        });
        setSuccess(true);
        setFormData({ name: '', email: '', mobile: '', itemName: '', itemUrl: '', description: '' });
      }
    } catch (err) {
      setError('Failed to submit. Please try again later.');
    } finally {
      setLoading(false);
    }
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
        {success ? (
          <div className="text-green-600 text-center py-8">Thank you! Your submission has been received.</div>
        ) : (
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          {activeTab === 'advertise' ? (
            <>
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
            </>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="itemName">Tool Name</Label>
                <Input id="itemName" name="itemName" value={formData.itemName} onChange={handleChange} placeholder="Your awesome product" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="itemUrl">Tool URL</Label>
                <Input id="itemUrl" name="itemUrl" type="url" value={formData.itemUrl} onChange={handleChange} placeholder="https://example.com/product" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Tell us about your product..." className="min-h-[100px]" required />
              </div>
            </>
          )}
          {error && <div className="text-red-500 text-xs mb-2">{error}</div>}
          <div className="flex justify-end">
            <Button type="submit" className="bg-brand-purple hover:bg-brand-purple/90" disabled={loading}>
              {loading ? 'Submitting...' : (activeTab === 'advertise' ? 'Join Waitlist' : 'Submit for Review')}
            </Button>
          </div>
        </form>
        )}
      </DialogContent>
    </Dialog>
  );
});

export default SubmitToolModal;
