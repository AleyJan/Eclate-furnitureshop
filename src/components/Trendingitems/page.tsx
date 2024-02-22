import Image from 'next/image';
import React from 'react'
import { RiStarSFill } from "react-icons/ri";

function TrendingItems() {
  return (
         <main id='trendingItems' className='grid place-items-center py-[4%] gap-y-10 font-bai_jaijuree w-dvw no-scrollbar scrollbar-hide'>
            <div className='grid place-items-center'>
                <h1 className='font-bold text-[20px]'>TRENDING ITEMS</h1>
                <p className='text-[10px] md:text-[15px]'>Explore our most trending products, and best offers only for you</p>
            </div>
            <div className='grid md:grid-cols-4 gap-2 w-full'>
                    
                    <div className='flex flex-col items-center md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-3 h-full w-full'>
                            <div >
                            <Image src="/product1.jpeg" alt="bulb" width={100000} height={1000} className='md:row-start-1 md:row-end-4 md:col-start-1 md:col-end-3 h-full w-full hover:grayscale' />
                            </div>  
                                <div className='z-10 md:flex hidden flex-col items-center pt-16 '>
                                <p className='z-10 font-bold'>Antique Bulb</p>
                                <span className='font-semibold'>$5</span>
                                <div className="flex gap-1">
                                <i ><RiStarSFill /></i>
                                <i ><RiStarSFill /></i>
                                <i ><RiStarSFill /></i>
                                <i ><RiStarSFill /></i>
                                <i ><RiStarSFill /></i>
                            </div>
                                </div>    
                    </div>
                    
                    <div className='flex flex-col items-center md:col-start-3 md:row-start-1 md:row-end-2 w-full'>
                       <div>
                        <Image src="/product2.jpeg" alt="lamp" width={1500} height={1000} className=' md:col-start-3 w-full hover:grayscale' />
                        </div>
                        <div className='z-10 md:flex hidden flex-col items-center py-5  '>
                                <p className='z-10 font-bold'>Fancy Lamp</p>
                                <span className='font-semibold'>$299</span>
                                <div className="flex gap-1">
                                <i ><RiStarSFill /></i>
                                <i ><RiStarSFill /></i>
                                <i ><RiStarSFill /></i>
                                <i ><RiStarSFill /></i>
                                <i ><RiStarSFill /></i>
                                </div> 
                        </div>
                    </div>  
                                
                    
                    <div className='md:col-start-4 w-full'>
                        <div>
                        <Image src="/product3.jpeg" alt="chair" width={1000} height={1000} className=' md:col-start-4 w-full hover:grayscale' />
                        </div>
                        <div className='z-10 md:flex hidden flex-col items-center py-5  '>
                                <p className='z-10 font-bold'>Executive Chair</p>
                                <span className='font-semibold'>$100</span>
                                <div className="flex gap-1">
                                <i ><RiStarSFill /></i>
                                <i ><RiStarSFill /></i>
                                <i ><RiStarSFill /></i>
                                <i ><RiStarSFill /></i>
                                <i ><RiStarSFill /></i>
                                </div> 
                        </div>
                    </div>
                    
                    <div className=' md:col-start-3 md:col-end-5 md:row-start-2 w-full md:gap-y-2 '>
                        <div>
                        <Image src="/product4.jpeg" alt="brown sofa" width={1000} height={1000} className=' w-full hover:grayscale ' />
                        </div>
                        <div className='z-10 md:flex hidden flex-col items-center py-5  '>
                                <p className='z-10 font-bold'>Luxury Leather Sofa</p>
                                <span className='font-semibold'>$2999</span>
                                <div className="flex gap-1">
                                <i ><RiStarSFill /></i>
                                <i ><RiStarSFill /></i>
                                <i ><RiStarSFill /></i>
                                <i ><RiStarSFill /></i>
                                <i ><RiStarSFill /></i>
                                </div> 
                        </div>
                    </div>    
                    
                    <div className='md:col-start-1 md:col-end-5 md:row-start-3 md:row-end-4 w-full'>    
                        <div>
                        <Image src="/product5.jpeg" alt="sofa" width={1000} height={1000} className=' w-full hover:grayscale '/>
                        </div>
                        <div>
                        <div className='z-10 md:flex hidden flex-col items-center py-5  '>
                                <p className='z-10 font-bold'>Sofa</p>
                                <span className='font-semibold'>$1499</span>
                                <div className="flex gap-1">
                                <i ><RiStarSFill /></i>
                                <i ><RiStarSFill /></i>
                                <i ><RiStarSFill /></i>
                                <i ><RiStarSFill /></i>
                                <i ><RiStarSFill /></i>
                                </div> 
                        </div>
                        </div>
                    </div>
            </div>

         </main>
  )
}

export default TrendingItems