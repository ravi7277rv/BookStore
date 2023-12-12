import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from 'redux-thunk';
import { composeWithDevTools} from "redux-devtools-extension";
import { bookReducer } from "./Components/Redux/reducer/bookReducer";
import { cartReducer } from "./Components/Redux/reducer/cartReducer";
import { orderReducer } from "./Components/Redux/reducer/orderReducer";


const reducer = combineReducers({
  
    books : bookReducer,
    cart:cartReducer,
    order:orderReducer,

});

let initialState = { 
    cart:{
        cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
    },
    order:{
        orderItems:localStorage.getItem("orderItems")
        ? JSON.parse(localStorage.getItem("orderItems"))
        : []
    }
};
 
const middleware = [thunk];

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;
 