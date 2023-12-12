import { 
    CONFIRM_ORDER,
    DELETE_ORDER
 } from "../constatn/orderConstant";



export const orderReducer = (state = { orderItems: [] }, action) => {
    switch (action.type) {
      case CONFIRM_ORDER:
        const item = action.payload;
  
        const isItemExist = state.orderItems.find((i) => i.orderId === item.orderId) 
          
        if (isItemExist) {
          return {
            ...state,
            orderItems: state.orderItems.map((i) =>
              i.orderId === isItemExist.orderId ? item : i
            ),
          };
          
        } else {
          return {
            ...state,
            orderItems: [...state.orderItems, item],
          };
        }
        case DELETE_ORDER:
        return {
          ...state,
          orderItems: state.orderItems.filter((i) => i.orderId !== action.payload),
        };
  
      default:
        return state;
    }
  };