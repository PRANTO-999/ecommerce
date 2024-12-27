import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Bag from "../assets/bag.png"
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaCartArrowDown } from "react-icons/fa";
import Clock from "../assets/clock.png"


const Bestseller = () => {
  return (

    <Container>
        <h2  className='font-pops text-[40px] text-[#222] font-bold py-6'>Bestsaller</h2>
        <Flex className="flex-wrap justify-between">
        <div className="sm:w-[49%] lg:w-[24%] justify-between">
                    <div className="relative group overflow-hidden">
                    <img src={Bag} className='h-[300px] w-full bg-[red]' alt="" />
                    <div className="absolute left-0 bottom-[-150px] w-full h-[150px] flex items-center bg-[green] justify-end group-hover:bottom-0 duration-700 ease-in-out">
                       <div className="">
                       <div className="flex items-center gap-x-3 justify-end py-2  text-[16px] pr-[15px] hover:pr-[40px] duration-500">
                            <p>Add to Wish List</p>
                            <FaHeart />
                        </div>
                        <div className="flex items-center gap-x-3 justify-end py-2  text-[16px] pr-[15px] hover:pr-[40px] duration-500">
                            <p>Compare</p>
                            <TfiReload/>
                        </div>
                        <div className="flex items-center gap-x-3 justify-end py-2  text-[16px] pr-[15px] hover:pr-[40px] duration-500">
                            <p>Add to Cart</p>
                             <FaCartArrowDown/>
                        </div>
                       </div>
                    </div>
                    </div>
                    <div className="flex justify-between py-2">
                        <p className='pl-[5px]'>Basic Crew  Neck Tee</p>
                        <p className='pr-[10px]'>$44.00</p>
                    </div>
          </div>
        <div className="sm:w-[49%] lg:w-[24%]  justify-between">
                    <div className="relative group overflow-hidden">
                    <img src={Bag} className='h-[300px] w-full bg-[red]' alt="" />
                    <div className="absolute left-0 bottom-[-150px] w-full h-[150px] flex items-center bg-[green] justify-end group-hover:bottom-0 duration-700 ease-in-out">
                       <div className="">
                       <div className="flex items-center gap-x-3 justify-end py-2  text-[16px] pr-[15px] hover:pr-[40px] duration-500">
                            <p>Add to Wish List</p>
                            <FaHeart />
                        </div>
                        <div className="flex items-center gap-x-3 justify-end py-2  text-[16px] pr-[15px] hover:pr-[40px] duration-500">
                            <p>Compare</p>
                            <TfiReload/>
                        </div>
                        <div className="flex items-center gap-x-3 justify-end py-2  text-[16px] pr-[15px] hover:pr-[40px] duration-500">
                            <p>Add to Cart</p>
                             <FaCartArrowDown/>
                        </div>
                       </div>
                    </div>
                    </div>
                    <div className="flex justify-between py-2">
                        <p className='pl-[5px]'>Basic Crew  Neck Tee</p>
                        <p className='pr-[10px]'>$44.00</p>
                    </div>
          </div>
        <div className="sm:w-[49%] lg:w-[24%]  justify-between">
                    <div className="relative group overflow-hidden">
                    <img src={Bag} className='h-[300px] w-full bg-[red]' alt="" />
                    <div className="absolute left-0 bottom-[-150px] w-full h-[150px] flex items-center bg-[green] justify-end group-hover:bottom-0 duration-700 ease-in-out">
                       <div className="">
                       <div className="flex items-center gap-x-3 justify-end py-2  text-[16px] pr-[15px] hover:pr-[40px] duration-500">
                            <p>Add to Wish List</p>
                            <FaHeart />
                        </div>
                        <div className="flex items-center gap-x-3 justify-end py-2  text-[16px] pr-[15px] hover:pr-[40px] duration-500">
                            <p>Compare</p>
                            <TfiReload/>
                        </div>
                        <div className="flex items-center gap-x-3 justify-end py-2  text-[16px] pr-[15px] hover:pr-[40px] duration-500">
                            <p>Add to Cart</p>
                             <FaCartArrowDown/>
                        </div>
                       </div>
                    </div>
                    </div>
                    <div className="flex justify-between py-2">
                        <p className='pl-[5px]'>Basic Crew  Neck Tee</p>
                        <p className='pr-[10px]'>$44.00</p>
                    </div>
          </div>
        <div className="sm:w-[49%] lg:w-[24%]  justify-between">
                    <div className="relative group overflow-hidden">
                    <img src={Bag} className='h-[300px] w-full bg-[red]' alt="" />
                    <div className="absolute left-0 bottom-[-150px] w-full h-[150px] flex items-center bg-[green] justify-end group-hover:bottom-0 duration-700 ease-in-out">
                       <div className="">
                       <div className="flex items-center gap-x-3 justify-end py-2  text-[16px] pr-[15px] hover:pr-[40px] duration-500">
                            <p>Add to Wish List</p>
                            <FaHeart />
                        </div>
                        <div className="flex items-center gap-x-3 justify-end py-2  text-[16px] pr-[15px] hover:pr-[40px] duration-500">
                            <p>Compare</p>
                            <TfiReload/>
                        </div>
                        <div className="flex items-center gap-x-3 justify-end py-2  text-[16px] pr-[15px] hover:pr-[40px] duration-500">
                            <p>Add to Cart</p>
                             <FaCartArrowDown/>
                        </div>
                       </div>
                    </div>
                    </div>
                    <div className="flex justify-between py-2">
                        <p className='pl-[5px]'>Basic Crew  Neck Tee</p>
                        <p className='pr-[10px]'>$44.00</p>
                    </div>
          </div>
        </Flex>
        <div className="py-10">
            <picture>
                <img src={Clock} alt="" />
            </picture>
        </div>
    </Container>
  )
}

export default Bestseller