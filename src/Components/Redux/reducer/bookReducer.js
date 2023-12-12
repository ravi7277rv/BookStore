import { 
    ALL_BOOKS_REQUEST,
    ALL_BOOKS_SUCCESS,
    ALL_BOOKS_FAILURE 
} from "../constatn/bookConstatn";

export const bookReducer = (state = { books : [] }, action ) =>{

    switch(action.type){
        case ALL_BOOKS_REQUEST:
            return{
                ...state,
                loading:true,
                books:[]
            }
        case ALL_BOOKS_SUCCESS:
            return{
                ...state,
                loading:false,
                books:action.payload,
            }
        case ALL_BOOKS_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}


































