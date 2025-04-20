'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Hero video paths in the slider folder
const heroMedia = [
  '/media/home_hero_slider/8286485-hd_1280_720_30fps.mp4',
  '/media/home_hero_slider/12603667_1280_720_30fps.mp4',
  '/media/home_hero_slider/12641528_1280_720_25fps.mp4',
  '/media/home_hero_slider/4961476-sd_960_540_30fps.mp4',
];

const Hero = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-advance the carousel
  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % heroMedia.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [isClient]);

  // Ensure video plays when it's active
  useEffect(() => {
    if (isClient && videoRef.current) {
      videoRef.current.play().catch(err => console.error('Video play error:', err));
    }
  }, [currentMediaIndex, isClient]);

  const isVideo = (src: string) => src.endsWith('.mp4');

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Media slider */}
      <div className="absolute inset-0">
        {isClient && (
          <>
            {/* Current media with fade effect */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMediaIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                {isVideo(heroMedia[currentMediaIndex]) ? (
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <video
                      ref={videoRef}
                      autoPlay
                      muted
                      playsInline
                      loop
                      className="absolute w-full h-full object-cover"
                      style={{ objectPosition: 'center' }}
                    >
                      <source src={heroMedia[currentMediaIndex]} type="video/mp4" />
                      Your browser does not support video playback.
                    </video>
                  </div>
                ) : (
                  <Image
                    src={heroMedia[currentMediaIndex]}
                    alt="Tomorrow Foundation"
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </motion.div>
            </AnimatePresence>
            
            {/* Dark overlay with patriotic pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 via-navy-900/60 to-navy-900/80 mix-blend-multiply" />
            <div 
              className="absolute inset-0 opacity-20 mix-blend-overlay" 
              style={{ 
                backgroundImage: 'url("/media/pattern.svg")',
                backgroundSize: '100px 100px'
              }}
            />
          </>
        )}
      </div>

      {/* Hero content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-serif">
              Defending America's Constitutional Rights
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              American values forged the greatest nation in history. It's up to us to keep it that way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/get-involved/donate" 
                className="px-6 py-3 bg-gold-500 text-navy-900 font-bold rounded-md hover:bg-gold-400 transition-colors duration-300 text-center"
              >
                Donate Now
              </Link>
              <Link 
                href="/get-involved" 
                className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-md hover:bg-white/30 transition-colors duration-300 text-center"
              >
                Get Involved
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Focus Areas Badges */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/80 to-transparent py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center"
            >
              <span className="text-white font-semibold text-sm">Defending Constitutional Rights</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center"
            >
              <span className="text-white font-semibold text-sm">Educating Citizens</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center"
            >
              <span className="text-white font-semibold text-sm">Supporting Rural Communities</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 