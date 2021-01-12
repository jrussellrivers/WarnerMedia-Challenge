import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchMoviesByName = createAsyncThunk('movies/fetchMoviesByName', async (movieName) => {
    const firstResponse = await fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-by-title&title=${movieName}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "6c47160dd6msh909840b92fd1877p146dfdjsn837a6d851c44",
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
        }
    })
    .then(response=>response.json())
    .catch(err => {
        console.error(err);
    });

    let movies = []

    firstResponse.movie_results.forEach(async movie => {
        let result = fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movie-details&imdb=${movie.imdb_id}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "6c47160dd6msh909840b92fd1877p146dfdjsn837a6d851c44",
                "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
            }
        })
        .then(response =>response.json())
        .catch(err => {
            console.error(err);
        });
    });

    return movies
})

const initialState = {
    movies: [],
    status: 'idle',
    error: null
}

const moviesSlice = createSlice({
name: 'movies',
initialState,
reducers: {},
extraReducers: {
    [fetchMoviesByName.pending]: (state, action) => {
        state.status = 'loading'
      },
    [fetchMoviesByName.fulfilled]: (state, action) => {
    state.status = 'succeeded'
    // Add any fetched posts to the array
    state.movies = action.payload
    },
    [fetchMoviesByName.rejected]: (state, action) => {
    state.status = 'failed'
    state.error = action.error.message
    }
}
})

export default moviesSlice.reducer