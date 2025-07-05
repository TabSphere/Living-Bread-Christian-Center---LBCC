import React from 'react';
import { Play, Calendar, Download, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const tabs = [
  { id: 'sermons', label: 'Sermons', icon: Play },
  { id: 'photos', label: 'Photos', icon: Calendar },
  { id: 'podcasts', label: 'Podcasts', icon: Download }
];

const MediaTabs = ({ activeTab, setActiveTab, searchTerm, setSearchTerm }) => {
  return (
    <>
      <div className="flex justify-center mb-12">
        <div className="bg-white rounded-full p-2 shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-900 to-amber-700 text-white'
                  : 'text-gray-600 hover:text-blue-900'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto mb-12">
        <div className="flex space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search media..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <Button
            onClick={() => toast({
              title: "🔍 Filter",
              description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
            })}
            variant="outline"
            className="px-6 py-3"
          >
            <Filter className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default MediaTabs;