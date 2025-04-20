'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '@/components/Hero';
import { 
  ShieldCheckIcon, 
  BookOpenIcon, 
  HomeIcon,
  UserGroupIcon,
  ArrowRightIcon,
  DocumentTextIcon,
  HandRaisedIcon,
  GlobeAmericasIcon
} from '@heroicons/react/24/outline';

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

// Parallax image component
interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  imgClassName?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  speed = 0.5,
  imgClassName = '',
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300 * speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0">
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className={`object-cover ${imgClassName}`}
          priority
        />
      </motion.div>
    </div>
  );
};

// Focus Area card component
interface FocusAreaCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const FocusAreaCard: React.FC<FocusAreaCardProps> = ({ icon, title, description, link, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up" className="h-full">
      <motion.div 
        className="flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-md p-6 transition-all duration-300 group"
        whileHover={{ y: -5 }}
      >
        <div className="p-3 bg-red-50 rounded-xl w-fit mb-4 text-red-600">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-navy-900 font-serif">{title}</h3>
        <p className="text-gray-600 flex-grow mb-4">{description}</p>
        <Link 
          href={link} 
          className="inline-flex items-center font-medium text-red-600 group-hover:text-red-700"
        >
          Learn more 
          <motion.span 
            className="ml-1 inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRightIcon className="w-4 h-4" />
          </motion.span>
        </Link>
      </motion.div>
    </FadeIn>
  );
};

