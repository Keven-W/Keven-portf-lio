import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../data/skills';

type SkillCardProps = {
  skill: Skill;
  onClick: () => void;
  index: number;
};

const SkillCard = ({ skill, onClick, index }: SkillCardProps) => {
  const [displayPercent, setDisplayPercent] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1000;
    const steps = 60;
    const increment = skill.percent / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= skill.percent) {
        setDisplayPercent(skill.percent);
        clearInterval(timer);
      } else {
        setDisplayPercent(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [hasAnimated, skill.percent]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onViewportEnter={() => !hasAnimated && setHasAnimated(true)}
      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 rounded-xl p-6 cursor-pointer hover:border-[#D4AF37] transition-all duration-300"
      role="button"
      tabIndex={0}
      aria-label={`Visualizar detalhes de ${skill.name}, ${skill.percent} porcento de proficiência`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-bold text-white">{skill.name}</h3>
        <span
          className="text-2xl font-bold text-[#D4AF37]"
          aria-live="polite"
          aria-atomic="true"
        >
          {displayPercent}%
        </span>
      </div>

      <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: hasAnimated ? `${skill.percent}%` : 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute h-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]"
        />
      </div>

      <p className="text-sm text-gray-400 mt-3">Clique para ver domínios</p>
    </motion.div>
  );
};

export default SkillCard;
