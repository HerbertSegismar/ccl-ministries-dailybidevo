"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  FaBook,
  FaPrayingHands,
  FaHeart,
  FaShare,
  FaBookmark,
  FaCalendar,
  FaChevronLeft,
  FaChevronRight,
  FaExclamationTriangle,
  FaEdit,
  FaCheck,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import { useTheme } from "./contexts/ThemeContext";
import { useBibleVersion } from "./contexts/BibleVersionContext";
import { devotionals } from "./data/devotionals-sep";
import { getColorClasses } from "./contexts/ThemeContext";
import type { Devotional } from "@/app/types";

interface BibleVerse {
  verse: number;
  text: string;
}

const Home = () => {
  const router = useRouter();
  const { theme, colorScheme } = useTheme();
  const { bibleVersion, setBibleVersion } = useBibleVersion();
  const [currentDevotional, setCurrentDevotional] = useState<Devotional | null>(
    null
  );
  const [bookmarked, setBookmarked] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [readingPlanVerses, setReadingPlanVerses] = useState<string>("");
  const [isLoadingVerses, setIsLoadingVerses] = useState(false);
  const [verseError, setVerseError] = useState<string | null>(null);
  const [isEditingReadingPlan, setIsEditingReadingPlan] = useState(false);
  const [customReadingPlan, setCustomReadingPlan] = useState("");
  const [dailyVerseText, setDailyVerseText] = useState<string>("");
  const [isLoadingDailyVerse, setIsLoadingDailyVerse] = useState(false);
  const [showVersionDropdown, setShowVersionDropdown] = useState(false);

  const appRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const verseRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const prayerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const colorClasses = getColorClasses(colorScheme);
  const currentDay = new Date().getDate();
  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  // Available Bible versions
  const bibleVersions = [
    { value: "kjv", label: "KJV" },
    { value: "niv", label: "NIV" },
    { value: "esv", label: "ESV" },
    { value: "nasb", label: "NASB" },
    { value: "nlt", label: "NLT" },
    { value: "nkjv", label: "NKJV" },
  ];

  const getDevotionalForDate = useCallback(
    (day: number) =>
      devotionals.find((d) => parseInt(d.id) === day) || devotionals[0],
    []
  );

  // Function to parse reading plan (e.g., "John 1:1-5")
  const parseReadingPlan = (plan: string) => {
    // Match patterns like "John 1:1-5", "1 John 1:1-5", "John 1:1", or "John 1"
    const match = plan.match(/(\d?\s?\w+)\s(\d+)(?::(\d+)(?:-(\d+))?)?/);
    if (match) {
      return {
        book: match[1].toLowerCase().replace(/\s+/g, ""), // Convert to lowercase and remove spaces
        chapter: match[2],
        startVerse: match[3] ? parseInt(match[3]) : 1,
        endVerse: match[4]
          ? parseInt(match[4])
          : match[3]
          ? parseInt(match[3])
          : 1,
      };
    }
    return null;
  };

  interface ParsedPlan {
    book: string;
    chapter: string;
    startVerse: number;
    endVerse: number;
  }

  const fetchBibleVerses = useCallback(
    async (parsedPlan: ParsedPlan, useFallback = false) => {
      const { book, chapter, startVerse, endVerse } = parsedPlan;

      // Handle single verse or range of verses
      const verseRange =
        startVerse === endVerse ? startVerse : `${startVerse}-${endVerse}`;

      // Determine which version to use
      const versionToUse = useFallback ? "kjv" : bibleVersion;

      // Try multiple API endpoints with fallbacks
      const apiEndpoints = [
        // Primary API - this one returns structured verse data
        `https://bible-api.com/${book}+${chapter}:${verseRange}?translation=${versionToUse}`,
      ];

      for (const url of apiEndpoints) {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();

            // Handle different API response formats
            if (data.verses) {
              // Format verses with numbers and remove unnecessary spaces
              return {
                text: data.verses
                  .map(
                    (v: BibleVerse) =>
                      `${v.verse}. ${v.text.trim().replace(/\s+/g, " ")}`
                  )
                  .join("\n\n"),
                version: versionToUse,
              };
            } else if (data.text) {
              // If we only get text, try to parse it and remove unnecessary spaces
              return {
                text: data.text.replace(/\s+/g, " ").trim(),
                version: versionToUse,
              };
            }
          }
        } catch {
          console.log(`Failed to fetch from ${url}, trying next endpoint...`);
        }
      }

      throw new Error("All API endpoints failed");
    },
    [bibleVersion]
  );

  const fetchDailyVerse = useCallback(
    async (verseReference: string, version: string) => {
      // Parse the verse reference (e.g., "John 1:1")
      const match = verseReference.match(/(\d?\s?\w+)\s(\d+):(\d+)/);
      if (!match) return null;

      const book = match[1].toLowerCase().replace(/\s+/g, "");
      const chapter = match[2];
      const verse = match[3];

      try {
        // Try with the specified version
        const response = await fetch(
          `https://bible-api.com/${book}+${chapter}:${verse}?translation=${version}`
        );
        if (response.ok) {
          const data = await response.json();
          return data.text?.replace(/\s+/g, " ").trim() || "";
        }
      } catch {
        console.log(`Failed to fetch daily verse with ${version}`);
      }

      return null;
    },
    []
  );

  const loadVerses = useCallback(
    async (plan: string) => {
      const parsedPlan = parseReadingPlan(plan);
      if (!parsedPlan) {
        setReadingPlanVerses("Unable to parse reading plan.");
        return;
      }

      setIsLoadingVerses(true);
      setVerseError(null);

      try {
        // First try with the selected version
        const result = await fetchBibleVerses(parsedPlan);
        setReadingPlanVerses(result.text);
      } catch (error) {
        console.error("Error fetching verses:", error);

        // If the selected version failed, try with KJV as fallback
        try {
          const fallbackResult = await fetchBibleVerses(parsedPlan, true);
          setReadingPlanVerses(fallbackResult.text);
          setVerseError(`Using KJV (${bibleVersion} not available)`);
        } catch (fallbackError) {
          console.error(
            "Error fetching verses with KJV fallback:",
            fallbackError
          );
          setVerseError(
            "Unable to load verses. Check if the book, chapter or verse is valid."
          );
          setReadingPlanVerses(""); // Clear any previous verses
        }
      } finally {
        setIsLoadingVerses(false);
      }
    },
    [fetchBibleVerses, bibleVersion]
  );

  const loadDailyVerse = useCallback(
    async (version?: string) => {
      if (!currentDevotional) return;

      const versionToUse = version || bibleVersion;

      // Check if the verse is available in the selected version
      const verseText = currentDevotional.verse.text[versionToUse];
      if (verseText) {
        setDailyVerseText(verseText);
        return;
      }

      // If not available, fetch it from the API
      setIsLoadingDailyVerse(true);
      try {
        const fetchedVerse = await fetchDailyVerse(
          currentDevotional.verse.reference,
          versionToUse
        );
        if (fetchedVerse) {
          setDailyVerseText(fetchedVerse);
        } else {
          // If API fails, fall back to KJV version from the data
          setDailyVerseText(
            currentDevotional.verse.text.kjv || "Verse not available"
          );
        }
      } catch (error) {
        console.error("Error fetching daily verse:", error);
        setDailyVerseText(
          currentDevotional.verse.text.kjv || "Verse not available"
        );
      } finally {
        setIsLoadingDailyVerse(false);
      }
    },
    [currentDevotional, bibleVersion, fetchDailyVerse]
  );

  useEffect(() => {
    if (!currentDevotional) return;

    // Set the custom reading plan to the current devotional's reading plan
    setCustomReadingPlan(currentDevotional.readingPlan);

    // Load verses for the current devotional
    loadVerses(currentDevotional.readingPlan);

    // Load the daily verse
    loadDailyVerse();
  }, [currentDevotional, bibleVersion, loadVerses, loadDailyVerse]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowVersionDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const runContentAnimations = useCallback(() => {
    const tl = gsap.timeline();
    if (verseRef.current) {
      tl.fromTo(
        verseRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      );
    }
    if (contentRef.current) {
      tl.fromTo(
        contentRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      );
    }
    if (prayerRef.current) {
      tl.fromTo(
        prayerRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      );
    }
  }, []);

  // Set initial devotional and register service worker
  useEffect(() => {
    setIsMounted(true);
    const todayDevotional = getDevotionalForDate(currentDay);
    setCurrentDevotional(todayDevotional);

    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  }, [currentDay, getDevotionalForDate]);

  // Check bookmarks and run animations
  useEffect(() => {
    if (!currentDevotional || !isMounted) return;

    // Check bookmarks
    if (typeof window !== "undefined") {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
      setBookmarked(
        bookmarks.some((b: Devotional) => b.id === currentDevotional.id)
      );
    }

    // Run animations
    const ctx = gsap.context(() => {
      if (appRef.current) {
        gsap.fromTo(
          appRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1 }
        );
      }

      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.3 }
        );
      }

      runContentAnimations();
    });

    return () => ctx.revert();
  }, [currentDevotional, isMounted, runContentAnimations]);

  // ------------------- Utility Functions -------------------

  const updateBookmarkStatus = useCallback((devotional: Devotional) => {
    if (typeof window === "undefined") return;

    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    setBookmarked(bookmarks.some((b: Devotional) => b.id === devotional.id));
  }, []);

  const handleBookmark = useCallback(() => {
    if (!currentDevotional || typeof window === "undefined") return;

    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    const updatedBookmarks = bookmarked
      ? bookmarks.filter((b: Devotional) => b.id !== currentDevotional.id)
      : [...bookmarks, currentDevotional];

    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    setBookmarked(!bookmarked);

    const bookmarkIcon = cardRef.current?.querySelector(".bookmark-icon");
    if (bookmarkIcon) {
      gsap.fromTo(
        bookmarkIcon,
        { scale: 1 },
        { scale: 1.3, duration: 0.2, yoyo: true, repeat: 1 }
      );
    }
  }, [bookmarked, currentDevotional]);

  const handleShare = useCallback(() => {
    const shareIcon = cardRef.current?.querySelector(".share-icon");
    if (shareIcon) {
      gsap.fromTo(shareIcon, { rotation: 0 }, { rotation: 360, duration: 0.5 });
    }

    if (typeof window !== "undefined" && navigator.share && currentDevotional) {
      const verseText = dailyVerseText || currentDevotional.verse.text.kjv;
      const verseref = currentDevotional.verse.reference;

      navigator
        .share({
          title: currentDevotional.title,
          text: verseText + " " + verseref,
          url: window.location.href,
        })
        .catch(() => alert("Devotional shared!"));
    } else {
      alert("Devotional shared!");
    }
  }, [dailyVerseText, currentDevotional]);

  const handleDevotionalNavigation = useCallback(
    (direction: "prev" | "next") => {
      if (!currentDevotional) return;
      const currentId = parseInt(currentDevotional.id);
      const targetId =
        direction === "prev"
          ? currentId > 1
            ? currentId - 1
            : devotionals.length
          : currentId < devotionals.length
          ? currentId + 1
          : 1;

      const targetDevotional = getDevotionalForDate(targetId);
      setCurrentDevotional(targetDevotional);
      updateBookmarkStatus(targetDevotional);
      runContentAnimations();
    },
    [
      currentDevotional,
      getDevotionalForDate,
      runContentAnimations,
      updateBookmarkStatus,
    ]
  );

  const handleSelectDate = useCallback(
    (day: number) => {
      const selectedDevotional = getDevotionalForDate(day);
      setCurrentDevotional(selectedDevotional);
      setShowCalendar(false);
      updateBookmarkStatus(selectedDevotional);
      runContentAnimations();
    },
    [getDevotionalForDate, runContentAnimations, updateBookmarkStatus]
  );

  const handleReflection = useCallback((): void => {
    if (currentDevotional && typeof window !== "undefined") {
      localStorage.setItem(
        "currentDevotional",
        JSON.stringify(currentDevotional)
      );
      router.push("/reflection");
    }
  }, [currentDevotional, router]);

  const handleReadingPlanEdit = () => {
    setIsEditingReadingPlan(true);
  };

  const handleReadingPlanSave = () => {
    setIsEditingReadingPlan(false);
    loadVerses(customReadingPlan);
  };

  const handleReadingPlanCancel = () => {
    setIsEditingReadingPlan(false);
    if (currentDevotional) {
      setCustomReadingPlan(currentDevotional.readingPlan);
    }
  };

  const handleReadingPlanKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleReadingPlanSave();
    } else if (e.key === "Escape") {
      handleReadingPlanCancel();
    }
  };

  const handleVersionChange = (version: string) => {
    setBibleVersion(version);
    setShowVersionDropdown(false);
    loadDailyVerse(version);
  };

  if (!currentDevotional || !isMounted) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        Loading...
      </div>
    );
  }

  const currentId = parseInt(currentDevotional.id);
  const currentVersionLabel =
    bibleVersions.find((v) => v.value === bibleVersion)?.label ||
    bibleVersion.toUpperCase();

  // ------------------- Button Styles -------------------
  const actionButtonClass =
    "p-2 backdrop-blur-sm rounded-full shadow-md border";
  const navButtonClass =
    "px-4 py-2 backdrop-blur-sm rounded-full shadow-md font-medium flex items-center border";

  return (
    <div
      ref={appRef}
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-800 to-gray-900"
          : "bg-gradient-to-b from-blue-50 to-purple-50"
      } p-4 md:p-8`}
    >
      <div className="mx-auto max-w-4xl">
        {/* Devotional Card */}
        <div
          ref={cardRef}
          className={`backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden mb-6 relative border ${
            theme === "dark"
              ? "bg-gray-700/70 border-gray-600/30"
              : "bg-white/90 border-white/30"
          }`}
        >
          <div
            className={`bg-gradient-to-r ${colorClasses.gradient} text-white py-2 px-4 text-sm font-semibold`}
          >
            {currentDevotional.date}
          </div>

          <div className="p-6">
            {/* Verse */}
            <div
              ref={verseRef}
              className={`bg-gradient-to-b ${
                colorClasses.gradient
              }/95 mb-6 p-4 rounded-lg ${
                theme === "dark" ? "text-blue-100" : "text-blue-700"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-start">
                  <FaBook className="text-white mt-1 mr-2" />
                  <h2 className="text-lg font-semibold">Today&apos;s Verse</h2>
                </div>

                {/* Version Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowVersionDropdown(!showVersionDropdown)}
                    className={`flex items-center space-x-1 px-2 py-1 rounded ${
                      theme === "dark"
                        ? "bg-gray-600/80 hover:bg-gray-500/80"
                        : "bg-white/80 hover:bg-gray-100/80"
                    } transition-colors`}
                  >
                    <span className="text-sm font-medium">
                      {currentVersionLabel}
                    </span>
                    <FaChevronDown className="text-xs" />
                  </button>

                  {showVersionDropdown && (
                    <div
                      className={`absolute right-0 mt-1 py-1 rounded shadow-lg z-10 ${
                        theme === "dark"
                          ? "bg-gray-700 border border-gray-600"
                          : "bg-white border border-gray-200"
                      }`}
                    >
                      {bibleVersions.map((version) => (
                        <button
                          key={version.value}
                          onClick={() => handleVersionChange(version.value)}
                          className={`block w-full text-left px-4 py-2 text-sm ${
                            bibleVersion === version.value
                              ? colorClasses.text + " font-medium"
                              : theme === "dark"
                              ? "text-gray-300 hover:bg-gray-600"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {version.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {isLoadingDailyVerse ? (
                <p className="mb-2 italic text-2xl">Loading verse...</p>
              ) : (
                <>
                  <p className="mb-2 italic text-2xl">
                    &ldquo;{dailyVerseText}&rdquo;
                  </p>
                  <p className="text-right font-medium">
                    {currentDevotional.verse.reference} ({currentVersionLabel})
                  </p>
                </>
              )}
            </div>

            {/* Devotional Content */}
            <div ref={contentRef} className="mb-6">
              <h2 className={`text-xl font-bold ${colorClasses.text} mb-3`}>
                {currentDevotional.title}
              </h2>
              <div
                className={`leading-relaxed space-y-4 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {currentDevotional.content.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Prayer */}
            <div
              ref={prayerRef}
              className={`backdrop-blur-sm rounded-lg p-4 mb-6 border ${
                theme === "dark"
                  ? "bg-gray-600/70 border-gray-500/30"
                  : `${colorClasses.lightBg}/70 ${colorClasses.lightBorder}/30`
              }`}
            >
              <div className="flex items-start mb-2">
                <FaPrayingHands className={`${colorClasses.text} mt-1 mr-2`} />
                <h3
                  className={`text-lg font-semibold ${
                    theme === "dark" ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  Prayer
                </h3>
              </div>
              <p
                className={`italic ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                &ldquo;{currentDevotional.prayer}&rdquo;
              </p>
            </div>

            {/* Reading Plan */}
            <div
              className={`text-base text-gray-400 border-t border-gray-200/50 dark:border-gray-600/50 pt-4`}
            >
              <div className="flex items-center justify-between mb-2">
                <p>Today&apos;s Reading:</p>
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
                    <FaEdit className="text-sm" />
                  </button>
                ) : (
                  <div className="flex space-x-1">
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
                    Format: Book Chapter:StartVerse-EndVerse (e.g., John 1:1-5)
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
                      } space-y-3`}
                    >
                      {readingPlanVerses.split("\n\n").map((verse, index) => {
                        // Check if the verse already has a number format (from the API)
                        const verseMatch = verse.match(/^(\d+)\.\s+(.*)/);

                        if (verseMatch) {
                          // If verse already has a number format like "1. Text"
                          return (
                            <p key={index} className="flex items-baseline">
                              <sup
                                className={`text-xs ${colorClasses.text} italic mr-1`}
                              >
                                {verseMatch[1]}
                              </sup>
                              <span>{verseMatch[2]}</span>
                            </p>
                          );
                        } else {
                          // If verse doesn't have a number, try to extract it
                          const alternativeMatch = verse.match(/^(\d+)\s+(.*)/);
                          if (alternativeMatch) {
                            return (
                              <p key={index} className="flex items-baseline">
                                <sup className="text-xs text-gray-500 dark:text-gray-400 italic mr-1">
                                  {alternativeMatch[1]}
                                </sup>
                                <span>{alternativeMatch[2]}</span>
                              </p>
                            );
                          } else {
                            // If no verse number found, just display the text
                            return <p key={index}>{verse}</p>;
                          }
                        }
                      })}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className={`${actionButtonClass} ${
                theme === "dark"
                  ? "bg-gray-600/80 border-gray-500/30"
                  : "bg-white/80 border-white/30"
              }`}
              aria-label="View calendar"
            >
              <FaCalendar className={colorClasses.text} />
            </button>
            <button
              onClick={handleBookmark}
              className={`${actionButtonClass} ${
                theme === "dark"
                  ? "bg-gray-600/80 border-gray-500/30"
                  : "bg-white/80 border-white/30"
              }`}
              aria-label="Bookmark devotional"
            >
              <FaBookmark
                className={`bookmark-icon ${
                  bookmarked
                    ? "text-red-500 fill-current"
                    : "text-gray-400 dark:text-gray-500"
                }`}
              />
            </button>
            <button
              onClick={handleShare}
              className={`${actionButtonClass} ${
                theme === "dark"
                  ? "bg-gray-600/80 border-gray-500/30"
                  : "bg-white/80 border-white/30"
              }`}
              aria-label="Share devotional"
            >
              <FaShare className={`share-icon ${colorClasses.text}`} />
            </button>
          </div>
        </div>

        {/* Calendar Modal */}
        {showCalendar && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
              className={`rounded-2xl shadow-lg p-6 max-w-md w-full mx-4 ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3
                className={`text-base font-semibold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                <p className="text-sm">
                  Select a Date for the month of &nbsp;
                  <span
                    className={`${colorClasses.text} text-lg font-semibold`}
                  >
                    {currentMonth}
                  </span>
                </p>
              </h3>
              <div className="grid grid-cols-7 gap-2">
                {Array.from(
                  { length: devotionals.length },
                  (_, i) => i + 1
                ).map((day) => (
                  <button
                    key={day}
                    onClick={() => handleSelectDate(day)}
                    className={`p-2 rounded-full ${
                      day === currentId
                        ? `text-gray-400`
                        : theme === "dark"
                        ? "bg-gray-700 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowCalendar(false)}
                className={`mt-4 w-full py-2 rounded-lg ${
                  theme === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={() => handleDevotionalNavigation("prev")}
            className={`${navButtonClass} ${
              theme === "dark"
                ? "bg-gray-700/80 border-gray-600/30 text-gray-200"
                : "bg-white/80 border-white/30 text-gray-700"
            }`}
          >
            <FaChevronLeft className="mr-2" /> Previous
          </button>
          <button
            onClick={handleReflection}
            className={`${navButtonClass} ${
              theme === "dark"
                ? "bg-gray-700/80 border-gray-600/30 text-gray-200"
                : "bg-white/80 border-white/30 text-gray-700"
            }`}
          >
            <FaHeart className="mr-2 text-red-500" /> Reflection
          </button>
          <button
            onClick={() => handleDevotionalNavigation("next")}
            className={`${navButtonClass} ${
              theme === "dark"
                ? "bg-gray-700/80 border-gray-600/30 text-gray-200"
                : "bg-white/80 border-white/30 text-gray-700"
            }`}
          >
            Next <FaChevronRight className="ml-2" />
          </button>
        </div>

        {/* Progress */}
        <div
          className={`mt-6 backdrop-blur-sm rounded-full shadow-inner p-1 border ${
            theme === "dark"
              ? "bg-gray-700/80 border-gray-600/30"
              : "bg-white/80 border-white/30"
          }`}
        >
          <div
            className={`bg-gradient-to-r ${colorClasses.gradient} h-2 rounded-full`}
            style={{ width: `${(currentId / devotionals.length) * 100}%` }}
          ></div>
        </div>
        <p className="text-center text-xs text-gray-600 dark:text-gray-400 mt-2">
          Day {currentId} of {devotionals.length}
        </p>
      </div>
    </div>
  );
};

export default Home;
