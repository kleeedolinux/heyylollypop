'use client';

import { motion } from 'framer-motion';
import { FaTwitch, FaYoutube } from 'react-icons/fa';

interface FollowerCounts {
  twitch: string;
  youtube: string;
  lastUpdated: string;
}

export default function FollowerCounter() {
  const followers: FollowerCounts = {
    twitch: '+800',
    youtube: '+500',
    lastUpdated: new Date().toISOString()
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
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
        </div>
      </div>
    </section>
  );
}
