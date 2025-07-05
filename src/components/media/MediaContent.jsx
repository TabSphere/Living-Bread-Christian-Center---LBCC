
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Download, Calendar, Clock, X, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";


const sermons = [
  { 
    id: 1, 
    title: 'Walking in Faith', 
    speaker: 'Rev. Michael Kusi-gyau', 
    date: '2024-02-04', 
    duration: 'N/A', 
    series: 'Faith Series', 
    description: 'Discover how to walk by faith and not by sight in your daily life.', 
    videoSrc: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Flbccuk%2Fvideos%2F2015653528595882%2F&show_text=false&width=560&t=0' 
  },
  { 
    id: 2, 
    title: 'The Power of Prayer', 
    speaker: 'Rev. Michael Kusi-gyau', 
    date: '2024-02-11', 
    duration: 'N/A', 
    series: 'Prayer Life', 
    description: 'Understanding the transformative power of prayer in our lives.', 
    videoSrc: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Flbccuk%2Fvideos%2F284496143859075%2F&show_text=false&width=560&t=0' 
  },
  { 
    id: 3, 
    title: 'Love in Action', 
    speaker: 'Rev. Michael Kusi-gyau', 
    date: '2024-02-18', 
    duration: 'N/A', 
    series: 'Love Series', 
    description: 'How to demonstrate God\'s love through practical actions.', 
    videoSrc: 'https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2Flbccuk%2Fvideos%2F634867430851359%2F&show_text=false&width=560&t=0' 
  },
  { 
    id: 4, 
    title: 'Building Strong Foundations', 
    speaker: 'Rev. Michael Kusi-gyau', 
    date: '2024-02-25', 
    duration: 'N/A', 
    series: 'Foundation Series', 
    description: 'Establishing your life on the solid rock of God\'s Word.', 
    videoSrc: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Flbccuk%2Fvideos%2F285653643150918%2F&show_text=false&width=560&t=0' 
  }
];

