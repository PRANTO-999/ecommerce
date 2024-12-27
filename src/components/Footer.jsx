import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from "../assets/logo.png"

const Footer = () => {
  return (
        <footer className='bg-[#F5F5F3] py-[]'>
            <Container>
                 <Flex className="py-10">
                    <div className="w-[60%] flex justify-between ">
                        <div className="w-[20%]">
                            <h3 className='font-pops text-[#222] text-[30px] font-bold'>MENU</h3>
                            <p>Home</p>
                            <p>Shop</p>
                            <p>About</p>
                            <p>Contact</p>
                            <p>Journal</p>
                        </div>
                        <div className="w-[20%]">
                        <h3  className='font-pops text-[#222] text-[30px] font-bold'>SHOP</h3>
                            <p>Category 1</p>
                            <p>Category 2</p>
                            <p>Category 3</p>
                            <p>Category 4</p>
                            <p>Category 5</p>
                            <p>Category 6</p>
                            
                        </div>
                        <div className="w-[20%]">
                        <h3 className='font-pops text-[#222] text-[30px] font-bold'>HELP</h3>
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                            <p>Special E-shop</p>
                            <p>Shipping</p>
                            <p>Secure Payments</p>
                        </div>
                    </div>
                    <div className="w-[40%] flex justify-between pl-[80px]">
                        <div className="w-[25%]">
                            <p>(052) 611-5711</p>
                            <p>company@domain.com</p>
                            <p>575 Crescent Ave. Quakertown, PA 18951</p>
                        </div>
                        <div className="w-[15%]">
                            <picture>
                                <img src={Logo} alt="" />
                            </picture>
                        </div>
                    </div>
                 </Flex>
            </Container>
        </footer>
  )
}

export default Footer