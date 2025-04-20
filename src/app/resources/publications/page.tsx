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
  BookOpenIcon,
  NewspaperIcon,
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

// Publication Card Component
interface PublicationProps {
  publication: {
    title: string;
    type: string;
    date: string;
    author: string;
    excerpt: string;
    image: string;
    link: string;
    pdf?: string;
  };
  index: number;
}

const PublicationCard: React.FC<PublicationProps> = ({ publication, index }) => {
  return (
    <FadeIn delay={0.1 * index} direction="up" fullWidth>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group h-full flex flex-col">
        <div className="relative h-52 w-full overflow-hidden">
          <Image 
            src={publication.image} 
            alt={publication.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-navy-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link 
              href={publication.link}
              className="px-4 py-2 bg-white text-navy-900 rounded-md font-medium text-sm"
            >
              View Details
            </Link>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center mb-3">
            <span className="text-xs font-medium bg-red-50 text-red-600 px-3 py-1 rounded-full">
              {publication.type}
            </span>
            <span className="text-xs text-gray-500 ml-3">{publication.date}</span>
          </div>
          <h3 className="text-xl font-serif font-semibold mb-2 text-navy-900">{publication.title}</h3>
          <p className="text-sm text-gray-500 mb-2">By {publication.author}</p>
          <p className="text-gray-600 mb-4 flex-grow">{publication.excerpt}</p>
          <div className="flex justify-between items-center mt-auto">
            <Link 
              href={publication.link} 
              className="inline-flex items-center font-medium text-red-600 hover:text-red-700"
            >
              Read more
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Link>
            {publication.pdf && (
              <Link 
                href={publication.pdf} 
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

// Featured Publication Component
interface FeaturedPublicationProps {
  publication: {
    title: string;
    type: string;
    date: string;
    author: string;
    excerpt: string;
    image: string;
    link: string;
    pdf?: string;
  };
}

const FeaturedPublication: React.FC<FeaturedPublicationProps> = ({ publication }) => {
  return (
    <FadeIn direction="up" className="w-full">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="lg:flex">
          <div className="lg:w-1/2 relative h-64 lg:h-auto">
            <Image 
              src={publication.image} 
              alt={publication.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:w-1/2 p-8">
            <div className="flex items-center mb-3">
              <span className="text-xs font-medium bg-red-50 text-red-600 px-3 py-1 rounded-full">
                {publication.type}
              </span>
              <span className="text-xs text-gray-500 ml-3">{publication.date}</span>
            </div>
            <h2 className="text-2xl font-serif font-bold mb-3 text-navy-900">{publication.title}</h2>
            <p className="text-sm text-gray-500 mb-3">By {publication.author}</p>
            <p className="text-gray-600 mb-6">{publication.excerpt}</p>
            <div className="flex items-center space-x-4">
              <Link 
                href={publication.link} 
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Read Full Report
              </Link>
              {publication.pdf && (
                <Link 
                  href={publication.pdf} 
                  className="inline-flex items-center text-gray-600 hover:text-navy-900"
                >
                  <ArrowDownTrayIcon className="w-4 h-4 mr-1" />
                  Download PDF
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default function Publications() {
  // Featured publication
  const featuredPublication = {
    title: "Defending America's Constitutional Heritage: A Comprehensive Guide",
    type: "Special Report",
    date: "July 4, 2024",
    author: "Dr. James Wilson, Constitutional Scholar",
    excerpt: "Our flagship publication examines the historical context and modern applications of America's constitutional principles, providing citizens with a comprehensive understanding of their rights and how to defend them.",
    image: "/media/Photos/dome-2831971_1280.jpg",
    link: "/resources/publications/constitutional-heritage-guide",
    pdf: "/resources/publications/pdf/constitutional-heritage-guide.pdf"
  };

  // Regular publications data
  const publications = [
    {
      title: "Freedom of Speech in the Digital Age",
      type: "Policy Brief",
      date: "June 15, 2024",
      author: "Dr. Sarah Jenkins",
      excerpt: "This policy brief examines the challenges to free speech in the modern digital landscape and proposes policy solutions that protect this essential right.",
      image: "/media/Photos/capitol-5019534_1280.jpg",
      link: "/resources/publications/freedom-speech-digital-age",
      pdf: "/resources/publications/pdf/freedom-speech-digital-age.pdf"
    },
    {
      title: "Rural America: Challenges and Opportunities",
      type: "Research Report",
      date: "May 20, 2024",
      author: "Dr. Robert Thompson",
      excerpt: "A comprehensive analysis of the economic and social challenges facing rural America today, with actionable recommendations for policymakers.",
      image: "/media/Photos/pexels-brett-sayles-1340504.jpg",
      link: "/resources/publications/rural-america-report",
      pdf: "/resources/publications/pdf/rural-america-report.pdf"
    },
    {
      title: "Citizens' Guide to Constitutional Rights",
      type: "Educational Guide",
      date: "April 17, 2024",
      author: "Tomorrow Foundation Legal Team",
      excerpt: "An accessible guide to understanding and exercising your constitutional rights as an American citizen.",
      image: "/media/Photos/us-capitol-477987_1280.jpg",
      link: "/resources/publications/citizens-guide",
      pdf: "/resources/publications/pdf/citizens-guide.pdf"
    },
    {
      title: "Religious Liberty: America's First Freedom",
      type: "Policy Brief",
      date: "March 30, 2024",
      author: "Dr. Elizabeth Chen",
      excerpt: "This brief examines the historical and legal foundations of religious liberty in America and discusses contemporary challenges.",
      image: "/media/Photos/monument-2501317_1280.jpg",
      link: "/resources/publications/religious-liberty",
      pdf: "/resources/publications/pdf/religious-liberty.pdf"
    },
    {
      title: "Farming and Freedom: Agricultural Policy for a Stronger America",
      type: "Policy Report",
      date: "February 28, 2024",
      author: "Dr. James Wilson",
      excerpt: "An examination of how agricultural policy can strengthen rural communities while respecting property rights and free enterprise.",
      image: "/media/Photos/pexels-pixabay-208724.jpg",
      link: "/resources/publications/farming-freedom",
      pdf: "/resources/publications/pdf/farming-freedom.pdf"
    },
    {
      title: "America's Founding Documents: A Modern Guide",
      type: "Educational Resource",
      date: "January 20, 2024",
      author: "Historical Research Team",
      excerpt: "A comprehensive guide to the Declaration of Independence, Constitution, and Bill of Rights with modern context and applications.",
      image: "/media/Photos/bridge-4433114_1280.jpg",
      link: "/resources/publications/founding-documents-guide",
      pdf: "/resources/publications/pdf/founding-documents-guide.pdf"
    }
  ];

  // Publication types for filter
  const publicationTypes = [
    "All Publications", 
    "Policy Brief", 
    "Research Report", 
    "Educational Guide", 
    "Special Report"
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-navy-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Photos/washingtondc-4816984_1280.jpg"
            alt="Publications Header"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-6">Publications</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-gray-300 max-w-3xl">
              Access our comprehensive library of reports, policy briefs, and educational resources focusing on constitutional rights, civic education, and rural community support.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Featured Publication Section */}
        <div className="mb-16">
          <FadeIn>
            <div className="flex items-center mb-10">
              <h2 className="text-3xl font-serif font-bold text-navy-900">Featured Publication</h2>
              <div className="ml-4 flex-grow h-px bg-red-600/30"></div>
            </div>
          </FadeIn>

          <FeaturedPublication publication={featuredPublication} />
        </div>

        {/* Publication Types Section */}
        <div className="mb-12">
          <FadeIn>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-medium text-navy-900">Filter by:</span>
                {publicationTypes.map((type, index) => (
                  <button 
                    key={type} 
                    className={`px-4 py-2 rounded-md transition-colors ${
                      index === 0 
                        ? 'bg-red-600 text-white hover:bg-red-700' 
                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Publications Grid */}
        <div className="mb-16">
          <FadeIn>
            <div className="flex items-center mb-10">
              <h2 className="text-3xl font-serif font-bold text-navy-900">All Publications</h2>
              <div className="ml-4 flex-grow h-px bg-red-600/30"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((publication, index) => (
              <PublicationCard key={index} publication={publication} index={index} />
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <div className="bg-navy-900 text-white rounded-xl p-8 shadow-md">
            <div className="lg:flex items-center justify-between">
              <div className="lg:w-2/3 mb-6 lg:mb-0">
                <FadeIn>
                  <h3 className="text-2xl font-serif font-bold mb-4">Stay Updated on New Publications</h3>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <p className="text-gray-300 mb-4">
                    Subscribe to our newsletter to receive notifications when we release new reports, policy briefs, and educational resources.
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