const photos = [
  { id: 1, title: 'A Night of Breakthrough', date: '2021-06-25', category: 'Special Event', image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/0bc794e9-9fbc-4c92-a0e3-55f07b0e5c35/3ebd06634ad1a640f9d7997a338a49cb.jpg' },
  { id: 2, title: '5 Days of Word & Prayers', date: '2021-06-28', category: 'Special Event', image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/0bc794e9-9fbc-4c92-a0e3-55f07b0e5c35/21667f5300c23fe49a10f6d96396a157.jpg' },
  { id: 3, title: 'Merry Christmas', date: '2021-12-25', category: 'Holiday', image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/0bc794e9-9fbc-4c92-a0e3-55f07b0e5c35/c6861892828c0b94f2e22a66ac20d136.jpg' },
  { id: 4, title: 'All White Thanksgiving Service', date: '2023-01-09', category: 'Worship', image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/0bc794e9-9fbc-4c92-a0e3-55f07b0e5c35/449a8f274b9d5654021b9eaeff4ec2cc.jpg' },
  { id: 5, title: 'Easter Convention', date: '2023-04-07', category: 'Conference', image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/0bc794e9-9fbc-4c92-a0e3-55f07b0e5c35/69eb4b97333b627e390bd131a0c391b1.jpg' },
  { id: 6, title: 'BreadFast 2023', date: '2023-08-25', category: 'Conference', image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/0bc794e9-9fbc-4c92-a0e3-55f07b0e5c35/f2f59333bf69ea4c53aa3ab64584514a.jpg' }
];

const podcasts = [
  { 
    id: 1, 
    title: 'Daily Devotions', 
    speaker: 'Rev. Michael Kusi-gyau',
    description: 'Short daily messages to inspire your walk with God.', 
    videoSrc: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Flbccuk%2Fvideos%2F2094198514313648%2F&show_text=false&width=560&t=0' 
  },
  { 
    id: 2, 
    title: 'Faith Conversations', 
    speaker: 'Rev. Michael Kusi-gyau',
    description: 'Deep discussions about faith, life, and purpose.', 
    videoSrc: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Flbccuk%2Fvideos%2F2094198514313648%2F&show_text=false&width=560&t=0' 
  },
  { 
    id: 3, 
    title: 'Youth Talk', 
    speaker: 'Rev. Michael Kusi-gyau',
    description: 'Relevant messages for teenagers and young adults.', 
    videoSrc: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Flbccuk%2Fvideos%2F2094198514313648%2F&show_text=false&width=560&t=0' 
  }
];

const Lightbox = ({ photos, selectedPhotoIndex, setSelectedPhotoIndex, isOpen, setIsOpen }) => {
  if (!isOpen || selectedPhotoIndex === null) return null;

  const currentPhoto = photos[selectedPhotoIndex];

  const changePhoto = (direction) => {
    const newIndex = (selectedPhotoIndex + direction + photos.length) % photos.length;
    setSelectedPhotoIndex(newIndex);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-transparent border-none shadow-none p-0 max-w-screen-xl w-full h-full">
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div 
            className="relative"
            key={currentPhoto.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <img 
              src={currentPhoto.image} 
              alt={currentPhoto.title} 
              className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
              <h3 className="font-bold">{currentPhoto.title}</h3>
              <p className="text-sm">{new Date(currentPhoto.date).toLocaleDateString()}</p>
            </div>
          </motion.div>

          <button onClick={() => changePhoto(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <button onClick={() => changePhoto(1)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const MediaContent = ({ activeTab, searchTerm }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const filteredSermons = sermons.filter(s => s.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredPhotos = photos.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredPodcasts = podcasts.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const openLightbox = (index) => {
    setSelectedPhotoIndex(index);
    setLightboxOpen(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'sermons':
        return (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredSermons.map((sermon, index) => (
              <motion.div key={sermon.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="sermon-card bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-black">
                  <iframe
                    src={sermon.videoSrc}
                    className="w-full h-full"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>{sermon.series}</span>
                    <span>{new Date(sermon.date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{sermon.title}</h3>
                  <p className="text-blue-900 font-semibold mb-4">{sermon.speaker}</p>
                  <p className="text-gray-600 text-sm mb-4">{sermon.description}</p>
                  <div className="flex space-x-2">
                    <Button onClick={() => window.open(sermon.videoSrc.split('&')[1].replace('href=https%3A%2F%2F', 'https://'), '_blank')} className="flex-1 bg-gradient-to-r from-blue-900 to-amber-700 text-white"><Play className="w-4 h-4 mr-2" />Watch on Facebook</Button>
                    <Button onClick={() => toast({ title: "📥 Download", description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀" })} variant="outline" className="px-4"><Download className="w-4 h-4" /></Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );
      case 'photos':
        return (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo, index) => (
                <motion.div 
                  key={photo.id} 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ duration: 0.6, delay: index * 0.1 }} 
                  className="bg-white rounded-lg overflow-hidden shadow-lg card-hover cursor-pointer group" 
                  onClick={() => openLightbox(index)}
                  layoutId={`card-${photo.id}`}
                >
                  <div className="h-48 overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" alt={photo.title} src={photo.image} />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-1 truncate">{photo.title}</h3>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{photo.category}</span>
                      <span>{new Date(photo.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <Lightbox 
              photos={filteredPhotos}
              selectedPhotoIndex={selectedPhotoIndex}
              setSelectedPhotoIndex={setSelectedPhotoIndex}
              isOpen={lightboxOpen}
              setIsOpen={setLightboxOpen}
            />
          </>
        );
      case 'podcasts':
        return (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPodcasts.map((podcast, index) => (
              <motion.div key={podcast.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="sermon-card bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-black">
                  <iframe
                    src={podcast.videoSrc}
                    className="w-full h-full"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{podcast.title}</h3>
                  <p className="text-blue-900 font-semibold mb-4">{podcast.speaker}</p>
                  <p className="text-gray-600 text-sm mb-4">{podcast.description}</p>
                  <div className="flex space-x-2">
                    <Button onClick={() => window.open(podcast.videoSrc.split('&')[1].replace('href=https%3A%2F%2F', 'https://'), '_blank')} className="flex-1 bg-gradient-to-r from-blue-900 to-amber-700 text-white"><Play className="w-4 h-4 mr-2" />Watch on Facebook</Button>
                    <Button onClick={() => toast({ title: "📥 Download", description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀" })} variant="outline" className="px-4"><Download className="w-4 h-4" /></Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      {renderContent()}
    </motion.div>
  );
};

export default MediaContent;
