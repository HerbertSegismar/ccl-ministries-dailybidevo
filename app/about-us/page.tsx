"use client";
import { useTheme } from "@/app/contexts/ThemeContext";
import { getColorClasses } from "@/app/contexts/ThemeContext";
import {
  FaHeart,
  FaBook,
  FaPrayingHands,
  FaUsers,
  FaHandsHelping,
} from "react-icons/fa";

const AboutUs = () => {
  const { theme, colorScheme } = useTheme();
  const colorClasses = getColorClasses(colorScheme);

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
      </div>
    </div>
  );
};

export default AboutUs;
