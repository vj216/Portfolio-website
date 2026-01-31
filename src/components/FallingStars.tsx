import React, { useEffect, useState } from 'react';

const FallingStars: React.FC = () => {
  const [stars, setStars] = useState<Array<{id: number, left: number, delay: number, size: number}>>([]);

  useEffect(() => {
    // Generate 40 stars with random properties
    const newStars = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * -30,
      size: 10 + Math.random() * 20,
      opacity: 0.3 + Math.random() * 0.4
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute top-[-50px] text-gray-300 dark:text-gray-700"
          style={{
            left: `${star.left}vw`,
            fontSize: `${star.size}px`,
            // opacity: star.opacity,
            animation: `fall ${15 + Math.random() * 20}s linear ${star.delay}s infinite`
          }}
        >
          ✦
        </div>
      ))}
      
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FallingStars;