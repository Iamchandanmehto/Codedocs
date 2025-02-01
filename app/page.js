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
      <div className=" inset-0 w-full ">
        <div className="absolute top-0 z-[-2] h-full w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="md:flex md:flex-col flex flex-row items-center justify-center text-center overflow-x-auto">
        <div className="flex md:flex-col flex-row justify-center align-middle flex-wrap overflow-x-auto">
          <div className="font-bold md:text-8xl text-6xl mt-10">Learn to Code</div>
          <div className="text-2xl md:w-[37vw] w-full px-6 text-center">
            Explore a wide range of resources, tutorials, and guides on web development, programming languages, and more.
          </div>
          <div className="items-center mt-5 s">
            <Button >Get Started</Button>
            <div>
            <p className="inline-block mt-4 underline text-2xl font-semibold text-black over:text-[#3f83f8] cursor-pointer">
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
<footer className=" dark:bg-gray-900 mt-8">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            {[
        

              {
                title: "Top Tutorials",
                links: [
                  { href: "#", label: "HTML Tutorial" },
                  { href: "#", label: "CSS Tutorial" },
                  { href: "#", label: "JavaScript Tutorial" },
                  { href: "#", label: "How To Tutorial" },
                  { href: "#", label: "SQL Tutorial" },
                  { href: "#", label: "Python Tutorial" },
                  { href: "#", label: "Bootstrap Tutorial" },
                  { href: "#", label: "Java Tutorial" },
                  { href: "#", label: "C++ Tutoriall" },

                ],
              },
              {
                title: "Top References",
                links: [
                  { href: "#", label: "HTML Examples" },
                  { href: "#", label: "CSS Examples" },
                  { href: "#", label: "JavaScript Examples" },
                  { href: "#", label: "How To Examples" },
                  { href: "#", label: "SQL Examples" },
                  { href: "#", label: "Python Examples" },
                  { href: "#", label: "Bootstrap Examples" },
                  { href: "#", label: "Java Examples" },
                  { href: "#", label: "PHP Examples" },

                ],
              },
              {
                title: "Help center",
                links: [
                  { href: "#", label: "Discord Server" },
                  { href: "#", label: "Twitter" },
                  { href: "#", label: "Facebook" },
                  { href: "#", label: "Contact Us" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { href: "#", label: "Privacy Policy" },
                  { href: "#", label: "Licensing" },
                  { href: "#", label: "Terms & Conditions" },
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h2 className="mb-6 text-sm md:text-xl font-semibold text-gray-900 uppercase dark:text-white">
                  {section.title}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {section.links.map((link, linkIndex) => (
                    <li className="mb-4" key={linkIndex}>
                      <a href={link.href} className="hover:underline">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2023 <a href="https://www.elearning.org.in/">ELearing™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            {[
              {
                href: "#",
                label: "Facebook page",
                icon: (
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
              },
              
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                {social.icon}
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
