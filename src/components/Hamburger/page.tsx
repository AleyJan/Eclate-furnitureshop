import { Button } from "@/components/ui/button"
import  Hamburger  from "../icon/page";
import { FaLinkedinIn,FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="bg-lime-50 border-none"> <Hamburger/></Button>
      </SheetTrigger>
      <SheetContent>
        <main className="flex flex-col gap-8 place-content-center items-center ">
          <Link className="hover:text-amber-700 hover:scale-125" href={'/'}>Home</Link>
          <Link className="hover:text-amber-700 hover:scale-125"   href={'#categories'}>Categories</Link>
          <Link className="hover:text-amber-700 hover:scale-125"  href={'#trendingItems'}>Trending Items</Link>
          <Link className="hover:text-amber-700 hover:scale-125"  href={'#about'}>About</Link>
          <Link className="hover:text-amber-700 hover:scale-125"  href={"#contact"}>Contact</Link>
          
          <div className='flex gap-x-6'> 
          <a href="https://twitter.com/?lang=en" className='hover:text-amber-800 hover:scale-150 duration-200'><BsTwitterX /></a>
          <a href="https://www.linkedin.com/in/ali-jan-23a6b8280/" className='hover:text-amber-800 hover:scale-150 duration-200'><FaLinkedinIn /></a>  
          <a href="https://github.com/AleyJan" className='hover:text-amber-800 hover:scale-150 duration-200'><FaGithub /></a>
        </div>
          
        </main>
      </SheetContent>
    </Sheet>
  )
}