import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container'
import { RxCross2 } from "react-icons/rx";
import { ProductAdd, productDecrement, removeProduct } from '../components/slice/productSlice';





const Cart = () => {
let dispatch = useDispatch()
let data = useSelector((state)=>state.product.cartItem)


const{totalPrice, totalQuantity} = data.reduce((acc, item )=>{
    acc.totalPrice += item.price * item.qun
    acc.totalQuantity += item.qun 

    return acc

},{totalPrice:0, totalQuantity:0})




  return (
    <Container>
         <h2 className='text-[49px] text-[#222] font-pops font-bold'>Cart</h2>
         <p>Home&#62;Cart</p>
       <div className="flex items-center bg-[#F5F5F3] h-[90px] my-2">
       <div className="w-[25%]">
            <h5 className='pl-4 text-[20px] text-[#222] font-pops font-semibold'>Product</h5>
        </div>
        <div className="w-[25%]">
            <h5 className='pl-4 text-[20px] text-[#222] font-pops font-semibold'>Price</h5>
        </div>
        <div className="w-[25%]">
            <h5 className='pl-4 text-[20px] text-[#222] font-pops font-semibold'>Quantity</h5>
        </div>
        <div className="w-[25%]">
            <h5 className='pl-4 text-[20px] text-[#222] font-pops font-semibold'>Total</h5>
        </div>
       </div>
        {data.map((item,i)=>(
            <div className=" flex items-center">
            <div className="w-[25%]">
                <div className="flex items-center justify-between w-[250px] pl-4">
                    <div className="" onClick={()=>dispatch(removeProduct(i))}>
                    <RxCross2/>
                    </div>
                    <picture>
                        <img src={item.thumbnail} className='pl-2 pr-2 h-[100px] w-[150px]' alt="" />
                    </picture>
                    <h6 className='text-[16px] text-[#222] font-pops font-semibold'>{item.title}</h6>
                </div>
            </div>
            <div className="w-[25%]">
                <h6 className='pl-4 text-[20px] text-[#222] font-pops font-semibold'>${item.price}</h6>
            </div>
            <div className="w-[25%]">
                <div className="flex items-center justify-around border-2 border-[#222] ml-4 w-[200px]">
                    <span className='text-[20px] text-[#222] font-pops font-semibold'onClick={()=>dispatch(productDecrement(i))}>-</span>
                    <span className='text-[20px] text-[#222] font-pops font-semibold'>{item.qun}</span>
                    <span className='text-[20px] text-[#222] font-pops font-semibold' onClick={()=>dispatch(ProductAdd(i))}>+</span>
                </div>
            </div>
            <div className="w-[25%]">
                <h6 className='pl-4 text-[20px] text-[#222] font-pops font-semibold'>$total</h6>
            </div>
           </div>
    
        ))}
         
    <div className="">
       <h3 className='text-[20px] text-[#222] font-pops font-bold text-end py-4'>Cart totals</h3> 
      </div>

   <div className=" mt-[50px] ">
   <div className="flex items-center justify-end">
        <div className="">
            <h3 className='border-2 border-[#222] w-[200px] h-[50px] text-center leading-[50px] text-[17px] font-pops font-semibold'>Subtotal</h3>
        </div>
        <div className="">
            <h3 className='border-2 border-[#222] w-[200px] h-[50px] text-center leading-[50px] text-[17px] font-pops font-semibold'>${totalPrice}</h3>
        </div>
    
      </div>
      <div className="flex items-center justify-end">
        <div className="">
            <h3 className='border-2 border-[#222] w-[200px] h-[50px] text-center leading-[50px] text-[17px] font-pops font-semibold'>Quantity</h3>
        </div>
        <div className="">
            <h3 className='border-2 border-[#222] w-[200px] h-[50px] text-center leading-[50px] text-[17px] font-pops font-semibold'>{totalQuantity}</h3>
        </div>
    
      </div>
      <div className="flex items-center justify-end">
        <div className="">
            <h3 className='border-2 border-[#222] w-[200px] h-[50px] text-center leading-[50px] text-[17px] font-pops font-semibold'>Total</h3>
        </div>
        <div className="">
            <h3 className='border-2 border-[#222] w-[200px] h-[50px] text-center leading-[50px] text-[17px] font-pops font-semibold'>${totalPrice}</h3>
        </div>
    
      </div>
   </div>

   <div className=" mt-[50px] flex justify-end">
    <button className='border-2 border-[#222] hover:bg-[#222] text-[#222] hover:text-[#fff] h-[50px] w-[250px] duration-500 leading-[50px] text-center text-[16px]'>Proceed to Checkout</button>
   
   </div>

    </Container>
  )
}

export default Cart