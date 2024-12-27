import React, { useContext, useEffect, useState } from 'react'
import Container from './Container';
import Slider from "react-slick";
import { MdArrowForwardIos } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaCartArrowDown } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { ApiData } from './ContextApi';
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className='absolute right-[-27px] top-[50%] w-[60px] h-[60px] leading-[60px] rounded-[50%] translate-y-[-50%] bg-[#00ff37] text-center' onClick={onClick}
      ><MdArrowForwardIos className='inline-block'/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className='absolute left-[-30px] top-[50%] z-50 w-[60px] h-[60px] leading-[60px] rounded-[50%] translate-y-[-50%] bg-[#00ff37] text-center' onClick={onClick}
      ><MdArrowBackIos className='inline-block'/></div>
    );
  }



const Newarrivals = () => {
  let products = useContext(ApiData)
    var settings = {
        arrows:true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,     
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
        
          ]
    };

    return (
        <Container>
            <h2  className='font-pops text-[40px] text-[#222] font-bold py-6'>Newarrivals</h2>

            <Slider {...settings}>
            {products.map((item)=>(
                    <div className="!w-[99%] justify-between">
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
            </Slider>
        </Container>
    )
}

export default Newarrivals