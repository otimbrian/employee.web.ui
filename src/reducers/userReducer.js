import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import employeeService from '../services/employeeService'

// Redux thunk to handle user retrival from the database.
export const getUser = createAsyncThunk(
    'user/getById',
    async (id, { rejectWithValue }) => {
        try {
            // send request to the employee API
            const response = await employeeService.getEmployeeWithId(id)
            return response
        } catch (exception) {
            return rejectWithValue(exception.response.data)
        }
    }
)

// Initial user reducer state.
const initialState = {
    userObject: null,
    error: null,
    state: 'uninitialized'
}

const userSlice = createSlice({
    name: 'user',
    initialState,

    // basic reducers go here.
    reducers: {
        remove(state, action) {
            state.userObject = null
        },

        update(state, action){
            state.userObject = action.payload
            state.state = "updated"
        }
    },

    // Extra createAsyncThunk reducers go here
    extraReducers: builder => {
        builder
            .addCase(getUser.pending, (state, action) => {
                state.status = 'loding'
            })

            .addCase(getUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.userObject = action.payload
                state.error = null
            })

            .addCase(getUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })
    }
})

export const removeUser = () => {
    return dispatch => {
        dispatch(remove())
    }
}

export const updatingUser = (values) => {
    return dispatch => {
        dispatch(update(values))
    }
}
const { remove, update } = userSlice.actions
export default userSlice.reducer
