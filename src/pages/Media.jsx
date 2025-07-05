import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Play, Download, Calendar } from 'lucide-react';
import MediaTabs from '@/components/media/MediaTabs';
import MediaContent from '@/components/media/MediaContent';
import LiveStream from '@/components/media/LiveStream';

const Media = () => {
  const [activeTab, setActiveTab] = useState('sermons');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Helmet>
        <title>Media - Living Bread Christian Centre</title>
        <meta name="description" content="Watch sermons, browse photo galleries, and listen to podcasts from Living Bread Christian Centre. Access our complete media library of inspiring content." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img   
            className="w-full h-full object-cover" 
            alt="Media production setup in church"
            src="https://images.unsplash.com/photo-1665025334899-db71a4c61ffc" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-amber-700/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow">
              Media Library
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Access our complete collection of sermons, photos, and podcasts to stay connected and grow in faith
            </p>
          </motion.div>
        </div>
      </section>

      {/* Live Stream Section */}
      <LiveStream />

      {/* Media Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <MediaTabs 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <MediaContent activeTab={activeTab} searchTerm={searchTerm} />
        </div>
      </section>
    </>
  );
};

export default Media;