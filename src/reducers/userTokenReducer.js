import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import loginService from '../services/loginService'

// Redux thunk to handle user login request.
export const userLogin = createAsyncThunk(
    'login',
    async (credentials, { rejectWithValue }) => {
        try {
            // The request to the login API
            const response = await loginService.genericUserLogin(credentials)
            return response
        } catch (exception) {
            // The rejected response.
            return rejectWithValue(exception.response.data)
        }
    }
)

// The initial user state.
const initialState = {
    userTokenObject: null,
    error: null,
    status: 'uninitialized'
}

// the user slice
const userTokenSlice = createSlice({
    name: 'userToken',
    initialState,
    reducers: {
        setUserToken(state, action) {
            state.userTokenObject = action.payload
        }
    },

    // The extra reducers to handle user login.
    extraReducers: builder => {
        builder
            .addCase(userLogin.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.userTokenObject = action.payload
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })
    }
})

// Action to initialiaze a user.
// If the token already exists.
export const addUserTokenTostore = user => {
    return dispatch => {
        dispatch(setUserToken(user))
    }
}

export const { setUserToken } = userTokenSlice.actions
export default userTokenSlice.reducer
