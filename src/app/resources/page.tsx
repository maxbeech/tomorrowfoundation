'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDownTrayIcon, ArrowRightIcon, BookOpenIcon, DocumentTextIcon, AcademicCapIcon, FilmIcon } from '@heroicons/react/24/outline';

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

// Featured resources data
const featuredResources = [
  {
    title: "The Citizen's Guide to the Constitution",
    description: "A comprehensive exploration of the Constitution's history, structure, and application to modern challenges. This accessible guide helps citizens understand their rights and the principles that form the foundation of American liberty.",
    image: "/media/Photos/capitol-5019534_1280.jpg",
    type: "Ebook",
    url: "/resources/constitution-guide"
  },
  {
    title: "Rural Property Rights Defense Toolkit",
    description: "Essential legal information and resources for farmers, ranchers, and rural property owners facing regulatory challenges. Includes guidance on navigating common land use disputes, water rights issues, and government regulations.",
    image: "/media/Photos/bridge-4433114_1280.jpg",
    type: "PDF Guide",
    url: "/resources/rural-property-rights-toolkit"
  },
  {
    title: "Know Your Rights: Constitutional Liberties Series",
    description: "This video series explains key constitutional rights in clear, practical terms. Each episode covers a different aspect of constitutional liberty with real-world examples and expert commentary.",
    image: "/media/Photos/dome-2831971_1280.jpg",
    type: "Video Series",
    url: "/resources/know-your-rights-videos"
  }
];

// Constitutional guides data
const constitutionalGuides = [
  {
    title: "First Amendment Freedoms",
    description: "Understanding religious liberty, free speech, press freedom, and assembly rights",
    icon: <DocumentTextIcon className="h-6 w-6" />,
    url: "/resources/constitution-guide/first-amendment"
  },
  {
    title: "Second Amendment",
    description: "The history and modern interpretation of the right to keep and bear arms",
    icon: <DocumentTextIcon className="h-6 w-6" />,
    url: "/resources/constitution-guide/second-amendment"
  },
  {
    title: "Fourth Amendment",
    description: "Protection against unreasonable searches and seizures in modern context",
    icon: <DocumentTextIcon className="h-6 w-6" />,
    url: "/resources/constitution-guide/fourth-amendment"
  },
  {
    title: "Property Rights & Takings",
    description: "Constitutional protections for private property under the Fifth Amendment",
    icon: <DocumentTextIcon className="h-6 w-6" />,
    url: "/resources/constitution-guide/property-rights"
  },
  {
    title: "Federalism",
    description: "The constitutional balance of power between federal and state governments",
    icon: <DocumentTextIcon className="h-6 w-6" />,
    url: "/resources/constitution-guide/federalism"
  },
  {
    title: "Separation of Powers",
    description: "How checks and balances preserve liberty in our constitutional system",
    icon: <DocumentTextIcon className="h-6 w-6" />,
    url: "/resources/constitution-guide/separation-of-powers"
  }
];

// Educational videos data
const educationalVideos = [
  {
    title: "The Founders' Vision",
    duration: "28:45",
    thumbnail: "/media/Photos/monument-2501317_1280.jpg",
    url: "/resources/educational-videos/founders-vision"
  },
  {
    title: "Understanding Your Constitutional Rights",
    duration: "32:10",
    thumbnail: "/media/Photos/us-capitol-477987_1280.jpg",
    url: "/resources/educational-videos/understanding-rights"
  },
  {
    title: "Rural Liberty: Defending Agriculture",
    duration: "25:18",
    thumbnail: "/media/Photos/pexels-pixabay-208724.jpg",
    url: "/resources/educational-videos/rural-liberty"
  },
  {
    title: "The Importance of Limited Government",
    duration: "30:22",
    thumbnail: "/media/Photos/washingtondc-4816984_1280.jpg",
    url: "/resources/educational-videos/limited-government"
  }
];

