import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import loginService from '../services/loginService'
import employeeService from '../services/employeeService'


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


// Redux thunk to handle user retrival from the database.
export const getUser = createAsyncThunk('user/getById', async (id, { rejectWithValue }) => {
    try {
        // send request to the employee API
        const response = await employeeService.getEmployeeWithId(id)
        return response.data

    } catch (exception) {
        return rejectWithValue(exception.response.data)
    }
})

// The initial user state.
const initialState = {
    user: null,
    userTokenObject: null,
    error: null,
    status: "uninitialized"
}

// the user slice
const userSlice = createSlice(
    {
        name: "user",
        initialState,
        reducers: {
            setUserToken(state, action) {
                state.userTokenObject = action.payload
            }
        },

        // The extra reducers to handle user login.
        extraReducers: (builder) => {
            builder.addCase(userLogin.pending, (state, action) => {
                state.status = "loading"
            })
                .addCase(userLogin.fulfilled, (state, action) => {
                    state.status = "succeeded"
                    state.userTokenObject = action.payload
                })
                .addCase(userLogin.rejected, (state, action) => {
                    state.status = "failed"
                    state.error = action.error
                })

            builder.addCase(getUser.pending, (state, action) => {
                state.status = "loding"
            })

                .addCase(getUser.fulfilled, (state, action) => {
                    state.status = "succeeded"
                    state.user = action.payload
                })

                .addCase(getUser.rejected, (state, action) => {
                    state.status = 'failed'
                    state.error = action.error
                })
        }
    }
)

// Action to initialiaze a user.
// If the token already exists.
export const addUserTokenTostore = (user) => {
    return dispatch => {
        dispatch(setUserToken(user))
    }
}


export const { setUserToken } = userSlice.actions
export default userSlice.reducer