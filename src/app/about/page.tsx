'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { 
  ShieldCheckIcon, 
  ScaleIcon, 
  BookOpenIcon, 
  HomeIcon,
  UserGroupIcon, 
  HeartIcon 
} from '@heroicons/react/24/outline';

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

const ValuesCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-red-600">
      <div className="flex items-start">
        <div className="flex-shrink-0 bg-red-100 p-3 rounded-md">
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold text-navy-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  const coreValues = [
    {
      icon: <ShieldCheckIcon className="h-6 w-6 text-red-600" />,
      title: "Liberty",
      description: "We believe in protecting the fundamental liberties granted by the Constitution and ensuring all Americans can exercise their rights fully."
    },
    {
      icon: <ScaleIcon className="h-6 w-6 text-red-600" />,
      title: "Justice",
      description: "We advocate for equal justice under law for all citizens, regardless of background, status, or political affiliation."
    },
    {
      icon: <BookOpenIcon className="h-6 w-6 text-red-600" />,
      title: "Education",
      description: "We are committed to educating citizens about their constitutional rights and responsibilities as members of a free society."
    },
    {
      icon: <HomeIcon className="h-6 w-6 text-red-600" />,
      title: "Community",
      description: "We support local communities, particularly in rural America, where constitutional principles are lived out daily."
    },
    {
      icon: <UserGroupIcon className="h-6 w-6 text-red-600" />,
      title: "Civic Engagement",
      description: "We foster active participation in civic life and democratic processes as essential to preserving our republic."
    },
    {
      icon: <HeartIcon className="h-6 w-6 text-red-600" />,
      title: "Integrity",
      description: "We operate with transparency, honesty, and a commitment to the highest ethical standards in pursuit of our mission."
    }
  ];

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">About The Tomorrow Foundation</h1>
              <p className="text-xl text-gray-300 mb-8">
                Empowering Americans to protect liberty and preserve constitutional principles for future generations.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/images/constitution.jpg"
                  alt="The United States Constitution document"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                  quality={90}
                />
              </div>
            </FadeIn>
            
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold text-navy-900 font-serif mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-6 text-lg">
                  The Tomorrow Foundation is dedicated to preserving constitutional rights, promoting civic education, and supporting communities across America. We believe that an informed citizenry is essential to maintaining our republic and the liberties it guarantees.
                </p>
                <p className="text-gray-700 mb-8 text-lg">
                  Through advocacy, education, and community support, we work to ensure that the principles that have guided our nation since its founding remain strong for generations to come.
                </p>
                <Link href="/about/mission" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out">
                  Learn More About Our Mission
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-900 font-serif mb-6">Our Vision</h2>
              <p className="text-xl text-gray-700">
                We envision an America where citizens are knowledgeable about their constitutional rights, actively engaged in civic life, and committed to preserving liberty for future generations.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="p-8 md:p-12">
                <blockquote className="text-center">
                  <p className="text-xl md:text-2xl font-medium text-gray-700 italic mb-8">
                    "The Constitution is not an instrument for the government to restrain the people; it is an instrument for the people to restrain the government — lest it come to dominate our lives and interests."
                  </p>
                  <footer className="text-gray-600">
                    <span className="font-medium">— Patrick Henry</span>
                  </footer>
                </blockquote>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-navy-900 font-serif mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-700">
                These fundamental principles guide our work and shape our approach to fulfilling our mission.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <FadeIn key={value.title}>
                <ValuesCard 
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-navy-900 font-serif mb-6">Our History</h2>
              <p className="text-xl text-gray-700">
                Founded in 2020, the Tomorrow Foundation has grown to become a leading advocate for constitutional rights and civic education.
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-600"></div>
            
            <div className="space-y-16 relative">
              <FadeIn>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold text-navy-900 mb-2">2020</h3>
                      <p className="text-gray-700">Foundation established with a mission to protect constitutional rights and promote civic education.</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 mt-4 md:mt-0">
                    {/* Timeline dot */}
                    <div className="w-6 h-6 rounded-full bg-red-600 shadow absolute left-1/2 transform -translate-x-1/2"></div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:text-right order-2 md:order-1">
                    {/* Timeline dot */}
                    <div className="w-6 h-6 rounded-full bg-red-600 shadow absolute left-1/2 transform -translate-x-1/2"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold text-navy-900 mb-2">2021</h3>
                      <p className="text-gray-700">Launched our first educational programs reaching over 10,000 Americans in rural communities.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold text-navy-900 mb-2">2022</h3>
                      <p className="text-gray-700">Established the Constitutional Rights Defense Fund to provide legal support to Americans facing rights violations.</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 mt-4 md:mt-0">
                    {/* Timeline dot */}
                    <div className="w-6 h-6 rounded-full bg-red-600 shadow absolute left-1/2 transform -translate-x-1/2"></div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:text-right order-2 md:order-1">
                    {/* Timeline dot */}
                    <div className="w-6 h-6 rounded-full bg-red-600 shadow absolute left-1/2 transform -translate-x-1/2"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold text-navy-900 mb-2">2023</h3>
                      <p className="text-gray-700">Expanded to 50 states, with a focus on reaching underserved rural communities throughout America.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold text-navy-900 mb-2">Today</h3>
                      <p className="text-gray-700">Continuing to grow our impact through innovative educational initiatives, community partnerships, and strategic advocacy.</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 mt-4 md:mt-0">
                    {/* Timeline dot */}
                    <div className="w-6 h-6 rounded-full bg-red-600 shadow absolute left-1/2 transform -translate-x-1/2"></div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/about/history" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md bg-white hover:bg-gray-50 transition duration-300 ease-in-out">
              Learn More About Our History
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Banner */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <FadeIn>
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold font-serif mb-4">Meet Our Leadership</h2>
                <p className="text-gray-300 text-lg">
                  Our team of dedicated professionals brings decades of experience in constitutional law, education, and nonprofit management.
                </p>
              </div>
            </FadeIn>
            <div className="mt-8 md:mt-0">
              <Link 
                href="/about/leadership" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-navy-900 bg-white hover:bg-gray-100 transition duration-300 ease-in-out"
              >
                Meet The Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-red-600 rounded-lg shadow-xl overflow-hidden">
              <div className="px-6 py-12 md:p-12 md:flex md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold text-white mb-4 font-serif">Join Our Mission</h2>
                  <p className="text-xl text-red-100">
                    We invite you to become part of our community dedicated to protecting and preserving the constitutional principles that make America great.
                  </p>
                </div>
                <div className="mt-8 md:mt-0 flex">
                  <Link 
                    href="/get-involved/donate" 
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-red-600 bg-white hover:bg-gray-100 mx-2 transition duration-300 ease-in-out"
                  >
                    Donate
                  </Link>
                  <Link 
                    href="/get-involved/membership" 
                    className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-red-700 mx-2 transition duration-300 ease-in-out"
                  >
                    Become a Member
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
} 