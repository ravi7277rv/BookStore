import React from 'react';
import './CartCard.css';

const CartCard = ({ item, handleRemoveItem }) => {

    

    return (
        <div className="cart_div_items_details">
            <div className="cartImage">
                <img src="/images/book1.png" alt="book1.png" />
            </div>
            <div className="cartItemsDetails">
                <div className="details">
                    <h4>{item.title}</h4>
                    <h5>{item.author}</h5>
                </div>
                <div className="price">
                    <p>₹125</p>
                    <button onClick={() => handleRemoveItem(item.product)}>Remove Item</button>
                </div>
            </div>
        </div>
    )
}

export default CartCard
