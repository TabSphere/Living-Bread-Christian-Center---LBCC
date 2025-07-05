import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, User, Mail, MessageSquare, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const PrayerForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const request = formData.get('request');
    const subject = `Prayer Request from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nPrayer Request:\n${request}`;
    window.location.href = `mailto:lbcc5005@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast({
      title: "🙏 Prayer Request Sent!",
      description: "Thank you for sharing. Our prayer team will be praying for you.",
    });
    e.target.reset();
  };

  return (
    <>
      <Helmet>
        <title>Submit a Prayer Request - Living Bread Christian Centre</title>
        <meta name="description" content="Share your prayer requests with the Living Bread Christian Centre prayer team. We are here to stand with you in prayer." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img  
            className="w-full h-full object-cover" 
            alt="Hands clasped in prayer with soft light"
            src="https://images.unsplash.com/photo-1586723828794-a17f04369a47" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-amber-700/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow">
              Submit a Prayer Request
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." - Philippians 4:6
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <div className="text-center mb-8">
                <Heart className="w-16 h-16 mx-auto mb-4 text-blue-900" />
                <h2 className="text-3xl font-bold text-gray-800">We're Here for You</h2>
                <p className="text-gray-600 mt-2">Please share your request below. Our prayer team will stand with you in faith.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name (optional)"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email (for follow-up, optional)"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-5 text-gray-400 w-5 h-5" />
                  <textarea
                    name="request"
                    placeholder="Your Prayer Request..."
                    required
                    rows="6"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <div className="flex items-start space-x-3">
                   <Check className="w-5 h-5 text-green-500 mt-1" />
                    <p className="text-sm text-gray-500">
                      All requests are confidential and are shared only with our pastoral staff and dedicated prayer team.
                    </p>
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-blue-900 to-amber-700 text-white py-3 text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Request
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrayerForm;