import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Sobre', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projetos', id: 'projects' },
    { name: 'Contato', id: 'contact' }
  ];

  const socialLinks = [
    { icon: Mail, href: 'mailto:keven.w.1107@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com/in/kevenw', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Keven-W', label: 'GitHub' }
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Keven Wendell</h3>
            <p className="text-gray-400 mb-4">
              Desenvolvedor front-end em evolução para fullstack, criando soluções modernas e funcionais.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#D4AF37]/20 p-2 rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={20} className="text-[#D4AF37]" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>keven.w.1107@gmail.com</li>
              <li>Disponível para projetos</li>
              <li>Estágio, CLT, Freelance</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#D4AF37]/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            {new Date().getFullYear()} Obrigado pela visita — Keven Wendell
          </p>

          <motion.button
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)' }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="bg-[#D4AF37] text-black p-3 rounded-full hover:bg-[#C4A037] transition-all duration-300"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
