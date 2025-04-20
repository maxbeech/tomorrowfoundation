'use client';

import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Navigation structure for Tomorrow Foundation
  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about',
      submenu: [
        { name: 'Our Mission', href: '/about/mission' },
        { name: 'Our Team', href: '/about/team' },
        { name: 'Our History', href: '/about/history' }
      ] 
    },
    { 
      name: 'Focus Areas', 
      href: '/focus-areas',
      submenu: [
        { name: 'Constitutional Rights', href: '/focus-areas/constitutional-rights' },
        { name: 'Citizen Education', href: '/focus-areas/citizen-education' },
        { name: 'Rural Communities', href: '/focus-areas/rural-communities' }
      ] 
    },
    { name: 'News', href: '/news' },
    { name: 'Resources', href: '/resources' },
    { 
      name: 'Get Involved', 
      href: '/get-involved',
      submenu: [
        { name: 'Donate', href: '/get-involved/donate' },
        { name: 'Volunteer', href: '/get-involved/volunteer' },
        { name: 'Events', href: '/get-involved/events' }
      ] 
    },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/media/logo-icon_only.png"
                alt="Tomorrow Foundation Logo"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <div className="flex flex-col">
                <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-navy-700' : 'text-white'
                } font-serif`}>
                  Tomorrow Foundation
                </span>
                <span className={`text-xs font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-red-600' : 'text-red-300'
                }`}>
                  Defending American Values
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`px-3 py-3 text-sm font-medium rounded-md transition-all duration-300 hover:scale-105 flex items-center ${
                    pathname === item.href || pathname?.startsWith(item.href + '/')
                      ? isScrolled
                        ? 'text-red-600 bg-red-50'
                        : 'text-white bg-white/10 backdrop-blur-sm'
                      : isScrolled
                        ? 'text-gray-700 hover:text-red-600'
                        : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                  {item.submenu && (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                
                {/* Dropdown for submenu items */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                    <div className="py-2 mt-2 bg-white rounded-md shadow-xl border border-gray-100">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 ${
                            pathname === subItem.href ? 'bg-red-50 text-red-600' : ''
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Donate Button */}
            <Link 
              href="/get-involved/donate"
              className="ml-3 px-4 py-2 bg-gold-500 text-navy-900 font-bold rounded-md hover:bg-gold-400 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-900 hover:text-red-600'
                  : 'text-white hover:text-red-200'
              }`}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden mobile-menu-container"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`px-2 pt-2 pb-3 space-y-1 shadow-lg ${isScrolled ? 'bg-white' : 'bg-white/95 backdrop-blur-md'}`}>
              {navigation.map((item) => (
                <Fragment key={item.name}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      pathname === item.href
                        ? 'bg-red-50 text-red-700'
                        : 'text-gray-800 hover:bg-red-50 hover:text-red-700'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  
                  {/* Sub-items for mobile */}
                  {item.submenu && (
                    <div className="pl-4 space-y-1 mb-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-3 py-1 rounded-md text-sm font-medium ${
                            pathname === subItem.href
                              ? 'bg-red-50 text-red-700'
                              : 'text-gray-700 hover:bg-red-50 hover:text-red-700'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </Fragment>
              ))}
              
              {/* Mobile Donate Button */}
              <Link
                href="/get-involved/donate"
                className="block w-full text-center mt-3 px-4 py-2 bg-gold-500 text-navy-900 font-bold rounded-md hover:bg-gold-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 