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
} from "react-icons/fa";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import { useTheme } from "./contexts/ThemeContext";
import { useBibleVersion } from "./contexts/BibleVersionContext";
import { devotionals } from "./data/devotionals-sep";
import { getColorClasses } from "./contexts/ThemeContext";
import type { Devotional } from "@/app/types";

const Home = () => {
  const router = useRouter();
  const { theme, colorScheme } = useTheme();
  const { bibleVersion } = useBibleVersion();
  const [currentDevotional, setCurrentDevotional] = useState<Devotional | null>(
    null
  );
  const [bookmarked, setBookmarked] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [readingPlanVerses, setReadingPlanVerses] = useState<string>("");
  const [isLoadingVerses, setIsLoadingVerses] = useState(false);

  const appRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const verseRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const prayerRef = useRef<HTMLDivElement>(null);

  const colorClasses = getColorClasses(colorScheme);
  const currentDay = new Date().getDate();
  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  const getDevotionalForDate = useCallback(
    (day: number) =>
      devotionals.find((d) => parseInt(d.id) === day) || devotionals[0],
    []
  );

  // Function to parse reading plan (e.g., "John 1:1-5")
  const parseReadingPlan = (plan: string) => {
    // Match patterns like "John 1:1-5" or "1 John 1:1-5"
    const match = plan.match(/(\d?\s?\w+)\s(\d+):(\d+)-(\d+)/);
    if (match) {
      return {
        book: match[1].toLowerCase().replace(/\s+/g, ""), // Convert to lowercase and remove spaces
        chapter: match[2],
        startVerse: parseInt(match[3]),
        endVerse: parseInt(match[4]),
      };
    }
    return null;
  };

  useEffect(() => {
    if (!currentDevotional) return;

    const parsedPlan = parseReadingPlan(currentDevotional.readingPlan);
    if (!parsedPlan) {
      setReadingPlanVerses("Unable to parse reading plan.");
      return;
    }

    const { book, chapter, startVerse, endVerse } = parsedPlan;
    const version = bibleVersion.toLowerCase();

    // Construct dynamic API URL
    const url = `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-${version}/books/${book}/chapters/${chapter}.json`;

    setIsLoadingVerses(true);

    fetch(url)
      .then((response) => {
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        const versesArray = data.verses || [];

        if (versesArray.length === 0) {
          setReadingPlanVerses("Verses not available");
          return;
        }

        const filteredVerses = versesArray
          .filter(
            (verse: any) => verse.verse >= startVerse && verse.verse <= endVerse
          )
          .map((verse: any) => verse.text)
          .join(" ");

        setReadingPlanVerses(filteredVerses);
      })
      .catch((error) => {
        console.error("Error fetching verses:", error);
        setReadingPlanVerses("Unable to load verses.");
      })
      .finally(() => {
        setIsLoadingVerses(false);
      });
  }, [currentDevotional, bibleVersion]);

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
      const verseText = currentDevotional.verse.text[bibleVersion];
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
  }, [bibleVersion, currentDevotional]);

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

  if (!currentDevotional || !isMounted) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        Loading...
      </div>
    );
  }

  // Get the verse text for the current Bible version
  const verseText = currentDevotional.verse.text[bibleVersion];
  const currentId = parseInt(currentDevotional.id);

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
              <div className="flex items-start mb-2">
                <FaBook className="text-white mt-1 mr-2" />
                <h2 className="text-lg font-semibold">Today&apos;s Verse</h2>
              </div>
              <p className="mb-2 italic text-2xl">&ldquo;{verseText}&rdquo;</p>
              <p className="text-right font-medium">
                {currentDevotional.verse.reference} ({bibleVersion})
              </p>
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
            <div className="text-sm text-gray-400 border-t border-gray-200/50 dark:border-gray-600/50 pt-4">
              <p>
                Today&apos;s Reading:{" "}
                <span className={`font-medium ${colorClasses.text}`}>
                  {currentDevotional.readingPlan}
                </span>
              </p>
              <div>
                {isLoadingVerses ? (
                  <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                    <p className="text-gray-700 dark:text-gray-300">
                      Loading verses...
                    </p>
                  </div>
                ) : readingPlanVerses ? (
                  <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                    <p className="text-gray-700 dark:text-gray-300">
                      {readingPlanVerses}
                    </p>
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
