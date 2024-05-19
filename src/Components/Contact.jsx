import React from "react";
import { CiMail } from "react-icons/ci";
import { FaShippingFast, FaMoneyBillWave, FaGift } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

function Contact() {
  const items = [
    { id: 1, icon: <FaShippingFast size={40} />, name: "Free Shipping" },
    {
      id: 2,
      icon: <FaMoneyBillWave size={40} />,
      name: "Best Price Guarantee",
    },
    { id: 3, icon: <FaGift size={40} />, name: "Free Curbside Pickup" },
    { id: 4, icon: <IoCall size={40} />, name: "Support 24/7" },
  ];
  return (
    <>
      <div className="w-full  mb-2 ">
        <div className="md:flex justify-between bg-green-900 p-5">
          <div className="flex text-white  items-center gap-3">
            <CiMail size={70} />
            <div>
              <h1 className="text-lg font-semibold">
                Sign-up To Our Newsletters
              </h1>
              <p>and receive 20 coupon for first shopping</p>
            </div>
          </div>
          <div className="flex justify-between bg-white px-3 py-2 items-center md:w-[500px] border-2 border-black  rounded-full ">
            <input
              type="text"
              className=" outline-none w-[350px ]"
              placeholder="Your Email Address"
            />
            <button className="bg-green-500 hover:bg-blue-600 text-white p-3 rounded-full">
              Subscribe
            </button>
          </div>
        </div>
        {/* Part2 */}
        <div className="md:flex my-5 justify-around px-5 gap-10 md:mt-10  ">
          {items.map((item) => (
            <div key={item.id} className="flex  my-5 items-center gap-3">
              <div className="bg-gray-200  p-2 rounded-full">{item.icon}</div>
              <div>
                <h1 className="text-lg text-green-600 font-semibold">
                  {item.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Contact;
