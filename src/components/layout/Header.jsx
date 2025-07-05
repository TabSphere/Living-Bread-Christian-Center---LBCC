
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cross, Menu, Church } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Media', path: '/media' },
    { title: 'Connect', path: '/connect' },
    { title: 'Blog', path: '/blog' },
    { title: 'Join Us', path: '/join-us' },
  ];

  const mobileMenuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { x: '100%', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <NavLink to="/" className="flex items-center space-x-2">
              <Church className="h-8 w-8 text-deep-blue" />
              <span className="font-bold text-xl text-deep-blue">Living Bread CC</span>
            </NavLink>
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-base font-medium transition-colors hover:text-rich-brown ${isActive ? 'text-rich-brown' : 'text-deep-blue'}`
                  }
                >
                  {link.title}
                </NavLink>
              ))}
              <NavLink to="/give">
                <Button className="bg-rich-brown hover:bg-rich-brown/90 text-white">
                  Give Online
                </Button>
              </NavLink>
            </nav>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-deep-blue">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-white p-6 md:hidden"
          >
            <div className="flex justify-between items-center mb-8">
                <NavLink to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <Church className="h-8 w-8 text-deep-blue" />
                    <span className="font-bold text-xl text-deep-blue">Living Bread CC</span>
                </NavLink>
              <button onClick={() => setIsOpen(false)} className="text-deep-blue">
                <Cross size={28} />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl font-medium text-center transition-colors hover:text-rich-brown ${isActive ? 'text-rich-brown' : 'text-deep-blue'}`
                  }
                >
                  {link.title}
                </NavLink>
              ))}
              <NavLink to="/give" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-rich-brown hover:bg-rich-brown/90 text-white text-xl py-6">
                  Give Online
                </Button>
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
  