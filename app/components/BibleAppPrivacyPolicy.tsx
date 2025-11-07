import React from "react";
import { FaTimes } from "react-icons/fa";

interface BibleAppPrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const BibleAppPrivacyPolicy: React.FC<BibleAppPrivacyPolicyProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl transition-colors"
        >
          <FaTimes />
        </button>
        <div className="prose prose-purple max-w-none">
          <h1 className="text-3xl font-bold text-purple-800 mb-4 text-center">
            Privacy Policy for Fount Of Hope Bible
          </h1>

          <p className="text-sm text-gray-500 text-center mb-6">
            <strong>Effective Date: November 8, 2025</strong>
          </p>

          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            Fount Of Hope Bible ("the App") is committed to protecting your
            privacy. This Privacy Policy explains how we handle any information
            related to your use of the App. We are dedicated to providing a
            safe, offline experience for users seeking spiritual guidance
            through the Bible.
          </p>

          <h2 className="text-xl font-semibold text-purple-800 mt-8 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The App is designed to operate entirely offline and does not
            collect, store, or transmit any personal data to our servers or
            third parties. Your interactions with the App remain private on your
            device.
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li className="text-gray-700">
              <strong>User Preferences</strong>: The App may locally save
              minimal preferences on your device, such as font size, reading
              mode, or bookmark locations. These are stored solely for enhancing
              your app usage experience and are not accessible by us or anyone
              else.
            </li>
            <li className="text-gray-700">
              <strong>No Other Data</strong>: We do not collect device
              identifiers, location data, usage analytics, or any other personal
              information. No internet connection is required or used for core
              functionality.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-purple-800 mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Any locally stored preferences are used exclusively to personalize
            and improve your experience within the App. Since no data is
            collected remotely, there is no sharing, selling, or use beyond your
            device.
          </p>

          <h2 className="text-xl font-semibold text-purple-800 mt-8 mb-4">
            3. Sharing Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We do not share, sell, or disclose any information about you. All
            data remains on your device, and the App's offline nature ensures
            complete isolation from external parties.
          </p>

          <h2 className="text-xl font-semibold text-purple-800 mt-8 mb-4">
            4. Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your preferences are stored securely on your device using standard
            mobile operating system protections. We implement reasonable
            safeguards to prevent unauthorized access, but remember that no
            system is entirely risk-free—please use device-level security
            features like passcodes.
          </p>

          <h2 className="text-xl font-semibold text-purple-800 mt-8 mb-4">
            5. Children's Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The App is primarily intended for users aged 18 and above. However,
            individuals under 18 may use the App without any harm, as it is a
            wholesome Bible study tool that does not collect any data. As such,
            there are no special considerations under laws like COPPA
            (Children's Online Privacy Protection Act). Parents are encouraged
            to monitor usage by younger individuals.
          </p>

          <h2 className="text-xl font-semibold text-purple-800 mt-8 mb-4">
            6. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We may update this policy occasionally to reflect changes in the
            App. If significant changes occur, we will notify you via an in-app
            message. Continued use of the App after updates constitutes
            acceptance of the revised policy. Check this page periodically for
            the latest version.
          </p>

          <h2 className="text-xl font-semibold text-purple-800 mt-8 mb-4">
            7. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you have questions about this Privacy Policy or the App, please
            email us at{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&to=fountofhopedevotionals@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 underline font-medium"
            >
              fountofhopedevotionals@gmail.com
            </a>
            . We aim to respond promptly.
          </p>

          <p className="text-purple-600 italic text-center mt-8 mb-4">
            Thank you for trusting Fount Of Hope Bible as your companion for
            faith and reflection. Your privacy is our priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BibleAppPrivacyPolicy;