export default function Home() {
  // Testimonials data
  const testimonials = [
    {
      quote: "The Tomorrow Foundation has been at the forefront of defending our constitutional rights. Their work is invaluable to preserving freedom in America.",
      author: "James Wilson",
      role: "Constitutional Law Attorney"
    },
    {
      quote: "As a farmer in rural America, I've seen firsthand how the Tomorrow Foundation's advocacy has helped our community thrive despite challenging times.",
      author: "Sarah Miller",
      role: "Third-generation Farmer"
    },
    {
      quote: "The educational resources provided by the Foundation have transformed my understanding of my rights as an American citizen.",
      author: "Robert Johnson",
      role: "Community Leader"
    }
  ];
  
  // Latest News data
  const latestNews = [
    {
      title: "Supreme Court Victory for Property Rights",
      date: "June 12, 2024",
      image: "/media/Photos/capitol-5019534_1280.jpg",
      excerpt: "The Tomorrow Foundation's legal team secured a major victory for property owners in a landmark Supreme Court case.",
      link: "/news/supreme-court-victory"
    },
    {
      title: "Rural Development Initiative Launches",
      date: "May 28, 2024",
      image: "/media/Photos/bridge-4433114_1280.jpg",
      excerpt: "Our new initiative aims to support agricultural communities with resources, education, and advocacy.",
      link: "/news/rural-development-initiative"
    },
    {
      title: "Constitutional Rights Workshop Series",
      date: "May 15, 2024",
      image: "/media/Photos/us-capitol-477987_1280.jpg",
      excerpt: "Join our upcoming workshop series to learn about your constitutional rights and how to protect them.",
      link: "/news/workshop-series"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 font-serif">
                  Preserving American Values
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The Tomorrow Foundation is dedicated to preserving and promoting the fundamental principles that have made America the greatest nation in history. We work tirelessly to defend constitutional rights, educate citizens, and support rural communities across our great nation.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded on the belief that informed citizens are essential for a thriving democracy, our foundation provides resources, advocacy, and educational programs to help Americans understand and exercise their constitutional rights.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link 
                    href="/about" 
                    className="px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors duration-300 text-center"
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/get-involved/donate" 
                    className="px-6 py-3 border border-navy-600 text-navy-800 font-medium rounded-md hover:bg-navy-50 transition-colors duration-300 text-center"
                  >
                    Support Our Mission
                  </Link>
                </div>
              </FadeIn>
            </div>
            <div className="relative">
              <FadeIn delay={0.4} direction="left">
                <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-lg border-4 border-white">
                  <Image 
                    src="/media/Photos/monument-2501317_1280.jpg" 
                    alt="American flag"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.6} direction="up">
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3 text-red-600">
                    <ShieldCheckIcon className="h-6 w-6" />
                    <span className="font-semibold">Defending Liberty</span>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.7} direction="up">
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3 text-navy-600">
                    <GlobeAmericasIcon className="h-6 w-6" />
                    <span className="font-semibold">Nationwide Impact</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      
      {/* Focus Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 font-serif">
                Our Focus Areas
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-3xl mx-auto text-gray-600">
                Dedicated to preserving America's constitutional foundation, educating citizens, and supporting rural communities
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FocusAreaCard 
              icon={<ShieldCheckIcon className="h-8 w-8" />}
              title="Defending Constitutional Rights"
              description="We work tirelessly to protect and defend the constitutional rights of all Americans through legal advocacy, education, and grassroots initiatives."
              link="/focus-areas/constitutional-rights"
              delay={0.2}
            />
            
            <FocusAreaCard 
              icon={<BookOpenIcon className="h-8 w-8" />}
              title="Educating Citizens"
              description="Our educational programs empower Americans with knowledge about their rights and responsibilities as citizens in our constitutional republic."
              link="/focus-areas/citizen-education"
              delay={0.3}
            />
            
            <FocusAreaCard 
              icon={<HomeIcon className="h-8 w-8" />}
              title="Supporting Rural Communities"
              description="We champion the backbone of America—rural communities and agriculture—through advocacy, resources, and community development initiatives."
              link="/focus-areas/rural-communities"
              delay={0.4}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-navy-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="pattern-stars" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <path id="star" d="M25,1 L31,17 L49,17 L35,29 L41,45 L25,35 L9,45 L15,29 L1,17 L19,17 Z" fill="#fff"></path>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stars)"></rect>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
                Testimonials
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-3xl mx-auto text-gold-300">
                Hear from Americans who have been impacted by our work
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
                <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col">
                  <div className="mb-4 text-gold-500">
                    <svg
                      className="h-8 w-8"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow italic">"{testimonial.quote}"</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-navy-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Latest News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 font-serif">
                  Latest News & Updates
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-gray-600">
                  Stay informed on our ongoing work to defend American values
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <Link 
                href="/news" 
                className="mt-4 md:mt-0 inline-flex items-center font-medium text-red-600 hover:text-red-700"
              >
                View all news
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((item, index) => (
              <FadeIn key={item.title} delay={0.3 + index * 0.1} direction="up">
                <motion.div 
                  className="bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden h-full flex flex-col transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-red-600 mb-2">{item.date}</p>
                    <h3 className="text-xl font-semibold text-navy-900 mb-2 font-serif">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {item.excerpt}
                    </p>
                    <Link
                      href={item.link}
                      className="inline-flex items-center font-medium text-red-600 hover:text-red-700 mt-auto"
                    >
                      Read more
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative">
        <ParallaxImage
          src="/media/Photos/washingtondc-4816984_1280.jpg"
          alt="American flag"
          className="absolute inset-0"
          imgClassName="brightness-[0.25]"
        />
        
        {/* Additional dark overlay */}
        <div className="absolute inset-0 bg-navy-900/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
                Join Us in Defending American Values
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-white/90 mb-8">
                Together, we can preserve the constitutional principles that have made America the greatest nation in history
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/get-involved/donate" 
                  className="px-8 py-4 bg-gold-500 text-navy-900 font-bold rounded-md hover:bg-gold-400 transition-colors duration-300 text-center"
                >
                  Donate Now
                </Link>
                <Link 
                  href="/get-involved" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-md hover:bg-white/20 transition-colors duration-300 text-center"
                >
                  Ways to Get Involved
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 font-serif">
                Educational Resources
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-3xl mx-auto text-gray-600">
                Access tools and materials to learn about your constitutional rights and American values
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0.2} direction="up">
              <Link href="/resources/constitution-guide">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="bg-red-50 p-3 rounded-full w-fit mb-4">
                    <DocumentTextIcon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-navy-900 font-serif">Constitution Guide</h3>
                  <p className="text-gray-600 text-sm">Understand the U.S. Constitution and its amendments</p>
                </div>
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <Link href="/resources/legal-library">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="bg-red-50 p-3 rounded-full w-fit mb-4">
                    <BookOpenIcon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-navy-900 font-serif">Legal Library</h3>
                  <p className="text-gray-600 text-sm">Access landmark cases and legal resources</p>
                </div>
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
              <Link href="/resources/educational-videos">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="bg-red-50 p-3 rounded-full w-fit mb-4">
                    <UserGroupIcon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-navy-900 font-serif">Educational Videos</h3>
                  <p className="text-gray-600 text-sm">Watch informative videos on constitutional principles</p>
                </div>
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.5} direction="up">
              <Link href="/resources/downloadable-materials">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="bg-red-50 p-3 rounded-full w-fit mb-4">
                    <HandRaisedIcon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-navy-900 font-serif">Free Materials</h3>
                  <p className="text-gray-600 text-sm">Download educational materials and guides</p>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 