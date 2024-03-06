import React from "react";
import { TabsDefault } from "@/app/(all)/components/Tabs";
import MiddlePart from "@/app/(all)/components/middlePart";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto ">
      <div className=" z-10">
        <TabsDefault />
        <MiddlePart />
      </div>
    </main>
  );
}
