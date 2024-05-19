import React from "react";

function Footer() {
  return (
    <>
      <footer className="border border-t-2 border-gray-200 ">
        <div className="w-full mx-auto px-4 py-10">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 text-center md:text-left">
              <h5 className="uppercase mb-6 font-bold">Sheena E-Commerce</h5>
              <p className="mb-4">Providing quality services since 2020.</p>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-8 text-center md:text-left">
            <p className=" text-center">
              © 2024 Sheena E-commerce. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
