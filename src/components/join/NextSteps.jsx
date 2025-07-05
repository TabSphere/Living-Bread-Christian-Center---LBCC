import React from 'react';
import { motion } from 'framer-motion';

const NextSteps = () => {
  return (
    <section className="py-20 church-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">What Happens Next?</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'We Review Your Application',
                  description: 'Our team will carefully review your submission within 24 hours'
                },
                {
                  step: '2',
                  title: 'Personal Contact',
                  description: 'A member of our pastoral team will reach out to you personally'
                },
                {
                  step: '3',
                  title: 'Welcome & Integration',
                  description: 'We\'ll help you get connected and find your place in our community'
                }
              ].map((step, index) => (
                <div key={index} className="glass-effect rounded-2xl p-6">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-black">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">{step.title}</h3>
                  <p className="text-gray-800">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NextSteps;