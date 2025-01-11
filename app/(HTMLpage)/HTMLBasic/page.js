import React from "react";
import Link from "next/link";
import HTMLhome from '../HTMLhome/page'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const page = () => {
  return (
    <div  className="h-4/6 grid grid-cols-5  p-4   absolute items-center">
      {/* Sidebar - Takes 1/5 of the width */}
      <div className="col-span-1 hidden md:block bg-white mb-2 text-[#111827] p-4 rounded-3xl shadow-custom border-slate-200 border ">
    
        
        {/* Content inside the sidebar */}
        <div className="h-[75vh] overflow-y-auto scrollbar-hide  sticky w-[15vw]  hidden md:block ">
          
        <h2 className="text-4xl my-2 pt-2">HTML Tutorial</h2>
          <ul className="text-lg gap-1 flex flex-col justify-center text-center items-start ml-3 align-middle">
            <li>
              <Link href="/HTMLhome" >HTML  Home</Link>
            </li>
            <li>
              <Link href="/HTMLintro" > HTML Introduction</Link>
            </li>
            <li>
              <Link href="/HTMLeditors">HTML Editors</Link>
            </li>
            <li>
              <Link href="/HTMLbasics">HTML Basic</Link>
            </li>
            <li>
              <Link href="/HTMLelements">HTML Elements</Link>
            </li>
            <li>
              <Link href="/HTMLAttributes">HTML Attributes</Link>
            </li>
            <li>
              <Link href="/HTMLAttributes">HTML Attributes</Link>
            </li>
            <li>
              <Link href="/HTMLAttributes">HTML Attributes</Link>
            </li>
            <li>
              <Link href="/HTMLAttributes">HTML Attributes</Link>
            </li>
            <li>
              <Link href="/HTMLAttributes">HTML Attributes</Link>
            </li>
            <li>
              <Link href="/HTMLAttributes">HTML Attributes</Link>
            </li>
            <li>
              <Link href="/HTMLAttributes">HTML Attributes</Link>
            </li>
            <li>
              <Link href="/HTMLAttributes">HTML Attributes</Link>
            </li>
            <li>
              <Link href="/HTMLAttributes">HTML Attributes</Link>
            </li>
            <li>
              <Link href="/HTMLAttributes">HTML Attributes</Link>
            </li>
            <li>
              <Link href="/HTMLAttributes">HTML Attributes</Link>
            </li>
            <li>
              <Link href="/HTMLAttributes">HTML Attributes</Link>
            </li>
            <li>
              <Link href="/HTMLAttributes">HTML Attributes</Link>
            </li>
            <li>
              <Link href="/HTMLAttributes">HTML Attributes</Link>
            </li>
            <li>
              <Link href="/HTMLAttributes">HTML Attributes</Link>
            </li>
            <li>
              <Link href="/HTMLAttributes">HTML Attributes</Link>
            </li>
            <li>
              <Link href="/HTMLAttributes">HTML Attributes</Link>
            </li>
            <li>
              <Link href="/HTMLAttributes">HTML Attributes</Link>
            </li>
            <li>
              <Link href="/HTMLAttributes">HTML Attributes</Link>
            </li>
            <li>
              <Link href="/HTMLHeadings">HTML Headings</Link>
            </li>
            <li>
              <Link href="/HTMLParagraphs">HTML Paragraphs</Link>
            </li>
            <li>
              <Link href="/HTMLStyles">HTML Styles</Link>
            </li>
            <li>
              <Link href="/HTMLFormatting">HTML Formatting</Link>
            </li>
            <li>
              <Link href="/HTMLQuotations">HTML Quotations</Link>
            </li>
            <li>
              <Link href="/HTMLComments">HTML Comments</Link>
            </li>
            <li>
              <Link href="/HTMLColors">HTML Colors</Link>
            </li>
            <li>
              <Link href="/HTMLCSS">HTML CSS</Link>
            </li>
            <li>
              <Link href="/HTMLLinks">HTML Links</Link>
            </li>
            <li>
              <Link href="/HTMLImages">HTML Images</Link>
            </li>
            <li>
              <Link href="/HTMLFavicon">HTML Favicon</Link>
            </li>
          </ul>
        </div>
      </div>



      <div >
      
        </div>  
    </div>
  );
};

export default page;

