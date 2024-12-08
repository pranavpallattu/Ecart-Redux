import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'






function Header() {

  const wishlistArray=useSelector((state)=>state.wishlist)

  const cartArray=useSelector((state)=>state.cartList)
    
  const [show,setShow]=useState(false)

  return (
    <>
      <nav className='bg-violet-900 p-5 text-white w-full fixed'>
        <div className='md:flex items-center md:px-10 px-5'>
          <div className='flex w-full'>
          <Link to={'/'}><h2 className='text-4xl'><FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff", }} className='me-3' />E-cart</h2>
          </Link>
          <button onClick={()=>setShow(!show)} className='border border-white p-3 text-white ms-auto rounded md:hidden'><FontAwesomeIcon icon={faBars} /></button>

         
          </div>
          {show && <ul className='flex mt-5 md:hidden'>
            <li>
              <Link to={'/Wishlist'}>
                <button className='border border-white p-3 rounded hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faHeart} style={{ color: "#ff0000", }} className='ms-2' />Wishlist <span className='border bg-white px-1 rounded text-black ms-2'>{wishlistArray?.length}</span>
                </button></Link>
            </li>
            <li>
              <Link to={'/Cart'}>
                <button className='border border-white p-3 ms-3 rounded  hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faCartShopping} style={{ color: "#14ff18", }} className='ms-2' />Cart <span className='border bg-white px-1 rounded text-black ms-2'>{cartArray.length}</span>
                </button>
              </Link>
            </li>
          </ul>}
          <ul className='ms-auto md:flex hidden'>
            <li>
              <Link to={'/Wishlist'}>
                <button className='border border-white p-3 rounded hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faHeart} style={{ color: "#ff0000", }} className='ms-2' />Wishlist <span className='border bg-white px-1 rounded text-black ms-2'>{wishlistArray?.length}</span>
                </button></Link>
            </li>
            <li>
              <Link to={'/Cart'}>
                <button className='border border-white p-3 ms-3 rounded  hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faCartShopping} style={{ color: "#14ff18", }} className='ms-2' />Cart <span className='border bg-white px-1 rounded text-black ms-2'>{cartArray.length}</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header

