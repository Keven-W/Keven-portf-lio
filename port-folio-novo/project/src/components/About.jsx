import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Layout, GitBranch, Cpu, Terminal } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { icon: Code2, name: 'HTML/CSS/JS', color: 'text-orange-500' },
    { icon: Layout, name: 'React.js', color: 'text-blue-400' },
    { icon: Database, name: 'modelagem de dados (básico)', color: 'text-yellow-500' },
    { icon: Terminal, name: 'Python', color: 'text-green-400' },
    { icon: Cpu, name: 'Linguagem C', color: 'text-blue-600' },
    { icon: GitBranch, name: 'Git/GitHub', color: 'text-purple-500' }
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
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
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
              <span className="text-white">Sobre</span>{' '}
              <span className="text-green-500">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-lg blur-xl"></div>
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-green-500/30 shadow-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-gray-500 text-sm font-mono ml-2">sobre.txt</span>
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <p className="text-gray-400">
                      <span className="text-green-500">const</span>{' '}
                      <span className="text-blue-400">desenvolvedor</span> = {'{'}
                    </p>
                    <p className="text-gray-400 ml-4">
                      nome: <span className="text-yellow-400">"Keven Wendell"</span>,
                    </p>
                    <p className="text-gray-400 ml-4">
                      curso: <span className="text-yellow-400">"Ciência da Computação"</span>,
                    </p>
                    <p className="text-gray-400 ml-4">
                      semestre: <span className="text-yellow-400">2</span>,
                    </p>
                    <p className="text-gray-400 ml-4">
                      objetivo: <span className="text-yellow-400">"Full Stack Developer"</span>,
                    </p>
                    <p className="text-gray-400 ml-4">
                      localização: <span className="text-yellow-400">"São Paulo, SP"</span>
                    </p>
                    <p className="text-gray-400">{'}'};</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Estudante apaixonado por tecnologia
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Sou estudante do 2º semestre de Ciência da Computação, dedicado a me tornar
                um desenvolvedor full stack completo. Tenho grande interesse em criar soluções
                web modernas e eficientes.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Atualmente, estou focado em aprimorar minhas habilidades em desenvolvimento
                front-end e back-end, sempre buscando aprender novas tecnologias e melhores
                práticas de programação.
              </p>

              <div className="bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-green-400 italic">
                  "Em busca de oportunidades de estágio para aplicar conhecimentos e crescer
                  profissionalmente na área de desenvolvimento."
                </p>
              </div>

              <div className="pt-4">
                <h4 className="text-xl font-semibold text-white mb-6">Tecnologias que uso</h4>
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-3 gap-4"
                >
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex flex-col items-center gap-2 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300"
                    >
                      <tech.icon className={`${tech.color} w-8 h-8`} />
                      <span className="text-gray-300 text-xs text-center">{tech.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
