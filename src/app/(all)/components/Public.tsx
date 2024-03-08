"use client"
import React from "react";
import img from "@/assests/istockphoto-179875636-612x612.jpg";
import Image from "next/image";
import data from "@/data/data.json";
import { Button } from "@material-tailwind/react";
import { FcAddDatabase, FcPaid } from "react-icons/fc";
import { CiShoppingCart } from "react-icons/ci";
const Public = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3">
      {data?.map((m) => (
        <div className="p-3 m-3 border-2 rounded-lg" key={m.img}>
          <h2 className="text-xl font-semibold mb-2"> {m.name}</h2>
          <Image width={550} height={333} src={m.img} alt="img" />

          <div className="flex justify-between items-center gap-3 mt-3">
            <p className=""> Price : <span className="font-bold">{m.price} tk</span></p>

         

            <button className="text-xs font-semibold bg-red-500 px-3 py-2 rounded-2xl flex gap-1 items-center text-black"> <FcAddDatabase className="text-2xl"/>Buy</button>

            <button className="text-xs font-semibold bg-[#e1e0e0] px-3 py-2 rounded-2xl flex gap-1 items-center text-black"> <CiShoppingCart className="text-3xl"/>Add to card</button>

            {/* <Button
              placeholder={""}
             
              size="sm"
              className="rounded-lg flex gap-2 items-center bg-blue-gray-200 text-black"
            > <CiShoppingCart className="text-3xl"/>
             <span className=""> Add to cart</span>
            </Button> */}

          </div>
        </div>
      ))}
    </div>
  );
};

export default Public;
