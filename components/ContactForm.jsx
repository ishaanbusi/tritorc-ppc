"use client";

import { useState } from 'react';
import { sendContact } from '../lib/api';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendContact(formData);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      alert('Message sent — thank you!');
    } catch (err) {
      console.error('sendContact error', err);
      alert('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D6312F] focus:ring-2 focus:ring-[#D6312F]/20 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D6312F] focus:ring-2 focus:ring-[#D6312F]/20 outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D6312F] focus:ring-2 focus:ring-[#D6312F]/20 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D6312F] focus:ring-2 focus:ring-[#D6312F]/20 outline-none transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D6312F] focus:ring-2 focus:ring-[#D6312F]/20 outline-none transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full px-8 py-4 bg-[#D6312F] text-white rounded-lg font-semibold hover:bg-red-700 transition-all hover:scale-105 shadow-lg disabled:opacity-60"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
