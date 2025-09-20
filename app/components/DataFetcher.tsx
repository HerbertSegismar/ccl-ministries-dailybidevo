"use client";
import { useState, useEffect, useCallback, ReactNode } from "react";

export const SINGLE_CHAPTER_BOOKS = new Set([
  "obadiah",
  "philemon",
  "2+john",
  "3+john",
  "jude",
]);

export interface ParsedPlan {
  book: string;
  chapter: string;
  startVerse?: number;
  endVerse?: number;
}

export interface BibleVerse {
  verse: number;
  text: string;
}

export interface BibleApiResult {
  text: string;
  version: string;
  isFullChapter: boolean;
}

interface UseDevotionalDataProps {
  currentDay: number;
  getDevotionalForDate: (day: number) => Devotional; // Replaced any with Devotional
  bibleVersion: string;
}

export interface Devotional {
  content: ReactNode; // Changed from 'any' to 'ReactNode'
  prayer: ReactNode;
  date: ReactNode;
  title: string | undefined;
  id: string | number;
  verse: {
    reference: string;
  };
  readingPlan: string;
}

export function parseReadingPlan(plan: string): ParsedPlan | null {
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
}

export async function fetchVerseByReference(
  reference: string,
  bibleVersion: string
): Promise<string> {
  const apiEndpoints = [
    `https://bible-api.com/${reference}?translation=${bibleVersion}`,
    `https://bible-api.com/${reference}?translation=kjv`,
  ];

  let lastError: Error | null = null;

  for (const endpoint of apiEndpoints) {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        return data.text || "Verse not available";
      }
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      console.warn(`Failed to fetch from ${endpoint}, trying next endpoint...`);
      continue;
    }
  }

  throw lastError || new Error("All API endpoints failed");
}

export async function fetchBibleVerses(
  parsedPlan: ParsedPlan,
  bibleVersion: string
): Promise<BibleApiResult> {
  const { book, chapter, startVerse, endVerse } = parsedPlan;

  let url: string;
  const isSingleChapterBook = SINGLE_CHAPTER_BOOKS.has(book);
  const isWholeChapter = startVerse === undefined && endVerse === undefined;

  if (isSingleChapterBook && isWholeChapter) {
    url = `https://bible-api.com/${book}%201?translation=${bibleVersion}&single_chapter_book_matching=indifferent`;
  } else if (isWholeChapter) {
    url = `https://bible-api.com/${book}+${chapter}?translation=${bibleVersion}`;
  } else if (startVerse !== undefined && endVerse === undefined) {
    url = `https://bible-api.com/${book}+${chapter}:${startVerse}?translation=${bibleVersion}`;
  } else if (startVerse !== undefined && endVerse !== undefined) {
    url = `https://bible-api.com/${book}+${chapter}:${startVerse}-${endVerse}?translation=${bibleVersion}`;
  } else {
    url = `https://bible-api.com/${book}+${chapter}?translation=${bibleVersion}`;
  }

  const apiEndpoints = [
    url,
    url.replace(`translation=${bibleVersion}`, "translation=kjv"),
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

          return {
            text: isWholeChapter
              ? `Chapter ${chapter}\n\n${versesText}`
              : versesText,
            version: bibleVersion,
            isFullChapter: isWholeChapter,
          };
        } else if (data.text) {
          const text = data.text.replace(/\s+/g, " ").trim();
          return {
            text: isWholeChapter ? `Chapter ${chapter}\n\n${text}` : text,
            version: bibleVersion,
            isFullChapter: isWholeChapter,
          };
        }
      }
    } catch {
      console.log(`Failed to fetch from ${endpoint}, trying next endpoint...`);
    }
  }

  throw new Error("All API endpoints failed");
}

export const useBibleAPI = (bibleVersion: string) => {
  const fetchBibleVersesMemoized = useCallback(
    (parsedPlan: ParsedPlan) => fetchBibleVerses(parsedPlan, bibleVersion),
    [bibleVersion]
  );

  const fetchVerseFromAPIMemoized = useCallback(
    (verseReference: string) =>
      fetchVerseByReference(verseReference, bibleVersion),
    [bibleVersion]
  );

  return {
    fetchBibleVerses: fetchBibleVersesMemoized,
    fetchVerseFromAPI: fetchVerseFromAPIMemoized,
  };
};

export const useReadingPlan = (
  fetchBibleVerses: (plan: ParsedPlan) => Promise<BibleApiResult>
) => {
  const [verses, setVerses] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadVerses = useCallback(
    async (plan: string) => {
      const chapterRangeMatch = plan.match(/(\d?\s?\w+)\s(\d+)-(\d+)/);

      if (chapterRangeMatch) {
        const book = chapterRangeMatch[1].toLowerCase().replace(/\s+/g, "");
        const startChapter = parseInt(chapterRangeMatch[2]);
        const endChapter = parseInt(chapterRangeMatch[3]);

        setIsLoading(true);
        setError(null);

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

          setVerses(allChaptersText.join("\n\n"));
        } catch (error) {
          console.error("Error fetching chapter range:", error);
          setError(
            "Unable to load chapter range. Please check the book and chapter numbers."
          );
          setVerses("");
        } finally {
          setIsLoading(false);
        }
        return;
      }

      const parsedPlan = parseReadingPlan(plan);
      if (!parsedPlan) {
        setVerses("Unable to parse reading plan.");
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const result = await fetchBibleVerses(parsedPlan);
        setVerses(result.text);
      } catch (error) {
        console.error("Error fetching verses:", error);
        setError(
          "Input may have exceeded available verses. Try typing the chapter only without verses."
        );
        setVerses("");
      } finally {
        setIsLoading(false);
      }
    },
    [fetchBibleVerses]
  );

  return { verses, isLoading, error, loadVerses };
};

export const useDailyVerse = (
  fetchVerseFromAPI: (verseReference: string) => Promise<string>,
  bibleVersion: string
) => {
  const [verseText, setVerseText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loadDailyVerse = useCallback(
    async (devotional: Devotional) => {
      setIsLoading(true);
      try {
        const verse = await fetchVerseFromAPI(devotional.verse.reference);
        setVerseText(verse);
        // Convert id to string to avoid TypeScript error
        localStorage.setItem(
          `verse-${String(devotional.id)}-${bibleVersion}`,
          verse
        );
      } catch (error) {
        console.error("Error fetching daily verse:", error);
        setVerseText("Verse not available");
      } finally {
        setIsLoading(false);
      }
    },
    [fetchVerseFromAPI, bibleVersion]
  );

  return { verseText, isLoading, loadDailyVerse };
};

export const useDevotionalData = ({
  currentDay,
  getDevotionalForDate,
  bibleVersion,
}: UseDevotionalDataProps) => {
  // Replace 'any' with 'Devotional | null'
  const [currentDevotional, setCurrentDevotional] = useState<Devotional | null>(
    null
  );
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
    loadDailyVerse,
  } = useDailyVerse(fetchVerseFromAPI, bibleVersion);

  useEffect(() => {
    const todayDevotional = getDevotionalForDate(currentDay);
    setCurrentDevotional(todayDevotional);
  }, [currentDay, getDevotionalForDate]);

  useEffect(() => {
    if (!currentDevotional) return;

    loadVerses(currentDevotional.readingPlan);
    loadDailyVerse(currentDevotional);
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
