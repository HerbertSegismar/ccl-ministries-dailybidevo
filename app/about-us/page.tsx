"use client";

import { useTheme } from "@/app/contexts/ThemeContext";
import { getColorClasses } from "@/app/contexts/ThemeContext";
import {
  FaHeart,
  FaBook,
  FaPrayingHands,
  FaUsers,
  FaCode,
  FaHandsHelping,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import { useState } from "react";

const AboutUs = () => {
  const { theme, colorScheme } = useTheme();
  const colorClasses = getColorClasses(colorScheme);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using FormSubmit service to send emails
      const response = await fetch(
        "https://formsubmit.co/ajax/4de0fccfbf2809f17e5c0bc597596d4b",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _replyto: formData.email,
            _template: "table",
            _subject: `New Contact Form Submission: ${formData.subject}`,
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`min-h-screen p-4 md:p-8 ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-800 to-gray-900"
          : "bg-gradient-to-b from-blue-50 to-purple-50"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1
            className={`text-3xl md:text-4xl font-bold mb-4 ${colorClasses.text}`}
          >
            About Fount Of Hope Devotionals
          </h1>
          <p
            className={`text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            } max-w-2xl mx-auto`}
          >
            Connecting hearts to God&apos;s Word through daily devotionals and
            spiritual guidance
          </p>
        </div>

        {/* Main Content Card */}
        <div
          className={`backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden mb-10 border ${
            theme === "dark"
              ? "bg-gray-700/70 border-gray-600/30"
              : "bg-white/90 border-white/30"
          }`}
        >
          {/* Header with gradient */}
          <div
            className={`bg-gradient-to-r ${colorClasses.gradient} text-white py-6 px-8 flex items-center`}
          >
            <FaUsers className="text-2xl mr-3" />
            <h2 className="text-2xl font-bold">Our Mission & Vision</h2>
          </div>

          <div className="p-8">
            <div className="mb-10">
              <p
                className={`text-lg leading-relaxed ${
                  theme === "dark" ? "text-gray-200" : "text-gray-800"
                } mb-6`}
              >
                At{" "}
                <span className="font-semibold">Fount Of Hope Devotionals</span>
                , we are dedicated to helping Christians grow in their faith
                through daily devotionals, Bible reading, and prayer. Our
                ministry provides structured spiritual content that guides you
                through Scripture with thoughtful reflections and practical
                applications for everyday life.
              </p>

              <p
                className={`text-lg leading-relaxed ${
                  theme === "dark" ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Our vision is to create a digital sanctuary where believers can
                find peace, guidance, and connection with God&apos;s Word in the
                midst of their busy lives.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div
                className={`p-6 rounded-2xl backdrop-blur-md border ${
                  theme === "dark"
                    ? "bg-gray-700/40 border-gray-600/50"
                    : "bg-purple-50/40 border-purple-200/50"
                }`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-full ${
                      theme === "dark" ? "bg-purple-500/20" : "bg-purple-100"
                    } mr-4`}
                  >
                    <FaBook className={`text-xl ${colorClasses.text}`} />
                  </div>
                  <h3 className={`text-lg font-semibold ${colorClasses.text}`}>
                    Daily Devotionals
                  </h3>
                </div>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Thoughtfully crafted devotionals that connect Biblical wisdom
                  to modern life challenges, helping you apply Scripture to your
                  daily walk with God.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl backdrop-blur-md border ${
                  theme === "dark"
                    ? "bg-gray-700/40 border-gray-600/50"
                    : "bg-blue-50/40 border-blue-200/50"
                }`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-full ${
                      theme === "dark" ? "bg-blue-500/20" : "bg-blue-100"
                    } mr-4`}
                  >
                    <FaHeart className={`text-xl ${colorClasses.text}`} />
                  </div>
                  <h3 className={`text-lg font-semibold ${colorClasses.text}`}>
                    Reflection Space
                  </h3>
                </div>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  A dedicated area for personal reflection and application of
                  God&apos;s Word in your life, encouraging deeper spiritual
                  growth and self-examination.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl backdrop-blur-md border ${
                  theme === "dark"
                    ? "bg-gray-700/40 border-gray-600/50"
                    : "bg-green-50/40 border-green-200/50"
                }`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-full ${
                      theme === "dark" ? "bg-green-500/20" : "bg-green-100"
                    } mr-4`}
                  >
                    <FaPrayingHands
                      className={`text-xl ${colorClasses.text}`}
                    />
                  </div>
                  <h3 className={`text-lg font-semibold ${colorClasses.text}`}>
                    Prayer Guides
                  </h3>
                </div>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Prayer content that helps you develop a consistent and
                  meaningful prayer life, with guided prayers and prompts for
                  different life situations.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl backdrop-blur-md border ${
                  theme === "dark"
                    ? "bg-gray-700/40 border-gray-600/50"
                    : "bg-amber-50/40 border-amber-200/50"
                }`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-full ${
                      theme === "dark" ? "bg-amber-500/20" : "bg-amber-100"
                    } mr-4`}
                  >
                    <FaHandsHelping
                      className={`text-xl ${colorClasses.text}`}
                    />
                  </div>
                  <h3 className={`text-lg font-semibold ${colorClasses.text}`}>
                    Reading Plans
                  </h3>
                </div>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Structured Bible reading plans to help you systematically
                  engage with Scripture and develop a consistent habit of
                  reading God&apos;s Word.
                </p>
              </div>
            </div>

            {/* Bible API Section */}
            <div
              className={`p-6 rounded-2xl backdrop-blur-md mb-10 border ${
                theme === "dark"
                  ? "bg-blue-900/30 border-blue-700/50"
                  : "bg-blue-50/50 border-blue-200/50"
              }`}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`p-3 rounded-full ${
                    theme === "dark" ? "bg-blue-500/20" : "bg-blue-100"
                  } mr-4`}
                >
                  <FaCode className={`text-xl ${colorClasses.text}`} />
                </div>
                <h3 className={`text-xl font-bold ${colorClasses.text}`}>
                  Bible API Credit
                </h3>
              </div>
              <p
                className={`${
                  theme === "dark" ? "text-gray-200" : "text-gray-800"
                } mb-4`}
              >
                This application uses the Bible API from{" "}
                <a
                  href="https://bible-api.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-semibold hover:underline ${colorClasses.text}`}
                >
                  bible-api.com
                </a>{" "}
                to provide Scripture content in multiple translations.
              </p>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                We&apos;re grateful for this valuable resource that enables us
                to bring God&apos;s Word to our users in an accessible and
                reliable format. The API provides access to various Bible
                translations while maintaining respect for the sacred text.
              </p>
            </div>

            {/* Contact Form Section */}
            <div
              className={`p-6 rounded-2xl backdrop-blur-md mb-10 border ${
                theme === "dark"
                  ? "bg-purple-900/30 border-purple-700/50"
                  : "bg-purple-50/50 border-purple-200/50"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-6 ${colorClasses.text} flex items-center`}
              >
                <FaEnvelope className="mr-2" /> Contact Us
              </h3>

              {submitStatus === "success" && (
                <div
                  className={`p-4 mb-6 rounded-lg ${
                    theme === "dark" ? "bg-green-800/30" : "bg-green-100"
                  } border ${
                    theme === "dark"
                      ? "border-green-700/50"
                      : "border-green-200"
                  }`}
                >
                  <p
                    className={`${
                      theme === "dark" ? "text-green-300" : "text-green-800"
                    }`}
                  >
                    Thank you for your message! We&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  className={`p-4 mb-6 rounded-lg ${
                    theme === "dark" ? "bg-red-800/30" : "bg-red-100"
                  } border ${
                    theme === "dark" ? "border-red-700/50" : "border-red-200"
                  }`}
                >
                  <p
                    className={`${
                      theme === "dark" ? "text-red-300" : "text-red-800"
                    }`}
                  >
                    Sorry, there was an error sending your message. Please try
                    again or email us directly at{" "}
                    <a
                      href="mailto:fountofhopedevotionals@gmail.com"
                      className="underline"
                    >
                      fountofhopedevotionals@gmail.com
                    </a>
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-1 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full p-3 rounded-lg border ${
                        theme === "dark"
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-800"
                      } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-1 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full p-3 rounded-lg border ${
                        theme === "dark"
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-800"
                      } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-medium mb-1 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full p-3 rounded-lg border ${
                      theme === "dark"
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-gray-800"
                    } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Prayer Request">Prayer Request</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-1 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full p-3 rounded-lg border ${
                      theme === "dark"
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-gray-800"
                    } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                    placeholder="Enter your message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : `bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90`
                  } text-white transition-all duration-300`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" /> Send Message
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  } mb-2`}
                >
                  Prefer to email us directly?
                </p>
                <a
                  href="mailto:fountofhopedevotionals@gmail.com"
                  className={`break-all ${
                    theme === "dark"
                      ? "text-purple-400 hover:text-purple-300"
                      : "text-purple-600 hover:text-purple-700"
                  } font-medium`}
                >
                  fountofhopedevotionals@gmail.com
                </a>
              </div>
            </div>

            {/* Commitment Section */}
            <div>
              <h3 className={`text-xl font-bold mb-4 ${colorClasses.text}`}>
                Our Commitment
              </h3>
              <p
                className={`${
                  theme === "dark" ? "text-gray-200" : "text-gray-800"
                } leading-relaxed`}
              >
                We are committed to providing biblically sound content that
                honors God and serves His people. Our team works diligently to
                ensure that our devotionals are grounded in Scripture and
                applicable to your spiritual journey. We pray that this
                application becomes a valuable tool in your daily walk with
                Christ.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div
          className={`text-center text-sm ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <p>To God be the glory for the great things He has done.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
