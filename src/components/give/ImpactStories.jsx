import React from 'react';
import { motion } from 'framer-motion';

const ImpactStories = () => {
  return (
    <section className="py-20 church-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Your Impact</h2>
          <div className="max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed mb-6 text-black">
                Because of your generous giving, we've been able to feed 500 families this year, 
                support 12 missionaries around the world, and provide scholarships for 25 students 
                to attend Christian education programs.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { number: '500', label: 'Families Fed' },
                  { number: '12', label: 'Missionaries Supported' },
                  { number: '25', label: 'Students Sponsored' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                    <div className="text-gray-800">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-lg mt-6 text-black">
                Thank you for being part of God's work in our community and around the world!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStories;