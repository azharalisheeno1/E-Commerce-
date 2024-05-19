import React from "react";
import image1 from "../assets/feature__1.webp";
import image2 from "../assets/product__1.webp";
import image3 from "../assets/Oranges.jpg";
import image4 from "../assets/onion.png";
import image5 from "../assets/product__5.webp";

import { IoBagHandle } from "react-icons/io5";
function FeatureSectionOne() {
  const products2 = [
    {
      id: 1,
      name: "Dried Mango",
      price: "RS: 500",
      img: image2,
    },
    {
      id: 2,
      name: "Orange",
      price: "RS: 400",
      img: image3,
    },
    {
      id: 3,
      name: "onion",
      price: "RS: 200",
      img: image4,
    },
    {
      id: 4,
      name: "Tomato",
      price: "RS: 150",
      img: image5,
    },
  ];

  return (
    <>
      <div className="w-full  h-full my-10 px-10 ">
        <div className="md:flex justify-between items-center  ">
          <div className="mb-5">
            <h1 className="text-2xl mb-2 md:text-3xl font-semibold">Fruits & Vegetables</h1>
            <p>
              Buy farm fresh fruits and vegetables online at the best prices
            </p>
          </div>
          <div className="flex gap-5  justify-center items-center text-center">
            <h1 className="bg-green-500 hover:bg-green-600 w-40 text-white px-3 py-1 rounded-full">
              Fruits
            </h1>
            <h1 className=" px-3 py-1 hover:text-green-400 rounded-full">
              Vegetables
            </h1>
            <h1 className=" px-3 py-1 text-sm rounded-full hover:text-green-400">
              Bakers
            </h1>
          </div>
        </div>

        <div className="md:flex gap-5 mt-10">
          <div>
            <img src={image1} className="w-full h-full " alt="" />
          </div>

          {products2.map(({ id, name, price, img }) => (
            <div key={id}>
              <div className="border border-gray-200 hover:scale-105 p-3 my-2 md:my-0 md:w-[300px] rounded-lg">
                <img src={img} />

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

export default FeatureSectionOne;
