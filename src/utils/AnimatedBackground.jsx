import React, { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const listener = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
      backgroundColor: 'var(--bg-primary)',
      overflow: 'hidden'
    }}>
      {/* Subtle grid pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }} />

      {/* Radial ambient background highlight */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 50% 50%, transparent 20%, var(--bg-primary) 80%)',
      }} />

      {/* Floating Ambient Glowing Orbs */}
      {!reducedMotion ? (
        <>
          <div className="glow-orb" style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)',
            top: '-200px',
            left: '-200px',
            animation: 'floatGlow1 25s infinite alternate ease-in-out',
            filter: 'blur(40px)',
          }} />
          <div className="glow-orb" style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)',
            bottom: '-150px',
            right: '-100px',
            animation: 'floatGlow2 20s infinite alternate ease-in-out',
            filter: 'blur(30px)',
          }} />
        </>
      ) : (
        <>
          <div style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.04) 0%, transparent 70%)',
            top: '-200px',
            left: '-200px',
            filter: 'blur(40px)',
          }} />
          <div style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.03) 0%, transparent 70%)',
            bottom: '-150px',
            right: '-100px',
            filter: 'blur(30px)',
          }} />
        </>
      )}

      {/* Style element for keyframe animations */}
      <style>{`
        @keyframes floatGlow1 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(80px, 60px) scale(1.05); }
          100% { transform: translate(-40px, 100px) scale(0.95); }
        }
        @keyframes floatGlow2 {
          0% { transform: translate(0, 0) scale(0.95); }
          50% { transform: translate(-60px, -55px) scale(1.05); }
          100% { transform: translate(50px, -80px) scale(1); }
        }
      `}</style>
    </div>
  );
}
