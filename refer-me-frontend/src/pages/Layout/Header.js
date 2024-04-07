import React from "react";
import { Link } from "react-router-dom";

const LINKS = [
    {
        name: "Ask Referral",
        link: "/referrals"
    },
    {
        name: "Give Referral",
        link: "/referrals"
    },
    {
        name: "Find Openings",
        link: "/referrals"
    },
    {
        name: "About",
        link: "/about"
    },
    {
        name: "Contact",
        link: "/contact"
    }
]

export default function Header() {
  return (
    <header className="w-full max-w-7xl container mx-auto">
      <div className="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <Link
            className="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"
            to="/"
          >
            {" "}
            GetReferred{" "}
          </Link>
          <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
              <path
                x-show="!open"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                x-show="open"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
                style={{"display": "None"}}
              ></path>
            </svg>
          </button>
        </div>

        <nav className="flex-col items-center flex-grow hidden border-blue-600 md:pb-0 md:flex md:justify-end md:flex-row lg:border-l-2 lg:pl-2">
          {
            LINKS.map((link, idx) => (
                <Link
                    className="px-4 py-2 mt-2 text-md text-gray-700 font-bold md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline"
                    to={link.link}
                    key={link.idx}
                >
                    {link.name}
                </Link>
                ))
          }
          <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
            <button className="items-center block px-10 py-2.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Sign in
            </button>
            <button className="items-center block px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Sign up
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
