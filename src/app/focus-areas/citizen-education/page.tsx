'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

export default function CitizenEducationPage() {
  // Educational focus areas
  const educationalFocus = [
    {
      title: "Constitutional Literacy",
      description: "Providing Americans with a deeper understanding of the Constitution, its history, and how its principles apply to modern challenges.",
      icon: "/media/Icons/constitution.png"
    },
    {
      title: "Civic Responsibility",
      description: "Empowering citizens to engage in the democratic process through voting, local involvement, and informed participation.",
      icon: "/media/Icons/civic.png"
    },
    {
      title: "Media Literacy",
      description: "Equipping individuals with the skills to critically evaluate information sources and identify bias in reporting.",
      icon: "/media/Icons/media.png"
    },
    {
      title: "Historical Perspectives",
      description: "Teaching accurate American history that highlights the development of our republic and its founding principles.",
      icon: "/media/Icons/history.png"
    },
    {
      title: "Economic Education",
      description: "Building understanding of free market principles and how economic liberty contributes to prosperity.",
      icon: "/media/Icons/economics.png"
    },
    {
      title: "Community Leadership",
      description: "Developing the next generation of local leaders who will champion liberty and constitutional principles.",
      icon: "/media/Icons/leadership.png"
    }
  ];

  // Educational programs
  const educationalPrograms = [
    {
      title: "Constitution Academy",
      description: "Our flagship educational initiative that provides comprehensive courses on constitutional principles for high school and college students. Through summer intensive programs, semester-long classes, and online learning options, students receive rigorous instruction in constitutional history, structure, and application. Over 5,000 students have graduated from our Constitution Academy, with many going on to careers in law, politics, and civic leadership. The program includes interactive simulations, debate tournaments, and mentorship from legal and policy experts.",
      image: "/media/Photos/us-capitol-477987_1280.jpg"
    },
    {
      title: "Teachers' Constitutional Resource Center",
      description: "This initiative equips K-12 educators with high-quality teaching materials and professional development opportunities to effectively teach about the Constitution and founding principles. Our resource center provides lesson plans, primary source documents, multimedia resources, and classroom activities aligned with educational standards. We also offer teacher workshops and certification programs that have reached over 15,000 educators nationwide, impacting hundreds of thousands of students annually with improved civic education.",
      image: "/media/Photos/washingtondc-4816984_1280.jpg"
    },
    {
      title: "Community Civics Forums",
      description: "Our community-based program brings constitutional education directly to Americans through local events and discussion groups. These forums create spaces for citizens to learn about constitutional issues, discuss current events from historical and legal perspectives, and build civic community. Operating in over 150 communities nationwide, these forums engage Americans from diverse backgrounds in substantive conversation about the rights and responsibilities of citizenship, fostering both knowledge and civic friendship.",
      image: "/media/Photos/pexels-olly-932352.jpg"
    },
    {
      title: "Digital Civic Education Initiative",
      description: "Recognizing the importance of meeting citizens where they are, this program delivers constitutional and civic content through digital platforms. Our initiative includes video series, podcasts, interactive online courses, and social media content designed to make founding principles accessible and engaging. With over 10 million annual content views and 500,000 course completions, this program reaches Americans who might never engage with traditional civic education programs.",
      image: "/media/Photos/pexels-brett-sayles-1340504.jpg"
    }
  ];

  // Impact stories
  const impactStories = [
    {
      title: "Transforming Civic Education in Riverside County",
      description: "After partnering with Riverside County School District in California, we helped implement a comprehensive K-12 civic education curriculum that transformed how constitutional principles are taught to 35,000 students. Through teacher training, curriculum development, and ongoing support, student civic knowledge scores increased by 42% over three years. The program has become a model for other districts nationwide, with educators reporting higher student engagement and improved understanding of constitutional concepts.",
      image: "/media/Photos/dome-2831971_1280.jpg"
    },
    {
      title: "From Student to State Legislator",
      description: "Maria Rodriguez attended our Constitution Academy as a high school senior with little knowledge of civic engagement. The program sparked her passion for constitutional principles and public service. After college, she returned as a mentor while becoming active in local government. Today, Maria serves as a state legislator known for her commitment to constitutional governance and has sponsored legislation to strengthen civic education requirements in her state, directly impacting thousands of students.",
      image: "/media/Photos/pexels-timmossholder-8080490.jpg"
    },
    {
      title: "Revitalizing Civic Engagement in Rural America",
      description: "When we launched our Community Civics Forum in Hartland, a rural community facing economic challenges and declining civic participation, few expected significant impact. Two years later, the program has engaged over 30% of adult residents in constitutional education activities. This renewed focus on civic principles has translated into concrete community improvements: voter participation increased by 28%, volunteer service hours doubled, and citizens successfully advocated for transparent local government reforms.",
      image: "/media/Photos/pexels-olly-722014.jpg"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Photos/monument-2501317_1280.jpg"
            alt="Students learning about civics"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-navy-900/50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6">
              Educating Citizens About Their Rights
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              Empowering Americans with knowledge of their constitutional rights and civic responsibilities
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                  Our Educational Mission
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6 font-serif">
                  Fostering an Informed Citizenry
                </h2>
                <div className="prose prose-lg text-gray-700">
                  <p>
                    At the Tomorrow Foundation, we believe that a republic can only thrive when its citizens understand their rights, liberties, and responsibilities. Our educational initiatives aim to address the critical deficit in civic knowledge that threatens the foundation of our constitutional system.
                  </p>
                  <p>
                    We take a multi-faceted approach to citizen education, reaching Americans of all ages through schools, communities, and digital platforms. Our programs are designed to be engaging, accessible, and substantive, moving beyond superficial understanding to build true constitutional literacy.
                  </p>
                  <p>
                    By emphasizing primary sources, historical context, and practical application, we help citizens connect founding principles to contemporary issues. Our goal is not merely to impart information, but to cultivate critical thinking and civic virtue that empowers Americans to preserve liberty for future generations.
                  </p>
                  <blockquote className="font-serif text-lg italic text-navy-900">
                    "Knowledge will forever govern ignorance; and a people who mean to be their own governors must arm themselves with the power which knowledge gives."
                    <footer className="font-normal text-base mt-2">— James Madison</footer>
                  </blockquote>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="relative rounded-xl overflow-hidden h-[500px]">
                <Image
                  src="/media/Photos/capitol-5019534_1280.jpg"
                  alt="Reading the Constitution"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Educational Focus Areas Section */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Focus Areas
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6 font-serif">
                Key Educational Priorities
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our educational initiatives focus on these core areas of knowledge and skill development
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationalFocus.map((focus, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 h-full hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mr-4">
                      {/* Fallback icon if image is not available */}
                      <svg className="h-6 w-6 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 font-serif">{focus.title}</h3>
                  </div>
                  <p className="text-gray-700">{focus.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <FadeIn direction="up" delay={0.1}>
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Historical Context</h3>
                <p className="text-gray-700">
                  We ground all educational content in accurate historical context, helping citizens understand the influences and reasoning behind constitutional principles.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="text-center">
                <div className="w-20 h-20 bg-navy-600 rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Primary Sources</h3>
                <p className="text-gray-700">
                  We emphasize direct engagement with founding documents, allowing citizens to develop their own understanding of constitutional principles.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Respectful Dialogue</h3>
                <p className="text-gray-700">
                  We foster civil discourse about constitutional issues, teaching citizens to engage respectfully even on contentious topics.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Educational Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Our Programs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6 font-serif">
                Citizen Education Initiatives
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Strategic educational programs that reach Americans where they are
              </p>
            </FadeIn>
          </div>
          
          <div className="space-y-16">
            {educationalPrograms.map((program, index) => (
              <FadeIn key={index} delay={0.1}>
                <div className={`bg-white rounded-xl shadow-lg overflow-hidden ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex`}>
                  <div className="md:w-2/5 relative">
                    <div className="h-full min-h-[300px]">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-navy-900/20"></div>
                    </div>
                  </div>
                  
                  <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4 font-serif">{program.title}</h3>
                    <p className="text-gray-700 text-lg">{program.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Real Results
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6 font-serif">
                Education Impact Stories
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Real-world examples of how our educational work transforms communities
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <motion.div 
                  className="bg-white rounded-xl shadow-md overflow-hidden h-full hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-48">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif">{story.title}</h3>
                    <p className="text-gray-700">{story.description}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-center max-w-4xl mx-auto">
              "An educated citizenry is a vital requisite for our survival as a free people."
              <footer className="font-normal text-xl mt-6 text-white/80">— Thomas Jefferson</footer>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Our Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6 font-serif">
                Educational Impact by the Numbers
              </h2>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-navy-50 rounded-xl p-8 text-center">
                <span className="text-5xl md:text-6xl font-bold text-navy-900 font-serif">5,000+</span>
                <h3 className="text-xl font-bold text-navy-900 mt-4 mb-2">Academy Graduates</h3>
                <p className="text-gray-700">Students who have completed our Constitution Academy program</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-navy-50 rounded-xl p-8 text-center">
                <span className="text-5xl md:text-6xl font-bold text-navy-900 font-serif">15,000</span>
                <h3 className="text-xl font-bold text-navy-900 mt-4 mb-2">Teachers Trained</h3>
                <p className="text-gray-700">Educators equipped to teach constitutional principles effectively</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="bg-navy-50 rounded-xl p-8 text-center">
                <span className="text-5xl md:text-6xl font-bold text-navy-900 font-serif">150</span>
                <h3 className="text-xl font-bold text-navy-900 mt-4 mb-2">Community Forums</h3>
                <p className="text-gray-700">Local groups engaged in ongoing civic education</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="bg-navy-50 rounded-xl p-8 text-center">
                <span className="text-5xl md:text-6xl font-bold text-navy-900 font-serif">10M+</span>
                <h3 className="text-xl font-bold text-navy-900 mt-4 mb-2">Digital Engagements</h3>
                <p className="text-gray-700">Annual views of our educational content across platforms</p>
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
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Educational Resources
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6 font-serif">
                Free Educational Materials
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Resources to help citizens learn about their constitutional rights and responsibilities
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <Link href="/resources/constitution-course">
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <h3 className="text-xl font-bold text-navy-900 mb-4 font-serif">Online Constitution Course</h3>
                  <p className="text-gray-700 mb-4">A free, self-paced course that covers the Constitution's structure, principles, and applications in modern America.</p>
                  <span className="text-red-600 font-semibold flex items-center">
                    Start Learning
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <Link href="/resources/teaching-materials">
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <h3 className="text-xl font-bold text-navy-900 mb-4 font-serif">Teaching Materials</h3>
                  <p className="text-gray-700 mb-4">Downloadable lesson plans, activities, and primary source documents for teachers and homeschool parents.</p>
                  <span className="text-red-600 font-semibold flex items-center">
                    Browse Resources
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <Link href="/resources/multimedia-library">
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <h3 className="text-xl font-bold text-navy-900 mb-4 font-serif">Multimedia Library</h3>
                  <p className="text-gray-700 mb-4">Videos, podcasts, and interactive resources that make constitutional education engaging and accessible.</p>
                  <span className="text-red-600 font-semibold flex items-center">
                    Explore Content
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-50 rounded-xl p-8 md:p-12 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 font-serif">
                Join Our Educational Mission
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Help us build a nation of informed, engaged citizens who understand and value their constitutional rights. Your support enables us to expand our educational programs and reach more Americans with essential civic knowledge.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <Link
                  href="/get-involved/donate"
                  className="px-8 py-4 bg-navy-600 text-white font-bold rounded-md hover:bg-navy-700 transition-colors duration-300"
                >
                  Support Civic Education
                </Link>
                <Link
                  href="/get-involved/volunteer"
                  className="px-8 py-4 bg-white text-navy-900 font-bold rounded-md hover:bg-gray-100 transition-colors duration-300 border border-navy-200"
                >
                  Volunteer as an Educator
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 