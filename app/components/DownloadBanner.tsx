"use client";

import { useTheme } from "../contexts/ThemeContext";

const DownloadBanner = () => {
  const { theme } = useTheme();

  const mainBg =
    theme === "dark"
      ? "bg-gray-800"
      : "bg-gradient-to-b from-blue-50 to-purple-50";

  const textClass = theme === "dark" ? "text-white" : "text-gray-700";

  return (
    <div className={`${mainBg} ${textClass} text-center p-12 mt-20 lg:mt-15`}>
      <a
        href="/fountofhopebible.apk"
        download="fountofhopebible.apk"
        className="font-semibold underline hover:no-underline text-lg md:text-xl"
      >
        📱 Download Fount Of Hope Bible App for Android
      </a>
    </div>
  );
};

export default DownloadBanner;
