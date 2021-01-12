import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchUser = createAsyncThunk('user/fetchUser', async (data) => {
    const response = await fetch(`http://localhost:3434/user/login`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(data=> data ? data : false)

    return response
})

const initialState = {
    user: {},
    status: 'idle',
    error: null
}

const userSlice = createSlice({
name: 'user',
initialState,
reducers: {
    setUser(state, action) {
        state.user = action.payload
    }
},
extraReducers: {
    [fetchUser.pending]: (state, action) => {
        state.status = 'loading'
    },
    [fetchUser.fulfilled]: (state, action) => {
    state.status = 'succeeded'
    if (action.payload){
        state.user = action.payload
    }
    },
    [fetchUser.rejected]: (state, action) => {
    state.status = 'failed'
    state.error = action.error.message
    }
}
})

export const { setUser } = userSlice.actions

export default userSlice.reducer