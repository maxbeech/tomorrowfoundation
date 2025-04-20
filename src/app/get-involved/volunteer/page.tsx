'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowPathIcon, UserGroupIcon, CalendarIcon, AcademicCapIcon, ScaleIcon, HomeIcon } from '@heroicons/react/24/outline';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  interests: string[];
  availability: string;
  experience: string;
  heardAbout: string;
}

export default function VolunteerPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    interests: [],
    availability: '',
    experience: '',
    heardAbout: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      if (checked) {
        return { ...prev, interests: [...prev.interests, value] };
      } else {
        return { ...prev, interests: prev.interests.filter((interest) => interest !== value) };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowThankYou(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        interests: [],
        availability: '',
        experience: '',
        heardAbout: '',
      });
    }, 1500);
  };

  // Volunteer opportunity data
  const volunteerOpportunities = [
    {
      title: "Constitutional Education Volunteer",
      description: "Lead educational workshops and presentations about constitutional rights and principles to schools, community groups, and civic organizations.",
      icon: <AcademicCapIcon className="h-6 w-6 text-red-600" />,
      commitmentLevel: "4-8 hours per month",
    },
    {
      title: "Legal Research Assistant",
      description: "Support our legal team by conducting research on constitutional issues, property rights cases, and policy developments that affect rural communities.",
      icon: <ScaleIcon className="h-6 w-6 text-red-600" />,
      commitmentLevel: "6-10 hours per month",
    },
    {
      title: "Rural Community Advocate",
      description: "Engage with rural communities to identify challenges, collect stories, and help coordinate our support initiatives for agricultural areas.",
      icon: <HomeIcon className="h-6 w-6 text-red-600" />,
      commitmentLevel: "4-10 hours per month",
    },
    {
      title: "Events Coordinator",
      description: "Help plan and execute events such as Constitution Day celebrations, community educational forums, and fundraising activities.",
      icon: <CalendarIcon className="h-6 w-6 text-red-600" />,
      commitmentLevel: "Variable based on events",
    },
    {
      title: "Administrative Support",
      description: "Provide essential operational support such as data entry, correspondence management, and office organization for our programs.",
      icon: <UserGroupIcon className="h-6 w-6 text-red-600" />,
      commitmentLevel: "Flexible hours",
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative bg-navy-900 py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/media/Photos/pexels-olly-722014.jpg"
            alt="Volunteer with Tomorrow Foundation"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 to-navy-900/70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
              Volunteer With Us
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Join our team of dedicated volunteers working to defend constitutional rights and support rural communities
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Volunteer Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-navy-900 mb-6 font-serif">How You Can Help</h2>
              <p className="text-gray-600 mb-8">
                Volunteers are the backbone of the Tomorrow Foundation. Your time and talents can make a real difference in our mission to defend constitutional rights and support rural communities across America.
              </p>
              
              <div className="space-y-8 mb-10">
                {volunteerOpportunities.map((opportunity, index) => (
                  <motion.div 
                    key={opportunity.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    className="bg-white rounded-lg shadow-sm border border-gray-100 p-6"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        {opportunity.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-navy-900 mb-2">{opportunity.title}</h3>
                        <p className="text-gray-600 mb-2">{opportunity.description}</p>
                        <div className="flex items-center text-sm text-navy-600">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          Time commitment: {opportunity.commitmentLevel}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-navy-50 rounded-xl p-6 border border-navy-100">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">Volunteer Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Contribute to meaningful work protecting constitutional principles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Develop professional skills and expand your network</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Attend exclusive volunteer appreciation events</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Gain specialized knowledge about constitutional issues</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Reference letters and professional recommendations</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
          
          {/* Volunteer Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className={`${showThankYou ? 'hidden' : 'block'}`}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-navy-900 mb-6 font-serif">Volunteer Application</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md py-2"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md py-2"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md py-2"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md py-2"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location (City, State)*
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md py-2"
                    required
                  />
                </div>
                
                {/* Volunteer Interests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Areas of Interest (Select all that apply)*
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { value: 'constitutional-education', label: 'Constitutional Education' },
                      { value: 'legal-research', label: 'Legal Research & Advocacy' },
                      { value: 'rural-community', label: 'Rural Community Support' },
                      { value: 'events', label: 'Events & Fundraising' },
                      { value: 'administrative', label: 'Administrative Support' },
                      { value: 'communications', label: 'Communications & Marketing' },
                    ].map((interest) => (
                      <div key={interest.value} className="flex items-start">
                        <input
                          type="checkbox"
                          id={interest.value}
                          name="interests"
                          value={interest.value}
                          checked={formData.interests.includes(interest.value)}
                          onChange={handleCheckboxChange}
                          className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded mt-1"
                        />
                        <label htmlFor={interest.value} className="ml-2 block text-sm text-gray-700">
                          {interest.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Availability */}
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                    Availability*
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md py-2"
                    required
                  >
                    <option value="">Select your availability</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weeknights">Weeknights</option>
                    <option value="weekends">Weekends</option>
                    <option value="flexible">Flexible schedule</option>
                  </select>
                </div>
                
                {/* Additional Information */}
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Relevant Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={3}
                    className="focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Tell us about any relevant skills or experience you have"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="heardAbout" className="block text-sm font-medium text-gray-700 mb-1">
                    How did you hear about us?
                  </label>
                  <select
                    id="heardAbout"
                    name="heardAbout"
                    value={formData.heardAbout}
                    onChange={handleInputChange}
                    className="focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md py-2"
                  >
                    <option value="">Select an option</option>
                    <option value="website">Website</option>
                    <option value="social-media">Social Media</option>
                    <option value="event">At an Event</option>
                    <option value="referral">From a Friend/Colleague</option>
                    <option value="news">News/Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-red-600 text-white rounded-md py-3 font-medium transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-700'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <ArrowPathIcon className="animate-spin h-5 w-5 mr-2" />
                      Processing...
                    </span>
                  ) : 'Submit Application'}
                </button>
                
                <p className="text-xs text-gray-500 mt-2">
                  * Required fields. By submitting this form, you agree to be contacted by the Tomorrow Foundation about volunteer opportunities.
                </p>
              </form>
            </div>
          </motion.div>
          
          {/* Thank You Message (shown after form submission) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showThankYou ? 1 : 0, y: showThankYou ? 0 : 20 }}
            transition={{ duration: 0.7 }}
            className={`${showThankYou ? 'block' : 'hidden'}`}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckIcon className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Thank You for Your Interest!</h2>
              <p className="text-gray-600 mb-6">
                We appreciate your interest in volunteering with the Tomorrow Foundation. A member of our team will contact you within 3-5 business days to discuss how your skills and interests align with our current volunteer opportunities.
              </p>
              <p className="text-gray-600 mb-8">
                In the meantime, you might want to explore more about our mission and the impact we're making.
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => setShowThankYou(false)}
                  className="bg-navy-600 text-white rounded-md py-2 px-4 font-medium hover:bg-navy-700 transition-colors w-full"
                >
                  Submit Another Application
                </button>
                <Link
                  href="/focus-areas"
                  className="inline-block text-navy-600 hover:text-navy-800 transition-colors"
                >
                  Learn About Our Focus Areas
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Testimonials Section */}
        <div className="mt-16 pt-10 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 font-serif text-center">Volunteer Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100"
            >
              <blockquote className="italic text-gray-700 mb-4">
                "Volunteering with the Tomorrow Foundation's constitutional education program has been incredibly rewarding. I've been able to share my passion for our founding principles with the next generation."
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-navy-200 flex items-center justify-center mr-3">
                  <span className="text-navy-700 font-semibold">ML</span>
                </div>
                <div>
                  <p className="font-medium text-navy-900">Michael L.</p>
                  <p className="text-sm text-gray-500">Volunteer since 2019</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100"
            >
              <blockquote className="italic text-gray-700 mb-4">
                "As a retired attorney, volunteering with the legal research team has given me an opportunity to continue using my skills for a cause I deeply believe in. The staff is wonderful to work with."
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-navy-200 flex items-center justify-center mr-3">
                  <span className="text-navy-700 font-semibold">SJ</span>
                </div>
                <div>
                  <p className="font-medium text-navy-900">Sarah J.</p>
                  <p className="text-sm text-gray-500">Volunteer since 2021</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100"
            >
              <blockquote className="italic text-gray-700 mb-4">
                "I started volunteering at events, and it's been amazing to see the direct impact our work has on rural communities. The personal connections I've made with the people we serve are priceless."
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-navy-200 flex items-center justify-center mr-3">
                  <span className="text-navy-700 font-semibold">DP</span>
                </div>
                <div>
                  <p className="font-medium text-navy-900">David P.</p>
                  <p className="text-sm text-gray-500">Volunteer since 2020</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ClockIcon component
function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
} 