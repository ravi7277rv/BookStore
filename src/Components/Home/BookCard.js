import React, { useState } from 'react';
import './BookCard.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addItemsToCart } from '../Redux/action/cartAction';
import { useDispatch } from 'react-redux';

const BookCard = ({ bookId, title, author, price, description, image }) => {

  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    
    dispatch(addItemsToCart(id))
    toast.success("Item Added to Cart")
  }

  return (
    <div className='bookcard'>
      <div className="image">
        <img src={image ? image : "/images/book1.png"} alt="book1.png" />
      </div>
      <div className="details">
        <h4>Titel : {title ? title : "Sample Title"}</h4>
        <h5>Author : {author ? author : "Sample Author"}</h5>
        <p>Price : ₹ {price ? price : 125}</p>
        <p>Description : {description ? description : "Sample Description - This book is about the story of a boy who live in Hawana with his Father. Who use to run a small shop of bakery."}</p>
      </div>
      <div className="button">
        <button onClick={() => handleAddToCart(bookId)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default BookCard
