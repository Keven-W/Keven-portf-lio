import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import BinaryBackground from './BinaryBackground';
import TypingTitle from './TypingTitle';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <BinaryBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="inline-block mb-6"
          >
            <Code2 size={80} className="text-[#D4AF37]" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Keven Wendell
          </h1>
        </motion.div>

        <TypingTitle />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-[#D4AF37] text-black font-bold rounded-lg hover:bg-[#C4A037] transition-colors duration-300"
            aria-label="Ver projetos"
          >
            Ver Projetos
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            aria-label="Ir para contato"
          >
            Contato
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg
              className="w-6 h-6 mx-auto text-[#D4AF37] cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              onClick={() => scrollToSection('about')}
              aria-label="Rolar para baixo"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
