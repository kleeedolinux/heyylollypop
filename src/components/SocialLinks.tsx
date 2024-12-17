'use client';

import { motion } from 'framer-motion';
import { FaDiscord, FaTwitter, FaTwitch, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';
import { SiBluesky } from 'react-icons/si';

const socialLinks = [
  { icon: FaDiscord, href: '#', label: 'Discord', color: 'var(--primary-pink)' },
  { icon: FaTwitter, href: '#', label: 'Twitter', color: 'var(--primary-pink)' },
  { icon: SiBluesky, href: '#', label: 'Bluesky', color: 'var(--primary-pink)' },
  { icon: FaTwitch, href: '#', label: 'Twitch', color: 'var(--primary-pink)' },
  { icon: FaYoutube, href: '#', label: 'YouTube', color: 'var(--primary-pink)' },
  { icon: FaInstagram, href: '#', label: 'Instagram', color: 'var(--primary-pink)' },
  { icon: FaTiktok, href: '#', label: 'TikTok', color: 'var(--primary-pink)' },
];

export default function SocialLinks() {
  return (
    <section className="py-20 px-4 bg-pink-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title text-center mb-12"
        >
          Me Siga nas Redes Sociais
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center glass-card p-4 hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{ color: social.color }}
            >
              <social.icon className="text-4xl mb-2" />
              <span className="text-sm font-medium">{social.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
