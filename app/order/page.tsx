
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';

export default function Order() {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    area: '',
    location: '',
    timeline: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        product: '',
        area: '',
        location: '',
        timeline: '',
        budget: '',
        message: ''
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('orderTitle')}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {t('orderSubtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Order Form */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <div className="bg-gray-700/50 p-8 rounded-lg backdrop-blur-sm">
                  <h2 className="text-3xl font-bold text-white mb-8">
                    {t('projectDetails')}
                  </h2>
                  
                  <form id="order-form" onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 text-sm"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 text-sm"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 text-sm"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 text-sm"
                          placeholder="Enter company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Product Type *
                        </label>
                        <div className="relative">
                          <select
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white text-sm appearance-none pr-8"
                          >
                            <option value="">Select product type</option>
                            <option value="concrete-floors">Concrete Floors</option>
                            <option value="topping-system">Topping System</option>
                            <option value="epoxy-floors">Epoxy Floors</option>
                            <option value="polyurethane-floors">Polyurethane Floors</option>
                            <option value="polyurea-coating">Polyurea Coating</option>
                          </select>
                          <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center pointer-events-none"></i>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Area (m²) *
                        </label>
                        <input
                          type="number"
                          name="area"
                          value={formData.area}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 text-sm"
                          placeholder="Enter area in square meters"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Location *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 text-sm"
                        placeholder="Enter project location"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Timeline
                        </label>
                        <div className="relative">
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white text-sm appearance-none pr-8"
                          >
                            <option value="">Select timeline</option>
                            <option value="urgent">Urgent (1-2 weeks)</option>
                            <option value="normal">Normal (1 month)</option>
                            <option value="flexible">Flexible (2-3 months)</option>
                          </select>
                          <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center pointer-events-none"></i>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Budget Range
                        </label>
                        <div className="relative">
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white text-sm appearance-none pr-8"
                          >
                            <option value="">Select budget range</option>
                            <option value="under-50k">Under $50,000</option>
                            <option value="50k-100k">$50,000 - $100,000</option>
                            <option value="100k-250k">$100,000 - $250,000</option>
                            <option value="over-250k">Over $250,000</option>
                          </select>
                          <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center pointer-events-none"></i>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Additional Information
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        maxLength={500}
                        className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 text-sm resize-none"
                        placeholder="Tell us more about your project requirements..."
                      />
                      <div className="text-right text-sm text-gray-400 mt-1">
                        {formData.message.length}/500
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {isSubmitting ? 'Submitting...' : t('submitRequest')}
                    </button>

                    {submitStatus === 'success' && (
                      <div className="bg-green-600/20 border border-green-500 text-green-300 px-4 py-3 rounded-lg">
                        <p className="font-medium">Request submitted successfully!</p>
                        <p className="text-sm">We'll contact you within 24 hours.</p>
                      </div>
                    )}
                  </form>
                </div>

                {/* Contact Info */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-8">
                    {t('quickContact')}
                  </h2>
                  
                  <div className="bg-gray-700/50 rounded-lg p-6 mb-8 backdrop-blur-sm">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <i className="ri-phone-line text-orange-500 w-6 h-6 flex items-center justify-center mr-4"></i>
                        <div>
                          <p className="font-medium text-white">Phone</p>
                          <p className="text-gray-300">+7 (495) 123-45-67</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <i className="ri-mail-line text-orange-500 w-6 h-6 flex items-center justify-center mr-4"></i>
                        <div>
                          <p className="font-medium text-white">Email</p>
                          <p className="text-gray-300">info@floorpro.ru</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <i className="ri-map-pin-line text-orange-500 w-6 h-6 flex items-center justify-center mr-4"></i>
                        <div>
                          <p className="font-medium text-white">Address</p>
                          <p className="text-gray-300">Moscow, Promyshlennaya St., 15</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-600/20 rounded-lg p-6 mb-8 border border-green-500">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      {t('contactViaWhatsApp')}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      For immediate assistance, contact us through WhatsApp
                    </p>
                    <a
                      href="https://wa.me/79123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap inline-flex items-center"
                    >
                      <i className="ri-whatsapp-line w-5 h-5 flex items-center justify-center mr-2"></i>
                      Chat on WhatsApp
                    </a>
                  </div>

                  <div className="bg-gray-700/50 rounded-lg p-6 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Why Choose Us?
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <i className="ri-check-line text-orange-500 w-5 h-5 flex items-center justify-center mr-2 mt-0.5"></i>
                        Free consultation and site visit
                      </li>
                      <li className="flex items-start">
                        <i className="ri-check-line text-orange-500 w-5 h-5 flex items-center justify-center mr-2 mt-0.5"></i>
                        Competitive pricing
                      </li>
                      <li className="flex items-start">
                        <i className="ri-check-line text-orange-500 w-5 h-5 flex items-center justify-center mr-2 mt-0.5"></i>
                        Quality guarantee
                      </li>
                      <li className="flex items-start">
                        <i className="ri-check-line text-orange-500 w-5 h-5 flex items-center justify-center mr-2 mt-0.5"></i>
                        Professional installation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
