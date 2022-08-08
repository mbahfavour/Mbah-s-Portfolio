
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { AiOutlineAlignRight, AiOutlineClose } from 'react-icons/ai'



const Navbar = () => {
  
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }  

  return (
    <div className='flex p-10 items-center justify-between h-20 font-bold mx-5 font-univers'>
      <Link to="/">
        <h1 className='text-2xl'>mf.</h1>
      </Link>
      <div className='hidden md:block'>
        <ThemeToggle />
      </div>
      <div className=' hidden md:block'>
        <Link to='/about' className='ml-7 hover:text-accent'>about.</Link>
        <Link to='/projects' className='ml-7 hover:text-accent'>projects.</Link>
        <Link to='/blog' className='ml-7 hover:text-accent'>blog.</Link>
        <Link to='/contact' className='ml-7 hover:text-accent'>contact.</Link>
      </div>
      <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineAlignRight size={20} />}
      </div>
      
      <div  className={
          nav
            ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10'
            : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'
        }>
        <ul className='w-full px-60 py-20'>
            <li onClick={handleNav}  className=''>
                <Link to='/'>home.</Link>
            </li>
            <li onClick={handleNav} className='mt-5'>
                <Link to='/about'>about.</Link>
            </li>
            <li onClick={handleNav} className='mt-5'>
                <Link to='/projects'>projects.</Link>
            </li>
            <li onClick={handleNav} className='mt-5'>
                <Link to='/blog'>blog.</Link>
            </li>
            <li onClick={handleNav} className='mt-5'>
                <Link to='/contact'>contact.</Link>
            </li>
            <li className='mt-20'>
                <ThemeToggle />
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar