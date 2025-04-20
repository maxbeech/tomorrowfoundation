'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { StarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const SuccessStoryCard = ({ 
  title, 
  description, 
  image, 
  category, 
  link,
  delay = 0
}: { 
  title: string; 
  description: string; 
  image: string; 
  category: string; 
  link: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-navy-800/80 text-white text-xs font-medium rounded-full backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link 
          href={link}
          className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors text-sm font-medium"
        >
          Read the full story
          <ArrowRightIcon className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default function SuccessStories() {
  // Success stories data
  const successStories = [
    {
      title: "Supreme Court Victory for Property Owners",
      description: "The Tomorrow Foundation filed an amicus brief in support of rural property owners facing government overreach. The Supreme Court's ruling in favor of the property owners has established an important precedent that will protect landowners across America for years to come.",
      image: "/media/Photos/capitol-5019534_1280.jpg",
      category: "Constitutional Rights",
      link: "/focus-areas/success-stories/property-rights-victory"
    },
    {
      title: "Rural Healthcare Initiative Success",
      description: "Our advocacy for rural healthcare access led to the implementation of a new telemedicine program serving over 50 rural communities across five states. This initiative has provided essential medical services to more than 75,000 rural Americans who previously had limited access to healthcare.",
      image: "/media/Photos/bridge-4433114_1280.jpg",
      category: "Rural Communities",
      link: "/focus-areas/success-stories/rural-healthcare"
    },
    {
      title: "Constitutional Education Program Reaches 1 Million Students",
      description: "Our flagship educational program on constitutional rights has now reached over one million students across America. Independent assessment shows that students who complete the program demonstrate a 78% increase in understanding of constitutional principles and civic responsibilities.",
      image: "/media/Photos/pexels-pixabay-208724.jpg",
      category: "Citizen Education",
      link: "/focus-areas/success-stories/education-milestone"
    },
    {
      title: "Legislation Protecting Farm Water Rights",
      description: "After a three-year advocacy campaign by the Tomorrow Foundation and our agricultural partners, new legislation was passed protecting the water rights of family farms in drought-affected regions, benefiting over 15,000 farming families.",
      image: "/media/Photos/pexels-olly-932352.jpg",
      category: "Rural Communities",
      link: "/focus-areas/success-stories/farm-water-rights"
    },
    {
      title: "Second Amendment Rights Protection Initiative",
      description: "Our legal team successfully challenged unconstitutional firearms restrictions in multiple jurisdictions, restoring Second Amendment rights for millions of law-abiding citizens while promoting responsible gun ownership through educational initiatives.",
      image: "/media/Photos/us-capitol-477987_1280.jpg",
      category: "Constitutional Rights",
      link: "/focus-areas/success-stories/second-amendment"
    },
    {
      title: "Civics Education Partnership with 500 Schools",
      description: "The Tomorrow Foundation's partnership with school districts across rural America has created a comprehensive civics education program now implemented in over 500 schools, teaching students about their constitutional rights and civic responsibilities.",
      image: "/media/Photos/pexels-olly-722014.jpg",
      category: "Citizen Education",
      link: "/focus-areas/success-stories/civics-education"
    },
    {
      title: "Broadband Access for Rural Communities",
      description: "Our advocacy campaign for rural internet access resulted in a major infrastructure investment that has connected more than 200 previously underserved rural communities to high-speed internet, enabling economic opportunity and educational access.",
      image: "/media/Photos/nyc-5323170_1280.jpg",
      category: "Rural Communities",
      link: "/focus-areas/success-stories/rural-broadband"
    },
    {
      title: "Religious Liberty Case Victory",
      description: "The Tomorrow Foundation provided critical support in a landmark religious liberty case, resulting in a court decision that upheld First Amendment protections for religious organizations and individuals across the country.",
      image: "/media/Photos/monument-2501317_1280.jpg",
      category: "Constitutional Rights",
      link: "/focus-areas/success-stories/religious-liberty"
    },
    {
      title: "Constitution Day Celebration Reaches Record Participation",
      description: "Our nationwide Constitution Day program engaged over 1.5 million Americans in celebrations and educational events about constitutional principles, making it the largest Constitution Day initiative in the country.",
      image: "/media/Photos/washingtondc-4816984_1280.jpg",
      category: "Citizen Education",
      link: "/focus-areas/success-stories/constitution-day"
    }
  ];

  // Total impact stats
  const impactStats = [
    { label: "Legal Victories", value: "27+" },
    { label: "Students Educated", value: "1.5M+" },
    { label: "Rural Communities Served", value: "750+" },
    { label: "States Impacted", value: "48" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-navy-900 py-20 mt-20">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/media/Photos/dome-2831971_1280.jpg"
            alt="Success Stories"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Real impact from our work defending constitutional rights and supporting rural communities
            </p>
          </motion.div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-red-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-navy-900 mb-6 font-serif">Featured Impact Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These stories represent just a small selection of the work we do every day to protect constitutional rights and support rural communities across America.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-10">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="m-2 px-4 py-2 bg-navy-900 text-white rounded-full text-sm font-medium"
          >
            All Stories
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="m-2 px-4 py-2 bg-white text-navy-700 border border-navy-200 rounded-full text-sm font-medium hover:bg-navy-50 transition-colors"
          >
            Constitutional Rights
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="m-2 px-4 py-2 bg-white text-navy-700 border border-navy-200 rounded-full text-sm font-medium hover:bg-navy-50 transition-colors"
          >
            Citizen Education
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="m-2 px-4 py-2 bg-white text-navy-700 border border-navy-200 rounded-full text-sm font-medium hover:bg-navy-50 transition-colors"
          >
            Rural Communities
          </motion.button>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <SuccessStoryCard
              key={story.title}
              title={story.title}
              description={story.description}
              image={story.image}
              category={story.category}
              link={story.link}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-xl shadow-md p-8 md:p-12 max-w-3xl mx-auto text-center relative"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-red-600 h-12 w-12 rounded-full flex items-center justify-center shadow-md">
                <StarIcon className="h-6 w-6 text-white" />
              </div>
            </div>
            <blockquote className="mt-2">
              <p className="text-xl md:text-2xl text-gray-700 font-serif italic mb-6">
                "American values forged the greatest nation in history. It's up to us to keep it that way. Each success story represents another step toward securing liberty for generations to come."
              </p>
              <footer className="text-gray-500">
                <div className="font-medium text-navy-900">Dr. Robert Anderson</div>
                <div className="text-sm">Founder, Tomorrow Foundation</div>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-serif">Help Us Create More Success Stories</h2>
            <p className="text-lg text-white/90 mb-8">
              Your support makes our work possible. Join us in defending constitutional rights and supporting rural communities across America.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/get-involved/donate" 
                className="px-6 py-3 bg-gold-500 text-navy-900 font-bold rounded-md hover:bg-gold-400 transition-colors duration-300 text-center"
              >
                Donate Today
              </Link>
              <Link 
                href="/get-involved" 
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-md hover:bg-white/20 transition-colors duration-300 text-center"
              >
                Ways to Get Involved
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 