import React, { useEffect, useState } from 'react'

interface FallingSnowProps {
  number?: number;
}

const FallingSnow: React.FC<FallingSnowProps> = React.memo(
  ({ number = 80 }) => {
    const [showSnow, setShowSnow] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowSnow(true);
      }, 1000);

      return () => clearTimeout(timer);
    }, []);

    if (!showSnow) {
      return null;
    }

    return (
      <>
        {[...Array(number)].map((_, i) => {
          // Create different layers of snowflakes
          const layer = Math.floor(Math.random() * 4); // 0-3 for different layers

          let size, speed, opacity, blur;

          switch (layer) {
            case 0: // Close layer - larger, faster, more opaque
              size = Math.random() * 5 + 3;
              speed = Math.random() * 3 + 2;
              opacity = Math.random() * 0.9 + 0.1;
              blur = 1;
              break;
            case 1: // Medium layer
              size = Math.random() * 4 + 2;
              speed = Math.random() * 5 + 4;
              opacity = Math.random() * 0.7 + 0.3;
              blur = 0.5;
              break;
            case 2: // Far layer - smaller, slower, more transparent
              size = Math.random() * 3 + 1;
              speed = Math.random() * 7 + 6;
              opacity = Math.random() * 0.5 + 0.2;
              blur = 0.3;
              break;
            case 3: // Very far layer - tiny, very slow, very transparent
              size = Math.random() * 2 + 0.5;
              speed = Math.random() * 10 + 8;
              opacity = Math.random() * 0.3 + 0.1;
              blur = 0.2;
              break;
            default:
              size = 3;
              speed = 5;
              opacity = 0.5;
              blur = 0.5;
          }

          return (
            <div
              key={i}
              className="absolute rounded-full bg-white snowflake"
              style={{
                top: `-20px`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${speed}s`,
                animationDelay: `${Math.random() * 5}s`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity,
                filter: `blur(${blur}px)`,
                zIndex: 30 - layer * 5,
              }}
            />
          );
        })}
      </>
    );
  }
);

FallingSnow.displayName = "FallingSnow";

export default FallingSnow;
