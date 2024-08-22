import React from "react";
import image from "../assets/img/03.jpg";

export default function Experts() {
  return (
    <div className="max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2">
      <div className="col-span-1 md:<w-[80%] text-center">
        <img src={image} alt="" />
      </div>
      <div className="col-span-1 flex flex-col justify-center">
        <h1 className="text-violet-600 font-bold mt-4">Learn From Experts</h1>
        <p className="my-2 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam
          reiciendis laborum quisquam explicabo sapiente porro possimus ab
          corporis enim?
        </p>
        <button className="w-[40%] bg-black text-white p-2 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
}
