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

    // Configurações ajustadas - mais lento mas visível
    const fontSize = 16;
    const columnWidth = 24; // Mais espaçado
    let speed = 0.6; // Mais lento
    let lastTime = 0;
    const interval = 50; // 20 FPS (mais suave e lento)

    const initCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      
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
        dropsRef.current[i] = Math.random() * -100; // Começar mais acima
      }
    };

    const draw = (timestamp: number) => {
      // Controlar FPS
      if (timestamp - lastTime < interval) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }
      lastTime = timestamp;

      const parent = canvas.parentElement;
      if (!parent) return;
      
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      
      // Fundo com opacidade para efeito de rastro suave
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'; // Rastro mais duradouro
      ctx.fillRect(0, 0, width, height);

      // Texto binário com cor suave e visível
      ctx.fillStyle = 'rgba(212, 175, 55, 0.15)'; // Mais suave
      ctx.font = `bold ${fontSize}px "Courier New", monospace`;
      ctx.textAlign = 'center';

      const drops = dropsRef.current;
      
      for (let i = 0; i < drops.length; i++) {
        // Texto binário aleatório
        const text = Math.random() > 0.5 ? '1' : '0';
        const x = i * columnWidth + columnWidth / 2; // Centralizado na coluna
        const y = drops[i];
        
        // Desenhar o caractere
        ctx.fillText(text, x, y);
        
        // Mover para baixo com velocidade variável
        const dropSpeed = speed * (0.8 + Math.random() * 0.4);
        drops[i] += dropSpeed;
        
        // Reiniciar se sair da tela
        if (drops[i] > height + 100) {
          drops[i] = Math.random() * -50;
        }
        
        // Ocasionalmente resetar uma gota aleatória
        if (Math.random() < 0.001) {
          drops[i] = Math.random() * -50;
        }
      }

      // Desenhar algumas partículas especiais
      if (Math.random() < 0.03) {
        const specialX = Math.random() * width;
        const specialY = Math.random() * height;
        ctx.fillStyle = 'rgba(212, 175, 55, 0.3)';
        ctx.fillText('1', specialX, specialY);
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    const startAnimation = () => {
      initCanvas();
      animationRef.current = requestAnimationFrame(draw);
    };

    // Iniciar animação
    startAnimation();

    // Observar redimensionamento do container
    const resizeObserver = new ResizeObserver(() => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      initCanvas();
      animationRef.current = requestAnimationFrame(draw);
    });

    const parent = canvas.parentElement;
    if (parent) {
      resizeObserver.observe(parent);
    }

    // Redimensionamento da janela
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
      if (parent) {
        resizeObserver.unobserve(parent);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="binary-canvas"
      aria-hidden="true"
    />
  );
};

export default BinaryBackground;