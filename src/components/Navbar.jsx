
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/0bc794e9-9fbc-4c92-a0e3-55f07b0e5c35/03f5b24850d184b3715d8fe448b42760.jpg";

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Sunday Worship', path: '/services#worship' },
        { name: 'Bible Study', path: '/services#bible-study' },
        { name: 'Youth Ministry', path: '/services#youth' },
        { name: 'Prayer Meeting', path: '/services#prayer' }
      ]
    },
    { name: 'Media', path: '/media' },
    { name: 'Connect', path: '/connect' },
    { name: 'Blog', path: '/blog' },
    { name: 'Join Us', path: '/join-us' }
  ];

  const announcementText = "🎉 Join us for Sunday Worship at 10:00 AM | Bible Study Wednesday 7:00 PM 🙏";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="announcement-bar text-white py-2 text-sm font-medium overflow-hidden whitespace-nowrap">
        <motion.div
          className="inline-block"
          animate={{
            x: ['0%', '-100%'],
          }}
          transition={{
            ease: 'linear',
            duration: 40,
            repeat: Infinity,
          }}
        >
          <span className="mx-8">{announcementText}</span>
          <span className="mx-8">{announcementText}</span>
          <span className="mx-8">{announcementText}</span>
          <span className="mx-8">{announcementText}</span>
        </motion.div>
      </div>

      <nav className="bg-white/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logoUrl} alt="Living Bread Christian Centre Logo" className="h-14 w-auto" />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-blue-900">Living Bread</h1>
                <p className="text-xs text-amber-700 -mt-1">Christian Centre</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                      location.pathname === item.path
                        ? 'text-blue-900 bg-blue-50 font-semibold'
                        : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-blue-50 transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/prayer-wall"
                className="px-4 py-2 text-blue-900 border border-blue-900 rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-200"
              >
                Prayer Wall
              </Link>
              <Link
                to="/give"
                className="px-4 py-2 bg-gradient-to-r from-blue-900 to-amber-700 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Give Online
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'text-blue-900 bg-blue-50 font-semibold'
                        : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  <Link
                    to="/prayer-wall"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-4 py-3 text-center text-blue-900 border border-blue-900 rounded-lg hover:bg-blue-900 hover:text-white transition-all"
                  >
                    Prayer Wall
                  </Link>
                  <Link
                    to="/give"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-4 py-3 text-center bg-gradient-to-r from-blue-900 to-amber-700 text-white rounded-lg"
                  >
                    Give Online
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
