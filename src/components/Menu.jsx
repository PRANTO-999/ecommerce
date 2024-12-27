import React, { useEffect, useState } from 'react'
import Container from './Container'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { useRef } from 'react';
import { useSelector } from 'react-redux';

const Menu = () => {
  let data = useSelector((state)=>state.product.cartItem)
  console.log(data.length);
  
  let [cateshow, setCateShow] = useState(false)
  let [logout, setLogOut] = useState(false)
  let cateMenu = useRef()
  let logMenu = useRef()
  

  useEffect(()=>{
    document.addEventListener("click",(e)=>{
      if(cateMenu.current.contains(e.target) == true){ 
        setCateShow(!cateshow) 
      }else{
        setCateShow(false) 
      }
      if(logMenu.current.contains(e.target) == true){ 
        setLogOut(!logout) 
      }else{
        setLogOut(false) 
      }
    })
  },[cateMenu,logMenu])
  return (
    <Container>
        <div className="lg:flex items-center">
            <div className="lg:w-[20%] relative">
              <div className="lg:flex lg:items-center md:w-full z-50" ref={cateMenu}>
              <FaBarsStaggered className='inline-block'/>
              <h3 className='lg:pl-[10px] pl-[20px]'>Shop by Category</h3>
              </div>
              {cateshow &&
                <div className="absolute lg:top-[50px] left-0 bg-[#222] lg:w-[250px] sm:w-[200px] z-50">
                <ul>
                  <li className='font-pops text-[16px] pl-[15px] text-[#fff] hover:pl-[40px] py-3 duration-700'>Accesories</li>
                  <li className='font-pops text-[16px] pl-[15px] text-[#fff] hover:pl-[40px] py-3 duration-700'>Furniture</li>
                  <li className='font-pops text-[16px] pl-[15px] text-[#fff] hover:pl-[40px] py-3 duration-700 relative'>Electronics 
                        {/* <ul className='flex absolute bottom-0 right-[-100px]'>
                          <li>
                            <h2>Phones</h2>
                            <p>Phone 1</p>
                            <p>Phone 2</p>
                            <p>Phone 3</p>
                            <p>Phone 4</p>
                            <p>Phone 5</p>
                            <p>Phone 6</p>
                          </li>
                          <li>
                            <h2>Computers</h2>
                            <p>Computer 1</p>
                            <p>Computer 2</p>
                            <p>Computer 3</p>
                            <p>Computer 4</p>
                            <p>Computer 5</p>
                            <p>Computer 6</p>
                          </li>
                          <li>
                            <h2>Smart watches</h2>
                            <p>Smart watches 1</p>
                            <p>Smart watches 2</p>
                            <p>Smart watches 3</p>
                            <p>Smart watches 4</p>
                            <p>Smart watches 5</p>
                            <p>Smart watches 6</p>
                          </li>
                          <li>
                            <h2>Cameras</h2>
                            <p>Cameras 1</p>
                            <p>Cameras 2</p>
                            <p>Cameras 3</p>
                            <p>Cameras 4</p>
                            <p>Cameras 5</p>
                            <p>Cameras 6</p>  
                          </li>
                        </ul> */}
                  </li>
                  
                  <li className='font-pops text-[16px] pl-[15px] text-[#fff] hover:pl-[40px] py-3 duration-700'>Clothes</li>
                  <li className='font-pops text-[16px] pl-[15px] text-[#fff] hover:pl-[40px] py-3 duration-700'>Bags</li>
                  <li className='font-pops text-[16px] pl-[15px] text-[#fff] hover:pl-[40px] py-3 duration-700'>Accesories</li>
                </ul>
              </div>
              }
              
            </div>
            <div className="w-[60%] sm:w-full sm:inline sm:text-center relative">
                <input type="text" className='py-[10px] lg:px-[400px] lg:pl-[10px] border-2 border-[#222]' placeholder='Enter search products' />
                <IoSearch className='lg:absolute static top-[50%] inline-block right-[200px] translate-y-[-50%]'/>
            </div>
            <div className="w-[20%] sm:text-center">
              <div className="lg:flex lg:items-center inline justify-end">
              <div className="relative">
                <div className="flex items-center" ref={logMenu}>
                <FaUser className='inline-block'/>
                <FaCaretDown className='inline-block'/>
                </div>
                {logout &&
                  <div className="absolute top-[70px] right-0 z-[50]">
                  <h3 className='h-[50px] w-[160px] leading-[50px] text-center border-2 text-[#222] border-[#222] text-[16px] hover:bg-[#222] hover:text-[#fff] duration-500'>My Account</h3>
                  <h3 className='h-[50px] w-[160px] leading-[50px] text-center border-2 text-[#222] border-[#222] text-[16px] hover:bg-[#222] hover:text-[#fff] duration-500'>Log Out</h3>
                </div>         
                  
                }
           
               </div>

               <div className="lg:pl-[20px] relative">
                {data.length ? <div className="absolute top-[-31px] left-[38px] h-[40px] w-[40px] bg-[red] text-center leading-[40px] text-[20px]" >{data.length}</div> : ""
                }
                <FaCartArrowDown className='inline-block'/>
               </div>
              </div>
            </div>
        </div>
    </Container>
  )
}

export default Menu