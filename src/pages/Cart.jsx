import { faBackward, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { emptyCart, removeCartItem } from "../redux/slices/cartSlice"
import { useEffect, useState } from "react"



function Cart() {
  const [total,setTotal]=useState()
  const cartArray=useSelector((state)=>state.cartList)
  console.log(cartArray);
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleCheckOut=()=>{
    alert('order placed successfully')
    dispatch(emptyCart())
    navigate('/')
  }

  const getTotal=()=>{
    if(cartArray.length>0){
     setTotal( cartArray?.map((item)=>item.price)?.reduce((n1,n2)=>n1+n2))
    }
  }

  useEffect(()=>{
    getTotal()
  },[cartArray])
  

  return (
    
    <>
    <div className="pt-32">
    <h1 className="text-center text-violet-600 text-4xl mb-5 font-medium">CART</h1>
  {cartArray?.length>0 ? 
  
   <div className="md:grid grid-cols-[2fr_1fr] m-10">

      <div className="p-3">
        <table className="w-full border  border-gray-700 shadow-lg text-center">
          <thead>
              <tr>
                <th className="border border-gray-100 bg-violet-700 text-white p-3" >#</th>
                <th className="border border-gray-100 bg-violet-700 text-white p-3">Title</th>
                <th className="border border-gray-100 bg-violet-700 text-white p-3">Image</th>
                <th className="border border-gray-100 bg-violet-700 text-white p-3">Price</th>
                <th className="border border-gray-100 bg-violet-700 text-white p-3">Action</th>
              </tr>
          </thead>
          <tbody>
             {cartArray?.map((item,index)=>(
                <tr key={item.id}>
                <td className="p-3 border border-gray-200">{index+1}</td>
                <td className="p-3 border border-gray-200">{item.title.slice(0,20)}</td>
                <td className="p-3 border border-gray-200 flex justify-center"><img src={item.image} alt="no image" style={{width:'150px',height:'100px'}} /></td>
                <td className="p-3 border border-gray-200">$ {item.price}</td>
                <td className="p-3 border border-gray-200 text-center"><button onClick={()=>dispatch(removeCartItem(item?.id))} className="bg-red-700 text-white py-3 px-5 rounded"><FontAwesomeIcon icon={faTrash} /></button></td>
              </tr>
             )) }
          </tbody>
        </table>
      </div>
      <div className="pt-5 px-10">
        <div className="shadow-lg p-5">
          <h1 className="text-center text-3xl">Cart Summary</h1>
          <p className="mt-4 text-xl">Total number of products : {cartArray.length}</p>
          <p className="mt-4 text-xl">Grand Total : $ {total}</p>
          <button onClick={handleCheckOut}  className="w-full text-white bg-green-600 p-3 rounded mt-5 hover:border hover:border-green-500 hover:bg-white hover:text-green-600">Check Out</button>
        </div>
      </div>
    </div>
:
    <div className="w-full pt-10 md:grid grid-cols-3 mb-10 p-2">
      <div></div>
      <div className="text-center">
        <img src="https://www.vinsolutions.com/wp-content/uploads/sites/2/vinsolutions/media/Vin-Images/news-blog/Empty_Shopping_Cart_blog.jpg" alt=""  className="w-full h-auto rounded" />
        <Link to={"/"}> <button className=" text-white bg-green-600 p-3 rounded mt-5"><FontAwesomeIcon icon={faBackward} />  Back Home </button></Link>
      </div>
      <div></div>

    </div>}

    </div>
    </>
  )
}

export default Cart