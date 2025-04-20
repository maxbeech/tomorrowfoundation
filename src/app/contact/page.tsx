'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  BuildingOfficeIcon,
  NewspaperIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

// Animation components
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | null;
  fullWidth?: boolean;
  className?: string;
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = null, 
  fullWidth = false,
  className = "",
  duration = 0.5
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Photos/pexels-brett-sayles-1340504.jpg"
            alt="Contact Us"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-navy-900/60" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6">
              Contact Us
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              Connect with the Tomorrow Foundation to learn how we can help defend your constitutional rights
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} direction="up">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-6">
                  <PhoneIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4 font-serif">Call Us</h3>
                <p className="text-gray-600 mb-2">Main Office</p>
                <p className="text-navy-900 font-semibold mb-4">(555) 123-4567</p>
                <p className="text-gray-600 mb-2">Legal Helpline</p>
                <p className="text-navy-900 font-semibold">(555) 987-6543</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy-100 text-navy-600 mb-6">
                  <EnvelopeIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4 font-serif">Email Us</h3>
                <p className="text-gray-600 mb-2">General Inquiries</p>
                <p className="text-navy-900 font-semibold mb-4">info@tomorrowfoundation.org</p>
                <p className="text-gray-600 mb-2">Constitutional Rights Assistance</p>
                <p className="text-navy-900 font-semibold">rights@tomorrowfoundation.org</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 text-gold-600 mb-6">
                  <MapPinIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4 font-serif">Visit Us</h3>
                <p className="text-gray-600 mb-2">National Headquarters</p>
                <p className="text-navy-900 font-semibold">1776 Constitution Ave<br />Washington, DC 20001</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <FadeIn direction="right">
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4 font-serif">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600">
                    Have questions about our work or need assistance with a constitutional rights issue? Fill out the form below and a member of our team will get back to you as soon as possible.
                  </p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="constitutional-rights">Constitutional Rights Assistance</option>
                      <option value="rural-communities">Rural Community Support</option>
                      <option value="educational-resources">Educational Resources</option>
                      <option value="donation">Donation Inquiry</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="subscribe"
                      name="subscribe"
                      type="checkbox"
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <label htmlFor="subscribe" className="ml-2 block text-sm text-gray-700">
                      Subscribe to our newsletter for updates on our work
                    </label>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </FadeIn>

            {/* Office Information */}
            <FadeIn direction="left" delay={0.2}>
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4 font-serif">
                    Our Offices
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Visit us at one of our office locations across the country. Our teams are available to assist you with constitutional rights questions and provide educational resources.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <BuildingOfficeIcon className="h-6 w-6 text-red-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-navy-900">Washington, DC Headquarters</h3>
                          <p className="text-gray-600 mt-1">1776 Constitution Ave, Washington, DC 20001</p>
                          <p className="text-gray-600 mt-1">Phone: (555) 123-4567</p>
                          <p className="text-gray-600 mt-1">Hours: Monday-Friday 9am-5pm ET</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <BuildingOfficeIcon className="h-6 w-6 text-red-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-navy-900">Midwest Regional Office</h3>
                          <p className="text-gray-600 mt-1">4250 Liberty Drive, Des Moines, IA 50309</p>
                          <p className="text-gray-600 mt-1">Phone: (555) 234-5678</p>
                          <p className="text-gray-600 mt-1">Hours: Monday-Friday 8:30am-4:30pm CT</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <BuildingOfficeIcon className="h-6 w-6 text-red-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-navy-900">Western Regional Office</h3>
                          <p className="text-gray-600 mt-1">7700 Freedom Blvd, Suite 320, Phoenix, AZ 85003</p>
                          <p className="text-gray-600 mt-1">Phone: (555) 345-6789</p>
                          <p className="text-gray-600 mt-1">Hours: Monday-Friday 9am-5pm MT</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="relative h-96 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="/media/Photos/washingtondc-4816984_1280.jpg" 
                    alt="Map of Tomorrow Foundation locations"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-navy-900/30 flex items-center justify-center">
                    <div className="bg-white px-4 py-2 rounded-md text-navy-900 font-medium text-sm shadow-lg">
                      Interactive Map Coming Soon
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Specific Contact Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy-900 mb-12 font-serif text-center">
              Specialized Contact Information
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1} direction="up">
              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-red-200 transition-colors duration-300">
                <div className="flex items-start">
                  <div className="bg-navy-100 rounded-full p-3 text-navy-600 mr-4">
                    <NewspaperIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-3 font-serif">
                      Media Inquiries
                    </h3>
                    <p className="text-gray-600 mb-4">
                      For press or media inquiries, interview requests, or press kit materials, please contact our Communications team.
                    </p>
                    <div>
                      <p className="font-medium text-navy-900">media@tomorrowfoundation.org</p>
                      <p className="text-gray-600">(555) 456-7890</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-red-200 transition-colors duration-300">
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-3 text-red-600 mr-4">
                    <UserGroupIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-3 font-serif">
                      Speaker Requests
                    </h3>
                    <p className="text-gray-600 mb-4">
                      To request a Tomorrow Foundation speaker for your event, classroom, or community gathering, please contact our Outreach team.
                    </p>
                    <div>
                      <p className="font-medium text-navy-900">speakers@tomorrowfoundation.org</p>
                      <p className="text-gray-600">(555) 567-8901</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-red-200 transition-colors duration-300">
                <div className="flex items-start">
                  <div className="bg-gold-100 rounded-full p-3 text-gold-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-3 font-serif">
                      Donation Questions
                    </h3>
                    <p className="text-gray-600 mb-4">
                      For questions about making a donation, planned giving, or our donor programs, please contact our Development team.
                    </p>
                    <div>
                      <p className="font-medium text-navy-900">giving@tomorrowfoundation.org</p>
                      <p className="text-gray-600">(555) 678-9012</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-4 font-serif">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Find quick answers to common questions about contacting and working with the Tomorrow Foundation.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm divide-y divide-gray-200">
              <FadeIn delay={0.1}>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
                    How quickly can I expect a response to my inquiry?
                  </h3>
                  <p className="text-gray-600">
                    We strive to respond to all inquiries within 1-2 business days. For urgent constitutional rights matters, please call our Legal Helpline directly at (555) 987-6543.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
                    Do you provide legal representation?
                  </h3>
                  <p className="text-gray-600">
                    The Tomorrow Foundation is not a law firm and does not provide direct legal representation. However, we can connect you with our network of constitutional attorneys and provide educational resources about your rights.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
                    I'm a teacher looking for constitutional education materials. Who should I contact?
                  </h3>
                  <p className="text-gray-600">
                    Please contact our Education team at education@tomorrowfoundation.org. We offer a variety of classroom resources, curriculum materials, and speaker options for schools and educational institutions.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
                    How can I invite the Tomorrow Foundation to speak at my event?
                  </h3>
                  <p className="text-gray-600">
                    Fill out our speaker request form on this page or email speakers@tomorrowfoundation.org with details about your event, including the date, location, expected audience, and topic.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 