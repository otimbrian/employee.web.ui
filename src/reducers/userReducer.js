import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import loginService from '../services/loginService'


// Redux thunk to handle user login request.
export const userLogin = createAsyncThunk('user/login', async (credentials, { rejectWithValue }) => {
    try {

        // The request to the login API
        const response = await loginService.genericUserLogin(credentials)
        return response.data
    } catch (exception) {
        // The rejected response.
        return rejectWithValue(exception.response.data)
    }
})

// The initial user state.
const initialState = {
    user: null,
    error: null,
    status: "uninitialized"
}

// the user slice
const userSlice = createSlice(
    {
        name: "user",
        initialState,
        reducers: {
            setUser(state, action) {
                state.user = action.payload
                state.status = "initialized"
            }
        },

        // The extr reducers to handle user login.
        extraReducers: (builder) => {
            builder.addCase(userLogin.pending, (state, action) => {
                state.status = "loading"
            })
                .addCase(userLogin.fulfilled, (state, action) => {
                    state.status = "succeeded"
                    state.user = action.payload
                })
                .addCase(userLogin.rejected, (state, action) => {
                    state.status = "failed"
                    state.user = null
                    state.error = action.error

                })
        }
    }
)

// Action to initialiaze a user.
// If the token already exists.
export const addUserTostore = (user) => {
    return dispatch => {
        dispatch(setUser(user))
    }
}


export const { setUser } = userSlice.actions
export default userSlice.reducer