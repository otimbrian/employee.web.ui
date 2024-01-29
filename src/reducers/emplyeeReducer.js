
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import employeeService from '../services/employeeService'


// Redux thunk to get all employees.
export const initilizeEmployees = createAsyncThunk('employee/getAll', async ({ rejectWithValue }) => {
    try {
        const data = await employeeService.getAllEmployees()
        return data
    } catch (exception) {
        return rejectWithValue(exception.response.data)
    }
})

// Redux thunk for creating an employee.
export const createEmployee = createAsyncThunk('employee/create', async (employeeObject, { rejectWithValue }) => {
    try {
        const data = await employeeService.createEmployee(employeeObject)
        return data
    } catch (exception) {
        return rejectWithValue(exception.response.data)
    }
})

// Redux thunk fro deleting an employee.
export const deleteEmployee = createAsyncThunk('employee/delete', async (employeeId, { rejectWithValue }) => {
    try {
        const data = await employeeService.deleteEmployeeUsingId(employeeId)
        return data
    } catch (exception) {
        return rejectWithValue(exception.response.data)
    }
})
const initialState = {
    employees: [],
    status: "uninitialized",
    error: null
}

const employeeSlice = createSlice(
    {
        name: 'employee',
        initialState,

        // Basic reducers.
        reducers: {

        },
        // Extra createAsyncThunk reducers
        // Go here.
        extraReducers: (builder) => {
            builder


                .addCase(initilizeEmployees.fulfilled, (state, action) => {
                    state.status = 'succeeded'
                    state.employees.push(action.payload)
                })

                .addCase(initilizeEmployees.rejected, (state, action) => {
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
                    state.employees.push(action.payload)
                })

                .addCase(deleteEmployee.rejected, (state, action) => {
                    state.status = 'failed'
                    state.error = action.error
                })
        }
    }
)

export default employeeSlice.reducer