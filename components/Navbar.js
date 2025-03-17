"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import logo from '../public/assets/logo.png'
import logoweb from '../public/assets/logo-transparent.png'
import Image from 'next/image';
import SearchBar from './ui/searchBar';
import {NavigationMenuDemo} from './ui/NavigationMenuDemo'
import right from '../public/assets/right.svg'
import Menu from './Menu'
import { Button } from './ui/button'
import styles from '../components/style.module.scss'
import Nav from './nav/page'
import { motion } from "motion/react"
const Navbar = () => {  
  const [showMenu, setShowMenu] = React.useState(false)
const [isActive, setIsActive] = React.useState(false);

  
  return (
    <nav className=' h-15  w-full z-4  relative rounded  ' >
    
      <div className='flex flex-row  items-center  justify-center md:justify-between  '>
      <Link href="/" className='relative z-10 h-42 w-48'>
<Image src={logo} height={120}  width={120} alt=""  className=' md:px-3 px-2 '/>
</Link>

<div className=' md:hidden'>
<Link
      href={"/"}
      className="py-2 md:mx-2 px-4 hover:text-[#3F83F8] border shadow-custom rounded-3xl float-left bg-white lg:text-lg"
    >
      Menu
    </Link>
</div>
      <div className='flex flex-row items-center  '>

      <nav className="mt-0 justify-items-center justify-between hidden md:flex">
    <Link
      href={"/"}
      className="py-2 md:mx-2 px-4 hover:text-[#3F83F8] border shadow-custom rounded-3xl float-left bg-white lg:text-lg"
    >
      Tutorials
    </Link>
    <Link
      href={"/"}
      className="py-2 mx-2   px-4 hover:text-[#3F83F8] border shadow-custom bg-white rounded-3xl float-left lg:text-lg"
    >
      Exercises
    </Link>
    <Link
      href={"/"}
      className="py-2 mx-2   px-4 hover:text-[#3F83F8] border shadow-custom bg-white rounded-3xl float-left lg:text-lg"
    >
      Certificates
    </Link>
    <Link
      href={"/"}
      className="py-2 mx-2   px-4 hover:text-[#3F83F8] border shadow-custom bg-white rounded-3xl float-left lg:text-lg"
    >
      Services
    </Link>
  </nav>
  <div className='hidden sm:block  '>
  <NavigationMenuDemo/>
  </div>
  <div className='md:ml-52 mr-4'>
  <SearchBar/>
  </div>

  <div  onClick={() => setIsActive(!isActive)} className={styles.button}>
  <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
  {isActive && <Nav/>}
</div>
</div>
</div>
<div className=" w-full border-slate-200 border  bg-gray-100 md:mt-1 shadow-custom "></div>

<nav className="flex flex-row items-center overflow-x-auto">
  <ul className=" flex flex-row w-auto ml-2 scrollbar-hide gap-14 text-md md:text-xl overflow-x-auto text-lg  p-3 ">
    <li className='transition duration-75 hover:scale-125 ml-4 text-[#242424]'><Link href={"/HTMLBasic"}>HTML</Link></li>
    <li className='transition duration-75 hover:scale-125 text-[#242424]'><Link href={"CSS"}>CSS</Link></li>
    <li className='transition duration-75 hover:scale-125 text-[#242424]'><Link href={"JAVASCRIPT"}>JAVASCRIPT</Link></li>
    <li className='transition duration-75 hover:scale-125 text-[#242424]'><Link href={"SQL"}>SQL</Link></li>
    <li className='transition duration-75 hover:scale-125 text-[#242424]'><Link href={"PYTHON"}>PYTHON</Link></li>
    <li className='transition duration-75 hover:scale-125 text-[#242424]'><Link href={"JAVA"}>JAVA</Link></li>
    <li className='transition duration-75 hover:scale-125 text-[#242424]'><Link href={"PHP"}>PHP</Link></li>
    <li className='transition duration-75 hover:scale-125 text-[#242424]'><Link href={"C"}>C</Link></li>
    <li className='transition duration-75 hover:scale-125 text-[#242424]' ><Link href={"C++"}>C++</Link></li>
    <li className='transition duration-75 hover:scale-125 text-[#242424]' ><Link href={"BOOTSTRAP"}>BOOTSTRAP</Link></li>
    <li className='transition duration-75 hover:scale-125 text-[#242424]' ><Link href={"REACT"}>REACT</Link></li>
    <li className='transition duration-75 hover:scale-125 text-[#242424]' ><Link href={"MYSQL"}>MYSQL</Link></li>
    <li className='transition duration-75 hover:scale-125 text-[#242424]' ><Link href={"JQUERY"}>JQUERY</Link></li>
    <li className='transition duration-75 hover:scale-125 text-[#242424]' ><Link href={"EXCEL"}>EXCEL</Link></li>
    <li className='transition duration-75 hover:scale-125 text-[#242424]' ><Link href={"XML"}>XML</Link></li>
    <li className='transition duration-75 hover:scale-125 text-[#242424]' ><Link href={"DJANGO"}>DJANGO</Link></li>
    <li className='transition duration-75 hover:scale-125 text-[#242424]' ><Link href={"NUMPY"}>NUMPY</Link></li>
    <li className='transition duration-75 hover:scale-125 text-[#242424]' ><Link href={"PANDAS"}>PANDAS</Link></li>
    <li className='transition duration-75 hover:scale-125 text-[#242424]' ><Link href={"R"}>R</Link></li>
    <li className='transition duration-75 hover:scale-125 text-[#242424]' ><Link href={"TYPESCRIPT"}>TYPESCRIPT</Link></li>
    <li className='transition duration-75 hover:scale-110 text-[#242424]' ><Link href={"ANGULAR"}>ANGULAR</Link></li>
    <li className='transition duration-75 mr-3 hover:scale-110 text-[#242424]' ><Link href={"GIT"}>GIT</Link></li>
  </ul>
  <div className='mr-3'>
  <Image
  className='mr-4'
  src={right}
  height={25}
  width={25}
  alt=''
  />
  </div>
</nav>
<div className=" w-full border-slate-200 border  bg-gray-100 shadow-custom "></div>

    </nav>
  )
}

export default Navbar