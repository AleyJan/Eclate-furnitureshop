import Image from 'next/image'
import React from 'react'

const Categories = () => {
  return (
    <div>
        <div id='categories'  className='flex bg-white items-center justify-center font-bold md:text-2xl pt-8'>SHOP BY CATEGORIES</div>
        <div className='flex items-center justify-center text-[11px]'>shopping based on the categories you are interested in.</div>
        <div className="overflow-hidden py-20 whitespace-nowrap  ">
          <div className="inline-flex animate-slide hover:pause " >
            <div><div className="relative flex flex-col items-center w-[150px] h-[250px] mx-10 "><Image src="/chairs.jpeg" width={250} height={250}  alt="chair" className="h-[250px] w-[250px] mx-10 hover:grayscale" /><span className='mt-4'>Chairs</span></div></div>
            <div><div className="relative flex flex-col items-center w-[250px] h-[265px] mx-10"><Image alt='collections'    width={250} height={250} src="/collections.jpeg" className="h-[250px] w-[250px] mx-10 hover:grayscale" /><span className='mt-4'>Decorations</span></div></div>
            <div><div className="relative flex flex-col items-center w-[250px] h-[265px] mx-10"><Image alt='decorations'    width={250} height={250} src="/decoration.jpeg" className="h-[250px] w-[250px] mx-10 hover:grayscale" /><span className='mt-4'>Collections</span></div></div>
            <div><div className="relative flex flex-col items-center w-[250px] h-[265px] mx-10"><Image alt='desk'           width={250} height={250} src="/desks.jpeg" className="h-[250px] w-[250px] mx-10 hover:grayscale" /><span className='mt-4'>Desks</span></div></div>
            <div><div className="relative flex flex-col items-center w-[150px] h-[265px] mx-10"><Image alt='lamps'          width={250} height={250} src="/lamps.jpeg" className="h-[250px] w-[250px] mx-10 hover:grayscale" /><span className='mt-4'>Lamps</span></div></div>
            <div><div className="relative flex flex-col items-center w-[200px] h-[180px] mx-10"><Image alt='plants'         width={250} height={250} src="/plants.jpeg" className="h-[225px] w-[250px] mx-10 hover:grayscale" /><span className='mt-4'>Plants</span></div></div>
          {/* second round of images */}
          <div><div className="relative flex flex-col items-center w-[150px] h-[250px] mx-10 ">< Image width={250} height={250}  alt="chair" src="/chairs.jpeg" className="h-[250px] w-[250px] mx-10 hover:grayscale" /><span className='mt-4'>Chairs</span></div></div>
            <div><div className="relative flex flex-col items-center w-[250px] h-[265px] mx-10"><Image width={250} height={250}  alt="collections" src="/collections.jpeg" className="h-[250px] w-[250px] mx-10 hover:grayscale" /><span className='mt-4'>Decorations</span></div></div>
            <div><div className="relative flex flex-col items-center w-[250px] h-[265px] mx-10"><Image width={250} height={250}  alt="decoration" src="/decoration.jpeg" className="h-[250px] w-[250px] mx-10 hover:grayscale" /><span className='mt-4'>Collections</span></div></div>
            <div><div className="relative flex flex-col items-center w-[250px] h-[265px] mx-10"><Image width={250} height={250}  alt="desk" src="/desks.jpeg" className="h-[250px] w-[250px] mx-10 hover:grayscale" /><span className='mt-4'>Desks</span></div></div>
            <div><div className="relative flex flex-col items-center w-[150px] h-[265px] mx-10"><Image width={250} height={250}  alt="lamps" src="/lamps.jpeg" className="h-[250px] w-[250px] mx-10 hover:grayscale" /><span className='mt-4'>Lamps</span></div></div>
            <div><div className="relative flex flex-col items-center w-[200px] h-[180px] mx-10"><Image width={250} height={250}  alt="plants" src="/plants.jpeg" className="h-[225px] w-[250px] mx-10 hover:grayscale" /><span className='mt-4'>Plants</span></div></div> 
          </div>
        </div>
        </div> 
  )
}

export default Categories