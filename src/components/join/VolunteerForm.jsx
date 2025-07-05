
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { CheckCircle } from 'lucide-react';

const volunteerAreas = [
  'Sunday Service Setup', 'Children\'s Church', 'Youth Programs', 'Community Outreach',
  'Food Ministry', 'Transportation', 'Event Planning', 'Administrative Support',
  'Maintenance', 'Security', 'Media/Technology', 'Music Ministry'
];

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    volunteerName: '',
    volunteerEmail: '',
    volunteerPhone: '',
    availability: [],
    skills: '',
    volunteerAreas: [],
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const arrayField = name;
      setFormData(prev => ({
        ...prev,
        [arrayField]: checked
          ? [...(prev[arrayField] || []), value]
          : (prev[arrayField] || []).filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:lbcc5005@gmail.com?subject=Volunteer Application from ${formData.volunteerName}&body=Name: ${formData.volunteerName}%0D%0AEmail: ${formData.volunteerEmail}%0D%0APhone: ${formData.volunteerPhone}%0D%0A%0D%0AAvailability:%0D%0A${formData.availability.join(', ')}%0D%0A%0D%0AVolunteer Areas of Interest:%0D%0A${formData.volunteerAreas.join(', ')}%0D%0A%0D%0ASkills & Experience:%0D%0A${formData.skills}`;
    window.location.href = mailtoLink;
    toast({
      title: "✅ Volunteer Application Submitted!",
      description: "Thank you for your heart to serve! Please complete sending the email in your mail client."
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold church-text-gradient mb-4">Volunteer Application</h3>
        <p className="text-gray-600">Thank you for your heart to serve! Let us know how you'd like to get involved and make a difference.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="volunteerName" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
          <input id="volunteerName" type="text" name="volunteerName" value={formData.volunteerName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" required />
        </div>
        <div>
          <label htmlFor="volunteerEmail" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
          <input id="volunteerEmail" type="email" name="volunteerEmail" value={formData.volunteerEmail} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" required />
        </div>
      </div>

      <div>
        <label htmlFor="volunteerPhone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
        <input id="volunteerPhone" type="tel" name="volunteerPhone" value={formData.volunteerPhone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" required />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-4">Availability</label>
        <div className="grid md:grid-cols-3 gap-3">
          {['Sunday Morning', 'Sunday Evening', 'Wednesday Evening', 'Weekdays', 'Saturdays', 'Special Events'].map((time) => (
            <label key={time} className="flex items-center space-x-2">
              <input type="checkbox" name="availability" value={time} checked={formData.availability.includes(time)} onChange={handleInputChange} className="w-4 h-4 text-blue-500 rounded" />
              <span className="text-sm text-gray-700">{time}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-4">Volunteer Areas of Interest</label>
        <div className="grid md:grid-cols-3 gap-3">
          {volunteerAreas.map((area) => (
            <label key={area} className="flex items-center space-x-2">
              <input type="checkbox" name="volunteerAreas" value={area} checked={formData.volunteerAreas.includes(area)} onChange={handleInputChange} className="w-4 h-4 text-blue-500 rounded" />
              <span className="text-sm text-gray-700">{area}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="skills" className="block text-sm font-semibold text-gray-700 mb-2">Skills & Experience</label>
        <textarea id="skills" name="skills" value={formData.skills} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Tell us about any relevant skills..."></textarea>
      </div>

      <Button type="submit" className="w-full bg-gradient-to-r from-blue-900 to-amber-700 text-white py-4 text-lg rounded-lg">
        <CheckCircle className="w-5 h-5 mr-2" />
        Submit Application
      </Button>
    </form>
  );
};

export default VolunteerForm;
