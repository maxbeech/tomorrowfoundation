'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const FadeIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <InView threshold={0.2}>
      {({ ref, inView }) => (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          {children}
        </motion.div>
      )}
    </InView>
  );
};

type LeadershipMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  education: string[];
  experience: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
};

export default function LeadershipPage() {
  const leadershipTeam: LeadershipMember[] = [
    {
      id: 'john-madison',
      name: 'John Madison',
      role: 'Executive Director',
      image: '/images/team/john-madison.jpg',
      bio: 'John brings over 25 years of experience in constitutional law and nonprofit leadership. Prior to joining the Tomorrow Foundation, he served as a constitutional law professor and advised several prominent nonprofit organizations focused on civic education.',
      education: [
        'J.D., Harvard Law School',
        'B.A. in Political Science, Georgetown University'
      ],
      experience: [
        'Constitutional Law Professor, Jefferson University (2010-2020)',
        'Senior Legal Advisor, American Liberty Institute (2005-2010)',
        'Law Clerk, Supreme Court of the United States (2003-2005)'
      ],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/johnmadison',
        twitter: 'https://twitter.com/johnmadison',
        email: 'john@tomorrowfoundation.org'
      }
    },
    {
      id: 'sarah-pierce',
      name: 'Sarah Pierce',
      role: 'Chief Operating Officer',
      image: '/images/team/sarah-pierce.jpg',
      bio: 'Sarah oversees the Foundation\'s daily operations, strategic initiatives, and program implementation. Her background in nonprofit management and passion for civic engagement has helped scale the Foundation\'s impact across all 50 states.',
      education: [
        'M.B.A., Stanford Graduate School of Business',
        'B.S. in Public Administration, University of Virginia'
      ],
      experience: [
        'Director of Operations, National Education Alliance (2015-2020)',
        'Program Manager, Rural Community Development Initiative (2010-2015)',
        'Management Consultant, Johnson & Associates (2007-2010)'
      ],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/sarahpierce',
        email: 'sarah@tomorrowfoundation.org'
      }
    },
    {
      id: 'robert-washington',
      name: 'Robert Washington',
      role: 'Director of Educational Programs',
      image: '/images/team/robert-washington.jpg',
      bio: 'Robert leads the development and implementation of our educational initiatives across the country. His innovative approach to teaching constitutional principles has transformed how Americans understand their rights and responsibilities.',
      education: [
        'Ph.D. in Education, Columbia University',
        'M.A. in American History, University of Chicago',
        'B.A. in Education, Morehouse College'
      ],
      experience: [
        'Director of Curriculum, National History Foundation (2017-2020)',
        'High School History Teacher, Liberty Academy (2012-2017)',
        'Educational Consultant, Teaching America Program (2010-2012)'
      ],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/robertwashington',
        twitter: 'https://twitter.com/robertwashington',
        email: 'robert@tomorrowfoundation.org'
      }
    },
    {
      id: 'jennifer-adams',
      name: 'Jennifer Adams',
      role: 'Director of Legal Affairs',
      image: '/images/team/jennifer-adams.jpg',
      bio: 'Jennifer oversees the Constitutional Rights Defense Fund and provides legal guidance for all Foundation initiatives. Her extensive experience in constitutional litigation has been instrumental in protecting Americans\' fundamental rights.',
      education: [
        'J.D., Yale Law School',
        'B.A. in Philosophy, Stanford University'
      ],
      experience: [
        'Senior Constitutional Attorney, Liberty Legal Foundation (2013-2020)',
        'Partner, Hamilton & Partners Law Firm (2008-2013)',
        'Assistant U.S. Attorney, Department of Justice (2005-2008)'
      ],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/jenniferadams',
        email: 'jennifer@tomorrowfoundation.org'
      }
    },
    {
      id: 'michael-patterson',
      name: 'Michael Patterson',
      role: 'Director of Rural Outreach',
      image: '/images/team/michael-patterson.jpg',
      bio: 'Michael spearheads our initiatives in rural America, ensuring constitutional education reaches all communities. His deep understanding of rural issues and community building has been essential to our nationwide impact.',
      education: [
        'M.P.A., University of Nebraska',
        'B.S. in Agriculture and Rural Development, Kansas State University'
      ],
      experience: [
        'Rural Development Director, American Heartland Initiative (2015-2020)',
        'County Commissioner, Jefferson County (2010-2015)',
        'Community Organizer, Rural America Forward (2005-2010)'
      ],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/michaelpatterson',
        twitter: 'https://twitter.com/michaelpatterson',
        email: 'michael@tomorrowfoundation.org'
      }
    },
    {
      id: 'lisa-rodriguez',
      name: 'Lisa Rodriguez',
      role: 'Director of Community Partnerships',
      image: '/images/team/lisa-rodriguez.jpg',
      bio: 'Lisa develops strategic partnerships with organizations across the political spectrum to advance constitutional education and civic engagement. Her collaborative approach has created a diverse coalition of partners united by constitutional principles.',
      education: [
        'M.A. in Public Policy, Georgetown University',
        'B.A. in Communications, University of Texas'
      ],
      experience: [
        'Partnership Director, Civic Dialogue Initiative (2016-2020)',
        'Community Relations Manager, Heritage Foundation (2012-2016)',
        'Communications Specialist, U.S. Senate (2008-2012)'
      ],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/lisarodriguez',
        twitter: 'https://twitter.com/lisarodriguez',
        email: 'lisa@tomorrowfoundation.org'
      }
    }
  ];

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Our Leadership Team</h1>
              <p className="text-xl text-gray-300 mb-8">
                Meet the dedicated professionals leading our mission to preserve constitutional principles for future generations.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {leadershipTeam.map((member, index) => (
              <FadeIn key={member.id}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-80 w-full">
                    <Image 
                      src={member.image}
                      alt={`Photo of ${member.name}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-navy-900 mb-1">{member.name}</h3>
                    <p className="text-red-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-700 mb-4">{member.bio}</p>
                    
                    <Link 
                      href={`/about/leadership/${member.id}`}
                      className="inline-flex items-center text-navy-700 hover:text-navy-900 font-medium"
                    >
                      View Full Profile
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Full Bios Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-navy-900 font-serif mb-6">Leadership Biographies</h2>
              <p className="text-xl text-gray-700">
                Learn more about the experience and qualifications of our leadership team.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-16">
            {leadershipTeam.map((member, index) => (
              <FadeIn key={member.id}>
                <div id={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0 md:w-1/3">
                      <div className="relative h-full w-full" style={{ minHeight: '300px' }}>
                        <Image 
                          src={member.image}
                          alt={`Photo of ${member.name}`}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                    <div className="p-8 md:p-10 md:w-2/3">
                      <h3 className="text-2xl font-bold text-navy-900 mb-1">{member.name}</h3>
                      <p className="text-red-600 font-medium mb-6">{member.role}</p>
                      
                      <p className="text-gray-700 mb-6 text-lg">{member.bio}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-navy-900 mb-3">Education</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          {member.education.map((edu, i) => (
                            <li key={i}>{edu}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-navy-900 mb-3">Experience</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          {member.experience.map((exp, i) => (
                            <li key={i}>{exp}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {member.socialLinks && (
                        <div className="flex space-x-4 mt-6">
                          {member.socialLinks.linkedin && (
                            <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                              </svg>
                            </a>
                          )}
                          {member.socialLinks.twitter && (
                            <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                              </svg>
                            </a>
                          )}
                          {member.socialLinks.email && (
                            <a href={`mailto:${member.socialLinks.email}`} className="text-gray-600 hover:text-red-600">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                              </svg>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <FadeIn>
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold font-serif mb-4">Join Our Team</h2>
                <p className="text-gray-300 text-lg">
                  We're always looking for talented individuals who share our passion for preserving constitutional principles and educating Americans about their rights.
                </p>
              </div>
            </FadeIn>
            <div className="mt-8 md:mt-0">
              <Link 
                href="/about/careers" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-navy-900 bg-white hover:bg-gray-100 transition duration-300 ease-in-out"
              >
                View Open Positions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to About */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/about" 
            className="inline-flex items-center text-navy-700 hover:text-navy-900 font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to About
          </Link>
        </div>
      </section>
    </main>
  );
} 