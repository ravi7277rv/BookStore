import { 
    ADD_TO_CART, 
    REMOVE_CART_ITEM 
} from '../constatn/cartConstant';
import axios from 'axios';


export const addItemsToCart = (id) => async (dispatch,getState) => {
 
   const { data } = await axios.get(`https://openlibrary.org/people/mekBot/books/currently-reading.json`);

   dispatch({
       type: ADD_TO_CART,
       payload: {
           product: data.reading_log_entries[id],
           title: data.reading_log_entries[id].work.title,
           author:data.reading_log_entries[id].work.author_names,
       },
   });

   localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));
}

// Remove from cart
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
   dispatch({
       type: REMOVE_CART_ITEM,
       payload: id,
   });
   localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));
}

