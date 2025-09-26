import React, { useEffect, useState } from 'react'

interface SimpleMeteorsProps {
  number?: number;
}

const SimpleMeteors: React.FC<SimpleMeteorsProps> = React.memo(
  ({ number = 5 }) => {
    const [showMeteors, setShowMeteors] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowMeteors(true);
      }, 1000);

      return () => clearTimeout(timer);
    }, []);

    if (!showMeteors) {
      return null;
    }

    return (
      <>
        {[...Array(number)].map((_, i) => (
          <span
            key={i}
            className="absolute meteor-effect rounded-full bg-white shadow-[0_0_0_1px_#ffffff10]"
            style={{
              top: `-10px`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 8 + 8}s`,
              width: `${Math.random() * 3 + 0.5}px`,
              height: `${Math.random() * 3 + 0.5}px`,
              opacity: Math.random() * 0.6 + 0.2,
              transform: `rotate(${Math.random() * 30 + 210}deg)`,
            }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 w-[50px] h-[1px] bg-gradient-to-r from-amber-100 to-transparent" />
          </span>
        ))}
      </>
    );
  }
);

SimpleMeteors.displayName = "SimpleMeteors";

export default SimpleMeteors;