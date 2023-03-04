import React from 'react'
import card1 from "../assets/interface/home/card1.png"
import card2 from "../assets/interface/home/card2.png"
import card3 from "../assets/interface/home/card3.png"

const Cards = () => {
  return (
    <section className='flex items-center flex-wrap gap-8 py-16 m-auto justify-center'>
        <div className='border border-gray-400 flex'>
            <div className='block p-8'>
                <h3 className='text-2xl text-gray-800 font-bold'>Women</h3>
                <p className='text-gray-500 font-medium text-sm leading-8'>Spring 2023</p>
            </div>
            <div className='lg:w-52 xl:w-60 '>
                <img src={card1} alt="" className='' />
            </div>
        </div>
        <div className='border border-gray-400 flex'>
            <div className='block p-8'>
                <h3 className='text-2xl text-gray-800 font-bold'>Men</h3>
                <p className='text-gray-500 font-medium text-sm leading-8'>Spring 2023</p>
            </div>
            <div className='lg:w-52 xl:w-60'>
                <img src={card2} alt="" className='' />
            </div>
        </div>
        <div className='border border-gray-400 flex'>
            <div className='block p-8'>
                <h3 className='text-2xl text-gray-800 font-bold'>Accessories</h3>
                <p className='text-gray-500 font-medium text-sm leading-8'>New Trend</p>
            </div>
            <div className='lg:w-52 xl:w-60'>
                <img src={card3} alt="" className='' />
            </div>
        </div>
    </section>
  )
}

export default Cards