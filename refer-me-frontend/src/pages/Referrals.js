import React from "react";
import CompanyCard from "../components/CompanyCard";
import { COMPANIES } from "../constants";
import Search from "../components/Search";

export default function Referrals() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="flex flex-col px-32 py-24 mx-auto">
          <div className="w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
              Get referred to over{" "}
              <span className="text-violet-600">1000+ companies</span>
            </h1>
            <p className="lg:w-2/3 leading-relaxed text-base">
              Select a company you want a referral for, enter the URL for the
              job posting that you want, and send your profile off to our
              referrers!
            </p>
          </div>
          <Search />
          <h1 className="sm:text-3xl text-xl font-bold title-font mb-4 text-gray-900">
            Companies
          </h1>
          {/* Company List */}
          <div className="flex flex-wrap -m-2">
            {COMPANIES.map((company, idx) => (
              <CompanyCard
                name={company.name}
                logo={company.logo}
                sectors={company.sectors}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
