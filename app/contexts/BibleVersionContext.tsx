"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface BibleVersionContextType {
  bibleVersion: string;
  setBibleVersion: (version: string) => void;
}

const BibleVersionContext = createContext<BibleVersionContextType | undefined>(
  undefined
);

export const useBibleVersion = () => {
  const context = useContext(BibleVersionContext);
  if (!context) {
    throw new Error(
      "useBibleVersion must be used within a BibleVersionProvider"
    );
  }
  return context;
};

interface BibleVersionProviderProps {
  children: ReactNode;
}

export const BibleVersionProvider: React.FC<BibleVersionProviderProps> = ({
  children,
}) => {
  const [bibleVersion, setBibleVersion] = useState<string>("KJV");

  // ✅ Load saved version from localStorage (client-only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedVersion = localStorage.getItem("bibleVersion");
      if (savedVersion) {
        setBibleVersion(savedVersion);
      }
    }
  }, []);

  // ✅ Save version to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("bibleVersion", bibleVersion);
    }
  }, [bibleVersion]);

  return (
    <BibleVersionContext.Provider value={{ bibleVersion, setBibleVersion }}>
      {children}
    </BibleVersionContext.Provider>
  );
};
