'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaTwitch, FaYoutube } from 'react-icons/fa';

const candyEmojis = ['🍭', '🍬', '🍫', '🧁', '🍪', '🍩'];

export default function HeroSection() {
  const [currentEmoji, setCurrentEmoji] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji((prev) => (prev + 1) % candyEmojis.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 relative"
        >
          <h1 className="hero-text mb-10 px-4 break-words whitespace-pre-line">
            HeyyLollypop{'\n'}{candyEmojis[currentEmoji]}
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
            <div className="lg:w-1/2 w-full relative">
              <div className="glass-card p-8 max-w-3xl mx-auto mb-10">
                <p className="text-lg md:text-xl lg:text-2xl text-pink-600 leading-relaxed">
                  Oioi, me chamo lollypop, eu era uma garota comum até que de repente vim parar nesse mundo de doces!!{'\n'}
                  Sou uma vtuber adocicada que veio para alegrar e adoçar seus dias!! 🍬✨
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                  <motion.a
                    href="/twitch"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="candy-button inline-block flex items-center justify-center gap-2"
                  >
                    <FaTwitch className="text-xl" /> Me siga na Twitch
                  </motion.a>
                  <motion.a
                    href="/youtube"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="candy-button inline-block flex items-center justify-center gap-2"
                  >
                    <FaYoutube className="text-xl" /> Me siga no YouTube
                  </motion.a>
                </div>
              </div>
              
              {/* Decorative Elements - Only visible on larger screens */}
              <div className="hidden lg:block absolute -right-16 top-1/2 transform -translate-y-1/2 z-10">
                <div className="space-y-8">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="text-4xl"
                  >
                    🍭
                  </motion.div>
                  <motion.div
                    animate={{
                      rotate: [360, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="text-4xl"
                  >
                    🍬
                  </motion.div>
                  <motion.div
                    animate={{
                      rotate: [0, -360],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="text-4xl"
                  >
                    🧁
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Full Body Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:w-1/2 w-full order-first lg:order-last relative"
            >
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
                <Image
                  src="/Lollypopfull.png"
                  alt="Lollypop VTuber Full Body"
                  fill
                  className="object-contain object-center lg:object-right"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                />
              </div>
              
              {/* Additional decorative elements around the image on larger screens */}
              <div className="hidden lg:block absolute -left-8 top-1/4 transform -translate-y-1/2">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-5xl"
                >
                  🍪
                </motion.div>
              </div>
              <div className="hidden lg:block absolute -right-4 bottom-1/4">
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-5xl"
                >
                  🍫
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Decorative candy elements */}
          <motion.div
            className="absolute -top-10 right-0 text-6xl"
            animate={{ 
              rotate: [0, 10, -10, 0],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🍭
          </motion.div>
          <motion.div
            className="absolute bottom-20 -right-10 text-6xl"
            animate={{ 
              rotate: [0, -10, 10, 0],
              y: [0, 10, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🍬
          </motion.div>
          <motion.div
            className="absolute top-40 -left-10 text-6xl"
            animate={{ 
              rotate: [0, 15, -15, 0],
              y: [0, -15, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🧁
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-200 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-yellow-200 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-pink-300 rounded-full filter blur-3xl opacity-20" />
      </div>
    </section>
  );
}
