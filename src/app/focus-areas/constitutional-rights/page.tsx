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

export default function ConstitutionalRightsPage() {
  // Core constitutional rights
  const coreRights = [
    {
      title: "First Amendment Rights",
      description: "Protecting freedom of speech, religion, press, assembly, and petition against government infringement.",
      icon: "/media/Icons/free-speech.png"
    },
    {
      title: "Second Amendment Rights",
      description: "Defending the right of law-abiding citizens to keep and bear arms for self-defense and security.",
      icon: "/media/Icons/constitution.png"
    },
    {
      title: "Property Rights",
      description: "Safeguarding citizens' rights to own and use property without unjust government interference or seizure.",
      icon: "/media/Icons/property.png"
    },
    {
      title: "Due Process",
      description: "Ensuring fair legal proceedings and protecting against arbitrary government actions.",
      icon: "/media/Icons/justice.png"
    },
    {
      title: "State Sovereignty",
      description: "Upholding the constitutional balance of power between federal and state governments.",
      icon: "/media/Icons/states.png"
    },
    {
      title: "Religious Liberty",
      description: "Protecting the fundamental right to practice faith without government restriction or coercion.",
      icon: "/media/Icons/religion.png"
    }
  ];

  // Major initiatives
  const legalPrograms = [
    {
      title: "Constitutional Litigation Initiative",
      description: "Our flagship legal program that challenges government overreach and defends individual liberties in federal and state courts across the nation. Our team of experienced constitutional attorneys takes on high-impact cases to establish legal precedents that protect constitutional rights for all Americans. Last year alone, our legal team participated in over 30 cases, with 22 favorable outcomes that strengthened constitutional protections.",
      image: "/media/Photos/pexels-brett-sayles-1340504.jpg"
    },
    {
      title: "Judicial Education Project",
      description: "This initiative provides educational resources to judges and legal professionals about constitutional originalism and textualism. Through seminars, conferences, and publications, we promote judicial philosophies that respect the Constitution's original meaning and the rule of law. The program has reached over 1,000 judges nationwide, influencing how courts interpret our founding document and its protections of individual liberty.",
      image: "/media/Photos/capitol-5019534_1280.jpg"
    },
    {
      title: "Constitutional Defense Fund",
      description: "This fund provides financial support for individuals facing legal challenges when exercising their constitutional rights. Whether it's a small business owner experiencing religious liberty restrictions or a citizen fighting against eminent domain abuse, our fund helps ensure that financial limitations don't prevent Americans from defending their constitutional rights. The fund has supported over 50 cases in the past year, providing more than $1.2 million in legal assistance.",
      image: "/media/Photos/pexels-pixabay-208724.jpg"
    },
    {
      title: "Constitutional Scholarship Program",
      description: "Through research grants, fellowships, and academic partnerships, we support scholarship that advances understanding of the Constitution's original meaning and the importance of limited government. Our program sponsors rigorous legal research, publishes scholarly articles, and hosts academic symposia that influence constitutional discourse. The initiative has funded 25 scholarly publications and 8 major research projects in the past year.",
      image: "/media/Photos/dome-2831971_1280.jpg"
    }
  ];

  // Success stories
  const successStories = [
    {
      title: "Victory for Religious Freedom",
      description: "When a small religious school in Vermont was excluded from a state tuition program solely because of its religious character, our litigation team took action. After a three-year legal battle that reached the federal appellate court, we secured a landmark ruling establishing that religious schools cannot be discriminated against in public benefit programs. This victory set a precedent that has already been cited in 15 subsequent cases nationwide, strengthening religious liberty protections for faith-based organizations across the country.",
      image: "/media/Photos/monument-2501317_1280.jpg"
    },
    {
      title: "Defending Free Speech on Campus",
      description: "When a public university implemented a restrictive speech code that limited student expression to a tiny 'free speech zone' comprising less than 1% of campus, we represented student activists challenging the policy. After our legal intervention and public advocacy campaign, the university agreed to revise its policies, expanding free expression rights to all outdoor areas of campus. This victory directly impacted 25,000 students and led to similar policy changes at four other institutions in the state system.",
      image: "/media/Photos/us-capitol-477987_1280.jpg"
    },
    {
      title: "Protecting Property Rights",
      description: "The Martin family had owned their lakefront property for generations when a new state regulation effectively prohibited them from building on their own land without any compensation. Our legal team filed a regulatory takings claim, arguing that the restriction amounted to an unconstitutional taking of private property. After intensive litigation, the state agency agreed to a compromise allowing reasonable development while protecting environmental interests. This case established an important precedent for property owners throughout the region.",
      image: "/media/Photos/pexels-olly-932352.jpg"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Photos/washingtondc-4816984_1280.jpg"
            alt="American flag and Constitution"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-navy-900/50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6">
              Defending Constitutional Rights
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              Protecting individual liberty and limited government as enshrined in the Constitution
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
                  Our Constitutional Focus
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6 font-serif">
                  Upholding America's Constitutional Framework
                </h2>
                <div className="prose prose-lg text-gray-700">
                  <p>
                    The Constitution of the United States established a system of limited government designed to protect individual rights and liberties. At the Tomorrow Foundation, we believe that preserving constitutional principles is essential to ensuring freedom for future generations.
                  </p>
                  <p>
                    Our approach focuses on defending the Constitution as written, with particular emphasis on protecting individual rights, maintaining the separation of powers, and upholding federalism. We recognize that government power must be limited and checked to preserve liberty.
                  </p>
                  <p>
                    Through strategic litigation, education, scholarship, and advocacy, we work to ensure that the Constitution's protections remain robust in the face of evolving challenges. Our initiatives focus on areas where constitutional rights are most threatened and where our efforts can have the greatest impact in restoring constitutional governance.
                  </p>
                  <blockquote className="font-serif text-lg italic text-navy-900">
                    "The Constitution is not an instrument for the government to restrain the people, it is an instrument for the people to restrain the government."
                    <footer className="font-normal text-base mt-2">— Patrick Henry</footer>
                  </blockquote>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="relative rounded-xl overflow-hidden h-[500px]">
                <Image
                  src="/media/Photos/nyc-5323170_1280.jpg"
                  alt="U.S. Constitution document"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Rights Section */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Core Principles
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6 font-serif">
                Key Constitutional Rights We Defend
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our work focuses on protecting these fundamental constitutional liberties
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreRights.map((right, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 h-full hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mr-4">
                      {/* Fallback icon if image is not available */}
                      <svg className="h-6 w-6 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 font-serif">{right.title}</h3>
                  </div>
                  <p className="text-gray-700">{right.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Constitutional Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <FadeIn direction="up" delay={0.1}>
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Limited Government</h3>
                <p className="text-gray-700">
                  We advocate for federal and state governments that remain within their constitutional boundaries, with powers that are enumerated, separate, and checked.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="text-center">
                <div className="w-20 h-20 bg-navy-600 rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Individual Rights</h3>
                <p className="text-gray-700">
                  We defend the fundamental rights of individuals against government infringement, recognizing that liberty is the cornerstone of the American system.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Originalist Interpretation</h3>
                <p className="text-gray-700">
                  We promote an understanding of the Constitution based on its original public meaning, rather than evolving interpretations that expand government power.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Major Initiatives Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Our Programs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6 font-serif">
                Constitutional Defense Initiatives
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Strategic programs that protect constitutional rights and advance constitutional governance
              </p>
            </FadeIn>
          </div>
          
          <div className="space-y-16">
            {legalPrograms.map((initiative, index) => (
              <FadeIn key={index} delay={0.1}>
                <div className={`bg-white rounded-xl shadow-lg overflow-hidden ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex`}>
                  <div className="md:w-2/5 relative">
                    <div className="h-full min-h-[300px]">
                      <Image
                        src={initiative.image}
                        alt={initiative.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-navy-900/20"></div>
                    </div>
                  </div>
                  
                  <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4 font-serif">{initiative.title}</h3>
                    <p className="text-gray-700 text-lg">{initiative.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Impact Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6 font-serif">
                Constitutional Victory Stories
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Real-world examples of how our work has strengthened constitutional protections
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
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
              "The Constitution is not a living organism. It's a legal document, and it says what it says and doesn't say what it doesn't say."
              <footer className="font-normal text-xl mt-6 text-white/80">— Justice Antonin Scalia</footer>
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
                Constitutional Impact by the Numbers
              </h2>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-navy-50 rounded-xl p-8 text-center">
                <span className="text-5xl md:text-6xl font-bold text-navy-900 font-serif">73%</span>
                <h3 className="text-xl font-bold text-navy-900 mt-4 mb-2">Success Rate</h3>
                <p className="text-gray-700">Favorable outcomes in constitutional litigation cases</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-navy-50 rounded-xl p-8 text-center">
                <span className="text-5xl md:text-6xl font-bold text-navy-900 font-serif">1,000+</span>
                <h3 className="text-xl font-bold text-navy-900 mt-4 mb-2">Judges Reached</h3>
                <p className="text-gray-700">Legal professionals engaged through judicial education</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="bg-navy-50 rounded-xl p-8 text-center">
                <span className="text-5xl md:text-6xl font-bold text-navy-900 font-serif">$1.2M</span>
                <h3 className="text-xl font-bold text-navy-900 mt-4 mb-2">Legal Aid</h3>
                <p className="text-gray-700">Provided to defend constitutional rights last year</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="bg-navy-50 rounded-xl p-8 text-center">
                <span className="text-5xl md:text-6xl font-bold text-navy-900 font-serif">33</span>
                <h3 className="text-xl font-bold text-navy-900 mt-4 mb-2">Research Publications</h3>
                <p className="text-gray-700">Scholarly works published advancing constitutional understanding</p>
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
                Constitutional Resources
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Materials to help citizens understand and defend their constitutional rights
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <Link href="/resources/citizens-guide">
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <h3 className="text-xl font-bold text-navy-900 mb-4 font-serif">Citizen's Guide to the Constitution</h3>
                  <p className="text-gray-700 mb-4">An accessible guide explaining constitutional rights and principles for everyday Americans.</p>
                  <span className="text-red-600 font-semibold flex items-center">
                    Download PDF
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <Link href="/resources/legal-library">
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <h3 className="text-xl font-bold text-navy-900 mb-4 font-serif">Constitutional Case Library</h3>
                  <p className="text-gray-700 mb-4">A database of key Supreme Court cases and their impact on constitutional interpretation.</p>
                  <span className="text-red-600 font-semibold flex items-center">
                    Browse Library
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <Link href="/resources/model-legislation">
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <h3 className="text-xl font-bold text-navy-900 mb-4 font-serif">Model Legislation</h3>
                  <p className="text-gray-700 mb-4">Template legislation for state lawmakers seeking to protect constitutional rights.</p>
                  <span className="text-red-600 font-semibold flex items-center">
                    Access Materials
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
                Support Constitutional Rights
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Join our mission to defend the Constitution and protect individual liberty. Your support enables us to fight crucial legal battles, educate the public, and preserve America's constitutional framework for future generations.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <Link
                  href="/get-involved/donate"
                  className="px-8 py-4 bg-navy-600 text-white font-bold rounded-md hover:bg-navy-700 transition-colors duration-300"
                >
                  Support Our Legal Work
                </Link>
                <Link
                  href="/resources/legal-help"
                  className="px-8 py-4 bg-white text-navy-900 font-bold rounded-md hover:bg-gray-100 transition-colors duration-300 border border-navy-200"
                >
                  Request Legal Assistance
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 