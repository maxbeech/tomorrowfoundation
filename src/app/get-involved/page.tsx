'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HandRaisedIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon, 
  CalendarIcon,
  MegaphoneIcon,
  ArrowRightIcon
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

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Photos/monument-2501317_1280.jpg"
            alt="Get Involved"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-navy-900/60" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6">
              Get Involved
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
              Join the Tomorrow Foundation in defending constitutional rights and supporting rural communities
            </p>
            <Link 
              href="#donate"
              className="px-6 py-3 bg-gold-500 text-navy-900 font-bold rounded-md hover:bg-gold-400 transition-colors duration-300 inline-block"
            >
              Donate Now
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 font-serif">
                Ways to Support Our Mission
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                There are many ways to join our efforts to defend constitutional rights and strengthen rural communities
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1} direction="up">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image 
                    src="/media/Photos/capitol-5019534_1280.jpg" 
                    alt="Donate"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-navy-900/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-full p-4">
                      <CurrencyDollarIcon className="h-8 w-8 text-red-600" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif">Donate</h3>
                  <p className="text-gray-600 mb-4">
                    Your financial support enables us to defend constitutional rights, educate citizens, and support rural communities across America.
                  </p>
                  <Link 
                    href="#donate" 
                    className="inline-flex items-center font-medium text-red-600"
                  >
                    Learn more
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image 
                    src="/media/Photos/pexels-olly-932352.jpg" 
                    alt="Volunteer"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-navy-900/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-full p-4">
                      <HandRaisedIcon className="h-8 w-8 text-navy-600" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif">Volunteer</h3>
                  <p className="text-gray-600 mb-4">
                    Contribute your time and talents to help with events, educational programs, and grassroots mobilization efforts.
                  </p>
                  <Link 
                    href="/get-involved/volunteer" 
                    className="inline-flex items-center font-medium text-red-600"
                  >
                    Learn more
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image 
                    src="/media/Photos/us-capitol-477987_1280.jpg" 
                    alt="Membership"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-navy-900/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-full p-4">
                      <UserGroupIcon className="h-8 w-8 text-gold-600" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif">Become a Member</h3>
                  <p className="text-gray-600 mb-4">
                    Join our community of liberty-minded citizens dedicated to defending constitutional principles and rural values.
                  </p>
                  <Link 
                    href="/get-involved/membership" 
                    className="inline-flex items-center font-medium text-red-600"
                  >
                    Learn more
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                  Support Our Work
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6 font-serif">
                  Donate to the Tomorrow Foundation
                </h2>
                <div className="prose prose-lg text-gray-700">
                  <p>
                    Your generous donation supports our ongoing work to defend constitutional rights, educate citizens, and strengthen rural communities across America.
                  </p>
                  <p>
                    The Tomorrow Foundation is a 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law.
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Defend constitutional liberties in courts across America</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Provide educational resources on constitutional rights</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Support and advocate for rural communities</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Train the next generation of constitutional leaders</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-navy-900 mb-6 font-serif text-center">
                  Select a Donation Option
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-navy-800 mb-3">Donation Amount</h4>
                    <div className="grid grid-cols-3 gap-3">
                      <button className="bg-navy-50 hover:bg-navy-100 text-navy-800 font-medium py-2 px-4 rounded-md transition-colors duration-300">
                        $25
                      </button>
                      <button className="bg-navy-50 hover:bg-navy-100 text-navy-800 font-medium py-2 px-4 rounded-md transition-colors duration-300">
                        $50
                      </button>
                      <button className="bg-navy-50 hover:bg-navy-100 text-navy-800 font-medium py-2 px-4 rounded-md transition-colors duration-300">
                        $100
                      </button>
                      <button className="bg-navy-50 hover:bg-navy-100 text-navy-800 font-medium py-2 px-4 rounded-md transition-colors duration-300">
                        $250
                      </button>
                      <button className="bg-navy-50 hover:bg-navy-100 text-navy-800 font-medium py-2 px-4 rounded-md transition-colors duration-300">
                        $500
                      </button>
                      <button className="bg-navy-50 hover:bg-navy-100 text-navy-800 font-medium py-2 px-4 rounded-md transition-colors duration-300">
                        $1,000
                      </button>
                    </div>
                    <div className="mt-3">
                      <label htmlFor="customAmount" className="sr-only">Custom Amount</label>
                      <input
                        type="text"
                        id="customAmount"
                        placeholder="Other Amount"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-navy-800 mb-3">Frequency</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="bg-navy-600 text-white font-medium py-2 px-4 rounded-md">
                        One-time
                      </button>
                      <button className="bg-navy-50 hover:bg-navy-100 text-navy-800 font-medium py-2 px-4 rounded-md transition-colors duration-300">
                        Monthly
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-navy-800 mb-3">Designation</h4>
                    <select
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    >
                      <option>Where Needed Most</option>
                      <option>Constitutional Rights Litigation</option>
                      <option>Educational Programs</option>
                      <option>Rural Community Support</option>
                    </select>
                  </div>
                  
                  <div className="!mt-8">
                    <button
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
                    >
                      Donate Now
                    </button>
                    <div className="mt-4 flex items-center justify-center space-x-4">
                      <img src="https://www.svgrepo.com/show/473626/visa.svg" alt="Visa" className="h-8" />
                      <img src="https://www.svgrepo.com/show/473586/mastercard.svg" alt="Mastercard" className="h-8" />
                      <img src="https://www.svgrepo.com/show/473589/paypal.svg" alt="PayPal" className="h-8" />
                    </div>
                    <p className="text-sm text-gray-500 text-center mt-4">
                      Secure payment processing via Stripe
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-navy-900 mb-6 font-serif">
                Other Ways to Support Our Mission
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1} direction="up">
              <div className="bg-navy-50 rounded-xl p-8">
                <div className="flex items-start">
                  <div className="bg-white rounded-full p-3 shadow-sm">
                    <CalendarIcon className="h-6 w-6 text-navy-600" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif">Attend Events</h3>
                    <p className="text-gray-700 mb-4">
                      Join us at conferences, workshops, and community gatherings across the country to learn more about constitutional rights and connect with like-minded individuals.
                    </p>
                    <Link 
                      href="/get-involved/events" 
                      className="inline-flex items-center font-medium text-red-600"
                    >
                      View upcoming events
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <div className="bg-navy-50 rounded-xl p-8">
                <div className="flex items-start">
                  <div className="bg-white rounded-full p-3 shadow-sm">
                    <MegaphoneIcon className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif">Spread the Word</h3>
                    <p className="text-gray-700 mb-4">
                      Share our resources, follow us on social media, and help spread awareness about constitutional rights and the challenges facing rural communities.
                    </p>
                    <Link 
                      href="/get-involved/advocacy" 
                      className="inline-flex items-center font-medium text-red-600"
                    >
                      Learn how to advocate
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/media/Photos/dome-2831971_1280.jpg" 
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-6 font-serif">
              Join the Movement to Preserve American Liberty
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              American values forged the greatest nation in history. It's up to us to keep it that way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#donate" 
                className="px-6 py-3 bg-gold-500 text-navy-900 font-bold rounded-md hover:bg-gold-400 transition-colors duration-300"
              >
                Donate Now
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-md hover:bg-white/20 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 