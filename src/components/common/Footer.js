import { FacebookOutlined, Instagram, Pinterest } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-neutral-800">
      <div className="max-w-[80rem] m-auto">
        <div className="py-16 grid grid-cols-4 gap-16">
          <div className="col-span-1">
            <h3 className="text-base uppercase text-white font-medium tracking-wider">
              Categories
            </h3>
            <div className="py-6 space-y-2 text-sm">
              <NavLink
                to=""
                className="block text-gray-400 hover:text-violet-400"
              >
                Men
              </NavLink>
              <NavLink
                to=""
                className="block text-gray-400 hover:text-violet-400"
              >
                Women
              </NavLink>
              <NavLink
                to=""
                className="block text-gray-400 hover:text-violet-400"
              >
                Bag
              </NavLink>
              <NavLink
                to=""
                className="block text-gray-400 hover:text-violet-400"
              >
                Electronics
              </NavLink>
              <NavLink
                to=""
                className="block text-gray-400 hover:text-violet-400"
              >
                Jewellery
              </NavLink>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-base uppercase text-white font-medium tracking-wider">
              Help
            </h3>
            <div className="py-6 space-y-2 text-sm">
              <NavLink
                to=""
                className="block text-gray-400 hover:text-violet-400"
              >
                Track Order
              </NavLink>
              <NavLink
                to=""
                className="block text-gray-400 hover:text-violet-400"
              >
                Returns
              </NavLink>
              <NavLink
                to=""
                className="block text-gray-400 hover:text-violet-400"
              >
                Shipping
              </NavLink>
              <NavLink
                to=""
                className="block text-gray-400 hover:text-violet-400"
              >
                FAQ
              </NavLink>
            </div>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-1">
                <h3 className="text-base uppercase text-white font-medium tracking-wider">
                  Get in touch
                </h3>
                <p className="py-6 text-gray-400 text-sm">
                  Any questions? Let us know in store at 6th floor, 425 Green
                  Paradise, Mumbai, IN or call us on (+91) 8652190674
                </p>
                <div className="flex items-center space-x-2">
                  <FacebookOutlined className="text-gray-400 hover:text-violet-400" />
                  <Instagram className="text-gray-400 hover:text-violet-400" />
                  <Pinterest className="text-gray-400 hover:text-violet-400" />
                </div>
              </div>
              <div className="col-span-1">
                <h3 className="text-base uppercase text-white font-medium tracking-wider">
                  Newsletter
                </h3>
                <form action="" className="py-6 space-y-4">
                  <input
                    type="text"
                    placeholder="email@example.com"
                    className="w-full box-border bg-transparent py-1 border-b-2 border-gray-600 text-sm text-gray-400 placeholder:text-gray-400 outline-none focus:border-violet-400 transition duration-300 ease-linear"
                  />
                  <button
                    type="button"
                    className="rounded-full px-12 uppercase font-semibold py-3 text-white bg-violet-400 cursor-pointer hover:text-violet-400 hover:bg-white ease-linear duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-400" />
        <p className="py-8 text-center text-gray-400 text-sm">
          Copyright &copy;2023 All rights reserved | Clothing Company Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
