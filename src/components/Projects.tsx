import { motion } from 'framer-motion';
import { Github, ExternalLink, Clock, CheckCircle } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meus <span className="text-[#D4AF37]">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 rounded-xl overflow-hidden hover:border-[#D4AF37] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                  {project.status === 'completed' ? (
                    <>
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-sm text-white">{project.statusText}</span>
                    </>
                  ) : (
                    <>
                      <Clock size={16} className="text-[#D4AF37]" />
                      <span className="text-sm text-white">{project.statusText}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#D4AF37] mb-2">Destaques:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-[#D4AF37]">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-xs text-[#D4AF37]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37] rounded-lg text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                    aria-label="Ver código no GitHub"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Código</span>
                  </motion.a>

                  {project.live && project.live !== '#' ? (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#D4AF37] text-black rounded-lg hover:bg-[#C4A037] transition-all duration-300"
                      aria-label="Ver projeto ao vivo"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Live</span>
                    </motion.a>
                  ) : (
                    <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-gray-500 rounded-lg cursor-not-allowed">
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Em breve</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
