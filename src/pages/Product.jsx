import React, { useContext, useEffect, useState } from 'react'
import { ApiData } from '../components/ContextApi'
import Container from '../components/Container';
import Flex from '../components/Flex';
import { CgMenuGridR } from "react-icons/cg";
import { TfiMenu } from "react-icons/tfi";
import Post from '../components/pagination/Post';
import PaginationArea from '../components/pagination/PaginationArea';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

const Product = () => {
  let [showCate, setShowCte] = useState(false)
  let [category, setCateGory] = useState([])
  let data = useContext(ApiData)



  let [pagestart, setPageStart] = useState(1)
  let [perpage, setPerPage] = useState(6)

  let lastPage = pagestart * perpage
  let firstPage = lastPage - perpage

  let allPage = data.slice(firstPage, lastPage)
  

  let pageNumber = []

  for(let i = 0; i < Math.ceil(data.length / perpage); i++){
    pageNumber.push(i);
  }
  
   let paginate = (pageNumber)=>{
    setPageStart(pageNumber+1)
   }

   let next = ()=>{
    if(pagestart < pageNumber.length){
      setPageStart((state)=>state+1)
    }
    
   }

   let prve = ()=>{
    if(pagestart > 1){
      setPageStart((state)=>state-1)
    }
    
   }
  useEffect(()=>{
    setCateGory([...new Set(data.map((item)=>item.category))])
  },[data])
 console.log(category);
 
    
  return (
    <>
    <Container>
        <h2 className='text-[#222] text-[40px] font-bold font-pops'>Products</h2>
        <p>Home  &#60; Products</p>
        <Flex className="py-10 justify-center">
          <div className="w-[20%]">
            <div className="flex items-center" onClick={()=>setShowCte(!showCate)}>
            <h3 className='text-[#222] text-[20px] font-bold font-pops pb-[20px] inline-block'>Shop by Category</h3>
            {showCate == true ?  <FaPlus className='inline-block ml-[40px] mb-[15px]'/> : <FaMinus className='inline-block ml-[40px] mb-[15px]'/>}
           
            </div>
            {showCate &&
             <ul>
              {category.map((item)=>(
                <li className='text-[20px] py-2'>{item}</li>
              ))}
            </ul>
            }
          </div>
          <div className="w-[80%]">
             <div className="pt-[15px]">
                <CgMenuGridR className='inline-block text-[#222] border-2 border-[#222] h-[30px] w-[30px] hover:bg-[#222] hover:text-[#fff] duration-500 mr-[10px]'/>
                <TfiMenu className='inline-block text-[#222] border-2 border-[#222] h-[30px] w-[30px] hover:bg-[#222] hover:text-[#fff] duration-500'/>
             </div>

          <Post allPage={allPage}/>

          <div className="text-end">
            <PaginationArea pageNumber={pageNumber} paginate={paginate} pagestart={pagestart} next={next} prve={prve}/>
          </div>

          </div>
        </Flex>
    </Container>
    </>
  )
}

export default Product