// src/pages/NotFound.tsx
import Link from "next/link";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="bg-white/70 dark:bg-gray-700/70 backdrop-blur-lg rounded-xl shadow-md p-8 text-center border border-white/30 dark:border-gray-600/30 max-w-md w-full">
        <FaExclamationTriangle className="text-4xl text-yellow-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-primary dark:text-purple-300 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="bg-gradient-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center"
        >
          <FaHome className="mr-2" />
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
