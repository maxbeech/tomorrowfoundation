'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// FadeIn animation component with enhanced TypeScript definitions
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | null;
  duration?: number;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  duration = 0.6,
  className = ''
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const initialY = direction === 'up' ? 30 : direction === 'down' ? -30 : 0;
  const initialX = direction === 'left' ? 30 : direction === 'right' ? -30 : 0;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: initialY, x: initialX }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: initialY, x: initialX }}
      transition={{ duration, delay, ease: [0.215, 0.61, 0.355, 1] }}
    >
      {children}
    </motion.div>
  );
};

// Job position type definition
interface JobPosition {
  id: string;
  title: string;
  location: string;
  department: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  posted: string;
  remote: boolean;
  featured?: boolean;
}

// Sample open positions data
const openPositions: JobPosition[] = [
  {
    id: "edu-program-manager",
    title: "Educational Program Manager",
    location: "Washington D.C.",
    department: "Education",
    type: "Full-time",
    description: "Lead the development and implementation of educational programs focused on constitutional literacy and civic engagement in schools across the nation.",
    requirements: [
      "Master's degree in Education, Public Policy, or related field",
      "5+ years of experience in educational program development",
      "Strong knowledge of U.S. Constitution and civic education",
      "Excellent project management and team leadership skills"
    ],
    responsibilities: [
      "Design and develop educational curricula on constitutional principles",
      "Coordinate with school districts to implement programs",
      "Monitor program effectiveness and make continuous improvements",
      "Manage a team of curriculum specialists and program coordinators"
    ],
    posted: "August 15, 2023",
    remote: false
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Specialist",
    location: "New York, NY",
    department: "Communications",
    type: "Full-time",
    description: "Drive our digital engagement strategy to promote constitutional education and awareness through various online platforms.",
    requirements: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "3+ years of experience in digital marketing",
      "Proficiency in social media management and analytics tools",
      "Strong content creation and storytelling abilities"
    ],
    responsibilities: [
      "Develop and implement digital marketing campaigns",
      "Manage social media accounts and online presence",
      "Create engaging content for various digital platforms",
      "Track and analyze campaign metrics to optimize strategies"
    ],
    posted: "September 1, 2023",
    remote: true
  },
  {
    id: "constitutional-fellow",
    title: "Constitutional Law Fellow",
    location: "Washington D.C.",
    department: "Legal Research",
    type: "Fellowship (2 years)",
    description: "Conduct research on constitutional issues and develop educational materials that translate complex legal concepts for public understanding.",
    requirements: [
      "J.D. with focus on Constitutional Law",
      "Strong academic record and research experience",
      "Excellent writing and communication skills",
      "Passion for constitutional education"
    ],
    responsibilities: [
      "Research and analyze current constitutional issues",
      "Develop educational materials and policy briefs",
      "Assist with legal workshops and educational events",
      "Contribute to the foundation's publications"
    ],
    posted: "July 20, 2023",
    remote: false
  },
  {
    id: "rural-outreach",
    title: "Rural Outreach Coordinator",
    location: "Flexible",
    department: "Community Engagement",
    type: "Full-time",
    description: "Expand our constitutional education initiatives to underserved rural communities through tailored outreach and engagement strategies.",
    requirements: [
      "Bachelor's degree in Community Development, Public Relations, or related field",
      "3+ years of experience in community outreach or rural program development",
      "Strong understanding of rural community dynamics",
      "Excellent interpersonal and communication skills"
    ],
    responsibilities: [
      "Develop and implement rural community engagement strategies",
      "Build partnerships with local organizations and institutions",
      "Coordinate educational events and workshops in rural communities",
      "Adapt foundation programs to meet rural community needs"
    ],
    posted: "August 10, 2023",
    remote: true
  },
  {
    id: "development-associate",
    title: "Development Associate",
    location: "Boston, MA",
    department: "Fundraising",
    type: "Full-time",
    description: "Support the foundation's fundraising efforts to sustain and expand our constitutional education programs nationwide.",
    requirements: [
      "Bachelor's degree in Nonprofit Management, Business, or related field",
      "2+ years of experience in nonprofit fundraising or development",
      "Strong organizational and database management skills",
      "Excellent written and verbal communication abilities"
    ],
    responsibilities: [
      "Assist with donor identification, research, and cultivation",
      "Coordinate fundraising events and campaigns",
      "Maintain donor database and acknowledgment systems",
      "Prepare grant proposals and reports"
    ],
    posted: "September 5, 2023",
    remote: false
  },
  {
    id: "education-intern",
    title: "Constitutional Education Intern",
    location: "Washington D.C.",
    department: "Education",
    type: "Internship (6 months)",
    description: "Gain hands-on experience in developing and implementing constitutional education programs for various audiences.",
    requirements: [
      "Current enrollment in undergraduate or graduate program in Education, Political Science, or related field",
      "Strong interest in constitutional education and civic engagement",
      "Excellent research and writing skills",
      "Ability to work both independently and as part of a team"
    ],
    responsibilities: [
      "Assist with curriculum development and program implementation",
      "Support research on constitutional education best practices",
      "Help coordinate educational events and workshops",
      "Contribute to program evaluation and improvement"
    ],
    posted: "August 25, 2023",
    remote: false
  }
];

