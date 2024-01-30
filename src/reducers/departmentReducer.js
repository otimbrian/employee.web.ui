import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import departmentService from '../services/departmentService'

// Redux thunk to get all department.
export const initilizeDepartment = createAsyncThunk(
    'department/getAll',
    async ({ rejectWithValue }) => {
        try {
            const data = await departmentService.getAlldepartment()
            return data
        } catch (exception) {
            return rejectWithValue(exception.response.data)
        }
    }
)

// Redux thunk for creating an Department.
export const createDepartment = createAsyncThunk(
    'department/create',
    async (departmentObject, { rejectWithValue }) => {
        try {
            const data = await departmentService.createDepartment(departmentObject)
            return data
        } catch (exception) {
            return rejectWithValue(exception.response.data)
        }
    }
)

// Redux thunk for deleting an Department.
export const deleteDepartment = createAsyncThunk(
    'department/delete',
    async (departmentId, { rejectWithValue }) => {
        try {
            const data = await departmentService.deleteDepartmentUsingId(departmentId)
            return data
        } catch (exception) {
            return rejectWithValue(exception.response.data)
        }
    }
)

// Redux thunk for updating an Department
export const updateDepartment = createAsyncThunk(
    'department/update',
    async (departmentId, departmentObject, { rejectWithValue }) => {
        try {
            const data = await departmentService.updateDepartmentUsingId(
                departmentId,
                departmentObject
            )
            return data
        } catch (exception) {
            return rejectWithValue(exception.response.data)
        }
    }
)
const initialState = {
    department: [],
    status: 'uninitialized',
    error: null
}

const departmentSlice = createSlice({
    name: 'Department',
    initialState,

    // Basic reducers.
    reducers: {
        remove(state, action) {
            return state.department.filter(employee => {
                return employee.id !== action.payload
            })
        }
    },
    // Extra createAsyncThunk reducers
    // Go here.
    extraReducers: builder => {
        builder

            .addCase(initilizeDepartment.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.department.push(action.payload)
            })

            .addCase(initilizeDepartment.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })

        builder

            .addCase(createDepartment.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.department.push(action.payload)
            })

            .addCase(createDepartment.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })

        builder

            .addCase(deleteDepartment.fulfilled, (state, action) => {
                state.status = 'succeeded'
                //todo <----- remove the DepartmentId from the database.
                // state.department.push(action.payload)
            })

            .addCase(deleteDepartment.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })
        builder

            .addCase(updateDepartment.fulfilled, (state, action) => {
                state.status = 'succeeded'
                return state.department.map(Department => {
                    return Department.id !== action.payload.id
                        ? Department
                        : action.payload
                })
            })

            .addCase(updateDepartment.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })
    }
})

export const removeDepartment = id => {
    return async dispatch => {
        dispatch(remove(id))
    }
}

export default departmentSlice.reducer
const { remove } = departmentSlice.actions
