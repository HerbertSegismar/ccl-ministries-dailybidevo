import Image from "next/image";
import React, { useState, useEffect } from "react";

const imageFiles = [
  "a.jpg",
  "b.jpg",
  "c.jpg",
  "d.jpg",
  "e.jpg",
  "f.jpg",
  "g.jpg",
  "abstract.jpg",
  "Bible1.jpg",
  "Bible2.jpg",
  "Bible3.jpg",
  "Daily1.jpg",
  "Daily2.jpg",
  "Daily3.jpg",
  "Daily4.jpg",
  "Daily5.jpg",
  "Daily6.jpg",
  "Daily7.jpg",
  "Daily8.jpg",
  "Daily9.jpg",
  "Daily10.jpg",
];

const inspirationalTexts = [
  "Be still and know that I am God. - Psalm 46:10",
  "I can do all things through Christ who strengthens me. - Philippians 4:13",
  "The Lord is my shepherd; I shall not want. - Psalm 23:1",
  "For I know the plans I have for you, declares the Lord. - Jeremiah 29:11",
  "Trust in the Lord with all your heart. - Proverbs 3:5",
  "The joy of the Lord is your strength. - Nehemiah 8:10",
  "Cast all your anxiety on him because he cares for you. - 1 Peter 5:7",
  "Be strong and courageous. Do not be afraid. - Joshua 1:9",
  "In all things God works for the good of those who love him. - Romans 8:28",
  "The peace of God, which transcends all understanding, will guard your hearts and your minds. - Philippians 4:7",
  "Let your light shine before others. - Matthew 5:16",
  "With God all things are possible. - Matthew 19:26",
  "God is our refuge and strength, an ever-present help in trouble. - Psalm 46:1",
  "The Lord is my light and my salvation—whom shall I fear? - Psalm 27:1",
];

const SimpleMeteors = ({ number = 10 }) => {
  return (
    <>
      {[...Array(number)].map((_, i) => (
        <span
          key={i}
          className="absolute animate-meteor-effect rounded-full bg-white shadow-[0_0_0_1px_#ffffff10]"
          style={{
            top: `-10px`, // Start above the container
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 0.8}s`,
            animationDuration: `${Math.random() * 8 + 3}s`,
            width: `${Math.random() * 3 + 0.5}px`,
            height: `${Math.random() * 3 + 0.5}px`,
            opacity: Math.random() * 0.6 + 0.2,
            transform: `rotate(${Math.random() * 30 + 210}deg)`, // Adjust rotation for downward motion
          }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 w-[50px] h-[1px] bg-gradient-to-r from-white to-transparent" />
        </span>
      ))}
    </>
  );
};


const ImageSection = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [randomText, setRandomText] = useState<string>("");
  const [imageError, setImageError] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Select random image and text
    const randomImageFile =
      imageFiles[Math.floor(Math.random() * imageFiles.length)];
    const selectedText =
      inspirationalTexts[Math.floor(Math.random() * inspirationalTexts.length)];

    setImageSrc(`/images/${randomImageFile}`);
    setRandomText(selectedText);
  }, []);

  const handleImageError = () => {
    console.error(`Failed to load image: ${imageSrc}`);
    setImageError(true);
    const fallbackImage = "abstract.png";
    setImageSrc(`/images/${fallbackImage}`);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (imageError) {
    return (
      <div className="flex flex-col items-center justify-center mx-auto max-w-4xl mb-6">
        <div className="w-full h-64 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl shadow-lg flex items-center justify-center">
          <div className="text-center text-white p-4">
            <p className="text-xl md:text-2xl font-semibold mb-2">
              Daily Inspiration
            </p>
            <p className="text-lg md:text-xl italic">
              &ldquo;{randomText}&rdquo;
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-4xl mb-6 relative">
      {/* Image with overlay text */}
      <div className="relative w-full rounded-2xl shadow-lg overflow-hidden">
        {!imageLoaded && imageSrc && (
          <div className="w-full h-64 bg-gray-200 animate-pulse rounded-2xl flex items-center justify-center">
            <div className="text-gray-500">Loading image...</div>
          </div>
        )}
        {imageSrc ? (
          <Image
            src={imageSrc}
            width={800}
            height={400}
            alt="Devotional image"
            className={`object-cover w-full h-auto ${
              imageLoaded ? "block" : "hidden"
            }`}
            priority
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 animate-pulse rounded-2xl flex items-center justify-center">
            <div className="text-gray-500">Loading image...</div>
          </div>
        )}

        {/* Use the simplified meteors */}
        <SimpleMeteors number={10} />

        {/* Text overlay positioned at the bottom */}
        {randomText && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 md:p-6">
            <div className="text-center text-white max-w-2xl mx-auto">
              <p className="overlay-title">Daily Inspiration</p>
              <p className="overlay-text text-shadow-lg">
                &ldquo;{randomText.split(" - ")[0]}&rdquo;
              </p>
              <p className="overlay-reference text-shadow">
                - {randomText.split(" - ")[1]}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSection;
