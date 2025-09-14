"use client";
import { cn } from "@/app/lib/utils";
import { motion } from "motion/react";
import React, { useState, useEffect } from "react";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors = ({ number = 10, className }: MeteorsProps) => {
  const [meteors, setMeteors] = useState<React.ReactNode[]>([]);

  const generateMeteor = (idx: number) => {
    // Random position across screen width (0% to 100%)
    const left = Math.random() * 100;

    // Random speed between 2-6 seconds (faster = lower duration)
    const duration = Math.random() * 4 + 2;

    // Random delay between 0-5 seconds for staggered appearance
    const delay = Math.random() * 5;

    return (
      <span
        key={`meteor-${idx}-${Date.now()}-${left}`}
        className={cn(
          "animate-meteor-effect absolute size-0.8 rotate-[45deg] rounded-full bg-red-400 shadow-[0_0_0_2px_#FFF28710]",
          "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] md:before:w-[30px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#FFE100] before:to-transparent before:content-['']",
          className
        )}
        style={{
          top: "-40px",
          left: `${left}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />
    );
  };

  // Initialize and set up individual meteor animations
  useEffect(() => {
    // Generate initial meteors
    const initialMeteors = Array.from({ length: number }, (_, idx) =>
      generateMeteor(idx)
    );
    setMeteors(initialMeteors);

    // Set up regeneration for each meteor after its animation completes
    const timers: NodeJS.Timeout[] = [];

    initialMeteors.forEach((_, idx) => {
      // Calculate when this meteor should regenerate (delay + duration)
      const duration = parseFloat(
        initialMeteors[idx]?.props.style.animationDuration || "4"
      );
      const delay = parseFloat(
        initialMeteors[idx]?.props.style.animationDelay || "0"
      );
      const regenerationTime = (delay + duration) * 1000;

      const timer = setTimeout(() => {
        // Create a function to regenerate this specific meteor
        const regenerateMeteor = () => {
          setMeteors((prev) => {
            const newMeteors = [...prev];
            newMeteors[idx] = generateMeteor(idx);
            return newMeteors;
          });

          // Set up the next regeneration
          const newDuration = Math.random() * 4 + 2;
          const newDelay = Math.random() * 5;
          setTimeout(regenerateMeteor, (newDelay + newDuration) * 1000);
        };

        // Start the regeneration cycle for this meteor
        regenerateMeteor();
      }, regenerationTime);

      timers.push(timer);
    });

    // Cleanup all timers
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [number, className]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
    >
      {meteors}
    </motion.div>
  );
};
