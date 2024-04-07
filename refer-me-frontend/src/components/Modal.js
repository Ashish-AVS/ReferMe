import React, { useState } from "react";

export default function Modal({ companyName = "Cisco" }) {
  const [close, setClose] = useState(true);
  return (
    close && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-4">
              Request a referral at {companyName}
            </h1>

            <button
              className="text-gray-500"
              onClick={() => setClose((p) => !p)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className="mb-4">
            Welcome to GetReferred! Please fill out the following information to
            refer yourself for a job:
          </p>
          <div className="mb-4">
            <label htmlFor="resume" className="block mb-2">
              Upload Resume:
            </label>
            <input
              type="file"
              id="resume"
              className="border border-gray-300 px-4 py-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="jobUrl" className="block mb-2">
              Job URL:
            </label>
            <input
              type="text"
              id="jobUrl"
              className="border border-gray-300 px-4 py-2 rounded w-full"
            />
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Disclaimer: By referring yourself for this job, you agree to the
            terms and conditions.
          </p>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message to Referrer:
            </label>
            <textarea
              id="message"
              className="border border-gray-300 px-4 py-2 rounded w-full"
              rows="4"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Refer Me
            </button>
          </div>
        </div>
      </div>
    )
  );
}
