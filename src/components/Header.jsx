import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { RiCloseCircleFill } from "react-icons/ri";

export default function Header() {
  const [toogle, setToogle] = useState(false);
  return (
    <div className="bg-[#2699fb] p-4 bold">
      <div className="max-w-[1240px] items-center flex justify-between mx-auto">
        <div className="text-4xl font-bold">WsCube Tech</div>
        {toogle ? (
          <RiCloseCircleFill
            onClick={() => setToogle(!toogle)}
            className="text-2xl text-white md:hidden block"
          />
        ) : (
          <TiThMenu
            onClick={() => setToogle(!toogle)}
            className="text-2xl text-white md:hidden block"
          />
        )}

        <ul className="hidden md:flex text-white gap-10">
          <li>Home</li>
          <li>Company</li>
          <li>Resourses</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* Resoonsive Menu */}
        <ul
          className={`duration-500 md:hidden w-full h-screen text-white fixed bg-black top-[71px] ${
            toogle ? "left-[0]" : "left-[-100%]"
          } left-[-100]`}
        >
          <li className="p-5">Home</li>
          <li className="p-5">About</li>
          <li className="p-5">Resourses</li>
          <li className="p-5">Company</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
}
