'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function FanartShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
                href="#"
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
    </>
  );
}
