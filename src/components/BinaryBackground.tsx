import { useEffect, useRef } from 'react';

const BinaryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Função para ajustar o canvas
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    resizeCanvas();

    const columns = Math.floor(canvas.width / 20 / (window.devicePixelRatio || 1));
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      // Limpa com opacidade para efeito de rastro
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#D4AF37';
      ctx.font = '15px monospace';

      const dpr = window.devicePixelRatio || 1;
      const fontSize = 15;
      
      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? '1' : '0';
        const x = i * 20;
        const y = drops[i] * fontSize;
        
        ctx.fillText(text, x, y);

        // Reinicia quando passa da tela
        if (y > canvas.height / dpr && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
        // Recalcula colunas após resize
        const newColumns = Math.floor(canvas.width / 20 / (window.devicePixelRatio || 1));
        drops.length = newColumns;
        for (let i = 0; i < newColumns; i++) {
          if (!drops[i]) drops[i] = 1;
        }
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 opacity-20 pointer-events-none w-full h-full"
      aria-hidden="true"
    />
  );
};

export default BinaryBackground;