import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cozyDesk from '../assets/cozy_desk_pixel_art.png';

// Antigravity Canvas Sub-component
function AntigravityCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const listener = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Resize handler
    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Setup particles count based on prefers-reduced-motion
    const particleCount = reducedMotion ? 20 : 80;
    const particles = [];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const isLight = document.body.classList.contains('light-theme');
      const colors = isLight
        ? ['#6d28d9', '#8b5cf6', '#4f46e5', '#0284c7', '#475569']
        : ['#7c3aed', '#a855f7', '#6366f1', '#38bdf8', '#ffffff'];

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vy: -(Math.random() * 0.7 + 0.3), // -0.3 to -1.0
        vx: Math.random() * 0.4 - 0.2, // -0.2 to +0.2
        radius: Math.random() * 3 + 1.5, // 1.5px to 4.5px
        targetOpacity: Math.random() * 0.4 + 0.15, // 0.15 to 0.55
        opacity: 0,
        age: 0,
        angle: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Mouse handlers
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const parent = canvas.parentElement;
    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);

    // Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isLight = document.body.classList.contains('light-theme');
      const colors = isLight
        ? ['#6d28d9', '#8b5cf6', '#4f46e5', '#0284c7', '#475569']
        : ['#7c3aed', '#a855f7', '#6366f1', '#38bdf8', '#ffffff'];

      if (reducedMotion) {
        particles.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.targetOpacity * 0.8;
          ctx.fill();
        });
        return;
      }

      const mouse = mouseRef.current;

      // Update and Draw Particles
      particles.forEach((p) => {
        p.age++;
        
        // Wobble on X
        p.x += Math.sin(p.angle) * 0.3;
        p.angle += 0.015;

        // Velocity
        p.x += p.vx;
        p.y += p.vy;

        // Mouse repulsion
        if (mouse.x !== -1000) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 100) {
            const force = (100 - dist) * 0.015;
            const angle = Math.atan2(dy, dx);
            p.x += Math.cos(angle) * force;
            p.y += Math.sin(angle) * force;
          }
        }

        // Reset to bottom if exit top
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
          p.age = 0;
          p.angle = Math.random() * Math.PI * 2;
          p.vy = -(Math.random() * 0.7 + 0.3);
          p.vx = Math.random() * 0.4 - 0.2;
          p.color = colors[Math.floor(Math.random() * colors.length)];
        }

        // Calculate opacity
        let opacity = p.targetOpacity;
        if (p.age < 60) {
          opacity = p.targetOpacity * (p.age / 60);
        }
        if (p.y < 120) {
          opacity *= (p.y / 120);
        }
        if (opacity < 0) opacity = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = opacity;
        ctx.fill();
      });

      // Connected lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 120) {
            const lineOpacity = (1 - (dist / 120)) * (isLight ? 0.08 : 0.15);
            const fadeFactor = Math.min(
              p1.age < 60 ? (p1.age / 60) : 1,
              p2.age < 60 ? (p2.age / 60) : 1,
              p1.y < 120 ? (p1.y / 120) : 1,
              p2.y < 120 ? (p2.y / 120) : 1
            );
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isLight 
              ? `rgba(109, 40, 217, ${lineOpacity * fadeFactor})`
              : `rgba(124, 58, 237, ${lineOpacity * fadeFactor})`;
            ctx.lineWidth = 0.4;
            ctx.globalAlpha = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
}

export default function Home() {
  const navigate = useNavigate();

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: 'smooth',
    });
  };

  return (
    <div style={{ position: 'relative', minHeight: '90vh', width: '100%' }}>
      {/* Antigravity Canvas particle overlay */}
      <AntigravityCanvas />

      <div className="retro-home-container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Left Side: Info & India Gate */}
        <div className="retro-left">
          
          {/* India Gate SVG Drawing */}
          <svg width="80" height="85" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="retro-illustration">
            {/* Ground base */}
            <path d="M 12 90 L 88 90" />
            <path d="M 15 85 L 85 85" />
            
            {/* Left and Right Columns */}
            <path d="M 22 85 L 25 40 L 34 40 L 36 85" />
            <path d="M 64 85 L 66 40 L 75 40 L 78 85" />
            
            {/* Inner Arch Walls */}
            <path d="M 40 85 L 40 58" />
            <path d="M 60 85 L 60 58" />
            
            {/* Arch Curve */}
            <path d="M 40 58 C 40 48, 60 48, 60 58" />
            
            {/* Lintel Bars */}
            <path d="M 20 40 L 80 40" />
            <path d="M 20 36 L 80 36" />
            <path d="M 23 28 L 77 28" />
            <path d="M 23 36 L 23 28" />
            <path d="M 77 36 L 77 28" />
            
            {/* Crown Steps */}
            <path d="M 28 28 L 32 22 L 68 22 L 72 28" />
            <path d="M 38 22 L 40 18 L 60 18 L 62 22" />
            <path d="M 45 18 C 45 14, 55 14, 55 18" />
            
            {/* Center flag line */}
            <path d="M 50 14 L 50 11" strokeWidth="1" />
          </svg>

          <span className="retro-location">Delhi, India</span>
          
          <h1 className="retro-name">Ansh Verma</h1>
          
          <h2 className="retro-title">Frontend Developer</h2>
          
          <div className="retro-bio">
            <p style={{ marginBottom: '12px' }}>
              I build fluid frontend experiences, interactive interfaces, and modular systems design with React and modern CSS principles.
            </p>
            <p>
              Before freelancing, I spent time coding experimental user interfaces and polishing high-fidelity web apps.
            </p>
          </div>

          <button 
            className="glow-btn" 
            style={{ marginTop: '12px', fontFamily: "'Share Tech Mono', monospace" }}
            onClick={() => navigate('/portfolio')}
          >
            View My Work_
          </button>
        </div>

        {/* Right Side: Pixel Art cozy workspace */}
        <div className="retro-right">
          <div className="retro-image-container">
            <img 
              src={cozyDesk} 
              alt="Cozy Retro Workspace Setup" 
              className="retro-pixel-image" 
            />
          </div>
        </div>

      </div>

      {/* Bouncing scroll indicator */}
      <div 
        className="chevron-container bounce-chevron" 
        onClick={handleScrollDown}
        style={{ fontFamily: "'Share Tech Mono', monospace", textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}
      >
        Scroll
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '4px auto 0' }}>
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
  );
}
