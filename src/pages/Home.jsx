import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useUserFetch from "../hooks/useUserFetch";
import { addWishlistItems } from "../redux/slices/wishlistSlice";
import { useDispatch } from "react-redux";
import { addCartItems } from "../redux/slices/cartSlice";

function Home() {
  const data = useUserFetch("https://fakestoreapi.com/products");
  console.log(data);
  const dispatch= useDispatch()

  return (
    <>
      <div className="pt-32 px-10 mb-10 md:grid grid-cols-4 gap-4">
        {data?.length > 0 &&
          data.map((item) => (
            <div className="p-2 h-full flex flex-col" key={item.id}>
              <div className="p-3 rounded shadow-lg">
                <img src={item.image} alt={item.title}  className="w-full h-60 object-contain" />
                <h4 className="text-center text-3xl">{item.title.slice(0,20)}</h4>
                <p className="text-justify pt-5">{item.description.slice(0,80)}</p>
                <p className="text-2xl p-3">
                  Price: <span className="text-violet-600">$ {item.price}</span>
                </p>
                <div className="flex justify-between">
                  <button onClick={()=>dispatch(addWishlistItems(item))} className="px-5 p-3 rounded text-white bg-red-600">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                  <button onClick={()=>dispatch(addCartItems(item))} className="px-5 p-3 rounded text-white bg-green-600">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Home;
