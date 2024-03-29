import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import departmentService from '../services/departmentService'

// Redux thunk to get all department.
export const initializeDepartment = createAsyncThunk(
    'department/getAll',
    async (_x, { rejectWithValue }) => {
        try {
            const data = await departmentService.getAllDepartments()
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
            await departmentService.deleteDepartmentUsingId(departmentId)
            return {id: departmentId}
        } catch (exception) {
            return rejectWithValue(exception.response.data)
        }
    }
)

// Redux thunk for updating an Department
export const updateDepartment = createAsyncThunk(
    'department/update',
    async (params, { rejectWithValue }) => {
        try {
            const data = await departmentService.updateDepartmentUsingId(
                params.departmentId,
                params.departmentObject
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

            .addCase(initializeDepartment.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.department = action.payload
            })

            .addCase(initializeDepartment.rejected, (state, action) => {
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
                console.log("Action Payload ------>",JSON.stringify(action.payload))
                state.status = 'succeeded'
                state.department = state.department.filter(
                    d => d.id !== action.payload.id
                )
            })

            .addCase(deleteDepartment.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })
        builder

            .addCase(updateDepartment.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.department = state.department.map(Department => {
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
