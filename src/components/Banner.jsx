import React from "react";
import { ReactTyped } from "react-typed";

export default function Banner() {
  return (
    <div className="bg-[#f1f3d6] w-full md:py-60 py-60">
      <div className="max-w-[1240px] mx-auto text-center">
        <div className="text-green-800 font-bold text-2xl md:text-4xl">
          Learn With US
        </div>
        <h2 className="text-red-800 font-bold text-6xl md:text-8xl mt-4">
          Grow With US .
        </h2>
        <div className="text-blue-800 font-bold text-4xl md:text-6xl mt-4">
          Learn{" "}
          <ReactTyped
            strings={[
              "Web Development",
              "Digital Marketing",
              "Ethical Hacking",
            ]}
            typeSpeed={100}
            loop={true}
            backSpeed={50}
          />
        </div>
        <button className="bg-black text-white  p-3 w-40 rounded mt-10">
          Get Started
        </button>
      </div>
    </div>
  );
}
