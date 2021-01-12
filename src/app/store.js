import { configureStore } from '@reduxjs/toolkit'

import moviesReducer from './moviesSlice'
import userReducer from './userSlice'

export default configureStore({
    reducer: {
        movies: moviesReducer,
        user: userReducer
    }
})