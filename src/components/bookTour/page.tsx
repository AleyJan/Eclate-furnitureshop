"use client";
import Image from "next/image";
import { useState } from "react";

function LookBook() {

    
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSubmitted(true);



    }
  return (
    <main id="bookTour" className='grid md:grid-cols-2 grid-cols-1 bg-amber-100 text-amber-800 w-dvw h-[500px] no-scrollbar '>
        <div className='flex flex-col self-auto items-center justify-center  gap-y-5'>
            <div className='font-bold'>SCHEDULE YOUR VISIT</div>
            <div className='text-[12px] md:text-[15px]'>"To book your tour, simply fill out the form below, and we'll be in touch to confirm your appointment. We look forward to welcoming you to our showroom soon!"</div>
            <form action="" name="form" id="form"  className='grid col-start-1 text-[12px] md:text-[16px]'>
                <label htmlFor="form">Full Name:</label>    
                <input type="text" placeholder='Your name...' className='bg-amber-200' />
                <label htmlFor="form" className='grid col-start-1'>Email:</label>    
                <input type="text" placeholder='Email address' className='bg-amber-200 ' />
            </form>
            {!submitted && <button onClick={handleSubmit} className='border-2 rounded-md p-1'>Submit</button>}
            {submitted && <div>Thanks For Booking!</div>}
        </div>
        <div className="">
            <Image width={1000} height={1000} src="/furniture2.png" alt="image" className="h-full w-[1000px] " />
        </div>
    </main>
  )
}

export default LookBook