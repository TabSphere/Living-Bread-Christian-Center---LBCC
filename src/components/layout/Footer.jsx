
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Instagram, Church } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
    const { toast } = useToast();

    const handleSocialClick = () => {
      toast({
        title: "🚧 Feature in Progress",
        description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      });
    };
  
    return (
    <footer className="bg-deep-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <NavLink to="/" className="flex items-center space-x-2">
                <Church className="h-8 w-8 text-white" />
                <span className="font-bold text-xl text-white">Living Bread CC</span>
            </NavLink>
            <p className="text-gray-300">A True Ministry of God – Spreading the Word Globally.</p>
            <div className="flex space-x-4">
              <button onClick={handleSocialClick} className="text-gray-300 hover:text-white transition-colors"><Facebook /></button>
              <button onClick={handleSocialClick} className="text-gray-300 hover:text-white transition-colors"><Twitter /></button>
              <button onClick={handleSocialClick} className="text-gray-300 hover:text-white transition-colors"><Youtube /></button>
              <button onClick={handleSocialClick} className="text-gray-300 hover:text-white transition-colors"><Instagram /></button>
            </div>
          </div>
          <div>
            <p className="font-semibold text-lg mb-4">Quick Links</p>
            <ul className="space-y-2">
              <li><NavLink to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</NavLink></li>
              <li><NavLink to="/services" className="text-gray-300 hover:text-white transition-colors">Services</NavLink></li>
              <li><NavLink to="/media" className="text-gray-300 hover:text-white transition-colors">Media</NavLink></li>
              <li><NavLink to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</NavLink></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-lg mb-4">Get Involved</p>
            <ul className="space-y-2">
              <li><NavLink to="/give" className="text-gray-300 hover:text-white transition-colors">Give Online</NavLink></li>
              <li><NavLink to="/join-us" className="text-gray-300 hover:text-white transition-colors">Become a Member</NavLink></li>
              <li><NavLink to="/connect#prayer" className="text-gray-300 hover:text-white transition-colors">Prayer Request</NavLink></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-lg mb-4">Contact Us</p>
            <p className="text-gray-300">123 Church Street, Faith City, 12345</p>
            <p className="text-gray-300">Email: lbcc5005@gmail.com</p>
            <p className="text-gray-300">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Living Bread Christian Centre. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  