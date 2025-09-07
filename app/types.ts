import type { JSX } from "react";

export interface NavItem {
  label: string;
  path: string;
  icon: JSX.Element;
}

export interface ReflectionPrompt {
  id: string;
  question: string;
  placeholder: string;
}

export interface Verse {
  text: Record<string, string>; // Key: version, Value: text
  reference: string;
  defaultVersion: string;
}

export interface Devotional {
  id: string;
  date: string;
  verse: {
    reference: string;
    text: Record<string, string>;
    defaultVersion: string;
  };
  title: string;
  content: string;
  prayer: string;
  readingPlan: string;
  reflection: ReflectionPrompt[];
}

export type ColorScheme = "purple" | "green" | "red" | "indigo";
