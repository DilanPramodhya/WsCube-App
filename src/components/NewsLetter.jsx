import React from "react";

export default function NewsLetter() {
  return (
    <div className="bg-[#f1f3d6] p-4">
      <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
        <div className='m-2'>
          <h1 className="text-[20px] md:text-[40px] font-bold text-gray-800">
            Wan't to learn latest IT Skills
          </h1>
          <span className="text-gray-600">
            Sign up to our newsletter and stay up to date
          </span>
        </div>
        <div className='m-2'>
          <input
            type="text"
            className="sm:w-full rounded mb-2 p-3 mr-2 text-slate-600"
            placeholder="Enter Email"
          />
          <button className="bg-black text-white p-3 mt-2 rounded">
            Get Started
          </button>
          <p className="text-gray-600 mt-2">
            We care the Protection of your data. Read our {" "}
            <a href="/" className="text-black">
              privacy policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
