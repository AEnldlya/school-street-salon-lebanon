'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Mail, ArrowRight, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <main className="min-h-screen bg-[#FDFCFA] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-[#8FA68E] hover:text-[#6B826A] transition-colors mb-8 font-body">
          <ArrowRight size={16} className="rotate-180" />
          Back to Home
        </Link>

        <div className="text-center mb-16">
          <span className="block font-body text-sm text-[#8FA68E] tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#2C2C2C] mb-6">
            Contact Us
          </h1>
          <p className="font-body text-xl text-[#4A4A4A] max-w-2xl mx-auto">
            Ready to book an appointment? Have questions? We would love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[#F7F5F0] rounded-3xl p-8">
              <h2 className="font-display text-2xl text-[#2C2C2C] mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <a 
                  href="tel:6037279377"
                  className="flex items-start gap-4 p-4 bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#8FA68E]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#8FA68E]" />
                  </div>
                  <div>
                    <h3 className="font-body font-medium text-[#2C2C2C] mb-1">Phone</h3>
                    <p className="font-body text-lg text-[#8FA68E]">(603) 727-9377</p>
                    <p className="font-body text-sm text-[#4A4A4A]/60 mt-1">
                      Call or text to book
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-[#8FA68E]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#8FA68E]" />
                  </div>
                  <div>
                    <h3 className="font-body font-medium text-[#2C2C2C] mb-1">Location</h3>
                    <p className="font-body text-[#4A4A4A]">
                      1 School Street<br />
                      Lebanon, NH 03766
                    </p>
                    <p className="font-body text-sm text-[#4A4A4A]/60 mt-1">
                      In The Village House
                    </p>
                  </div>
                </div>

                <a 
                  href="https://www.facebook.com/schoolstreetsalon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#8FA68E]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#8FA68E]" />
                  </div>
                  <div>
                    <h3 className="font-body font-medium text-[#2C2C2C] mb-1">Facebook</h3>
                    <p className="font-body text-[#4A4A4A]">@schoolstreetsalon</p>
                    <p className="font-body text-sm text-[#4A4A4A]/60 mt-1">
                      Message us on Facebook
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-[#8FA68E]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#8FA68E]" />
                  </div>
                  <div>
                    <h3 className="font-body font-medium text-[#2C2C2C] mb-1">Hours</h3>
                    <p className="font-body text-[#4A4A4A]">
                      By Appointment<br />
                      Call to Schedule
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-[#8FA68E] rounded-3xl p-8 text-center text-white">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-display text-2xl mb-2">Find Us</h3>
              <p className="font-body mb-4">1 School Street, Lebanon, NH</p>
              <a 
                href="https://maps.google.com/?q=1+School+St+Lebanon+NH+03766"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#8FA68E] font-body font-medium rounded-full hover:bg-[#2C2C2C] hover:text-white transition-all duration-300"
              >
                Open in Google Maps
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <h2 className="font-display text-2xl text-[#2C2C2C] mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-body text-sm text-[#4A4A4A] mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-[#F7F5F0] rounded-xl border border-transparent focus:border-[#8FA68E] focus:outline-none font-body transition-colors"
                  placeholder="Jane Doe"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-sm text-[#4A4A4A] mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-[#F7F5F0] rounded-xl border border-transparent focus:border-[#8FA68E] focus:outline-none font-body transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-[#4A4A4A] mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-[#F7F5F0] rounded-xl border border-transparent focus:border-[#8FA68E] focus:outline-none font-body transition-colors"
                    placeholder="(603) 555-0123"
                  />
                </div>
              </div>

              <div>
                <label className="block font-body text-sm text-[#4A4A4A] mb-2">Service Interested In</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 bg-[#F7F5F0] rounded-xl border border-transparent focus:border-[#8FA68E] focus:outline-none font-body transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="haircut">Haircut</option>
                  <option value="color">Color</option>
                  <option value="highlights">Highlights</option>
                  <option value="balayage">Balayage</option>
                  <option value="styling">Styling</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-body text-sm text-[#4A4A4A] mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#F7F5F0] rounded-xl border border-transparent focus:border-[#8FA68E] focus:outline-none font-body transition-colors resize-none"
                  placeholder="Tell us about your hair goals..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full btn-luxury justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-white py-16 mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="font-display text-2xl mb-4">
            School Street <span className="text-[#8FA68E]">Salon</span>
          </div>
          <p className="font-body text-white/60">
            1 School St, Lebanon, NH | (603) 727-9377
          </p>
        </div>
      </footer>
    </main>
  );
}
