'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarIcon, ArrowRightIcon, NewspaperIcon } from '@heroicons/react/24/outline';

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

// News articles data
const featuredNews = {
  title: "Tomorrow Foundation Files Amicus Brief in Landmark Property Rights Case",
  date: "July 15, 2024",
  excerpt: "Our legal team has submitted an amicus brief to the Supreme Court in the upcoming Reynolds v. United States case, arguing for stronger protections for private property owners against regulatory takings.",
  image: "/media/Photos/capitol-5019534_1280.jpg",
  category: "Legal Updates",
  url: "/news/property-rights-amicus-brief"
};

const newsArticles = [
  {
    title: "Congressional Testimony on Rural Economic Freedom",
    date: "June 28, 2024",
    excerpt: "Foundation President Dr. James Wilson testified before the House Committee on Agriculture regarding the impact of federal regulations on rural businesses and family farms.",
    image: "/media/Photos/us-capitol-477987_1280.jpg",
    category: "Advocacy",
    url: "/news/congressional-testimony"
  },
  {
    title: "New Constitutional Education Program Launches in 12 States",
    date: "June 15, 2024",
    excerpt: "Our 'Know Your Rights' curriculum is now being implemented in school districts across 12 states, reaching over 50,000 students with essential knowledge about their constitutional liberties.",
    image: "/media/Photos/dome-2831971_1280.jpg", 
    category: "Education",
    url: "/news/education-program-launch"
  },
  {
    title: "Rural Liberty Tour to Visit 25 Communities This Summer",
    date: "May 30, 2024", 
    excerpt: "Our team of constitutional experts will be traveling to rural communities across the Midwest and South this summer, providing workshops on property rights, regulatory compliance, and legal resources.",
    image: "/media/Photos/bridge-4433114_1280.jpg",
    category: "Events",
    url: "/news/rural-liberty-tour"
  },
  {
    title: "Foundation Releases New Study on Religious Liberty Protections",
    date: "May 17, 2024",
    excerpt: "Our research team has published a comprehensive analysis of religious liberty cases over the past decade, identifying key trends and recommendations for strengthening First Amendment protections.",
    image: "/media/Photos/monument-2501317_1280.jpg",
    category: "Research",
    url: "/news/religious-liberty-study"
  },
  {
    title: "Annual Constitutional Leadership Conference Dates Announced",
    date: "May 5, 2024",
    excerpt: "Registration is now open for our annual conference bringing together legal experts, policy leaders, and citizen advocates to discuss strategies for defending constitutional principles.",
    image: "/media/Photos/pexels-brett-sayles-1340504.jpg",
    category: "Events",
    url: "/news/leadership-conference"
  },
  {
    title: "Foundation Challenges Unconstitutional Regulations on Family Farms",
    date: "April 22, 2024",
    excerpt: "Our legal team has filed a lawsuit challenging new regulations that would place excessive burdens on small family farms without proper legislative authorization.",
    image: "/media/Photos/pexels-pixabay-208724.jpg",
    category: "Legal Updates",
    url: "/news/farm-regulations-lawsuit"
  }
];

// Press releases data
const pressReleases = [
  {
    title: "Tomorrow Foundation Welcomes New Board Members",
    date: "June 2, 2024",
    url: "/news/press-releases/new-board-members"
  },
  {
    title: "Foundation Files Supreme Court Brief in Property Rights Case",
    date: "May 12, 2024",
    url: "/news/press-releases/supreme-court-brief"
  },
  {
    title: "Statement on Proposed Federal Land Use Regulations",
    date: "April 28, 2024",
    url: "/news/press-releases/land-use-regulations"
  },
  {
    title: "Tomorrow Foundation Announces Rural Liberty Initiative",
    date: "April 10, 2024",
    url: "/news/press-releases/rural-liberty-initiative"
  }
];

export default function NewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Photos/washingtondc-4816984_1280.jpg"
            alt="Washington DC"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-navy-900/60" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6">
              News & Updates
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              The latest from the Tomorrow Foundation's work defending constitutional rights and supporting rural communities
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center mb-8">
              <NewspaperIcon className="w-6 h-6 text-red-600 mr-3" />
              <h2 className="text-3xl font-bold text-navy-900 font-serif">Featured Story</h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image 
                    src={featuredNews.image} 
                    alt={featuredNews.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-10">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-navy-100 text-navy-800 mb-4">
                    {featuredNews.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4 font-serif">
                    {featuredNews.title}
                  </h3>
                  <div className="flex items-center text-gray-500 mb-4">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <span className="text-sm">{featuredNews.date}</span>
                  </div>
                  <p className="text-gray-700 mb-6">
                    {featuredNews.excerpt}
                  </p>
                  <Link 
                    href={featuredNews.url}
                    className="inline-flex items-center font-medium text-red-600 hover:text-red-700"
                  >
                    Read full article
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <NewspaperIcon className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-3xl font-bold text-navy-900 font-serif">Latest News</h2>
              </div>
              <Link 
                href="/news/archive"
                className="text-red-600 font-medium hover:text-red-700 flex items-center"
              >
                View all news
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48">
                    <Image 
                      src={article.image} 
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-navy-800">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-gray-500 mb-3">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span className="text-sm">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif">
                      {article.title}
                    </h3>
                    <p className="text-gray-700 mb-5 flex-grow">
                      {article.excerpt}
                    </p>
                    <Link 
                      href={article.url}
                      className="inline-flex items-center font-medium text-red-600 hover:text-red-700 mt-auto"
                    >
                      Read more
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Press Release Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-red-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <h2 className="text-3xl font-bold text-navy-900 font-serif">Press Releases</h2>
              </div>
              <Link 
                href="/news/press-releases"
                className="text-red-600 font-medium hover:text-red-700 flex items-center"
              >
                View all press releases
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-navy-50 rounded-xl p-8">
              <ul className="divide-y divide-gray-200">
                {pressReleases.map((release, index) => (
                  <li key={index} className="py-4 first:pt-0 last:pb-0">
                    <Link 
                      href={release.url}
                      className="group flex items-center justify-between hover:bg-navy-100/50 p-3 rounded-lg transition-colors duration-300"
                    >
                      <div>
                        <h3 className="font-medium text-navy-900 group-hover:text-navy-700">
                          {release.title}
                        </h3>
                        <span className="text-sm text-gray-500 flex items-center mt-1">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          {release.date}
                        </span>
                      </div>
                      <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/media/Photos/pexels-timmossholder-8080490.jpg"
            alt="Background texture"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <FadeIn>
                <h2 className="text-3xl font-bold text-white font-serif mb-4">
                  Stay Informed
                </h2>
                <p className="text-white/80 text-lg mb-6">
                  Subscribe to our newsletter to receive updates on our work, upcoming events, and educational resources.
                </p>
              </FadeIn>
            </div>
            <div className="md:w-1/2">
              <FadeIn delay={0.1}>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <form className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full rounded-md border-0 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full rounded-md border-0 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div className="pt-2">
                      <button 
                        type="submit" 
                        className="w-full bg-red-600 text-white font-medium py-3 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
                      >
                        Subscribe
                      </button>
                    </div>
                    <p className="text-white/60 text-xs text-center mt-4">
                      We respect your privacy. You can unsubscribe at any time.
                    </p>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 