"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import {
  FaHeart,
  FaTimes,
  FaCopy,
  FaCreditCard,
  FaCheck,
} from "react-icons/fa";
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";
import Image from "next/image";

// Stripe imports
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

// Initialize Stripe
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const StripeCheckoutForm = ({
  amount,
  onSuccess,
}: {
  amount: number;
  onSuccess: () => void;
  onClose: () => void;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setError(null);

    try {
      const { error: stripeError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement(CardElement)!,
          billing_details: { name },
        });

      if (stripeError) {
        setError(stripeError.message || "An error occurred");
        setProcessing(false);
        return;
      }

      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          amount: amount * 100,
          currency: "usd",
        }),
      });

      const { clientSecret, error: serverError } = await response.json();

      if (serverError) {
        setError(serverError);
        setProcessing(false);
        return;
      }

      const { error: confirmError } = await stripe.confirmCardPayment(
        clientSecret
      );

      if (confirmError) {
        setError(confirmError.message || "Payment failed");
      } else {
        onSuccess();
      }
    } catch (err) {
      setError("An unexpected error occurred");
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-gray-500 mb-1">Name on Card</label>
        <input
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm text-gray-500 mb-1">Card Details</label>
        <div className="p-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-600 focus-within:border-transparent">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": { color: "#aab7c4" },
                },
                invalid: { color: "#9e2146" },
              },
            }}
          />
        </div>
      </div>

      {error && <div className="text-red-600 text-sm">{error}</div>}

      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full bg-purple-700 text-white py-3 rounded-lg font-medium hover:bg-purple-800 transition-colors flex items-center justify-center disabled:opacity-50"
      >
        {processing ? "Processing..." : `Donate $${amount.toFixed(2)}`}
      </button>
    </form>
  );
};

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [activeTab, setActiveTab] = useState<"bank" | "card">("bank");
  const [copied, setCopied] = useState({
    account: false,
    name: false,
    bank: false,
    swift: false,
  });
  const [donationAmount, setDonationAmount] = useState(50);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: "power2.out" }
      );
    }
  }, []);

  const bankDetails = {
    name: "Herbert Segismar",
    account: "01-0071-0330058-00",
    bank: "ANZ",
    SwiftCode: "ANZBNZ22",
  };

  const copyToClipboard = (text: string, field: keyof typeof copied) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [field]: true });
    setTimeout(() => setCopied({ ...copied, [field]: false }), 2000);
  };

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
    setTimeout(() => {
      setShowModal(false);
      setPaymentSuccess(false);
    }, 3000);
  };

  const presetAmounts = [10, 25, 50, 100, 250];

  return (
    <>
      <footer
        ref={footerRef}
        className="bg-white/80 backdrop-blur-md border-t border-purple-200/30 mt-12 py-8 overflow-hidden"
      >
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col items-center text-center relative gap-4">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold text-purple-800">
                Daily Bible Devotional
              </h3>
              <p className="text-xs text-gray-600 capitalize">
                Nourishing your spirit daily.
              </p>
            </div>
            <div>
              <Image
                src="/ChristIsRisen.svg"
                alt="Christ is Risen"
                width={400}
                height={200}
                className="mb-5 md:w-[30vw]"
              />
            </div>
            <div className="flex flex-col items-center justify-center bg-black/70 p-8 rounded-3xl">
              <p className="text-sm text-gray-200 mb-2">
                Made With L<FaHeart className="inline text-red-500" />
                VE For All Believers Worldwide.
              </p>
              <p className="text-green-400 mb-2">
                Email us at{" "}
                <span className="font-bold text-green-500">
                  fountofhopedevotionals@gmail.com
                </span>
              </p>
              <div className="flex w-full items-center justify-center">
                <div className="bg-slate-200 w-[30%] h-[1px]" />
                <div className="bg-slate-200 size-1 rounded-full ml-1" />
                <div className="border border-slate-200 size-2 rounded-full mx-1" />
                <div className="size-4 rounded-full border border-slate-200" />
                <div className="border border-slate-200 size-2 rounded-full mx-1" />
                <div className="bg-slate-200 size-1 rounded-full mr-1" />
                <div className="bg-slate-200 w-[30%] h-[1px]" />
              </div>
              <p className="m-2 text-sm text-gray-400">
                Support us by making a donation, click the button below
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="w-32 h-10 bg-red-500 rounded-full text-white shadow shadow-xs shadow-black border border-red-400 hover:scale-105 transition-all duration-300 easeInOut"
              >
                <div className="flex items-center justify-center gap-4">
                  <p>Donate</p>
                  <FaHeart />
                </div>
              </button>
              <p className="m-2 text-gray-400 text-sm">
                Your donation will help us keep this ministry going.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 text-center footer2">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 mb-4">
              <button
                onClick={() => setShowTerms(true)}
                className="text-xs text-purple-600 hover:text-purple-800"
              >
                Terms of Service
              </button>
              <button
                onClick={() => setShowPrivacy(true)}
                className="text-xs text-purple-600 hover:text-purple-800"
              >
                Privacy Policy
              </button>
            </div>
            <p className="text-xs text-gray-500 capitalize">
              <span className="text-amber-400">&copy;</span>{" "}
              {new Date().getFullYear()} FountOfHope Devotionals. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Donation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => {
                setShowModal(false);
                setPaymentSuccess(false);
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaTimes />
            </button>

            {paymentSuccess ? (
              <div className="text-center py-8">
                <div className="text-green-500 text-5xl mb-4">
                  <FaCheck className="inline-block bg-green-100 rounded-full p-2" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">Your donation was successful.</p>
                <p className="text-sm text-gray-500 mt-2">
                  You will receive an email confirmation shortly.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-purple-800 mb-4">
                  Make a Donation
                </h2>
                <p className="text-gray-600 mb-6">
                  Your support helps us continue our ministry. Thank you for
                  your generosity!
                </p>

                {/* Tabs for donation methods */}
                <div className="flex mb-6 border-b border-gray-200">
                  <button
                    className={`py-2 px-4 font-medium text-sm flex items-center ${
                      activeTab === "bank"
                        ? "text-purple-800 border-b-2 border-purple-800"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("bank")}
                  >
                    <FaCopy className="mr-2" />
                    Bank Transfer
                  </button>
                  <button
                    className={`py-2 px-4 font-medium text-sm flex items-center ${
                      activeTab === "card"
                        ? "text-purple-800 border-b-2 border-purple-800"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("card")}
                  >
                    <FaCreditCard className="mr-2" />
                    Credit/Debit Card
                  </button>
                </div>

                {/* Bank Transfer Details */}
                {activeTab === "bank" && (
                  <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold text-lg mb-3">
                      Bank Transfer Details
                    </h3>

                    <div className="space-y-3">
                      {/* Account Name Field */}
                      <div>
                        <label className="text-sm text-gray-500">
                          Account Name
                        </label>
                        <div className="flex justify-between items-center">
                          <p className="font-medium">{bankDetails.name}</p>
                          <button
                            onClick={() =>
                              copyToClipboard(bankDetails.name, "name")
                            }
                            className="text-purple-600 hover:text-purple-800 ml-2"
                          >
                            <FaCopy />
                          </button>
                        </div>
                        {copied.name && (
                          <span className="text-xs text-green-600">
                            Copied!
                          </span>
                        )}
                      </div>

                      {/* Account Number Field */}
                      <div>
                        <label className="text-sm text-gray-500">
                          Account Number
                        </label>
                        <div className="flex justify-between items-center">
                          <p className="font-medium">{bankDetails.account}</p>
                          <button
                            onClick={() =>
                              copyToClipboard(bankDetails.account, "account")
                            }
                            className="text-purple-600 hover:text-purple-800 ml-2"
                          >
                            <FaCopy />
                          </button>
                        </div>
                        {copied.account && (
                          <span className="text-xs text-green-600">
                            Copied!
                          </span>
                        )}
                      </div>

                      {/* Bank Name Field */}
                      <div>
                        <label className="text-sm text-gray-500">
                          Bank Name
                        </label>
                        <div className="flex justify-between items-center">
                          <p className="font-medium">{bankDetails.bank}</p>
                          <button
                            onClick={() =>
                              copyToClipboard(bankDetails.bank, "bank")
                            }
                            className="text-purple-600 hover:text-purple-800 ml-2"
                          >
                            <FaCopy />
                          </button>
                        </div>
                        {copied.bank && (
                          <span className="text-xs text-green-600">
                            Copied!
                          </span>
                        )}
                      </div>

                      {/* Swift Code Field */}
                      <div>
                        <label className="text-sm text-gray-500">
                          Swift Code
                        </label>
                        <div className="flex justify-between items-center">
                          <p className="font-medium">{bankDetails.SwiftCode}</p>
                          <button
                            onClick={() =>
                              copyToClipboard(bankDetails.SwiftCode, "swift")
                            }
                            className="text-purple-600 hover:text-purple-800 ml-2"
                          >
                            <FaCopy />
                          </button>
                        </div>
                        {copied.swift && (
                          <span className="text-xs text-green-600">
                            Copied!
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Credit Card Donation Form */}
                {activeTab === "card" && (
                  <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold text-lg mb-3">
                      Donate with Visa/MasterCard
                    </h3>

                    <div className="mb-4">
                      <label className="block text-sm text-gray-500 mb-2">
                        Donation Amount ($)
                      </label>
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        {presetAmounts.map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            className={`py-2 rounded border ${
                              donationAmount === amt
                                ? "bg-purple-100 border-purple-600 text-purple-800"
                                : "bg-white border-gray-300 text-gray-700"
                            }`}
                            onClick={() => setDonationAmount(amt)}
                          >
                            ${amt}
                          </button>
                        ))}
                        <input
                          type="number"
                          value={donationAmount}
                          onChange={(e) =>
                            setDonationAmount(Number(e.target.value))
                          }
                          min="1"
                          step="1"
                          className="col-span-3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Or enter custom amount"
                        />
                      </div>
                    </div>

                    <Elements stripe={stripePromise}>
                      <StripeCheckoutForm
                        amount={donationAmount}
                        onSuccess={handlePaymentSuccess}
                        onClose={() => setShowModal(false)}
                      />
                    </Elements>

                    <div className="flex items-center mt-4">
                      <div className="flex">
                        <div className="bg-blue-900 text-white font-bold text-xs px-2 py-1 rounded mr-2">
                          VISA
                        </div>
                        <div className="bg-red-600 text-white font-bold text-xs px-2 py-1 rounded">
                          MC
                        </div>
                      </div>
                      <div className="ml-auto text-xs text-gray-500">
                        Secure & Encrypted
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <p className="text-yellow-700 text-sm">
                    By making a donation, you agree to our{" "}
                    <button
                      onClick={() => {
                        setShowModal(false);
                        setShowTerms(true);
                      }}
                      className="text-purple-600 hover:underline"
                    >
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button
                      onClick={() => {
                        setShowModal(false);
                        setShowPrivacy(true);
                      }}
                      className="text-purple-600 hover:underline"
                    >
                      Privacy Policy
                    </button>
                    . After making your donation, please email us at
                    fountofhopedevotionals@gmail.com with your details so we can
                    properly acknowledge your gift. Fount Of Hope Devotionals is
                    maintained and operated by Mr. Herbert Segismar, the author
                    and founder of this Daily Bible Devotional App.
                  </p>
                </div>
              </>
            )}

            {!paymentSuccess && (
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors mt-2"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      )}

      <TermsOfService isOpen={showTerms} onClose={() => setShowTerms(false)} />
      <PrivacyPolicy
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
      />
    </>
  );
};

export default Footer;
