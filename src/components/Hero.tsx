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
      {/* Binary Background - APENAS AQUI */}
      <div className="absolute inset-0 z-0">
        <BinaryBackground />
      </div>
      
      {/* Overlay sutil para melhor contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30 z-5" />
      
      {/* Conteúdo principal */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            <Code2 className="w-20 h-20 md:w-24 md:h-24 text-[#D4AF37]" />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-shadow">
            Keven Wendell
          </h1>
        </motion.div>

        <div className="mb-12 relative">
          {/* Container do texto de digitação com melhor contraste */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-black/40 rounded-lg blur-md -z-10"></div>
            <TypingTitle />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-[#D4AF37] text-black font-bold rounded-lg hover:bg-[#C4A037] transition-colors duration-300 shadow-lg shadow-[#D4AF37]/20 relative z-30"
          >
            Ver Projetos
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-lg shadow-[#D4AF37]/10 relative z-30"
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
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-30"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="p-4 rounded-full bg-black/30 backdrop-blur-sm border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors"
              aria-label="Scroll para próxima seção"
            >
              <svg
                className="w-6 h-6 text-[#D4AF37]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;