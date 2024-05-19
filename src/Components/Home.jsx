import React from "react";

function Home() {
  return (
    <>
      <div className="w-full mt-20 mb-5 ">
        <div className="flex flex-col lg:flex-row justify-center pt-8 gap-8 px-10 mx-auto">
          {/* Large Image */}
          <div className="h-64 lg:h-screen w-full lg:w-2/3 bg-center bg-cover bgimage">
            <div className="my-4 lg:my-40 mx-4 lg:mx-10">
              <h1 className="text-lg lg:text-2xl my-2 md:text-2xl">
                100% Original Dry Fruits
              </h1>
              <h1 className="text-2xl lg:text-6xl font-bold md:text-5xl">
                Dried Fruits Best <br /> Healthy
              </h1>
              <p className="text-gray-500 mt-4 lg:mt-20">Starting at</p>
              <h2 className="text-xl md:text-3xl text-blue-500">Rs:1,000</h2>
              <button className="bg-green-500 rounded-full px-2 py-2 mt-3 md:mt-5  w-28 md:w-48 text-white font-semibold hover:bg-green-600">
                Shop Now
              </button>
            </div>
          </div>
          {/* Two Smaller Images */}
          <div className="w-full lg:w-1/3 flex flex-col gap-5">
            <div className="h-64 lg:h-1/2 bg-center bg-cover img2">
              <div className="my-12 lg:my mx-4 ">
                <h1 className="text-xl text-white font-bold md:text-3xl">
                  Best Yummy Pizza
                </h1>
                <p className="text-white mt-4 lg:mt-5">Starting at</p>
                <h2 className="text-lg md:text-xl text-white">Rs: 800</h2>
                <button className="bg-green-500 rounded-full px-2 py-2 mt-3 md:mt-5  w-28 md:w-28 text-white font-semibold hover:bg-green-600">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="h-64 lg:h-1/2 bg-center bg-cover  img3">
              <div className="my-12 lg:my mx-4 ">
                <h1 className="text-xl  font-bold md:text-3xl">
                  Best Yummy Chips
                </h1>
                <p className="text-gray-500 mt-4 lg:mt-8">Starting at</p>
                <h2 className="text-lg md:text-xl text-blue-500">Rs:1,000</h2>
                <button className="bg-green-500 rounded-full px-2 py-2 mt-3 md:mt-5  w-28 md:w-28 text-white font-semibold hover:bg-green-600">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
