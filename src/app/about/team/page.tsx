'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
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

export default function Team() {
  // Modal state
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Leadership team data
  const leadershipTeam: TeamMember[] = [
    {
      name: 'Robert Anderson',
      role: 'Executive Director',
      bio: 'Dr. Robert Anderson brings over 20 years of experience as a constitutional law professor to his role as Executive Director. His dedication to defending American values and constitutional rights has guided the Tomorrow Foundation since its inception. Robert has authored numerous publications on constitutional law and frequently speaks at universities and conferences across the country.',
      image: '/media/Photos/pexels-olly-932352.jpg',
      education: 'J.D., Harvard Law School; Ph.D. in Constitutional Law, Yale University',
      experience: [
        'Professor of Constitutional Law, Georgetown University (2005-2018)',
        'Senior Fellow, American Constitutional Society (2010-2018)',
        'Judicial Clerk, U.S. Supreme Court (2003-2004)'
      ]
    },
    {
      name: 'Sarah Johnson',
      role: 'Director of Rural Programs',
      bio: 'As a fifth-generation farmer and agricultural policy expert, Sarah Johnson brings authentic rural perspective to the Tomorrow Foundation. She oversees all initiatives related to supporting rural communities and agriculture across America. Her passion for preserving rural values while helping these communities thrive makes her an invaluable leader of our rural outreach programs.',
      image: '/media/Photos/pexels-olly-722014.jpg',
      education: 'M.S. in Agricultural Economics, Cornell University; B.S. in Farm Management, University of Nebraska',
      experience: [
        'Agricultural Policy Advisor, U.S. Department of Agriculture (2015-2020)',
        'President, National Rural Community Association (2012-2015)',
        'Owner/Operator, Johnson Family Farms (2000-present)'
      ]
    },
    {
      name: 'Michael Davis',
      role: 'Chief Legal Officer',
      bio: 'Michael Davis leads our legal initiatives with distinction, bringing extensive experience in constitutional law and property rights defense. His successful track record includes numerous victories safeguarding individual liberties and limiting government overreach. Michael coordinates our network of volunteer attorneys across all 50 states to protect Americans\' constitutional rights.',
      image: '/media/Photos/pexels-brett-sayles-1340504.jpg',
      education: 'J.D., University of Chicago Law School; B.A. in Political Science, Hillsdale College',
      experience: [
        'Constitutional Rights Attorney, Liberty Legal Institute (2011-2020)',
        'Partner, Davis & Williams Constitutional Law Practice (2008-2011)',
        'Associate Counsel, Senate Judiciary Committee (2006-2008)'
      ]
    }
  ];

  // Senior staff data 
  const seniorStaff: TeamMember[] = [
    {
      name: 'Jennifer Martinez',
      role: 'Director of Educational Programs',
      bio: 'Jennifer oversees our citizen education initiatives, developing curriculum and programs to help Americans understand their constitutional rights. Her background in education and curriculum development has helped expand our educational outreach to schools and communities nationwide.',
      image: '/media/Photos/pexels-pixabay-208724.jpg',
      education: 'M.Ed., Curriculum Development, Boston University; B.A. in Education, University of Virginia',
      experience: [
        'Curriculum Director, American Civics Education Foundation (2013-2019)',
        'High School History Teacher, Lincoln Academy (2008-2013)',
        'Educational Content Developer, Liberty Publications (2005-2008)'
      ]
    },
    {
      name: 'Thomas Wilson',
      role: 'Communications Director',
      bio: 'Thomas manages all communications and media relations for the Tomorrow Foundation. His strategic approach to messaging has significantly amplified our reach and impact across traditional and digital media platforms.',
      image: '/media/Photos/pexels-timmossholder-8080490.jpg',
      education: 'M.A. in Strategic Communications, Northwestern University; B.A. in Journalism, University of Missouri',
      experience: [
        'Senior Communications Strategist, Heritage Media Group (2014-2020)',
        'Press Secretary, U.S. Senator James Marshall (2010-2014)',
        'Journalist, National Review (2007-2010)'
      ]
    },
    {
      name: 'Patricia Reynolds',
      role: 'Chief Development Officer',
      bio: 'Patricia leads our fundraising and partnership development efforts. Her innovative approach to donor relationships has strengthened the financial foundation of our organization and enabled the expansion of our programs across the country.',
      image: '/media/Photos/pexels-pixabay-208724.jpg',
      education: 'MBA, Wharton School of Business; B.A. in Public Administration, University of Georgia',
      experience: [
        'VP of Development, American Values Coalition (2016-2020)',
        'Major Gifts Officer, Liberty University (2012-2016)',
        'Development Consultant, Reynolds Philanthropy Advisors (2008-2012)'
      ]
    },
    {
      name: 'David Chen',
      role: 'Research Director',
      bio: 'David oversees our research initiatives, producing data-driven reports and policy recommendations that inform our advocacy work. His analytical expertise ensures that our positions are well-supported by factual evidence and sound reasoning.',
      image: '/media/Photos/pexels-timmossholder-8080490.jpg',
      education: 'Ph.D. in Public Policy, University of Michigan; M.A. in Political Science, Duke University',
      experience: [
        'Senior Policy Analyst, American Enterprise Institute (2013-2020)',
        'Research Fellow, Hoover Institution (2010-2013)',
        'Policy Advisor, Governor\'s Office, State of Ohio (2007-2010)'
      ]
    }
  ];

  // Advisory board data
  const advisoryBoard: TeamMember[] = [
    {
      name: 'Elizabeth Grant',
      role: 'Constitutional Scholar',
      bio: 'Dr. Elizabeth Grant is a renowned constitutional scholar whose expertise guides our educational and legal initiatives. She has authored several books on constitutional interpretation and American founding principles.',
      image: '/media/Photos/pexels-olly-722014.jpg',
      education: 'Ph.D. in American History, University of Virginia; J.D., Georgetown Law',
      experience: [
        'Professor of Constitutional Law, Hillsdale College (2010-present)',
        'Visiting Scholar, Heritage Foundation (2015-2017)',
        'Author, "Original Intent: Understanding the Constitution as the Founders Did" (2018)'
      ]
    },
    {
      name: 'James Wilson',
      role: 'Agricultural Policy Expert',
      bio: 'James brings decades of experience in agricultural policy and rural development to our advisory board. His insights help shape our rural community support programs and agricultural initiatives.',
      image: '/media/Photos/pexels-brett-sayles-1340504.jpg',
      education: 'M.S. in Agricultural Economics, Iowa State University; B.S. in Agriculture, Texas A&M',
      experience: [
        'Commissioner of Agriculture, State of Nebraska (2008-2016)',
        'President, American Farm Bureau Federation (2016-2020)',
        'Owner, Wilson Family Ranch (1995-present)'
      ]
    },
    {
      name: 'Margaret Thompson',
      role: 'Civic Education Advisor',
      bio: 'Dr. Thompson is a leading authority on civic education, helping develop our educational curricula and programs. Her innovative approaches to teaching constitutional principles have influenced educators nationwide.',
      image: '/media/Photos/pexels-olly-722014.jpg',
      education: 'Ed.D., Harvard Graduate School of Education; M.A. in History, Stanford University',
      experience: [
        'Director, National Center for Civic Education (2014-2019)',
        'Author, "Reclaiming Civic Education in America" (2017)',
        'Curriculum Designer, U.S. Department of Education (2010-2014)'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <Image 
              src="/media/Photos/nyc-5323170_1280.jpg" 
              alt="American flag"
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
              Our Team
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              Meet the dedicated professionals leading the Tomorrow Foundation
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Our Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 font-serif">
                Executive Leadership Team
              </h2>
              <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
                The visionary leaders guiding our mission and strategy
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <motion.div 
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative h-80 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-bold font-serif mb-1">{member.name}</h3>
                      <p className="text-gold-400 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 line-clamp-3">{member.bio}</p>
                    <button 
                      className="mt-4 text-red-600 font-medium flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedMember(member);
                      }}
                    >
                      Read Full Bio
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Staff Section */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Our Experts
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 font-serif">
                Senior Staff
              </h2>
              <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
                Dedicated professionals driving our day-to-day operations and programs
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seniorStaff.map((member, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <motion.div 
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-1 font-serif">{member.name}</h3>
                    <p className="text-red-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-700 text-sm line-clamp-3">{member.bio}</p>
                    <button 
                      className="mt-3 text-sm text-navy-800 font-medium flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedMember(member);
                      }}
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Our Advisors
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 font-serif">
                Advisory Board
              </h2>
              <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
                Distinguished experts providing strategic guidance and subject matter expertise
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisoryBoard.map((member, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <motion.div 
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex"
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative w-1/3">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 w-2/3">
                    <h3 className="text-lg font-bold text-navy-900 mb-1 font-serif">{member.name}</h3>
                    <p className="text-red-600 font-medium mb-2 text-sm">{member.role}</p>
                    <p className="text-gray-700 text-sm line-clamp-3">{member.bio}</p>
                    <button 
                      className="mt-3 text-sm text-navy-800 font-medium flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedMember(member);
                      }}
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <span className="text-gold-400 font-semibold uppercase tracking-wider text-sm">
                  Careers
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6 font-serif">
                  Join Our Team
                </h2>
                <p className="text-white/80 mb-6 leading-relaxed text-lg">
                  We're always looking for passionate individuals who are dedicated to preserving American values and defending constitutional rights.
                </p>
                <p className="text-white/80 mb-8 leading-relaxed">
                  If you share our mission and want to make a difference, explore our current opportunities or send us your resume for future considerations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/get-involved/careers"
                    className="px-8 py-4 bg-white text-navy-900 font-bold rounded-md hover:bg-gray-100 transition-colors duration-300 text-center"
                  >
                    View Open Positions
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-4 border border-white text-white font-bold rounded-md hover:bg-white/10 transition-colors duration-300 text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-navy-800/50 p-8 rounded-xl border border-navy-700">
                <h3 className="text-2xl font-bold mb-6 font-serif text-gold-400">Why Work With Us?</h3>
                <ul className="space-y-4">
                  {[
                    "Make a meaningful impact defending American values",
                    "Collaborative, mission-driven work environment",
                    "Opportunities for professional growth and development",
                    "Work alongside passionate, like-minded professionals",
                    "Competitive compensation and benefits",
                    "Flexible work arrangements for many positions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-gold-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-navy-900/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div 
            className="bg-white rounded-xl max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-72 w-full">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent"></div>
              <button 
                className="absolute top-4 right-4 text-white bg-navy-900/50 rounded-full p-2 hover:bg-navy-900 transition-colors duration-300"
                onClick={() => setSelectedMember(null)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h2 className="text-3xl font-bold font-serif mb-1">{selectedMember.name}</h2>
                <p className="text-gold-400 font-medium text-xl">{selectedMember.role}</p>
              </div>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif">Biography</h3>
                <p className="text-gray-700 leading-relaxed">{selectedMember.bio}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif">Education</h3>
                <p className="text-gray-700">{selectedMember.education}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif">Experience</h3>
                <ul className="space-y-2">
                  {selectedMember.experience.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  education: string;
  experience: string[];
} 