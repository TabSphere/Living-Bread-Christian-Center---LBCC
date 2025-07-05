
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Heart, Droplets, MessageCircle } from 'lucide-react';
import MembershipForm from '@/components/join/MembershipForm';
import VolunteerForm from '@/components/join/VolunteerForm';
import BaptismForm from '@/components/join/BaptismForm';
import CounselingForm from '@/components/join/CounselingForm';

const formOptions = [
  {
    id: 'membership',
    title: 'Become a Member',
    description: 'Join our church family and become part of our community',
    icon: Users,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'volunteer',
    title: 'Volunteer',
    description: 'Serve in various ministries and make a difference',
    icon: Heart,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'baptism',
    title: 'Baptism',
    description: 'Take the next step in your faith journey',
    icon: Droplets,
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'counseling',
    title: 'Counseling',
    description: 'Get spiritual guidance and support',
    icon: MessageCircle,
    color: 'from-purple-500 to-purple-600'
  }
];

const JoinUs = () => {
  const [activeForm, setActiveForm] = useState('membership');

  const renderForm = () => {
    switch (activeForm) {
      case 'membership':
        return <MembershipForm />;
      case 'volunteer':
        return <VolunteerForm />;
      case 'baptism':
        return <BaptismForm />;
      case 'counseling':
        return <CounselingForm />;
      default:
        return <MembershipForm />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Join Us - Living Bread Christian Centre</title>
        <meta name="description" content="Join the Living Bread Christian Centre family. Become a member, volunteer, schedule baptism, or request counseling. Get involved and grow in faith with us." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img   
            className="w-full h-full object-cover" 
            alt="Church family welcoming new members"
            src="https://images.unsplash.com/photo-1697999549062-af44886b7edd" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-amber-700/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow">
              Join Our Family
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Take the next step in your faith journey and become part of our loving church community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Selection */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold church-text-gradient mb-4">
              How Can We Help You?
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the option that best describes your next step with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {formOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveForm(option.id)}
                className={`p-6 rounded-2xl cursor-pointer transition-all card-hover ${
                  activeForm === option.id
                    ? 'bg-gradient-to-br from-blue-50 to-amber-50 border-2 border-blue-500'
                    : 'bg-gray-50 border-2 border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm">{option.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Forms */}
          <motion.div
            key={activeForm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {renderForm()}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 church-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">What Happens Next?</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { number: 1, title: 'We Review Your Application', description: 'Our team will carefully review your submission within 24 hours' },
                  { number: 2, title: 'Personal Contact', description: 'A member of our pastoral team will reach out to you personally' },
                  { number: 3, title: 'Welcome & Integration', description: 'We\'ll help you get connected and find your place in our community' }
                ].map((step, index) => (
                  <div key={index} className="glass-effect rounded-2xl p-6">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl text-blue-900">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-black">{step.title}</h3>
                    <p className="text-gray-800 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default JoinUs;
  