'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaDiscord, FaTwitter, FaTwitch, FaYoutube, FaTiktok, FaGamepad, FaHeart, FaStar, FaTimes } from 'react-icons/fa';
import { SiBluesky } from 'react-icons/si';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';

interface FollowerCounts {
  twitch: string;
  youtube: string;
  lastUpdated: string;
}

export default function Home() {
  const [followers, setFollowers] = useState<FollowerCounts>({ 
    twitch: '+800', 
    youtube: '+500', 
    lastUpdated: ''  
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setFollowers(prev => ({
      ...prev,
      lastUpdated: new Date().toISOString()
    }));
  }, []);

  const socialLinks = [
    { icon: FaDiscord, href: '/discord', label: 'Discord', color: 'var(--primary-pink)', fullUrl: 'https://discord.gg/csufmHwhJD' },
    { icon: FaTwitter, href: '/twitter', label: 'Twitter', color: 'var(--primary-pink)', fullUrl: 'https://x.com/HeyyLollyPop' },
    { icon: SiBluesky, href: '/bluesky', label: 'Bluesky', color: 'var(--primary-pink)', fullUrl: 'https://bsky.app/profile/heylollypop.bsky.social' },
    { icon: FaTwitch, href: '/twitch', label: 'Twitch', color: 'var(--primary-pink)', fullUrl: 'https://twitch.tv/heyylollypop' },
    { icon: FaYoutube, href: '/youtube', label: 'YouTube', color: 'var(--primary-pink)', fullUrl: 'https://www.youtube.com/channel/UCwdkY7d84xwPMn_H-m2dHJg' },
    { icon: FaTiktok, href: '/tiktok', label: 'TikTok', color: 'var(--primary-pink)', fullUrl: 'https://www.tiktok.com/@heyylollypop' },
  ];

  const features = [
    { icon: FaGamepad, title: 'Gameplay', text: 'Jogos variados e muita diversão!' },
    { icon: FaHeart, title: 'Comunidade', text: 'Uma família doce e acolhedora!' },
    { icon: FaStar, title: 'Eventos', text: 'Surpresas e eventos especiais!' },
  ];

  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* About Section with Introduction */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="section-title mb-8">Sobre Mim</h2>
            <div className="glass-card p-6 md:p-8 max-w-3xl mx-auto">
              <motion.p
                className="text-base md:text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Uma vtuber que veio para alegrar e adoçar seus dias!!{'\n'}
                Com uma boa dose de doces, jogos e muita diversão!! 🍬✨
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-card p-6 md:p-8 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <feature.icon className="text-4xl md:text-5xl text-pink-500 mb-4 mx-auto" />
                <h3 className="text-lg md:text-xl font-bold text-pink-600 mb-2">{feature.title}</h3>
                <p className="text-base md:text-lg">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Follower Counter Section */}
      <section className="py-16 px-4 candy-gradient">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              className="glass-card p-8 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <FaTwitch className="text-5xl mb-4 mx-auto text-pink-500" />
              <h3 className="text-2xl font-bold mb-2 text-pink-500">Seguidores na Twitch</h3>
              <motion.div
                key={followers.twitch}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl font-bold text-pink-500 mb-2"
              >
                {followers.twitch}
              </motion.div>
              <a 
                href="https://www.twitch.tv/heyylollypop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-pink-500 hover:underline"
              >
                Seguir na Twitch
              </a>
            </motion.div>

            <motion.div
              className="glass-card p-8 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <FaYoutube className="text-5xl mb-4 mx-auto text-pink-500" />
              <h3 className="text-2xl font-bold mb-2 text-pink-500">Inscritos no YouTube</h3>
              <motion.div
                key={followers.youtube}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl font-bold text-pink-500 mb-2"
              >
                {followers.youtube}
              </motion.div>
              <a 
                href="https://www.youtube.com/@HeyyLollyPop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-pink-500 hover:underline"
              >
                Inscrever-se no YouTube
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="text-center mt-4 text-sm text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Última atualização: {new Date(followers.lastUpdated).toLocaleString('pt-BR')}
          </motion.div>
        </div>
      </section>

      {/* Fanart Showcase Section */}
      <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title text-center"
          >
            Galeria de Fanarts
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-8 glass-card p-8"
          >
            <div 
              className="relative aspect-video overflow-hidden rounded-lg shadow-xl cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <Image
                src="/Lollypopshowcase.png"
                alt="Fanart da HeyyLollypop"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
              />
            </div>
            <div className="text-center mt-6">
              <p className="text-lg text-pink-600 mb-4">
                Envie seu fanart para ter a chance de aparecer aqui!
              </p>
              <motion.a
                href="/discord"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="candy-button inline-block"
              >
                Enviar Fanart
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="modal-content"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                <FaTimes />
              </button>
              <div className="relative w-full h-full">
                <Image
                  src="/Lollypopshowcase.png"
                  alt="Fanart da HeyyLollypop"
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social Media Section */}
      <section className="py-20 px-4 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">Me Siga nas Redes!</h2>
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="social-icon group relative"
                style={{ color: social.color }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
                <motion.span
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {social.label}
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-2xl md:text-4xl mb-6 flex flex-wrap justify-center gap-2 md:gap-4">
              {[ '🍭', '🍬', '🍫', '🧁', '🍪', '🍩' ].map((emoji, index) => (
                <motion.span
                  key={index}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="inline-block"
                >
                  {emoji}
                </motion.span>
              ))}
            </div>
            <p className="text-sm md:text-base lg:text-lg mb-4"> 2024 HeyyLollypop - Todos os direitos reservados</p>
            <p className="text-xs md:text-sm opacity-80">Feito com 💖 e muito amor!</p>
            
            {/* Credits Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {/* Design Column */}
              <div className="text-left space-y-2">
                <h3 className="text-sm md:text-base font-semibold mb-3 text-pink-200">Design & Arte</h3>
                <p className="text-xs md:text-sm">◇Primeiro Design: <a href="https://twitter.com/irisarts" className="hover:text-pink-300">@irisarts</a></p>
                <p className="text-xs md:text-sm">◇Model: <a href="https://twitter.com/ChuChuva" className="hover:text-pink-300">@ChuChuva</a></p>
                <p className="text-xs md:text-sm">◇Rigg: <a href="https://twitter.com/MinKurosu" className="hover:text-pink-300">@MinKurosu</a></p>
                <p className="text-xs md:text-sm">◇Cenário: <a href="https://twitter.com/SumomoNona" className="hover:text-pink-300">@SumomoNona</a></p>
                <p className="text-xs md:text-sm">◇Logo: <a href="https://twitter.com/Ohimetrix" className="hover:text-pink-300">@Ohimetrix</a></p>
              </div>

              {/* Illustrations Column */}
              <div className="text-left space-y-2">
                <h3 className="text-sm md:text-base font-semibold mb-3 text-pink-200">Ilustrações</h3>
                <p className="text-xs md:text-sm">◇Emojis/Trailer: <a href="https://twitter.com/ikymiojo" className="hover:text-pink-300">@ikymiojo</a></p>
                <p className="text-xs md:text-sm">◇Painéis: <a href="https://twitter.com/NinaMianya" className="hover:text-pink-300">@NinaMianya</a></p>
                <p className="text-xs md:text-sm">◇Ilustrações: <a href="https://twitter.com/krisinkmachine" className="hover:text-pink-300">@krisinkmachine</a></p>
                <p className="text-xs md:text-sm">◇Tumb: <a href="https://twitter.com/Newriy2" className="hover:text-pink-300">@Newriy2</a></p>
                <p className="text-xs md:text-sm">◇Banner: <a href="https://twitter.com/vollupiaa" className="hover:text-pink-300">@vollupiaa</a></p>
              </div>

              {/* Icons & Other Column */}
              <div className="text-left space-y-2">
                <h3 className="text-sm md:text-base font-semibold mb-3 text-pink-200">Icons & Outros</h3>
                <p className="text-xs md:text-sm">◇Icons YT/Twitch: <a href="https://twitter.com/the_m0onnn" className="hover:text-pink-300">@the_m0onnn</a></p>
                <p className="text-xs md:text-sm">◇Icons IG/TikTok: <a href="https://twitter.com/mi0s.art" className="hover:text-pink-300">@mi0s.art</a></p>
                <p className="text-xs md:text-sm">◇Reactive: <a href="https://twitter.com/Doggowon" className="hover:text-pink-300">@Doggowon</a></p>
                <p className="text-xs md:text-sm">◇Telas: <a href="https://twitter.com/ennyapenas" className="hover:text-pink-300">@ennyapenas</a></p>
                <p className="text-xs md:text-sm">◇Edição: <a href="https://twitter.com/oleoqs" className="hover:text-pink-300">@oleoqs</a></p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-pink-500/30">
              <p className="text-xs md:text-sm">
                Developed by <a 
                  href="https://github.com/kleeedolinux" 
                  className="font-bold hover:text-pink-300 transition-colors"
                >
                  Klee
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
