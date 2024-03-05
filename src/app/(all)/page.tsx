"use client";

import { TabsDefault } from "../components/Tabs";
import MiddlePart from "../components/middlePart";

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
