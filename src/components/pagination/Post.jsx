import React from 'react'
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Post = ({allPage}) => {
  
  return (
    <div className="flex justify-between flex-wrap">
    {allPage.map((item)=>(
            <div className="w-[33%]  justify-between py-5">
              <Link to={`/product/${item.id}`}>
              <div className="relative group overflow-hidden">
            <img src={item.thumbnail} className='h-[300px] w-full bg-[red]' alt="" />
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
              </Link>
       
  </div>
    ))

    }
    </div> 
  )
}

export default Post