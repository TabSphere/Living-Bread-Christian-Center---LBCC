
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { CheckCircle } from 'lucide-react';

const CounselingForm = () => {
  const [formData, setFormData] = useState({
    counselingName: '',
    counselingEmail: '',
    counselingPhone: '',
    counselingType: '',
    preferredTime: '',
    urgency: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:lbcc5005@gmail.com?subject=Counseling Request from ${formData.counselingName}&body=Name: ${formData.counselingName}%0D%0AEmail: ${formData.counselingEmail}%0D%0APhone: ${formData.counselingPhone}%0D%0ACounseling Type: ${formData.counselingType}%0D%0APreferred Time: ${formData.preferredTime}%0D%0AUrgency: ${formData.urgency}%0D%0A%0D%0ADescription:%0D%0A${formData.description}`;
    window.location.href = mailtoLink;
    toast({
      title: "✅ Counseling Request Submitted",
      description: "We're here for you. Please complete sending the email in your mail client."
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold church-text-gradient mb-4">Counseling Request</h3>
        <p className="text-gray-600">We're here to provide spiritual guidance and support. All information is confidential.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="counselingName" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
          <input id="counselingName" type="text" name="counselingName" value={formData.counselingName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" required />
        </div>
        <div>
          <label htmlFor="counselingEmail" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
          <input id="counselingEmail" type="email" name="counselingEmail" value={formData.counselingEmail} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" required />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="counselingPhone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
          <input id="counselingPhone" type="tel" name="counselingPhone" value={formData.counselingPhone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" required />
        </div>
        <div>
          <label htmlFor="counselingType" className="block text-sm font-semibold text-gray-700 mb-2">Type of Counseling</label>
          <select id="counselingType" name="counselingType" value={formData.counselingType} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg">
            <option value="">Select type</option>
            <option value="spiritual">Spiritual Guidance</option>
            <option value="marriage">Marriage Counseling</option>
            <option value="family">Family Issues</option>
            <option value="grief">Grief Support</option>
            <option value="addiction">Addiction Recovery</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time</label>
          <select id="preferredTime" name="preferredTime" value={formData.preferredTime} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg">
            <option value="">Select time</option>
            <option value="morning">Morning (9AM-12PM)</option>
            <option value="afternoon">Afternoon (12PM-5PM)</option>
            <option value="evening">Evening (5PM-8PM)</option>
            <option value="weekend">Weekend</option>
          </select>
        </div>
        <div>
          <label htmlFor="urgency" className="block text-sm font-semibold text-gray-700 mb-2">Urgency Level</label>
          <select id="urgency" name="urgency" value={formData.urgency} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg">
            <option value="">Select urgency</option>
            <option value="low">Low - Within 2 weeks</option>
            <option value="medium">Medium - Within 1 week</option>
            <option value="high">High - Within 2-3 days</option>
            <option value="urgent">Urgent - ASAP</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">Brief Description</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Please provide a brief description..."></textarea>
      </div>

      <Button type="submit" className="w-full bg-gradient-to-r from-blue-900 to-amber-700 text-white py-4 text-lg rounded-lg">
        <CheckCircle className="w-5 h-5 mr-2" />
        Submit Request
      </Button>
    </form>
  );
};

export default CounselingForm;
