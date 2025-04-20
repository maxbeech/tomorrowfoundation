'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function PrivacyPolicy() {
  // Metadata for the page
  const metadata = {
    title: 'Privacy Policy | Tomorrow Foundation',
    description: 'Privacy Policy for Tomorrow Foundation. Learn how we collect, use, and protect your personal information.',
  };

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="bg-navy-900 py-20 mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <ShieldCheckIcon className="h-16 w-16 text-gold-400 mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-white font-serif">Privacy Policy</h1>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl">
              How the Tomorrow Foundation collects, uses, and protects your personal information
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-sm text-gray-500 mb-0">
                <strong>Last Updated:</strong> July 1, 2024
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Introduction</h2>
            
            <p className="mb-6">
              The Tomorrow Foundation ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
            </p>
            
            <p className="mb-6">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Information We Collect</h2>
            
            <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>Make a donation</li>
              <li>Register for an account</li>
              <li>Sign up for our newsletter</li>
              <li>Participate in our initiatives</li>
              <li>Complete a form on our website</li>
              <li>Contact us directly</li>
            </ul>
            
            <p className="mb-6">This information may include your name, email address, postal address, phone number, and payment information.</p>
            
            <p className="mb-6">We may also automatically collect certain information about your device, including your IP address, browser type, referring/exit pages, and operating system.</p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">How We Use Your Information</h2>
            
            <p className="mb-4">We may use the information we collect for various purposes, including to:</p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>Process donations and transactions</li>
              <li>Send you information about our programs, events, and initiatives</li>
              <li>Respond to your inquiries and provide customer service</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraudulent transactions and monitor against theft</li>
              <li>Administer promotions, surveys, or other site features</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Information Sharing</h2>
            
            <p className="mb-4">We may share your information with third parties in limited circumstances, including:</p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>With service providers who perform services on our behalf</li>
              <li>When required by law or to respond to legal process</li>
              <li>To protect our rights, privacy, safety, or property, or that of our users or others</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
            </ul>
            
            <p className="mb-6">We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties for marketing purposes.</p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Cookies and Tracking Technologies</h2>
            
            <p className="mb-6">
              We may use cookies, web beacons, and similar technologies to track activity on our website and to enhance your experience. You can set your browser to refuse all or some browser cookies, but this may limit your ability to use certain features of our website.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Data Security</h2>
            
            <p className="mb-6">
              We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Your Rights and Choices</h2>
            
            <p className="mb-6">
              You may opt-out of receiving communications from us by following the unsubscribe instructions included in each email or by contacting us directly. You may also request access to, correction of, or deletion of your personal information, subject to certain limitations.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Children's Privacy</h2>
            
            <p className="mb-6">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Changes to This Privacy Policy</h2>
            
            <p className="mb-6">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Contact Us</h2>
            
            <p className="mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="mb-1">
                The Tomorrow Foundation<br />
                123 Constitution Ave<br />
                Washington, DC 20001
              </p>
              <p className="mb-1">Email: privacy@tomorrowfoundation.org</p>
              <p className="mb-0">Phone: (555) 123-4567</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/"
            className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 