import React, { useState } from 'react'
import Container from './Container'
import Logo from "../assets/Logo.png"
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = () => {
  let [show, setShow] = useState(false)
  return (
    <Container>
      <div className="flex justify-between items-center py-[20px]">
        <div className="lg:w-[20%] pl-3 lg:pl-0">
          <picture>
            <img src={Logo} alt="" />
          </picture>
        </div>
        <div className="lg:w-[80%]">
          <ul className={`lg:flex items-center justify-center text-center absolute lg:static ${show == true ? 'top-[70px] w-[100%] left-0 duration-500':'top-[70px] w-[100%] duration-500 left-[-1100px]'}`}>
            <li className='py-2 lg:py-0'><a className='font-[pops] text-[16px] text-[#222] font-normal lg:px-[40px]' href="#"><Link to={"/"}>Home</Link></a></li>
            <li className='py-2 lg:py-0'><a className='font-[pops] text-[16px] text-[#222] font-normal lg:px-[40px] ' href="#"><Link to={"/product"}>Shop</Link></a></li>
            <li className='py-2 lg:py-0'><a className='font-[pops] text-[16px] text-[#222] font-normal lg:px-[40px] ' href="#">About</a></li>
            <li className='py-2 lg:py-0'><a className='font-[pops] text-[16px] text-[#222] font-normal lg:px-[40px] ' href="#">Contacts</a></li>
            <li className='py-2 lg:py-0'><a className='font-[pops] text-[16px] text-[#222] font-normal lg:px-[40px] ' href="#">Journal</a></li>
          </ul>
        </div>
          <div className="lg:hidden justify-end" onClick={()=>setShow(!show)}>
            {show == true ? <FaBars/>:  <RxCross2/> }
          </div>
      </div>
    </Container>
  )
}

export default Navbar