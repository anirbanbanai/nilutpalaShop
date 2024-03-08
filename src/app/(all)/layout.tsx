"use client";
import React, { ReactNode } from "react";
import { NavbarWithSearch } from "@/app/(all)/components/Navbar";


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavbarWithSearch />
      <div className="pt-20 lg:pt-32 xl:pt-24">
        {children}
        </div>
    </div>
  );
};

export default Layout;
