import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about" className="grid place-items-center gap-x-[5rem] py-[4%] bg-lime-50 w-dvw h-dvh" >
            <div className="grid place-items-center">
                <div className=" h-[1px] w-[100%] bg-gray-200 absolute "></div>

                <div className="relative  px-[1rem]  py-[2rem] border-[1px] border-solid rounded-md border-#e8e8e8 bg-lime-50 hover:text-lime-500 hover:border-black hover:scale-110 duration-500 text-center custom-letter-spacing md:text-[1rem] text-[12px] font-bold">
                    <h1>MOBILLIO</h1>
                    <span>FURNITURE</span>
                </div>
            </div>

            <div className="flex flex-col shrink w-full h-full text-[10px] md:text-[16px] max-w-3xl gap-16  box-border items-center justify-center">
                <div className="flex justify-center">
                    <Image src="/logo.png" alt="image" width={150} height={150} className=' opacity-30  absolute pb-10 w-[199px] h-[200px] mt-[30px]' />

                    <p className='relative text-center text-blue-950 w-full  font-[1rem] self-auto not-italic leading-[175%]'>Mobilio Stores Inc. are unique reseller of modern furnitors, designer-made,<br/>home-decoration items, since 1997.<br/>Our legacy guarantees exceptional product quality, unique designs and special prices for all of our product line-up. Lorem ipsum, consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.</p>
                </div>

                <div className=" border-solid border-gray-600 outline-none text-[12px] md:text-[16px]  py-[.75rem] px-[1.75rem] font-normal">
                    <Link href={'#main'}><button className="hover:text-lime-500 border-2 p-1 rounded-md hover:border-gray-600">Read More</button></Link>
                </div>
            </div>
        </div>
  )
}

export default About