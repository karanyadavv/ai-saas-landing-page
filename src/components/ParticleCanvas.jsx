import { useEffect, useRef, useState } from "react";

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    const observer = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;

    const createParticle = () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * 3 + 1,
      speedX: Math.random() * 2 - 1,
      speedY: Math.random() * 2 - 1,
      opacity: Math.random() * 0.7 + 0.2,
    });

    const updateParticle = (particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < 0) particle.x = dimensions.width;
      if (particle.x > dimensions.width) particle.x = 0;
      if (particle.y < 0) particle.y = dimensions.height;
      if (particle.y > dimensions.height) particle.y = 0;

      return particle;
    };

    const drawParticle = (particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
      ctx.fill();
    };

    if (dimensions.width && dimensions.height) {
      particles = Array.from({ length: 50 }, createParticle);

      const animate = () => {
        ctx.clearRect(0, 0, dimensions.width, dimensions.height);
        particles.forEach((particle) => {
          updateParticle(particle);
          drawParticle(particle);
        });
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [dimensions]);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full -z-10 bg-[#02070E]"
    >
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="w-full h-full"
      />
    </div>
  );
};

export default ParticleCanvas;
