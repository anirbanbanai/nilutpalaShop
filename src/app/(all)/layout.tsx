"use client";
import React, { ReactNode } from "react";
import { NavbarWithSearch } from "../components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavbarWithSearch />
      <div className="pt-24">{children}</div>
    </div>
  );
};

export default Layout;
