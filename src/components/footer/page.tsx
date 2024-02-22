import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    
    <main id='contact'  className='grid md:grid-cols-2 w-dvw overflow-hidden font-bai_jaijuree bg-gradient-to-r from-lime-100 to-amber-100  scrollbar-hide'>
       <div className='hidden md:flex w-full col-start-1 col-end-3'>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
        <div className='flex flex-col justify-center items-start text-[12px] md:text-[15px] col-start-1 col-end-2 pt-5 md:pt-0 pl-20 gap-y-5 w-full md:h-[500px] '>
            <div className='custom-letter-spacing text-[20px] font-semibold'>Éclaté</div>
            <div>4517 Washington Avenue. Kentucky 39495, <br/>United States.</div>
            <div>(194) 349194</div>
            <div>contact@eclate.com</div>
        </div>
        <div className='flex flex-col md:grid grid-cols-3 md:justify-center md:items-start pl-8 pt-40 w-full h-full md:h-[500px] '>
            <div className='flex flex-col text-[12px] md:text-[13px] gap-y-4 justify-center items-start pb-5 '>
                <div className='font-bold text-[15px]'>Categories</div>
                <div className='flex flex-col gap-y-4'>
                    <Link href="#categories"><i>Collections</i></Link>
                    <Link href="#categories"><i>Desks</i></Link>
                    <Link href="#categories"><i>Decorations</i></Link>
                    <Link href="#categories"><i>Plants</i></Link>
                    <Link href="#categories"><i>Lamps</i></Link>
                </div>
            </div>
            <div className='flex flex-col gap-y-4 pb-5 text-[12px] md:text-[13px]'>
                <div className='font-bold text-[15px]'>Company</div>
                <div className='flex flex-col gap-y-4'>
                <Link href="#main"><i>Home</i></Link>
                <Link href="#bookTour"><i>Book a tour</i></Link>
                <Link href="#about"><i>About</i></Link>
                <Link href="#contact"><i>Contact</i></Link>
                    
                </div>
            </div>

            <div className='flex flex-col gap-y-4 pb-7 text-[12px] md:text-[13px]'>
                <div className='font-bold text-[15px]'>Categories</div>
                <div className='flex flex-col gap-y-4'>
                <Link href=""><i>Order</i></Link>
                <Link href=""><i>Track Your Order</i></Link>
                <Link href=""><i>Shipping & Delivery</i></Link>
                    
                </div>
            </div>

        </div>
    </main>
    
  )
}

export default Footer