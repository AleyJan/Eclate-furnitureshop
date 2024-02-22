import React from 'react'
import Link from 'next/link'
import  SheetDemo  from '../Hamburger/page';
import { FaLinkedinIn,FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center w-dvw font-semibold  p-3 z-50 sticky top-0 bg-lime-50'>
        <Link href={'#main'}><div className='pl-5 hover:text-amber-800 hover:scale-150 duration-500 custom-letter-spacing '>Éclaté</div></Link>
          <ul className='md:flex hidden gap-5 items-center'>
              <Link href={'#1main'}><li className='hover:text-amber-800 hover:border-b-2 active:border-b-2 hover:scale-110 duration-200'>Home</li></Link>
              <Link href={'#about'}><li className='hover:text-amber-800 hover:border-b-2 active:border-b-2 hover:scale-110 duration-200'>About</li></Link>
            <Link href={'#contact'}><button className=' border-2 border-slate-400 p-1 rounded-lg hover:scale-110 duration-200 hover:text-amber-800 hover:border-b-2'>Contact Us</button></Link>
          </ul>
        <div className='hidden pr-5 md:flex gap-5'> 
          <a href="https://twitter.com/?lang=en" className='hover:text-amber-800 hover:scale-150 duration-200'><BsTwitterX /></a>
          <a href="https://www.linkedin.com/in/ali-jan-23a6b8280/" className='hover:text-amber-800 hover:scale-150 duration-200'><FaLinkedinIn /></a>  
          <a href="https://github.com/AleyJan" className='hover:text-amber-800 hover:scale-150 duration-200'><FaGithub /></a>
        </div>
        <div className='md:hidden pr-5 '><SheetDemo/></div>
      </nav>
  )
}

export default Navbar