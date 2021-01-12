import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import { fetchMoviesByName } from '../app/moviesSlice'

export default function MovieForm(){

    const dispatch = useDispatch()
    const { handleSubmit } = useForm();

    const [movieName, changeMovieName] = useState('')

    const handleChange = evt => {
        changeMovieName(evt.target.value)
    }

    const onSubmit = () => {
        dispatch(fetchMoviesByName(movieName))
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Enter a Movie Name:
                    <input type="text" value={movieName} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}