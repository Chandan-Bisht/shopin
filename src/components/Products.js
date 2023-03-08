import {
  Favorite,
  FavoriteBorder,
  FilterListOutlined,
  Search,
} from "@mui/icons-material";
import React, { useState } from "react";
import data from "../constants/data";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Products = () => {
  const [isActive, setIsActive] = useState(null);
  const [like, setLike] = useState(false);
  const [hover, setHover] = useState(false);
  const productsoverview = data[0].home[0].products;
  const links = productsoverview[0].links;
  const allproducts = productsoverview[0].all;

  return (
    <section className="px-20 py-5 m-auto max-w-[90rem]">
      <h3 className="text-2xl font-medium text-gray-800 uppercase">
        Product Overview
      </h3>
      <div className="flex items-center justify-between py-8">
        <div className="flex items-center gap-10">
          {links.map((link, index) => (
            <button
              key={index}
              className={classNames(
                " text-md text-gray-500 hover:underline hover:text-gray-900",
                link === isActive ? "text-gray-900 underline" : null
              )}
              onClick={() => setIsActive(link)}
            >
              {link.link_title}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button className="px-6 py-2 text-center text-gray-500 cursor-pointer border border-gray-200 rounded hover:bg-violet-400 hover:text-white">
            <FilterListOutlined className="w-6 h-6 mr-2 hover:text-white" />
            Filter
          </button>
          <button className="px-6 py-2 text-center text-gray-500 cursor-pointer border border-gray-200 rounded hover:bg-violet-400 hover:text-white">
            <Search className="w-6 h-6 mr-2 hover:text-white" />
            Search
          </button>
        </div>
      </div>
      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 place-items-baseline">
          {allproducts.map((product, index) => (
            <div className="col-span-1" key={product.id}>
              <div className="relative group h-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain w-60 h-72"
                />
                <div className="hidden group-hover:flex justify-center absolute inset-x-0 bottom-8 transform translate-y-100 duration-700 ">
                  <button className="px-8 py-2 bg-white text-gray-800 hover:bg-black hover:text-white rounded-full duration-500 ease">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-6">
                <p className="text-gray-500 text-sm">{product.title}</p>
                <div
                  onClick={() => setLike((prevLike) => !prevLike)}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  key={product.id}
                >
                  {like || hover ? (
                    <Favorite className="text-violet-400 cursor-pointer" />
                  ) : (
                    <FavoriteBorder className="text-gray-500 cursor-pointer" />
                  )}
                </div>
              </div>
              <p className="text-gray-800 font-medium text-base">
                &#8377; {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
