import { FaTimes } from "react-icons/fa";

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicy = ({ isOpen, onClose }: PrivacyPolicyProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes />
        </button>

        <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">
          Privacy Policy
        </h2>

        <div className="prose max-w-none">
          <p className="text-sm text-gray-500 mb-4">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            1. Information We Collect
          </h3>
          <p className="mb-4">
            We collect information you provide directly to us, such as when you
            create an account, make a donation, or contact us. This may include:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Name and email address</li>
            <li>
              Payment information (processed securely by our payment providers)
            </li>
            <li>Device information and usage data</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            2. How We Use Your Information
          </h3>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Provide, maintain, and improve our services</li>
            <li>Process your donations and send receipts</li>
            <li>Send you spiritual content and updates (with your consent)</li>
            <li>Respond to your comments and questions</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            3. Information Sharing
          </h3>
          <p className="mb-4">
            We do not sell or rent your personal information to third parties.
            We may share information with:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Service providers who assist in operating our App (e.g., payment
              processors)
            </li>
            <li>When required by law or to protect our rights</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">4. Data Security</h3>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the Internet is
            100% secure.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">5. Your Choices</h3>
          <p className="mb-4">
            You may update your account information at any time. You can opt out
            of receiving promotional emails by following the instructions in
            those emails.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            6. Children&apos;s Privacy
          </h3>
          <p className="mb-4">
            Our App is not directed to children under 13. We do not knowingly
            collect personal information from children under 13.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            7. Changes to This Policy
          </h3>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new policy on this page.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">8. Contact Us</h3>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact
            us at:
            <br />
            Email: citycrosslink.ministries@gmail.com
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors mt-6"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
