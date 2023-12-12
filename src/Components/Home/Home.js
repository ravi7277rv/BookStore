import React, { useEffect, useState } from 'react';
import './Home.css'
import BookCard from './BookCard';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooks } from '../Redux/action/bookAction';
import Loader from '../Layout/Loader';

const Home = () => {

    const dispatch = useDispatch();

    const { loading, books } = useSelector(state => state.books);


    useEffect(() => {

        dispatch(getAllBooks());

    }, [dispatch])


    return (
        <div className='container'>
            <div className="row">


                <>
                    {
                        loading ? (
                            <Loader />
                        ) : (
                            <>
                                {
                                    books && books.map((book, i) => (
                                        <BookCard key={i} bookId={i} title={book.work.title} author={book.work.author_names} price={``} description={``} image={``} />
                                    ))
                                }
                            </>
                        )
                    }
                </>

            </div>
        </div>
    )
}

export default Home
