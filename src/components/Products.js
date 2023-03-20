import {
  Circle,
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
  const [filterSelected, setFilterSelected] = useState(false);
  const [search, setSearch] = useState(false);
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

  const handleFilterClick = () => {
    setFilterSelected(!filterSelected);
    setSearch(false);
  };

  const handleSearch = () => {
    setFilterSelected(false);
    setSearch(!search);
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
          <button
            onClick={handleFilterClick}
            className="px-6 py-2 text-center text-gray-500 cursor-pointer border border-gray-200 rounded hover:bg-violet-400 hover:text-white"
          >
            <FilterListOutlined className="w-6 h-6 mr-2 hover:text-white" />
            Filter
          </button>
          <button
            onClick={handleSearch}
            className="px-6 py-2 text-center text-gray-500 cursor-pointer border border-gray-200 rounded hover:bg-violet-400 hover:text-white"
          >
            <Search className="w-6 h-6 mr-2 hover:text-white" />
            Search
          </button>
        </div>
      </div>
      <div
        className={classNames(
          "bg-gray-100 p-10 ease-in-out duration-500",
          filterSelected ? "block translate-y-0" : "hidden translate-y-full"
        )}
      >
        <div className="grid grid-cols-4 gap-16">
          <div className="col-span-1">
            <h3 className="text-base font-semibold text-gray-800">Sort By</h3>
            <div className="py-4 space-y-1">
              <button className="block text-base text-gray-400 hover:text-violet-400 hover:underline">
                Default
              </button>
              <button className="block text-base text-gray-400 hover:text-violet-400 hover:underline">
                Popularity
              </button>
              <button className="block text-base text-gray-400 hover:text-violet-400 hover:underline">
                Average rating
              </button>
              <button className="block text-base text-violet-400 underline">
                Newness
              </button>
              <button className="block text-base text-gray-400 hover:text-violet-400 hover:underline">
                Price:Low to High
              </button>
              <button className="block text-base text-gray-400 hover:text-violet-400 hover:underline">
                Price:High to Low
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-base font-semibold text-gray-800">Price</h3>
            <div className="py-4 space-y-1">
              <button className="block text-base text-violet-400 underline">
                All
              </button>
              <button className="block text-base text-gray-400 hover:text-violet-400 hover:underline">
                Rs. 149 to Rs. 499
              </button>
              <button className="block text-base text-gray-400 hover:text-violet-400 hover:underline">
                Rs. 499 to Rs. 999
              </button>
              <button className="block text-base text-gray-400 hover:text-violet-400 hover:underline">
                Rs. 999 to Rs. 2999
              </button>
              <button className="block text-base text-gray-400 hover:text-violet-400 hover:underline">
                Rs. 2999 to Rs. 4999
              </button>
              <button className="block text-base text-gray-400 hover:text-violet-400 hover:underline">
                Rs. 4999 to Rs. 80000
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-base font-semibold text-gray-800">Color</h3>
            <div className="py-4 space-y-1">
              <button className="block text-base text-violet-400 underline">
                <Circle className="w-5 h-5 text-black mr-2" />
                Black
              </button>
              <button className="block text-base text-gray-400 hover:text-violet-400 hover:underline">
                <Circle className="w-5 h-5 text-blue-900 mr-2" />
                Blue
              </button>
              <button className="block text-base text-gray-400 hover:text-violet-400 hover:underline">
                <Circle className="w-5 h-5 text-gray-900 mr-2" />
                Grey
              </button>
              <button className="block text-base text-gray-400 hover:text-violet-400 hover:underline">
                <Circle className="w-5 h-5 text-green-900 mr-2" />
                Green
              </button>
              <button className="block text-base text-gray-400 hover:text-violet-400 hover:underline">
                <Circle className="w-5 h-5 text-red-900 mr-2" />
                Red
              </button>
              <button className="block text-base text-gray-400 hover:text-violet-400 hover:underline">
                <Circle className="w-5 h-5 text-white mr-2" />
                White
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-base font-semibold text-gray-800">Tags</h3>
            <div className="py-4 flex flex-wrap items-center gap-2">
              <button className="px-3 py-px bg-transparent border rounded-full border-gray-300 text-gray-400 cursor-pointer hover:text-violet-400 hover:border-violet-400">
                Fashion
              </button>
              <button className="px-3 py-px bg-transparent border rounded-full border-gray-300 text-gray-400 cursor-pointer hover:text-violet-400 hover:border-violet-400">
                Lifestyle
              </button>
              <button className="px-3 py-px bg-transparent border rounded-full border-gray-300 text-gray-400 cursor-pointer hover:text-violet-400 hover:border-violet-400">
                Denim
              </button>
              <button className="px-3 py-px bg-transparent border rounded-full border-gray-300 text-gray-400 cursor-pointer hover:text-violet-400 hover:border-violet-400">
                Streetstyle
              </button>
              <button className="px-3 py-px bg-transparent border rounded-full border-gray-300 text-gray-400 cursor-pointer hover:text-violet-400 hover:border-violet-400">
                Crafts
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "relative w-full",
          search ? "md:block hidden" : "hidden"
        )}
      >
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="text-gray-500" />
          <span className="sr-only">Search icon</span>
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block w-full p-4 pl-12 text-base text-gray-900 border border-gray-200 rounded-md bg-transparent outline-none focus:bg-white focus:ring-violet-400 focus:border-violet-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-400"
          placeholder="Search for products, brands and more"
        />
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
