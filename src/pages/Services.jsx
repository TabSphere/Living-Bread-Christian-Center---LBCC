import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, MapPin, Users, Heart, Book, Music, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
const Services = () => {
  const services = [{
    id: 'worship',
    title: 'Sunday Worship Service',
    time: 'Sunday 10:00 AM',
    duration: '2 hours',
    description: 'Join us every Sunday for a time of powerful corporate worship, inspiring, Bible-based messages from our pastors, and warm fellowship with our church family. It\'s the perfect way to start your week centered on God.',
    image: 'Large congregation worshipping with hands raised, modern church sanctuary',
    features: ['Live Worship Band', 'Biblical Teaching', 'Corporate Prayer', 'Children\'s Program']
  }, {
    id: 'bible-study',
    title: 'Midweek Bible Study',
    time: 'Wednesday 7:00 PM',
    duration: '1.5 hours',
    description: 'Go deeper in your understanding of God\'s Word. Our midweek service is an interactive session where you can explore scripture, ask questions, and discuss its application in a supportive group setting.',
    image: 'Small group Bible study with people sitting in circle with open Bibles',
    features: ['In-depth Study', 'Small Group Discussion', 'Prayer & Support', 'Q&A with Pastors']
  }, {
    id: 'prayer',
    title: 'Intercessory Prayer Meeting',
    time: 'Friday 6:00 PM',
    duration: '1 hour',
    description: 'Come and stand in the gap as we pray together for our community, our nation, and the world. This is a powerful time of seeking God\'s face and believing for breakthrough together.',
    image: 'People kneeling in prayer in a peaceful church setting',
    features: ['Corporate Prayer', 'Intercession for others', 'Worship & Reflection', 'Shared Testimonies']
  }, {
    id: 'youth',
    title: 'Ignite Youth Service',
    time: 'Saturday 5:00 PM',
    duration: '2 hours',
    description: 'A dynamic, high-energy service designed for teenagers and young adults. Experience contemporary worship, relevant teaching, fun games, and a chance to build strong friendships with peers who love Jesus.',
    image: 'Energetic youth worship service with contemporary music and lighting',
    features: ['Contemporary Worship', 'Relevant Messages', 'Fun & Games', 'Small Groups']
  }];
  const ministries = [{
    id: 'youth',
    title: 'Youth Ministry',
    description: 'Our youth ministry, "Ignite," is dedicated to empowering the next generation. We create a vibrant, safe, and fun environment where teenagers and young adults can explore their faith, build strong Christian friendships, and learn to live boldly for Christ in today\'s world.',
    image: 'Young people in worship and fellowship activities',
    ageGroup: 'Ages 13-25',
    meetingTime: 'Saturday 5:00 PM',
    activities: ['Worship Nights', 'Bible Studies', 'Outreach Events', 'Annual Camps']
  }, {
    id: 'women',
    title: 'Women of Virtue',
    description: 'A dynamic community where women of all ages connect, grow, and serve together. We are dedicated to building strong, godly character through in-depth Bible study, heartfelt prayer, and authentic fellowship, empowering each other to shine for Christ.',
    image: 'Women in prayer circle and fellowship gathering',
    ageGroup: 'All Ages',
    meetingTime: 'Tuesday 10:00 AM',
    activities: ['Bible Study', 'Prayer Groups', 'Mentorship Programs', 'Community Outreach']
  }, {
    id: 'men',
    title: "Men's Fellowship",
    description: 'We are committed to building strong men of God who lead with integrity. Our fellowship provides a space for men to find accountability, study God\'s Word, and forge genuine friendships, equipping them to be better husbands, fathers, and leaders.',
    image: 'Men studying Bible together and in fellowship',
    ageGroup: 'All Ages',
    meetingTime: 'Saturday 7:00 AM',
    activities: ['Bible Study', 'Accountability Groups', 'Service Projects', 'Breakfast Meetings']
  }, {
    id: 'children',
    title: "Children's Ministry",
    description: 'Our "Kingdom Kids" program makes learning about Jesus an exciting adventure! We provide a safe, nurturing, and fun-filled environment where children can discover God\'s love through age-appropriate Bible stories, worship, crafts, and games.',
    image: 'Children in Sunday school with colorful activities and teaching',
    ageGroup: 'Ages 3-12',
    meetingTime: 'Sunday 10:00 AM',
    activities: ['Sunday School', 'Worship & Crafts', 'Fun Games', 'Bible Stories']
  }, {
    id: 'prayer-ministry',
    title: 'Intercessory Prayer',
    description: 'The powerhouse of our church. This dedicated team of prayer warriors stands in the gap, consistently praying for the needs of our church family, our community, and the nations. Join us as we seek God\'s face and believe for breakthrough.',
    image: 'Prayer warriors in dedicated prayer time',
    ageGroup: 'All Ages',
    meetingTime: 'Daily 6:00 AM & Friday 6PM',
    activities: ['Morning Prayer Calls', 'Fasting Chains', 'Prayer Walks', 'Urgent Intercession']
  }, {
    id: 'missions',
    title: 'Missions & Outreach',
    description: 'Fulfilling the Great Commission is at the heart of our church. Our missions ministry is passionate about sharing the Gospel and demonstrating God\'s love through practical service, both in our local community and through partnerships around the world.',
    image: 'Mission team serving in community and overseas',
    ageGroup: 'All Ages',
    meetingTime: 'Monthly Planning Meetings',
    activities: ['Local Outreach Events', 'Global Mission Trips', 'Partner Support', 'Missions Training']
  }];
  return <>
      <Helmet>
        <title>Services & Ministries - Living Bread Christian Centre</title>
        <meta name="description" content="Join our worship services and ministry groups at Living Bread Christian Centre. Sunday worship, Bible study, youth ministry, and more opportunities to grow in faith." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" alt="Church service with congregation worshipping" src="https://images.unsplash.com/photo-1538599678189-cfd78b6e4444" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-amber-700/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow">
              Services & Ministries
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Find your place in God's family through our worship services and ministry opportunities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Weekly Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold church-text-gradient mb-4">
              Weekly Services
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us throughout the week for worship, learning, and fellowship
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => <motion.div key={service.id} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                <div className="h-48 bg-gradient-to-br from-blue-900 to-amber-700 flex items-center justify-center">
                  <img className="w-full h-full object-cover" alt={service.title} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-blue-900" />
                      <span>{service.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-blue-900" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, idx) => <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>)}
                  </div>
                  
                  <Button onClick={() => toast({
                title: `📅 ${service.title}`,
                description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
              })} className="w-full bg-gradient-to-r from-blue-900 to-amber-700 text-white hover:shadow-lg">
                    Learn More
                  </Button>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Ministry Groups */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold church-text-gradient mb-4">
              Our Ministries
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join one of our vibrant ministry groups and grow in faith together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => <motion.div key={ministry.id} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className="ministry-card rounded-2xl overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-blue-900 to-amber-700 flex items-center justify-center">
                  <img className="w-full h-full object-cover" alt={ministry.title} src="https://images.unsplash.com/photo-1564921074016-dc83ab4ac783" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{ministry.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">{ministry.description}</p>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-blue-900" />
                      <span className="text-gray-700">{ministry.ageGroup}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-blue-900" />
                      <span className="text-gray-700">{ministry.meetingTime}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-gray-800 block mb-2">Activities:</span>
                    <div className="flex flex-wrap gap-1">
                      {ministry.activities.map((activity, idx) => <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {activity}
                        </span>)}
                    </div>
                  </div>
                  
                  <Button onClick={() => toast({
                title: `👥 ${ministry.title}`,
                description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
              })} variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-20 church-gradient">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">Special Events</h2>
            <div className="max-w-4xl mx-auto">
              <div className="glass-effect rounded-2xl p-8 md:p-12">
                <p className="text-lg md:text-xl leading-relaxed mb-6 text-black">
                  Throughout the year, we host special events that bring our community together 
                  and create lasting memories. From revival meetings to community outreach, 
                  holiday celebrations to mission conferences.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {[{
                  title: 'Revival Meetings',
                  description: 'Powerful times of spiritual renewal'
                }, {
                  title: 'Community Outreach',
                  description: 'Serving our local community'
                }, {
                  title: 'Holiday Celebrations',
                  description: 'Celebrating God\'s goodness together'
                }].map((event, index) => <div key={index} className="text-center">
                      <h3 className="text-xl font-bold mb-2 text-black">{event.title}</h3>
                      <p className="text-gray-800">{event.description}</p>
                    </div>)}
                </div>
                <Button onClick={() => toast({
                title: "📅 Events Calendar",
                description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
              })} className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-semibold">
                  View Events Calendar
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>;
};
export default Services;