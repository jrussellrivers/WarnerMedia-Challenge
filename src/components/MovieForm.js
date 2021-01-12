import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchMoviesByName } from '../app/moviesSlice'

export default function MovieForm(){

    const dispatch = useDispatch()

    const [movieName, changeMovieName] = useState('')

    const handleChange = date => {
        changeMovieName(data)
    }

    const onSubmit = () => {
        dispatch(fetchMoviesByName(movieName))
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Enter a Movie Name:
                    <input type="text" value={movieName} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}