import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, Skill } from '../data/skills';
import SkillCard from './SkillCard';
import SkillModal from './SkillModal';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedSkill(null), 300);
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Minhas <span className="text-[#D4AF37]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Clique em qualquer skill para ver detalhes sobre meus domínios e áreas de aplicação
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              onClick={() => handleSkillClick(skill)}
              index={index}
            />
          ))}
        </div>
      </div>

      <SkillModal
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Skills;
