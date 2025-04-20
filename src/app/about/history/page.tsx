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

export default function History() {
  // Timeline data with detailed history
  const timelineData = [
    {
      year: '2010',
      title: 'Foundation Established',
      description: 'The Tomorrow Foundation was established by a group of concerned citizens and legal scholars led by Dr. Robert Anderson. Recognizing the need for an organization dedicated to defending constitutional rights, educating citizens, and supporting rural communities, the founders established a non-profit foundation headquartered in Washington, D.C.',
      image: '/media/Photos/us-capitol-477987_1280.jpg',
      achievements: [
        'Initial team of 5 constitutional scholars and rural policy experts formed',
        'Secured initial funding from private donors committed to American values',
        'Established headquarters in Washington, D.C.'
      ]
    },
    {
      year: '2012',
      title: 'First Educational Programs',
      description: 'The Foundation launched its first major educational initiatives, developing curriculum materials about constitutional rights for high schools and community centers. These resources emphasized the importance of civic education and understanding fundamental rights.',
      image: '/media/Photos/dome-2831971_1280.jpg',
      achievements: [
        'Released "Know Your Rights" educational series for high schools',
        'Hosted first Constitutional Rights Conference with 250+ attendees',
        'Established partnership with 15 rural community centers for educational outreach'
      ]
    },
    {
      year: '2014',
      title: 'Rural Community Support Initiative',
      description: 'Recognizing the importance of rural communities to America\'s heritage and values, the Foundation expanded its mission to include comprehensive support programs for agriculture and rural development. This initiative aimed to preserve traditional rural values while addressing economic challenges.',
      image: '/media/Photos/bridge-4433114_1280.jpg',
      achievements: [
        'Launched Rural America Initiative to support farming communities',
        'Established agricultural policy advocacy program',
        'Created scholarship program for rural students pursuing agricultural studies'
      ]
    },
    {
      year: '2016',
      title: 'Legal Defense Fund Created',
      description: 'The Foundation established a dedicated Legal Defense Fund to provide representation and support for cases involving constitutional rights. This fund enabled the organization to take on high-profile cases defending individual liberties, property rights, and religious freedoms.',
      image: '/media/Photos/capitol-5019534_1280.jpg',
      achievements: [
        'Secured $5 million in initial funding for legal cases',
        'Built network of volunteer constitutional attorneys across 25 states',
        'Won first major property rights case at federal appeals court level'
      ]
    },
    {
      year: '2018',
      title: 'Digital Education Platform',
      description: 'Adapting to changing technology and expanding reach, the Foundation launched a comprehensive digital education platform. This initiative included online courses, interactive learning modules, and digital resources about constitutional rights and American values.',
      image: '/media/Photos/pexels-brett-sayles-1340504.jpg',
      achievements: [
        'Launched interactive Constitution app with 50,000+ downloads in first year',
        'Created online learning modules reaching 100,000+ citizens',
        'Established social media presence reaching millions of Americans'
      ]
    },
    {
      year: '2020',
      title: 'Expanding National Reach',
      description: 'The 10-year anniversary marked a major expansion of the Foundation\'s programs to all 50 states. New regional offices were established to better serve communities across America, with a particular focus on underserved rural areas.',
      image: '/media/Photos/monument-2501317_1280.jpg',
      achievements: [
        'Opened regional offices in Texas, Florida, and Michigan',
        'Expanded staff to 50+ full-time professionals',
        'Launched nationwide volunteer network with 5,000+ participants'
      ]
    },
    {
      year: '2023',
      title: 'Tomorrow Foundation Today',
      description: 'Today, the Tomorrow Foundation continues to grow its impact through innovative educational initiatives, strategic legal advocacy, and comprehensive support for rural communities. Our commitment to defending constitutional rights and preserving American values remains as strong as ever.',
      image: '/media/Photos/nyc-5323170_1280.jpg',
      achievements: [
        'Operating programs in all 50 states',
        'Educational resources reaching over 1 million Americans annually',
        'Legal Defense Fund supporting dozens of constitutional rights cases',
        'Rural support programs serving hundreds of communities nationwide'
      ]
    },
  ];

  // Key milestones data
  const milestones = [
    { number: '14', label: 'Years Defending American Values' },
    { number: '50+', label: 'Major Constitutional Cases' },
    { number: '1M+', label: 'Citizens Educated Annually' },
    { number: '500+', label: 'Rural Communities Supported' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <Image 
              src="/media/Photos/washingtondc-4816984_1280.jpg" 
              alt="Washington DC"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-navy-900/50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6">
              Our History
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              The story of the Tomorrow Foundation's commitment to American values
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Foundation Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                  Our Origins
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6 font-serif">
                  The Foundation Story
                </h2>
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p>
                    The Tomorrow Foundation was born from a profound concern for the future of American constitutional principles and values. In 2010, Dr. Robert Anderson, a constitutional law professor, gathered a small group of like-minded scholars, legal experts, and rural community advocates who shared his vision.
                  </p>
                  <p>
                    "We saw that many Americans were disconnected from the constitutional principles that made our nation great," Dr. Anderson recalls. "At the same time, rural communities—which have long been guardians of traditional American values—were facing unprecedented challenges."
                  </p>
                  <p>
                    The founding team established the Tomorrow Foundation with a clear mission: to defend constitutional rights, educate citizens about their rights, and support rural communities and agriculture. They believed that by focusing on these three pillars, they could help preserve the principles that have made America exceptional.
                  </p>
                  <p className="font-semibold text-navy-900">
                    From humble beginnings with just five dedicated staff members, the Foundation has grown into a nationwide organization with programs in all 50 states and a network of thousands of volunteers and supporters.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <div className="relative">
              <FadeIn direction="left" delay={0.2}>
                <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl border-4 border-white">
                  <Image 
                    src="/media/Photos/pexels-olly-932352.jpg" 
                    alt="Foundation founder"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.4} direction="up">
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-navy-50 p-6 rounded-xl shadow-lg border-2 border-white">
                  <p className="text-xl font-serif text-navy-900 italic mb-4">
                    "American values forged the greatest nation in history. It's up to us to keep it that way."
                  </p>
                  <p className="text-red-600 font-medium">
                    — Dr. Robert Anderson, Founder
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-serif text-gold-400">
              Key Milestones
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <motion.div 
                  className="bg-navy-800/50 p-6 rounded-lg border border-navy-700 hover:transform hover:scale-105 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">{milestone.number}</h3>
                  <p className="text-lg text-white/80">{milestone.label}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 font-serif">
                Foundation Timeline
              </h2>
              <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
                From our founding to the present day, follow the growth and impact of the Tomorrow Foundation
              </p>
            </FadeIn>
          </div>
          
          <div className="space-y-24">
            {timelineData.map((item, index) => (
              <FadeIn key={index} delay={0.1}>
                <div className={`md:flex ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-5/12">
                    <motion.div 
                      className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <div className="bg-red-600 text-white font-bold px-4 py-2 rounded-full inline-block mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-2xl font-bold font-serif">{item.title}</h3>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="md:w-2/12 flex justify-center">
                    <div className="hidden md:block w-px bg-red-200 h-full mx-auto relative">
                      <div className="absolute w-4 h-4 rounded-full bg-red-600 top-40 -translate-x-2"></div>
                    </div>
                  </div>
                  
                  <div className="mt-6 md:mt-0 md:w-5/12 flex items-center">
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                      <p className="text-gray-700 mb-6">{item.description}</p>
                      <h4 className="text-lg font-semibold text-navy-900 mb-4">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <FadeIn direction="right">
                <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src="/media/Photos/monument-2501317_1280.jpg" 
                    alt="Washington Monument"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
            
            <div className="order-1 lg:order-2">
              <FadeIn direction="left" delay={0.2}>
                <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                  Looking Forward
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6 font-serif">
                  Our Vision for the Future
                </h2>
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p>
                    As we look to the future, the Tomorrow Foundation remains steadfast in its commitment to defending constitutional rights, educating citizens, and supporting rural communities. We envision expanding our impact through:
                  </p>
                  <ul>
                    <li>
                      <strong>Enhanced Educational Initiatives</strong> — Developing new digital learning platforms and curriculum materials to reach millions more Americans.
                    </li>
                    <li>
                      <strong>Expanded Legal Defense Network</strong> — Building our attorney network to defend constitutional rights in every state and federal circuit.
                    </li>
                    <li>
                      <strong>Comprehensive Rural Support</strong> — Creating innovative programs to strengthen agricultural communities and preserve rural heritage.
                    </li>
                    <li>
                      <strong>Global Perspective</strong> — Sharing American constitutional principles and values with international audiences.
                    </li>
                  </ul>
                  <p>
                    Through these efforts, we will continue our mission to ensure that the principles that have made America exceptional endure for generations to come.
                  </p>
                </div>
                <div className="mt-8">
                  <Link 
                    href="/get-involved" 
                    className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all duration-300"
                  >
                    Join Our Mission
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-navy-900 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 lg:p-16 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
                    Help Write the Next Chapter
                  </h2>
                  <p className="text-white/90 mb-8 text-lg">
                    Become part of the Tomorrow Foundation's ongoing history. Join us in our mission to preserve American values, defend constitutional rights, and support rural communities for future generations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/get-involved/volunteer"
                      className="px-8 py-4 bg-white text-navy-900 font-bold rounded-md hover:bg-gray-100 transition-colors duration-300 text-center"
                    >
                      Volunteer
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
                    src="/media/Photos/pexels-pixabay-208724.jpg"
                    alt="American farm landscape"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-navy-900/20"></div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 