import { FaTimes } from "react-icons/fa";

interface TermsOfServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfService = ({ isOpen, onClose }: TermsOfServiceProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes />
        </button>

        <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">
          Terms of Service
        </h2>

        <div className="prose max-w-none">
          <p className="text-sm text-gray-500 mb-4">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            1. Acceptance of Terms
          </h3>
          <p className="mb-4">
            By accessing or using the Daily Bible Devotional App ({`"the App"`}
            ), you agree to be bound by these Terms of Service. If you do not
            agree to these terms, please do not use our App.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            2. Description of Service
          </h3>
          <p className="mb-4">
            The Daily Bible Devotional App provides daily biblical content,
            devotionals, and spiritual resources to users. We reserve the right
            to modify or discontinue any aspect of the App at any time.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">3. User Accounts</h3>
          <p className="mb-4">
            When you create an account with us, you must provide accurate and
            complete information. You are responsible for safeguarding your
            password and for all activities that occur under your account.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            4. Donations and Payments
          </h3>
          <p className="mb-4">
            All donations made through the App are processed by third-party
            payment processors. By making a donation, you agree to their terms
            and conditions. All donations are final and non-refundable.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            5. Intellectual Property
          </h3>
          <p className="mb-4">
            All content provided through the App, including but not limited to
            text, graphics, logos, and images, is the property of Fount Of Hope
            Devotionals or its content suppliers and protected by international
            copyright laws.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            6. Limitation of Liability
          </h3>
          <p className="mb-4">
            Fount Of Hope Devotionals shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages resulting
            from your use of or inability to use the App.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            7. Changes to Terms
          </h3>
          <p className="mb-4">
            We reserve the right to modify these terms at any time. We will
            provide notice of significant changes through the App or by other
            means.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            8. Contact Information
          </h3>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at:
            <br />
            Email: fountofhopedevotionals@gmail.com
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

export default TermsOfService;
