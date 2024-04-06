import React from "react";
import Hero from "../components/Hero";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Companies from "../components/Companies";
import Testimonials from "../components/Testimonials";
// https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/
export default function Home() {
  return (
    <div>
      <Hero />
      <Companies />
      <Testimonials />
    </div>
  );
}
