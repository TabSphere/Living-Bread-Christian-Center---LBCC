
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import ContactInfo from '@/components/connect/ContactInfo';
import ContactForm from '@/components/connect/ContactForm';
import LocationDetails from '@/components/connect/LocationDetails';

const Connect = () => {
  return (
    <>
      <Helmet>
        <title>Connect With Us - Living Bread Christian Centre</title>
        <meta name="description" content="Get in touch with Living Bread Christian Centre. Contact us, visit our location, or send us a message. We'd love to hear from you and help you connect." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img   
            className="w-full h-full object-cover" 
            alt="Church welcome area with friendly staff"
            src="https://images.unsplash.com/photo-1682400249568-49cb269bff98" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-amber-700/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow">
              Connect With Us
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you! Reach out and let us know how we can serve you and your family
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <ContactInfo />

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ContactForm />
            <LocationDetails />
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 church-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">Stay Connected</h2>
            <div className="max-w-2xl mx-auto">
              <div className="glass-effect rounded-2xl p-8">
                <MessageSquare className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
                <h3 className="text-2xl font-bold mb-4 text-black">Join Our Newsletter</h3>
                <p className="text-lg mb-6 text-gray-800">
                  Get weekly devotions, event updates, and prayer requests delivered to your inbox
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
                  />
                  <Button
                    onClick={() => toast({
                      title: "📧 Newsletter Signup",
                      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                    })}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold"
                  >
                    Subscribe
                  </Button>
                </div>
                
                <p className="text-sm text-gray-700 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Connect;
  