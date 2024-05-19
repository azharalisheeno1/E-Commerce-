import React from "react";
import banner1 from "../assets/banner__1.webp";
import banner2 from "../assets/banner__2.webp";

function Banners() {
  return (
    <>
      <div className="w-full px-7 md:px-0  ">
        <div className="md:flex gap-72  my-10 mx-auto  w-[95%]">
          <div className=" rounded-full">
            <img
              src={banner1}
              className="rounded-xl mb-5 hover:scale-95"
              alt=""
            />
          </div>

          <div className=" rounded-full">
            <img src={banner2} className="rounded-xl hover:scale-95" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banners;
