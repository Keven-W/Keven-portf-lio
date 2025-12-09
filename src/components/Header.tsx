import { motion } from 'framer-motion';

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-[#D4AF37]"
            onClick={() => {
              const nav = document.getElementById('mobile-nav');
              nav?.classList.toggle('hidden');
            }}
            aria-label="Menu de navegação"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>

        <div id="mobile-nav" className="hidden md:hidden pb-4">
          <nav className="flex flex-col space-y-3">
            {[
              { name: 'Sobre', id: 'about' },
              { name: 'Skills', id: 'skills' },
              { name: 'Projetos', id: 'projects' },
              { name: 'Contato', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  document.getElementById('mobile-nav')?.classList.add('hidden');
                }}
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 text-left"
                aria-label={`Navegar para ${item.name}`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
