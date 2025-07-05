
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LiveStream = () => {
  const handleWatchLive = () => {
    window.open('https://www.facebook.com/LBCCGlobal/', '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold church-text-gradient mb-4">
            Live Stream
          </h2>
          <div className="section-divider mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us live on Facebook every Sunday at 10:00 AM for worship and the Word
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-blue-900 to-amber-700 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center text-white">
                <div className="flex items-center justify-center mb-4">
                  <div className="live-indicator w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg font-semibold">LIVE ON FACEBOOK</span>
                </div>
                <Play className="w-20 h-20 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-2">Sunday Worship Service</h3>
                <p className="text-lg opacity-90 mb-4">Join us live at 10:00 AM</p>
                <Button
                  onClick={handleWatchLive}
                  className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 px-8 py-3 rounded-full"
                >
                  <Facebook className="w-5 h-5 mr-2" />
                  Watch on Facebook
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveStream;
