import React, { useEffect, useState } from "react";

interface FloatingOrbsProps {
  number?: number;
}

const FloatingOrbs: React.FC<FloatingOrbsProps> = React.memo(
  ({ number = 25 }) => {
    const [showOrbs, setShowOrbs] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowOrbs(true);
        setTimeout(() => setFadeIn(true));
      }, 1000);

      return () => clearTimeout(timer);
    }, []);

    if (!showOrbs) {
      return null;
    }

    // Animation classes based on your Tailwind theme
    const animationClasses = [
      "animate-first", // moveVertical 30s ease infinite
      "animate-second", // moveInCircle 20s reverse infinite
      "animate-third", // moveInCircle 40s linear infinite
      "animate-fourth", // moveHorizontal 40s ease infinite
      "animate-fifth", // moveInCircle 20s ease infinite
    ];

    return (
      <>
        {[...Array(number)].map((_, i) => {
          const colors = [
            "rgba(150, 190, 239, 0.7)",
            "rgba(255, 181, 152, 0.6)",
            "rgba(109, 241, 193, 0.5)",
          ];

          const color = colors[i % 3];
          const size = Math.random() * 20 + 100;
          const blur = Math.random() * 4 + 12;
          const animationClass = animationClasses[i % animationClasses.length];

          return (
            <div
              key={i}
              className={`absolute rounded-full floating-orb ${animationClass} ${
                fadeIn ? "fade-in-active" : "fade-in-initial"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: color,
                filter: `blur(${blur}px)`,
                opacity: Math.random() * 0.4 + 0.6,
                zIndex: 10,
                boxShadow: `0 0 ${size / 2}px ${size / 4}px ${color.replace(
                  "0.8",
                  "0.3"
                )}`,
              }}
            />
          );
        })}
      </>
    );
  }
);

FloatingOrbs.displayName = "FloatingOrbs";


export default FloatingOrbs;
