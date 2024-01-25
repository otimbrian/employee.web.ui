import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: null,
    message: undefined
}

const notificationSlice = createSlice(
    {
        name: 'notification',
        initialState,
        reducers: {
            postNotification(state, action) {
                return action.payload
            },
            removeNotification(state, action) {
                return initialState
            }
        }
    }
)

export const showNotification = (content) => {
    return dispatch => {
        dispatch(postNotification(content))
        setTimeout(
            () => {
                dispatch(removeNotification())
            }
        )
    }
}

export const {postNotification, removeNotification} = notificationSlice.actions
export default notificationSlice.reducer