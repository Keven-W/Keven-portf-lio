import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Skill } from '../data/skills';

type SkillModalProps = {
  skill: Skill | null;
  isOpen: boolean;
  onClose: () => void;
};

const SkillModal = ({ skill, isOpen, onClose }: SkillModalProps) => {
  if (!skill) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-[#D4AF37] rounded-2xl p-8 max-w-lg w-full relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-[#D4AF37] transition-colors"
                aria-label="Fechar modal"
              >
                <X size={24} />
              </button>

              <h3 className="text-3xl font-bold text-white mb-2">{skill.name}</h3>
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl font-bold text-[#D4AF37]">{skill.percent}%</div>
                <div className="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percent}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]"
                  />
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-[#D4AF37] mb-3">Domínios desta habilidade:</h4>
                <ul className="space-y-2">
                  {skill.domains.map((domain, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <span className="text-[#D4AF37] mt-1">▹</span>
                      <span>{domain}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SkillModal;
