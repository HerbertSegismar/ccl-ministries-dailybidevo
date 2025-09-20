"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import {
  FaCalendar,
  FaBookOpen,
  FaTimes,
  FaExclamationTriangle,
  FaEdit,
  FaCheck,
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import { useBibleVersion } from "../contexts/BibleVersionContext";
import { devotionals } from "../data/devotionals-sep";
import { getColorClasses } from "../contexts/ThemeContext";
import type { Devotional } from "../types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  useReadingPlan,
  useDailyVerse,
  useBibleAPI,
} from "../components/DataFetcher";

gsap.registerPlugin(useGSAP);

const Devotionals = () => {
  const { theme, colorScheme } = useTheme();
  const { bibleVersion } = useBibleVersion();
  const pageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [selectedDevotional, setSelectedDevotional] =
    useState<Devotional | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [isEditingReadingPlan, setIsEditingReadingPlan] = useState(false);
  const [customReadingPlan, setCustomReadingPlan] = useState("");

  const { fetchBibleVerses, fetchVerseFromAPI } = useBibleAPI(bibleVersion);
  const {
    verses: readingPlanVerses,
    isLoading: isLoadingVerses,
    error: verseError,
    loadVerses,
  } = useReadingPlan(fetchBibleVerses);
  const {
    verseText: dailyVerseText,
    isLoading: isLoadingDailyVerse,
    loadDailyVerse: loadDailyVerseHandler,
  } = useDailyVerse(fetchVerseFromAPI, bibleVersion);

  const colorClasses = getColorClasses(colorScheme);

  const loadDailyVerse = useCallback(
    (devotional: Devotional) => {
      loadDailyVerseHandler(devotional);
    },
    [loadDailyVerseHandler]
  );

  // Page & card animations
  useGSAP(() => {
    if (!gsap) return;

    if (pageRef.current) {
      gsap.fromTo(
        pageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 }
      );
    }

    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.2 }
      );
    }

    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      gsap.fromTo(
        cards,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.4 }
      );
    }
  }, []);

  // Modal animation & body scroll lock
  useEffect(() => {
    if (!gsap) return;

    if (selectedDevotional && modalRef.current) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5 }
      );

      // Load verses and daily verse when modal opens
      loadVerses(selectedDevotional.readingPlan);
      loadDailyVerse(selectedDevotional);
      setCustomReadingPlan(selectedDevotional.readingPlan);
      setIsEditingReadingPlan(false);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedDevotional, loadVerses, loadDailyVerse]);

  const openDevotional = (devotional: Devotional) =>
    setSelectedDevotional(devotional);

  const closeDevotional = () => {
    if (modalRef.current && gsap) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        onComplete: () => setSelectedDevotional(null),
      });
    } else {
      setSelectedDevotional(null);
    }
  };

  // Function to render verses with proper formatting
  const renderVerses = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, index) => {
      // Check if this line is a chapter header (e.g., "Chapter 3")
      if (line.startsWith("Chapter ")) {
        return (
          <h4
            key={index}
            className={`font-bold text-lg mt-4 mb-2 ${colorClasses.text}`}
          >
            {line}
          </h4>
        );
      }

      // Check if this line is a verse (e.g., "1. Text content")
      const verseMatch = line.match(/^(\d+)\.\s+(.*)/);
      if (verseMatch) {
        return (
          <p key={index} className="flex items-baseline mb-3">
            <sup className={`text-xs ${colorClasses.text} italic mr-1`}>
              {verseMatch[1]}
            </sup>
            <span>{verseMatch[2]}</span>
          </p>
        );
      }

      // Regular text line
      return (
        <p key={index} className="mb-3">
          {line}
        </p>
      );
    });
  };

  const handleReadingPlanEdit = () => {
    setIsEditingReadingPlan(true);
  };

  const handleReadingPlanSave = () => {
    setIsEditingReadingPlan(false);
    loadVerses(customReadingPlan);
  };

  const handleReadingPlanCancel = () => {
    setIsEditingReadingPlan(false);
    if (selectedDevotional) {
      setCustomReadingPlan(selectedDevotional.readingPlan);
    }
  };

  const handleReadingPlanKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleReadingPlanSave();
    } else if (e.key === "Escape") {
      handleReadingPlanCancel();
    }
  };

  return (
    <div
      ref={pageRef}
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-800 to-gray-900"
          : "bg-gradient-to-b from-blue-50 to-purple-50"
      } p-4 md:p-8`}
    >
      <div className="max-w-4xl mx-auto">
        <h1
          ref={titleRef}
          className={`text-3xl font-bold ${colorClasses.text} mb-8 flex items-center`}
        >
          <FaBookOpen className={`mr-3 ${colorClasses.text}`} />
          Daily Devotionals
        </h1>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {devotionals.map((devotional) => (
            <div
              key={devotional.id}
              className={`backdrop-blur-lg rounded-xl shadow-md p-6 border hover:shadow-lg transition-shadow duration-300 ${
                theme === "dark"
                  ? "bg-gray-700/70 border-gray-600/30"
                  : "bg-white/80 border-white/30"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h2
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {devotional.title}
                </h2>
                <div
                  className={`flex items-center text-sm px-3 py-1 rounded-full ${
                    theme === "dark"
                      ? "bg-gray-500/50"
                      : `${colorClasses.lightBg}`
                  }`}
                >
                  <FaCalendar className={`mr-1 ${colorClasses.text}`} />
                  <span className={colorClasses.text}>{devotional.date}</span>
                </div>
              </div>
              <p
                className={`mb-4 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Verse: {devotional.verse.reference}
              </p>
              <button
                onClick={() => openDevotional(devotional)}
                className={`bg-gradient-to-r ${colorClasses.gradient} text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-300`}
              >
                Read Devotional
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedDevotional && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 bg-opacity-50">
          <div
            ref={modalRef}
            className={`relative max-w-2xl w-full max-h-[90vh] rounded-xl shadow-2xl flex flex-col ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div
              className={`p-6 ${
                theme === "dark" ? "bg-gray-700" : colorClasses.lightBg
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h2
                  className={`text-2xl font-bold ${
                    theme === "dark" ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {selectedDevotional.title}
                </h2>
                <button
                  onClick={closeDevotional}
                  className={`p-2 rounded-full ${colorClasses.text} hover:bg-black/10 dark:hover:bg-white/10`}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="flex items-center text-sm mb-6">
                <FaCalendar className={`mr-2 ${colorClasses.text}`} />
                <span className={colorClasses.text}>
                  {selectedDevotional.date}
                </span>
              </div>
            </div>

            <div ref={modalContentRef} className="p-6 overflow-y-auto flex-1">
              <div
                className={`p-4 mb-6 rounded-lg ${
                  theme === "dark" ? "bg-gray-600" : `${colorClasses.lightBg}`
                }`}
              >
                {isLoadingDailyVerse ? (
                  <p className="mb-2 italic">Loading verse...</p>
                ) : (
                  <>
                    <p
                      className={`italic mb-2 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      &ldquo;{dailyVerseText}&rdquo;
                    </p>
                    <p className={`font-semibold ${colorClasses.text}`}>
                      - {selectedDevotional.verse.reference} ({bibleVersion})
                    </p>
                  </>
                )}
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <div
                  className={`whitespace-pre-line mb-6 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {selectedDevotional.content}
                </div>

                <div
                  className={`p-4 rounded-lg ${
                    theme === "dark"
                      ? "bg-gray-600/20"
                      : `${colorClasses.lightBg}`
                  }`}
                >
                  <h3 className={`font-semibold mb-2 ${colorClasses.text}`}>
                    Prayer
                  </h3>
                  <p
                    className={`italic ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {selectedDevotional.prayer}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <p
                      className={`${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <span className="font-semibold">Reading Plan:</span>
                    </p>
                    {!isEditingReadingPlan ? (
                      <button
                        onClick={handleReadingPlanEdit}
                        className={`p-1 rounded ${
                          theme === "dark"
                            ? "hover:bg-gray-600"
                            : "hover:bg-gray-200"
                        }`}
                        aria-label="Edit reading plan"
                      >
                        <FaEdit className={`text-xl ${colorClasses.text}`} />
                      </button>
                    ) : (
                      <div className="flex space-x-1 gap-4">
                        <button
                          onClick={handleReadingPlanSave}
                          className={`p-1 rounded ${
                            theme === "dark"
                              ? "hover:bg-gray-600"
                              : "hover:bg-gray-200"
                          }`}
                          aria-label="Save reading plan"
                        >
                          <FaCheck className="text-sm text-green-500" />
                        </button>
                        <button
                          onClick={handleReadingPlanCancel}
                          className={`p-1 rounded ${
                            theme === "dark"
                              ? "hover:bg-gray-600"
                              : "hover:bg-gray-200"
                          }`}
                          aria-label="Cancel editing"
                        >
                          <FaTimes className="text-sm text-red-500" />
                        </button>
                      </div>
                    )}
                  </div>

                  {isEditingReadingPlan ? (
                    <div className="mb-2">
                      <input
                        type="text"
                        id="reading-plan-input"
                        name="readingPlan"
                        value={customReadingPlan}
                        onChange={(e) => setCustomReadingPlan(e.target.value)}
                        onKeyDown={handleReadingPlanKeyDown}
                        className={`w-full p-2 rounded ${
                          theme === "dark"
                            ? "bg-gray-700 text-white border-gray-600"
                            : "bg-white text-gray-800 border-gray-300"
                        } border`}
                        placeholder="e.g., John 1:1-5"
                        autoFocus
                      />
                      <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                        Format: Book Chapter:StartVerse-EndVerse (e.g., John
                        1:1-5)
                      </p>
                    </div>
                  ) : (
                    <p className={`font-medium ${colorClasses.text} mb-2`}>
                      {customReadingPlan}
                    </p>
                  )}

                  <div>
                    {isLoadingVerses ? (
                      <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                        <p className="text-gray-700 dark:text-gray-300">
                          Loading verses...
                        </p>
                      </div>
                    ) : verseError ? (
                      <div className="mt-2 p-2 bg-red-100 dark:bg-red-900/30 rounded flex items-start">
                        <FaExclamationTriangle className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                        <p className="dark:text-red-500">{verseError}</p>
                      </div>
                    ) : readingPlanVerses ? (
                      <div
                        className={`mt-2 p-4 ${
                          theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                        } rounded-lg`}
                      >
                        <div
                          className={`${
                            theme === "dark" ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          {renderVerses(readingPlanVerses)}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Devotionals;
