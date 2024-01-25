
import deepFreeze from "deep-freeze";
import notificationReducer from "./notificationReducer";


describe('Notification Reducer', () => {
    test('Should return a proper state', () => {
        const state = {
            messagae: undefined,
            status: null
        }

        const action = {
            type: "notification/postNotification",
            payload: {
                messagae: "Hello",
                status: "Error"
            }
        }

        deepFreeze(state)
        const newState = notificationReducer(state, action)
        expect(newState).toEqual(action.payload)

        const removedState = notificationReducer({}, {
            type: "notification/removeNotification"
        })
        expect(removedState).toEqual(state)
    })
})