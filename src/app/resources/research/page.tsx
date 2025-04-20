'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  DocumentTextIcon, 
  ArrowDownTrayIcon, 
  ArrowRightIcon,
  AcademicCapIcon,
  BookmarkIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

// Animation component
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

// Research Paper Card Component
interface ResearchPaperProps {
  paper: {
    title: string;
    author: string;
    date: string;
    category: string;
    excerpt: string;
    image: string;
    link: string;
    pdf?: string;
  };
  index: number;
}

const ResearchPaperCard: React.FC<ResearchPaperProps> = ({ paper, index }) => {
  return (
    <FadeIn delay={0.1 * index} direction="up" fullWidth>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
        <div className="relative h-52 w-full overflow-hidden">
          <Image 
            src={paper.image} 
            alt={paper.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-navy-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link 
              href={paper.link}
              className="px-4 py-2 bg-white text-navy-900 rounded-md font-medium text-sm"
            >
              View Details
            </Link>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-3">
            <span className="text-xs font-medium bg-red-50 text-red-600 px-3 py-1 rounded-full">
              {paper.category}
            </span>
            <span className="text-xs text-gray-500 ml-3">{paper.date}</span>
          </div>
          <h3 className="text-xl font-serif font-semibold mb-2 text-navy-900">{paper.title}</h3>
          <p className="text-sm text-gray-500 mb-2">By {paper.author}</p>
          <p className="text-gray-600 mb-4 line-clamp-3">{paper.excerpt}</p>
          <div className="flex justify-between items-center">
            <Link 
              href={paper.link} 
              className="inline-flex items-center font-medium text-red-600 hover:text-red-700"
            >
              Read more
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Link>
            {paper.pdf && (
              <Link 
                href={paper.pdf} 
                className="inline-flex items-center text-gray-600 hover:text-navy-900"
              >
                <ArrowDownTrayIcon className="w-4 h-4 mr-1" />
                PDF
              </Link>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

// Research Feature Card Component
interface ResearchFeatureProps {
  feature: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
  delay: number;
}

const ResearchFeatureCard: React.FC<ResearchFeatureProps> = ({ feature, delay }) => {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="bg-white rounded-xl p-6 shadow-sm h-full">
        <div className="p-3 bg-red-50 rounded-xl w-fit mb-4 text-red-600">
          {feature.icon}
        </div>
        <h3 className="text-lg font-semibold mb-3 text-navy-900">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    </FadeIn>
  );
};

export default function Research() {
  // Research Papers data
  const researchPapers = [
    {
      title: "The Constitutional Basis for Rural Prosperity",
      author: "Dr. Michael Reynolds",
      date: "July 15, 2024",
      category: "Constitutional Rights",
      excerpt: "This research paper examines how constitutional principles provide a foundation for policies that support rural economic development and agricultural prosperity in America.",
      image: "/media/Photos/capitol-5019534_1280.jpg",
      link: "/resources/research/constitutional-basis-rural-prosperity",
      pdf: "/resources/research/pdf/constitutional-basis-rural-prosperity.pdf"
    },
    {
      title: "Educational Freedom and Parental Rights",
      author: "Dr. Sarah Jenkins",
      date: "June 8, 2024",
      category: "Citizen Education",
      excerpt: "A comprehensive analysis of educational freedom, parental rights in education, and how these principles align with American constitutional values.",
      image: "/media/Photos/us-capitol-477987_1280.jpg",
      link: "/resources/research/educational-freedom",
      pdf: "/resources/research/pdf/educational-freedom.pdf"
    },
    {
      title: "Agricultural Policy and Rural Communities",
      author: "Dr. Robert Thompson",
      date: "May 22, 2024",
      category: "Rural Communities",
      excerpt: "This paper analyzes the impact of current agricultural policies on rural communities and proposes reforms that would strengthen America's heartland.",
      image: "/media/Photos/pexels-brett-sayles-1340504.jpg",
      link: "/resources/research/agricultural-policy-impact",
      pdf: "/resources/research/pdf/agricultural-policy-impact.pdf"
    },
    {
      title: "First Amendment Protections for Religious Liberty",
      author: "Dr. Elizabeth Chen",
      date: "April 30, 2024",
      category: "Constitutional Rights",
      excerpt: "An examination of recent challenges to religious liberty and how the First Amendment continues to serve as a bulwark against government overreach.",
      image: "/media/Photos/monument-2501317_1280.jpg",
      link: "/resources/research/first-amendment-religious-liberty",
      pdf: "/resources/research/pdf/first-amendment-religious-liberty.pdf"
    },
    {
      title: "The Economic Impact of Regulatory Burdens on Agriculture",
      author: "Dr. James Wilson",
      date: "March 15, 2024",
      category: "Rural Communities",
      excerpt: "This research quantifies the economic costs of regulatory compliance for American farmers and proposes a framework for regulatory reform.",
      image: "/media/Photos/pexels-pixabay-208724.jpg",
      link: "/resources/research/regulatory-burdens-agriculture",
      pdf: "/resources/research/pdf/regulatory-burdens-agriculture.pdf"
    },
    {
      title: "Civic Education in the 21st Century",
      author: "Dr. Emily Rodriguez",
      date: "February 28, 2024",
      category: "Citizen Education",
      excerpt: "An analysis of the state of civic education in American schools and recommendations for curriculum development that emphasizes constitutional principles.",
      image: "/media/Photos/pexels-olly-722014.jpg",
      link: "/resources/research/civic-education-21st-century",
      pdf: "/resources/research/pdf/civic-education-21st-century.pdf"
    }
  ];

  // Research Features data
  const researchFeatures = [
    {
      icon: <DocumentTextIcon className="w-6 h-6" />,
      title: "Peer-Reviewed Research",
      description: "Our papers undergo rigorous peer review by experts in constitutional law, education, and agricultural policy."
    },
    {
      icon: <AcademicCapIcon className="w-6 h-6" />,
      title: "Academic Partnerships",
      description: "We collaborate with leading universities and research institutions across the country."
    },
    {
      icon: <BookmarkIcon className="w-6 h-6" />,
      title: "Practical Applications",
      description: "Research that translates into actionable policies and educational materials for citizens."
    },
    {
      icon: <ChartBarIcon className="w-6 h-6" />,
      title: "Data-Driven Insights",
      description: "Our work is grounded in empirical evidence and statistical analysis to support sound policy recommendations."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-navy-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Photos/nyc-5323170_1280.jpg"
            alt="Research Header"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-6">Research</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-gray-300 max-w-3xl">
              Our extensive research informs policy, educates citizens, and provides a foundation for our advocacy efforts to defend constitutional rights and support rural communities.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Research Features Section */}
        <div className="mb-16">
          <FadeIn>
            <div className="flex items-center mb-10">
              <h2 className="text-3xl font-serif font-bold text-navy-900">Our Research Approach</h2>
              <div className="ml-4 flex-grow h-px bg-red-600/30"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchFeatures.map((feature, index) => (
              <ResearchFeatureCard key={index} feature={feature} delay={0.1 * index} />
            ))}
          </div>
        </div>

        {/* Research Filter Section */}
        <div className="mb-12">
          <FadeIn>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-medium text-navy-900">Filter by:</span>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                  All Research
                </button>
                <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                  Constitutional Rights
                </button>
                <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                  Citizen Education
                </button>
                <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                  Rural Communities
                </button>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Research Papers Section */}
        <div className="mb-16">
          <FadeIn>
            <div className="flex items-center mb-10">
              <h2 className="text-3xl font-serif font-bold text-navy-900">Recent Research</h2>
              <div className="ml-4 flex-grow h-px bg-red-600/30"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchPapers.map((paper, index) => (
              <ResearchPaperCard key={index} paper={paper} index={index} />
            ))}
          </div>
        </div>

        {/* Submit Research Proposal Section */}
        <div className="mb-16">
          <div className="bg-white rounded-xl p-8 shadow-sm overflow-hidden relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
            <div className="lg:flex items-center justify-between">
              <div className="lg:w-2/3 mb-6 lg:mb-0">
                <FadeIn>
                  <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">Research Collaboration</h3>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <p className="text-gray-600 mb-6">
                    Are you a researcher or academic with expertise in constitutional law, rural policy, or civic education? We welcome collaboration proposals from scholars who share our mission of defending American values.
                  </p>
                </FadeIn>
              </div>
              <FadeIn delay={0.2}>
                <Link
                  href="/contact?topic=research"
                  className="px-6 py-3 bg-gold-500 text-navy-900 font-bold rounded-md hover:bg-gold-400 transition-all inline-block shadow-sm hover:shadow-md"
                >
                  Submit a Proposal
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <div className="bg-navy-900 text-white rounded-xl p-8 shadow-md">
            <div className="lg:flex items-center justify-between">
              <div className="lg:w-2/3 mb-6 lg:mb-0">
                <FadeIn>
                  <h3 className="text-2xl font-serif font-bold mb-4">Subscribe to Our Research Updates</h3>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <p className="text-gray-300 mb-4">
                    Stay informed about our latest research findings and publications. Our research newsletter provides insights into our work to defend constitutional rights, educate citizens, and support rural communities.
                  </p>
                </FadeIn>
              </div>
              <FadeIn delay={0.2}>
                <form className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 text-white"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gold-500 text-navy-900 font-bold rounded-md hover:bg-gold-400 transition-all shadow-sm hover:shadow-md"
                  >
                    Subscribe
                  </button>
                </form>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 