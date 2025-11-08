import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Desenvolvedor Full Stack';
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % 1;
      const currentText = fullText;

      setDisplayedText(
        isDeleting
          ? currentText.substring(0, displayedText.length - 1)
          : currentText.substring(0, displayedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, typingSpeed]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/keven-w', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/keven-wendell', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:keven.w.1107@gmail.com', label: 'Email' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black  pt-16">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #00ff00 2px, #00ff00 4px)`,
          animation: 'slide 20s linear infinite'
        }}></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-green-500 font-mono text-sm md:text-base mb-4"
            >
              Olá, meu nome é
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="text-white">Keven</span>{' '}
              <span className="text-green-500">W.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="h-16 md:h-20 flex items-center justify-center"
            >
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-300">
                {displayedText}
                <span className="text-green-500 animate-pulse">|</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              Estudante de Ciência da Computação apaixonado por tecnologia,
              em busca de oportunidades de estágio e crescimento profissional.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 hover:scale-105"
              >
                Ver Projetos
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-green-500 text-green-500 font-semibold rounded-lg hover:bg-green-500 hover:text-black transition-all duration-300 hover:scale-105"
              >
                Entre em Contato
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex justify-center gap-6 mb-12"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1.3 },
              y: { repeat: Infinity, duration: 1.5 }
            }}
            onClick={() => scrollToSection('about')}
            className="text-green-500 hover:text-green-400 transition-colors"
            aria-label="Rolar para baixo"
          >
            <ChevronDown size={40} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
