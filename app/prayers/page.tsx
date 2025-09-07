"use client";

import { useRef, useEffect, useState } from "react";
import { FaPrayingHands, FaPlus, FaTimes } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import { getColorClasses } from "../contexts/ThemeContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface Prayer {
  id: number;
  title: string;
  content: string;
  date: string;
}

const Prayers = () => {
  const { theme, colorScheme } = useTheme();
  const pageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const [prayers, setPrayers] = useState<Prayer[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPrayer, setEditingPrayer] = useState<Prayer | null>(null);
  const [formData, setFormData] = useState({ title: "", content: "" });

  const colorClasses = getColorClasses(colorScheme);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Load prayers from localStorage
    const savedPrayers = localStorage.getItem("prayers");
    if (savedPrayers) {
      setPrayers(JSON.parse(savedPrayers));
    } else {
      const samplePrayers: Prayer[] = [
        {
          id: 1,
          title: "Morning Prayer",
          content:
            "Heavenly Father, thank you for this new day. Guide my steps and help me to honor you in all I do.",
          date: new Date().toLocaleDateString(),
        },
        {
          id: 2,
          title: "Evening Prayer",
          content:
            "Lord, thank you for your faithfulness today. Watch over me and my loved ones through the night.",
          date: new Date().toLocaleDateString(),
        },
      ];
      setPrayers(samplePrayers);
      localStorage.setItem("prayers", JSON.stringify(samplePrayers));
    }

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
  }, []);

  useGSAP(() => {
    if (!gsap || !cardsRef.current || cardsRef.current.children.length === 0)
      return;

    const cards = cardsRef.current.children;
    gsap.fromTo(
      cards,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.4 }
    );
  }, [prayers]);

  const handleOpenModal = (prayer?: Prayer) => {
    if (prayer) {
      setEditingPrayer(prayer);
      setFormData({ title: prayer.title, content: prayer.content });
    } else {
      setEditingPrayer(null);
      setFormData({ title: "", content: "" });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingPrayer(null);
    setFormData({ title: "", content: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date().toLocaleDateString();

    if (editingPrayer) {
      const updated = prayers.map((p) =>
        p.id === editingPrayer.id ? { ...p, ...formData, date: now } : p
      );
      setPrayers(updated);
      localStorage.setItem("prayers", JSON.stringify(updated));
    } else {
      const newPrayer: Prayer = { id: Date.now(), ...formData, date: now };
      const updated = [...prayers, newPrayer];
      setPrayers(updated);
      localStorage.setItem("prayers", JSON.stringify(updated));
    }

    handleCloseModal();
  };

  const handleDelete = (id: number) => {
    const updated = prayers.filter((p) => p.id !== id);
    setPrayers(updated);
    localStorage.setItem("prayers", JSON.stringify(updated));
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
          <FaPrayingHands className={`mr-3 ${colorClasses.text}`} />
          Prayer Journal
        </h1>

        <div className="flex justify-end mb-6">
          <button
            onClick={() => handleOpenModal()}
            className={`bg-gradient-to-r ${colorClasses.gradient} text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-300 flex items-center`}
          >
            <FaPlus className="mr-2" />
            New Prayer
          </button>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 gap-6">
          {prayers.length > 0 ? (
            prayers.map((prayer) => (
              <div
                key={prayer.id}
                className={`backdrop-blur-lg rounded-xl shadow-md p-6 border hover:shadow-lg transition-shadow duration-300 ${
                  theme === "dark"
                    ? "bg-gray-700/70 border-gray-600/30"
                    : "bg-white/80 border-white/30"
                }`}
              >
                <h2
                  className={`text-xl font-semibold mb-3 ${
                    theme === "dark" ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {prayer.title}
                </h2>
                <p
                  className={`italic mb-4 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  &ldquo;{prayer.content}&rdquo;
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {prayer.date}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleOpenModal(prayer)}
                      className={`${colorClasses.lightBg} ${
                        theme === "dark" ? "bg-gray-600" : ""
                      } ${
                        colorClasses.text
                      } px-3 py-1 rounded-full text-xs font-medium`}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(prayer.id)}
                      className={`${
                        theme === "dark"
                          ? "bg-red-600 text-red-200"
                          : "bg-red-100 text-red-700"
                      } px-3 py-1 rounded-full text-xs font-medium`}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div
              className={`text-center py-12 rounded-xl border ${
                theme === "dark"
                  ? "bg-gray-700/70 border-gray-600/30 text-gray-400"
                  : "bg-white/80 border-white/30 text-gray-500"
              }`}
            >
              <FaPrayingHands className="mx-auto text-4xl mb-4" />
              <p>
                No prayers yet. Click &ldquo;New Prayer&rdquo; to add your first
                prayer.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div
            className={`rounded-xl shadow-xl max-w-md w-full p-6 ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2
                className={`text-xl font-semibold ${
                  theme === "dark" ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {editingPrayer ? "Edit Prayer" : "Add New Prayer"}
              </h2>
              <button
                onClick={handleCloseModal}
                className={
                  theme === "dark"
                    ? "text-gray-400 hover:text-gray-300"
                    : "text-gray-500 hover:text-gray-700"
                }
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className={`block mb-2 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                  htmlFor="title"
                >
                  Prayer Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-white focus:ring-purple-500"
                      : "border-gray-300 bg-white text-gray-800 focus:ring-purple-500"
                  }`}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className={`block mb-2 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                  htmlFor="content"
                >
                  Prayer Content
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-white focus:ring-purple-500"
                      : "border-gray-300 bg-white text-gray-800 focus:ring-purple-500"
                  }`}
                  required
                />
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className={`px-4 py-2 ${
                    theme === "dark"
                      ? "text-gray-300 hover:text-gray-100"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`bg-gradient-to-r ${colorClasses.gradient} text-white px-4 py-2 rounded-md font-medium`}
                >
                  {editingPrayer ? "Update Prayer" : "Add Prayer"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Prayers;
