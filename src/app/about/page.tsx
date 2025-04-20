'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ShieldCheckIcon, 
  ScaleIcon, 
  BookOpenIcon, 
  HomeIcon,
  UserGroupIcon, 
  HeartIcon 
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

// Parallax image component
interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  imgClassName?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  speed = 0.5,
  imgClassName = '',
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300 * speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0">
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className={`object-cover ${imgClassName}`}
          priority
        />
      </motion.div>
    </div>
  );
};

const ValuesCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-red-600">
      <div className="flex items-start">
        <div className="flex-shrink-0 bg-red-100 p-3 rounded-md">
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold text-navy-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  const coreValues = [
    {
      icon: <ShieldCheckIcon className="h-6 w-6 text-red-600" />,
      title: "Liberty",
      description: "We believe in protecting the fundamental liberties granted by the Constitution and ensuring all Americans can exercise their rights fully."
    },
    {
      icon: <ScaleIcon className="h-6 w-6 text-red-600" />,
      title: "Justice",
      description: "We advocate for equal justice under law for all citizens, regardless of background, status, or political affiliation."
    },
    {
      icon: <BookOpenIcon className="h-6 w-6 text-red-600" />,
      title: "Education",
      description: "We are committed to educating citizens about their constitutional rights and responsibilities as members of a free society."
    },
    {
      icon: <HomeIcon className="h-6 w-6 text-red-600" />,
      title: "Community",
      description: "We support local communities, particularly in rural America, where constitutional principles are lived out daily."
    },
    {
      icon: <UserGroupIcon className="h-6 w-6 text-red-600" />,
      title: "Civic Engagement",
      description: "We foster active participation in civic life and democratic processes as essential to preserving our republic."
    },
    {
      icon: <HeartIcon className="h-6 w-6 text-red-600" />,
      title: "Integrity",
      description: "We operate with transparency, honesty, and a commitment to the highest ethical standards in pursuit of our mission."
    }
  ];

  // About page timeline data
  const timelineData = [
    {
      year: '2010',
      title: 'Foundation Established',
      description: 'The Tomorrow Foundation was established to defend constitutional rights and support rural American communities.'
    },
    {
      year: '2014',
      title: 'Educational Program Launch',
      description: 'Launched our first major educational initiative to teach citizens about their constitutional rights.'
    },
    {
      year: '2017',
      title: 'Rural Community Support',
      description: 'Expanded our mission to include comprehensive support for rural communities and agriculture.'
    },
    {
      year: '2020',
      title: 'Legal Defense Fund',
      description: 'Created a legal defense fund to support constitutional rights cases across the country.'
    },
    {
      year: '2023',
      title: 'National Expansion',
      description: 'Expanded our programs to reach all 50 states, with a focus on underserved rural areas.'
    },
  ];

  // Team members data
  const leadershipTeam = [
    {
      name: 'Robert Anderson',
      role: 'Executive Director',
      bio: 'Former constitutional law professor with 20+ years of experience defending American values and rights.',
      image: '/media/Photos/pexels-olly-932352.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'Director of Rural Programs',
      bio: 'Fifth-generation farmer and agricultural policy expert dedicated to supporting American farming communities.',
      image: '/media/Photos/pexels-olly-722014.jpg'
    },
    {
      name: 'Michael Davis',
      role: 'Chief Legal Officer',
      bio: 'Constitutional attorney with a track record of defending individual liberties and property rights.',
      image: '/media/Photos/pexels-brett-sayles-1340504.jpg'
    }
  ];

  // Stats data
  const impactStats = [
    { number: '50+', label: 'Constitutional Rights Cases' },
    { number: '100,000+', label: 'Citizens Educated' },
    { number: '500+', label: 'Rural Communities Supported' },
    { number: '30+', label: 'States with Active Programs' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/media/Photos/dome-2831971_1280.jpg"
            alt="US Capitol dome"
            speed={0.3}
            imgClassName="brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-navy-900/50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6">
              About the Tomorrow Foundation
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              Preserving American values and defending the principles that made our nation great.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn direction="right">
                <div className="mb-4">
                  <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                    Our Purpose
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 font-serif">
                  Our Mission & Values
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Tomorrow Foundation is dedicated to defending constitutional rights, educating citizens, and supporting rural communities across America. We believe that informed citizens are essential for a thriving democracy and that rural communities are the backbone of American values.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Our work is guided by the profound belief that American values have forged the greatest nation in history, and it's our responsibility to preserve these principles for future generations.
                </p>
                <Link 
                  href="/about/mission" 
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all duration-300"
                >
                  Learn More About Our Mission
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </FadeIn>
            </div>
            <FadeIn direction="left" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-navy-50 p-6 rounded-lg border-l-4 border-navy-600">
                  <h3 className="text-xl font-semibold text-navy-900 mb-3 font-serif">Defending Constitutional Rights</h3>
                  <p className="text-gray-700">
                    We advocate for and defend the constitutional rights that form the foundation of American liberty.
                  </p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                  <h3 className="text-xl font-semibold text-navy-900 mb-3 font-serif">Educating Citizens</h3>
                  <p className="text-gray-700">
                    We provide educational resources to help Americans understand and exercise their constitutional rights.
                  </p>
                </div>
                <div className="bg-gold-50 p-6 rounded-lg border-l-4 border-gold-600">
                  <h3 className="text-xl font-semibold text-navy-900 mb-3 font-serif">Supporting Rural Communities</h3>
                  <p className="text-gray-700">
                    We support rural communities and agriculture as vital components of America's strength and heritage.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold text-navy-900 mb-3 font-serif">Preserving American Values</h3>
                  <p className="text-gray-700">
                    We work to preserve the traditional American values that have made our nation exceptional.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-serif text-gold-400">
              Our Impact
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <div className="bg-navy-800/50 p-6 rounded-lg border border-navy-700 hover:transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">{stat.number}</h3>
                  <p className="text-lg text-white/80">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Our People
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 font-serif">
                Leadership Team
              </h2>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <motion.div 
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-72 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-navy-900 mb-1 font-serif">{member.name}</h3>
                    <p className="text-red-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-700">{member.bio}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <FadeIn delay={0.4}>
              <Link
                href="/about/team"
                className="inline-flex items-center px-6 py-3 border border-navy-600 text-navy-800 font-medium rounded-md hover:bg-navy-50 transition-all duration-300"
              >
                Meet Our Full Team
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 font-serif">
                Foundation History
              </h2>
            </FadeIn>
          </div>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-red-200"></div>
            
            {/* Timeline items */}
            {timelineData.map((item, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <div className={`flex flex-col md:flex-row md:items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center md:justify-end">
                    <motion.div 
                      className={`p-6 rounded-lg shadow-md bg-white border-l-4 border-red-600 max-w-md ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
                      whileHover={{ y: -5 }}
                    >
                      <h3 className="text-xl font-semibold text-navy-900 mb-2 font-serif">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </motion.div>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-lg font-bold shadow-lg z-10">
                      {item.year}
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:flex md:justify-start">
                    <div className="md:block md:w-full md:h-0"></div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <FadeIn delay={0.4}>
              <Link
                href="/about/history"
                className="inline-flex items-center px-6 py-3 border border-navy-600 text-navy-800 font-medium rounded-md hover:bg-navy-50 transition-all duration-300"
              >
                Explore Our Full History
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <FadeIn>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
                    Join Our Mission to Preserve American Values
                  </h2>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <p className="text-white/80 mb-8 text-lg">
                    Help us defend constitutional rights, educate citizens, and support rural communities. Together, we can ensure America's greatness for generations to come.
                  </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/get-involved"
                      className="px-8 py-4 bg-white text-navy-900 font-bold rounded-md hover:bg-gray-100 transition-colors duration-300 text-center"
                    >
                      Get Involved
                    </Link>
                    <Link
                      href="/get-involved/donate"
                      className="px-8 py-4 bg-gold-500 text-navy-900 font-bold rounded-md hover:bg-gold-400 transition-colors duration-300 text-center"
                    >
                      Donate Now
                    </Link>
                  </div>
                </FadeIn>
              </div>
              <div className="relative h-[300px] lg:h-auto">
                <Image
                  src="/media/Photos/monument-2501317_1280.jpg"
                  alt="Washington Monument"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy-900/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 