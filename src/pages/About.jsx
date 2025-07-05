import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Living Bread Christian Centre</title>
        <meta name="description" content="Learn about Living Bread Christian Centre's mission, vision, leadership, and core beliefs. Discover our history and commitment to spreading God's word globally." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img  
            className="w-full h-full object-cover" 
            alt="Church leadership team standing together"
           src="https://images.unsplash.com/photo-1628168855803-616bf77e1665" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-amber-700/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow">
              About Our Ministry
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Discover the heart behind Living Bread Christian Centre and our commitment to spreading God's love worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Coming Soon Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-12 shadow-lg">
              <Construction className="w-20 h-20 mx-auto mb-6 text-amber-700" />
              <h2 className="text-4xl font-bold church-text-gradient mb-4">
                Content Coming Soon!
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are currently preparing inspiring content for this page. Please check back soon to learn more about our story, our leaders, and what we believe. We can't wait to share our heart with you!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;