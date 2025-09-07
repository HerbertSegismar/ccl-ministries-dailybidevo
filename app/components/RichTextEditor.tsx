"use client";

import { useState, useRef, useEffect } from "react";
import { FaBold, FaItalic, FaUnderline, FaPalette } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const RichTextEditor = ({
  value,
  onChange,
  placeholder,
}: RichTextEditorProps) => {
  const { theme } = useTheme();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const editorRef = useRef<HTMLDivElement>(null);
  const colorPickerRef = useRef<HTMLDivElement>(null);

  const isEmpty = value.replace(/<[^>]*>/g, "").trim() === "";

  useEffect(() => {
    if (editorRef.current) {
      // Always show actual content if it exists, regardless of focus state
      if (!isEmpty) {
        editorRef.current.innerHTML = value;
      }
      // Show placeholder only when empty and not focused
      else if (!isFocused) {
        editorRef.current.innerHTML = `<span class="placeholder-text">${placeholder}</span>`;
      }
      // Clear when focused and empty
      else if (isFocused && isEmpty) {
        editorRef.current.innerHTML = "";
      }
    }
  }, [value, isFocused, placeholder, isEmpty]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('[aria-label="Text Color"]')
      ) {
        setShowColorPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
    if (isEmpty && editorRef.current) {
      editorRef.current.innerHTML = "";
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    handleContentChange();
  };

  const applyFormatting = (format: string, value?: string) => {
    if (
      editorRef.current &&
      !editorRef.current.contains(document.activeElement)
    ) {
      editorRef.current.focus();
    }
    document.execCommand(format, false, value);
    updateButtonStates();
    handleContentChange();
  };

  const updateButtonStates = () => {
    setIsBold(document.queryCommandState("bold"));
    setIsItalic(document.queryCommandState("italic"));
    setIsUnderline(document.queryCommandState("underline"));
  };

  const handleContentChange = () => {
    if (editorRef.current) {
      const content = editorRef.current.innerHTML;
      // Only update if it's not the placeholder
      if (!content.includes("placeholder-text")) {
        onChange(content);
      } else {
        onChange("");
      }
    }
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    if (
      editorRef.current &&
      !editorRef.current.contains(document.activeElement)
    ) {
      editorRef.current.focus();
    }
    applyFormatting("foreColor", color);
    setShowColorPicker(false);
  };

  const colorOptions = [
    "#312c2cff",
    "#96eac6ff",
    "#5cf06eff",
    "#edb12fff",
    "#888082ff",
    "#30bde0ff",
    "#aa5cf3ff",
    "#f2589dff",
    "#df5d5dff",
    "#bfbb51ff",
    "#eeeeeeff",
    "#2f51b0ff",
  ];

  return (
    <div
      className={`border rounded-lg overflow-hidden ${
        theme === "dark" ? "border-gray-600" : "border-gray-200"
      }`}
    >
      <div
        className={`flex items-center p-2 border-b ${
          theme === "dark"
            ? "bg-gray-700 border-gray-600"
            : "bg-gray-100 border-gray-200"
        }`}
      >
        <button
          type="button"
          onClick={() => applyFormatting("bold")}
          className={`p-2 rounded mr-1 ${
            isBold
              ? theme === "dark"
                ? "bg-gray-600"
                : "bg-gray-300"
              : theme === "dark"
              ? "hover:bg-gray-600"
              : "hover:bg-gray-200"
          }`}
          aria-label="Bold"
        >
          <FaBold className="text-sm" />
        </button>
        <button
          type="button"
          onClick={() => applyFormatting("italic")}
          className={`p-2 rounded mr-1 ${
            isItalic
              ? theme === "dark"
                ? "bg-gray-600"
                : "bg-gray-300"
              : theme === "dark"
              ? "hover:bg-gray-600"
              : "hover:bg-gray-200"
          }`}
          aria-label="Italic"
        >
          <FaItalic className="text-sm" />
        </button>
        <button
          type="button"
          onClick={() => applyFormatting("underline")}
          className={`p-2 rounded mr-1 ${
            isUnderline
              ? theme === "dark"
                ? "bg-gray-600"
                : "bg-gray-300"
              : theme === "dark"
              ? "hover:bg-gray-600"
              : "hover:bg-gray-200"
          }`}
          aria-label="Underline"
        >
          <FaUnderline className="text-sm" />
        </button>

        <div className="relative" ref={colorPickerRef}>
          <button
            type="button"
            onClick={() => setShowColorPicker(!showColorPicker)}
            className={`p-2 rounded mr-1 ${
              showColorPicker
                ? theme === "dark"
                  ? "bg-gray-600"
                  : "bg-gray-300"
                : theme === "dark"
                ? "hover:bg-gray-600"
                : "hover:bg-gray-200"
            }`}
            aria-label="Text Color"
          >
            <FaPalette className="text-sm" style={{ color: selectedColor }} />
          </button>
          {showColorPicker && (
            <div
              className={`absolute top-full left-0 mt-1 p-2 rounded-md shadow-lg z-50 ${
                theme === "dark" ? "bg-gray-700" : "bg-white"
              }`}
              style={{ minWidth: "200px" }}
            >
              <div className="flex flex-wrap gap-2 mb-2">
                {colorOptions.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className="w-6 h-6 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorSelect(color)}
                    aria-label={`Select color ${color}`}
                  />
                ))}
              </div>
              <input
                type="color"
                value={selectedColor}
                onChange={(e) => handleColorSelect(e.target.value)}
                className="w-full h-8 cursor-pointer"
                aria-label="Custom color picker"
              />
            </div>
          )}
        </div>
      </div>

      <div className="relative">
        <div
          ref={editorRef}
          className={`w-full min-h-32 p-3 focus:outline-none resize-none ${
            theme === "dark"
              ? "bg-gray-600/50 text-gray-300"
              : "bg-white/50 text-gray-700"
          }`}
          contentEditable
          onInput={handleContentChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyUp={updateButtonStates}
          onMouseUp={updateButtonStates}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
