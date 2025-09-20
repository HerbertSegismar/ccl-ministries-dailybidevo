"use client";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FaArrowLeft, FaSave, FaHeart, FaDownload } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useTheme } from "../contexts/ThemeContext";
import { useBibleVersion } from "../contexts/BibleVersionContext";
import { getColorClasses } from "../contexts/ThemeContext";
import type { Devotional, ReflectionPrompt } from "../types";
import RichTextEditor from "../components/RichTextEditor";
import { useGSAP } from "@gsap/react";

const Reflection = () => {
  const router = useRouter();
  const { theme, colorScheme } = useTheme();
  const { bibleVersion } = useBibleVersion();
  const [devotional, setDevotional] = useState<Devotional | null>(null);
  const [reflections, setReflections] = useState<Record<string, string>>({});
  const [verseText, setVerseText] = useState<string>("");
  const [isLoadingVerse, setIsLoadingVerse] = useState(false);
  const [verseError, setVerseError] = useState<string | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const colorClasses = getColorClasses(colorScheme);

  useEffect(() => {
    // Get devotional data from localStorage instead of query params
    const devotionalData = localStorage.getItem("currentDevotional");
    if (devotionalData) {
      try {
        const parsedDevotional = JSON.parse(devotionalData);
        setDevotional(parsedDevotional);

        // Load saved reflections
        const savedReflections = localStorage.getItem(
          `reflections-${parsedDevotional.id}`
        );
        if (savedReflections) {
          setReflections(JSON.parse(savedReflections));
        }

        // Fetch verse text from API
        fetchVerseFromAPI(parsedDevotional.verse.reference);
      } catch (error) {
        console.error("Error parsing devotional data:", error);
        router.push("/");
      }
    } else {
      router.push("/");
    }
  }, [router]);

  // Fetch verse from API
  const fetchVerseFromAPI = async (verseReference: string) => {
    setIsLoadingVerse(true);
    setVerseError(null);

    try {
      // Parse the reference to extract book, chapter, and verse range
      const match = verseReference.match(/(\d?\s?\w+)\s(\d+):(\d+(?:-\d+)?)/);
      if (!match) {
        setVerseError("Invalid verse format");
        return;
      }

      const book = match[1].toLowerCase().replace(/\s+/g, "+");
      const chapter = match[2];
      const verse = match[3];

      const response = await fetch(
        `https://bible-api.com/${book}+${chapter}:${verse}?translation=${bibleVersion}`
      );

      if (response.ok) {
        const data = await response.json();
        const text = data.text || "Verse not available";
        setVerseText(text);

        // Store in localStorage for future use
        if (devotional) {
          localStorage.setItem(`verse-${devotional.id}-${bibleVersion}`, text);
        }
      } else {
        // Fallback to KJV if the selected version fails
        const fallbackResponse = await fetch(
          `https://bible-api.com/${book}+${chapter}:${verse}?translation=kjv`
        );

        if (fallbackResponse.ok) {
          const data = await fallbackResponse.json();
          const text = data.text || "Verse not available";
          setVerseText(text);
          setVerseError(`Using KJV (${bibleVersion} not available)`);
        } else {
          throw new Error("Failed to fetch verse");
        }
      }
    } catch (error) {
      console.error("Error fetching verse:", error);
      setVerseError("Unable to load verse. Please try again.");
    } finally {
      setIsLoadingVerse(false);
    }
  };

  // Page entrance animation
  useGSAP(() => {
    if (!devotional) return;

    gsap.fromTo(pageRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 });

    gsap.fromTo(
      titleRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.2 }
    );

    if (cardsRef.current && cardsRef.current.children.length > 0) {
      const cards = cardsRef.current.children;
      gsap.fromTo(
        cards,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.4 }
      );
    }
  }, [devotional]);

  // Get the verse text - prioritize API text, fallback to static text
  const getVerseText = () => {
    if (verseText) return verseText;

    if (!devotional) return "";

    // Check if we have the API-fetched verse text in localStorage
    const apiVerseText = localStorage.getItem(
      `verse-${devotional.id}-${bibleVersion}`
    );

    // If we have API-fetched text, use it, otherwise fall back to the static text
    return (
      apiVerseText 
    );
  };

  const handleReflectionChange = (promptId: string, value: string) => {
    if (!devotional) return;

    const updatedReflections = { ...reflections, [promptId]: value };
    setReflections(updatedReflections);

    // Save to localStorage
    localStorage.setItem(
      `reflections-${devotional.id}`,
      JSON.stringify(updatedReflections)
    );
  };

  const handleSave = () => {
    // Show confirmation animation
    const saveButton = document.querySelector(".save-button");
    if (saveButton) {
      gsap.fromTo(
        saveButton,
        { scale: 1 },
        { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1 }
      );
    }
  };

  // Function to download reflections as a text file
  const downloadReflections = () => {
    if (!devotional) return;

    // Create the content for the text file
    let content = `Reflections for ${devotional.title}\n`;
    content += `Date: ${devotional.date}\n`;
    content += `Verse: ${getVerseText()}\n`;
    content += `Reference: ${devotional.verse.reference} (${bibleVersion})\n\n`;

    content += "MY REFLECTIONS:\n\n";

    if (devotional.reflection && devotional.reflection.length > 0) {
      devotional.reflection.forEach(
        (prompt: ReflectionPrompt, index: number) => {
          const reflectionText =
            reflections[prompt.id] || "No reflection written yet";

          // Convert HTML to plain text, handling entities and tags
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = reflectionText;

          // Replace non-breaking spaces with regular spaces
          let plainText = tempDiv.textContent || tempDiv.innerText || "";
          plainText = plainText.replace(/\s+/g, " ").trim();

          // Handle empty reflections
          if (!plainText || plainText === "") {
            plainText = "No reflection written yet";
          }

          content += `${index + 1}. ${prompt.question}\n`;
          content += `${plainText}\n\n`;
        }
      );
    } else {
      content += "No reflection prompts available for this devotional.\n";
    }

    // Create a blob and download link
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `reflections-${devotional.title
      .replace(/\s+/g, "-")
      .toLowerCase()}.txt`;
    document.body.appendChild(a);
    a.click();

    // Clean up
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);

    // Show download animation
    const downloadButton = document.querySelector(".download-button");
    if (downloadButton) {
      gsap.fromTo(
        downloadButton,
        { scale: 1 },
        { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1 }
      );
    }
  };

  if (!devotional) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        Loading...
      </div>
    );
  }

  return (
    <div
      ref={pageRef}
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-800 to-gray-900"
          : "bg-gradient-to-b from-blue-50 to-purple-50"
      } p-4 md:p-8`}
    >
      <style>
        {`
          .placeholder-text {
            color: #9ca3af;
            font-style: italic;
          }
          .dark .placeholder-text {
            color: #6b7280;
          }
        `}
      </style>

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => router.back()}
            className={`p-2 rounded-full ${colorClasses.text} hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-300`}
          >
            <FaArrowLeft />
          </button>
          <h1
            ref={titleRef}
            className={`text-2xl font-bold ${colorClasses.text} flex items-center`}
          >
            <FaHeart className="mr-2 text-red-500" /> Reflection
          </h1>
          <div className="flex space-x-2">
            <button
              onClick={downloadReflections}
              className={`download-button p-2 rounded-full ${colorClasses.text} hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-300`}
              aria-label="Download reflections"
              title="Download reflections as text file"
            >
              <FaDownload />
            </button>
            <button
              onClick={handleSave}
              className={`save-button p-2 rounded-full ${colorClasses.text} hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-300`}
              aria-label="Save reflections"
              title="Save reflections"
            >
              <FaSave />
            </button>
          </div>
        </div>

        {/* Verse Card */}
        <div
          className={`backdrop-blur-lg rounded-xl shadow-md p-6 mb-6 border ${
            theme === "dark"
              ? "bg-gray-700/70 border-gray-600/30"
              : "bg-white/90 border-white/30"
          } transition-all duration-300 hover:shadow-lg`}
        >
          <h2
            className={`text-lg font-semibold mb-2 ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            }`}
          >
            {devotional.title}
          </h2>
          <p
            className={`mb-2 ${
              theme === "dark" ? "text-gray-300" : "text-gray-500"
            }`}
          >
            {devotional.date}
          </p>
          <div
            className={`p-4 mb-4 rounded-lg ${
              theme === "dark" ? "bg-gray-600/30" : `${colorClasses.lightBg}`
            }`}
          >
            {isLoadingVerse ? (
              <p className="mb-2 italic">Loading verse...</p>
            ) : verseError ? (
              <>
                <p
                  className={`italic mb-2 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  &ldquo;{getVerseText()}&rdquo;
                </p>
                <p className="text-sm text-yellow-600 dark:text-yellow-400 mb-2">
                  {verseError}
                </p>
              </>
            ) : (
              <p
                className={`italic mb-2 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-700"
                }`}
              >
                &ldquo;{getVerseText()}&rdquo;
              </p>
            )}
            <p className={`font-semibold ${colorClasses.text}`}>
              - {devotional.verse.reference} ({bibleVersion})
            </p>
          </div>
        </div>

        {/* Reflection Prompts */}
        <div ref={cardsRef} className="space-y-6">
          {devotional.reflection?.map((prompt: ReflectionPrompt) => (
            <div
              key={prompt.id}
              className={`backdrop-blur-lg rounded-xl shadow-md p-6 border ${
                theme === "dark"
                  ? "bg-gray-700/70 border-gray-600/30"
                  : "bg-white/90 border-white/30"
              } transition-all duration-300 hover:shadow-lg`}
            >
              <h3
                className={`text-lg mb-4 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-600"
                }`}
              >
                {prompt.question}
              </h3>
              <RichTextEditor
                value={reflections[prompt.id] || ""}
                onChange={(value) => handleReflectionChange(prompt.id, value)}
                placeholder={prompt.placeholder}
              />
            </div>
          ))}

          {(!devotional.reflection || devotional.reflection.length === 0) && (
            <div
              className={`backdrop-blur-lg rounded-xl shadow-md p-6 border text-center ${
                theme === "dark"
                  ? "bg-gray-700/70 border-gray-600/30 text-gray-200"
                  : "bg-white/90 border-white/30 text-gray-500"
              }`}
            >
              <p>No reflection prompts available for this devotional.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reflection;
