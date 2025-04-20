'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

export default function TermsOfService() {
  // Metadata for the page
  const metadata = {
    title: 'Terms of Service | Tomorrow Foundation',
    description: 'Terms of Service for Tomorrow Foundation.',
  };

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="bg-navy-900 py-20 mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <DocumentTextIcon className="h-16 w-16 text-gold-400 mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-white font-serif">Terms of Service</h1>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl">
              Please read these terms carefully before using our website and services
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

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Agreement to Terms</h2>
            
            <p className="mb-6">
              By accessing or using the Tomorrow Foundation website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Description of Services</h2>
            
            <p className="mb-6">
              Tomorrow Foundation provides information and resources about our mission, programs, and initiatives. We may offer ways to engage with our organization, including donation opportunities, newsletter subscriptions, educational materials, and other related services.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Privacy Policy</h2>
            
            <p className="mb-6">
              Your use of Tomorrow Foundation services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding your personal information.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">User Accounts</h2>
            
            <p className="mb-6">
              Some features of our website may require registration. You agree to provide accurate and complete information when creating an account and to update your information to keep it accurate and current. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Intellectual Property</h2>
            
            <p className="mb-6">
              The content on our website, including text, graphics, logos, images, and software, are owned by Tomorrow Foundation and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, display, or create derivative works of our content without our express written permission.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Limitation of Liability</h2>
            
            <p className="mb-6">
              Tomorrow Foundation shall not be liable for any direct, indirect, incidental, special, or consequential damages that result from the use of, or the inability to use, the services or materials on our website. We do not warrant that our website will be uninterrupted or error-free.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Governing Law</h2>
            
            <p className="mb-6">
              These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Tomorrow Foundation operates, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Changes to Terms</h2>
            
            <p className="mb-6">
              Tomorrow Foundation reserves the right to modify these terms at any time. We will provide notice of significant changes by updating the "Last Updated" date at the top of this page. Your continued use of the website following the posting of changes constitutes your acceptance of those changes.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Termination</h2>
            
            <p className="mb-6">
              We may terminate or suspend your access to our website and services immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms of Service.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Donations</h2>
            
            <p className="mb-6">
              Donations made to Tomorrow Foundation are voluntary and non-refundable. We will use donations to support our mission and programs as described on our website. Tax receipts will be provided in accordance with applicable laws.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Contact Information</h2>
            
            <p className="mb-6">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="mb-1">
                The Tomorrow Foundation<br />
                123 Constitution Ave<br />
                Washington, DC 20001
              </p>
              <p className="mb-1">Email: legal@tomorrowfoundation.org</p>
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