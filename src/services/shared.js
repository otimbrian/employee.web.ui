
// Base server url.
export const baseUrl = "http://localhost:3001/api"

// Setting the token.
export let userToken = null

const setUserToken = (newUserToken) => {
    userToken = `bearer ${newUserToken}`
}

export default setUserToken