import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationReducer'
import userTokenReducer from './reducers/userReducer'
import userReducer from './reducers/userReducer'

const store = configureStore({
    reducer: {
        notification: notificationReducer,
        token: userTokenReducer,
        user: userReducer
    }
})

export default store
