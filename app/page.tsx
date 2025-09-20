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
  FaCaretDown,
} from "react-icons/fa";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import { useTheme } from "./contexts/ThemeContext";
import { useBibleVersion } from "./contexts/BibleVersionContext";
import { devotionals } from "./data/devotionals-sep";
import { getColorClasses } from "./contexts/ThemeContext";
import type { Devotional } from "@/app/types";
import ImageSection from "./components/ImageSection";
import Matrix from "./components/Matrix";
import { useDevotionalData } from "./components/DataFetcher";

const Home = () => {
  const router = useRouter();
  const { theme, colorScheme } = useTheme();
  const { bibleVersion, setBibleVersion } = useBibleVersion();
  const [bookmarked, setBookmarked] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isEditingReadingPlan, setIsEditingReadingPlan] = useState(false);
  const [customReadingPlan, setCustomReadingPlan] = useState("");
  const [showVersionDropdown, setShowVersionDropdown] = useState(false);

  const appRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const verseRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const prayerRef = useRef<HTMLDivElement>(null);
  const versionDropdownRef = useRef<HTMLDivElement>(null);
  const versionButtonRef = useRef<HTMLButtonElement>(null);

  const colorClasses = getColorClasses(colorScheme);
  const currentDay = new Date().getDate();
  const currentMonth = new Date().toLocaleString("default", { month: "long" });


  const bibleVersions = [
    { value: "KJV", label: "KJV" },
    { value: "ASV", label: "ASV" },
    { value: "BBE", label: "BBE" },
    { value: "DARBY", label: "DARBY" },
    { value: "WEB", label: "WEB" },
    { value: "WEBBE", label: "WEBBE" },
    { value: "YLT", label: "YLT" },
    { value: "OEB-CW", label: "OEB-CW" },
    { value: "OEB-US", label: "OEB-US" },
  ];

  const getDevotionalForDate = useCallback(
    (day: number) =>
      devotionals.find((d) => parseInt(d.id) === day) || devotionals[0],
    []
  );

  const {
    currentDevotional,
    setCurrentDevotional,
    readingPlanVerses,
    isLoadingVerses,
    verseError,
    dailyVerseText,
    isLoadingDailyVerse,
    loadVerses,
  } = useDevotionalData({
    currentDay,
    getDevotionalForDate,
    bibleVersion,
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        versionDropdownRef.current &&
        !versionDropdownRef.current.contains(event.target as Node) &&
        versionButtonRef.current &&
        !versionButtonRef.current.contains(event.target as Node)
      ) {
        setShowVersionDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);

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
      navigator
        .share({
          title: currentDevotional.title,
          text: dailyVerseText + " " + currentDevotional.verse.reference,
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
      const currentId = parseInt(String(currentDevotional.id));
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
      setCurrentDevotional,
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
    [
      getDevotionalForDate,
      runContentAnimations,
      updateBookmarkStatus,
      setCurrentDevotional,
    ]
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
  };

  useEffect(() => {
    if (currentDevotional) {
      setCustomReadingPlan(currentDevotional.readingPlan);
    }
  }, [currentDevotional]);

  if (!currentDevotional || !isMounted) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        Loading...
      </div>
    );
  }

      const currentId = parseInt(String(currentDevotional.id));

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
      <ImageSection />
      <div className="mx-auto max-w-4xl">
        {/* Devotional Card */}
        <div
          ref={cardRef}
          className={`backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden mb-6 relative border ${
            theme === "dark"
              ? "bg-gray-700/70 border-gray-600/30"
              : "bg-white/90 border-white/30"
          }`}
          style={{ isolation: "isolate" }} // Prevent z-index issues
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
              } relative`}
              style={{ zIndex: 10 }} // Ensure verse section has higher z-index
            >
              <div className="flex items-start mb-2">
                <FaBook className="text-white mt-1 mr-2" />
                <h2 className="text-lg font-semibold">Today&apos;s Verse</h2>
              </div>
              {isLoadingDailyVerse ? (
                <p className="mb-2 italic text-2xl">Loading verse...</p>
              ) : (
                <>
                  <p className="mb-2 italic text-2xl">
                    &ldquo;{dailyVerseText}&rdquo;
                  </p>
                  <div className="flex items-center justify-end">
                    <p className="text-right font-medium mr-2">
                      {currentDevotional.verse.reference}
                    </p>
                    <div className="relative" ref={versionDropdownRef}>
                      <button
                        ref={versionButtonRef}
                        onClick={() =>
                          setShowVersionDropdown(!showVersionDropdown)
                        }
                        className={`flex items-center px-2 py-1 rounded ${
                          theme === "dark"
                            ? "bg-gray-700/80 hover:bg-gray-600/80"
                            : "bg-white/80 hover:bg-gray-100/80"
                        } text-sm font-medium border ${
                          theme === "dark"
                            ? "border-gray-600"
                            : "border-gray-300"
                        }`}
                      >
                        {bibleVersion}
                        <FaCaretDown className="ml-1" />
                      </button>

                      {showVersionDropdown && (
                        <div className="absolute right-0 mt-1 w-48 rounded-md shadow-lg z-50">
                          <div
                            className={`rounded-md shadow-xs ${
                              theme === "dark"
                                ? "bg-gray-800 border border-gray-700"
                                : "bg-white border border-gray-200"
                            }`}
                          >
                            <div className="py-1 max-h-60 overflow-auto">
                              {bibleVersions.map((version) => (
                                <button
                                  key={version.value}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleVersionChange(version.value);
                                  }}
                                  className={`block w-full text-left px-4 py-2 text-sm ${
                                    bibleVersion === version.value
                                      ? theme === "dark"
                                        ? "bg-purple-700 text-white"
                                        : "bg-purple-100 text-purple-800"
                                      : theme === "dark"
                                      ? "text-gray-300 hover:bg-gray-700"
                                      : "text-gray-700 hover:bg-gray-100"
                                  }`}
                                >
                                  {version.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Devotional Content */}
            <div
              ref={contentRef}
              className="mb-6"
              style={{ position: "relative", zIndex: 1 }}
            >
              <h2 className={`text-xl font-bold ${colorClasses.text} mb-3`}>
                {currentDevotional.title}
              </h2>
              <div
                className={`leading-relaxed space-y-4 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {(currentDevotional.content as string)
                  .split("\n\n")
                  .map((p: string, i: number) => (
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
              style={{ position: "relative", zIndex: 1 }}
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
              style={{ position: "relative", zIndex: 1 }}
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
                      }`}
                    >
                      {renderVerses(readingPlanVerses)}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className="absolute top-4 right-4 flex space-x-2"
            style={{ zIndex: 10 }}
          >
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
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div
              className={`rounded-2xl shadow-xl p-6 max-w-md w-full mx-4 transform transition-all duration-300 scale-100 opacity-100 ${
                theme === "dark"
                  ? "bg-gray-800/10 border border-gray-700"
                  : "bg-transparent border border-gray-100"
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <p
                  className={`text-sm font-thin ${
                    theme === "dark" ? "text-white" : "text-gray-100"
                  }`}
                >
                  Select a Date
                </p>
                <button
                  onClick={() => setShowCalendar(false)}
                  className={`p-2 rounded-full ${
                    theme === "dark"
                      ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                      : "hover:bg-gray-100 text-gray-500 hover:text-gray-800"
                  } transition-colors`}
                  aria-label="Close calendar"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>

              {/* Month indicator */}
              <div className="flex items-center justify-center mb-4">
                <span className={`text-xl  font-medium ${colorClasses.text}`}>
                  {currentMonth}&nbsp;{new Date().getFullYear()}
                </span>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 gap-2 mb-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                  <div
                    key={index}
                    className={`text-center text-xs font-medium p-1 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-200"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-2">
                {Array.from(
                  { length: devotionals.length },
                  (_, i) => i + 1
                ).map((day) => (
                  <button
                    key={day}
                    onClick={() => handleSelectDate(day)}
                    className={`aspect-square p-2 rounded-lg flex items-center justify-center transition-all duration-200 ${
                      day === currentId
                        ? `${colorClasses.lightBg} ${colorClasses.text} shadow-lg transform scale-105`
                        : theme === "dark"
                        ? "bg-gray-700 text-white hover:bg-gray-600"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    } ${
                      day === currentDay && day !== currentId
                        ? "ring-2 ring-blue-500"
                        : ""
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              {/* Selected date indicator */}
              <div
                className={`mt-4 text-sm text-center ${
                  theme === "dark" ? "text-gray-400" : "text-gray-200"
                }`}
              >
                {currentId
                  ? `Selected: ${currentMonth} ${currentId}`
                  : "No date selected"}
              </div>
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
            } hover:scale-105 transition-all duration-100` }
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
        <div
          className={`mt-4 text-center text-base md:text-xl ${colorClasses.text}`}
        >
          <Matrix />
        </div>
      </div>
    </div>
  );
};

export default Home;
