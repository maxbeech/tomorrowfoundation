'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

export default function FocusAreas() {
  // Focus Areas data
  const focusAreas = [
    {
      title: 'Defending Constitutional Rights',
      description: 'The Constitution is the bedrock of American liberty. We work tirelessly to protect and defend the constitutional rights of all Americans through legal advocacy, education, and grassroots mobilization.',
      image: '/media/Photos/capitol-5019534_1280.jpg',
      color: 'navy',
      link: '/focus-areas/constitutional-rights',
      initiatives: [
        'Legal Defense Fund supporting constitutional rights cases',
        'Constitutional Litigation Network of volunteer attorneys',
        'Property Rights Protection Initiative',
        'Religious Liberty Defense Project',
        'Second Amendment Rights Advocacy'
      ]
    },
    {
      title: 'Educating Citizens about their Rights',
      description: 'Knowledge is the foundation of liberty. We develop comprehensive educational programs and resources to help Americans understand their constitutional rights and the importance of preserving them for future generations.',
      image: '/media/Photos/dome-2831971_1280.jpg',
      color: 'red',
      link: '/focus-areas/citizen-education',
      initiatives: [
        'Constitutional Rights Curriculum for schools',
        'Digital Learning Platform on American founding principles',
        'Community Workshops and Seminars series',
        'Educational Publications and Resources',
        'Annual Constitutional Leadership Conferences'
      ]
    },
    {
      title: 'Supporting Rural Communities and Agriculture',
      description: 'Rural America embodies the values that built our nation. We provide resources, advocacy, and support to strengthen rural communities and American agriculture, ensuring they remain vibrant and prosperous.',
      image: '/media/Photos/bridge-4433114_1280.jpg',
      color: 'gold',
      link: '/focus-areas/rural-communities',
      initiatives: [
        'Rural Economic Development Program',
        'Agricultural Policy Advocacy',
        'Family Farm Support Network',
        'Rural Education Scholarships',
        'Community Revitalization Projects'
      ]
    }
  ];

  // Success stories data
  const successStories = [
    {
      title: 'Victory for Property Rights',
      description: 'Our Legal Defense Fund successfully represented a family farm threatened by eminent domain abuse, establishing an important precedent for property rights protection across the region.',
      image: '/media/Photos/pexels-pixabay-208724.jpg',
      area: 'Constitutional Rights'
    },
    {
      title: 'Constitutional Education Program Reaches 200,000 Students',
      description: 'Our "Understanding Your Rights" curriculum has now been adopted by school districts in 18 states, reaching over 200,000 students with essential knowledge about their constitutional liberties.',
      image: '/media/Photos/pexels-brett-sayles-1340504.jpg',
      area: 'Citizen Education'
    },
    {
      title: 'Rural Community Revitalization',
      description: 'Through our Rural Economic Development Initiative, we helped a struggling agricultural community in the Midwest secure funding for infrastructure improvements and agricultural innovation projects.',
      image: '/media/Photos/pexels-olly-722014.jpg',
      area: 'Rural Communities'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/media/Photos/washingtondc-4816984_1280.jpg"
            alt="Washington DC"
            speed={0.3}
            imgClassName="brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-navy-900/60" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6">
              Our Focus Areas
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              The three pillars guiding our mission to preserve American values
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Our Purpose
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6 font-serif">
                Three Pillars, One Mission
              </h2>
              <div className="prose prose-lg text-gray-700 mx-auto">
                <p>
                  The Tomorrow Foundation focuses its efforts on three interconnected areas that are essential to preserving American values and ensuring a strong future for our nation.
                </p>
                <p>
                  By defending constitutional rights, educating citizens, and supporting rural communities, we work to protect the principles that have made America the greatest nation in history.
                </p>
                <p className="font-semibold text-navy-900">
                  Together, these three focus areas form the foundation of our mission to preserve America's exceptional heritage for future generations.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-serif">
                Our Core Focus Areas
              </h2>
            </FadeIn>
          </div>
          
          <div className="space-y-24">
            {focusAreas.map((area, index) => (
              <FadeIn key={index} delay={0.1}>
                <div className={`bg-white rounded-xl shadow-lg overflow-hidden ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex`}>
                  <div className="md:w-2/5 relative">
                    <div className="h-full min-h-[300px]">
                      <Image
                        src={area.image}
                        alt={area.title}
                        fill
                        className="object-cover"
                      />
                      <div className={`absolute inset-0 bg-${area.color}-900/20`}></div>
                    </div>
                  </div>
                  
                  <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <div className={`w-16 h-1 bg-${area.color}-600 mb-6`}></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4 font-serif">{area.title}</h3>
                    <p className="text-gray-700 mb-6 text-lg">{area.description}</p>
                    
                    <h4 className="text-lg font-semibold text-navy-900 mb-4">Key Initiatives:</h4>
                    <ul className="space-y-2 mb-8">
                      {area.initiatives.map((initiative, i) => (
                        <li key={i} className="flex items-start">
                          <svg className={`h-5 w-5 text-${area.color}-600 mr-2 flex-shrink-0 mt-1`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{initiative}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={area.link} 
                      className={`inline-flex items-center px-6 py-3 bg-${area.color}-600 text-white font-medium rounded-md hover:bg-${area.color}-700 transition-all duration-300 mt-auto self-start`}
                    >
                      Learn More
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Impact Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 font-serif">
                Success Stories
              </h2>
              <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
                Real-world examples of our focus areas in action
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <motion.div 
                  className="bg-white rounded-xl shadow-md overflow-hidden h-full hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-48">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {story.area}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif">{story.title}</h3>
                    <p className="text-gray-700">{story.description}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <FadeIn delay={0.4}>
              <Link
                href="/news"
                className="inline-flex items-center px-6 py-3 border border-navy-600 text-navy-800 font-medium rounded-md hover:bg-navy-50 transition-all duration-300"
              >
                View More Success Stories
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
                  Join Our Mission
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  Help us defend constitutional rights, educate citizens, and support rural communities. Together, we can preserve American values for future generations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/get-involved/donate"
                    className="px-6 py-3 bg-gold-500 text-navy-900 font-bold rounded-md hover:bg-gold-400 transition-colors duration-300 text-center"
                  >
                    Donate
                  </Link>
                  <Link
                    href="/get-involved/volunteer"
                    className="px-6 py-3 bg-white text-navy-900 font-bold rounded-md hover:bg-gray-100 transition-colors duration-300 text-center"
                  >
                    Volunteer
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-3 border border-white text-white font-bold rounded-md hover:bg-white/10 transition-colors duration-300 text-center sm:col-span-2"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/media/Photos/monument-2501317_1280.jpg"
                  alt="Washington Monument"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy-900/30"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <blockquote className="text-white text-xl md:text-2xl font-serif italic text-center">
                    "American values forged the greatest nation in history. It's up to us to keep it that way."
                  </blockquote>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 