import { useEffect } from 'react';

export const useSparkleEffect = () => {
  useEffect(() => {
    let lastSparkleTime = 0;

    const handleMouseMove = (event) => {
      const now = Date.now();
      const sparkleContainer = document.querySelector('.sparkle-container');
      if (!sparkleContainer) return;

      // Evita demasiadas chispas (una cada 120ms)
      if (now - lastSparkleTime < 120) return;
      lastSparkleTime = now;

      if (Math.random() > 0.95) { // 5% de probabilidad
        const sparkle = document.createElement('span');
        sparkle.classList.add(
          'sparkle',
          'absolute',
          'text-xl',
          'pointer-events-none',
          'animate-sparkle-fade'
        );

        const sparkles = ['🎶', '🎤', '💖', '⭐', '🎵', '✨'];
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];

        sparkle.style.left = `${event.clientX}px`;
        sparkle.style.top = `${event.clientY}px`;
        sparkle.style.transition = 'transform 1s, opacity 1s';
        sparkle.style.zIndex = 9999;

        sparkleContainer.appendChild(sparkle);
        sparkle.addEventListener('animationend', () => sparkle.remove());
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
};
