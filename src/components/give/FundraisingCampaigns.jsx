
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';

const campaigns = [
  {
    title: 'New Sanctuary Project',
    description: 'Building a larger worship space to accommodate our growing congregation.',
    goal: 500000,
    raised: 325000,
    percentage: 65,
    image: 'Architectural rendering of beautiful new church sanctuary'
  },
  {
    title: 'Mission Trip to Africa',
    description: 'Supporting our mission team\'s upcoming trip to serve communities in Kenya.',
    goal: 25000,
    raised: 18500,
    percentage: 74,
    image: 'Mission team serving in African community with children'
  },
  {
    title: 'Youth Ministry Equipment',
    description: 'Upgrading sound and video equipment for our youth ministry programs.',
    goal: 15000,
    raised: 8200,
    percentage: 55,
    image: 'Modern youth ministry space with audio visual equipment'
  }
];

const FundraisingCampaigns = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [donationAmount, setDonationAmount] = useState('');
  const navigate = useNavigate();

  const handleSupportClick = (campaign) => {
    setSelectedCampaign(campaign);
  };

  const handleGiveNow = () => {
    if (selectedCampaign) {
      navigate('/give', { state: { campaign: selectedCampaign.title, amount: donationAmount } });
      setSelectedCampaign(null);
      setDonationAmount('');
    }
  };

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold church-text-gradient mb-4">
              Current Campaigns
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us in supporting these special projects that will impact our community and beyond. Your generosity brings these visions to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover flex flex-col"
              >
                <div className="h-48 bg-gradient-to-br from-blue-900 to-amber-700 flex items-center justify-center">
                  <img 
                    className="w-full h-full object-cover" 
                    alt={campaign.image}
                   src="https://images.unsplash.com/photo-1676287570057-6b93e8d76649" />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{campaign.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{campaign.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-700">Progress</span>
                      <span className="text-sm font-semibold text-blue-900">{campaign.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="donation-progress h-3 rounded-full"
                        style={{ width: `${campaign.percentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                      <span>£{campaign.raised.toLocaleString()} raised</span>
                      <span>£{campaign.goal.toLocaleString()} goal</span>
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => handleSupportClick(campaign)}
                    className="w-full bg-gradient-to-r from-blue-900 to-amber-700 text-white mt-auto"
                  >
                    Support This Campaign
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedCampaign && (
        <Dialog open={!!selectedCampaign} onOpenChange={() => setSelectedCampaign(null)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Support: {selectedCampaign.title}</DialogTitle>
              <DialogDescription>
                {selectedCampaign.description}. Your contribution will make a real difference.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="donation-amount" className="text-right col-span-1">
                  Amount (£)
                </Label>
                <Input
                  id="donation-amount"
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setSelectedCampaign(null)}>Cancel</Button>
              <Button type="submit" onClick={handleGiveNow} className="bg-gradient-to-r from-blue-900 to-amber-700 text-white">Give Now</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default FundraisingCampaigns;
