import { useState, useEffect } from 'react';

const TypingTitle = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ['Desenvolvedor Front-End', 'Desenvolvedor Fullstack'];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % phrases.length;
      const fullText = phrases[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 800);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <div className="text-3xl md:text-5xl font-bold text-white mb-8 h-20 flex items-center justify-center">
      <span className="text-[#D4AF37]">{text}</span>
      <span className="animate-pulse text-[#D4AF37]">|</span>
    </div>
  );
};

export default TypingTitle;
