
// Base server url.
export const baseUrl = "http://localhost:3001/api"

// Setting the token.
export let userToken = null

const setUserToken = (newUserToken) => {
    userToken = `Bearer ${newUserToken}`
}

// Sets the tokeb in the header and returns it as
// a header object.
export const getHeader = (token) => {
    return {
        Authorization: token
    }
}


export const employeeLocalStorage = {
    NAME: "USER_TOKEN",
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
            ? JSON.parse(localStorage.getItem(name))
            : null
    }
}
export default setUserToken