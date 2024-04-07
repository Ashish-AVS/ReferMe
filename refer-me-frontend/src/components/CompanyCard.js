import React, { useState } from "react";
import Modal from "./Modal";
export default function CompanyCard({ name, logo, sectors }) {
  const [close, setClose] = useState(false);
  
  return (
    <>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full  hover:scale-105 cursor-pointer ">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <img
          alt="team"
          className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src={logo}
        />
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">{name}</h2>
          <p className="text-gray-500">
            {sectors.map((sector, idx) => (
              <span>{` ${sector} |`}</span>
            ))}
          </p>
        </div>
        <div>
          <button className="w-8 h-8 hover:bg-gray-300 bg-gray-200 rounded-full flex items-center justify-center" onClick={() => setClose(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
      {close && <Modal companyName={name} setClose={setClose} />}
    </>
  );
}
