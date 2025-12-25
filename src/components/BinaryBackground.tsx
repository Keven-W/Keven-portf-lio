import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  layer: number;
}

const BinaryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const initCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const width = parent.clientWidth;
      const height = parent.clientHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      particlesRef.current = [];
      const particleCount = Math.min(80, Math.floor((width * height) / 15000));

      for (let i = 0; i < particleCount; i++) {
        const layer = Math.random();
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: layer * 3 + 1,
          speedX: (Math.random() - 0.5) * (layer * 0.3 + 0.1),
          speedY: (Math.random() - 0.5) * (layer * 0.3 + 0.1),
          opacity: layer * 0.4 + 0.1,
          layer: layer
        });
      }
    };

    const draw = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const width = parent.clientWidth;
      const height = parent.clientHeight;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      const particles = particlesRef.current;

      particles.forEach((particle, i) => {
        const parallaxX = (mouseRef.current.x - width / 2) * particle.layer * 0.02;
        const parallaxY = (mouseRef.current.y - height / 2) * particle.layer * 0.02;

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < -50) particle.x = width + 50;
        if (particle.x > width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = height + 50;
        if (particle.y > height + 50) particle.y = -50;

        const gradient = ctx.createRadialGradient(
          particle.x + parallaxX,
          particle.y + parallaxY,
          0,
          particle.x + parallaxX,
          particle.y + parallaxY,
          particle.size * 3
        );

        gradient.addColorStop(0, `rgba(212, 175, 55, ${particle.opacity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(212, 175, 55, ${particle.opacity * 0.4})`);
        gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(
          particle.x + parallaxX,
          particle.y + parallaxY,
          particle.size * 3,
          0,
          Math.PI * 2
        );
        ctx.fill();

        particles.forEach((otherParticle, j) => {
          if (i === j) return;

          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * Math.min(particle.opacity, otherParticle.opacity) * 0.15;
            ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x + parallaxX, particle.y + parallaxY);
            ctx.lineTo(otherParticle.x + parallaxX, otherParticle.y + parallaxY);
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    initCanvas();
    animationRef.current = requestAnimationFrame(draw);

    window.addEventListener('mousemove', handleMouseMove);

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

    const handleResize = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      initCanvas();
      animationRef.current = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (parent) {
        resizeObserver.unobserve(parent);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
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
