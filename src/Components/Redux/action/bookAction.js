import axios from 'axios';
import { 
    ALL_BOOKS_REQUEST,
    ALL_BOOKS_SUCCESS,
    ALL_BOOKS_FAILURE 
} from "../constatn/bookConstatn";


export const getAllBooks = () => async(dispatch) => {

    try {

        dispatch({ type: ALL_BOOKS_REQUEST })

        const { data } = await axios.get("https://openlibrary.org/people/mekBot/books/currently-reading.json")

        dispatch({
            type: ALL_BOOKS_SUCCESS,
            payload: data.reading_log_entries,
        })
        
    } catch (error) {
        dispatch({
            type: ALL_BOOKS_FAILURE,
            payload:error.response.data.message,
        })
    }

}

































