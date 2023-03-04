import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import data from '../constants/data';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Products = () => {

    const [isActive, setIsActive] = useState(false);
    const productsoverview = data[0].home[0].products;
    const links = productsoverview[0].links;

    const handleOnClick = event => {
        setIsActive(current => !current);
    }
  return (
    <section className='px-20 py-5 m-auto max-w-[90rem]'>
        <h3 className='text-2xl font-medium text-gray-800 uppercase'>Product Overview</h3>
        <div className='flex items-center gap-10 py-8'>
        {links.map((link, index) => (
            <NavLink 
                key={link.id}
                to={link.href}
                className={classNames(
                    "text-gray-500 text-sm hover:underline hover:text-gray-900", 
                    isActive? "text-gray-900 underline": ""
                )}
                onClick={handleOnClick}
            >
                {link.link_title}
            </NavLink>
        ))}
        </div>
    </section>
  )
}

export default Products