'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScaleIcon } from '@heroicons/react/24/outline';

export default function Copyright() {
  // Metadata for the page
  const metadata = {
    title: 'Copyright Information | Tomorrow Foundation',
    description: 'Copyright information for Tomorrow Foundation website and materials.',
  };

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="bg-navy-900 py-20 mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <ScaleIcon className="h-16 w-16 text-gold-400 mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-white font-serif">Copyright Information</h1>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl">
              Understanding the copyright and usage rights for Tomorrow Foundation materials
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

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Copyright Ownership</h2>
            
            <p className="mb-6">
              All content on the Tomorrow Foundation website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of Tomorrow Foundation or its content suppliers and is protected by United States and international copyright laws.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Use of Website Materials</h2>
            
            <p className="mb-4">
              The materials on this website are provided for lawful purposes only. Users are permitted to:
            </p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>View, download, and print materials for personal, non-commercial use</li>
              <li>Share links to our website and content</li>
              <li>Quote limited portions of our materials with proper attribution</li>
            </ul>
            
            <p className="mb-6">
              Any other use, including reproduction, modification, distribution, transmission, republication, display, or performance of the content on this website without prior written consent from Tomorrow Foundation is strictly prohibited.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Educational Materials</h2>
            
            <p className="mb-6">
              Certain educational materials on our website may be available for broader use by educators, students, and community leaders. These materials will be clearly marked with specific usage permissions. Unless explicitly stated, all educational materials are subject to the same copyright restrictions as other website content.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Third-Party Materials</h2>
            
            <p className="mb-6">
              Some content on our website may be owned by third parties and used by Tomorrow Foundation under license. These materials remain the property of their respective owners and may be subject to additional restrictions beyond those stated here.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Image Credits</h2>
            
            <p className="mb-6">
              We make every effort to ensure that all images used on our website are properly licensed or owned by Tomorrow Foundation. Where required, we provide attribution to image creators. If you believe an image has been used improperly, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Fair Use</h2>
            
            <p className="mb-6">
              Nothing in this copyright policy is intended to restrict rights of fair use or fair dealing under applicable copyright law. Fair use includes using our materials for non-commercial educational purposes, commentary, criticism, news reporting, research, and scholarship.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Permissions Requests</h2>
            
            <p className="mb-6">
              If you wish to use our materials in a manner not covered by this policy, please submit a written request detailing:
            </p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>The specific content you wish to use</li>
              <li>How and where the content will be used</li>
              <li>Your contact information</li>
            </ul>
            
            <p className="mb-6">
              We will review your request and respond in a timely manner.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Copyright Infringement</h2>
            
            <p className="mb-6">
              If you believe your copyrighted work has been used on our website in a way that constitutes copyright infringement, please provide our copyright agent with the following information in writing:
            </p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>An electronic or physical signature of the person authorized to act on behalf of the copyright owner</li>
              <li>A description of the copyrighted work that you claim has been infringed</li>
              <li>The URL where the allegedly infringing material is located on our website</li>
              <li>Your contact information</li>
              <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner</li>
              <li>A statement by you that the information in your notice is accurate and that you are the copyright owner or authorized to act on their behalf</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Contact Information</h2>
            
            <p className="mb-6">
              For copyright inquiries or permissions requests, please contact us at:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="mb-1">
                The Tomorrow Foundation<br />
                Copyright Department<br />
                123 Constitution Ave<br />
                Washington, DC 20001
              </p>
              <p className="mb-1">Email: copyright@tomorrowfoundation.org</p>
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