// Downloadable materials data
const downloadableMaterials = [
  {
    title: "Know Your Rights Pocket Constitution",
    description: "Complete text of the Constitution with annotations explaining key provisions",
    icon: <BookOpenIcon className="h-6 w-6" />,
    url: "/resources/downloads/pocket-constitution.pdf"
  },
  {
    title: "Rural Land Use Rights Guide",
    description: "Understanding regulatory limitations and property rights for rural landowners",
    icon: <DocumentTextIcon className="h-6 w-6" />,
    url: "/resources/downloads/land-use-guide.pdf"
  },
  {
    title: "Constitutional Rights Classroom Activities",
    description: "Educational materials for teaching constitutional principles to students",
    icon: <AcademicCapIcon className="h-6 w-6" />,
    url: "/resources/downloads/classroom-activities.pdf"
  },
  {
    title: "Guide to Civic Engagement",
    description: "Practical ways to get involved in defending constitutional principles",
    icon: <DocumentTextIcon className="h-6 w-6" />,
    url: "/resources/downloads/civic-engagement.pdf"
  }
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Photos/nyc-5323170_1280.jpg"
            alt="Liberty Resources"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-navy-900/60" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6">
              Constitutional Resources
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              Educational materials to help Americans understand and defend their constitutional rights
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy-900 mb-12 font-serif text-center">
              Featured Resources
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <Link 
                  href={resource.url}
                  className="block h-full"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col hover:translate-y-[-5px]">
                    <div className="relative h-48">
                      <Image 
                        src={resource.image} 
                        alt={resource.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 right-0 bg-navy-800 text-white px-3 py-1 text-sm font-medium">
                        {resource.type}
                      </div>
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600">
                        {resource.description}
                      </p>
                    </div>
                    <div className="px-6 pb-6 mt-auto">
                      <span className="inline-flex items-center text-red-600 font-medium">
                        Access resource
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Constitution Guide Section */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center justify-between mb-12">
            <FadeIn>
              <div>
                <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                  Understanding Your Rights
                </span>
                <h2 className="text-3xl font-bold text-navy-900 mt-2 font-serif">
                  Constitution Guide
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link 
                href="/resources/constitution-guide"
                className="inline-flex items-center font-medium text-red-600 mt-4 md:mt-0"
              >
                View complete guide
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constitutionalGuides.map((guide, index) => (
              <FadeIn key={index} delay={0.05 * index} direction="up">
                <Link 
                  href={guide.url}
                  className="block"
                >
                  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-3px]">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-navy-100 rounded-full p-2 text-navy-600">
                          {guide.icon}
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-navy-900 mb-1">
                          {guide.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                          {guide.description}
                        </p>
                        <span className="text-red-600 text-sm font-medium inline-flex items-center">
                          Read guide
                          <ArrowRightIcon className="w-3 h-3 ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Videos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center justify-between mb-12">
            <FadeIn>
              <div>
                <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                  Visual Learning
                </span>
                <h2 className="text-3xl font-bold text-navy-900 mt-2 font-serif">
                  Educational Videos
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link 
                href="/resources/educational-videos"
                className="inline-flex items-center font-medium text-red-600 mt-4 md:mt-0"
              >
                View all videos
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationalVideos.map((video, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <Link 
                  href={video.url}
                  className="block"
                >
                  <div className="group">
                    <div className="relative rounded-lg overflow-hidden shadow-sm h-48">
                      <Image 
                        src={video.thumbnail} 
                        alt={video.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-white font-medium text-sm">
                            {video.title}
                          </h3>
                          <span className="text-white/80 text-xs">
                            {video.duration}
                          </span>
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Materials Section */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Free Materials
              </span>
              <h2 className="text-3xl font-bold text-navy-900 mt-2 font-serif">
                Downloadable Resources
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadableMaterials.map((material, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start">
                  <div className="bg-red-100 rounded-full p-3 text-red-600">
                    {material.icon}
                  </div>
                  <div className="ml-5 flex-grow">
                    <h3 className="text-lg font-semibold text-navy-900 mb-1">
                      {material.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {material.description}
                    </p>
                    <Link 
                      href={material.url}
                      className="inline-flex items-center text-red-600 font-medium text-sm"
                    >
                      <ArrowDownTrayIcon className="w-4 h-4 mr-1" />
                      Download PDF
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Research Library Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900 rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 relative h-64 md:h-auto">
                <Image 
                  src="/media/Photos/pexels-olly-932352.jpg" 
                  alt="Research Library"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-3/5 p-8 md:p-12">
                <FadeIn>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">
                    Legal Research Library
                  </h2>
                  <p className="text-white/80 mb-6">
                    Access our comprehensive collection of constitutional scholarship, legal briefs, and policy papers on issues critical to defending liberty and promoting constitutional governance.
                  </p>
                  <Link 
                    href="/resources/legal-library"
                    className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors duration-300"
                  >
                    Explore the Library
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy-900 mb-4 font-serif">
              Need Additional Resources?
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8">
              If you're looking for specific materials or have questions about applying constitutional principles to your situation, our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-6 py-3 bg-navy-800 text-white font-medium rounded-md hover:bg-navy-700 transition-colors duration-300"
              >
                Contact Us
              </Link>
              <Link 
                href="/resources/request"
                className="px-6 py-3 bg-white text-navy-800 font-medium rounded-md border border-navy-200 hover:bg-navy-100 transition-colors duration-300"
              >
                Request Custom Resources
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 