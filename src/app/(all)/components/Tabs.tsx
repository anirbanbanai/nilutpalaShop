"use client"
import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import Public from "./Public";
import Privet from "./Privet";
   
  export function TabsDefault() {
    const data = [
      {
        label: "Items",
        value: "items",
        desc: <Public/>,
      },
      {
        label: "Inventory",
        value: "inventory",
        desc: <Privet/> ,
      },
      {
        label: "Customs",
        value: "customs",
        desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      }
    ];
   
    return (
      <Tabs  value="items">
        <TabsHeader className="z-10" placeholder={""}>
          {data.map(({ label, value }) => (
            <Tab placeholder={""} key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody placeholder={""}>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }