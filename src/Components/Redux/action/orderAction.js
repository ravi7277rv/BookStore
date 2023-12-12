import { 
    CONFIRM_ORDER,
    DELETE_ORDER
 } from "../constatn/orderConstant";

 export const confirmOrder = (id) => async (dispatch,getState) => {
 
    let citmes = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
 
    dispatch({
        type: CONFIRM_ORDER,
        payload: {
            orderId: id,
            orderItems:citmes
        },
    });
 
    localStorage.setItem("orderItems",JSON.stringify(getState().order.orderItems));
 }
 
 // Remove from cart
 export const deleteOrder = (id) => async (dispatch, getState) => {
    dispatch({
        type: DELETE_ORDER,
        payload: id,
    });
    localStorage.setItem("orderItems",JSON.stringify(getState().order.orderItems));
 }