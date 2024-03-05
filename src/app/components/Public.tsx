import React from "react";
import img from "@/assests/istockphoto-179875636-612x612.jpg";
import Image from "next/image";
import data from "@/data/data.json";
import { Button } from "@material-tailwind/react";
const Public = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3">
      {data?.map((m) => (
        <div className="p-3 m-3 border-2 rounded-lg" key={m.img}>
          <h2 className="text-xl font-semibold mb-2"> {m.name}</h2>
          <Image width={550} height={333} src={m.img} alt="img" />

          <div className="flex justify-between items-center gap-3 mt-3">
            <p className=""> Price : {m.price} tk</p>
            <Button
              placeholder={""}
              color="red"
              size="md"
              className="rounded-lg "
            >
              Buy
            </Button>
            <Button
              placeholder={""}
              color="blue"
              size="md"
              className="rounded-lg "
            >
              Add to Cart
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Public;
