import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-[#D4AF37]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-[#D4AF37] cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Keven Wendell
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Sobre', id: 'about' },
              { name: 'Skills', id: 'skills' },
              { name: 'Projetos', id: 'projects' },
              { name: 'Contato', id: 'contact' }
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Navegar para ${item.name}`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-[#D4AF37] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu de navegação"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-black/95 backdrop-blur-lg"
        >
          <nav className="flex flex-col space-y-3 py-4">
            {[
              { name: 'Sobre', id: 'about' },
              { name: 'Skills', id: 'skills' },
              { name: 'Projetos', id: 'projects' },
              { name: 'Contato', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 text-left py-2 px-4 hover:bg-[#D4AF37]/10 rounded-lg"
                aria-label={`Navegar para ${item.name}`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;