import { Button } from '@/components/ui/button'
import React from 'react'
import {startinghtml } from '../data/html'
import Link from 'next/link'
import CodeEditor from '@/components/CodeEditor'
const  page = () => {
  return (
<div className="grid grid-cols-5  h-5/6  m-2  md:mr-3 items-center rounded-3xl">
  <div></div>

  <div className="md:col-span-4 col-span-5 bg-white shadow-custom  my-3 border-slate-200  rounded-3xl">
<div className=' h-[79vh] overflow-y-auto scrollbar-hide  sticky rounded-3xl '>
  <div className='md:m-10 m-5'>
    <h1 className='font-bold md:text-5xl  text-6xl bg-gradient-to-r from-gray-400 via-slate-700 to-slate-900 bg-clip-text  tracking-tight text-transparent '>HTML Tutorial</h1>
  </div>
  <div></div>
<div className='flex flex-row justify-between md:m-10 lg:m-10  my-4 mx-2 '>
<div >
    < Button >Home</Button>
  </div>
<div>
    <Button>Next</Button>
  </div>
</div>
<div className='bg-slate-200 h-[79vh] shadow-custom border-slate-200 rounded-3xl'>
<div className='p-3 md:w-[40vw] text-start'>
<p className='text-xl m-5 gap-2'>{startinghtml}</p>
</div>
<div className='m-10'>
  <Link href={'/HTMLintro'}>
  <Button>Start learning HTML  now</Button>
  </Link>
  </div>
  {/* <CodeEditor/> */}
</div>
</div>
  </div>
</div>

  )
}

export default page