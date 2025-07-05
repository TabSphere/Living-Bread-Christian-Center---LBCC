import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, Search, Tag, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';

const blogPosts = [
    {
      id: 1,
      title: 'Walking in Faith During Difficult Times',
      excerpt: 'Discover how to maintain your faith and trust in God when life gets challenging. Learn practical steps to strengthen your spiritual walk and find peace in His promises.',
      author: 'Rev. Michael Kusi-gyau',
      date: '2025-07-03',
      readTime: '5 min read',
      category: 'Faith',
      image: 'Person walking on mountain path with sunrise, symbolizing faith journey',
      featured: true,
      content: `
        <p class="mb-4">Life is full of ups and downs, but it's during the challenging seasons that our faith is truly tested. How do we hold on to God's promises when everything around us seems to be falling apart? The key is to shift our focus from our circumstances to our Creator.</p>
        <p class="mb-4">One of the most powerful things we can do is immerse ourselves in Scripture. The Bible is filled with stories of individuals who faced impossible odds but emerged victorious through faith. Think of David facing Goliath, Daniel in the lion's den, or Paul and Silas praising God in prison. Their stories remind us that our God is a God of the impossible.</p>
        <h3 class="text-xl font-bold my-4">Practical Steps to Strengthen Your Walk:</h3>
        <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
          <li><strong>Daily Devotion:</strong> Start each day with prayer and reading the Word. Even 15 minutes can set a positive tone for your entire day.</li>
          <li><strong>Gratitude Journal:</strong> Actively look for things to be thankful for. This practice shifts your mindset from what's wrong to what's right.</li>
          <li><strong>Community:</strong> Don't isolate yourself. Share your struggles with trusted friends from church. We are meant to carry each other's burdens.</li>
          <li><strong>Worship:</strong> Put on worship music and sing to the Lord. Worship lifts our spirits and reminds us of God's sovereignty.</li>
        </ul>
        <p>Remember, faith is not the absence of fear, but the courage to move forward despite it. Trust that God is with you, He is for you, and He has a plan for your life. Hold on to His unchanging hand.</p>
      `
    },
    {
      id: 2,
      title: 'The Power of Community in Christian Life',
      excerpt: 'Explore the importance of fellowship and how being part of a church community can transform your spiritual journey. True growth happens when we walk together.',
      author: 'Rev. Michael Kusi-gyau',
      date: '2025-06-28',
      readTime: '4 min read',
      category: 'Community',
      image: 'Group of diverse people in prayer circle, showing unity and fellowship',
      content: `
        <p class="mb-4">In a world that often promotes individualism, the concept of community can feel counter-cultural. Yet, from the very beginning, God designed us for fellowship. The early church in the book of Acts is a beautiful model of what Christian community looks like: they shared meals, prayed together, and supported one another in every aspect of life.</p>
        <p class="mb-4">Being part of a church community provides accountability, encouragement, and a place to use your spiritual gifts. It's where we learn to love as Christ loves us, practicing patience, forgiveness, and grace with one another. It's not always easy, but it is always worth it.</p>
      `
    },
    {
      id: 3,
      title: 'Understanding God\'s Grace in Daily Life',
      excerpt: 'It is a gift, freely given. Learn how to recognize and receive God\'s unmerited favor in your everyday experiences and relationships.',
      author: 'Rev. Michael Kusi-gyau',
      date: '2025-06-25',
      readTime: '6 min read',
      category: 'Grace',
      image: 'Peaceful morning scene with open Bible and coffee, representing daily devotion',
      content: `
        <p class="mb-4">Grace is one of the most foundational and beautiful concepts in Christianity, yet it can be hard to fully grasp. It's God's unmerited, unearned, and undeserved favor toward us. It's not just for salvation; it's for every single day of our lives.</p>
        <p class="mb-4">We experience God's grace in the beauty of creation, in the kindness of a stranger, in the strength to get through a tough day, and in the forgiveness we receive when we fall short. Learning to see the world through a lens of grace can transform our perspective and fill our hearts with gratitude.</p>
      `
    },
    {
      id: 4,
      title: 'Prayer: Your Direct Line to Heaven',
      excerpt: 'Unlock the transformative power of prayer. Discover how to develop a deeper, more intimate prayer life that connects you directly with the heart of God.',
      author: 'Rev. Michael Kusi-gyau',
      date: '2025-06-21',
      readTime: '7 min read',
      category: 'Prayer',
      image: 'Hands folded in prayer with soft lighting, peaceful and reverent atmosphere',
      content: `
        <p class="mb-4">Prayer is often seen as a formal duty, but it's so much more. It's a conversation with the God who loves you more than you can imagine. It's a place of intimacy, refuge, and power. Through prayer, we align our hearts with God's will and invite His presence into our situations.</p>
        <p class="mb-4">Don't know what to say? Just be honest. God knows your heart. You can use models like the ACTS prayer (Adoration, Confession, Thanksgiving, Supplication) or simply talk to Him as you would a loving Father. The more you pray, the more natural it will become.</p>
      `
    },
    {
      id: 5,
      title: 'Serving Others as Christ Served Us',
      excerpt: 'The ultimate expression of love is service. Learn how to follow Christ\'s example and find profound joy in helping others in your community and beyond.',
      author: 'Rev. Michael Kusi-gyau',
      date: '2025-06-18',
      readTime: '5 min read',
      category: 'Service',
      image: 'Volunteers serving food to community members, showing love in action',
      content: `
        <p class="mb-4">Jesus set the ultimate example of servant leadership. He washed His disciples' feet, healed the sick, and ultimately gave His life for us. He called us to do the same: to serve one another in love.</p>
        <p class="mb-4">Serving isn't just about big, grand gestures. It's in the small, everyday acts of kindness: a listening ear, a helping hand, a word of encouragement. When we serve others, we are the hands and feet of Jesus in the world, and we find a deep, lasting joy that materialism can never offer.</p>
      `
    },
    {
      id: 6,
      title: 'Finding Unshakeable Hope in Scripture',
      excerpt: 'In a world of uncertainty, God\'s Word is our anchor. Explore powerful Bible verses that bring hope and encouragement during life\'s most challenging moments.',
      author: 'Rev. Michael Kusi-gyau',
      date: '2025-06-15',
      readTime: '4 min read',
      category: 'Hope',
      image: 'Open Bible with highlighted verses, warm lighting creating hopeful atmosphere',
      content: `
        <p class="mb-4">Hope is not wishful thinking; it's a confident expectation in the goodness and faithfulness of God. Our hope is anchored in the promises found in Scripture. When the storms of life rage, we can hold fast to verses like Jeremiah 29:11, Romans 8:28, and Isaiah 41:10.</p>
        <p class="mb-4">Make a habit of memorizing verses that speak to your heart. Write them on index cards and place them where you'll see them often. When you fill your mind with God's Word, you build a fortress of hope that cannot be shaken.</p>
      `
    }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'Faith', name: 'Faith', count: blogPosts.filter(post => post.category === 'Faith').length },
    { id: 'Prayer', name: 'Prayer', count: blogPosts.filter(post => post.category === 'Prayer').length },
    { id: 'Community', name: 'Community', count: blogPosts.filter(post => post.category === 'Community').length },
    { id: 'Service', name: 'Service', count: blogPosts.filter(post => post.category === 'Service').length },
    { id: 'Hope', name: 'Hope', count: blogPosts.filter(post => post.category === 'Hope').length },
    { id: 'Grace', name: 'Grace', count: blogPosts.filter(post => post.category === 'Grace').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  const BlogDialog = ({ post, children }) => (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-3xl p-0 bg-white">
        <div className="relative">
          <div className="h-64 bg-gradient-to-br from-blue-900 to-amber-700 flex items-center justify-center rounded-t-lg overflow-hidden">
            <img  
              className="w-full h-full object-cover" 
              alt={post.title}
              src="https://images.unsplash.com/photo-1577510409458-a70f1efcba3d" />
          </div>
          <DialogHeader className="p-6">
            <DialogTitle className="text-3xl font-bold text-gray-900 mb-2">{post.title}</DialogTitle>
            <DialogDescription className="text-sm text-gray-600 flex items-center flex-wrap gap-x-4 gap-y-1">
              <span className="flex items-center space-x-1"><User className="w-4 h-4" /><span>{post.author}</span></span>
              <span className="flex items-center space-x-1"><Calendar className="w-4 h-4" /><span>{new Date(post.date).toLocaleDateString()}</span></span>
              <span className="flex items-center space-x-1"><Clock className="w-4 h-4" /><span>{post.readTime}</span></span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">{post.category}</span>
            </DialogDescription>
          </DialogHeader>
          <div className="px-6 pb-6 text-gray-800 prose max-w-none prose-headings:text-gray-900 prose-strong:text-gray-900" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </DialogContent>
    </Dialog>
  );

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || selectedCategory !== 'all' || searchTerm);


  return (
    <>
      <Helmet>
        <title>Blog & Devotionals - Living Bread Christian Centre</title>
        <meta name="description" content="Read inspiring blog posts and daily devotionals from Living Bread Christian Centre. Find encouragement, biblical insights, and spiritual growth content." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img  
            className="w-full h-full object-cover" 
            alt="Person reading Bible in peaceful setting"
           src="https://images.unsplash.com/photo-1630459314129-6ec8a087fe4a" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-amber-700/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow">
              Blog & Devotionals
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Find encouragement, biblical insights, and inspiration for your spiritual journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-900 to-amber-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'all' && !searchTerm && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="h-64 lg:h-auto bg-gradient-to-br from-blue-900 to-amber-700 flex items-center justify-center">
                    <img  
                      className="w-full h-full object-cover" 
                      alt={featuredPost.title}
                     src="https://storage.googleapis.com/hostinger-horizons-assets-prod/0bc794e9-9fbc-4c92-a0e3-55f07b0e5c35/86a963d4769078d169d7a717a493594f.jpg" />
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-900 to-amber-700 text-white text-xs font-semibold rounded-full">
                        FEATURED
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1"><User className="w-4 h-4" /><span>{featuredPost.author}</span></div>
                        <div className="flex items-center space-x-1"><Calendar className="w-4 h-4" /><span>{new Date(featuredPost.date).toLocaleDateString()}</span></div>
                        <div className="flex items-center space-x-1"><Clock className="w-4 h-4" /><span>{featuredPost.readTime}</span></div>
                      </div>
                    </div>
                    <BlogDialog post={featuredPost}>
                      <Button className="bg-gradient-to-r from-blue-900 to-amber-700 text-white hover:shadow-lg transform hover:scale-105 transition-all">
                        Read Full Article
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </BlogDialog>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold church-text-gradient mb-4">
              Latest Posts
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover fresh insights and encouragement for your spiritual journey
            </p>
          </motion.div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No posts found matching your search criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(p => p.id !== featuredPost.id).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-900 to-amber-700 flex items-center justify-center">
                    <img  
                      className="w-full h-full object-cover" 
                      alt={post.title}
                     src="https://images.unsplash.com/photo-1577510409458-a70f1efcba3d" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1"><User className="w-4 h-4" /><span>{post.author}</span></div>
                      <div className="flex items-center space-x-1"><Calendar className="w-4 h-4" /><span>{new Date(post.date).toLocaleDateString()}</span></div>
                    </div>
                    <BlogDialog post={post}>
                      <Button variant="outline" className="w-full">
                        Read More
                      </Button>
                    </BlogDialog>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 church-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">Stay Inspired</h2>
            <div className="max-w-2xl mx-auto">
              <div className="glass-effect rounded-2xl p-8">
                <Tag className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
                <h3 className="text-2xl font-bold mb-4 text-black">Subscribe to Our Blog</h3>
                <p className="text-lg mb-6 text-gray-800">
                  Get the latest devotionals and inspiring content delivered to your inbox weekly
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
                  />
                  <Button
                    onClick={() => toast({
                      title: "📧 Blog Subscription",
                      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                    })}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-gray-700 mt-4">
                  Join 1,000+ subscribers. No spam, unsubscribe anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
