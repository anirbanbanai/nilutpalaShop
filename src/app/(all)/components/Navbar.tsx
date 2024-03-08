"use client"
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineInventory } from "react-icons/md";
import { FcHome, FcPaid } from "react-icons/fc";
 
export function NavbarWithSearch() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
   <Link href="/" className="text-xl text-black font-semibold flex items-center gap-2"><FcHome/> Home</Link>
   <Link href="/inventory" className="text-xl text-black font-semibold flex items-center gap-2"><MdOutlineInventory/> Inventory</Link>
   <Link href="/cart" className="text-xl text-black font-semibold flex items-center gap-2"><FcPaid/> Cart</Link>
    </ul>
  );
 
  return (
    <Navbar placeholder={""} className="fixed  z-20 top-0 mx-auto  px-4 py-2 lg:px-8 lg:py-4">
      
      <div className="container mx-auto flex flex-wrap items-center justify-between text-blue-gray-900">

       <h1 className="text-5xl text-blue-500 font-bold hidden md:flex"><span className="text-red-500">Nilutpala</span> Shop</h1>

       <h1 className="text-3xl text-blue-500 font-bold md:hidden "><span className="text-red-500">Nilutpala</span> Shop</h1>

        <div className="hidden lg:block">{navList}</div>
        <div className="hidden items-center gap-x-2 lg:flex">
          <div className="relative flex w-full gap-2 md:w-max">
            <Input crossOrigin={""}
              type="search"
              placeholder="Search"
              containerProps={{
                className: "min-w-[288px]",
              }}
              className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="!absolute left-3 top-[13px]">
          
              <CiSearch/>
            </div>
          </div>
          <Button placeholder={""} color="yellow" size="md" className="rounded-lg ">
            Search
          </Button>
        </div>
        <IconButton placeholder={""}
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
            <div className="relative w-full gap-2 md:w-max">
              <Input crossOrigin={""}
                type="search"
                placeholder="Search"
                containerProps={{
                  className: "min-w-[288px]",
                }}
                className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div className="!absolute left-3 top-[13px]">
               <CiSearch className="text-black  items-center"/>
              </div>
            </div>
            <Button placeholder={""} color="yellow" size="md" className="mt-1 rounded-lg sm:mt-0">
              Search
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}