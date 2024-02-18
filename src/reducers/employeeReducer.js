import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import employeeService from '../services/employeeService'

// Redux thunk to get all employees.
export const initializeEmployees = createAsyncThunk(
    'employee/getAll',
    async () => {
        // try {
        const data = await employeeService.getAllEmployees()
        return data
        // } catch (exception) {
        //     return rejectWithValue(exception.response.data)
        // }
    }
)

// Redux thunk for creating an employee.
export const createEmployee = createAsyncThunk(
    'employee/create',
    async (employeeObject, { rejectWithValue }) => {
        try {
            const data = await employeeService.createEmployee(employeeObject)
            return data
        } catch (exception) {
            return rejectWithValue(exception.response.data)
        }
    }
)

// Redux thunk for deleting an employee.
export const deleteEmployee = createAsyncThunk(
    'employee/delete',
    async (employeeId, { rejectWithValue }) => {
        try {
            const data = await employeeService.deleteEmployeeUsingId(employeeId)
            return data
        } catch (exception) {
            return rejectWithValue(exception.response.data)
        }
    }
)

// Redux thunk for updating an employee
export const updateEmployee = createAsyncThunk(
    'employee/update',
    async (requestParam, { rejectWithValue }) => {
        try {
            const data = await employeeService.updateEmployeeUsingId(
                requestParam.employeeId,
                requestParam.employeeObject
            )
            return data
        } catch (exception) {
            return rejectWithValue(exception.response.data)
        }
    }
)

export const changeEmployeePassword = createAsyncThunk(
    'employee/changePassword',
    async (passwordObject, { rejectWithValue }) => {
        try {
            const data = await employeeService.changeUserPassword(passwordObject)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
const initialState = {
    employees: [],
    status: 'uninitialized',
    error: null
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState,

    // Basic reducers.
    reducers: {
        remove(state, action) {
            return state.employees.filter(employee => {
                return employee.id !== action.payload
            })
        }
    },
    // Extra createAsyncThunk reducers
    // Go here.
    extraReducers: builder => {
        builder
            .addCase(initializeEmployees.pending, (state, action) => {
                state.status = 'loading...'
            })
            .addCase(initializeEmployees.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.employees = action.payload
            })
            .addCase(initializeEmployees.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })

        builder
            .addCase(createEmployee.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.employees.push(action.payload)
            })
            .addCase(createEmployee.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })

        builder
            .addCase(deleteEmployee.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.employees = state.employees.filter(
                    employee => employee.id !== action.payload.id
                )
            })
            .addCase(deleteEmployee.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })
        builder
            .addCase(updateEmployee.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.employees = state.employees.map(employee => {
                    return employee.id !== action.payload.id ? employee : action.payload
                })
            })
            .addCase(updateEmployee.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })
        builder
            .addCase(changeEmployeePassword.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.employees = state.employees.map(employee =>
                    employee.id !== action.payload.id ? employee : action.payload
                )
            })
            .addCase(changeEmployeePassword.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })
    }
})

export const removeEmployee = id => {
    return dispatch => {
        dispatch(remove(id))
    }
}

export default employeeSlice.reducer
const { remove } = employeeSlice.actions
