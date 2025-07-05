import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Heart } from 'lucide-react';

const PrayerRequestDialog = ({ isOpen, onOpenChange }) => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenChange(false);
    toast({
      title: '🙏 Prayer Request Submitted',
      description: 'Thank you. Our prayer team will be praying for you.',
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white text-gray-800">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl font-bold church-text-gradient">Submit a Prayer Request</DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Let us know how we can pray for you. All requests are confidential.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">Name (Optional)</label>
              <input id="name" placeholder="Your Name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="request" className="text-sm font-medium">Prayer Request</label>
              <textarea id="request" placeholder="Share your prayer needs here..." rows={4} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="is_public" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <label htmlFor="is_public" className="text-sm font-medium text-gray-700">Share this on the public prayer wall</label>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full bg-gradient-to-r from-blue-900 to-amber-700 text-white hover:shadow-lg">Submit Request</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PrayerRequestDialog;