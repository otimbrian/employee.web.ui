
// Base server url.
export const baseUrl = "http://localhost:3001/api"

// Setting the token.
export let userToken = null

const setUserToken = (newUserToken) => {
    userToken = `bearer ${newUserToken}`
}


export const employeeLocalStorage = {
    TOKEN: "USER_TOKEN",
    addToLocalStorage: (name, value) => {
        localStorage.setItem(name, JSON.stringify(value))
    },

    removeFromLocalStorage: (name) => {
        window !== undefined
            ? localStorage.removeItem(name)
            : console.log("Not removed");
    },

    getFromLocalStorge: (name) => {
        return window !== undefined
            ? localStorage.getItem(name)
            : null
    }
}
export default setUserToken