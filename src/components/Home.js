import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Movieform from './MovieForm'
import Movie from './Movie'

export default function Home(){
    const movies = useSelector(state => state.movies.movies)

    return (
        <div>
            <Movieform />
            {movies.length > 0 ? movies.map((movie, idx) => <Movie key={idx}/>) : null}
        </div>
    )
}