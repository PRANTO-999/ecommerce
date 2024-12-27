import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from "../components/Container"
import { GoStarFill } from "react-icons/go";
import {useDispatch } from 'react-redux';
import { addToCart } from '../components/slice/productSlice';
import { FaRegStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";



const ProductDetails = () => {
    let DataId = useParams()
    let [products, setProducts] = useState([])
    const dispatch = useDispatch()


    let productId = ()=>{
        axios.get(`https://dummyjson.com/products/${DataId.id}`).then((response)=>{
          setProducts(response.data);
            
        })
    }

useEffect(()=>{
  productId()
},[])


let handleAddToCart = (item)=>{
  dispatch(addToCart({...item, qun:1}))
}

let clientRating = Array.from({length:5}, (elm, index)=>{
 let number = index + 0.5
  return(
    products.rating > index + 1 ? <GoStarFill/> :
    products.rating  > number ? <FaStarHalfAlt/> : <FaRegStar/>
  )
})
console.log(products.rating);

    
  return (
    <>
     <Container>
     <h2 className='text-[#222] text-[40px] font-bold font-pops'>Products</h2>
     <p>Home  &#60; Products</p>
      <div className="flex flex-wrap">
      {products?.images?.map((item)=>(
          <div className="">
          <img src={item} className='h-[500px] w-full' alt="" />
         </div>
    ))}
      </div>
      <h2 className='text-[#222] text-[30px] font-bold font-pops'>Products</h2>
      <div className="">
        <p className='flex text-[#FFD881] '>{clientRating}</p>
      </div>
      <div className="flex items-center py-7">
        <p>QUANTITY:</p>
        <div className="flex px-[40px] py-[7px] border-2 border-[#222] ml-[10px]">
           <span>-</span>
           <span className='pl-[40px] pr-[40px]'>0</span>
           <span>+</span>
        </div>
      </div>
      <div className="py-7">
        <button className='px-[41px] py-[16px] text-[#222] hover:text-[#fff] hover:bg-[#222] border-2 duration-700 mr-[20px]'>Add to Wish List</button>
        <Link to="/cart">
        <button onClick={()=>handleAddToCart(products)} className='px-[41px] py-[16px] text-[#222] hover:text-[#fff] hover:bg-[#222] border-2 duration-700'>Add to Cart</button>
        </Link>
     
      </div>
     </Container>
    </>
  )
}

export default ProductDetails