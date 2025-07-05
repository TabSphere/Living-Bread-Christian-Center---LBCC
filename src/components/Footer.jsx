import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Youtube, Instagram, Twitter, Church, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Media', path: '/media' },
    { name: 'Connect', path: '/connect' },
    { name: 'Give', path: '/give' },
    { name: 'Blog', path: '/blog' }
  ];

  const ministryLinks = [
    { name: 'Youth Ministry', path: '/services' },
    { name: 'Women of Virtue', path: '/services' },
    { name: "Men's Fellowship", path: '/services' },
    { name: 'Intercessory Prayer', path: '/services' },
    { name: "Children's Ministry", path: '/services' },
    { name: 'Missions', path: '/services' }
  ];

  const serviceTimes = [
    { name: 'Sunday Worship', time: '10:00 AM' },
    { name: 'Bible Study', time: 'Wednesday 7:00 PM' },
    { name: 'Prayer Meeting', time: 'Friday 6:00 PM' },
    { name: 'Youth Service', time: 'Saturday 5:00 PM' }
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="bg-white p-2 rounded-md">
                <Church className="h-6 w-6 text-blue-900" />
              </div>
              <span className="text-2xl font-bold">Living Bread<br/>Christian Centre</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-sm">
              A True Ministry of God spreading His word globally through authentic worship, biblical teaching, and compassionate service.
            </p>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span>London, United Kingdom</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span>07956 487477</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span>lbcc5005@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Ministries</h4>
            <ul className="space-y-2">
              {ministryLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Times</h4>
            <ul className="space-y-3 text-gray-300">
              {serviceTimes.map(service => (
                <li key={service.name}>
                  <span className="font-semibold block">{service.name}</span>
                  <span>{service.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-blue-950 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Living Bread Christian Centre. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/lbccuk?locale=en_GB" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="text-gray-400 hover:text-white transition-colors" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube className="text-gray-400 hover:text-white transition-colors" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="text-gray-400 hover:text-white transition-colors" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="text-gray-400 hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;