import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const LocationDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Map */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="h-64 bg-gradient-to-br from-blue-900 to-amber-700 flex items-center justify-center">
          <div className="text-center text-white">
            <MapPin className="w-16 h-16 mx-auto mb-4 opacity-80" />
            <h3 className="text-xl font-bold mb-2">Find Us Here</h3>
            <p className="opacity-90">Interactive map coming soon</p>
            <Button
              onClick={() => toast({
                title: "🗺️ Interactive Map",
                description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
              })}
              className="mt-4 bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30"
            >
              View on Google Maps
            </Button>
          </div>
        </div>
      </div>

      {/* Location Details */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold church-text-gradient mb-6">Visit Our Campus</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800">Address</p>
              <p className="text-gray-600">London, United Kingdom</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Clock className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800">Service Times</p>
              <div className="text-gray-600 space-y-1">
                <p>Sunday Worship: 10:00 AM</p>
                <p>Wednesday Bible Study: 7:00 PM</p>
                <p>Friday Prayer: 6:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800">Contact</p>
              <p className="text-gray-600">07956 487477</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-amber-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>First time visitor?</strong> We'd love to welcome you! 
            Arrive 15 minutes early and look for our welcome team in the lobby.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LocationDetails;