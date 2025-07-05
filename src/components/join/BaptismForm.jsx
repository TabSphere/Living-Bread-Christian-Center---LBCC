
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { CheckCircle } from 'lucide-react';

const BaptismForm = () => {
  const [formData, setFormData] = useState({
    baptismName: '',
    baptismEmail: '',
    baptismPhone: '',
    baptismDate: '',
    testimony: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:lbcc5005@gmail.com?subject=Baptism Request from ${formData.baptismName}&body=Name: ${formData.baptismName}%0D%0AEmail: ${formData.baptismEmail}%0D%0APhone: ${formData.baptismPhone}%0D%0APreferred Date: ${formData.baptismDate}%0D%0A%0D%0ATestimony:%0D%0A${formData.testimony}`;
    window.location.href = mailtoLink;
    toast({
      title: "✅ Baptism Request Submitted!",
      description: "We're excited to celebrate with you! Please complete sending the email in your mail client."
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold church-text-gradient mb-4">Baptism Request</h3>
        <p className="text-gray-600">We're excited to celebrate this important step in your faith journey! Fill out this form to get started.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="baptismName" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
          <input id="baptismName" type="text" name="baptismName" value={formData.baptismName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" required />
        </div>
        <div>
          <label htmlFor="baptismEmail" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
          <input id="baptismEmail" type="email" name="baptismEmail" value={formData.baptismEmail} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" required />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="baptismPhone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
          <input id="baptismPhone" type="tel" name="baptismPhone" value={formData.baptismPhone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" required />
        </div>
        <div>
          <label htmlFor="baptismDate" className="block text-sm font-semibold text-gray-700 mb-2">Preferred Baptism Date</label>
          <input id="baptismDate" type="date" name="baptismDate" value={formData.baptismDate} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        </div>
      </div>

      <div>
        <label htmlFor="testimony" className="block text-sm font-semibold text-gray-700 mb-2">Your Testimony</label>
        <textarea id="testimony" name="testimony" value={formData.testimony} onChange={handleInputChange} rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Please share your testimony of faith..."></textarea>
      </div>

      <Button type="submit" className="w-full bg-gradient-to-r from-blue-900 to-amber-700 text-white py-4 text-lg rounded-lg">
        <CheckCircle className="w-5 h-5 mr-2" />
        Submit Request
      </Button>
    </form>
  );
};

export default BaptismForm;
