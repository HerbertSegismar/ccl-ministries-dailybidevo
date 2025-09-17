"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "@/app/contexts/ThemeContext";

const Matrix = () => {
  const { theme, colorScheme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Get color based on theme and color scheme
  const getMatrixColor = () => {
    if (theme === "dark") {
      switch (colorScheme) {
        case "green":
          return "#10B981"; // Emerald green
        case "red":
          return "#EF4444"; // Red
        case "yellow":
          return "#F59E0B"; // Amber
        default: // purple
          return "#8B5CF6"; // Purple
      }
    } else {
      switch (colorScheme) {
        case "green":
          return "#059669"; // Darker green for light theme
        case "red":
          return "#DC2626"; // Darker red for light theme
        case "yellow":
          return "#D97706"; // Darker amber for light theme
        default: // purple
          return "#7C3AED"; // Darker purple for light theme
      }
    }
  };

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
    "The Word",
    "Son of Man",
    "The Door",
    "The Vinedresser",
    "True Vine",
    "The Amen",
    "Author and Finisher of Our Faith",
    "Chief Cornerstone",
    "Bright Morning Star",
    "Lion of the Tribe of Judah",
    "Root of David",
    "Holy One of Israel",
    "Bridegroom",
    "Head of the Church",
    "Mediator",
    "Great High Priest",
    "The Prophet",
    "The Rock",
    "Stone of Stumbling",
    "Captain of Salvation",
    "Chosen One",
    "Image of the Invisible God",
    "Firstborn Over Creation",
    "Firstborn from the Dead",
    "The Righteous One",
    "I AM",
    "The Great I Am",
    "Lord of All",
    "Judge of the Living and the Dead",
    "Shiloh",
    "Sun of Righteousness",
    "The Branch",
    "Man of Sorrows",
    "Faithful and True Witness",
    "The Amen",
    "Lord of Glory",
    "The Power of God",
    "The Wisdom of God",
    "Our Passover Lamb",
    "Shepherd of Souls",
    "The Resurrection and the Life",
    "The Holy One",
    "The Just One",
    "The Advocate",
    "The Deliverer",
    "The Hope of Nations",
    "The Consolation of Israel",
    "The Desire of All Nations",
    "The Fountain of Living Waters",
    "The Rod from the Stem of Jesse",
    "The Governor Among the Nations",
    "The Word of Life",
    "The Spirit of Life",
    "The Beloved Son",
    "The Light of Men",
    "The True Light",
    "The Horn of Salvation",
    "The Dayspring from on High",
    "The Upholder of All Things",
    "The Apostle of Our Confession",
    "The Bishop of Souls",
    "The Christ of God",
    "The Holy Servant Jesus",
    "The Pioneer of Salvation",
    "The Author of Eternal Salvation",
    "The Forerunner",
    "The Lawgiver",
    "The Lord of the Harvest",
    "The Lord of the Sabbath",
    "The Truth of God",
    "The Vine",
    "The Living Stone",
    "The Chosen Stone",
    "The Precious Cornerstone",
    "The Foundation",
    "The Temple",
    "The Light of Heaven",
    "The King of the Jews",
    "The King of Israel",
    "The King of Righteousness",
    "The King of Peace",
    "The King of Glory",
    "The Lord Strong and Mighty",
    "The Lord Mighty in Battle",
    "The Lord of Hosts",
    "The Lord Our Righteousness",
    "The Lord Who Heals",
    "The Lord Who Provides",
    "The Lord Who Sanctifies",
    "The Lord Who Is There",
    "The Angel of God",
    "The Angel of the Lord",
    // Hebrew names of God
    "Yahweh",
    "Jehovah",
    "Elohim",
    "El Shaddai",
    "Adonai",
    "Jehovah Jireh",
    "Jehovah Rapha",
    "Jehovah Nissi",
    "Jehovah Shalom",
    "Jehovah Raah",
    "Jehovah Tsidkenu",
    "Jehovah Shammah",
    "El Elyon",
    "El Roi",
    "El Olam",
    "Yahweh Yireh",
    "Yahweh Rapha",
    "Yahweh Nissi",
    "Yahweh Shalom",
    "Yahweh Raah",
    "Yahweh Tsidkenu",
    "Yahweh Shammah",
    "Yahweh Sabaoth",
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
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_-+=ᜀᜁᜂᜃᜄᜅᜆᜇᜈᜉᜊᜋᜌᜎᜏᜐᜑ";

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    // Each column drops
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Dynamic interval variables
    let time = 0;
    let matrixIntervalId: NodeJS.Timeout;

    // Function to calculate dynamic interval
    const getDynamicInterval = () => {
      // Create a pulsing effect between 20ms and 50ms
      return 35 + 15 * Math.sin(time * 0.01);
    };

    // Draw the Matrix animation with dynamic interval
    const drawMatrix = () => {
      // Update time for animation
      time++;

      // Semi-transparent black to create trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const matrixColor = getMatrixColor();
      ctx.fillStyle = matrixColor;
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

      // Schedule next frame with dynamic interval
      matrixIntervalId = setTimeout(drawMatrix, getDynamicInterval());
    };

    // Start the animation
    matrixIntervalId = setTimeout(drawMatrix, getDynamicInterval());

    // Handle text overlay animation
    const showRandomAttribute = () => {
      if (!overlay) return;

      const randomAttribute =
        jesusAttributes[Math.floor(Math.random() * jesusAttributes.length)];
      const matrixColor = getMatrixColor();

      // Create a new div for the text
      const textElement = document.createElement("div");
      textElement.textContent = randomAttribute;
      textElement.style.position = "absolute";
      textElement.style.color = matrixColor;
      textElement.style.fontSize = `${Math.random() * 24 + 10}px`;
      textElement.style.fontWeight = "thin";
      textElement.style.fontFamily = "Oswald, sans-serif";
      textElement.style.textShadow = `0 0 2px ${matrixColor}, 0 0 5px ${matrixColor}`;
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
      clearTimeout(matrixIntervalId);
      clearInterval(textInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme, colorScheme]);

  return (
    <div className="relative mx-auto max-w-4xl h-128 overflow-hidden bg-black rounded-2xl shadow-lg mb-6">
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
