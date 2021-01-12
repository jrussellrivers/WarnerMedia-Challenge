import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import Movie from './Movie'
import MovieForm from './MovieForm';
import UserForm from './UserForm'
import CreateUserForm from './CreateUserForm'

export default function Home(){
    const movies = useSelector(state => state.movies.movies)
    const user = useSelector(state => state.user.user)

    const [accountStatus, changeStatus] = useState(false)

    return (
        <div className="home">
            <div className="header">Search Movies By Name</div>
            {!accountStatus ? <CreateUserForm changeStatus={changeStatus}/> : null}
            {Object.keys(user).length === 0  && accountStatus ? <UserForm changeStatus={changeStatus}/> : null}
            {Object.keys(user).length !== 0  && accountStatus ? <MovieForm /> : null}
            <div className="movies">
                {movies.length > 0 ? movies.map((movie, idx) => <Movie key={idx} movie={movie}/>) : null}
            </div>
        </div>
    )
}