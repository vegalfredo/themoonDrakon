'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar el canvas para ocupar toda la pantalla
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Configuración de partículas
    const particleCount = 150;
    const particles: Particle[] = [];

    // Crear partículas iniciales con diferentes tamaños para profundidad
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3, // Velocidad más lenta
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 4 + 0.5 // Tamaños más variados: desde 0.5 hasta 4.5
      });
    }

    // Función de animación
    const animate = () => {
      // Limpiar canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Actualizar y dibujar partículas
      particles.forEach((particle, index) => {
        // Actualizar posición
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Rebotar en los bordes
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx *= -1;
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy *= -1;
        }

        // Mantener partículas dentro del canvas
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Dibujar partícula con diferentes tamaños para profundidad
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Variar la opacidad según el tamaño para crear sensación de profundidad
        const opacity = particle.size > 2 ? 0.6 : particle.size > 1.5 ? 0.4 : 0.2;
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();


      });

      requestAnimationFrame(animate);
    };

    animate();

    // Limpiar event listener
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

      return (
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{ 
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 30%, #3b82f6 60%, #60a5fa 100%)'
        }}
      />
    );
};

export default ParticlesBackground;