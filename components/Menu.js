import React from 'react'
import Link from 'next/link'
import { X } from "lucide-react";


const Menu = ({ onClose }) => {
    const menuRef = React.useRef();
    const closeMenu = (e) => {
        if (menuRef.current === e.target) {
          onClose();
        }
      };
  return (
    <div
    ref={menuRef}
    onClick={closeMenu}
    className='fixed md:hidden bg-white inset-0 flex items-center justify-center bg-opacity-20 backdrop-blur-sm'
    >
        <div  className="bg-white rounded-2xl flex-col items-center w-full md:w-[29vw] shadow-custom">
        <button onClick={onClose} className="float-right">
            <X />
          </button>
<Link href={"/"} className='py-2 mx-2 px-4 hover:text-[#3F83F8] border shadow-custom rounded-3xl float-left  bg-white lg:text-lg'>Tutorials</Link>
<Link href={"/"}  className='py-2 mx-2 px-4 hover:text-[#3F83F8] border    shadow-custom bg-white  rounded-3xl  float-left lg:text-lg'>Exercises</Link>
<Link href={"/"}  className='py-2 mx-2 px-4 hover:text-[#3F83F8] border  shadow-custom bg-white rounded-3xl  float-left lg:text-lg'>Certificates</Link>
<Link href={"/"}  className='py-2 mx-2 px-4 hover:text-[#3F83F8] border shadow-custom bg-white  rounded-3xl  float-left lg:text-lg'>Services</Link>
    </div>
    </div>
  )
}

export default Menu