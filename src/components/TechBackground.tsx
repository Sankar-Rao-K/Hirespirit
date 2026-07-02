import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

interface Blob {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  hue: "blue" | "cyan";
  angle: number;
  speed: number;
  orbit: number;
}

export function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    const particles: Particle[] = [];
    const blobs: Blob[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
      initBlobs();
    };

    const initParticles = () => {
      particles.length = 0;
      const count = Math.floor((width * height) / 16000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.8 + 1,
          opacity: Math.random() * 0.35 + 0.15,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.015 + 0.005,
        });
      }
    };

    const initBlobs = () => {
      blobs.length = 0;
      const positions: Array<["blue" | "cyan", number, number]> = [
        ["blue", width * 0.18, height * 0.25],
        ["cyan", width * 0.82, height * 0.2],
        ["blue", width * 0.75, height * 0.78],
        ["cyan", width * 0.15, height * 0.82],
      ];
      positions.forEach(([hue, x, y], i) => {
        blobs.push({
          x, y, baseX: x, baseY: y,
          radius: Math.min(width, height) * (0.22 + Math.random() * 0.08),
          hue,
          angle: (i / positions.length) * Math.PI * 2,
          speed: 0.0004 + Math.random() * 0.0003,
          orbit: Math.min(width, height) * 0.06,
        });
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Soft floating gradient blobs
      for (const b of blobs) {
        b.angle += b.speed;
        b.x = b.baseX + Math.cos(b.angle) * b.orbit;
        b.y = b.baseY + Math.sin(b.angle) * b.orbit;

        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
        if (b.hue === "blue") {
          grad.addColorStop(0, "rgba(59,130,246,0.16)");
          grad.addColorStop(0.6, "rgba(59,130,246,0.06)");
          grad.addColorStop(1, "rgba(59,130,246,0)");
        } else {
          grad.addColorStop(0, "rgba(56,189,248,0.14)");
          grad.addColorStop(0.6, "rgba(56,189,248,0.05)");
          grad.addColorStop(1, "rgba(56,189,248,0)");
        }
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Fine grid
      ctx.strokeStyle = "rgba(37,99,235,0.035)";
      ctx.lineWidth = 1;
      const gridSize = 64;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 120;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12;
            ctx.strokeStyle = `rgba(37,99,235,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Particles — soft blue dots that breathe
      for (const p of particles) {
        p.pulse += p.pulseSpeed;
        const pulsed = p.opacity + Math.sin(p.pulse) * 0.12;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 5);
        grad.addColorStop(0, `rgba(37,99,235,${pulsed * 0.4})`);
        grad.addColorStop(1, "rgba(37,99,235,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(29,78,216,${pulsed})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }

      animId = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
      aria-hidden="true"
    />
  );
}