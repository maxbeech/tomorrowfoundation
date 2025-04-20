'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// Sitemap section component
interface SitemapSectionProps {
  title: string;
  links: {
    name: string;
    href: string;
    description?: string;
  }[];
}

const SitemapSection: React.FC<SitemapSectionProps> = ({ title, links }) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-bold text-navy-900 mb-4 font-serif">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <motion.li 
            key={link.href}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
            className="group"
          >
            <Link href={link.href} className="flex items-start">
              <ArrowRightIcon className="h-5 w-5 mt-0.5 text-red-600 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
              <div>
                <span className="font-medium text-navy-800 hover:text-red-600 transition-colors duration-300">{link.name}</span>
                {link.description && (
                  <p className="text-sm text-gray-500 mt-1">{link.description}</p>
                )}
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default function Sitemap() {
  // Define sitemap sections and their links
  const sitemapData = [
    {
      title: "About Us",
      links: [
        { name: "Our Mission", href: "/about/mission", description: "Learn about the Tomorrow Foundation's mission and values" },
        { name: "Our History", href: "/about/history", description: "The story of our foundation and its impact" },
        { name: "Leadership Team", href: "/about/leadership", description: "Meet our board and executive leadership" },
        { name: "Financials & Annual Reports", href: "/about/financials", description: "Review our financial stewardship and impact" },
        { name: "FAQs", href: "/about/faq", description: "Common questions about the Tomorrow Foundation" }
      ]
    },
    {
      title: "Focus Areas",
      links: [
        { name: "Defending Constitutional Rights", href: "/focus-areas/constitutional-rights", description: "Our work to protect the fundamental liberties of all Americans" },
        { name: "Educating Citizens", href: "/focus-areas/citizen-education", description: "Empowering Americans with knowledge about their rights and civic responsibilities" },
        { name: "Supporting Rural Communities", href: "/focus-areas/rural-communities", description: "Our initiatives to strengthen America's heartland" },
        { name: "Success Stories", href: "/focus-areas/success-stories", description: "Real impact from our programs and advocacy" }
      ]
    },
    {
      title: "News & Updates",
      links: [
        { name: "Latest News", href: "/news", description: "The latest updates from the Tomorrow Foundation" },
        { name: "Press Releases", href: "/news/press-releases", description: "Official statements from our organization" },
        { name: "Media Coverage", href: "/news/media-coverage", description: "Coverage of our work in the news" },
        { name: "Newsletter Archive", href: "/news/newsletter", description: "Past editions of our newsletter" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Constitution Guide", href: "/resources/constitution-guide", description: "Understanding the U.S. Constitution and its amendments" },
        { name: "Legal Library", href: "/resources/legal-library", description: "Important legal cases and precedents" },
        { name: "Educational Videos", href: "/resources/educational-videos", description: "Videos explaining constitutional principles" },
        { name: "Downloadable Materials", href: "/resources/downloadable-materials", description: "Free educational resources and guides" },
        { name: "Research Papers", href: "/resources/research", description: "In-depth analysis on constitutional issues" }
      ]
    },
    {
      title: "Get Involved",
      links: [
        { name: "Donate", href: "/get-involved/donate", description: "Support our mission with a financial contribution" },
        { name: "Volunteer", href: "/get-involved/volunteer", description: "Opportunities to volunteer with the Tomorrow Foundation" },
        { name: "Become a Member", href: "/get-involved/membership", description: "Join the Tomorrow Foundation community" },
        { name: "Attend Events", href: "/get-involved/events", description: "Upcoming events and opportunities to participate" },
        { name: "Advocacy Campaigns", href: "/get-involved/advocacy", description: "Current initiatives you can support" }
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "Contact Information", href: "/contact", description: "Get in touch with the Tomorrow Foundation" },
        { name: "Request a Speaker", href: "/contact/speaker-request", description: "Invite a representative to speak at your event" },
        { name: "Media Inquiries", href: "/contact/media", description: "Press and media contact information" },
        { name: "Office Locations", href: "/contact/locations", description: "Find our offices across the country" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/legal/privacy-policy" },
        { name: "Terms of Use", href: "/legal/terms" },
        { name: "Copyright Information", href: "/legal/copyright" }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="border-b border-gray-200 pb-6 mb-12">
        <div className="flex items-center mb-4">
          <MapIcon className="w-8 h-8 text-red-600 mr-3" />
          <h1 className="text-3xl font-bold text-navy-900 font-serif">Site Map</h1>
        </div>
        <p className="text-gray-600">
          This page contains a comprehensive overview of all sections and pages on the Tomorrow Foundation website.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
        {sitemapData.map((section) => (
          <SitemapSection 
            key={section.title} 
            title={section.title} 
            links={section.links} 
          />
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200 text-center">
        <Link 
          href="/"
          className="inline-flex items-center px-6 py-3 bg-navy-600 text-white font-medium rounded-md hover:bg-navy-700 transition-colors duration-300"
        >
          Return to Home Page
        </Link>
      </div>
    </div>
  );
} 