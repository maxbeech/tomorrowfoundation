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

export default function Mission() {
  const pillars = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: "Defending Constitutional Rights",
      description: "We advocate for the protection of individual liberties enshrined in the Constitution. Our legal initiatives and educational campaigns aim to preserve these fundamental rights for future generations.",
      points: [
        "Supporting legal challenges to unconstitutional laws",
        "Educating Americans about their constitutional rights",
        "Advocating for limited government and individual freedom",
        "Protecting private property rights and economic liberty"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Educating Citizens About Their Rights",
      description: "Knowledge is the foundation of liberty. We develop comprehensive educational programs to help Americans understand their rights and the importance of civic engagement.",
      points: [
        "Creating educational materials for schools and communities",
        "Hosting workshops and seminars on constitutional principles",
        "Developing digital resources for widespread accessibility",
        "Training educators to teach constitutional literacy"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Supporting Rural Communities and Agriculture",
      description: "Rural America is essential to our nation's identity, economy, and values. We provide resources and advocacy to strengthen rural communities and support American agriculture.",
      points: [
        "Advocating for policies that benefit family farms",
        "Supporting rural economic development initiatives",
        "Connecting rural communities with educational resources",
        "Preserving agricultural heritage and traditional values"
      ]
    }
  ];

  const principles = [
    {
      title: "Limited Government",
      description: "We believe in a government limited by the Constitution, allowing individual liberty to flourish.",
      color: "navy"
    },
    {
      title: "Individual Liberty",
      description: "Freedom of speech, religion, and the right to private property are essential to American greatness.",
      color: "red"
    },
    {
      title: "Free Enterprise",
      description: "Economic freedom and market principles have created unprecedented prosperity.",
      color: "gold"
    },
    {
      title: "Traditional Values",
      description: "The moral and ethical principles that have guided our nation since its founding remain vital today.",
      color: "blue"
    },
    {
      title: "Strong National Defense",
      description: "A strong military is essential to protect our liberties and interests at home and abroad.",
      color: "red"
    },
    {
      title: "Rule of Law",
      description: "Equal application of the law and respect for the judicial process are cornerstones of our republic.",
      color: "navy"
    }
  ];

  const quotes = [
    {
      text: "The Constitution is not an instrument for the government to restrain the people; it is an instrument for the people to restrain the government.",
      author: "Patrick Henry"
    },
    {
      text: "Liberty must at all hazards be supported. We have a right to it, derived from our Maker.",
      author: "John Adams"
    },
    {
      text: "They who can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety.",
      author: "Benjamin Franklin"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/media/Photos/washingtondc-4816984_1280.jpg"
            alt="Washington DC"
            speed={0.3}
            imgClassName="brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-navy-900/50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6">
              Our Mission
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              Defending constitutional rights, educating citizens, and supporting rural communities
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                  Our Purpose
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6 font-serif">
                  Mission Statement
                </h2>
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p>
                    The Tomorrow Foundation is dedicated to defending constitutional rights, educating citizens about their rights, and supporting rural communities and agriculture for a strong America.
                  </p>
                  <p>
                    We believe that American values have forged the greatest nation in history, and it's our responsibility to preserve these principles for future generations.
                  </p>
                  <p>
                    Through education, advocacy, and community support, we work to ensure that the constitutional principles that have guided our nation since its founding continue to provide the framework for American liberty and prosperity.
                  </p>
                  <p className="font-semibold text-navy-900">
                    Our mission is guided by the belief that an informed citizenry, actively engaged in protecting their rights, is essential to maintaining our republic and the liberties it guarantees.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <div className="relative">
              <FadeIn direction="left" delay={0.2}>
                <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl border-4 border-white">
                  <Image 
                    src="/media/Photos/capitol-5019534_1280.jpg" 
                    alt="US Capitol"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.4} direction="up">
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-50 p-6 rounded-xl shadow-lg border-2 border-white">
                  <p className="text-xl font-serif text-navy-900 italic mb-4">
                    "American values forged the greatest nation in history. It's up to us to keep it that way."
                  </p>
                  <p className="text-red-600 font-medium">
                    — Tomorrow Foundation
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                What We Do
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 font-serif">
                Our Core Pillars
              </h2>
              <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
                These three fundamental areas of focus guide our work and initiatives
              </p>
            </FadeIn>
          </div>
          
          <div className="space-y-16">
            {pillars.map((pillar, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <div className={`bg-white rounded-xl shadow-md overflow-hidden ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex`}>
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className={`p-3 rounded-xl w-fit mb-4 text-${index === 0 ? 'navy' : index === 1 ? 'red' : 'gold'}-600 bg-${index === 0 ? 'navy' : index === 1 ? 'red' : 'gold'}-50`}>
                      {pillar.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">{pillar.title}</h3>
                    <p className="text-gray-700 mb-6">{pillar.description}</p>
                    <ul className="space-y-2">
                      {pillar.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <svg className={`h-6 w-6 text-${index === 0 ? 'navy' : index === 1 ? 'red' : 'gold'}-600 mr-2 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:w-1/2 relative h-72 md:h-auto">
                    <Image
                      src={index === 0 
                        ? "/media/Photos/us-capitol-477987_1280.jpg"
                        : index === 1 
                          ? "/media/Photos/dome-2831971_1280.jpg"
                          : "/media/Photos/bridge-4433114_1280.jpg"
                      }
                      alt={pillar.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${
                      index % 2 === 0 
                        ? `from-white via-transparent to-transparent md:from-transparent md:via-transparent md:to-${index === 0 ? 'navy' : index === 1 ? 'red' : 'gold'}-900/20` 
                        : `from-transparent via-transparent to-white md:from-${index === 0 ? 'navy' : index === 1 ? 'red' : 'gold'}-900/20 md:via-transparent md:to-transparent`
                    }`}></div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Principles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Our Foundation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 font-serif">
                Guiding Principles
              </h2>
              <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
                These core values shape our approach and inform our decisions
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <FadeIn key={index} delay={0.05 * index} direction="up">
                <motion.div 
                  className={`bg-${principle.color}-50 p-8 rounded-xl border-l-4 border-${principle.color}-600 h-full hover:shadow-md transition-all duration-300`}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif">{principle.title}</h3>
                  <p className="text-gray-700">{principle.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirational Quotes Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-gold-400 font-semibold uppercase tracking-wider text-sm">
                Our Inspiration
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 font-serif">
                Words That Guide Us
              </h2>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <div className="bg-navy-800/50 p-8 rounded-xl border border-navy-700 h-full">
                  <svg className="h-10 w-10 text-gold-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  <p className="text-xl italic mb-4">{quote.text}</p>
                  <p className="text-gold-400 font-medium">— {quote.author}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-red-600 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 lg:p-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
                    Join Our Mission
                  </h2>
                  <p className="text-white/90 mb-8 text-lg">
                    Help us defend constitutional rights, educate citizens, and support rural communities. Together, we can preserve American values for future generations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/get-involved"
                      className="px-8 py-4 bg-white text-red-600 font-bold rounded-md hover:bg-gray-100 transition-colors duration-300 text-center"
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
                </div>
                <div className="relative h-[300px] lg:h-auto">
                  <Image
                    src="/media/Photos/nyc-5323170_1280.jpg"
                    alt="American flag"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-red-900/20"></div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 