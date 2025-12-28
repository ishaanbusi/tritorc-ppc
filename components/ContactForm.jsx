"use client";

import { useState, useEffect, useRef } from 'react';
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
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const timersRef = useRef([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendContact(formData);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      setSuccessMessage('Message sent — thank you!');
      const t = setTimeout(() => setSuccessMessage(''), 5000);
      timersRef.current.push(t);
    } catch (err) {
      console.error('sendContact error', err);
      setErrorMessage(err?.message || 'Failed to send message. Please try again later.');
      const t = setTimeout(() => setErrorMessage(''), 6000);
      timersRef.current.push(t);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    return () => {
      try {
        (timersRef.current || []).forEach((t) => clearTimeout(t));
        timersRef.current = [];
      } catch (e) {
        console.warn('Failed clearing contact form timers', e);
      }
    };
  }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Live region for success/error messages */}
      {(successMessage || errorMessage) && (
        <div aria-live="polite">
          {successMessage && (
            <div className="mb-3 px-4 py-2 rounded bg-green-100 text-green-800 text-sm" role="status">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="mb-3 px-4 py-2 rounded bg-red-100 text-red-800 text-sm" role="alert">
              {errorMessage}
            </div>
          )}
        </div>
      )}
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D6312F] focus:ring-2 focus:ring-[#D6312F]/20 outline-none transition-all cursor-text"
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D6312F] focus:ring-2 focus:ring-[#D6312F]/20 outline-none transition-all cursor-text"
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D6312F] focus:ring-2 focus:ring-[#D6312F]/20 outline-none transition-all cursor-text"
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D6312F] focus:ring-2 focus:ring-[#D6312F]/20 outline-none transition-all cursor-text"
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
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D6312F] focus:ring-2 focus:ring-[#D6312F]/20 outline-none transition-all resize-none cursor-text"
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
