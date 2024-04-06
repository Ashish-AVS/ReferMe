import React from "react";

const COMPANIES = [
  {
    name: "Apple",
    logo: "https://ik.imagekit.io/interviewstudy/companies/apple.jpeg",
  },
  {
    name: "Cisco",
    logo: "https://ik.imagekit.io/interviewstudy/companies/cisco.jpeg",
  },
  {
    name: "Adobe",
    logo: "https://ik.imagekit.io/interviewstudy/companies/adobe.png",
  },
  {
    name: "Amazon",
    logo: "https://ik.imagekit.io/interviewstudy/companies/amazon.jpeg",
  },
  {
    name: "Apple",
    logo: "https://ik.imagekit.io/interviewstudy/companies/apple.jpeg",
  },
  {
    name: "Cisco",
    logo: "https://ik.imagekit.io/interviewstudy/companies/cisco.jpeg",
  },
  {
    name: "Adobe",
    logo: "https://ik.imagekit.io/interviewstudy/companies/adobe.png",
  },
  {
    name: "Amazon",
    logo: "https://ik.imagekit.io/interviewstudy/companies/amazon.jpeg",
  },
  {
    name: "Apple",
    logo: "https://ik.imagekit.io/interviewstudy/companies/apple.jpeg",
  },
  {
    name: "Cisco",
    logo: "https://ik.imagekit.io/interviewstudy/companies/cisco.jpeg",
  },
  {
    name: "Adobe",
    logo: "https://ik.imagekit.io/interviewstudy/companies/adobe.png",
  },
  {
    name: "Amazon",
    logo: "https://ik.imagekit.io/interviewstudy/companies/amazon.jpeg",
  },
  {
    name: "Apple",
    logo: "https://ik.imagekit.io/interviewstudy/companies/apple.jpeg",
  },
  {
    name: "Cisco",
    logo: "https://ik.imagekit.io/interviewstudy/companies/cisco.jpeg",
  },
  {
    name: "Adobe",
    logo: "https://ik.imagekit.io/interviewstudy/companies/adobe.png",
  },
  {
    name: "Amazon",
    logo: "https://ik.imagekit.io/interviewstudy/companies/amazon.jpeg",
  },
  {
    name: "Apple",
    logo: "https://ik.imagekit.io/interviewstudy/companies/apple.jpeg",
  },
  {
    name: "Cisco",
    logo: "https://ik.imagekit.io/interviewstudy/companies/cisco.jpeg",
  },
  {
    name: "Adobe",
    logo: "https://ik.imagekit.io/interviewstudy/companies/adobe.png",
  },
  {
    name: "Amazon",
    logo: "https://ik.imagekit.io/interviewstudy/companies/amazon.jpeg",
  },
  {
    name: "Apple",
    logo: "https://ik.imagekit.io/interviewstudy/companies/apple.jpeg",
  },
  {
    name: "Cisco",
    logo: "https://ik.imagekit.io/interviewstudy/companies/cisco.jpeg",
  },
  {
    name: "Adobe",
    logo: "https://ik.imagekit.io/interviewstudy/companies/adobe.png",
  },
  {
    name: "Amazon",
    logo: "https://ik.imagekit.io/interviewstudy/companies/amazon.jpeg",
  },
  {
    name: "Apple",
    logo: "https://ik.imagekit.io/interviewstudy/companies/apple.jpeg",
  },
  {
    name: "Cisco",
    logo: "https://ik.imagekit.io/interviewstudy/companies/cisco.jpeg",
  },
  {
    name: "Adobe",
    logo: "https://ik.imagekit.io/interviewstudy/companies/adobe.png",
  },
  {
    name: "Amazon",
    logo: "https://ik.imagekit.io/interviewstudy/companies/amazon.jpeg",
  },
  {
    name: "Apple",
    logo: "https://ik.imagekit.io/interviewstudy/companies/apple.jpeg",
  },
  {
    name: "Cisco",
    logo: "https://ik.imagekit.io/interviewstudy/companies/cisco.jpeg",
  },
  {
    name: "Adobe",
    logo: "https://ik.imagekit.io/interviewstudy/companies/adobe.png",
  },
  {
    name: "Amazon",
    logo: "https://ik.imagekit.io/interviewstudy/companies/amazon.jpeg",
  },
];
export default function Companies() {
  return (
    <div>
      <section className="w-full bg-white">
      <div className="flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div className="w-full mx-auto">
                <h1 className="text-5xl text-center pb-10 font-extrabold">Get referred by employees from 1000+ companies.</h1>
                <p className="text-xl mb-0 text-center">Our referrer network is thousands strong and growing. Get referred to your dream job today, by employees at your dream company..</p>
            </div>
        </div>
      </div>
        <div className="relative items-center w-full px-5 pb-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-8">
          <div className="grid grid-cols-8 grid-rows-5 gap-2">
            {COMPANIES.map((company, idx) => (
              <div className="justify-center p-4 rounded-md items-center border font-bold text-gray-400 mb-4">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="my-6">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
