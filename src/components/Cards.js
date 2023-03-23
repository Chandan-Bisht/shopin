import React from "react";
import { NavLink } from "react-router-dom";
import card1 from "../assets/interface/home/card1.png";
import card2 from "../assets/interface/home/card2.png";
import card3 from "../assets/interface/home/card3.png";

const Cards = () => {
  return (
    <section className="flex items-center flex-wrap gap-8 py-16 m-auto justify-center">
      <div className="relative w-[400px] h-[240px] overflow-hidden border border-gray-400 flex group hover:bg-violet-400 duration-300 ease-linear cursor-pointer">
        <div className="block p-8">
          <h3 className="text-2xl text-gray-800 font-bold group-hover:text-white">
            Women
          </h3>
          <p className="text-gray-500 font-medium text-sm leading-8 group-hover:text-white">
            Spring 2023
          </p>
        </div>
        <div className="absolute -bottom-full left-8 group-hover:bottom-8 duration-500 ease-in-out">
          <NavLink
            to=""
            className="group-hover:text-white uppercase font-semibold underline underline-offset-8 decoration-2"
          >
            Shop Now
          </NavLink>
        </div>
        <div className="lg:w-52 xl:w-60 group-hover:opacity-50">
          <img src={card1} alt="" className="" />
        </div>
      </div>
      <div className="relative w-[400px] h-[240px] overflow-hidden border border-gray-400 flex group hover:bg-violet-400 duration-300 ease-linear cursor-pointer">
        <div className="block p-8">
          <h3 className="text-2xl text-gray-800 font-bold group-hover:text-white">
            Men
          </h3>
          <p className="text-gray-500 font-medium text-sm leading-8 group-hover:text-white">
            Spring 2023
          </p>
        </div>
        <div className="absolute -bottom-full left-8 group-hover:bottom-8 duration-500 ease-in-out">
          <NavLink
            to=""
            className="group-hover:text-white uppercase font-semibold underline underline-offset-8 decoration-2"
          >
            Shop Now
          </NavLink>
        </div>
        <div className="lg:w-52 xl:w-60 group-hover:opacity-50">
          <img src={card2} alt="" className="" />
        </div>
      </div>
      <div className="relative w-[400px] h-[240px] overflow-hidden border border-gray-400 flex group hover:bg-violet-400 duration-300 ease-linear cursor-pointer">
        <div className="block p-8">
          <h3 className="text-2xl text-gray-800 font-bold group-hover:text-white">
            Accessories
          </h3>
          <p className="text-gray-500 font-medium text-sm leading-8 group-hover:text-white">
            New Trend
          </p>
        </div>
        <div className="absolute -bottom-full left-8 group-hover:bottom-8 duration-500 ease-in-out">
          <NavLink
            to=""
            className="group-hover:text-white uppercase font-semibold underline underline-offset-8 decoration-2"
          >
            Shop Now
          </NavLink>
        </div>
        <div className="lg:w-52 xl:w-60 group-hover:opacity-50">
          <img src={card3} alt="" className="" />
        </div>
      </div>
    </section>
  );
};

export default Cards;
