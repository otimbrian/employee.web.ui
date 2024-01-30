import userReducer from './reducers/userReducer'
import { configureStore } from '@reduxjs/toolkit'
import userTokenReducer from './reducers/userReducer'
import employeeReducer from './reducers/employeeReducer'
import departmentReducer from './reducers/departmentReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
    reducer: {
        user: userReducer,
        token: userTokenReducer,
        employees: employeeReducer,
        deprtments: departmentReducer,
        notification: notificationReducer
    }
})

export default store
