
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['London, United Kingdom'],
    action: 'Get Directions',
    type: 'map'
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['07956 487477', 'Monday - Friday: 9AM - 5PM'],
    action: 'Call Now',
    type: 'phone'
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['lbcc5005@gmail.com', 'We respond within 24 hours'],
    action: 'Send Email',
    type: 'email'
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: ['Mon-Fri: 9:00 AM - 5:00 PM', 'Sat-Sun: By Appointment'],
    action: 'Schedule Visit',
    type: 'schedule'
  }
];

const ContactInfo = () => {
  const handleActionClick = (info) => {
    if (info.type === 'map') {
      window.open('https://www.google.com/maps/search/?api=1&query=London,United+Kingdom', '_blank');
    } else if (info.type === 'phone') {
      window.location.href = 'tel:07956487477';
    } else if (info.type === 'email') {
      window.location.href = 'mailto:lbcc5005@gmail.com';
    } else {
      toast({
        title: `📞 ${info.title}`,
        description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold church-text-gradient mb-4">
            Get In Touch
          </h2>
          <div className="section-divider mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Multiple ways to connect with our church family
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-6 text-center card-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
              
              <div className="space-y-1 mb-4">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
              
              <Button
                onClick={() => handleActionClick(info)}
                variant="outline"
                className="w-full"
              >
                {info.action}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
