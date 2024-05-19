import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import Badge from "./Badge";
function Header() {
  return (
    <>
      <div className="flex justify-between bg-gray-800 w-full fixed top-0  px-9 py-5  items-center z-10">
        <div className="flex items-center gap-3">
          <MdOutlineMenu size={30} className="md:hidden text-white" />
          <h1 className="text-xl md:text-2xl font-semibold text-white ">E-Commerce</h1>
        </div>
        <div className="flex  items-center  rounded-full px-3 py-2  md:bg-gray-100">
          <input
            type="text"
            name=""
            placeholder="Search"
            className=" hidden md:flex text-lg rounded-full w-[400px] outline-none bg-gray-100    "
            id=""
          />

          <IoSearch size={30} className="text-white md:text-black" />
        </div>
        <div className="flex items-center gap-5">
          <div className="md:border-2 rounded-full p-2">
          <IoIosPerson className="text-3xl text-white  md:text-3xl " />
          </div>
          <div className="md:border-2 rounded-full p-2">
            <Badge ></Badge>
          <FaShoppingCart className="text-3xl text-white md:text-3xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
