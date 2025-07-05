import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Globe, Building, PoundSterling, CreditCard, Smartphone, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const predefinedAmounts = ['25', '50', '100', '250', '500'];

const funds = [
  {
    id: 'general',
    title: 'General Fund',
    description: 'Support our daily ministry operations and church activities',
    icon: Heart,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'missions',
    title: 'Missions Fund',
    description: 'Spread the Gospel globally through our mission work',
    icon: Globe,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'building',
    title: 'Building Fund',
    description: 'Help us expand and improve our church facilities',
    icon: Building,
    color: 'from-amber-500 to-amber-600'
  },
  {
    id: 'outreach',
    title: 'Outreach Support',
    description: 'Support our community outreach and charity programs',
    icon: Target,
    color: 'from-purple-500 to-purple-600'
  }
];

const paymentMethods = [
  { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
  { id: 'bank', label: 'Bank Transfer', icon: Building },
  { id: 'mobile', label: 'Mobile Payment', icon: Smartphone }
];

const GivingForm = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedFund, setSelectedFund] = useState('general');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
  const [isRecurring, setIsRecurring] = useState(false);
  const [frequency, setFrequency] = useState('monthly');

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount('');
  };

  const handleGiveNow = () => {
    const amount = selectedAmount || customAmount;
    
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "❌ Invalid Amount",
        description: "Please select or enter a valid donation amount."
      });
      return;
    }

    toast({
      title: "💝 Thank You!",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold church-text-gradient mb-8">Make a Donation</h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Choose a Fund</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {funds.map((fund) => (
                    <div
                      key={fund.id}
                      onClick={() => setSelectedFund(fund.id)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedFund === fund.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`w-10 h-10 bg-gradient-to-r ${fund.color} rounded-full flex items-center justify-center`}>
                          <fund.icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-800">{fund.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{fund.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Select Amount</h3>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                        selectedAmount === amount
                          ? 'border-blue-500 bg-blue-500 text-white'
                          : 'border-gray-300 text-gray-700 hover:border-blue-300'
                      }`}
                    >
                      £{amount}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <PoundSterling className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <input
                    type="checkbox"
                    id="recurring"
                    checked={isRecurring}
                    onChange={(e) => setIsRecurring(e.target.checked)}
                    className="w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="recurring" className="text-lg font-semibold text-gray-800">
                    Make this a recurring donation
                  </label>
                </div>
                {isRecurring && (
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="annually">Annually</option>
                  </select>
                )}
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      onClick={() => setSelectedPaymentMethod(method.id)}
                      className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedPaymentMethod === method.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      {selectedPaymentMethod === method.id && (
                        <CheckCircle className="absolute top-2 right-2 w-5 h-5 text-blue-500" />
                      )}
                      <div className="flex items-center space-x-3">
                        <method.icon className="w-6 h-6 text-blue-900" />
                        <span className="font-medium text-gray-800">{method.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleGiveNow}
                className="w-full bg-gradient-to-r from-blue-900 to-amber-700 text-white py-4 text-lg rounded-lg hover:shadow-lg transform hover:scale-105 transition-all"
              >
                <Heart className="w-5 h-5 mr-2" />
                Give Now
              </Button>

              <p className="text-sm text-gray-500 text-center mt-4">
                Your donation is secure and encrypted. You'll receive a receipt via email.
              </p>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold church-text-gradient mb-4">Why Give?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Support Ministry</h4>
                    <p className="text-sm text-gray-600">Enable us to continue spreading God's love</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Global Impact</h4>
                    <p className="text-sm text-gray-600">Reach communities around the world</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Build Community</h4>
                    <p className="text-sm text-gray-600">Strengthen our local church family</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Other Ways to Give</h3>
              <div className="space-y-3">
                <Button
                  onClick={() => toast({
                    title: "💰 Text Giving",
                    description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                  })}
                  variant="outline"
                  className="w-full justify-start"
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Text to Give
                </Button>
                <Button
                  onClick={() => toast({
                    title: "🏦 Bank Transfer",
                    description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                  })}
                  variant="outline"
                  className="w-full justify-start"
                >
                  <Building className="w-4 h-4 mr-2" />
                  Bank Transfer
                </Button>
                <Button
                  onClick={() => toast({
                    title: "📅 Planned Giving",
                    description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                  })}
                  variant="outline"
                  className="w-full justify-start"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Planned Giving
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GivingForm;