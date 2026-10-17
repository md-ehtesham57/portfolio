"use client";

import { useEffect, useRef } from "react";

export function MaximalistBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // ✅ Add this null check

    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];
    let mouseX = width / 2;
    let mouseY = height / 2;
    let animationId: number;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      glow: number;
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 4 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.glow = Math.random() * 40 + 20;
        this.life = 0;
        this.maxLife = Math.random() * 200 + 100;
        
        const colors = [
          "rgba(139, 92, 246, ",
          "rgba(255, 45, 149, ",
          "rgba(6, 247, 247, ",
          "rgba(255, 215, 0, ",
          "rgba(255, 107, 53, ",
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX + (mouseX - width / 2) * 0.0005;
        this.y += this.speedY + (mouseY - height / 2) * 0.0005;
        this.life++;

        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;

        if (this.life > this.maxLife) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.life = 0;
          this.maxLife = Math.random() * 200 + 100;
        }
      }

      draw() {
        if (!ctx) return; // ✅ Add this null check
        const opacity = Math.sin((this.life / this.maxLife) * Math.PI) * 0.8 + 0.2;
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.glow
        );
        gradient.addColorStop(0, this.color + opacity + ")");
        gradient.addColorStop(1, this.color + "0)");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.glow, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      const count = Math.min(150, Math.floor((width * height) / 10000));
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    function drawConnections() {
      if (!ctx) return; // ✅ Add this null check
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            const opacity = (1 - distance / 200) * 0.4;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.shadowColor = "rgba(139, 92, 246, 0.5)";
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!ctx) return; // ✅ Add this null check
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      
      drawConnections();
      
      animationId = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    window.addEventListener("resize", resize);
    
    resize();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
}