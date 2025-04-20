'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
  };

  const footerAnimationDelayed = (delay: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  });

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimation}
          >
            <h3 className="text-xl font-serif font-medium mb-6">Tomorrow Foundation</h3>
            <p className="text-gray-300 mb-4">
              Dedicated to defending constitutional rights, educating citizens, and supporting rural communities across America.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
                aria-label="Twitter"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
                aria-label="YouTube"
              >
                <FaYoutube className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
          
          {/* Column 2: Focus Areas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimationDelayed(0.2)}
          >
            <h3 className="text-xl font-serif font-medium mb-6">Focus Areas</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/focus-areas/constitutional-rights" className="text-gray-300 hover:text-accent transition-colors">
                  Constitutional Rights
                </Link>
              </li>
              <li>
                <Link href="/focus-areas/citizen-education" className="text-gray-300 hover:text-accent transition-colors">
                  Citizen Education
                </Link>
              </li>
              <li>
                <Link href="/focus-areas/rural-communities" className="text-gray-300 hover:text-accent transition-colors">
                  Rural Communities
                </Link>
              </li>
              <li>
                <Link href="/resources/publications" className="text-gray-300 hover:text-accent transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/resources/research" className="text-gray-300 hover:text-accent transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/get-involved/events" className="text-gray-300 hover:text-accent transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </motion.div>
          
          {/* Column 3: Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimationDelayed(0.3)}
          >
            <h3 className="text-xl font-serif font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/news" className="text-gray-300 hover:text-accent transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/get-involved/donate" className="text-gray-300 hover:text-accent transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </motion.div>
          
          {/* Column 4: Contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimationDelayed(0.4)}
          >
            <h3 className="text-xl font-serif font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-accent mr-3 mt-1" />
                <span className="text-gray-300">
                  1776 Constitution Ave<br />
                  Washington, DC 20001<br />
                  United States
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="h-4 w-4 text-accent mr-3" />
                <a href="tel:+12025551776" className="text-gray-300 hover:text-accent transition-colors">
                  (202) 555-1776
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-4 w-4 text-accent mr-3" />
                <a href="mailto:info@tomorrowfoundation.org" className="text-gray-300 hover:text-accent transition-colors">
                  info@tomorrowfoundation.org
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Office Hours</h4>
              <p className="text-gray-300 text-sm">
                Monday - Friday: 9:00am - 5:00pm<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} Tomorrow Foundation. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Defending American Values and Constitutional Rights
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 