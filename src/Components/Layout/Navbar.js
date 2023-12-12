import React, { useEffect, useState } from 'react'
import './Navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Navbar = () => {

  const { cartItems } = useSelector((state) => state.cart);
  const [len, setLen] = useState(0);

  useEffect(() => {

    let carIte = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []

    setLen(carIte.length);

  }, [cartItems]);

  return (
    <div className='maindiv'>
        <div className="homediv">
            <Link className='link1' to={`/`}> <HomeIcon /> </Link>
        </div>
        <div className="cartdiv">
            <Link className='link1_1' to={`/cart`}><ShoppingCartIcon/> 
            <span className='cartCount'>{ len > 0 ? len : null}</span> 
            </Link>
        </div>
        <div className="orderdiv">
            <Link className='link' to={`/order`}>Order</Link>
        </div>
    </div>
  )
}

export default Navbar

