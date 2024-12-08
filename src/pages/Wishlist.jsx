import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux"
import { removeWishlistItem } from "../redux/slices/wishlistSlice";
import { addCartItems, removeCartItem } from "../redux/slices/cartSlice";

function Wishlist() {
  const wishlistArray= useSelector((state)=>state.wishlist)
  console.log(wishlistArray);
  const dispatch=useDispatch()

  const wishes=(item)=>{
    dispatch(addCartItems(item))
    dispatch(removeWishlistItem(item.id))
  }
  
  return (
    <>
    <div className="pt-32">
      <h1 className="text-center text-violet-600 text-4xl mb-5 font-medium">Wishlist</h1>
      </div>
   {wishlistArray?.length>0 ? 
    <div className="px-10 mb-10 md:grid grid-cols-4">


       {wishlistArray?.map((item)=>(
            <div className="p-2" key={item.id}>
            <div className="p-3 rounded shadow-lg">
              <img src={item.image} alt="no image" className="w-full h-60" />
              <h4 className="text-center text-3xl">{item.title.slice(0,20)}</h4>
              <p className="text-justify pt-5">{item.description.slice(0,80)}</p>
              <p className="text-2xl p-3">price <span className="text-violet-600">$ {item.price}</span></p>
              <div className="flex justify-between">
                <button onClick={()=>dispatch(removeWishlistItem(item?.id))} className="px-5 p-3 rounded text-white bg-red-600"><FontAwesomeIcon icon={faTrash} /> </button>
                <button onClick={()=>wishes(item)} className="px-5 p-3 rounded text-white bg-green-600"> <FontAwesomeIcon icon={faCartShopping} /> </button>
              </div>
            </div>
            </div>
       )) }

 
        
      </div>
      
:
    <div className="w-full pt-10 md:grid grid-cols-3 mb-10 p-2">
      <div></div>
      <div>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--wishlist-bucket-shopping-state-pack-design-development-illustrations-1800917.png" alt=""  className="w-full h-auto rounded" />
        <h1 className="text-center text-red-500 text-3xl">Your Wishlist is Empty...</h1>
      </div>
      <div></div>

    </div>}
    </>
    
  )
}

export default Wishlist