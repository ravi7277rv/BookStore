import React, { Fragment, useEffect, useState } from 'react';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartCard from './CartCard';
import { removeItemsFromCart } from '../Redux/action/cartAction';
import { Modal } from '@mui/material';
import ConfirmModal from '../Order/ConfirmModal';
import { useNavigate } from 'react-router-dom';
import { confirmOrder } from '../Redux/action/orderAction';

const Cart = () => {

  const navigate = useNavigate();
  const [checkout, setCheckout] = useState(false);
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);
  let len = cartItems.length;


  const handleRemoveItem = (id) => {

    dispatch(removeItemsFromCart(id));

  };

  const handleCheckout = () => {
    setCheckout(true);
  };

  function generateRandom16DigitNumber() {
    const randomDigits = Array.from({ length: 15 }, () => Math.floor(Math.random() * 10)).join('');
    const firstDigit = Math.floor(Math.random() * 9) + 1;
    const random16DigitNumber = `${firstDigit}${randomDigits}`;
    return random16DigitNumber;
  }
  
  

  const handleConfirmOrder = () => {

    const random16DigitNumber = generateRandom16DigitNumber();

      const orderId = random16DigitNumber;

    dispatch(confirmOrder(orderId));
    
    localStorage.setItem("cartItems",[]);
    
    navigate('/order');
    setCheckout(false);

  };

  return (
    <Fragment>
       {
       checkout &&
       <Modal
       open={checkout}
       onClose={()=> {setCheckout(false) }}
       sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
       }}
       >
        <ConfirmModal cartItems={cartItems} setCheckout={setCheckout} handleConfirmOrder={handleConfirmOrder}/>
       </Modal>
     }
      {
        cartItems.length === 0 ? (
          <div className='cart_div'>
            <div className="cart_div_1">
              <div className="cart_div_heading">
                <p>Product</p>
                <p>Subtotal</p>
              </div>
              <div className="cart_div_items">
                <div className="cart_div_items_1">
                  <div className="emptyCart">
                  <h2>Cart is Empty! No Item to View</h2>
                  <Link to={`/`} className='link4'> View Books </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='cart_div'>
            <div className="cart_div_1">
              <div className="cart_div_heading">
                <p>Product</p>
                <p>Subtotal</p>
              </div>
              <div className="cart_div_items">
                <div className="cart_div_items_1">
                  {
                    cartItems && cartItems.map((item) => (
                      <CartCard  key={item.product} item={item} handleRemoveItem={handleRemoveItem} />
                    ))
                  }
                </div>
                <div className="cart_div_item_checkoutbutton">
                  <div className="totalPrice_button">
                    <p>Total Price : ₹{`${125*len}`}</p>
                    <Link className="link3" onClick={handleCheckout}>Checkout</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </Fragment>
  )
}

export default Cart
