import React from "react";
import heroImage from "../assets/hero-image.jpg";
import { ArrowRight } from "lucide-react";
export const Hero = () => {
  return (
    <div
      id="home"
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <h1 className="mb-5 md:text-7xl text-5xl font-bold">
            {" "}
            <q>PARENTHINK</q>{" "}
          </h1>
          <h2 className="md:text-5xl text-3xl font-light italic">SIAPKAN DIRI</h2>
          <h2 className="md:text-5xl text-3xl mb-5 font-light italic">
            Untuk Si Buah Hati
          </h2>
          <a href="#articles" className="bg-[#c18d5c] inline-flex hover:cursor-pointer flex-row gap-3 px-5 py-2 rounded-full justify-center items-center max-w-fit whitespace-nowrap">
            Pelajari Selengkapnya <ArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};
