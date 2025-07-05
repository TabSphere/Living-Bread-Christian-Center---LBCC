import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import GivingForm from '@/components/give/GivingForm';
import FundraisingCampaigns from '@/components/give/FundraisingCampaigns';
import ImpactStories from '@/components/give/ImpactStories';

const Give = () => {
  return (
    <>
      <Helmet>
        <title>Give Online - Living Bread Christian Centre</title>
        <meta name="description" content="Support Living Bread Christian Centre through online giving. Donate to our general fund, missions, building projects, and community outreach programs." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img   
            className="w-full h-full object-cover" 
            alt="Hands giving offering in church service"
            src="https://images.unsplash.com/photo-1540511512761-cd4d58715723" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-amber-700/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow">
              Give with Joy
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
            </p>
            <div className="glass-effect rounded-2xl p-6 max-w-md mx-auto">
              <p className="text-lg font-semibold">Your generosity makes a difference</p>
              <p className="opacity-90">Supporting God's work locally and globally</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Giving Form Section */}
      <GivingForm />

      {/* Fundraising Campaigns Section */}
      <FundraisingCampaigns />

      {/* Impact Stories Section */}
      <section className="py-20 church-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">Your Impact</h2>
            <div className="max-w-4xl mx-auto">
              <div className="glass-effect rounded-2xl p-8 md:p-12">
                <p className="text-lg md:text-xl leading-relaxed mb-6 text-black">
                  Because of your generous giving, we've been able to feed 500 families this year, 
                  support 12 missionaries around the world, and provide scholarships for 25 students 
                  to attend Christian education programs.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {[
                    { number: '500+', label: 'Families Fed' },
                    { number: '12', label: 'Missionaries Supported' },
                    { number: '25+', label: 'Students Sponsored' }
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
    </>
  );
};

export default Give;