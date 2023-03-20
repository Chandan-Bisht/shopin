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
  const [active, setActive] = useState(false);
  const [isSelected, setIsSelected] = useState(0);
  const [like, setLike] = useState(false);
  const [hover, setHover] = useState(false);
  const productsoverview = data[0].home[0].products;
  const allproducts = productsoverview[0].all;
  const [items, setItems] = useState(allproducts);

  const handleClick = (id) => {
    setIsSelected(id);
    setLike((prev) => !prev);
  };

  const filterItem = (categItem) => {
    const updatedItems = allproducts.filter((curElem) => {
      return curElem.category === categItem;
    });
    setActive(!active);
    setItems(updatedItems);
  };

  return (
    <section className="px-20 py-5 m-auto max-w-[90rem]">
      <h3 className="text-2xl font-medium text-gray-800 uppercase">
        Product Overview
      </h3>
      <div className="flex items-center justify-between py-8">
        <div className="flex items-center gap-10">
          <button
            className={classNames(
              " text-md text-gray-500 hover:underline hover:text-gray-900",
              active ? "text-gray-900 underline" : null
            )}
            onClick={() => setItems(allproducts)}
          >
            All Products
          </button>
          <button
            className={classNames(
              " text-md text-gray-500 hover:underline hover:text-gray-900",
              active ? "text-gray-900 underline" : null
            )}
            onClick={() => filterItem("women")}
          >
            Women
          </button>
          <button
            className={classNames(
              " text-md text-gray-500 hover:underline hover:text-gray-900",
              active ? "text-gray-900 underline" : null
            )}
            onClick={() => filterItem("men")}
          >
            Men
          </button>
          <button
            className={classNames(
              " text-md text-gray-500 hover:underline hover:text-gray-900",
              active ? "text-gray-900 underline" : null
            )}
            onClick={() => filterItem("bag")}
          >
            Bag
          </button>
          <button
            className={classNames(
              " text-md text-gray-500 hover:underline hover:text-gray-900",
              active ? "text-gray-900 underline" : null
            )}
            onClick={() => filterItem("electronics")}
          >
            Electronics
          </button>
          <button
            className={classNames(
              " text-md text-gray-500 hover:underline hover:text-gray-900",
              active ? "text-gray-900 underline" : null
            )}
            onClick={() => filterItem("jewelery")}
          >
            Jewellery
          </button>
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
          {items.map((product) => (
            <div className="col-span-1" key={product.id}>
              <div className="relative group h-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain w-72 h-72 group-hover:scale-110 ease-in-out duration-500"
                />
                <div className="group-hover:bottom-8 flex justify-center absolute w-full -bottom-full duration-500 ease-in-out">
                  <button className="px-8 py-2 bg-gray-50 text-gray-800 hover:bg-black hover:text-white rounded-full">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-6">
                <p className="text-gray-500 text-base">{product.title}</p>
                <div
                  onClick={() => handleClick(product.id)}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  key={product.id}
                >
                  {isSelected === product.id || hover ? (
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
