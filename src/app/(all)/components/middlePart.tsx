"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { PiMessengerLogoFill } from "react-icons/pi";

const MiddlePart = () => {
  return (
    <div className="bg-gray-300 w-20 flex flex-col  items-center fixed z-30 top-[40%] right-0 p-2 rounded-3xl ">

      <button className="flex flex-col justify-center items-center">
        <div className="animate-ping rounded-full  bg-sky-400 opacity-75 h-4 w-4 " />
        <PiMessengerLogoFill
          className="animate-bounce  text-4xl"
          style={{ display: "inline" }}
        />
      </button>
      <button className="flex flex-col justify-center items-center">
        <div className="animate-ping rounded-full  bg-sky-400 opacity-75 h-4 w-4 " />
          <FaWhatsapp
            className="animate-bounce  text-4xl"
            style={{ display: "inline" }}
          />
      </button>


    </div>
  );
};

export default MiddlePart;