export default function CareersPage() {
  // Create references for parallax effect
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Parallax Video Background */}
      <div ref={containerRef} className="relative h-[70vh] overflow-hidden flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/media/home_hero_slider/8286485-hd_1280_720_30fps.mp4" type="video/mp4" />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div style={{ y }}>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
            >
              Shape Tomorrow
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xl md:text-3xl max-w-4xl mx-auto text-white mb-8">
                Join our mission to preserve constitutional principles and empower 
                citizens across America.
              </p>
              <Link href="#open-positions">
                <span className="inline-block bg-white text-blue-900 py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300 text-lg font-bold">
                  View Open Positions
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Our Culture Section with Images */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At the Tomorrow Foundation, we're building a team of passionate individuals 
              committed to making a lasting impact on America's constitutional future.
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FadeIn delay={0.1} direction="left">
              <div className="bg-white p-8 rounded-lg shadow-md h-full border-t-4 border-blue-600">
                <h3 className="text-2xl font-semibold mb-4">Purpose-Driven</h3>
                <p className="text-gray-600 mb-6">
                  Every role at the Tomorrow Foundation contributes to our mission of 
                  preserving America's constitutional principles for future generations.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mt-auto">
                  <Image 
                    src="/media/Photos/monument-2501317_1280.jpg" 
                    alt="Washington Monument" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full border-t-4 border-red-600">
                <h3 className="text-2xl font-semibold mb-4">Collaborative Spirit</h3>
                <p className="text-gray-600 mb-6">
                  We work together across departments and disciplines, bringing diverse 
                  perspectives to solve complex challenges.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mt-auto">
                  <Image 
                    src="/media/Photos/pexels-olly-722014.jpg" 
                    alt="Team collaboration" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="right">
              <div className="bg-white p-8 rounded-lg shadow-md h-full border-t-4 border-gold-500">
                <h3 className="text-2xl font-semibold mb-4">Growth Mindset</h3>
                <p className="text-gray-600 mb-6">
                  We value continuous learning and professional development, helping 
                  team members reach their full potential.
                </p>
                <div className="relative h-64 rounded-lg overflow-hidden mt-auto">
                  <Image 
                    src="/media/Photos/pexels-brett-sayles-1340504.jpg" 
                    alt="Learning and growth" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section - New */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <FadeIn delay={0.1}>
              <div>
                <div className="text-5xl font-bold mb-2">50</div>
                <p className="text-blue-200">States Reached</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <div className="text-5xl font-bold mb-2">100+</div>
                <p className="text-blue-200">Team Members</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div>
                <div className="text-5xl font-bold mb-2">4.8</div>
                <p className="text-blue-200">Employee Satisfaction</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div>
                <div className="text-5xl font-bold mb-2">92%</div>
                <p className="text-blue-200">Retention Rate</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why You'll Love Working Here</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond a competitive salary, we offer comprehensive benefits designed 
              to support your wellbeing, growth, and work-life balance.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            <FadeIn delay={0.1} direction="up">
              <div className="relative">
                <div className="absolute -top-6 left-0 right-0 mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-center pt-6 mt-6 border-t-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-3">Premium Healthcare</h3>
                  <p className="text-gray-600">
                    Comprehensive medical, dental, and vision coverage for you and your dependents with minimal out-of-pocket costs.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up">
              <div className="relative">
                <div className="absolute -top-6 left-0 right-0 mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-center pt-6 mt-6 border-t-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-3">Flexible Work Model</h3>
                  <p className="text-gray-600">
                    Hybrid work arrangements with the flexibility to choose when you work from home or the office.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="relative">
                <div className="absolute -top-6 left-0 right-0 mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="text-center pt-6 mt-6 border-t-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-3">Learning & Growth</h3>
                  <p className="text-gray-600">
                    $2,500 annual professional development stipend plus mentorship opportunities and leadership training.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
              <div className="relative">
                <div className="absolute -top-6 left-0 right-0 mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-center pt-6 mt-6 border-t-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-3">Financial Security</h3>
                  <p className="text-gray-600">
                    401(k) with 6% employer match, competitive salaries, and annual performance-based bonuses.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.5} direction="up">
              <div className="relative">
                <div className="absolute -top-6 left-0 right-0 mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <div className="text-center pt-6 mt-6 border-t-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-3">Generous Time Off</h3>
                  <p className="text-gray-600">
                    Unlimited PTO, 12 paid holidays, 12 weeks paid parental leave, and a company-wide week off in December.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.6} direction="up">
              <div className="relative">
                <div className="absolute -top-6 left-0 right-0 mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-center pt-6 mt-6 border-t-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-3">Wellness Program</h3>
                  <p className="text-gray-600">
                    Monthly wellness stipend, mental health resources, and quarterly wellness days to recharge.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.7} direction="up">
              <div className="relative">
                <div className="absolute -top-6 left-0 right-0 mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-center pt-6 mt-6 border-t-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-3">Team Building</h3>
                  <p className="text-gray-600">
                    Quarterly team retreats, monthly social events, and an annual all-company conference.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.8} direction="up">
              <div className="relative">
                <div className="absolute -top-6 left-0 right-0 mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-center pt-6 mt-6 border-t-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-3">Mission Impact</h3>
                  <p className="text-gray-600">
                    Volunteer time off, donation matching up to $2,500 annually, and civic engagement opportunities.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section - New */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Hear From Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team members share their experiences working at the Tomorrow Foundation.
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} direction="left">
              <div className="h-[400px] rounded-lg overflow-hidden shadow-2xl">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="/media/Photos/capitol-5019534_1280.jpg"
                >
                  <source src="/media/home_hero_slider/12603667_1280_720_30fps.mp4" type="video/mp4" />
                </video>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="right">
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4">Sarah Johnson</h3>
                  <p className="text-blue-300 mb-4">Constitutional Education Specialist</p>
                  <p className="text-gray-300">
                    "Working at the Tomorrow Foundation has been the most rewarding experience of my career. 
                    I've had the opportunity to develop educational programs that have reached thousands of 
                    Americans, helping them understand their constitutional rights in practical, meaningful ways."
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4">Michael Rodriguez</h3>
                  <p className="text-blue-300 mb-4">Rural Outreach Coordinator</p>
                  <p className="text-gray-300">
                    "What I value most about the Tomorrow Foundation is how we actively seek to reach 
                    Americans in every corner of the country. Our work in rural communities has 
                    shown me the power of constitutional education to bridge divides and build common ground."
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Open Positions Section - Enhanced */}
      <section id="open-positions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Current Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team and be part of preserving America's constitutional principles for future generations.
            </p>
          </FadeIn>
          
          <div className="space-y-6 max-w-5xl mx-auto">
            {openPositions.map((job, index) => (
              <FadeIn key={job.id} delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600 relative overflow-hidden group">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform translate-x-16 -translate-y-8 transition-transform duration-500 group-hover:translate-x-8 group-hover:-translate-y-4">
                    <Image
                      src="/media/pattern.svg"
                      alt="Pattern"
                      width={200}
                      height={200}
                      unoptimized={true}
                    />
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start relative z-10">
                    <div className="flex-1">
                      <div className="flex items-start">
                        <div>
                          <h3 className="text-2xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">{job.title}</h3>
                          <p className="text-gray-600 mb-4">{job.department} | {job.location}{job.remote ? " (Remote Option)" : ""}</p>
                        </div>
                      </div>
                      <div className="mb-6">
                        <p className="text-gray-700">{job.description}</p>
                      </div>
                      <div className="mb-4">
                        <span className="inline-block mr-4 px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">{job.type}</span>
                        <span className="text-sm text-gray-500">Posted: {job.posted}</span>
                      </div>
                    </div>
                    <div className="mt-6 md:mt-0 md:ml-8 flex-shrink-0">
                      <Link href={`/about/careers/${job.id}`}>
                        <span className="inline-block bg-blue-800 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300 font-bold">
                          View Details
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <FadeIn delay={0.5}>
              <p className="text-lg text-gray-600 mb-6">Don't see a position that fits your skills?</p>
              <Link href="/contact">
                <span className="inline-block border-2 border-blue-600 text-blue-800 py-3 px-8 rounded-md hover:bg-blue-50 transition duration-300 font-bold">
                  Submit Your Resume
                </span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Why Join the Tomorrow Foundation</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Meaningful Impact</h3>
                <p>
                  Your work will directly contribute to strengthening civic education 
                  and constitutional literacy across communities throughout America.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Professional Growth</h3>
                <p>
                  Develop your skills in a collaborative environment with opportunities 
                  for advancement, continuous learning, and cross-functional experience.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Values-Driven Culture</h3>
                <p>
                  Join a team united by shared commitment to constitutional principles, 
                  civic responsibility, and educational excellence.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 opacity-5 w-1/2 h-full">
          <Image
            src="/media/pattern.svg"
            alt="Pattern"
            fill
            style={{ objectFit: 'cover' }}
            unoptimized={true}
          />
        </div>
        
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-16 relative z-10">
            <h2 className="text-4xl font-bold mb-6">Our Hiring Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A transparent and efficient experience to help us find the right fit for our team.
            </p>
          </FadeIn>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 md:block hidden"></div>
            
            <div className="space-y-16 relative z-10">
              <FadeIn delay={0.1}>
                <div className="md:flex items-center">
                  <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 md:text-right">
                    <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600 relative">
                      <div className="absolute -top-10 left-0 md:left-auto md:right-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">1</div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">Application Review</h3>
                      <p className="text-gray-700">
                        Submit your application online. Our talent team reviews each application carefully, 
                        looking beyond just keywords to understand your unique qualifications.
                      </p>
                      <p className="text-blue-600 font-medium mt-4">Average time: 5-7 days</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 hidden md:block">
                    {/* Timeline Circle */}
                    <div className="w-6 h-6 rounded-full bg-blue-500 shadow-lg absolute left-1/2 transform -translate-x-1/2 border-4 border-white"></div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="md:flex items-center">
                  <div className="md:w-1/2 hidden md:block">
                    {/* Timeline Circle */}
                    <div className="w-6 h-6 rounded-full bg-blue-500 shadow-lg absolute left-1/2 transform -translate-x-1/2 border-4 border-white"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-16">
                    <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600 relative">
                      <div className="absolute -top-10 right-0 md:right-auto md:left-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">2</div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">Initial Conversation</h3>
                      <p className="text-gray-700">
                        A 30-minute video call with our talent team to discuss your background, 
                        interest in the role, and answer any initial questions you might have.
                      </p>
                      <p className="text-blue-600 font-medium mt-4">Average time: 30 minutes</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <div className="md:flex items-center">
                  <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 md:text-right">
                    <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600 relative">
                      <div className="absolute -top-10 left-0 md:left-auto md:right-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">3</div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">Skills Assessment</h3>
                      <p className="text-gray-700">
                        Depending on the role, we may ask you to complete a practical assessment 
                        that simulates the actual work you'd be doing. We respect your time and 
                        limit assessments to 2-3 hours.
                      </p>
                      <p className="text-blue-600 font-medium mt-4">Average time: 2-3 hours</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 hidden md:block">
                    {/* Timeline Circle */}
                    <div className="w-6 h-6 rounded-full bg-blue-500 shadow-lg absolute left-1/2 transform -translate-x-1/2 border-4 border-white"></div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <div className="md:flex items-center">
                  <div className="md:w-1/2 hidden md:block">
                    {/* Timeline Circle */}
                    <div className="w-6 h-6 rounded-full bg-blue-500 shadow-lg absolute left-1/2 transform -translate-x-1/2 border-4 border-white"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-16">
                    <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600 relative">
                      <div className="absolute -top-10 right-0 md:right-auto md:left-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">4</div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">Team Interviews</h3>
                      <p className="text-gray-700">
                        Meet with future teammates and cross-functional partners to get a real sense 
                        of the work and culture. We structure these conversations to be informative 
                        for both you and us.
                      </p>
                      <p className="text-blue-600 font-medium mt-4">Average time: 2-3 hours</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.5}>
                <div className="md:flex items-center">
                  <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 md:text-right">
                    <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-600 relative">
                      <div className="absolute -top-10 left-0 md:left-auto md:right-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">5</div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">Offer & Onboarding</h3>
                      <p className="text-gray-700">
                        We aim to make decisions quickly. Once an offer is extended and accepted, 
                        our comprehensive onboarding program will help you hit the ground running 
                        and feel welcome from day one.
                      </p>
                      <p className="text-blue-600 font-medium mt-4">Decision timeline: 1 week</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 hidden md:block">
                    {/* Timeline Circle */}
                    <div className="w-6 h-6 rounded-full bg-green-500 shadow-lg absolute left-1/2 transform -translate-x-1/2 border-4 border-white"></div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
          
          <div className="mt-16 text-center relative z-10">
            <FadeIn>
              <p className="text-gray-600 mb-6 text-lg">
                We're committed to creating an inclusive hiring process that accommodates all candidates. 
                Please let us know if you need any accommodations during your application process.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Image Gallery - New */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Life at Tomorrow Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a glimpse of our workspace and team culture
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <FadeIn delay={0.1} className="col-span-2">
              <div className="h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/media/Photos/dome-2831971_1280.jpg"
                  alt="Team at event"
                  width={640}
                  height={360}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/media/Photos/pexels-olly-932352.jpg"
                  alt="Office space"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/media/Photos/us-capitol-477987_1280.jpg"
                  alt="Team collaboration"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/media/Photos/pexels-timmossholder-8080490.jpg"
                  alt="Community event"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.5} className="col-span-2">
              <div className="h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/media/Photos/nyc-5323170_1280.jpg"
                  alt="New York office"
                  width={640}
                  height={360}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* EEO Statement with Background Image */}
      <section className="py-20 relative">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/media/Photos/washingtondc-4816984_1280.jpg" 
            alt="Washington DC" 
            fill
            style={{ objectFit: 'cover' }}
            className="brightness-[0.25]"
          />
        </div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <FadeIn>
            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Committed to Diversity & Inclusion</h2>
              <p className="text-gray-800 mb-6 text-lg">
                The Tomorrow Foundation is committed to creating a diverse environment and is proud to be an equal 
                opportunity employer. All qualified applicants will receive consideration for employment without 
                regard to race, color, religion, gender, gender identity or expression, sexual orientation, 
                national origin, genetics, disability, age, or veteran status.
              </p>
              <p className="text-gray-800 text-lg">
                We believe that diverse perspectives strengthen our work and better enable us to serve all Americans. 
                We particularly encourage applications from underrepresented groups in the legal and nonprofit sectors.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section - New */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn className="mb-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join our team and help preserve constitutional principles for future generations.
            </p>
          </FadeIn>
          
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <Link href="#open-positions">
                <span className="inline-block bg-white text-blue-900 py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300 font-bold">
                  Browse Open Positions
                </span>
              </Link>
              <Link href="/contact">
                <span className="inline-block border-2 border-white text-white py-3 px-8 rounded-md hover:bg-blue-800 transition duration-300 font-bold">
                  Contact Our Team
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Back to About Link */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/about">
            <span className="text-blue-800 hover:text-blue-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Back to About
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
} 