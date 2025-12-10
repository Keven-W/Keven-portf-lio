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
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre <span className="text-[#D4AF37]">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Sou <span className="text-[#D4AF37] font-semibold">Keven Wendell</span>, estudante de Ciência da Computação
              e desenvolvedor front-end em evolução para fullstack. Gosto de transformar ideias em interfaces limpas,
              rápidas e funcionais.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Lidero projetos em equipe, aplico boas práticas de código e atualmente inicio estudos em{' '}
              <span className="text-[#D4AF37] font-semibold">SQL</span> e{' '}
              <span className="text-[#D4AF37] font-semibold">Node.js</span> para fortalecer meu back-end.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#D4AF37]/10 border-2 border-[#D4AF37] rounded-lg p-4 inline-flex items-center gap-3"
            >
              <Briefcase className="text-[#D4AF37]" size={24} />
              <span className="text-white font-medium">
                Disponível para estágio, CLT, jovem aprendiz e freelance
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 bg-black/50 border border-[#D4AF37]/30 rounded-lg p-4 hover:border-[#D4AF37] transition-all duration-300"
                aria-label={`Acessar ${contact.label}`}
              >
                <div className="bg-[#D4AF37]/20 p-3 rounded-lg">
                  <contact.icon className="text-[#D4AF37]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{contact.label}</p>
                  <p className="text-white font-medium">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
