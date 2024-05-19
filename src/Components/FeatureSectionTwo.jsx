import React from "react";
import image1 from "../assets/Baby care products.jpg";
import image2 from "../assets/Baby Cream.jpg";
import image3 from "../assets/Baby Powder.jpg";
import image4 from "../assets/Baby Shampoo.jpg";
import image5 from "../assets/Baby Wipes.jpg";

import { IoBagHandle } from "react-icons/io5";
function FeatureSectionTwo() {
  const products3 = [
    {
      id: 1,
      name: "Baby Cream",
      price: "RS: 500",
      img: image2,
    },
    {
      id: 2,
      name: "Baby Powder",
      price: "RS: 400",
      img: image3,
    },
    {
      id: 3,
      name: "Jewel Cranberries",
      price: "RS: 600",
      img: image4,
    },
    {
      id: 4,
      name: "Almond organic",
      price: "RS: 200",
      img: image5,
    },
  ];

  return (
    <>
      <div className="w-full  h-full my-10 px-10 ">
        <div className="md:flex justify-between items-center  ">
          <div className="mb-5">
            <h1 className="text-2xl mb-2 md:text-3xl font-semibold">Baby Products</h1>
            <p>
              Buy best quality baby products online from big-basket stop near
              you.
            </p>
          </div>
          <div className="flex gap-5  justify-center items-center text-center">
            <h1 className="bg-green-500 hover:bg-green-600 w-40 text-white px-3 py-1 rounded-full">
            Tiny Tots
            </h1>
            <h1 className=" px-3 py-1 hover:text-green-400 rounded-full">
            Lovable Lambs
            </h1>
            <h1 className=" px-3 py-1 text-sm rounded-full hover:text-green-400">
            Sweet Sprouts
            </h1>
          </div>
        </div>

        <div className="md:flex gap-5 mt-10">
          <div>
            <img src={image1} className="w-full rounded-xl h-full " alt="" />
          </div>

          {products3.map(({ id, name, price, img }) => (
            <div key={id}>
              <div className="border border-gray-200  p-3 my-2 md:my-0 md:w-[300px] rounded-lg">
                <img src={img} className="h-72 mx-auto hover:scale-105" />

                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-lg font-semibold ">{name}</h1>
                    <h2 className="text-md font-semibold">{price}</h2>
                  </div>
                  <button className="bg-green-600 hover:bg-blue-600 text-white p-2 rounded-full">
                    <IoBagHandle size={30} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FeatureSectionTwo;
