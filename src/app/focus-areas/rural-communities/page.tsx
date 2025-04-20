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

export default function RuralCommunitiesPage() {
  // Rural Communities focus areas
  const focusAreas = [
    {
      title: "Agricultural Liberty",
      description: "Defending farmers' property rights and freedom to make their own land management decisions without excessive regulatory burden.",
      icon: "/media/Icons/farm.png"
    },
    {
      title: "Local Economic Development",
      description: "Supporting policies that stimulate rural job creation and entrepreneurship through market-based incentives and reduced barriers to business formation.",
      icon: "/media/Icons/economy.png"
    },
    {
      title: "Rural Infrastructure",
      description: "Advocating for critical infrastructure improvements in transportation, broadband, and utilities while maintaining local control.",
      icon: "/media/Icons/infrastructure.png"
    },
    {
      title: "Community Self-Governance",
      description: "Empowering rural communities to govern themselves according to local values and needs, free from urban-centric mandates.",
      icon: "/media/Icons/governance.png"
    },
    {
      title: "Natural Resource Access",
      description: "Ensuring rural communities maintain access to and benefit from the responsible use of natural resources on public and private lands.",
      icon: "/media/Icons/resources.png"
    },
    {
      title: "Rural Education",
      description: "Supporting quality educational opportunities in rural areas that reflect community values and prepare students for both local employment and broader opportunities.",
      icon: "/media/Icons/education.png"
    }
  ];

  // Initiatives
  const initiatives = [
    {
      title: "Rural Liberty Legal Defense Network",
      description: 'Our flagship initiative connects rural Americans facing regulatory overreach with pro bono legal representation. This nationwide network of attorneys specializes in property rights, agricultural regulations, water rights, and land use disputes. Since its founding, the network has handled over 200 cases on behalf of farmers, ranchers, and rural business owners, providing more than $2.5 million in pro bono legal services. By challenging unconstitutional regulations and government overreach, this program helps preserve both individual liberties and the economic viability of rural communities.',
      image: "/media/Photos/pexels-olly-722014.jpg"
    },
    {
      title: "Constitutional Rights Education for Rural Communities",
      description: 'This initiative delivers practical constitutional education specifically tailored for rural Americans. Through workshops, digital resources, and community forums, we equip citizens with knowledge about their property rights, regulatory limitations, and legal recourse when government exceeds its bounds. The program includes a "Know Your Rights" curriculum for farmers and ranchers, local government accountability workshops, and guidance on navigating regulatory compliance while preserving liberty. Over 15,000 rural citizens have participated in these educational programs across 35 states.',
      image: "/media/Photos/pexels-olly-932352.jpg"
    },
    {
      title: "Rural Policy Research Center",
      description: 'Our research center produces data-driven analysis on how policy decisions impact rural liberty and prosperity. The center examines the unintended consequences of regulations on rural communities, quantifies compliance costs for small agricultural operations, and develops policy recommendations that protect both liberty and environmental stewardship. Published studies have been cited in legislative debates, regulatory proceedings, and court cases. The center also provides technical assistance to rural local governments seeking to protect citizens from overreaching state and federal mandates.',
      image: "/media/Photos/pexels-pixabay-208724.jpg"
    },
    {
      title: "Rural Entrepreneurship Freedom Initiative",
      description: 'This program works to remove regulatory barriers that stifle rural innovation and entrepreneurship. We provide guidance to small business owners navigating complex regulations, advocate for regulatory reforms that reduce compliance burdens, and highlight success stories of rural innovation. Key components include a "Freedom to Farm" initiative supporting agricultural diversification, rural cottage industry development guidance, and community capital formation strategies that comply with securities laws while keeping investment local. The initiative has helped launch or expand over 120 rural businesses.',
      image: "/media/Photos/pexels-brett-sayles-1340504.jpg"
    }
  ];

  // Success stories
  const successStories = [
    {
      title: "Defending Family Farm from Regulatory Overreach",
      description: 'The Johnson family had farmed their 200 acres for three generations when a new federal interpretation threatened to classify seasonal water features on their property as "navigable waters." This would have subjected nearly 40% of their productive farmland to costly permits and restrictions. Through our Rural Liberty Legal Defense Network, the Johnsons connected with experienced attorneys who challenged this regulatory overreach. After an 18-month legal battle, the courts ruled in the Johnsons\' favor, establishing an important precedent that has protected thousands of similar family farms from excessive regulation. The Johnsons have since expanded their operation and now mentor other farmers facing similar challenges.',
      image: "/media/Photos/bridge-4433114_1280.jpg"
    },
    {
      title: "Revitalizing Main Street Through Regulatory Reform",
      description: 'When Madison County\'s rural entrepreneurs identified outdated zoning and business regulations as major barriers to downtown revitalization, our Rural Policy Research Center provided analysis of how these regulations were preventing economic renewal. Armed with this research, local citizens advocated for comprehensive reform of county ordinances. The resulting changes created a "Liberty Zone" with streamlined permitting, mixed-use flexibility, and reduced compliance costs. Within two years, 22 new businesses opened in previously vacant storefronts, creating 118 local jobs. The county has become a model for rural economic development through regulatory relief, hosting officials from other communities seeking to replicate their success.',
      image: "/media/Photos/nyc-5323170_1280.jpg"
    },
    {
      title: "Protecting Local Schools from Centralized Control",
      description: 'When state mandates threatened to consolidate Riverside County\'s small rural schools into larger, centralized districts, community members recognized the threat to both educational quality and local governance. Our team provided constitutional and policy guidance to concerned parents and school board members, helping them develop alternatives that maintained local control while addressing legitimate efficiency concerns. The resulting "Rural Education Liberty Plan" demonstrated how inter-district cooperation could achieve economies of scale without sacrificing local governance. This community-based solution was ultimately adopted by state officials as an alternative to forced consolidation and has since been implemented in rural communities across three additional states.',
      image: "/media/Photos/pexels-timmossholder-8080490.jpg"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Photos/bridge-4433114_1280.jpg"
            alt="Rural landscape with farm"
            fill
            className="object-cover brightness-[0.8]"
            priority
          />
          <div className="absolute inset-0 bg-navy-900/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6">
              Supporting Rural Communities
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              Defending liberty and prosperity in America's heartland
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
                  Our Rural Mission
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6 font-serif">
                  Liberty in the Heartland
                </h2>
                <div className="prose prose-lg text-gray-700">
                  <p>
                    America's rural communities are the backbone of our nation, embodying the self-reliance, entrepreneurship, and local governance that define our constitutional republic. Yet these communities face unique challenges as regulations, economic pressures, and cultural shifts threaten their liberty and way of life.
                  </p>
                  <p>
                    At the Tomorrow Foundation, we recognize that rural liberty is essential to America's character and prosperity. Our rural initiatives focus on defending constitutional rights in agricultural communities, promoting economic freedom for rural entrepreneurs, and preserving community self-determination.
                  </p>
                  <p>
                    We take a principled approach that emphasizes both individual liberty and community resilience. Rather than advocating for special treatment or subsidies, we work to remove barriers that prevent rural Americans from exercising their constitutional rights and pursuing prosperity through their own initiative.
                  </p>
                  <blockquote className="font-serif text-lg italic text-navy-900">
                    "When tillage begins, other arts follow. The farmers, therefore, are the founders of human civilization."
                    <footer className="font-normal text-base mt-2">— Daniel Webster</footer>
                  </blockquote>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="relative rounded-xl overflow-hidden h-[500px]">
                <Image
                  src="/media/Photos/pexels-pixabay-208724.jpg"
                  alt="Farmer in field"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Rural Focus Areas Section */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Focus Areas
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6 font-serif">
                Key Rural Liberty Priorities
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our work in rural communities focuses on these essential aspects of liberty and prosperity
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((focus, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 h-full hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mr-4">
                      {/* Fallback icon if image is not available */}
                      <svg className="h-6 w-6 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 19L4 12L11 5M13 5L20 12L13 19"
                        />
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

      {/* Rural Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <FadeIn direction="up" delay={0.1}>
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 14L21 12M21 12V20C21 20.5523 20.5523 21 20 21H17M13 21C13.5523 21 14 20.5523 14 20V16C14 15.4477 14.4477 15 15 15H17C17.5523 15 18 15.4477 18 16V20C18 20.5523 18.4477 21 19 21M13 21H19M13 21C12.4477 21 12 20.5523 12 20V16C12 15.4477 11.5523 15 11 15H9C8.44772 15 8 15.4477 8 16V20C8 20.5523 7.55228 21 7 21H6"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Local Self-Governance</h3>
                <p className="text-gray-700">
                  We defend the principle that rural communities should be governed by the people who live there, not by distant bureaucrats unfamiliar with local conditions.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="text-center">
                <div className="w-20 h-20 bg-navy-600 rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 9L16 12M16 12L13 15M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Economic Freedom</h3>
                <p className="text-gray-700">
                  We support the right of rural entrepreneurs and agricultural producers to operate without excessive regulations that stifle innovation and prosperity.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12H15M9 16H15M9 8H15M4 4H20C20.5523 4 21 4.44772 21 5V15.5M4 4C3.44772 4 3 4.44772 3 5V19.5M4 4V19.5M21 15.5V20.5C21 20.7761 20.7761 21 20.5 21H3.5C3.22386 21 3 20.7761 3 20.5V19.5M21 15.5H3M3 19.5H20"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Property Rights</h3>
                <p className="text-gray-700">
                  We uphold the fundamental right of rural Americans to use and enjoy their property according to their values and needs, free from unjust restrictions.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Our Programs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6 font-serif">
                Rural Liberty Initiatives
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Strategic programs that defend liberty and foster prosperity in rural America
              </p>
            </FadeIn>
          </div>
          
          <div className="space-y-16">
            {initiatives.map((initiative, index) => (
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
                Real Results
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6 font-serif">
                Rural Liberty Success Stories
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Real-world examples of how our work protects liberty and empowers rural communities
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
              "Those who labor in the earth are the chosen people of God, if ever He had a chosen people, whose breasts He has made His peculiar deposit for substantial and genuine virtue."
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
                Rural Liberty by the Numbers
              </h2>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-navy-50 rounded-xl p-8 text-center">
                <span className="text-5xl md:text-6xl font-bold text-navy-900 font-serif">200+</span>
                <h3 className="text-xl font-bold text-navy-900 mt-4 mb-2">Legal Cases</h3>
                <p className="text-gray-700">Property rights and regulatory cases defended for rural Americans</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-navy-50 rounded-xl p-8 text-center">
                <span className="text-5xl md:text-6xl font-bold text-navy-900 font-serif">15,000</span>
                <h3 className="text-xl font-bold text-navy-900 mt-4 mb-2">Rural Citizens</h3>
                <p className="text-gray-700">Americans trained in constitutional rights and rural liberty</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="bg-navy-50 rounded-xl p-8 text-center">
                <span className="text-5xl md:text-6xl font-bold text-navy-900 font-serif">120</span>
                <h3 className="text-xl font-bold text-navy-900 mt-4 mb-2">Rural Businesses</h3>
                <p className="text-gray-700">Businesses launched or expanded through our entrepreneurship initiative</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="bg-navy-50 rounded-xl p-8 text-center">
                <span className="text-5xl md:text-6xl font-bold text-navy-900 font-serif">$2.5M</span>
                <h3 className="text-xl font-bold text-navy-900 mt-4 mb-2">Legal Services</h3>
                <p className="text-gray-700">Pro bono legal assistance provided to rural communities</p>
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
                Rural Resources
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6 font-serif">
                Free Resources for Rural Americans
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Tools and information to help rural citizens protect their rights and pursue prosperity
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <Link href="/resources/rural-property-rights-guide">
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <h3 className="text-xl font-bold text-navy-900 mb-4 font-serif">Rural Property Rights Guide</h3>
                  <p className="text-gray-700 mb-4">A comprehensive guide to protecting your property rights from regulatory overreach, eminent domain abuse, and other threats.</p>
                  <span className="text-red-600 font-semibold flex items-center">
                    Download Guide
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5L21 12M21 12L14 19M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <Link href="/resources/rural-entrepreneur-toolkit">
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <h3 className="text-xl font-bold text-navy-900 mb-4 font-serif">Rural Entrepreneur Toolkit</h3>
                  <p className="text-gray-700 mb-4">Resources to help rural entrepreneurs navigate regulations, access capital, and build successful businesses in their communities.</p>
                  <span className="text-red-600 font-semibold flex items-center">
                    Access Resources
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5L21 12M21 12L14 19M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <Link href="/resources/local-governance-handbook">
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <h3 className="text-xl font-bold text-navy-900 mb-4 font-serif">Local Governance Handbook</h3>
                  <p className="text-gray-700 mb-4">Practical guidance for rural local officials on protecting citizens from regulatory overreach and preserving community self-determination.</p>
                  <span className="text-red-600 font-semibold flex items-center">
                    Explore Handbook
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5L21 12M21 12L14 19M21 12H3" />
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
                Join Our Rural Liberty Mission
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Help us defend rural liberty and empower communities across America's heartland. Your support enables us to expand our legal defense network, educational programs, and policy research.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <Link
                  href="/get-involved/donate"
                  className="px-8 py-4 bg-navy-600 text-white font-bold rounded-md hover:bg-navy-700 transition-colors duration-300"
                >
                  Support Rural Liberty
                </Link>
                <Link
                  href="/get-involved/volunteer"
                  className="px-8 py-4 bg-white text-navy-900 font-bold rounded-md hover:bg-gray-100 transition-colors duration-300 border border-navy-200"
                >
                  Volunteer Your Expertise
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 