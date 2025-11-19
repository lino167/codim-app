"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type Burst = {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
};

const PARTICLE_COUNT = 60;
const MAX_DISTANCE = 200;
const SPEED = 0.2;
const PARTICLE_RADIUS = 1.8;
const BURST_CHANCE = 0.006;
const BURST_GROWTH = 1.1;
const CLOSE_DISTANCE_FACTOR = 0.6;

export function AtomsBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    const bursts: Burst[] = [];

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
    });

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(createParticle());
      }
    };

    const drawBursts = () => {
      for (let i = bursts.length - 1; i >= 0; i--) {
        const burst = bursts[i];
        burst.radius += BURST_GROWTH;
        burst.alpha *= 0.985;

        ctx.strokeStyle = `rgba(217, 4, 41, ${burst.alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(burst.x, burst.y, burst.radius, 0, Math.PI * 2);
        ctx.stroke();

        if (burst.radius > burst.maxRadius || burst.alpha <= 0.02) {
          bursts.splice(i, 1);
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx *= -1;
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy *= -1;
        }

        ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, PARTICLE_RADIUS, 0, Math.PI * 2);
        ctx.fill();

        if (Math.random() < BURST_CHANCE) {
          bursts.push({
            x: particle.x,
            y: particle.y,
            radius: PARTICLE_RADIUS,
            maxRadius: 40 + Math.random() * 60,
            alpha: 0.5 + Math.random() * 0.3,
          });
        }

        for (let j = index + 1; j < particles.length; j++) {
          const target = particles[j];
          const dx = particle.x - target.x;
          const dy = particle.y - target.y;
          const distance = Math.hypot(dx, dy);

          if (distance < MAX_DISTANCE) {
            const closeDistance = MAX_DISTANCE * CLOSE_DISTANCE_FACTOR;
            const proximity =
              distance < closeDistance
                ? 1
                : 1 - (distance - closeDistance) / (MAX_DISTANCE - closeDistance);
            const opacity = Math.max(proximity, 0);
            ctx.strokeStyle = `rgba(217, 4, 41, ${opacity * 0.55})`;
            ctx.lineWidth = 0.4 + 0.8 * opacity;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();
          }
        }
      });

      drawBursts();
    };

    let frameId: number;
    const render = () => {
      draw();
      frameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      setCanvasSize();
      initParticles();
    };

    setCanvasSize();
    initParticles();
    render();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="codim-atoms-canvas" />;
}
