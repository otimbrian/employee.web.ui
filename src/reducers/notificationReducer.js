import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: null,
    message: undefined
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        postNotification(state, action) {
            return action.payload
        },
        removeNotification(state, action) {
            state.message = undefined
            state.status = null
        }
    }
})

export const showNotification = content => {
    return dispatch => {
        dispatch(postNotification(content))
    }
}

export const disableNotification = () => {
    return dispatch => {
        dispatch(removeNotification())
    }
}

export const { postNotification, removeNotification } =
    notificationSlice.actions
export default notificationSlice.reducer
