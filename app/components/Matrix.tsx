"use client";
import { useEffect, useRef } from "react";

const Matrix = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Names and attributes of Jesus Christ
  const jesusAttributes = [
    "Jesus Christ",
    "Messiah",
    "Savior",
    "Redeemer",
    "Son of God",
    "Lamb of God",
    "King of Kings",
    "Lord of Lords",
    "Prince of Peace",
    "Alpha and Omega",
    "The Way",
    "The Truth",
    "The Life",
    "Good Shepherd",
    "Light of the World",
    "Bread of Life",
    "Resurrection",
    "Emmanuel",
    "Wonderful Counselor",
    "Mighty God",
    "Everlasting Father",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const overlay = overlayRef.current;
    if (!canvas || !overlay) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Matrix characters
    const matrixChars =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    // Each column drops
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Draw the Matrix animation
    const drawMatrix = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0"; // Green text
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars.charAt(
          Math.floor(Math.random() * matrixChars.length)
        );
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Send the drop back to the top randomly after it has crossed the screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const matrixInterval = setInterval(drawMatrix, 35);

    // Handle text overlay animation
    const showRandomAttribute = () => {
      if (!overlay) return;

      const randomAttribute =
        jesusAttributes[Math.floor(Math.random() * jesusAttributes.length)];

      // Create a new div for the text
      const textElement = document.createElement("div");
      textElement.textContent = randomAttribute;
      textElement.style.position = "absolute";
      textElement.style.color = "#0F0";
      textElement.style.fontSize = `${Math.random() * 24 + 16}px`;
      textElement.style.fontWeight = "bold";
      textElement.style.fontFamily = "monospace";
      textElement.style.textShadow = "0 0 5px #0F0, 0 0 10px #0F0";
      textElement.style.left = `${Math.random() * 80}%`;
      textElement.style.top = `${Math.random() * 80}%`;
      textElement.style.opacity = "0";
      textElement.style.transition = "opacity 1.5s ease-in-out";
      textElement.style.zIndex = "10";

      overlay.appendChild(textElement);

      // Fade in
      setTimeout(() => {
        textElement.style.opacity = "1";
      }, 10);

      // Fade out and remove
      setTimeout(() => {
        textElement.style.opacity = "0";
        setTimeout(() => {
          if (overlay.contains(textElement)) {
            overlay.removeChild(textElement);
          }
        }, 1500);
      }, 2000);
    };

    const textInterval = setInterval(showRandomAttribute, 3000);

    // Handle resize
    const handleResize = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      clearInterval(matrixInterval);
      clearInterval(textInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-64 overflow-hidden bg-black rounded-2xl shadow-lg mb-6">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full opacity-90"
      />
      <div
        ref={overlayRef}
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none"
      />
    </div>
  );
};

export default Matrix;
