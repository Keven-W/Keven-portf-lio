import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/keven-w', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/keven-wendell', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:keven.w.1107@gmail.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold mb-2 hover:text-green-500 transition-colors"
            >
              <span className="text-white">Keven</span>
              <span className="text-green-500">.</span>
            </button>
            <p className="text-gray-400 text-sm">
              Desenvolvedor Full Stack em formação
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-900 rounded-lg border border-gray-800 hover:border-green-500 text-gray-400 hover:text-green-500 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-gray-400 text-sm flex items-center gap-2 justify-center md:justify-end">
              Feito por Keven Wendell.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              © {currentYear} Todos os direitos reservados
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-6 border-t border-gray-900 text-center"
        >
          <p className="text-gray-600 text-xs">
            Desenvolvido com React, Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
