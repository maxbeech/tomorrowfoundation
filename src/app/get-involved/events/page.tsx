'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarDaysIcon, MapPinIcon, UserGroupIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

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

// Event type definition
interface EventType {
  title: string;
  month: string;
  day: string;
  date: string;
  location: string;
  attendees: string;
  description: string;
  image: string;
  link: string;
  registration: string | null;
}

// Event Card Component
interface EventCardProps {
  event: EventType;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  return (
    <FadeIn delay={0.1 * index} direction="up" fullWidth>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
        <div className="relative h-64 w-full overflow-hidden">
          <Image 
            src={event.image} 
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-navy-900 text-white px-3 py-2 rounded-lg shadow-md">
            <div className="text-center">
              <span className="block text-sm font-bold">{event.month}</span>
              <span className="block text-xl font-bold">{event.day}</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-serif font-semibold mb-2 text-navy-900">{event.title}</h3>
          <div className="flex items-center text-gray-600 mb-2">
            <CalendarDaysIcon className="w-4 h-4 mr-2 text-red-600" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPinIcon className="w-4 h-4 mr-2 text-red-600" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-gray-600 mb-4">
            <UserGroupIcon className="w-4 h-4 mr-2 text-red-600" />
            <span>{event.attendees}</span>
          </div>
          <p className="text-gray-600 mb-4">{event.description}</p>
          <div className="flex justify-between items-center">
            <Link 
              href={event.link} 
              className="inline-flex items-center font-medium text-red-600 hover:text-red-700"
            >
              Learn more
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Link>
            {event.registration && (
              <Link 
                href={event.registration} 
                className="px-4 py-2 bg-gold-500 text-navy-900 rounded-md hover:bg-gold-400 transition-all font-medium text-sm"
              >
                Register Now
              </Link>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default function Events() {
  // Upcoming events data
  const upcomingEvents: EventType[] = [
    {
      title: "Constitutional Rights Symposium",
      month: "Sep",
      day: "15",
      date: "September 15, 2024 • 10:00 AM - 3:00 PM",
      location: "Washington D.C. Convention Center",
      attendees: "Legal professionals and citizens",
      description: "Join our annual symposium where leading constitutional scholars discuss current challenges to our rights and freedoms.",
      image: "/media/Photos/capitol-5019534_1280.jpg",
      link: "/get-involved/events/constitutional-rights-symposium",
      registration: "/get-involved/events/register?event=constitutional-rights-symposium"
    },
    {
      title: "Rural America Town Hall",
      month: "Oct",
      day: "8",
      date: "October 8, 2024 • 6:30 PM - 8:30 PM",
      location: "Madison County Fairgrounds, Iowa",
      attendees: "Farmers and rural community members",
      description: "A town hall focused on the challenges facing rural communities and our initiatives to support agricultural prosperity.",
      image: "/media/Photos/pexels-brett-sayles-1340504.jpg",
      link: "/get-involved/events/rural-america-town-hall",
      registration: "/get-involved/events/register?event=rural-america-town-hall"
    },
    {
      title: "Citizen Education Workshop",
      month: "Oct",
      day: "22",
      date: "October 22, 2024 • 9:00 AM - 12:00 PM",
      location: "Virtual Event",
      attendees: "All citizens welcome",
      description: "Learn about your constitutional rights and how to effectively engage in the civic process in this interactive workshop.",
      image: "/media/Photos/pexels-olly-932352.jpg",
      link: "/get-involved/events/citizen-education-workshop",
      registration: "/get-involved/events/register?event=citizen-education-workshop"
    }
  ];

  // Past events data
  const pastEvents: EventType[] = [
    {
      title: "Liberty & Justice Conference",
      month: "May",
      day: "6",
      date: "May 6, 2024 • 9:00 AM - 4:00 PM",
      location: "Atlanta, Georgia",
      attendees: "500+ attendees",
      description: "Our annual conference bringing together leaders and citizens committed to preserving American values.",
      image: "/media/Photos/us-capitol-477987_1280.jpg",
      link: "/get-involved/events/liberty-justice-conference",
      registration: null
    },
    {
      title: "Agricultural Policy Summit",
      month: "Mar",
      day: "15",
      date: "March 15, 2024 • 10:00 AM - 2:00 PM",
      location: "Des Moines, Iowa",
      attendees: "Agricultural leaders and policymakers",
      description: "A summit focused on policies that support American farmers and strengthen rural communities.",
      image: "/media/Photos/bridge-4433114_1280.jpg",
      link: "/get-involved/events/agricultural-policy-summit",
      registration: null
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-navy-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Photos/dome-2831971_1280.jpg"
            alt="Events Header"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-6">Events</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-gray-300 max-w-3xl">
              Join us at our events across the country as we work together to defend constitutional rights, educate citizens, and support rural communities.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Upcoming Events Section */}
        <div className="mb-16">
          <FadeIn>
            <div className="flex items-center mb-10">
              <h2 className="text-3xl font-serif font-bold text-navy-900">Upcoming Events</h2>
              <div className="ml-4 flex-grow h-px bg-red-600/30"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </div>
        </div>

        {/* Host an Event Section */}
        <div className="mb-16">
          <div className="bg-white rounded-xl p-8 shadow-sm overflow-hidden relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
            <div className="lg:flex items-center justify-between">
              <div className="lg:w-2/3 mb-6 lg:mb-0">
                <FadeIn>
                  <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">Host an Event With Us</h3>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <p className="text-gray-600 mb-6">
                    Are you interested in organizing an event focused on constitutional rights, citizen education, or rural community support? Partner with the Tomorrow Foundation to create impactful experiences for your community.
                  </p>
                </FadeIn>
              </div>
              <FadeIn delay={0.2}>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-gold-500 text-navy-900 font-bold rounded-md hover:bg-gold-400 transition-all inline-block shadow-sm hover:shadow-md"
                >
                  Contact Us to Discuss
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Past Events Section */}
        <div>
          <FadeIn>
            <div className="flex items-center mb-10">
              <h2 className="text-3xl font-serif font-bold text-navy-900">Past Events</h2>
              <div className="ml-4 flex-grow h-px bg-red-600/30"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20">
          <div className="bg-navy-900 text-white rounded-xl p-8 shadow-md">
            <div className="lg:flex items-center justify-between">
              <div className="lg:w-2/3 mb-6 lg:mb-0">
                <FadeIn>
                  <h3 className="text-2xl font-serif font-bold mb-4">Stay Updated on Future Events</h3>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <p className="text-gray-300 mb-4">
                    Subscribe to our newsletter to receive notifications about upcoming events and opportunities to get involved with the Tomorrow Foundation.
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