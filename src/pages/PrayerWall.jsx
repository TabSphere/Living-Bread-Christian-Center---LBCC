
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Send, Clock, User, Lock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const PrayerWall = () => {
  const [prayerRequests, setPrayerRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({
    name: '',
    request: '',
    isAnonymous: false
  });

  // Load prayer requests from localStorage on component mount
  useEffect(() => {
    const savedRequests = localStorage.getItem('prayerRequests');
    if (savedRequests) {
      setPrayerRequests(JSON.parse(savedRequests));
    } else {
      // Initialize with some sample requests
      const sampleRequests = [
        {
          id: 1,
          name: 'Sarah M.',
          request: 'Please pray for my family as we navigate through a difficult time. We need God\'s guidance and peace.',
          timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
          isAnonymous: false,
          prayers: 12
        },
        {
          id: 2,
          name: 'Anonymous',
          request: 'Pray for healing and strength during my recovery. Thank you for your prayers.',
          timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
          isAnonymous: true,
          prayers: 8
        },
        {
          id: 3,
          name: 'Michael R.',
          request: 'Please pray for wisdom as I make important career decisions. I want to follow God\'s will for my life.',
          timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          isAnonymous: false,
          prayers: 15
        }
      ];
      setPrayerRequests(sampleRequests);
      localStorage.setItem('prayerRequests', JSON.stringify(sampleRequests));
    }
  }, []);

  // Save prayer requests to localStorage whenever the state changes
  useEffect(() => {
    if (prayerRequests.length > 0) {
      localStorage.setItem('prayerRequests', JSON.stringify(prayerRequests));
    }
  }, [prayerRequests]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewRequest(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newRequest.request.trim()) {
      toast({
        title: "❌ Missing Information",
        description: "Please enter your prayer request."
      });
      return;
    }

    const request = {
      id: Date.now(),
      name: newRequest.isAnonymous ? 'Anonymous' : (newRequest.name || 'Anonymous'),
      request: newRequest.request,
      timestamp: new Date().toISOString(),
      isAnonymous: newRequest.isAnonymous,
      prayers: 0
    };

    setPrayerRequests(prev => [request, ...prev]);
    
    setNewRequest({
      name: '',
      request: '',
      isAnonymous: false
    });

    toast({
      title: "🙏 Prayer Request Submitted",
      description: "Your request has been added to our prayer wall. Our community will pray for you."
    });
  };

  const handlePrayForRequest = (id) => {
    setPrayerRequests(prev => 
      prev.map(request => 
        request.id === id 
          ? { ...request, prayers: request.prayers + 1 }
          : request
      )
    );

    toast({
      title: "🙏 Prayer Added",
      description: "Thank you for praying! Your prayer has been counted."
    });
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const requestTime = new Date(timestamp);
    const diffInHours = Math.floor((now - requestTime) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  };

  return (
    <>
      <Helmet>
        <title>Prayer Wall - Living Bread Christian Centre</title>
        <meta name="description" content="Submit prayer requests and pray for others in our church community. Join our prayer wall to share burdens and celebrate answered prayers together." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img  
            className="w-full h-full object-cover" 
            alt="People praying together in peaceful setting"
           src="https://images.unsplash.com/photo-1523887588687-7bd48b887e79" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-amber-700/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow">
              Prayer Wall
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
              "Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective." - James 5:16
            </p>
            <div className="glass-effect rounded-2xl p-6 max-w-md mx-auto">
              <p className="text-lg font-semibold">Community Prayer</p>
              <p className="opacity-90">Sharing burdens, celebrating victories</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Submit Prayer Request */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold church-text-gradient mb-4">
              Submit a Prayer Request
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Share your prayer needs with our loving community. We believe in the power of united prayer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name (optional)
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newRequest.name}
                    onChange={handleInputChange}
                    disabled={newRequest.isAnonymous}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500"
                    placeholder="Enter your name or leave blank for anonymous"
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="anonymous"
                    name="isAnonymous"
                    checked={newRequest.isAnonymous}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="anonymous" className="text-sm font-medium text-gray-700 flex items-center">
                    <Lock className="w-4 h-4 mr-1" />
                    Submit anonymously
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Prayer Request *
                  </label>
                  <textarea
                    name="request"
                    value={newRequest.request}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Share your prayer request here. Our community will lift you up in prayer..."
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-900 to-amber-700 text-white py-4 text-lg rounded-lg hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Prayer Request
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  All prayer requests are reviewed before being posted to ensure appropriateness.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prayer Requests */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold church-text-gradient mb-4">
              Community Prayer Requests
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us in praying for these requests from our church family
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {prayerRequests.length === 0 ? (
              <div className="text-center py-12">
                <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-500">No prayer requests yet. Be the first to share!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {prayerRequests.map((request, index) => (
                  <motion.div
                    key={request.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="prayer-wall-item rounded-2xl p-6 shadow-lg"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-amber-700 rounded-full flex items-center justify-center">
                          {request.isAnonymous ? (
                            <Lock className="w-5 h-5 text-white" />
                          ) : (
                            <User className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{request.name}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span>{formatTimeAgo(request.timestamp)}</span>
                            {request.isAnonymous && (
                              <>
                                <span>•</span>
                                <Lock className="w-3 h-3" />
                                <span>Anonymous</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {request.request}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span>{request.prayers} {request.prayers === 1 ? 'person has' : 'people have'} prayed</span>
                      </div>

                      <Button
                        onClick={() => handlePrayForRequest(request.id)}
                        variant="outline"
                        className="flex items-center space-x-2 hover:bg-blue-50 hover:border-blue-300"
                      >
                        <Heart className="w-4 h-4" />
                        <span>Pray for this</span>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Prayer Guidelines */}
      <section className="py-20 church-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Prayer Guidelines</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-effect rounded-2xl p-6">
                  <Globe className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                  <h3 className="text-xl font-bold mb-3">What to Include</h3>
                  <ul className="text-left space-y-2 text-gray-300">
                    <li>• Specific prayer needs</li>
                    <li>• Health concerns</li>
                    <li>• Family situations</li>
                    <li>• Career guidance</li>
                    <li>• Spiritual growth</li>
                    <li>• Thanksgiving and praise</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-2xl p-6">
                  <Heart className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                  <h3 className="text-xl font-bold mb-3">Community Guidelines</h3>
                  <ul className="text-left space-y-2 text-gray-300">
                    <li>• Keep requests appropriate</li>
                    <li>• Respect privacy</li>
                    <li>• Be encouraging</li>
                    <li>• Pray regularly</li>
                    <li>• Share answered prayers</li>
                    <li>• Support one another</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 glass-effect rounded-2xl p-6">
                <p className="text-lg leading-relaxed">
                  "And pray in the Spirit on all occasions with all kinds of prayers and requests. 
                  With this in mind, be alert and always keep on praying for all the Lord's people." 
                  - Ephesians 6:18
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrayerWall;
