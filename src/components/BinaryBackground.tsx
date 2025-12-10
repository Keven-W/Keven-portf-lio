import { useEffect, useRef } from 'react';

const BinaryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const dropsRef = useRef<number[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurações - mais visível e rápido
    const fontSize = 16; // Tamanho normal
    const columnWidth = 20; // Mais denso
    let speed = 1.2; // Mais rápido
    let lastTime = 0;
    const interval = 33; // 30 FPS (mais suave)

    const initCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Ajustar para high DPI displays
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(dpr, dpr);
      
      // Inicializar gotas
      const columns = Math.floor(width / columnWidth);
      dropsRef.current = new Array(columns);
      for (let i = 0; i < columns; i++) {
        dropsRef.current[i] = Math.random() * -50;
      }
    };

    const draw = (timestamp: number) => {
      // Controlar FPS
      if (timestamp - lastTime < interval) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }
      lastTime = timestamp;

      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      
      // Fundo com opacidade para efeito de rastro (mais visível)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Aumentada
      ctx.fillRect(0, 0, width, height);

      // Texto binário com cor mais visível
      ctx.fillStyle = 'rgba(212, 175, 55, 0.25)'; // Mais opaco
      ctx.font = `${fontSize}px "Courier New", monospace`;

      const drops = dropsRef.current;
      
      for (let i = 0; i < drops.length; i++) {
        // Mais frequência de mudança (rápido)
        const text = Math.random() > 0.5 ? '1' : '0';
        const x = i * columnWidth;
        const y = drops[i];
        
        ctx.fillText(text, x, y);
        
        // Mover para baixo MAIS RÁPIDO
        drops[i] += speed;
        
        // Reiniciar se sair da tela
        if (drops[i] > height + 50) {
          drops[i] = Math.random() * -20;
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    const startAnimation = () => {
      initCanvas();
      animationRef.current = requestAnimationFrame(draw);
    };

    // Iniciar
    startAnimation();

    // Redimensionamento
    const handleResize = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      initCanvas();
      animationRef.current = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
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
      className="fixed top-0 left-0 w-full h-full opacity-30 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default BinaryBackground;