import React from 'react';
import './ConfirmModal.css';

const ConfirmModal = ({ cartItems, setCheckout , handleConfirmOrder}) => {

    const len = cartItems.length;

    const handleCheckoutModal = () => {
        setCheckout(false);
    }

  return (
    <div className='confirmModal_div'>
      <div className="modalHeading">
        <h3>Confirm Order</h3> <span onClick={handleCheckoutModal}>X</span>
      </div>
      <div className="modalitems">
            <ol type='1'>
                {
                    cartItems && cartItems.map((item) => (
                       <div className='listpricediv'>
                         <li key={item.product}>{item.title}</li> <span>₹ 125</span>
                       </div>
                    ))
                }
            </ol>
      </div>
      <div className="modalsubtotal">
        <p>Total Items : {len}</p>
        <p>Subtotal : ₹ {125*len}</p>
      </div>
      <div className="modalCbutton">
        <button onClick={handleConfirmOrder}>Confirm Order</button>
      </div>
    </div>
  )
}

export default ConfirmModal
