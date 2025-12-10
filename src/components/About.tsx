import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Briefcase } from 'lucide-react';

const About = () => {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'keven.w.1107@gmail.com',
      href: 'mailto:keven.w.1107@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/kevenw',
      href: 'https://linkedin.com/in/kevenw'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Keven-W',
      href: 'https://github.com/Keven-W'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Sobre <span className="text-[#D4AF37]">Mim</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="space-y-4 md:space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Sou <span className="text-[#D4AF37] font-semibold">Keven Wendell</span>, estudante de Ciência da Computação
                e desenvolvedor front-end em evolução para fullstack. Gosto de transformar ideias em interfaces limpas,
                rápidas e funcionais.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Lidero projetos em equipe, aplico boas práticas de código e atualmente inicio estudos em{' '}
                <span className="text-[#D4AF37] font-semibold">SQL</span> e{' '}
                <span className="text-[#D4AF37] font-semibold">Node.js</span> para fortalecer meu back-end.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#D4AF37]/10 border-2 border-[#D4AF37] rounded-lg p-3 md:p-4 inline-flex items-center gap-3 max-w-full"
              >
                <Briefcase className="text-[#D4AF37] w-5 h-5 md:w-6 md:h-6" />
                <span className="text-white font-medium text-sm md:text-base break-words">
                  Disponível para estágio, CLT, jovem aprendiz e freelance
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="space-y-3 md:space-y-4">
              {contacts.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 md:gap-4 bg-black/50 border border-[#D4AF37]/30 rounded-lg p-3 md:p-4 hover:border-[#D4AF37] transition-all duration-300 w-full"
                  aria-label={`Acessar ${contact.label}`}
                >
                  <div className="bg-[#D4AF37]/20 p-2 md:p-3 rounded-lg flex-shrink-0">
                    <contact.icon className="text-[#D4AF37] w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs md:text-sm text-gray-400 truncate">{contact.label}</p>
                    <p className="text-white font-medium text-sm md:text-base truncate">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;