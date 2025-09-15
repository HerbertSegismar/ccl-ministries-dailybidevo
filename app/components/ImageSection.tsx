import Image from "next/image";
import React, { useState, useEffect } from "react";

const imageFilesSm = [
  "n1.jpg",
  "n2.jpg",
  "n3.jpg",
  "n4.jpg",
  "n5.jpg",
  "n6.jpg",
  "n7.jpg",
  "n8.jpg",
  "n9.jpg",
  "n10.jpg",
  "n11.jpg",
  "n12.jpg",
  "n13.jpg",
  "n14.jpg",
  "n15.jpg",
  "n16.jpg",
  "n17.jpg",
  "n18.jpg",
  "n19.jpg",
  "n20.jpg",
  "n21.jpg",
  "n22.jpg",
  "n23.jpg",
  "n24.jpg",
  "n25.jpg",
  "n26.jpg",
  "n27.jpg",
  "n28.jpg",
  "n29.jpg",
  "n30.jpg",
  "n31.jpg",
  "n32.jpg",
  "n33.jpg",
];

const imageFilesMd = [
  "nm1.jpg",
  "nm2.jpg",
  "nm3.jpg",
  "nm4.jpg",
  "nm5.jpg",
  "nm6.jpg",
  "nm7.jpg",
  "nm8.jpg",
  "nm9.jpg",
  "nm10.jpg",
  "nm11.jpg",
  "nm12.jpg",
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
  "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. - Philippians 4:6",
  "But those who hope in the Lord will renew their strength. They will soar on wings like eagles. - Isaiah 40:31",
  "The Lord is close to the brokenhearted and saves those who are crushed in spirit. - Psalm 34:18",
  "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16",
  "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here! - 2 Corinthians 5:17",
  "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. - Romans 8:28",
  "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. - Galatians 5:22-23",
  "Your word is a lamp for my feet, a light on my path. - Psalm 119:105",
  "The Lord will fight for you; you need only to be still. - Exodus 14:14",
  "Come to me, all you who are weary and burdened, and I will give you rest. - Matthew 11:28",
  "But seek first his kingdom and his righteousness, and all these things will be given to you as well. - Matthew 6:33",
  "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world. - John 16:33",
  "And now these three remain: faith, hope and love. But the greatest of these is love. - 1 Corinthians 13:13",
  "For where two or three gather in my name, there am I with them. - Matthew 18:20",
  "The Lord is my strength and my shield; my heart trusts in him, and he helps me. - Psalm 28:7",
  "But you are a chosen people, a royal priesthood, a holy nation, God's special possession, that you may declare the praises of him who called you out of darkness into his wonderful light. - 1 Peter 2:9",
  "Rejoice always, pray continually, give thanks in all circumstances; for this is God's will for you in Christ Jesus. - 1 Thessalonians 5:16-18",
  "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand. - Isaiah 41:10",
  "Jesus looked at them and said, 'With man this is impossible, but with God all things are possible.' - Matthew 19:26",
  "The name of the Lord is a fortified tower; the righteous run to it and are safe. - Proverbs 18:10",
  "He gives strength to the weary and increases the power of the weak. - Isaiah 40:29",
  "But the Lord is faithful, and he will strengthen you and protect you from the evil one. - 2 Thessalonians 3:3",
  "Taste and see that the Lord is good; blessed is the one who takes refuge in him. - Psalm 34:8",
  "Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ. - Romans 5:1",
  "And my God will meet all your needs according to the riches of his glory in Christ Jesus. - Philippians 4:19",
  "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline. - 2 Timothy 1:7",
];

const SimpleMeteors = ({ number = 5 }) => {
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
            animationDelay: `${Math.random() * 0.8}s`,
            animationDuration: `${Math.random() * 8 + 3}s`,
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
};

const ImageSection = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [randomText, setRandomText] = useState<string>("");
  const [imageError, setImageError] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Check if we're on mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIsMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    // Select random image based on screen size
    const imageFiles = isMobile ? imageFilesSm : imageFilesMd;
    const imagePath = isMobile ? "/night-images/" : "/night-images-md/";

    const randomImageFile =
      imageFiles[Math.floor(Math.random() * imageFiles.length)];
    const selectedText =
      inspirationalTexts[Math.floor(Math.random() * inspirationalTexts.length)];

    setImageSrc(`${imagePath}${randomImageFile}`);
    setRandomText(selectedText);
  }, [isMobile]);

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
              &ldquo;{randomText.split(" - ")[0]}&rdquo;
            </p>
            <p className="text-md md:text-lg mt-2">
              - {randomText.split(" - ")[1]}
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

        <SimpleMeteors number={5} />

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
