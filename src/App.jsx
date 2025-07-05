
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Media from '@/pages/Media';
import Connect from '@/pages/Connect';
import Give from '@/pages/Give';
import Blog from '@/pages/Blog';
import JoinUs from '@/pages/JoinUs';
import PrayerWall from '@/pages/PrayerWall';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-28">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/media" element={<Media />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/give" element={<Give />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/prayer-wall" element={<PrayerWall />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
