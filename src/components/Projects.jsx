import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Clock, CheckCircle } from 'lucide-react';
import clinicapng from '../assets/imgs/Clinica.png';
import telacurso from '../assets/imgs/tela-curso.png';



const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Website para laboratório de protése dentária',
      description: 'Sistema completo para gestão de clínica odontológica com agendamento online, cadastro de pacientes e área administrativa.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
      status: 'in-progress',
      statusText: 'Em Desenvolvimento',
      image: clinicapng,
      github: 'https://github.com/Keven-W',
      highlights: ['Sistema de Agendamento', 'Dashboard Administrativo', 'Gestão de Pacientes']
    },
 
    {
      title: 'Calculadora Científica',
      description: 'Calculadora avançada desenvolvida em linguagem C, capaz de realizar operações matemáticas complexas e cálculos científicos.',
      technologies: ['C', 'Matemática', 'Algoritmos'],
      status: 'in-progress',
      statusText: 'Em Desenvolvimento',
      image: 'https://images.pexels.com/photos/5922192/pexels-photo-5922192.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Keven-W',
      highlights: ['Operações Avançadas', 'Interface CLI', 'Funções Trigonométricas']
    },
    {
      title: 'Landing Page Responsiva',
      description: 'Landing page moderna e totalmente responsiva para empresa fictícia de cursos de tecnologia, com design clean e animações suaves.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      status: 'completed',
      statusText: 'Concluído',
      image: telacurso,
      github: 'https://github.com/Keven-W/Tech-Curso',
     
      highlights: ['Design Responsivo', 'Animações CSS', 'SEO Otimizado']
    }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Meus</span>{' '}
              <span className="text-green-500">Projetos</span>
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi durante minha jornada como programador em formação.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

                  <div className="absolute top-4 right-4">
                    {project.status === 'in-progress' ? (
                      <span className="flex items-center gap-1 px-3 py-1 bg-yellow-500/20 border border-yellow-500 text-yellow-500 rounded-full text-xs font-semibold">
                        <Clock size={14} />
                        {project.statusText}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 px-3 py-1 bg-green-500/20 border border-green-500 text-green-500 rounded-full text-xs font-semibold">
                        <CheckCircle size={14} />
                        {project.statusText}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-500 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xs text-gray-500 uppercase tracking-wide mb-2">Destaques</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-green-500/10 border border-green-500/30 text-green-400 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-gray-700">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Código
                    </motion.a>

                    {project.live && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-400 text-black rounded-lg text-sm font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-6">
              Gostou dos meus projetos? Veja mais no meu GitHub!
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/keven-w"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
            >
              <Github size={20} />
              Ver Mais Projetos
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
