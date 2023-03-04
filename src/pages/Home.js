import React from 'react'
import ImageSlider from '../components/Slider'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import data from '../constants/data'
import Cards from '../components/Cards'
import Products from '../components/Products'

const Home = () => {
  const slider = data[0].home[0];
  return (
    <>
        <Navbar />
        <main>
          <section className='py-5 px-20 h-[600px] m-auto'>
            <ImageSlider items={slider.items} />
          </section>
          <Cards />
          <Products />
        </main>
        <Footer />
    </>
  )
}

export default Home