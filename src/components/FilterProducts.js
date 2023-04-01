import React, { useState } from "react";
import {
  Circle,
  Favorite,
  FavoriteBorder,
  FilterListOutlined,
  Search,
} from "@mui/icons-material";
import data from "../constants/data";
import ProductQuickView from "./ProductQuickView";
import AddToWishlist from "./AddToWishlist";
import { useDispatch } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Products = () => {
  const [active, setActive] = useState(0);
  const [isSelected, setIsSelected] = useState(new Set());
  const [open, setOpen] = useState(false);
  const [filterSelected, setFilterSelected] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState(false);
  const productsoverview = data[0].home[0].products;
  const allproducts = productsoverview[0].all;
  const links = productsoverview[0].links;
  const [items, setItems] = useState(allproducts);

  const handleClick = (id) => {
    setIsSelected(isSelected => {
      if (!isSelected.has(id)) {
        isSelected = new Set(isSelected)
        isSelected.add(id)
      }
      return isSelected
    })
    setOpen(true);
  };

  const filterItem = (categItem, id) => {
    const updatedItems = allproducts.filter((curElem) => {
      return curElem.category === categItem;
    });
    setActive(id);
    setItems(categItem === "all" ? allproducts : updatedItems);
  };

  const handleFilter = () => {
    setFilterSelected(!filterSelected);
    setSearch(false);
  };

  const handleSearch = () => {
    setFilterSelected(false);
    setSearch(!search);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    const searchedItem = allproducts.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setItems(searchedItem);
  };

  const dispatch = useDispatch()

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options })
  }

  return (
    <section className="px-20 py-5 m-auto max-w-[90rem]">
      <h3 className="text-2xl font-medium text-gray-800 uppercase">
        Product Overview
      </h3>
      <div className="flex items-center justify-between py-8">
        <div className="flex items-center gap-10">
          {links.map((item) => (
            <button
              key={item.id}
              className={classNames(
                " text-md text-gray-500 hover:underline hover:underline-offset-4 hover:text-gray-900",
                active === item.id
                  ? "text-gray-900 underline underline-offset-4"
                  : ""
              )}
              onClick={() => filterItem(item.category, item.id)}
            >
              {item.link_title}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleFilter}
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
          id="search"
          value={searchTerm}
          onChange={handleChange}
          className="block w-full p-4 pl-12 text-base text-gray-900 border border-gray-200 rounded-md bg-transparent outline-none focus:bg-white focus:ring-violet-400 focus:border-violet-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-400"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 place-items-baseline">
          {items.map((product, index) => (
            <div className="col-span-1" key={product.id}>
              <div className="relative group h-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain w-72 h-72 group-hover:scale-110 ease-in-out duration-500 bg-gray-100 bg-blend-color-burn"
                />
                <div className="group-hover:bottom-8 flex justify-center absolute w-full -bottom-full duration-500 ease-in-out">
                  <ProductQuickView product={product} i={index} handler={addToCartHandler} />
                </div>
              </div>
              <div className="flex items-start justify-between pt-6">
                <p className="text-gray-500 text-base">{product.title}</p>
                <button
                  type="button"
                  onClick={() => handleClick(product.id)}
                  key={product.id}
                >
                  {isSelected.has(product.id) ? (
                    <>
                      <Favorite className="text-violet-400 cursor-pointer" />
                      <AddToWishlist
                        open={open}
                        setOpen={setOpen}
                        title={product.title}
                      />
                    </>
                  ) : (
                    <FavoriteBorder className="text-gray-500 cursor-pointer" />
                  )}
                </button>
              </div>
              <p className="text-gray-800 font-medium text-base">
                &#8377;{product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
