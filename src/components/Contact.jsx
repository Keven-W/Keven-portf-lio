import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'keven.w.1107@gmail.com',
      link: 'mailto:keven.w.1107@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'São Paulo, SP',
      color: 'text-blue-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/keven-w',
      link: 'https://github.com/keven-w',
      color: 'text-purple-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/keven-wendell',
      link: 'https://linkedin.com/in/keven-wendell',
      color: 'text-blue-400'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #00ff00 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Entre em</span>{' '}
              <span className="text-green-500">Contato</span>
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e colaborações. Vamos conversar!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Vamos trabalhar juntos</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Atualmente estou em busca de oportunidades de estágio em desenvolvimento
                  web. Se você tem uma vaga ou projeto interessante, adoraria conversar!
                </p>

                <div className="bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500 p-4 rounded-r-lg">
                  <p className="text-green-400 font-medium">
                    Disponível para estágio presencial ou remoto
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300"
                  >
                    <div className={`${contact.color} bg-gray-700 p-3 rounded-lg`}>
                      <contact.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-500 text-sm">{contact.label}</p>
                      {contact.link ? (
                        <a
                          href={contact.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-green-500 transition-colors font-medium"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{contact.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Envie uma mensagem</h3>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors resize-none"
                      placeholder="Sua mensagem..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
                  >
                    <Send size={20} />
                    Enviar Mensagem
                  </motion.button>
                </form>

                <p className="text-gray-500 text-sm mt-6 text-center">
                  (no momento não fiz integração com emailJS então as informações acima não chegam até mim)  <br></br> 
                  me envie um email diretamente: {' '}
                  <a href="mailto:keven.w.1107@gmail.com" className="text-green-500 hover:underline">
                    keven.w.1107@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-6">Me acompanhe nas redes sociais</p>
            <div className="flex justify-center gap-4">
              {[
                { icon: Github, link: 'https://github.com/keven-w', label: 'GitHub' },
                { icon: Linkedin, link: 'https://linkedin.com/in/keven-wendell', label: 'LinkedIn' },
                { icon: Mail, link: 'mailto:keven.w.1107@gmail.com', label: 'Email' }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-green-500 text-gray-400 hover:text-green-500 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
