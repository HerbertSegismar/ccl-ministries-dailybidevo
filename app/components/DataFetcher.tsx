"use client";
import { useState, useEffect, useCallback } from "react";

interface BibleVerse {
  verse: number;
  text: string;
}

export interface ParsedPlan {
  book: string;
  chapter: string;
  startVerse?: number;
  endVerse?: number;
}

interface UseDevotionalDataProps {
  currentDay: number;
  getDevotionalForDate: (day: number) => any;
  bibleVersion: string;
}

const SINGLE_CHAPTER_BOOKS = new Set([
  "obadiah",
  "philemon",
  "2+john",
  "3+john",
  "jude",
]);

export const useDevotionalData = ({
  currentDay,
  getDevotionalForDate,
  bibleVersion,
}: UseDevotionalDataProps) => {
  const [currentDevotional, setCurrentDevotional] = useState<any>(null);
  const [readingPlanVerses, setReadingPlanVerses] = useState<string>("");
  const [isLoadingVerses, setIsLoadingVerses] = useState(false);
  const [verseError, setVerseError] = useState<string | null>(null);
  const [dailyVerseText, setDailyVerseText] = useState<string>("");
  const [isLoadingDailyVerse, setIsLoadingDailyVerse] = useState(false);

  const parseReadingPlan = (plan: string) => {
    const match = plan.match(/(\d?\s?\w+)\s(\d+)(?::(\d+)(?:-(\d+))?)?/);
    if (match) {
      const bookPart = match[1].replace(/(\d)\s?(\w)/, "$1+$2").toLowerCase();
      return {
        book: bookPart.replace(/\s+/g, ""),
        chapter: match[2],
        startVerse: match[3] ? parseInt(match[3]) : undefined,
        endVerse: match[4] ? parseInt(match[4]) : undefined,
      };
    }
    return null;
  };

  const fetchBibleVerses = useCallback(
    async (parsedPlan: ParsedPlan, useFallback = false) => {
      const { book, chapter, startVerse, endVerse } = parsedPlan;
      const versionToUse = useFallback ? "kjv" : bibleVersion.toLowerCase();

      let url: string;
      const isSingleChapterBook = SINGLE_CHAPTER_BOOKS.has(book);
      const isWholeChapter = startVerse === undefined && endVerse === undefined;

      if (isSingleChapterBook && isWholeChapter) {
        url = `https://bible-api.com/${book}%201?translation=${versionToUse}&single_chapter_book_matching=indifferent`;
      } else if (isWholeChapter) {
        url = `https://bible-api.com/${book}+${chapter}?translation=${versionToUse}`;
      } else if (startVerse !== undefined && endVerse === undefined) {
        url = `https://bible-api.com/${book}+${chapter}:${startVerse}?translation=${versionToUse}`;
      } else if (startVerse !== undefined && endVerse !== undefined) {
        url = `https://bible-api.com/${book}+${chapter}:${startVerse}-${endVerse}?translation=${versionToUse}`;
      } else {
        url = `https://bible-api.com/${book}+${chapter}?translation=${versionToUse}`;
      }

      const apiEndpoints = [
        url,
        url.replace(`translation=${versionToUse}`, "translation=kjv"),
      ];

      for (const endpoint of apiEndpoints) {
        try {
          const response = await fetch(endpoint);
          if (response.ok) {
            const data = await response.json();
            if (data.verses) {
              const versesText = data.verses
                .map(
                  (v: BibleVerse) =>
                    `${v.verse}. ${v.text.trim().replace(/\s+/g, " ")}`
                )
                .join("\n\n");

              if (isWholeChapter) {
                return {
                  text: `Chapter ${chapter}\n\n${versesText}`,
                  version: versionToUse,
                  isFullChapter: true,
                };
              }

              return {
                text: versesText,
                version: versionToUse,
                isFullChapter: false,
              };
            } else if (data.text) {
              const text = data.text.replace(/\s+/g, " ").trim();
              if (isWholeChapter) {
                return {
                  text: `Chapter ${chapter}\n\n${text}`,
                  version: versionToUse,
                  isFullChapter: true,
                };
              }
              return {
                text: text,
                version: versionToUse,
                isFullChapter: false,
              };
            }
          }
        } catch {
          console.log(
            `Failed to fetch from ${endpoint}, trying next endpoint...`
          );
        }
      }

      throw new Error("All API endpoints failed");
    },
    [bibleVersion]
  );

  const fetchVerseFromAPI = useCallback(
    async (verseReference: string) => {
      try {
        // Updated regex to capture verse ranges (e.g., John 3:16-18)
        const match = verseReference.match(
          /(\d?\s?\w+)\s(\d+):(\d+)(?:-(\d+))?/
        );
        if (!match) return "Verse not available";

        const book = match[1].toLowerCase().replace(/\s+/g, "+");
        const chapter = match[2];
        const startVerse = match[3];
        const endVerse = match[4]; // Will be undefined if no range

        // Build URL with verse range if applicable
        const versePath = endVerse ? `${startVerse}-${endVerse}` : startVerse;
        const url = `https://bible-api.com/${book}+${chapter}:${versePath}?translation=${bibleVersion}`;
        const fallbackUrl = `https://bible-api.com/${book}+${chapter}:${versePath}?translation=KJV`;

        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          return data.text || "Verse not available";
        }

        // Fallback to KJV if primary version fails
        const fallbackResponse = await fetch(fallbackUrl);
        if (fallbackResponse.ok) {
          const data = await fallbackResponse.json();
          return data.text || "Verse not available";
        }

        return "Verse not available";
      } catch (error) {
        console.error("Error fetching verse:", error);
        return "Verse not available";
      }
    },
    [bibleVersion]
  );

  const loadVerses = useCallback(
    async (plan: string) => {
      const chapterRangeMatch = plan.match(/(\d?\s?\w+)\s(\d+)-(\d+)/);

      if (chapterRangeMatch) {
        const book = chapterRangeMatch[1].toLowerCase().replace(/\s+/g, "");
        const startChapter = parseInt(chapterRangeMatch[2]);
        const endChapter = parseInt(chapterRangeMatch[3]);

        setIsLoadingVerses(true);
        setVerseError(null);

        try {
          const allChaptersText: string[] = [];

          for (let chapter = startChapter; chapter <= endChapter; chapter++) {
            const parsedPlan = {
              book,
              chapter: chapter.toString(),
              startVerse: undefined,
              endVerse: undefined,
            };

            const result = await fetchBibleVerses(parsedPlan);
            allChaptersText.push(result.text);
          }

          setReadingPlanVerses(allChaptersText.join("\n\n"));
        } catch (error) {
          console.error("Error fetching chapter range:", error);
          setVerseError(
            "Unable to load chapter range. Please check the book and chapter numbers."
          );
          setReadingPlanVerses("");
        } finally {
          setIsLoadingVerses(false);
        }
        return;
      }

      const parsedPlan = parseReadingPlan(plan);
      if (!parsedPlan) {
        setReadingPlanVerses("Unable to parse reading plan.");
        return;
      }

      setIsLoadingVerses(true);
      setVerseError(null);

      try {
        const result = await fetchBibleVerses(parsedPlan);
        setReadingPlanVerses(result.text);
      } catch (error) {
        console.error("Error fetching verses:", error);

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
            "Input may have exceeded available verses. Try typing the chapter only without verses."
          );
          setReadingPlanVerses("");
        }
      } finally {
        setIsLoadingVerses(false);
      }
    },
    [fetchBibleVerses, bibleVersion]
  );

  const loadDailyVerse = useCallback(async () => {
    if (!currentDevotional) return;

    setIsLoadingDailyVerse(true);
    try {
      const verseText = await fetchVerseFromAPI(
        currentDevotional.verse.reference
      );
      setDailyVerseText(verseText);

      localStorage.setItem(
        `verse-${currentDevotional.id}-${bibleVersion}`,
        verseText
      );
    } catch (error) {
      console.error("Error fetching daily verse:", error);
      setDailyVerseText("Verse not available");
    } finally {
      setIsLoadingDailyVerse(false);
    }
  }, [currentDevotional, bibleVersion, fetchVerseFromAPI]);

  useEffect(() => {
    const todayDevotional = getDevotionalForDate(currentDay);
    setCurrentDevotional(todayDevotional);
  }, [currentDay, getDevotionalForDate]);

  useEffect(() => {
    if (!currentDevotional) return;

    loadVerses(currentDevotional.readingPlan);
    loadDailyVerse();
  }, [currentDevotional, bibleVersion, loadVerses, loadDailyVerse]);

  return {
    currentDevotional,
    setCurrentDevotional,
    readingPlanVerses,
    isLoadingVerses,
    verseError,
    dailyVerseText,
    isLoadingDailyVerse,
    loadVerses,
    loadDailyVerse,
  };
};
