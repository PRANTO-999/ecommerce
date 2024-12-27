import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaCarSide } from "react-icons/fa";
import { IoReloadSharp } from "react-icons/io5";

const Reload = () => {
  return (
    <section className='border-b-2 border-[#222] border:opacity-[40%] py-4'>
         <Container>
       <div className="lg:flex justify-between ">
        <div className="flex items-center sm:justify-center sm:py-5 sm:border-none">
            <span className='font-pops text-[#222] text-[20px] font-bold'>2</span>
            <p className='pl-3'>Two years warranty</p>
        </div>
        <div className="flex items-center sm:justify-center sm:py-5 sm:border-none">
            <FaCarSide className='inline-block'/>
            <p className='pl-3'>Free shipping</p>
        </div>
        <div className="flex items-center sm:justify-center sm:py-5 sm:border-none">
            <IoReloadSharp className='inline-block'/>
            <p className='pl-3'>Return policy in 30 days</p>
        </div>
       </div>
    </Container>
    </section>
  )
}

export default Reload