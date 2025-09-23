"use client";
import { useTheme } from "@/app/contexts/ThemeContext";
import { getColorClasses } from "@/app/contexts/ThemeContext";
import { FaCode, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const CreditsAndContact = () => {
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
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-gray-800"
          : "bg-gradient-to-b from-purple-50 to-blue-50"
      } p-4 -mt-2`}
    >
      {/* Bible API Section */}
      <div
        className={`p-6 md:p-8 rounded-2xl backdrop-blur-lg shadow-lg mb-10 mx-auto max-w-4xl ${
          theme === "dark"
            ? "bg-blue-900/30 border-blue-700/50"
            : "bg-blue-500/10 border-blue-200/50"
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
          We&apos;re grateful for this valuable resource that enables us to
          bring God&apos;s Word to our users in an accessible and reliable
          format. The API provides access to various Bible translations via a JSON file.
        </p>
      </div>

      {/* Contact Form Section */}
      <div
        className={`p-6 md:p-8 rounded-2xl backdrop-blur-lg shadow-lg mb-10 mx-auto max-w-4xl ${
          theme === "dark"
            ? "bg-purple-900/30 border-purple-700/50"
            : "bg-purple-500/10 border-purple-200/50"
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
              theme === "dark" ? "border-green-700/50" : "border-green-200"
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
              Sorry, there was an error sending your message. Please try again
              or email us directly at{" "}
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
                autoComplete="off"
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
                autoComplete="off"
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
              className={`w-full p-3 rounded-lg border placeholder:text-gray-400 ${
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
            className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center my-4 ${
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
      </div>
    </div>
  );
};

export default CreditsAndContact;
