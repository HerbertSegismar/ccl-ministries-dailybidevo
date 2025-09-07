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

const Reflection = () => {
  const router = useRouter();
  const { theme, colorScheme } = useTheme();
  const { bibleVersion } = useBibleVersion();
  const [devotional, setDevotional] = useState<Devotional | null>(null);
  const [reflections, setReflections] = useState<Record<string, string>>({});
  const pageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const colorClasses = getColorClasses(colorScheme);

  // Replace your current useEffect with:
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
      } catch (error) {
        console.error("Error parsing devotional data:", error);
        router.push("/");
      }
    } else {
      router.push("/");
    }

    // ... rest of your animation code
  }, [router]);

  // Get the verse text for the selected Bible version
  const getVerseText = (verse: Devotional["verse"]) => {
    return verse.text[bibleVersion] || verse.text[verse.defaultVersion];
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
    content += `Verse: ${getVerseText(devotional.verse)}\n`;
    content += `Reference: ${devotional.verse.reference} (${bibleVersion})\n\n`;

    content += "MY REFLECTIONS:\n\n";

    if (devotional.reflection && devotional.reflection.length > 0) {
      devotional.reflection.forEach(
        (prompt: ReflectionPrompt, index: number) => {
          const reflectionText =
            reflections[prompt.id] || "No reflection written yet";
          // Strip HTML tags from the reflection text
          const plainText = reflectionText.replace(/<[^>]*>/g, "");

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
            className={`p-2 rounded-full ${colorClasses.text} hover:bg-black/10 dark:hover:bg-white/10`}
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
              className={`download-button p-2 rounded-full ${colorClasses.text} hover:bg-black/10 dark:hover:bg-white/10`}
              aria-label="Download reflections"
              title="Download reflections as text file"
            >
              <FaDownload />
            </button>
            <button
              onClick={handleSave}
              className={`save-button p-2 rounded-full ${colorClasses.text} hover:bg-black/10 dark:hover:bg-white/10`}
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
          }`}
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
            <p
              className={`italic mb-2 ${
                theme === "dark" ? "text-gray-400" : "text-gray-700"
              }`}
            >
              &ldquo;{getVerseText(devotional.verse)}&rdquo;
            </p>
            <p className={`font-semibold ${colorClasses.text}`}>
              - {devotional.verse.reference} ({bibleVersion})
            </p>
          </div>
        </div>

        {/* Reflection Prompts */}
        <div ref={contentRef} className="space-y-6">
          {devotional.reflection?.map((prompt: ReflectionPrompt) => (
            <div
              key={prompt.id}
              className={`backdrop-blur-lg rounded-xl shadow-md p-6 border ${
                theme === "dark"
                  ? "bg-gray-700/70 border-gray-600/30"
                  : "bg-white/90 border-white/30"
              }`}
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
