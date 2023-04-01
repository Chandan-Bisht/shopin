import React from "react";
import ImageSlider from "../components/Slider";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import data from "../constants/data";
import Cards from "../components/Cards";
import FilterProducts from "../components/FilterProducts";

const Home = () => {
  const slider = data[0].home[0];

  return (
    <>
      <Navbar />
      <main>
        <section className="py-5 px-20 h-[600px] m-auto">
          <ImageSlider items={slider.items} />
        </section>
        <Cards />
        <FilterProducts />
      </main>
      <Footer />
    </>
  );
};

export default Home;
