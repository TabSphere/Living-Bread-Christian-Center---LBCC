
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { CheckCircle } from 'lucide-react';

const ministryInterests = [
  'Worship Team', 'Children\'s Ministry', 'Youth Ministry', 'Ushering',
  'Greeting Team', 'Audio/Visual', 'Prayer Ministry', 'Outreach',
  'Women\'s Ministry', 'Men\'s Ministry', 'Small Groups', 'Missions'
];

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    birthDate: '',
    maritalStatus: '',
    previousChurch: '',
    interests: [],
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:lbcc5005@gmail.com?subject=Membership Application from ${formData.firstName} ${formData.lastName}&body=Name: ${formData.firstName} ${formData.lastName}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AAddress: ${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}%0D%0ABirth Date: ${formData.birthDate}%0D%0AMarital Status: ${formData.maritalStatus}%0D%0APrevious Church: ${formData.previousChurch}%0D%0A%0D%0AMinistry Interests:%0D%0A${formData.interests.join(', ')}`;
    window.location.href = mailtoLink;
    toast({
      title: "✅ Membership Application Submitted!",
      description: "Thank you for your interest! Please complete sending the email in your mail client."
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold church-text-gradient mb-4">Church Membership Application</h3>
        <p className="text-gray-600">We're excited to welcome you into our church family! Please fill out the form below to begin the process.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
          <input id="firstName" type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" required />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
          <input id="lastName" type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" required />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
          <input id="email" type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" required />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
          <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" required />
        </div>
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
        <input id="address" type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">City</label>
          <input id="city" type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">State</label>
          <input id="state" type="text" name="state" value={formData.state} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700 mb-2">Zip Code</label>
          <input id="zipCode" type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="birthDate" className="block text-sm font-semibold text-gray-700 mb-2">Birth Date</label>
          <input id="birthDate" type="date" name="birthDate" value={formData.birthDate} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label htmlFor="maritalStatus" className="block text-sm font-semibold text-gray-700 mb-2">Marital Status</label>
          <select id="maritalStatus" name="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg">
            <option value="">Select status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="previousChurch" className="block text-sm font-semibold text-gray-700 mb-2">Previous Church (if any)</label>
        <input id="previousChurch" type="text" name="previousChurch" value={formData.previousChurch} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-4">Ministry Interests</label>
        <div className="grid md:grid-cols-3 gap-3">
          {ministryInterests.map((interest) => (
            <label key={interest} className="flex items-center space-x-2">
              <input type="checkbox" name="interests" value={interest} checked={formData.interests.includes(interest)} onChange={handleInputChange} className="w-4 h-4 text-blue-500 rounded focus:ring-blue-500" />
              <span className="text-sm text-gray-700">{interest}</span>
            </label>
          ))}
        </div>
      </div>

      <Button type="submit" className="w-full bg-gradient-to-r from-blue-900 to-amber-700 text-white py-4 text-lg rounded-lg">
        <CheckCircle className="w-5 h-5 mr-2" />
        Submit Application
      </Button>
    </form>
  );
};

export default MembershipForm;
