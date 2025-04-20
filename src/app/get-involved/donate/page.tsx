'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HeartIcon, ArrowPathIcon, ShieldCheckIcon, StarIcon } from '@heroicons/react/24/outline';

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState<number | string>('');
  const [isMonthly, setIsMonthly] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleDonationAmountClick = (amount: number) => {
    setDonationAmount(amount);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and decimal point
    if (value === '' || /^\d+(\.\d{0,2})?$/.test(value)) {
      setDonationAmount(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (this would be replaced with actual Stripe integration)
    setTimeout(() => {
      setIsSubmitting(false);
      setShowThankYou(true);
      // Reset form
      setDonationAmount('');
      setName('');
      setEmail('');
    }, 1500);
  };

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative bg-navy-900 py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/media/Photos/pexels-brett-sayles-1340504.jpg"
            alt="Donate to Tomorrow Foundation"
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
              Support Our Mission
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Your generous donation helps us defend constitutional rights and strengthen rural communities across America.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <HeartIcon className="h-6 w-6 text-red-500" />
              <p className="text-lg text-white">
                The Tomorrow Foundation is a 501(c)(3) nonprofit organization.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`${showThankYou ? 'hidden' : 'block'}`}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-navy-900 mb-6 font-serif">Make a Donation</h2>
              
              {/* Donation Type Toggle */}
              <div className="flex justify-center mb-8">
                <div className="p-1 bg-gray-100 rounded-lg flex">
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      !isMonthly ? 'bg-white text-navy-900 shadow-sm' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMonthly(false)}
                  >
                    One-time
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isMonthly ? 'bg-white text-navy-900 shadow-sm' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMonthly(true)}
                  >
                    Monthly
                  </button>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                {/* Amount Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select donation amount
                  </label>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[25, 50, 100, 250, 500, 1000].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className={`py-3 px-4 rounded-md border transition-colors ${
                          donationAmount === amount
                            ? 'border-red-600 bg-red-50 text-red-600'
                            : 'border-gray-300 hover:border-red-300 hover:bg-red-50/50'
                        }`}
                        onClick={() => handleDonationAmountClick(amount)}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Or enter a custom amount
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="text"
                        value={typeof donationAmount === 'string' ? donationAmount : ''}
                        onChange={handleCustomAmountChange}
                        className="focus:ring-red-500 focus:border-red-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-3"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Personal Information */}
                <div className="space-y-4 mb-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md py-3"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md py-3"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!donationAmount || isSubmitting}
                  className={`w-full bg-red-600 text-white rounded-md py-3 font-medium transition-colors ${
                    !donationAmount || isSubmitting
                      ? 'opacity-70 cursor-not-allowed'
                      : 'hover:bg-red-700'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <ArrowPathIcon className="animate-spin h-5 w-5 mr-2" />
                      Processing...
                    </span>
                  ) : (
                    `${isMonthly ? 'Donate Monthly' : 'Donate'} ${
                      donationAmount ? `$${donationAmount}` : ''
                    }`
                  )}
                </button>
                
                {/* Secure Message */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500 flex items-center justify-center">
                    <ShieldCheckIcon className="h-4 w-4 mr-1 text-gray-400" />
                    Your payment information is secure and encrypted
                  </p>
                </div>
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
                <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Thank You for Your Donation!</h2>
              <p className="text-gray-600 mb-6">
                Your support helps us continue our important work defending constitutional rights and supporting rural communities across America.
              </p>
              <p className="text-gray-600 mb-8">
                A receipt has been sent to your email address.
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => setShowThankYou(false)}
                  className="bg-navy-600 text-white rounded-md py-2 px-4 font-medium hover:bg-navy-700 transition-colors w-full"
                >
                  Make Another Donation
                </button>
                <Link
                  href="/"
                  className="inline-block text-navy-600 hover:text-navy-800 transition-colors"
                >
                  Return to Homepage
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Impact Information */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-navy-900 mb-6 font-serif">Your Impact</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <StarIcon className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-2">Defend Constitutional Rights</h3>
                    <p className="text-gray-600">
                      Your donation helps fund legal advocacy, educational programs, and grassroots initiatives that protect essential liberties for all Americans.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-2">Educate Citizens</h3>
                    <p className="text-gray-600">
                      We develop and distribute educational materials that help Americans understand their constitutional rights and the importance of civic engagement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-2">Support Rural Communities</h3>
                    <p className="text-gray-600">
                      Your support helps us advocate for policies that strengthen rural America and provide resources to agricultural communities facing challenges.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <blockquote className="italic text-gray-700 mb-4">
                  "The Tomorrow Foundation's work defending property rights has made a real difference for farmers across my state. Their educational resources helped our community understand and protect our constitutional liberties."
                </blockquote>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-navy-200 flex items-center justify-center mr-3">
                    <span className="text-navy-700 font-semibold">JM</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy-900">James Miller</p>
                    <p className="text-sm text-gray-500">Third-generation Farmer, Iowa</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Additional Information */}
        <div className="mt-16 pt-10 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-navy-900 mb-3">Tax Deductibility</h3>
              <p className="text-gray-600">
                The Tomorrow Foundation is a 501(c)(3) nonprofit organization. Your donation is tax-deductible to the extent allowed by law. Our EIN is 12-3456789.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-navy-900 mb-3">Other Ways to Give</h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <Link href="#" className="text-red-600 hover:text-red-800 transition-colors">
                    Planned Giving
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-red-600 hover:text-red-800 transition-colors">
                    Donor-Advised Funds
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-red-600 hover:text-red-800 transition-colors">
                    Corporate Matching
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-navy-900 mb-3">Questions?</h3>
              <p className="text-gray-600 mb-2">
                Contact our Development team for assistance with your donation.
              </p>
              <a href="mailto:donations@tomorrowfoundation.org" className="text-red-600 hover:text-red-800 transition-colors">
                donations@tomorrowfoundation.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 