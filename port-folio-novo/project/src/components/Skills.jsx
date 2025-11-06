import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'HTML', percentage: 90, color: 'bg-orange-500', category: 'Frontend' },
    { name: 'CSS', percentage: 89, color: 'bg-blue-500', category: 'Frontend' },
    { name: 'JavaScript', percentage: 80, color: 'bg-yellow-500', category: 'Frontend' },
    { name: 'React.js', percentage: 40, color: 'bg-cyan-500', category: 'Frontend' },
    { name: 'C', percentage: 75, color: 'bg-blue-600', category: 'Backend' },
    { name: 'Python', percentage: 40, color: 'bg-green-600', category: 'Backend' },
    { name: 'SQL', percentage: 10, color: 'bg-purple-500', category: 'Backend' },
    { name: 'Git/GitHub', percentage: 75, color: 'bg-gray-600', category: 'Ferramentas' },
     { name: 'Vs code', percentage: 80, color: 'bg-red-600', category: 'Ferramentas' }
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const categories = ['Frontend', 'Backend', 'Ferramentas'];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
              <span className="text-white">Minhas</span>{' '}
              <span className="text-green-500">Habilidades</span>
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Tecnologias e linguagens que domino e utilizo nos meus projetos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, catIndex) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-green-500 mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  {category}
                </h3>

                <div className="space-y-6">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                          <span className="text-green-500 font-semibold">{skill.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: catIndex * 0.2 + index * 0.1 }}
                            className={`h-full ${skill.color} rounded-full relative`}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </motion.div>
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/30 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">3+</div>
              <div className="text-gray-400">Projetos Desenvolvidos</div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/30 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">8+</div>
              <div className="text-gray-400">Tecnologias Dominadas</div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/30 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">2º</div>
              <div className="text-gray-400">Semestre em Andamento</div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 bg-gray-800/50 border border-gray-700 p-6 rounded-lg"
          >
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-green-500">📚</span>
              Atualmente Estudando
            </h4>
            <div className="flex flex-wrap gap-3">
              {['Node.js', 'TypeScript', 'MongoDB', 'Docker', 'APIs RESTful', 'React.js'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full text-sm font-medium hover:bg-green-500/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
