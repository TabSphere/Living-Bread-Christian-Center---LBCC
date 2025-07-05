
    import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Calendar, Heart, Users, Globe, ChevronDown, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import PrayerRequestDialog from '@/components/PrayerRequestDialog';

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextService, setNextService] = useState('');
  const [isPrayerDialogOpen, setPrayerDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const now = new Date();
    const dayOfWeek = now.getDay();
    const hour = now.getHours();
    
    if (dayOfWeek === 0 && hour < 10) {
      setNextService('Today at 10:00 AM');
    } else if (dayOfWeek === 0 && hour >= 10) {
      setNextService('Wednesday at 7:00 PM');
    } else if (dayOfWeek === 3 && hour < 19) {
      setNextService('Today at 7:00 PM');
    } else if (dayOfWeek === 3 && hour >= 19) {
      setNextService('Sunday at 10:00 AM');
    } else if (dayOfWeek < 3) {
      setNextService('Wednesday at 7:00 PM');
    } else {
      setNextService('Sunday at 10:00 AM');
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Living Bread Christian Centre - A True Ministry of God</title>
        <meta name="description" content="Welcome to Living Bread Christian Centre - A True Ministry of God spreading the Word globally. Join us for worship, fellowship, and spiritual growth." />
      </Helmet>
      
      <PrayerRequestDialog isOpen={isPrayerDialogOpen} onOpenChange={setPrayerDialogOpen} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img  
            className="w-full h-full object-cover" 
            alt="Church sanctuary with warm lighting and wooden pews"
           src="https://images.unsplash.com/photo-1464373849006-1c4fcb1e0d72" />
          <div className="absolute inset-0 church-gradient opacity-80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-shadow mb-6">
              Living Bread
              <span className="block text-3xl md:text-5xl text-yellow-300 mt-2">
                Christian Centre
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-light text-shadow max-w-3xl mx-auto leading-relaxed">
              A True Ministry of God – Spreading the Word Globally
            </p>

            {/* Service Time Display */}
            <div className="glass-effect rounded-2xl p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 text-yellow-300 mb-2">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Next Service</span>
              </div>
              <p className="text-2xl font-bold">{nextService}</p>
              <div className="flex items-center justify-center space-x-2 mt-2 text-sm opacity-90">
                <MapPin className="w-4 h-4" />
                <span>Join us in person or online</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Link to="/media">
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-full flex items-center space-x-2 pulse-glow"
                >
                  <div className="live-indicator w-3 h-3 rounded-full mr-2"></div>
                  <Play className="w-5 h-5" />
                  <span>Join Us Live</span>
                </Button>
              </Link>

              <Button
                onClick={() => setPrayerDialogOpen(true)}
                className="bg-white/20 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/30 px-8 py-4 text-lg rounded-full flex items-center space-x-2"
              >
                <Heart className="w-5 h-5" />
                <span>Submit Prayer Request</span>
              </Button>

              <Link to="/give">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg rounded-full flex items-center space-x-2 font-semibold">
                  <span>Give Online</span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator text-white">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold church-text-gradient mb-4">
              Latest Message
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience God's word through our latest sermon and be blessed
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden aspect-video">
              <iframe 
                src="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Flbccuk%2Fvideos%2F398846395348634%2F&show_text=false&width=560&t=0" 
                className="absolute top-0 left-0 w-full h-full"
                style={{border:'none', overflow:'hidden'}} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen="true" 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
              </iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 church-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '500+', label: 'Members' },
              { icon: Globe, number: '15+', label: 'Countries Reached' },
              { icon: Heart, number: '1000+', label: 'Lives Touched' },
              { icon: Calendar, number: '25+', label: 'Years of Ministry' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="glass-effect rounded-2xl p-6 card-hover">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                  <div className="text-3xl font-bold mb-2 text-black">{stat.number}</div>
                  <div className="text-lg opacity-90 text-black">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold church-text-gradient mb-4">
              Our Ministries
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join one of our vibrant ministry groups and grow in faith together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Youth Ministry',
                description: 'Empowering the next generation to live boldly for Christ.',
                image: 'Young people worshipping together with raised hands',
                color: 'from-blue-500 to-purple-600'
              },
              {
                title: 'Women of Virtue',
                description: 'Building strong women of faith through fellowship and the Word.',
                image: 'Group of women in prayer circle',
                color: 'from-pink-500 to-rose-600'
              },
              {
                title: "Men's Fellowship",
                description: 'Growing together as men of God, husbands, and fathers.',
                image: 'Men studying the Bible together',
                color: 'from-green-500 to-teal-600'
              },
              {
                title: 'Intercessory Prayer',
                description: 'Standing in the gap for our church, community, and world.',
                image: 'People kneeling in prayer',
                color: 'from-amber-500 to-orange-600'
              }
            ].map((ministry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ministry-card rounded-2xl overflow-hidden"
              >
                <div className={`h-48 bg-gradient-to-br ${ministry.color} flex items-center justify-center`}>
                  <img  
                    className="w-full h-full object-cover opacity-80" 
                    alt={ministry.title}
                   src="https://images.unsplash.com/photo-1564921074016-dc83ab4ac783" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{ministry.title}</h3>
                  <p className="text-gray-600 mb-4">{ministry.description}</p>
                  <Link to="/services">
                    <Button
                      variant="outline"
                      className="w-full"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-amber-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our loving community and experience God's transforming power in your life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join-us">
                <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold">
                  Join Our Family
                </Button>
              </Link>
              <Link to="/connect">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg rounded-full">
                  Get Connected
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
  