import TrendingItems from '@/components/Trendingitems/page';
import LookBook from '@/components/bookTour/page';
import Footer from '@/components/footer/page';
import Categories from '@/components/categories/page';
import About from '@/components/about/page';
import Link from 'next/link';
import Image from 'next/image';



const Page = () => {
  return (
    <>
    <main id='main' className=' md:w-dvw md:h-dvh font-bai_jaijuree bg-lime-100 overflow-hidden '>
      
      
      <div className='grid grid-cols-3 col-span-1 w-dvw h-dvh relative '>
        <div className='grid absolute border-slate-400 border-l-2 pl-2 top-[90px] md:left-[150px] left-[20px] md:text-[14px] text-[11px] '>Furniture <span>Trends-2024</span></div>
        <div className='grid absolute custom-letter-spacing pt-3 top-[120px] md:left-[150px] left-[20px] font-bold md:text-3xl'>YELLOW STONE</div>
        <div className='flex absolute items-center gap-3 md:pt-5 top-[170px] md:left-[150px] left-[20px] md:text-2xl text-[13px] '>FROM <span className='md:text-2xl text-[13px] font-semibold'>$499</span></div>
        <Link href={'#categories'}><button  className='grid absolute items-center gap-3 border-2 border-slate-400 rounded-lg p-2 top-[350px] md:left-[150px] left-[20px] text-[11px] font-semibold md:text-[13px] hover:border-yellow-600 hover:bg-yellow-200 hover:scale-110 duration-200'> Explore The Collection</button></Link>
        <div className='grid md:col-start-2 absolute md:w-[400px] w-[200px] md:h-[900px] md:left-[150px] left-[90px] md:top-[50px] top-[150px] hover:scale-110 duration-200'> <Image src="/chair.png" alt="chair" width={400} height={900} /></div>
      </div>
      </main>
      
      <Categories/>

      <About/>
        
      <TrendingItems/>
      <LookBook/>
      <Footer/>
    
    </>
  )
}

export default Page