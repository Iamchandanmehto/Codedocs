"use client";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import html  from '../public/assets/HTML.svg'
import csslogo from '../public/assets/csslogo.svg'
import javascript from '../public/assets/javascript.svg'
import  python from '../public/assets/Python.svg'
import  MySQL from '../public/assets/MySQL.svg'
import cpp from '../public/assets/cpp.svg'
import csharp from '../public/assets/csharp.svg'
import java from '../public/assets/Java.svg'
import c from '../public/assets/C.svg'
import ruby from '../public/assets/Ruby.svg'
import bootstrap from '../public/assets/Bootstrap.svg'
import reactjs from '../public/assets/reactjs.svg'



export default function Home() {

  
  return (
    <div className="relative h-full  w-full">
      <div className=" inset-0  ">
        <div className="absolute top-0 z-[-2] h-full w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="md:flex md:flex-col flex flex-row items-center justify-center text-center overflow-x-auto">
        <div className="flex md:flex-col flex-row justify-center align-middle flex-wrap overflow-x-auto">
          <div className="font-bold md:text-8xl text-4xl mt-10">Learn To Code</div>
          <div className="md:text-2xl text-base md:w-[37vw] w-full px-6 text-center">
            Explore a wide range of resources, tutorials, and guides on web development, programming languages, and more.
          </div>
          <div className="items-center mt-5 s">
            <Button >Get Started</Button>
            <div>
            <p className="inline-block mt-4 underline text-xl font-semibold text-black over:text-[#3f83f8] cursor-pointer">
             <Link href={'/'}> Not Sure Where To Begin?</Link>
            </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full border-slate-200 border  bg-gray-100 md:mt-[40vh] shadow-custom "></div>
      <div className=" justify-center flex mt-10 md:mt-12  ">
  <div className="space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-4  sm:gap-4 xl:gap-8 sm:space-y-0  items-center justify-center cursor-pointer ">
    {/* Grid Item 1 */}
    <Link href={'/HTMLBasic'}><div className="bg-gray-200  border border-[#bcd2f0] mb-5  rounded-xl py-5 w-80 h-52 shadow-md text-center flex  flex-col justify-center items-center hover:shadow-xl ">
    <Image   src={html }  height={80} width={80} alt="" />
      <p className="text-sm mt-5 md:text-lg font-bold text-slate-900">HTML</p>
    </div>
    </Link>

    <Link href={'/CSSBasic'}> <div className="bg-gray-200  border border-[#bcd2f0] mb-5  rounded-xl py-5 w-80 h-52 shadow-md text-center flex  flex-col justify-center items-center hover:shadow-xl ">
 <Image src={csslogo }  height={80} width={80} alt="" />
      <p className="text-sm mt-5 md:text-lg font-bold text-slate-900">CSS</p>
    </div></Link>

    {/* Grid Item 3 */}
    <Link href={'/javascripPage'}>
    <div className="bg-gray-200  border border-[#bcd2f0] rounded-xl py-5 mb-5 w-80 h-52 shadow-md text-center flex  flex-col justify-center items-center  hover:shadow-xl">
    <Image src={javascript}  height={80} width={80} alt="" />
      <p className="text-sm mt-5 md:text-lg font-bold text-slate-900">Javascript</p>
    </div>
    </Link>

    {/* Grid Item 4 */}
    <Link href={'/Pythonpage'}> 
    <div className="bg-gray-200  border border-[#bcd2f0] rounded-xl py-5 mb-5 w-80 h-52 shadow-md text-center flex  flex-col justify-center items-center hover:shadow-xl ">
 <Image src={python}  height={80} width={80} alt="" />
      <p className="text-sm mt-5 md:text-lg font-bold text-slate-900">Python</p>
    </div>
    </Link>

    {/* Grid Item 5 */}
    <Link href={'/Cpage'}><div className="bg-gray-200  border border-[#bcd2f0] mb-5 rounded-xl py-5 w-80 h-52 shadow-md text-center flex  flex-col justify-center items-center hover:shadow-xl ">
 <Image src={c}  height={80} width={80} alt="" />
      <p className="text-sm mt-5 md:text-lg font-bold text-slate-900">C</p>
    </div></Link>


    {/* Grid Item 6 */}
    <Link href={'/Cpppage'}> 
    <div className="bg-gray-200  border border-[#bcd2f0] rounded-xl py-5 w-80 mb-5  h-52 shadow-md text-center flex  flex-col justify-center items-center  hover:shadow-xl">
 <Image src={cpp}  height={80} width={80} alt="" />
      <p className="text-sm mt-5 md:text-lg font-bold text-slate-900">C++</p>
    </div></Link>

    {/* Grid Item 7 */}
    <Link href={'/csharppage'}> 
    <div className="bg-gray-200  border border-[#bcd2f0] rounded-xl py-5 mb-5 w-80 h-52 shadow-md text-center flex  flex-col justify-center items-center hover:shadow-xl ">
   <Image src={csharp }  height={80} width={80} alt="" />
      <p className="text-sm mt-5 md:text-lg font-bold text-slate-900">C#</p>
    </div></Link>

    {/* Grid Item 8 */}
    <Link href={'/Javapage'}> 
    <div className="bg-gray-200  border border-[#bcd2f0] rounded-xl py-5 mb-5 w-80 h-52 shadow-md text-center flex  flex-col justify-center items-center  hover:shadow-xl">
<Image src={java}  height={80} width={80} alt="" />
      <p className="text-sm mt-5 md:text-lg font-bold text-slate-900">Java</p>
    </div></Link>

    {/* Grid Item 9 */}
    <Link href={'/Mysqlpage'}>
    <div className="bg-gray-200  border border-[#bcd2f0] rounded-xl py-5 mb-5  w-80 h-52 shadow-md text-center flex  flex-col justify-center items-center hover:shadow-xl ">
    <Image src={MySQL }  height={80} width={80} alt="" />
      <p className="text-sm mt-5 md:text-lg font-bold text-slate-900">MySQL</p>
    </div></Link>

    {/* Grid Item 10 */}
    <Link href={'/Rubypage'}>
    <div className="bg-gray-200  border border-[#bcd2f0] rounded-xl py-5 mb-5  w-80 h-52 shadow-md text-center flex  flex-col justify-center items-center hover:shadow-xl ">
 <Image src={ruby }  height={80} width={80} alt="" />
      <p className="text-sm mt-5 md:text-lg font-bold text-slate-900">Ruby</p>
    </div></Link>

    {/* Grid Item 11 */}
    <Link href={'/Reactpage'}>
    <div className="bg-gray-200  border border-[#bcd2f0] rounded-xl py-5 mb-5 w-80 h-52 shadow-md text-center flex  flex-col justify-center items-center  hover:shadow-xl">
 <Image src={reactjs}  height={80} width={80} alt="" />
      <p className="text-sm mt-5 md:text-lg font-bold text-slate-900">React</p>
    </div></Link>

    {/* Grid Item 12 */}
    <Link  href={'/Bootstrappage'}> 
    <div className="bg-gray-200  border border-[#bcd2f0] rounded-xl py-5 mb-5 w-80 h-52 shadow-md text-center flex  flex-col justify-center items-center  hover:shadow-xl">
<Image src={bootstrap}  height={80} width={80} alt="" />
      <p className="text-sm mt-5 md:text-lg font-bold text-slate-900">Bootstrap</p>
    </div>
    </Link>
  </div>
</div>
<div className=" w-full border-slate-200 border mt-10 bg-gray-100 md:mt-10 shadow-custom "></div>

    </div>
  );
}
