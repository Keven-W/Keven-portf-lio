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

    // Configurações do efeito
    const fontSize = 18;
    const columnWidth = 20;

    const initDrops = () => {
      const columns = Math.floor(canvas.width / columnWidth);
      dropsRef.current = Array(columns).fill(0);
      
      // Inicializa com valores aleatórios
      for (let i = 0; i < columns; i++) {
        dropsRef.current[i] = Math.random() * canvas.height / fontSize;
      }
    };

    const resizeCanvas = () => {
      // Usar window.innerWidth/Height para cobrir toda a tela
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Ajustar para device pixel ratio
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      ctx.scale(dpr, dpr);
      
      // Definir estilo
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      initDrops();
    };

    const draw = () => {
      // Fundo semi-transparente para efeito de rastro
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Cor do texto binário
      ctx.fillStyle = '#D4AF37';
      ctx.font = `${fontSize}px 'Courier New', monospace`;

      const drops = dropsRef.current;
      const dpr = window.devicePixelRatio || 1;
      
      for (let i = 0; i < drops.length; i++) {
        // Caractere binário aleatório
        const text = Math.random() > 0.5 ? '1' : '0';
        
        // Posição (ajustada para DPR)
        const x = i * columnWidth;
        const y = drops[i] * fontSize;
        
        // Desenha o caractere
        ctx.fillText(text, x, y);

        // Move para baixo
        drops[i]++;

        // Reinicia quando sai da tela
        if (y > canvas.height / dpr && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    const startAnimation = () => {
      resizeCanvas();
      draw();
    };

    const handleResize = () => {
      // Cancelar animação atual
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      // Redimensionar e reiniciar
      resizeCanvas();
      animationRef.current = requestAnimationFrame(draw);
    };

    // Inicia a animação
    startAnimation();

    // Event listeners
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
      className="fixed top-0 left-0 w-full h-full opacity-20 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};

export default BinaryBackground;